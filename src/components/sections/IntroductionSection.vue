<!--
/*
 * File: IntroductionSection.vue
 * Project: www
 * Created Date: 2026-05-23 23:54:31
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-24 21:48:36
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

    <SectionContainer anchor-id="intro">

        <template v-slot:content>
            <div class="flex flex-col lg:flex-row lg:items-center lg:-mt-24 gap-y-10 min-h-screen">

                <!-- Avatar -->
                <div class="order-first lg:order-last size-32 lg:size-50 xl:size-65 rounded-full overflow-hidden shrink-0 ring-2 ring-white/10 shadow-lg">
                    <img
                        src="https://avatars.githubusercontent.com/u/35304405"
                        alt="Avatar"
                        class="object-cover grayscale brightness-75 contrast-125"
                    />
                </div>

                <div class="lg:w-2/3 shrink-0">
                    <!-- Introduction -->
                    <h1 class="flex flex-col gap-2 text-4xl sm:text-5xl xl:text-6xl font-semibold text-shadow-md">
                        <span>Hi, I am </span>
                        <span>
                            <span class="text-gray-400 typing-animation">Tomke</span>, a
                        </span>
                    </h1>

                    <!-- Table of Contents -->
                    <nav class="mt-10 flex flex-col gap-3">
                        <a
                            v-for="link in navLinks"
                            :key="link.id"
                            :href="`#${link.id}`"
                            class="group flex items-center gap-2 text-base sm:text-lg text-text-secondary hover:text-accent transition-colors"
                        >
                            <span class="w-6 h-px bg-text-muted group-hover:w-12 group-hover:bg-accent transition-all duration-300"></span>
                            {{ link.label }}
                        </a>
                    </nav>
                </div>

            </div>
        </template>

    </SectionContainer>

</template>


<script setup lang="ts">
    import SectionContainer from "../SectionContainer.vue";

    const navLinks = [
        { id: "software", label: "Full-Stack Software Developer" },
        { id: "sysadmin", label: "Linux System Admin" },
        { id: "music", label: "Music Producer" },
    ];

</script>
