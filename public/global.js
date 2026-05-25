/*
 * File: global.js
 * Project: www
 * Created Date: 2026-05-25 22:40:31
 * Author: 3urobeat
 *
 * Last Modified: 2026-05-25 22:41:52
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */


// This file is loaded in header of index.html


// Rmove no JS warning
// document.documentElement.classList.add("js");


// TODO: Duplicates utils/storage.ts (except auto detection) but cannot import that here
// Sets dark mode on page load. Defined in header to fix transition load - https://stackoverflow.com/a/14416030
try {
    const res         = localStorage.getItem("uxSettings");
    const darkModeMql = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

    if (res) {
        const obj = JSON.parse(res);

        if ((obj.darkModeEnabled === null && darkModeMql && darkModeMql.matches) || obj.darkModeEnabled) {
            document.documentElement.classList.add("dark");
        }
    } else {
        if (darkModeMql && darkModeMql.matches) {
            document.documentElement.classList.add("dark");
        }
    }
} catch (err) {} // eslint-disable-line
