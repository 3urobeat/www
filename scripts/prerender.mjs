#!/usr/bin/env node

/*
 * File: prerender.mjs
 * Project: www
 * Created Date: 2026-06-14 18:32:35
 * Author:
 *
 * Last Modified: 2026-06-14 18:49:15
 * Modified By: 3urobeat
 */


/*
  This script is part of the build pipeline and runs after Vue's build to pre-render page content to HTML.
  This allows this page to support noscript.

  This script is for once AI written, which is why there's no license header.
*/



import puppeteer from "puppeteer-core";
import { createServer } from "http";
import { readFileSync, writeFileSync, existsSync, statSync } from "fs";
import { resolve, extname } from "path";

const DIST   = resolve(process.cwd(), "dist");
const PORT   = 4173;
const CHROME = "/usr/bin/chromium";

const MIME_TYPES = {
    ".html": "text/html",
    ".js":   "application/javascript",
    ".css":  "text/css",
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".svg":  "image/svg+xml",
    ".ico":  "image/x-icon",
    ".json": "application/json",
    ".woff2":"font/woff2",
    ".woff": "font/woff",
};

function serveFile(req, res) {
    let path = new URL(req.url, "http://localhost").pathname;

    if (path === "/linktree") path = "/linktree.html";
    if (path === "/")         path = "/index.html";

    const filePath = resolve(DIST, path.startsWith("/") ? "." + path : "./" + path);

    if (existsSync(filePath) && statSync(filePath).isFile()) {
        const ext  = extname(filePath);
        const content = readFileSync(filePath);
        res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
        res.end(content);
    } else {
        res.writeHead(404);
        res.end("404");
    }
}

async function main() {
    if (!existsSync(DIST) || !statSync(DIST).isDirectory()) {
        console.error(`Error: '${DIST}' not found. Run 'vite build' first.`);
        process.exit(1);
    }

    for (const file of ["index.html", "linktree.html"]) {
        if (!existsSync(resolve(DIST, file))) {
            console.error(`Error: '${file}' not found in dist/.`);
            process.exit(1);
        }
    }

    console.log("Starting prerender...");

    // ---- static file server ----
    const server = createServer(serveFile);
    await new Promise((resolve) => server.listen(PORT, resolve));
    console.log(`Server on http://localhost:${PORT}`);

    // ---- launch browser ----
    const browser = await puppeteer.launch({
        executablePath: CHROME,
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);

    const routes = [
        { url: "/",         file: "index.html" },
        { url: "/linktree", file: "linktree.html" },
    ];

    for (const route of routes) {
        console.log(`\nPrerendering ${route.url} …`);

        try {
            await page.goto(`http://localhost:${PORT}${route.url}`, {
                waitUntil: "networkidle0",
                timeout: 30000,
            });

            // Main portfolio page: scroll to trigger all IntersectionObservers
            if (route.file === "index.html") {
                await page.evaluate(async () => {
                    const scrollEl =
                        document.querySelector("#left-content > div") ||
                        document.documentElement;

                    const totalH = scrollEl.scrollHeight;
                    const vpH    = scrollEl.clientHeight;

                    if (totalH > vpH) {
                        const steps = 25;
                        for (let i = 0; i <= steps; i++) {
                            scrollEl.scrollTop = ((totalH - vpH) * i) / steps;
                            await new Promise((r) => setTimeout(r, 120));
                        }
                    }

                    // Expand all accordion cards so noscript sees all content
                    document.querySelectorAll('[role="tablist"] [role="tab"]').forEach((btn) => {
                        btn.style.maxWidth  = "none";
                        btn.style.maxHeight = "none";

                        btn.querySelectorAll(".opacity-0").forEach((el) => {
                            (el).style.opacity = "1";
                        });
                    });

                    // Safety: force all no-intersect elements visible
                    document.querySelectorAll("[no-intersect]").forEach((el) => {
                        el.classList.remove("opacity-0", "translate-y-8");
                        el.classList.add("opacity-100", "translate-y-0");
                    });
                });

                await new Promise((r) => setTimeout(r, 2500));
            }

            // Grab the rendered HTML inside #app
            const appContent = await page.evaluate(() => {
                const app = document.getElementById("app");
                return app ? app.innerHTML : "";
            });

            if (!appContent) {
                console.warn(`  ⚠  empty content for ${route.url}`);
            }

            // Inject into the built HTML file
            const filePath = resolve(DIST, route.file);
            const html = readFileSync(filePath, "utf-8");

            const replaced = html.replace(
                '<div id="app"></div>',
                `<div id="app">${appContent}</div>`,
            );

            if (replaced === html) {
                console.warn(`  ⚠  could not inject into ${route.file} (pattern not found)`);
            }

            writeFileSync(filePath, replaced, "utf-8");
            console.log(`  ✓  ${appContent.length} chars injected into ${route.file}`);
        } catch (err) {
            console.error(`  ✗  ${route.url}: ${err.message}`);
        }
    }

    await browser.close();
    server.close();
    console.log("\nPrerendering complete.");
}

main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
});
