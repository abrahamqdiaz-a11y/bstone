#!/usr/bin/env node
/**
 * SEO regression check. Crawls the prerendered HTML in .next/server/app (run
 * `npm run build` first) and exits non-zero on any of:
 *
 * - missing or duplicate <title> or meta description
 * - title over 60 characters, description over 160
 * - not exactly one <h1>
 * - missing canonical or og:image
 * - a service, audience, city or guide page whose title or H1 lacks the place
 * - any occurrence of Seattle, Pacific Northwest or Washington
 * - headings inside the <footer>
 * - sitemap entries without <lastmod>, or sitemap URLs with no built page
 * - an FAQ question or answer repeated word for word on another page
 * - a page no other page links to (reachable only from the sitemap)
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.argv[2] ?? ".next/server/app");
const PLACE = /Sarasota|Manatee|Florida|, FL\b/;
const BANNED = /Seattle|Pacific Northwest|Washington/gi;
const PLACE_REQUIRED = [/^\/services\/.+/, /^\/who-we-help\/.+/, /^\/service-areas\/.+/, /^\/resources\/.+/];
const LIMITS = { title: 60, description: 160 };

if (!fs.existsSync(ROOT)) {
  console.error(`seo:check: ${ROOT} not found. Run \`npm run build\` first.`);
  process.exit(2);
}

const decode = (s) =>
  s
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(ROOT);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
const pages = new Map();
for (const file of htmlFiles) {
  let route = "/" + path.relative(ROOT, file).replace(/\.html$/, "").split(path.sep).join("/");
  if (route === "/index") route = "/";
  if (route.startsWith("/_")) continue; // _not-found, _global-error
  pages.set(route, fs.readFileSync(file, "utf8"));
}

const failures = [];
const fail = (route, msg) => failures.push(`${route}: ${msg}`);
const seen = { title: new Map(), description: new Map() };
const faqQ = new Map();
const faqA = new Map();
const inbound = new Map([...pages.keys()].map((r) => [r, new Set()]));
const rows = [];

for (const [route, html] of pages) {
  const head = html.slice(0, html.indexOf("</head>") + 7);
  const title = decode(head.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const description = decode(head.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1]));
  const canonical = head.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const ogImage = head.match(/<meta property="og:image" content="([^"]*)"/)?.[1];
  rows.push({ route, title, description, h1: h1s[0] ?? "" });

  for (const [key, value] of [["title", title], ["description", description]]) {
    if (!value) fail(route, `missing ${key}`);
    else {
      if (value.length > LIMITS[key]) fail(route, `${key} is ${value.length} characters (max ${LIMITS[key]}): "${value}"`);
      if (seen[key].has(value)) fail(route, `duplicate ${key}, also on ${seen[key].get(value)}`);
      else seen[key].set(value, route);
    }
  }
  if (h1s.length !== 1) fail(route, `has ${h1s.length} <h1> elements (expected exactly 1)`);
  if (!canonical) fail(route, "missing canonical link");
  if (!ogImage) fail(route, "missing og:image");
  else if (!ogImage.startsWith("http")) fail(route, `og:image is not absolute: ${ogImage}`);

  if (PLACE_REQUIRED.some((re) => re.test(route))) {
    if (!PLACE.test(title)) fail(route, `title lacks the place: "${title}"`);
    if (!PLACE.test(h1s[0] ?? "")) fail(route, `H1 lacks the place: "${h1s[0] ?? ""}"`);
  }

  for (const m of html.matchAll(BANNED)) {
    const at = m.index;
    fail(route, `contains "${m[0]}": …${decode(html.slice(Math.max(0, at - 60), at + 60))}…`);
  }

  const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "";
  if (/<h[1-6][\s>]/.test(footer)) fail(route, "footer contains heading elements");

  for (const m of html.matchAll(/<details[^>]*>([\s\S]*?)<\/details>/g)) {
    const q = decode(m[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1] ?? "");
    const a = decode(m[1].match(/<\/summary>([\s\S]*)$/)?.[1] ?? "");
    for (const [map, text, kind] of [[faqQ, q, "question"], [faqA, a, "answer"]]) {
      if (!text) continue;
      const prev = map.get(text);
      if (prev && prev !== route) fail(route, `FAQ ${kind} duplicated from ${prev}: "${text.slice(0, 80)}"`);
      else map.set(text, route);
    }
  }

  for (const m of html.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)/g)) {
    const target = m[1].replace(/\/$/, "") || "/";
    if (target !== route && inbound.has(target)) inbound.get(target).add(route);
  }
}

for (const [route, from] of inbound) {
  if (route !== "/" && from.size === 0) fail(route, "no internal links point here (reachable only from the sitemap)");
}

// Sitemap: every entry needs <lastmod>, and every URL must be a built page.
const sitemapFile = files.find((f) => /sitemap\.xml(\.body)?$/.test(f));
if (!sitemapFile) failures.push("sitemap.xml: not found in build output");
else {
  const xml = fs.readFileSync(sitemapFile, "utf8");
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  if (!entries.length) failures.push("sitemap.xml: no entries");
  for (const e of entries) {
    const loc = e.match(/<loc>([^<]*)<\/loc>/)?.[1] ?? "(no loc)";
    if (!/<lastmod>[^<]+<\/lastmod>/.test(e)) failures.push(`sitemap.xml: ${loc} has no lastmod`);
    if (/<priority>/.test(e)) failures.push(`sitemap.xml: ${loc} still has priority`);
    const p = new URL(loc).pathname.replace(/\/$/, "") || "/";
    if (!pages.has(p)) failures.push(`sitemap.xml: ${loc} has no built page`);
  }
  for (const m of xml.matchAll(BANNED)) failures.push(`sitemap.xml: contains "${m[0]}"`);
}

if (process.argv.includes("--table")) {
  for (const r of rows.sort((a, b) => a.route.localeCompare(b.route))) {
    console.log(`${r.route}\n  title (${r.title.length}): ${r.title}\n  desc  (${r.description.length}): ${r.description}\n  h1: ${r.h1}`);
  }
}

console.log(`seo:check: crawled ${pages.size} pages in ${path.relative(process.cwd(), ROOT) || ROOT}`);
if (failures.length) {
  console.error(`\n${failures.length} problem(s):`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log("✓ all SEO checks passed");
