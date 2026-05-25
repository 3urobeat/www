<!--
/*
 * File: TitleBar.vue
 * Project: www
 * Created Date: 2026-05-25 22:28:19
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-25 22:58:48
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

    <div class="fixed flex items-center z-40 shrink-0 h-15 min-w-screen dark:text-text-dark">

        <!-- TODO: Pill Shape -->
        <div class="fixed h-8 right-3 flex select-none shadow-md rounded-xl bg-bg-field-light dark:bg-bg-field-dark divide-border-secondary-light dark:divide-border-secondary-dark divide-x">
            <!-- TODO: Linktree hyperlink button -->

            <!-- Light/Dark Mode toggle -->
            <button
                class="w-9 px-1.75 py-1 rounded-xl hover:bg-bg-input-hover-light hover:dark:bg-bg-input-hover-dark hover:transition-all"
                @click="toggleDarkMode()"
            >
                <PhMoon class="hidden dark:block size-5.5 transition-opacity" />
                <PhSun class="block dark:hidden size-5.5 transition-opacity" />
            </button>
        </div>

    </div>

</template>


<script setup lang="ts">
    import { PhMoon, PhSun } from '@phosphor-icons/vue';
    import { setUXSetting } from '../utils/storage';


    // Toggles dark mode
    function toggleDarkMode() {
        const isDark = document.documentElement.classList.toggle("dark");
        setUXSetting("darkModeEnabled", isDark);
    }

</script>
