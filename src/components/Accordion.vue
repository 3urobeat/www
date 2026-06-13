<!--
/*
 * File: Accordion.vue
 * Project: www
 * Created Date: 2026-05-28 17:11:32
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-13 16:49:58
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
-->


<!-- *Very* heavily modified image Accordion from https://freefrontend.com/tailwind-accordions/ - https://codepen.io/numerical/pen/MWpZwxB -->


<template>

    <div class="flex flex-col grow sm:flex-row sm:h-72 items-stretch sm:min-w-md sm:overflow-hidden">

        <div
            v-for="(thisCard, index) in cards"
            :key="thisCard.title"
            class="cursor-pointer duration-500 ease-out grow group m-2 min-h-14 sm:min-w-14 shadow-md overflow-hidden pane relative rounded-3xl transition-all"
            :class="index == activePaneIndex ? 'max-w-125' : 'max-w-0'"
            @click="handleCardClick(index)"
        >
            <!-- Background -->
            <div
                class="absolute flex background bg-center bg-no-repeat justify-center items-center inset-0 z-10 group-hover:brightness-85"
                :class="thisCard.color"
            >
                <img v-if="thisCard.bgImgUrl" :src="thisCard.bgImgUrl" class="shrink-0 min-h-full object-cover" />
            </div>
            <div class="absolute h-full bg-linear-to-b bottom-0 ease-in-out from-transparent to-black inset-x-0 transform translate-y-1/2 z-20"></div>

            <!-- Optional Stats Pill -->
            <div
                v-if="thisCard.statsBubbleText"
                class="absolute top-3 right-3 px-2 py-1 bg-black/50 text-text-dark text-sm shadow-md rounded-2xl select-none z-30 transition-opacity duration-500"
                :class="index == activePaneIndex ? 'opacity-100' : 'opacity-0'"
            >
                <!-- Transparent background to counteract span-bg-invert -->
                <span class="text-nowrap bg-white/0!">{{ thisCard.statsBubbleText }}</span>
            </div>

            <!-- Text Content -->
            <div class="absolute bottom-0 flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 z-30 duration-500">

                <!-- Icon -->
                <div
                    class="bg-black! absolute flex w-10 h-10 text-2xl items-center justify-center shadow-md rounded-full shrink-0 bottom-0"
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
                <div
                    class="content flex flex-col ml-13 justify-center text-sm text-white text-shadow-md transition-opacity duration-200"
                    :class="index == activePaneIndex ? 'opacity-100' : 'opacity-0'"
                >
                    <span class="font-bold bg-white/0!">{{ thisCard.title }}</span>
                    <span class="delay-100 bg-white/0!">{{ thisCard.description }}</span>
                    <!-- Transparent background to counteract span-bg-invert -->
                </div>

            </div>
        </div>

    </div>
    <span class="opacity-50 text-xs ml-2">Click on a card to learn more!</span>

</template>


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
