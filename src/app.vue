<!--
/*
 * File: app.vue
 * Project: www
 * Created Date: 2026-04-14 18:25:13
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-28 17:30:17
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
        <div class="fixed inset-0 z-10 content-clip bg-bg-light dark:bg-bg-dark" id="left-content">
            <div ref="scrollContainer" class="h-full overflow-y-auto scroll-smooth">
                <IntroductionSection />

                <SoftwareSection />

                <SysAdminSection />

                <MusicSection />
            </div>
        </div>


        <!-- Squiggly Divider Line -->
        <!-- TODO -->
    </main>


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
                <span class="mr-1 size-[1em] logo-github" aria-hidden="true" />

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
    import TitleBar from "./components/TitleBar.vue";

</script>
