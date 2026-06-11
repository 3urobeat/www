<!--
/*
 * File: app.vue
 * Project: www
 * Created Date: 2026-04-14 18:25:13
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-11 17:20:52
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
-->


<template>

    <header id="titlebar" class="z-50">
        <TitleBar />
    </header>


    <main>
        <!-- Left Side - Page Content -->
        <div class="fixed inset-0 z-10" id="left-content">
            <div ref="scrollContainer" class="h-full overflow-y-auto scroll-smooth">
                <IntroductionSection />

                <SoftwareSection />

                <SysAdminSection />

                <MusicSection />
            </div>
        </div>


        <!-- Squiggly Divider Line -->
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            class="fixed inset-0 w-full h-full pointer-events-none z-20"
            aria-hidden="true"
        >
            <defs>
                <filter id="dividerGlow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <path
                d="M 40,-1 C 45,10 50,20 66.7,33.3 C 75,45 82,60 80,72 C 78,82 90,88 95,101"
                stroke="var(--color-text-muted, #adb5bd)"
                stroke-width="1.5"
                fill="none"
                opacity="0.5"
                filter="url(#dividerGlow)"
            />
        </svg>

        <!-- Squiggly Divider Border. Path follows path above, roughly divided by 100 -->
        <svg aria-hidden="true" class="absolute w-0 h-0 pointer-events-none" id="right-bg">
            <defs>
                <clipPath id="leftClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0 L 0.36,-0.1 C 0.44,0.10 0.50,0.20 0.667,0.333 C 0.75,0.45 0.82,0.60 0.80,0.72 C 0.78,0.82 0.90,0.88 0.95,1.01 L 0,1 Z" />
                </clipPath>
                <!-- Clips for the left side and right side -->
                <clipPath id="rightClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0.36,-0.1 L 1,-0.1 L 1,1.01 L 0.95,1.01 C 0.90,0.88 0.78,0.82 0.80,0.72 C 0.82,0.60 0.75,0.45 0.667,0.333 C 0.50,0.20 0.44,0.10 0.36,-0.1 Z" />
                </clipPath>
            </defs>
        </svg>

        <!-- Right Side Content -->
        <div class="fixed inset-0 z-0 right-clip" id="right-media">
            <MediaPane :current-section="currentSection" />
        </div>
    </main>


    <!-- Footer -->
    <footer class="fixed z-20 text-nowrap bottom-0 pb-2 px-2.5 dark:text-text-dark select-none">
        <Footer />
    </footer>

</template>


<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import SoftwareSection from "./components/sections/SoftwareSection.vue";
    import SysAdminSection from "./components/sections/SysAdminSection.vue";
    import MusicSection from "./components/sections/MusicSection.vue";
    import MediaPane from "./components/MediaPane.vue";
    import IntroductionSection from "./components/sections/IntroductionSection.vue";
    import TitleBar from "./components/TitleBar.vue";
    import Footer from "./components/Footer.vue";


    // Observe which section is currently visible and update media pane
    // Would be cool to reuse the Tailwind intersect plugin as it already has a JS-based intersection observer
    const currentSection  = ref("intro");
    const scrollContainer = ref<HTMLElement | null>(null);
    const sectionIds      = ["intro", "software", "sysadmin", "music"];

    onMounted(() => {
        const el = scrollContainer.value;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        // console.log("Section Entry: " + entry.target.id)
                        currentSection.value = entry.target.id;
                    }
                }
            }
        );

        for (const id of sectionIds) {
            const target = el.querySelector(`#${id}`);
            if (target) observer.observe(target);
        }
    });

</script>
