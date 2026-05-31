<!--
/*
 * File: Accordion.vue
 * Project: www
 * Created Date: 2026-05-28 17:11:32
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-31 12:59:58
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
-->


<!-- Heavily modified image Accordion from https://freefrontend.com/tailwind-accordions/ - https://codepen.io/numerical/pen/MWpZwxB -->


<template>

    <div class="flex flex-col grow sm:flex-row sm:h-72 items-stretch max-w-2xl sm:min-w-md sm:overflow-hidden w-full">

        <div
            v-for="(thisCard, index) in cards"
            :key="thisCard.title"
            class="cursor-pointer duration-500 ease-in-out grow m-2 min-h-14 sm:min-w-14 shadow-md overflow-hidden pane relative rounded-3xl transition-all"
            :class="index == activePaneIndex ? 'active' : ''"
            @click="activePaneIndex = index"
        >
            <!-- Background & Fade -->
            <div
                class="absolute bg-center bg-cover bg-yellow-img bg-no-repeat inset-0 scale-105 opacity-50 z-10"
                :class="thisCard.color"
            ></div>
            <div class="absolute bg-linear-to-b bottom-0 duration-500 ease-in-out from-transparent h-1/2 inset-x-0 to-black transform translate-y-1/2 z-20"></div>

            <!-- Elements -->
            <div class="absolute bottom-0 duration-500 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 z-30">

                <!-- Icon -->
                <div
                    class="bg-black! flex h-10 icon items-center justify-center mr-3 rounded-full w-10"
                    :class="thisCard.color"
                >
                    <PhAcorn />
                </div>

                <!-- Text Content -->
                <div class="content flex flex-col justify-center leading-tight text-sm text-white whitespace-pre">
                    <div class="font-bold">{{ thisCard.title }}</div>
                    <div class="delay-100">{{ thisCard.description }}</div>
                </div>

            </div>
        </div>

    </div>

</template>


<style lang="css">

    .pane.active {
        flex-grow: 10;
        max-width: 100%;
        min-height: 7rem;

        .background {
            scale: 1.25 1.25;
        }

        .label {
            @media (min-width: 640px) {
                translate: 0.5rem 0;
            }

            .content > * {
                opacity: 1;
                translate: 0;
            }
        }

        .shadow {
            opacity: 0.75;
            translate: 0;
        }
    }

</style>


<script setup lang="ts">
    import { PhAcorn } from '@phosphor-icons/vue';
    import { ref, type PropType } from 'vue';
    import type { AccordionCard } from '../types/accordion';

    // Ref
    let activePaneIndex = ref(0);

    // Properties accepted by component
    const props = defineProps({
        cards: {
            type: Array as PropType<AccordionCard[]>,
            required: true
        }
    });

</script>
