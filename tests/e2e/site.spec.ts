import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = [
  "/",
  "/services",
  "/services/estate-cleanouts",
  "/services/inherited-home-cleanouts",
  "/services/senior-downsizing",
  "/services/estate-transitions",
  "/services/pre-listing-home-preparation",
  "/services/home-cleanouts",
  "/services/handyman-home-projects",
  "/who-we-help",
  "/who-we-help/families-and-executors",
  "/who-we-help/real-estate-agents",
  "/who-we-help/seniors-and-families",
  "/who-we-help/landlords-and-property-managers",
  "/service-areas",
  "/service-areas/sarasota",
  "/resources",
  "/resources/how-to-clean-out-an-inherited-house",
  "/resources/estate-cleanout-checklist",
  "/resources/preparing-a-house-for-sale-checklist",
  "/resources/senior-downsizing-checklist",
  "/resources/what-to-do-with-belongings-after-a-death",
  "/resources/estate-cleanout-vs-after-death-cleanup",
  "/resources/probate-before-clearing-a-house-florida",
  "/resources/estate-cleanout-cost-sarasota",
  "/resources/managing-a-sarasota-estate-cleanout-from-out-of-state",
  "/about",
  "/contact",
  "/privacy",
];

for (const path of pages) {
  test(`${path}: one H1, unique metadata, canonical, no a11y violations`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);
    expect(title.length).toBeLessThanOrEqual(60);
    const desc = await page.locator('meta[name="description"]').getAttribute("content");
    expect(desc && desc.length).toBeGreaterThan(70);
    expect(desc!.length).toBeLessThanOrEqual(170);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toMatch(new RegExp(`${path === "/" ? "briarstoneprep\\.com/?$" : `${path}$`}`));
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(", ")}`)).toEqual([]);
  });
}

test("titles and descriptions are unique across pages", async ({ page }) => {
  const titles = new Set<string>();
  const descs = new Set<string>();
  for (const path of pages) {
    await page.goto(path);
    titles.add(await page.title());
    descs.add((await page.locator('meta[name="description"]').getAttribute("content")) ?? "");
  }
  expect(titles.size).toBe(pages.length);
  expect(descs.size).toBe(pages.length);
});

test("every internal link resolves", async ({ page, request }) => {
  const seen = new Set<string>();
  for (const path of pages) {
    await page.goto(path);
    const hrefs = await page.$$eval("a[href^='/']", (as) => as.map((a) => a.getAttribute("href")!.split("#")[0]));
    hrefs.forEach((h) => h && seen.add(h));
  }
  for (const href of seen) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});

test("sitemap and robots", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const path of pages) expect(sitemap).toContain(`briarstoneprep.com${path === "/" ? "" : path}<`);
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://briarstoneprep.com/sitemap.xml");
});

test("structured data is valid JSON and omits unverified fields", async ({ page }) => {
  await page.goto("/services/estate-cleanouts");
  const blocks = await page.$$eval('script[type="application/ld+json"]', (s) => s.map((x) => JSON.parse(x.textContent!)));
  const types = blocks.map((b) => b["@type"]);
  expect(types).toEqual(expect.arrayContaining(["HomeAndConstructionBusiness", "WebSite", "BreadcrumbList", "Service"]));
  const biz = blocks.find((b) => b["@type"] === "HomeAndConstructionBusiness");
  expect(biz.telephone).toBeUndefined();
  expect(biz.address).toBeUndefined();
  expect(biz.areaServed).toEqual(expect.arrayContaining([{ "@type": "City", name: "Sarasota, FL" }]));
  expect(biz.aggregateRating).toBeUndefined();
  expect(types).not.toContain("FAQPage");
});

test("form shows accessible errors for an empty submission", async ({ page }) => {
  await page.goto("/contact");
  await page.waitForTimeout(3200);
  await page.getByRole("button", { name: "Request a Consultation" }).last().click();
  const alert = page.getByRole("alert").filter({ hasText: "highlighted" });
  await expect(alert).toContainText("Please correct the highlighted fields");
  await expect(alert).toBeFocused();
  await expect(page.getByLabel(/^Name/)).toHaveAttribute("aria-invalid", "true");
});

test("form submits successfully and preselects service from URL", async ({ page, request }) => {
  await page.goto("/contact?service=senior-downsizing");
  await expect(page.getByLabel(/^Service needed/)).toHaveValue("senior-downsizing");
  await page.getByLabel(/^Name/).fill("Test Visitor");
  await page.getByLabel(/^Email/).fill("visitor@example.com");
  await page.getByLabel(/^Property city or ZIP/).fill("34236");
  await page.getByLabel(/^Timeline/).selectOption("1-3-months");
  await page.getByLabel(/^Tell us about the property/).fill("Parent moving to assisted living; house needs clearing.");
  await page.getByLabel(/I agree that Briarstone Prep/).check();
  await page.waitForTimeout(3200);
  await page.getByRole("button", { name: "Request a Consultation" }).last().click();
  await expect(page.getByRole("status").filter({ hasText: "Thank you" })).toBeVisible();
  const delivered = await (await request.get("http://localhost:3199/last")).json();
  expect(delivered.body.request.service).toBe("senior-downsizing");
  expect(delivered.body.contact.email).toBe("visitor@example.com");
  expect(delivered.body.sourcePage).toBe("/contact");
  expect(delivered.signature).toMatch(/^sha256=[0-9a-f]{64}$/);
});

test("honeypot submissions are quietly dropped", async ({ page, request }) => {
  await page.goto("/contact");
  await page.getByLabel(/^Name/).fill("Bot Account");
  await page.getByLabel(/^Email/).fill("bot@example.com");
  await page.getByLabel(/^Property city or ZIP/).fill("00000");
  await page.getByLabel(/^Service needed/).selectOption("not-sure");
  await page.getByLabel(/^Timeline/).selectOption("asap");
  await page.getByLabel(/^Tell us about the property/).fill("Buy cheap followers now at spam dot example");
  await page.getByLabel(/I agree that Briarstone Prep/).check();
  await page.locator("input[name=company_website]").fill("http://spam.example", { force: true });
  await page.waitForTimeout(3200);
  await page.getByRole("button", { name: "Request a Consultation" }).last().click();
  await expect(page.getByRole("status").filter({ hasText: "Thank you" })).toBeVisible();
  const delivered = await (await request.get("http://localhost:3199/last")).json();
  expect(delivered?.body?.contact?.email).not.toBe("bot@example.com");
});

test("service page form preselects its service", async ({ page }) => {
  await page.goto("/services/pre-listing-home-preparation");
  await expect(page.locator("#request select[name=service]")).toHaveValue("pre-listing");
});

test("no phone CTA is rendered while the number is unverified", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("a[href^='tel:']")).toHaveCount(0);
  await expect(page.getByText("206-408-3900")).toHaveCount(0);
});

test("mobile menu opens, traps nothing, and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobile" })).toBeHidden();
});

test("no horizontal overflow at common widths", async ({ page }) => {
  for (const width of [360, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/", "/services/estate-cleanouts", "/contact", "/resources/estate-cleanout-checklist"]) {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${path} @ ${width}`).toBeLessThanOrEqual(0);
    }
  }
});
