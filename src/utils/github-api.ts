/*
 * File: github-api.ts
 * Project: www
 * Created Date: 2026-06-09 20:23:42
 * Author: 3urobeat
 *
 * Last Modified: 2026-06-13 15:50:34
 * Modified By: 3urobeat
 *
 * Copyright (c) 2026 3urobeat <https://github.com/3urobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */


export interface LastCommit {
    repoName: string;
    repoUrl: string;
    timestamp: number;
}


/**
 * Fetches the most recent public PushEvent for a GitHub user
 * @param username GitHub Username to fetch
 * @returns LastCommit info or null on failure
 */
export async function fetchLastGitHubCommit(username: string): Promise<LastCommit | null> {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: { Accept: "application/vnd.github.v3+json" },
        });

        if (!res.ok) {
            console.error(`Failed to fetch last GitHub commit for '${username}'`);
            return null;
        }

        const events    = await res.json();
        const pushEvent = events.find((e) => e.type === "PushEvent");
        if (!pushEvent) return null;

        const repoName:  string = pushEvent.repo.name;
        const repoUrl:   string = pushEvent.repo.url;
        const timestamp: number = new Date(pushEvent.created_at).getTime();

        return {
            repoName,
            repoUrl,
            timestamp,
        };
    } catch (err) {
        console.error(`Failed to fetch last GitHub commit for '${username}':`, err);
        return null;
    }
}


/**
 * Fetches the current star count for a GitHub repository
 * @param repo Full repository name formatted as "owner/repo"
 * @returns Number of stars or null on failure
 */
export async function fetchGitHubRepoStars(repo: string): Promise<number | null> {
    try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: { Accept: "application/vnd.github.v3+json" },
        });

        if (!res.ok) {
            console.error(`Failed to fetch GitHub stars for '${repo}'`);
            return null;
        }

        const data = await res.json();

        return data.stargazers_count ?? null;
    } catch (err) {
        console.error(`Failed to fetch GitHub stars for '${repo}':`, err);
        return null;
    }
}
