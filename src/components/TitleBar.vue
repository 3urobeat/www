<!--
/*
 * File: TitleBar.vue
 * Project: www
 * Created Date: 2026-05-25 22:28:19
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-14 19:25:50
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

    <div class="fixed flex flex-col-reverse md:flex-row gap-4 right-0 px-4 top-4 z-30 text-bg-light">

        <noscript>
            <p class="text-red-500 border-red-600! items-center rounded-xl shadow-md custom-glass-pill gap-3 px-3 py-1.5">JavaScript is disabled! Functionality is limited.</p>
        </noscript>

        <div class="flex gap-4 right-0 self-end">
            <!-- Contact -->
            <a
                href="mailto:contact@goritz.org"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center rounded-xl shadow-md hover:shadow-lg custom-glass-pill border-2! border-green-700! hover:border-green-500! hover:bg-green-500/30! gap-3 px-3 py-1.5 justify-center transition-all duration-300"
                aria-label="Get in touch (opens in new tab)"
            >
                <PhEnvelopeOpen class="size-5.5 shrink-0" aria-hidden="true" />
                <div>
                    <p class="text-nowrap">Get in touch!</p>
                </div>
            </a>

            <!-- Pill -->
            <div class="custom-glass-pill p-1 rounded-2xl flex items-center justify-center divide-border-secondary-light dark:divide-border-secondary-dark divide-x">
                <a
                    class="flex px-1.5 py-0.5 hover:text-bg-input-hover-light transition-all"
                    href="/linktree"
                    aria-label="Linktree page"
                >
                    <PhLink class="size-5.5" aria-hidden="true" />
                </a>

                <!-- Light/Dark Mode toggle -->
                <button
                    class="w-9 px-1.5 py-0.5 hover:text-bg-input-hover-light transition-all"
                    @click="toggleDarkMode()"
                    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
                    :aria-pressed="isDark"
                >
                    <PhMoon class="hidden dark:block size-5.5" aria-hidden="true" />
                    <PhSun class="block dark:hidden size-5.5" aria-hidden="true" />
                </button>
            </div>
        </div>

    </div>

</template>


<script setup lang="ts">
    import { PhEnvelopeOpen, PhLink, PhMoon, PhSun } from '@phosphor-icons/vue';
    import { setUXSetting } from '../utils/storage';
    import { computed } from 'vue';


    const isDark = computed(() => document.documentElement.classList.contains("dark"));

    // Toggles dark mode
    function toggleDarkMode() {
        const newState = document.documentElement.classList.toggle("dark");
        setUXSetting("darkModeEnabled", newState);
    }

</script>
