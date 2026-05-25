<!--
/*
 * File: app.vue
 * Project: www
 * Created Date: 2026-04-14 18:25:13
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-25 22:58:11
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
    <div class="fixed inset-0 content-clip" id="left-content">
        <div ref="scrollContainer" class="h-full overflow-y-auto scroll-smooth">
            <IntroductionSection />

            <SoftwareSection />

            <SysAdminSection />

            <MusicSection />
        </div>
    </div>


    <!-- Squiggly Divider Line -->
    <!-- TODO -->


    <!-- Footer -->
    <footer class="fixed z-20 text-nowrap bottom-0 pb-2 px-2.5 dark:text-text-dark select-none duration-500 transition-all">
        <!-- Go Up Button -->
        <a class="fixed right-5 bottom-5 custom-button-icon-only rounded-4xl!" href="#intro">
            <PhArrowUp class="size-7 p-1 fill-text-light dark:fill-text-dark" />
        </a>

        <!-- Project Details -->
        <div class="flex flex-col text-sm left-0 group opacity-50">
            www v{{ packagejson.version }}

            <a class="flex w-fit items-center mt-0.5 -ml-1 rounded-xl px-2 text-gray-100 bg-gray-600 hover:bg-gray-400 hover:transition-all" href="http://github.com/3urobeat/www" target="_blank">
                <!-- GitHub logo -->
                <svg class="mr-1" width="1em" height="1em" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                </svg>

                <span class="text-white rounded-lg text-xm" href="https://github.com/wardrobe-hq/wardrobe" target="_blank">Source Code</span>
            </a>

            <!-- Becomes visible on group hover -->
            <div class="h-0 opacity-0 group-hover:h-5 group-hover:opacity-100 duration-500 transition-all">
                <p>Copyright (c) 2026 <a class="underline hover:text-gray-500" href="https://github.com/3urobeat" target="_blank">3urobeat</a></p>
            </div>
        </div>
    </footer>

</template>


<script setup lang="ts">
    import SoftwareSection from "./components/sections/SoftwareSection.vue";
    import SysAdminSection from "./components/sections/SysAdminSection.vue";
    import MusicSection from "./components/sections/MusicSection.vue";
    import packagejson from "../package.json";
    import IntroductionSection from "./components/sections/IntroductionSection.vue";
    import { PhArrowUp } from "@phosphor-icons/vue";

</script>
