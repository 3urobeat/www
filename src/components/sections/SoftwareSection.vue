<!--
/*
 * File: SoftwareSection.vue
 * Project: www
 * Created Date: 2026-05-23 17:31:02
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-14 19:25:51
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

    <SectionContainer anchor-id="software">

        <template v-slot:title>
            Software Development
        </template>

        <template v-slot:description>
            <!-- Computer Science Expert Subject Area: Software Development -->
        </template>

        <!-- Profile Links -->
        <template v-slot:links>
            <div class="flex h-fit flex-wrap gap-6">
                <div class="custom-external-anchor-multi">
                    <span class="flex items-center gap-2.5 px-3 py-1 w-36 whitespace-nowrap">
                        <PhUser class="size-6 shrink-0" />
                        3urobeat
                    </span>
                    <a
                        href="https://github.com/3urobeat"
                        target="_blank"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="GitHub (opens in new tab)"
                        rel="noopener noreferrer"
                    >
                        <span class="size-6 logo-github" aria-hidden="true"></span>
                    </a>
                    <a
                        href="https://codeberg.org/3urobeat"
                        target="_blank"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="Codeberg (opens in new tab)"
                        rel="noopener noreferrer"
                    >
                        <span class="size-6 logo-codeberg" aria-hidden="true"></span>
                    </a>
                </div>
                <div class="custom-external-anchor-multi">
                    <span class="flex items-center gap-2.5 px-3 py-1 w-36 whitespace-nowrap">
                        <PhBuildingOffice class="size-6 shrink-0" />
                        Wardrobe
                    </span>
                    <a
                        href="https://github.com/wardrobe-hq"
                        target="_blank"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="GitHub (opens in new tab)"
                        rel="noopener noreferrer"
                    >
                        <span class="size-6 logo-github" aria-hidden="true"></span>
                    </a>
                    <a
                        href="https://codeberg.org/wardrobe-hq"
                        target="_blank"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="Codeberg (opens in new tab)"
                        rel="noopener noreferrer"
                    >
                        <span class="size-6 logo-codeberg" aria-hidden="true"></span>
                    </a>
                </div>
                <div class="custom-external-anchor-multi">
                    <span class="flex items-center gap-2.5 px-3 py-1 w-36 whitespace-nowrap">
                        <PhBuildingOffice class="size-6 shrink-0" />
                        x3(fx)
                    </span>
                    <a
                        href="https://github.com/x3-fx"
                        target="_blank"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="GitHub (opens in new tab)"
                        rel="noopener noreferrer"
                    >
                        <span class="size-6 logo-github" aria-hidden="true"></span>
                    </a>
                    <a
                        href="https://codeberg.org/x3-fx"
                        target="_blank"
                        class="flex items-center justify-center px-3 py-2 hover:text-accent transition-colors"
                        aria-label="Codeberg (opens in new tab)"
                        rel="noopener noreferrer"
                    >
                        <span class="size-6 logo-codeberg" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </template>

        <template v-slot:content>

            <div class="flex flex-col gap-4">
                <div class="">

                    <!-- Introduction -->
                    <p>
                        <span>
                            Looking back at
                            <span class="text-text-variable -mr-[1ch] transition-[--count-animation] duration-[2s] ease-out [counter-set:num_var(--count-animation)] supports-counter-set:before:content-[counter(num)] intersect-once intersect:[--count-animation:var(--target)]" no-intersect :style="{ '--target': swYearExp }">
                                <span class="supports-counter-set:sr-only">{{ swYearExp }}</span> Years
                            </span>
                            ,
                            <span class="text-text-variable transition-[--count-animation] duration-[2s] ease-out [counter-set:num_var(--count-animation)] supports-counter-set:before:content-[counter(num)] intersect:[--count-animation:75] intersect-once" no-intersect>
                                <span class="supports-counter-set:sr-only">75</span>+ Projects
                            </span>
                            &
                            <span class="text-text-variable -mr-[1ch] transition-[--count-animation] duration-[2s] ease-out [counter-set:num_var(--count-animation)] supports-counter-set:before:content-[counter(num)] intersect:[--count-animation:1500] intersect-once" no-intersect>
                                <span class="supports-counter-set:sr-only">1500</span>+ Stars
                            </span>
                            ,
                        </span>
                    </p>
                    <span>I've most notably founded and contributed to:</span>

                    <!-- Notable Projects Accordion -->
                    <div class="pt-4">
                        <Accordion :cards="accordionCards"></Accordion>
                    </div>

                </div>

                <!-- Most recent contribution GitHub API integration -->
                <p>
                    Most recent commit:
                    <span class="text-text-variable">
                        <span class="">{{ lastCommit?.timestamp ? formatTimestamp(lastCommit?.timestamp, "never") || "?" : "?" }}</span> ago @ <a :href="lastCommit?.repoUrl" target="_blank" rel="noopener noreferrer" class="hover:text-accent hover:underline hover:transition-colors">{{ lastCommit?.repoName || 'loading...' }}</a>
                    </span>
                </p>

                <!-- Static language experience statistic -->
                <div>
                    <span>Doing so has made me proficient in:</span>
                    <ul class="intersect:custom-list-fadein intersect-once text-text-secondary-light dark:text-text-secondary-dark" no-intersect>
                        <li><span>Ada</span></li>
                        <li><span>C</span></li>
                        <li><span>C++</span></li>
                        <li><span>Java</span></li>
                        <li><span>JavaScript</span></li>
                        <li><span>Typescript</span></li>
                        <li><span>...and various other scripting, packaging & markup languages</span></li>
                        <!-- These li's all need a span for span-bg-invert to take effect -->
                    </ul>
                </div>
            </div>

        </template>

    </SectionContainer>

</template>


<script setup lang="ts">
    import { computed, ref, type Ref } from "vue";
    import SectionContainer from "../SectionContainer.vue";
    import Accordion from "../Accordion.vue";
    import { accordionColors, AccordionIcon, type AccordionCard } from "../../types/accordion";
    import { formatTimestamp, getYearDiffWithMonthPrecision } from "../../utils/utils";
    import { PhBuildingOffice, PhUser } from "@phosphor-icons/vue";
    import { fetchLastGitHubCommit, type LastCommit } from "../../utils/github-api";


    const swYearExp = computed(() => getYearDiffWithMonthPrecision(new Date(2016, 5, 0), new Date()));

    const lastCommit: Ref<LastCommit | null> = ref(null);
    fetchLastGitHubCommit("3urobeat").then((e) => lastCommit.value = e);

    const steamBotReposStars: Ref<number | null> = ref(716); // State: 2026-06-14
    /* fetchGitHubRepoStars("3urobeat/steam-comment-service-bot")        .then((e) => e ? steamBotReposStars.value! += e : null);
    fetchGitHubRepoStars("3urobeat/steam-mass-comment-bot")           .then((e) => e ? steamBotReposStars.value! += e : null);
    fetchGitHubRepoStars("3urobeat/steam-idler")                      .then((e) => e ? steamBotReposStars.value! += e : null);
    fetchGitHubRepoStars("3urobeat/steam-comment-bot-template-plugin").then((e) => e ? steamBotReposStars.value! += e : null);
    fetchGitHubRepoStars("3urobeat/steam-comment-bot-discord-plugin") .then((e) => e ? steamBotReposStars.value! += e : null); */

    const nodeSteamCommRepoForkStars: Ref<number | null> = ref(49);  // State: 2026-06-14
    const nodeSteamCommRepoStars:     Ref<number | null> = ref(560); // State: 2026-06-14
    /* fetchGitHubRepoStars("3urobeat/node-steamcommunity")   .then((e) => e ? nodeSteamCommRepoForkStars.value! += e : null);
    fetchGitHubRepoStars("DoctorMcKay/node-steamcommunity").then((e) => e ? nodeSteamCommRepoStars.value! += e : null); */

    const microcontrollerReposStars: Ref<number | null> = ref(69);  // State: 2026-06-14
    /* fetchGitHubRepoStars("3urobeat/nodemcu-clock")            .then((e) => e ? microcontrollerReposStars.value! += e : null);
    fetchGitHubRepoStars("3urobeat/arduino-lcdHelper-library").then((e) => e ? microcontrollerReposStars.value! += e : null);
    fetchGitHubRepoStars("3urobeat/arduino-resource-monitor") .then((e) => e ? microcontrollerReposStars.value! += e : null);
    fetchGitHubRepoStars("3urobeat/box-controller")           .then((e) => e ? microcontrollerReposStars.value! += e : null); */

    const wardrobeRepoStars: Ref<number | null> = ref(16); // State: 2026-06-14
    /* fetchGitHubRepoStars("wardrobe-hq/wardrobe").then((e) => wardrobeRepoStars.value = e); */


    // Elements displayed in notable projects accordion
    const accordionCards = computed<AccordionCard[]>(() => [
        {
            title: "Steam Account Networks",
            description: "I've created some of the most successful Steam projects on GitHub; sophisticated account network managers for providing community services",
            color: accordionColors.amber,
            icon: AccordionIcon.ROBOT,
            clickUrl: "https://github.com/stars/3urobeat/lists/steam-projects",
            bgImgUrl: "https://3urobeat.com/comment-bot/showcase.gif",
            statsBubbleText: "∑ ⭐ " + steamBotReposStars.value
        },
        {
            title: "Steam NPM Libraries",
            description: "I'm the second largest contributor to and have the most popular fork of the biggest NPM SteamCommunity library, made by DoctorMcKay",
            color: accordionColors.green,
            icon: AccordionIcon.BOOKS,
            clickUrl: "https://github.com/3urobeat/node-steamcommunity",
            bgImgUrl: "/steam-lib-thumb.jpg",
            statsBubbleText: "🍴 " + nodeSteamCommRepoForkStars.value + " " + "⭐ " + nodeSteamCommRepoStars.value
        },
        {
            title: "Arduino/ESP Microcontroller Projects",
            description: "Firmware Development for low-spec hardware in C. My project nodemcu-clock received a sponsorship by PCBway!",
            color: accordionColors.red,
            icon: AccordionIcon.CPU,
            clickUrl: "https://github.com/stars/3urobeat/lists/arduino-esp-projects",
            bgImgUrl: "https://raw.githubusercontent.com/3urobeat/nodemcu-clock/main/.github/img/demo-spotify.jpg",
            statsBubbleText: "∑ ⭐ " + microcontrollerReposStars.value
        },
        {
            title: "Wardrobe: Clothing management app",
            description: "Assemble outfits, preview, filter and get recommendations based on your local weather",
            color: accordionColors.emerald,
            icon: AccordionIcon.COAT_HANGER,
            clickUrl: "https://github.com/wardrobe-hq/wardrobe",
            bgImgUrl: "https://raw.githubusercontent.com/wardrobe-hq/wardrobe/refs/heads/main/resources/img/showcase.png",
            statsBubbleText: "⭐ " + wardrobeRepoStars.value
        },
        {
            title: "x3(fx): Audio FX Plugins",
            description: "Developing audio effect plugins for creative music production in Rust",
            color: accordionColors.yellow,
            icon: AccordionIcon.MUSIC_NOTES_SIMPLE,
            clickUrl: "https://github.com/x3-fx",
            bgImgUrl: "https://avatars.githubusercontent.com/u/291616453?s=200&v=4"
        },
        {
            title: "Webserial in Nuxt",
            description: "A blueprint implementation of bidirectional Webbrowser <-> USB Device communication via WebSerial in Nuxt",
            color: accordionColors.fuchsia,
            icon: AccordionIcon.BROWSERS,
            clickUrl: "https://github.com/3urobeat/nuxt-webserial",
            bgImgUrl: "https://raw.githubusercontent.com/3urobeat/nuxt-webserial/refs/heads/main/.github/img/demo.png"
        },
    ]);


</script>
