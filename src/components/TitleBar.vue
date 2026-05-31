<!--
/*
 * File: TitleBar.vue
 * Project: www
 * Created Date: 2026-05-25 22:28:19
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-31 12:06:22
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

    <!-- TODO: Pill Shape -->
    <div class="fixed right-4 top-4 p-1 custom-glass-pill rounded-2xl flex items-center justify-center select-none text-bg-light divide-border-secondary-light dark:divide-border-secondary-dark divide-x z-30">
        <!-- TODO: Linktree hyperlink button -->
        <a
            class="flex px-1.5 py-0.5 hover:text-bg-input-hover-light hover:transition-all"
            href=""
        >
            <PhLink class="size-5.5 transition-opacity" />
        </a>

        <!-- Light/Dark Mode toggle -->
        <button
            class="w-9 px-1.5 py-0.5 hover:text-bg-input-hover-light hover:transition-all"
            @click="toggleDarkMode()"
        >
            <PhMoon class="hidden dark:block size-5.5 transition-opacity" />
            <PhSun class="block dark:hidden size-5.5 transition-opacity" />
        </button>
    </div>

</template>


<script setup lang="ts">
    import { PhLink, PhMoon, PhSun } from '@phosphor-icons/vue';
    import { setUXSetting } from '../utils/storage';


    // Toggles dark mode
    function toggleDarkMode() {
        const isDark = document.documentElement.classList.toggle("dark");
        setUXSetting("darkModeEnabled", isDark);
    }

</script>
