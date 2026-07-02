<!--
/*
 * File: ThreedModelViewer.vue
 * Project: www
 * Created Date: 2026-01-31 17:03:57
 * Author: 3urobeat
 *
 * Last Modified: 2026-07-02 17:41:50
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
-->


<!--
    3D Model Viewer using threeJs borrowed from my project wardrobe: https://github.com/wardrobe-hq/wardrobe/blob/main/src/app/utils/storage.ts
-->


<template>

    <div ref="parentContainer" class="relative h-full w-full">
        <!-- Renderer Canvas Container -->
        <div
            ref="canvasContainer"
            id="3d-model-viewer-container"
            class="cursor-grab"
            @mousedown="rendererOnMouseDown"
            @touchstart="rendererOnTouchDown"
        >                   <!-- absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -->
        </div>

        <!-- Auto Spin toggle -->
        <button class="absolute right-0 top-0 m-4 flex items-center rounded-xl shadow-md hover:shadow-lg custom-glass-pill gap-3 p-2 justify-center transition-all duration-300" :class="autoRotationEnabled ? 'bg-green-500/50!' : ''"
            title="Toggle Auto Rotation" @click="autoRotationEnabled = !autoRotationEnabled"
        >
            <PhArrowCounterClockwise class="ml-0.25 size-5" />
        </button>

        <!-- Indicator that canvas is rotatable -->
        <!-- <div class="absolute flex justify-between bottom-1/8 w-full">
            <PhCaretLeft class="custom-label-icon-only size-7 ml-4 sm:ml-12"></PhCaretLeft>
            <PhCaretRight class="custom-label-icon-only size-7 mr-4 sm:mr-12"></PhCaretRight>
        </div> -->
    </div>

</template>


<script setup lang="ts">
    import { PhArrowCounterClockwise } from "@phosphor-icons/vue";
    import * as threeJs from "three";
    import { GLTFLoader, type GLTF } from "three-stdlib";
    import { onMounted, ref, type Ref } from "vue";


    // Refs
    const autoRotationEnabled                            = ref(false);
    const parentContainer: Ref<HTMLDivElement|undefined> = ref();
    const canvasContainer: Ref<HTMLDivElement|undefined> = ref();

    let scene:      threeJs.Scene<threeJs.Object3DEventMap>;
    let camera:     threeJs.PerspectiveCamera;
    let renderer:   threeJs.WebGLRenderer;
    let loader:     GLTFLoader;
    let model:      GLTF;                           // Stores currently loaded GLTF model
    let boundingBox         = new threeJs.Box3();   // Stores bounds/sizes (X, Y, Z) of currently loaded model (in meters)
    let rendererIsMouseDown = false;
    let rendererMouseX      = 0;
    let rendererMouseY      = 0;

    const cameraPadding = 1;


    // Updates size of renderer if container got resized
    function setRendererSize() {
        try {

            const width  = parentContainer.value!.clientWidth;
            const height = parentContainer.value!.clientHeight;

            if (renderer.domElement.width != width || renderer.domElement.height != height) {
                // Update camera to prevent model distorting or clipping out of bounds
                camera.aspect = width / height;
                fitCameraToCenteredObject();

                renderer.setSize(width, height, false);
                renderer.render(scene, camera);
            }

        } catch(err) {
            console.error("Failed to set threeJs renderer size: " + err);
            throw err;
        }
    }


    // Updates camera so that model never clips outside of container's bounds - Massive credit to: https://wejn.org/2020/12/cracking-the-threejs-object-fitting-nut/
    function fitCameraToCenteredObject() {
        let size = new threeJs.Vector3();
        boundingBox.getSize(size);

        // figure out how to fit the box in the view:
        // 1. figure out horizontal FOV (on non-1.0 aspects)
        // 2. figure out distance from the object in X and Y planes
        // 3. select the max distance (to fit both sides in)
        //
        // The reason is as follows:
        //
        // Imagine a bounding box (BB) is centered at (0,0,0).
        // Camera has vertical FOV (camera.fov) and horizontal FOV
        // (camera.fov scaled by aspect, see fovh below)
        //
        // Therefore if you want to put the entire object into the field of view,
        // you have to compute the distance as: z/2 (half of Z size of the BB
        // protruding towards us) plus for both X and Y size of BB you have to
        // figure out the distance created by the appropriate FOV.
        //
        // The FOV is always a triangle:
        //
        //  (size/2)
        // +--------+
        // |       /
        // |      /
        // |     /
        // | F° /
        // |   /
        // |  /
        // | /
        // |/
        //
        // F° is half of respective FOV, so to compute the distance (the length
        // of the straight line) one has to: `size/2 / Math.tan(F)`.
        //
        // FTR, from https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
        // the camera.fov is the vertical FOV.

        const fov = camera.fov * (Math.PI / 180);
        const fovh = 2 * Math.atan(Math.tan(fov / 2) * camera.aspect);
        let dx = size.z / 2 + Math.abs(size.x / 2 / Math.tan( fovh / 2 ));
        let dy = size.z / 2 + Math.abs(size.y / 2 / Math.tan( fov / 2 ));
        let cameraZ = Math.max(dx, dy);

        // offset the camera, if desired (to avoid filling the whole canvas)
        if (cameraPadding) cameraZ *= cameraPadding;

        camera.position.z = cameraZ;

        // set the far plane of the camera so that it easily encompasses the whole object
        const minZ = boundingBox.min.z;
        const cameraToFarEdge = ( minZ < 0 ) ? -minZ + cameraZ : cameraZ - minZ;

        camera.far = cameraToFarEdge * 3;
        camera.updateProjectionMatrix();
    };


    function initRenderer() {
        try {

            // Create a new threeJs renderer
            scene    = new threeJs.Scene();
            camera   = new threeJs.PerspectiveCamera();
            renderer = new threeJs.WebGLRenderer({ antialias: true, alpha: true });

            // Give renderer a transparent background
            renderer.setClearColor(0x000000, 0);

            // Apply renderer to container div
            canvasContainer.value!.appendChild(renderer.domElement);

            // Create some light so the model is viewable
            const light = new threeJs.HemisphereLight(0xffffff, undefined, 1.5);
            light.position.y = 5;
            light.position.z = 5;
            light.position.x = 5;
            scene.add(light);

        } catch(err) {
            console.error("Failed to init threeJs renderer: " + err);
            throw err;
        }
    }


    async function loadModel(path: string) {
        try {

            // Load the mannequin model
            loader = new GLTFLoader();
            model = await loader.loadAsync(path);

            // Get size of model
            boundingBox.setFromObject(model.scene);

            // Set default rotation
            rotateModel(props.yRotationDefault, props.xRotationDefault);

            // Add model to scene
            scene.add(model.scene);

            // Set camera position based on model size
            camera.position.y = boundingBox.max.y / 2;

        } catch(err) {
            console.error("Failed to load threeJs model: " + err);
            throw err;
        }
    }


    // Functions for handling model rotation using mouse - Credit: https://stackoverflow.com/a/19589151
    function rendererOnMouseMove(evt: MouseEvent) {
        if (!rendererIsMouseDown) {
            return;
        }

        evt.preventDefault();

        // Calculate delta between last known position and now, refresh last known position and render change
        let deltaX = evt.clientX - rendererMouseX;
        let deltaY = evt.clientY - rendererMouseY;
        rendererMouseX = evt.clientX;
        rendererMouseY = evt.clientY;

        rotateModel(deltaX, deltaY);
    }

    function rendererOnTouchMove(evt: TouchEvent) {
        if (!rendererIsMouseDown) {
            return;
        }

        evt.preventDefault();

        // Calculate delta between last known position and now, refresh last known position and render change
        if (evt.changedTouches[0]) {
            let deltaX = evt.changedTouches[0].clientX - rendererMouseX;
            let deltaY = evt.changedTouches[0].clientY - rendererMouseY;
            rendererMouseX = evt.changedTouches[0].clientX;
            rendererMouseY = evt.changedTouches[0].clientY;

            rotateModel(deltaX, deltaY);
        }
    }

    function rendererOnMouseDown(evt: MouseEvent) {
        evt.preventDefault();
        rendererIsMouseDown = true;

        // Set starting position to calculate delta on mouseMove
        rendererMouseX = evt.clientX;
        rendererMouseY = evt.clientY;

        document.addEventListener('mousemove', rendererOnMouseMove);
        document.addEventListener('mouseup', rendererOnMouseUp);
    }

    function rendererOnTouchDown(evt: TouchEvent) {
        evt.preventDefault();
        rendererIsMouseDown = true;

        // Set starting position to calculate delta on mouseMove
        if (evt.touches[0]) {
            rendererMouseX = evt.touches[0].clientX;
            rendererMouseY = evt.touches[0].clientY;
        }

        document.addEventListener('touchmove', rendererOnTouchMove);
        document.addEventListener('touchend', rendererOnMouseUp);
        document.addEventListener('touchcancel', rendererOnMouseUp);
    }

    function rendererOnMouseUp(evt: MouseEvent | TouchEvent) {
        evt.preventDefault();
        rendererIsMouseDown = false;

        document.removeEventListener('mousemove', rendererOnMouseMove);
        document.removeEventListener('mouseup', rendererOnMouseUp);
        document.removeEventListener('touchmove', rendererOnTouchMove);
        document.removeEventListener('touchend', rendererOnMouseUp);
        document.removeEventListener('touchcancel', rendererOnMouseUp);
    }


    // Rotates model
    function rotateModel(deltaX: number, deltaY: number, ratio: number = 100) {
        if (model && model.scene) {
            model.scene.rotation.y += deltaX / ratio;
            model.scene.rotation.x += deltaY / ratio; // TODO: Can we detect full model rotation and reset values to 0?

            // Limit rotation if desired
            if (props.yRotationLimit != null && Math.abs(model.scene.rotation.y) > props.yRotationLimit) { // Check must ignore sign (positive/negative)
                model.scene.rotation.y = props.yRotationLimit * Math.sign(model.scene.rotation.y);         // Restore sign to limit in both directions
            }

            if (props.xRotationLimit != null && Math.abs(model.scene.rotation.x) > props.xRotationLimit) {
                model.scene.rotation.x = props.xRotationLimit * Math.sign(model.scene.rotation.x);
            }

            // Render rotation
            renderer.render(scene, camera);
        }
    }


    // Setup - Client Side only
    onMounted(async () => {
        try {
            // Setup renderer, load model and scale renderer to model dimensions
            initRenderer();
            await loadModel(props.modelUrl);
            setRendererSize();

            // Animate!
            const animate = () => {
                // Abort if container does not exist (e.g. on page switch)
                if (canvasContainer.value != null) {
                    setRendererSize();   // Check if container got resized
                    requestAnimationFrame(animate);

                    if (autoRotationEnabled.value) {
                        rotateModel(1, 0); // Constantly rotate model
                    }
                }
            };

            renderer.render(scene, camera);
            animate();
        } catch(err) {
            console.error("Failed to setup preview viewer: " + err);
        }
    });


    // Define Props to be accepted by this component
    const props = defineProps({
        modelUrl: {
            type: String,
            required: true
        },
        yRotationDefault: {
            default: 0,
            type: Number,
            required: false
        },
        xRotationDefault: {
            default: 0,
            type: Number,
            required: false
        },
        yRotationLimit: {
            default: null,
            type: Number,
            required: false
        },
        xRotationLimit: {
            default: null,
            type: Number,
            required: false
        },
    });

    // Define stuff that can be accessed by the page
    defineExpose({ });

</script>
