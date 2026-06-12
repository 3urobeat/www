<!--
/*
 * File: SectionContainer.vue
 * Project: www
 * Created Date: 2026-05-24 12:40:31
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-12 18:07:51
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

    <section :id="anchorId" class="min-h-screen px-6 md:px-10 lg:px-12 xl:px-24 py-24"> <!-- pl-6 md:pl-10 lg:pl-12 xl:pl-24 w-2/3 md:w-1/2 -->
        <ScrollFade>

            <h2 class="text-4xl lg:text-5xl font-semibold mb-4">
                <span><slot name="title" /></span>
            </h2>

            <p class="mt-3 text-lg mb-4">
                <slot name="description" />
            </p>

            <div class="mb-4">
                <slot name="links" />
            </div>

            <slot name="content" />

        </ScrollFade>
    </section>

</template>


<script setup lang="ts">
    import ScrollFade from "./ScrollFade.vue";

    const props = defineProps({
        anchorId: {
            type: String,
            required: true
        },
    })

</script>
