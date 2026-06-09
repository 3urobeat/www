<!--
/*
 * File: MediaPane.vue
 * Project: www
 * Created Date: 2026-05-23 17:31:28
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-09 21:35:22
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
    <div class="relative h-screen w-full overflow-hidden bg-bg-dark">
        <div
            v-for="section in sections"
            :key="section.id"
            class="absolute inset-0 transition-all duration-1000 ease-in-out"
            :class="currentSection === section.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
        >
            <div class="absolute inset-0" :style="{ background: section.bg }"></div>
        </div>
    </div>
</template>


<script setup lang="ts">
    defineProps<{
        currentSection: string;
    }>();

    // Color gradient placeholders
    const sections = [
        {
            id: "intro",
            bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        },
        {
            id: "software",
            bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        },
        {
            id: "sysadmin",
            bg: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)",
        },
        {
            id: "music",
            bg: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
        },
    ];
</script>
