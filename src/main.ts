/*
 * File: main.ts
 * Project: www
 * Created Date: 2026-04-14 18:28:02
 * Author: 3urobeat
 *
 * Last Modified: 2026-04-14 18:29:31
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */


import { createApp } from "vue";
import "./style.css";
import app from "./app.vue";
import { Observer } from "tailwindcss-intersect";

createApp(app).mount("#app");

// Register intersection observer - https://github.com/heidkaemper/tailwindcss-intersect
Observer.start();
