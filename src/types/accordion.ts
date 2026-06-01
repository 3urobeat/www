/*
 * File: accordion.ts
 * Project: www
 * Created Date: 2026-05-30 21:49:12
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-01 18:02:29
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */


/**
 * Types used by accordion component
 */


// Supported colors, written out so that Tailwind includes them during compilation
export const accordionColors = {
    red:    "bg-red-500 text-red-500",
    orange: "bg-orange-500 text-orange-500",
    amber:  "bg-amber-500 text-amber-500",
    yellow: "bg-yellow-500 text-yellow-500",
    lime:   "bg-lime-500 text-lime-500",
    green:  "bg-green-500 text-green-500",
    emerald: "bg-emerald-500 text-emerald-500",
    teal:   "bg-teal-500 text-teal-500",
    cyan:   "bg-cyan-500 text-cyan-500",
    sky:    "bg-sky-500 text-sky-500",
    blue:   "bg-blue-500 text-blue-500",
    indigo: "bg-indigo-500 text-indigo-500",
    violet: "bg-violet-500 text-violet-500",
    purple: "bg-purple-500 text-purple-500",
    fuchsia: "bg-fuchsia-500 text-fuchsia-500",
    pink:   "bg-pink-500 text-pink-500",
    rosa:   "bg-rosa-500 text-rosa-500",
    zinc:   "bg-zinc-500 text-zinc-500",
    mauve:  "bg-mauve-500 text-mauve-500",
    olive:  "bg-olive-500 text-olive-500",
    taupe:  "bg-taupe-500 text-taupe-500"
} as const;


// Supported icons as a erasableSyntaxOnly compatible DIY Enum - https://stackoverflow.com/a/79762129
export const AccordionIcon = {
    COAT_HANGER: 0,
    ROBOT: 1,
    BOOKS: 2,
    CPU: 3,
    LINUX_LOGO: 4,
    BROWSERS: 5,
    MUSIC_NOTES_SIMPLE: 6,
    PIANO_KEYS: 7,
    DISCO_BALL: 8
} as const;


export type AccordionCard = {
    title: string,
    description: string,
    color: (typeof accordionColors)[keyof typeof accordionColors],
    icon: (typeof AccordionIcon)[keyof typeof AccordionIcon],
    bgImgUrl?: string
}
