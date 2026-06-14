<!--
/*
 * File: Footer.vue
 * Project: www
 * Created Date: 2026-05-31 11:11:37
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-14 18:03:57
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

    <!-- Go Up Button -->
    <a class="fixed right-5 bottom-5 custom-glass-pill p-1 rounded-4xl! text-bg-light hover:text-bg-input-hover-light transition-all" href="#intro" aria-label="Back to top">
        <PhArrowUp class="size-7 p-1" />
    </a>

    <!-- Project Details -->
    <div class="custom-glass-pill rounded-2xl px-3 py-1.5">
        <div class="flex flex-col text-sm group text-text-muted duration-500 transition-all">
            www v{{ packagejson.version }}

            <a class="flex w-fit items-center mt-0.5 -ml-1 rounded-xl px-2 text-gray-100 bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 transition-all" href="http://github.com/3urobeat/www" target="_blank" rel="noopener noreferrer" aria-label="Source Code (opens in new tab)">
                <!-- GitHub logo -->
                <span class="mr-1 size-[1em] logo-github" aria-hidden="true" />

                <span class="text-white bg-white/0! rounded-lg text-xm">Source Code</span>
            </a>

            <!-- Becomes visible on hover or focus -->
            <div class="w-0 group-hover:w-60 group-focus-within:w-60 h-0 group-hover:h-5 group-focus-within:h-5 duration-500 transition-all overflow-clip">
                <p>Copyright (c) 2026 <a class="underline hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-accent" href="https://github.com/3urobeat" target="_blank" rel="noopener noreferrer">3urobeat</a></p>
            </div>
        </div>
    </div>

</template>


<script setup lang="ts">
    import packagejson from "../../package.json";
    import { PhArrowUp } from "@phosphor-icons/vue";

</script>
