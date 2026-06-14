<!--
/*
 * File: LinktreePage.vue
 * Project: www
 * Created Date: 2026-06-14 12:14:43
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-14 17:50:02
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

    <main class="linktree-wrapper fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
        <div class="linktree-bg fixed inset-0 -z-10"></div>

        <div class="linktree-card custom-glass-pill relative w-full max-w-md mx-4 p-8 rounded-2xl shadow-2xl text-center max-h-[90vh] overflow-y-auto">

            <div class="flex flex-col items-center gap-2 mb-6">
                <div class="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-4xl">
                    <img
                        src="https://avatars.githubusercontent.com/u/35304405"
                        alt="3urobeat's avatar"
                        class="object-cover shadow-md rounded-full"
                    />
                </div>
                <h1 class="text-xl font-bold">3urobeat</h1>
                <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Developer, SysAdmin & Music Producer</p>
            </div>

            <div
                v-for="thisCategory in categories"
                :key="thisCategory.name"
                class="mb-6 last:mb-0"
            >
                <h2 class="text-xs uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark mb-3 text-left">{{ thisCategory.name }}</h2>

                <a
                    v-for="thisLink in thisCategory.links"
                    :key="thisLink.label"
                    :href="thisLink.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="thisLink.label + (thisLink.url.startsWith('/') ? '' : ' (opens in new tab)')"
                    class="linktree-link flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 mb-2 last:mb-0 group"
                >
                    <span class="text-lg shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                        <component :is="thisLink.icon" />
                    </span>
                    <span class="flex flex-col items-start">
                        <span class="text-sm font-medium">{{ thisLink.label }}</span>
                        <span v-if="thisLink.subtitle" class="text-xs text-text-secondary-light dark:text-text-secondary-dark">{{ thisLink.subtitle }}</span>
                    </span>
                    <span v-if="!thisLink.url.startsWith('/')" class="ml-auto text-xs text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-light dark:group-hover:text-text-dark transition-colors" aria-hidden="true">
                        <PhArrowSquareOut />
                    </span>
                </a>
            </div>

        </div>
    </main>

</template>


<style scoped>
    .linktree-bg {
        background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe, #667eea);
        filter: brightness(80%);
        background-size: 400% 400%;
        animation: gradient-shift 12s ease infinite;
    }

    :root.dark .linktree-bg {
        background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #1a1a2e);
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
    }

    @keyframes gradient-shift {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    @keyframes popin {
        0%   { transform: scale(0.85); opacity: 0; }
        100% { transform: scale(1);    opacity: 1; }
    }

    .linktree-card {
        animation: popin 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .linktree-link {
        position: relative;
        overflow: hidden;
    }

    .linktree-link::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s ease;
    }

    .linktree-link:hover::before {
        transform: translateX(100%);
    }
</style>


<script setup lang="ts">
    import {
        PhAppleLogo,
        PhArrowSquareOut,
        PhBracketsCurly,
        PhBrowsers,
        PhEnvelope,
        PhGithubLogo,
        PhHeadphones,
        PhHeart,
        PhMusicNotesSimple,
    } from "@phosphor-icons/vue";


    // Ignore dark mode if enabled
    document.documentElement.classList.remove("dark");


    type LinktreeLink = {
        label: string;
        url: string;
        subtitle?: string;
        icon: object;
    };

    type LinktreeCategory = {
        name: string;
        links: LinktreeLink[];
    };

    const categories: LinktreeCategory[] = [
        {
            name: "Social",
            links: [
                { label: "Homepage", url: "/", icon: PhBrowsers, subtitle: "Portfolio" }
            ]
        },
        {
            name: "Development",
            links: [
                { label: "GitHub", url: "https://github.com/3urobeat", icon: PhGithubLogo, subtitle: "@3urobeat" },
                { label: "Codeberg", url: "https://codeberg.org/3urobeat", icon: PhBracketsCurly, subtitle: "@3urobeat" },
            ]
        },
        {
            name: "Music",
            links: [
                { label: "SoundCloud", url: "https://soundcloud.com/3urobeat", icon: PhMusicNotesSimple, subtitle: "3urobeat" },
                { label: "Spotify", url: "https://open.spotify.com/artist/6N9JhTJqOCBYHdZAvptJKS", icon: PhHeadphones, subtitle: "3urobeat" },
                { label: "Apple Music", url: "https://music.apple.com/us/artist/3urobeat/1764177108", icon: PhAppleLogo, subtitle: "3urobeat" },
                { label: "SoundCloud", url: "https://soundcloud.com/projekt-33", icon: PhMusicNotesSimple, subtitle: "Projekt 33" },
            ]
        },

        {
            name: "Support",
            links: [
                { label: "GitHub Sponsors", url: "https://github.com/sponsors/3urobeat", icon: PhHeart, subtitle: "Publicly sponsor my projects" },
                { label: "PayPal", url: "https://paypal.me/3urobeat ", icon: PhHeart, subtitle: "Privately sponsor my work" }
            ]
        },
        {
            name: "Contact",
            links: [
                { label: "Email", url: "mailto:contact@3urobeat.com", icon: PhEnvelope, subtitle: "contact@3urobeat.com" }
            ]
        }
    ];

</script>
