<!--
/*
 * File: app.vue
 * Project: www
 * Created Date: 2026-04-14 18:25:13
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-28 17:30:17
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

    <header id="titlebar" class="z-50">
        <TitleBar />
    </header>


    <main>
        <!-- Left Side - Page Content -->
        <div class="fixed inset-0 z-10 content-clip bg-bg-light dark:bg-bg-dark" id="left-content">
            <div ref="scrollContainer" class="h-full overflow-y-auto scroll-smooth">
                <IntroductionSection />

                <SoftwareSection />

                <SysAdminSection />

                <MusicSection />
            </div>
        </div>


        <!-- Squiggly Divider Line -->
        <!-- TODO -->
    </main>


    <!-- Footer -->
    <footer class="fixed z-20 text-nowrap bottom-0 pb-2 px-2.5 dark:text-text-dark select-none">
        <Footer />
    </footer>

</template>


<script setup lang="ts">
    import SoftwareSection from "./components/sections/SoftwareSection.vue";
    import SysAdminSection from "./components/sections/SysAdminSection.vue";
    import MusicSection from "./components/sections/MusicSection.vue";
    import IntroductionSection from "./components/sections/IntroductionSection.vue";
    import TitleBar from "./components/TitleBar.vue";
    import Footer from "./components/Footer.vue";

</script>
