/*
 * File: utils.ts
 * Project: www
 * Created Date: 2026-06-07 12:40:48
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-13 15:48:05
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */


/**
 * Returns diff between two Date objects ignoring their day
 * @param from Lower bound
 * @param to Upper bound
 * @returns Returns diff as number
 */
export function getYearDiffWithMonthPrecision(from: Date, to: Date): number {
    from.setUTCDate(0); // Remove day from dates
    to.setUTCDate(0);

    return new Date(to.getTime() - from.getTime()).getUTCFullYear() - 1970;
}


/**
 * Formats time to x hours ago if <24 hours, otherwise formats to ISO8601
 * @param timestamp The timestamp to convert
 * @param alwaysShowTimestamp Optional: Controls whether to always/never show the ISO8601 timestamp, even if <24h ago
 * @returns Formatted time, either in "x hours" or ISO8601 format
 */
export function formatTimestamp(timestamp: number, alwaysShowTimestamp?: "always" | "never") {
    let until = Math.abs((Date.now() - timestamp) / 1000);
    let untilUnit = "seconds";

    if (until < 86400 && (!alwaysShowTimestamp || alwaysShowTimestamp == "never")) { // 24h in sec
        if (until > 60) {
            until = until / 60; untilUnit = "minutes";

            if (until > 60) {
                until = until / 60; untilUnit = "hours";
            }
        }

        return `${Math.round(until)} ${untilUnit}`;
    } else {
        const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;

        return ((new Date(timestamp - timezoneOffset)).toISOString().replace(/T/, " ").replace(/\..+/, ""));
    }
}
