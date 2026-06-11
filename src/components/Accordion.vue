<!--
/*
 * File: Accordion.vue
 * Project: www
 * Created Date: 2026-05-28 17:11:32
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-11 17:21:53
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
            class="cursor-pointer duration-500 ease-out grow group m-2 min-h-14 sm:min-w-14 shadow-md overflow-hidden pane relative rounded-3xl transition-all"
            :class="index == activePaneIndex ? 'active' : ''"
            @click="handleCardClick(index)"
        >
            <!-- Background -->
            <div
                class="absolute background bg-center bg-cover bg-yellow-img bg-no-repeat inset-0 scale-105 z-10 duration-300 group-hover:brightness-85"
                :class="thisCard.color"
            >
                <img v-if="thisCard.bgImgUrl" :src="thisCard.bgImgUrl" class="shrink-0 min-h-full object-cover" />
            </div>
            <div class="absolute h-full bg-linear-to-b bottom-0 ease-in-out from-transparent to-black inset-x-0 transform translate-y-1/2 z-20"></div>

            <!-- Content -->
            <div class="absolute bottom-0 flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 z-30 duration-500">

                <!-- Icon -->
                <div
                    class="bg-black! flex h-10 text-2xl icon items-center justify-center mr-3 rounded-full w-10"
                    :class="thisCard.color"
                >
                    <!-- There's no switch case :') -->
                    <PhCoatHanger v-if="thisCard.icon == AccordionIcon.COAT_HANGER" />
                    <PhRobot      v-else-if="thisCard.icon == AccordionIcon.ROBOT"  />
                    <PhBooks      v-else-if="thisCard.icon == AccordionIcon.BOOKS"  />
                    <PhCpu        v-else-if="thisCard.icon == AccordionIcon.CPU"    />
                    <PhLinuxLogo  v-else-if="thisCard.icon == AccordionIcon.LINUX_LOGO" />
                    <PhBrowsers   v-else-if="thisCard.icon == AccordionIcon.BROWSERS"   />
                    <PhMusicNotesSimple v-else-if="thisCard.icon == AccordionIcon.MUSIC_NOTES_SIMPLE" />
                    <PhPianoKeys  v-else-if="thisCard.icon == AccordionIcon.PIANO_KEYS" />
                    <PhDiscoBall  v-else-if="thisCard.icon == AccordionIcon.DISCO_BALL" />
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
    import { PhBooks, PhBrowsers, PhCoatHanger, PhCpu, PhDiscoBall, PhLinuxLogo, PhMusicNotesSimple, PhPianoKeys, PhRobot } from '@phosphor-icons/vue';
    import { ref, type PropType } from 'vue';
    import { AccordionIcon, type AccordionCard } from '../types/accordion';

    // Ref
    let activePaneIndex = ref(0);

    // Properties accepted by component
    const props = defineProps({
        cards: {
            type: Array as PropType<AccordionCard[]>,
            required: true
        }
    });

    // Handles click on card by setting active card index and navigate to clickUrl if already active
    function handleCardClick(index: number) {
        const card = props.cards[index];

        if (activePaneIndex.value === index) {
            if (card.clickUrl) {
                window.open(card.clickUrl, '_blank', 'noopener');
            }
        } else {
            activePaneIndex.value = index;
        }
    }

</script>
