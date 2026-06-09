<!--
/*
 * File: ScrollFade.vue
 * Project: www
 * Created Date: 2026-05-23 17:30:45
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-09 20:21:15
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
    <!-- Use no-intersect to trigger on page load, see: https://github.com/heidkaemper/tailwindcss-intersect/issues/9 -->
    <div
        class="transition-all duration-1500 ease-out opacity-0 translate-y-8 intersect:opacity-100 intersect:translate-y-0 intersect-once"
        no-intersect
    >
        <slot />
    </div>
</template>
