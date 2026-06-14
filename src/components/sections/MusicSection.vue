<!--
/*
 * File: MusicSection.vue
 * Project: www
 * Created Date: 2026-05-23 17:31:22
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-14 17:48:46
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

    <SectionContainer anchor-id="music">

        <template v-slot:title>
            Music Production
        </template>

        <template v-slot:description>

        </template>

        <!-- Profile Links -->
        <template v-slot:links>
            <div class="flex h-fit flex-wrap gap-6">
                <!-- 3urobeat -->
                <div class="custom-external-anchor-multi">
                    <span class="flex items-center gap-2.5 px-3 py-1 w-40 whitespace-nowrap">
                        <PhUser class="size-6 shrink-0" />
                        3urobeat
                    </span>
                    <a
                        href="https://open.spotify.com/artist/6N9JhTJqOCBYHdZAvptJKS"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="Spotify (opens in new tab)"
                    >
                        <PhSpotifyLogo class="size-6 shrink-0" />
                    </a>
                    <a
                        href="https://music.apple.com/us/artist/3urobeat/1764177108"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="Apple Music (opens in new tab)"
                    >
                        <PhAppleLogo class="size-6 shrink-0" />
                    </a>
                    <a
                        href="https://soundcloud.com/3urobeat"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="SoundCloud (opens in new tab)"
                    >
                        <PhSoundcloudLogo class="size-6 shrink-0" />
                    </a>
                </div>
                <!-- Projekt 33 -->
                <div class="custom-external-anchor-multi">
                    <span class="flex items-center gap-2.5 px-3 py-1 w-40 whitespace-nowrap">
                        <PhUser class="size-6 shrink-0" />
                        Projekt 33
                    </span>
                    <span class="flex items-center justify-center px-3 py-2 text-text-muted" title="Coming soon">
                        <PhSpotifyLogo class="size-6 shrink-0" />
                    </span>
                    <span class="flex items-center justify-center px-3 py-2 text-text-muted" title="Coming soon">
                        <PhAppleLogo class="size-6 shrink-0" />
                    </span>
                    <a
                        href="https://soundcloud.com/projekt-33"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="SoundCloud (opens in new tab)"
                    >
                        <PhSoundcloudLogo class="size-6 shrink-0" />
                    </a>
                </div>
            </div>
        </template>

        <template v-slot:content>

            <!-- Introduction -->
            <p>
                When not working on Software, I'm producing music from my home studio.
            </p>
            <p class="mt-2">
                <span>
                    From the
                    <span class="text-text-variable transition-[--count-animation] duration-[2s] ease-out [counter-set:num_var(--count-animation)] supports-counter-set:before:content-[counter(num)] intersect-once intersect:[--count-animation:var(--target)]" no-intersect :style="{ '--target': tracks3urobeatAmount }">
                        <span class="supports-counter-set:sr-only">{{ tracks3urobeatAmount }}</span> Hardstyle Tracks
                    </span>
                    released under
                    <span class="text-text-variable">3urobeat</span>
                    <br>
                    and
                    <span class="text-text-variable transition-[--count-animation] duration-[2s] ease-out [counter-set:num_var(--count-animation)] supports-counter-set:before:content-[counter(num)] intersect-once intersect:[--count-animation:var(--target)]" no-intersect :style="{ '--target': tracksP33Amount }">
                        <span class="supports-counter-set:sr-only">{{ tracksP33Amount }}</span> House Tracks
                    </span>
                    published under my alias
                    <span class="text-text-variable -mr-[1ch]">Projekt 33</span>
                    ,
                </span>
            </p>
            <span>you might want to check out:</span>

            <!-- Notable Projects Accordion -->
            <div class="pt-4">
                <Accordion :cards="accordionCards"></Accordion>
            </div>

        </template>

    </SectionContainer>

</template>


<script setup lang="ts">
    import { ref } from "vue";
    import { PhAppleLogo, PhSoundcloudLogo, PhSpotifyLogo, PhUser } from "@phosphor-icons/vue";
    import SectionContainer from "../SectionContainer.vue";
    import Accordion from "../Accordion.vue";
    import { accordionColors, AccordionIcon, type AccordionCard } from "../../types/accordion";


    const tracks3urobeatAmount = ref(7);
    const tracksP33Amount      = ref(5);


    // Elements displayed in notable projects accordion
    const accordionCards: AccordionCard[] = [
        {
            title: "3urobeat - Come Take My Hand",
            description: "2026",
            color: accordionColors.amber,
            icon: AccordionIcon.MUSIC_NOTES_SIMPLE,
            bgImgUrl: "https://i.scdn.co/image/ab67616d0000b273120fc1d5e4f1c3945d5996fe",
            clickUrl: "https://open.spotify.com/album/5ZZuT3fX3VKxdjss7cTSWd"
        },
        {
            title: "3urobeat - Space & Time",
            description: "2025",
            color: accordionColors.blue,
            icon: AccordionIcon.MUSIC_NOTES_SIMPLE,
            bgImgUrl: "https://i.scdn.co/image/ab67616d0000b273a72c334cf52aca9a23873d12",
            clickUrl: "https://open.spotify.com/track/0DixKXVB9RUCIA8J0rVEvU"
        },
        {
            title: "3urobeat - Old Sounds, New Style",
            description: "2025",
            color: accordionColors.zinc,
            icon: AccordionIcon.MUSIC_NOTES_SIMPLE,
            bgImgUrl: "https://i.scdn.co/image/ab67616d0000b273a50ec0c67a61a5dbd6953e71",
            clickUrl: "https://open.spotify.com/track/5ONb93fAyJwcRMG51s8v23"
        }
    ];

</script>
