<!--
/*
 * File: SysAdminSection.vue
 * Project: www
 * Created Date: 2026-05-23 17:31:14
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-14 16:27:56
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

    <SectionContainer anchor-id="sysadmin">

        <template v-slot:title>
            System Administration
        </template>

        <template v-slot:description>

        </template>

        <template v-slot:content>

            <div class="flex flex-col gap-4">

                <!-- Introduction -->
                <p>
                    <span>Welcome <i>on</i> my server!</span>
                    <br>
                    <span>
                        I'm administrating Linux devices for
                        <span class="text-text-variable transition-[--count-animation] duration-[2s] ease-out [counter-set:num_var(--count-animation)] supports-counter-set:before:content-[counter(num)] intersect-once intersect:[--count-animation:var(--target)]" no-intersect :style="{ '--target': linuxYearExp }">
                            <span class="supports-counter-set:sr-only">{{ linuxYearExp }}</span> Years
                        </span>
                        and hosting
                        <span class="text-text-variable -mr-[1ch] transition-[--count-animation] duration-[2s] ease-out [counter-set:num_var(--count-animation)] supports-counter-set:before:content-[counter(num)] intersect:[--count-animation:10] intersect-once" no-intersect>
                            <span class="supports-counter-set:sr-only">10</span>+ Services
                        </span>
                        , including this page, on my servers.
                    </span>
                </p>

                <!-- Experience -->
                <div>
                    <span>My tech stack includes:</span>
                    <ul class="intersect:custom-list-fadein intersect-once text-text-secondary-light dark:text-text-secondary-dark" no-intersect>
                        <li>
                            <span>Custom built Proxmox Server & NAS</span>
                            <ul class="py-1!">
                                <li><span>w/ Debian/openSUSE VMs & Docker Stack, 24 TB Enterprise ZRAID</span></li>
                            </ul>
                        </li>
                        <li>
                            <span>Custom built OPNsense Router</span>
                            <ul class="py-1!">
                                <li><span>w/ advanced Firewall & VLAN rulesets</span></li>
                            </ul>
                        </li>
                        <li>
                            <span>PiHole DNS Server</span>
                            <ul class="py-1!">
                                <li><span>w/ netwide blocking ruleset</span></li>
                            </ul>
                        </li>
                        <li>
                            <span>Nginx Reverse Proxy</span>
                            <ul class="py-1!">
                                <li><span>w/ public Domain & SSL Cert Management</span></li>
                            </ul>
                        </li>
                        <li><span>Cisco & Netgear Managed L2/3 Switches</span></li>
                        <li><span>TP-Link WiFi Access Point Mesh</span></li>
                        <li><span>Arch Linux Desktop</span></li>
                        <!-- These li's all need a span for span-bg-invert to take effect -->
                    </ul>

                </div>

                <!-- Dotfiles & Guides -->
                <p>
                    <span>
                        Set up your Linux machine faster by checking out my
                        <a href="https://github.com/3urobeat/dotfiles" target="_blank" class="-mr-[1ch] text-text-variable hover:text-accent hover:underline hover:transition-colors">Dotfiles</a>
                        <!-- and
                        <a href="" target="_blank" class="-mr-[1ch] text-text-variable hover:text-accent hover:underline hover:transition-colors">Guides</a> -->
                        !
                    </span>
                </p>

            </div>

        </template>

    </SectionContainer>

</template>


<script setup lang="ts">
    import { computed } from 'vue';
    import { getYearDiffWithMonthPrecision } from "../../utils/utils";
    import SectionContainer from "../SectionContainer.vue";

    const linuxYearExp = computed(() => getYearDiffWithMonthPrecision(new Date(2017, 3, 0), new Date()));

</script>
