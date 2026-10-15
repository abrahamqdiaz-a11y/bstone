import { createHmac } from "node:crypto";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

const { inquirySchema, readPhotos } = await import("@/lib/inquiry/schema");
const { isHoneypotTripped, isTooFast } = await import("@/lib/inquiry/spam");
const { buildPayload, configuredAdapters, deliverLead } = await import("@/lib/inquiry/deliver");

const valid = {
  name: "Jordan Lee",
  email: "jordan@example.com",
  phone: "(425) 555-0100",
  location: "98033",
  service: "estate-cleanout",
  timeline: "2-4-weeks",
  description: "Three-bedroom house, fully furnished, needs to be cleared before listing.",
  consent: "yes",
};

describe("inquirySchema", () => {
  it("accepts a complete inquiry and trims values", () => {
    const r = inquirySchema.safeParse({ ...valid, name: "  Jordan Lee  " });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.name).toBe("Jordan Lee");
  });

  it("allows a blank phone but rejects a short one", () => {
    expect(inquirySchema.safeParse({ ...valid, phone: "" }).success).toBe(true);
    expect(inquirySchema.safeParse({ ...valid, phone: "555-01" }).success).toBe(false);
  });

  it("reports a message per invalid field", () => {
    const r = inquirySchema.safeParse({ ...valid, email: "nope", service: "pizza", consent: "" });
    expect(r.success).toBe(false);
    const fields = r.success ? [] : r.error.issues.map((i) => i.path[0]);
    expect(fields).toEqual(expect.arrayContaining(["email", "service", "consent"]));
  });
});

describe("readPhotos", () => {
  const img = (size: number, type = "image/jpeg", name = "a.jpg") => new File([new Uint8Array(size)], name, { type });

  it("ignores empty file inputs", async () => {
    expect(await readPhotos([img(0)])).toEqual({ photos: [] });
  });
  it("rejects non-images, too many files, and oversize totals", async () => {
    expect(await readPhotos([img(10, "application/pdf", "x.pdf")])).toHaveProperty("error");
    expect(await readPhotos([img(1), img(1), img(1), img(1)])).toHaveProperty("error");
    expect(await readPhotos([img(3 * 1024 * 1024), img(2 * 1024 * 1024)])).toHaveProperty("error");
  });
  it("sanitizes filenames", async () => {
    const r = await readPhotos([img(5, "image/png", "../../evil<>.png")]);
    expect("photos" in r && r.photos[0].filename).toBe(".._.._evil_.png");
  });
});

describe("spam checks", () => {
  it("flags a filled honeypot", () => {
    expect(isHoneypotTripped("http://spam")).toBe(true);
    expect(isHoneypotTripped("")).toBe(false);
  });
  it("flags instant submissions but allows no-JS (0) and normal ones", () => {
    const now = 1_000_000;
    expect(isTooFast(String(now - 500), now)).toBe(true);
    expect(isTooFast(String(now - 10_000), now)).toBe(false);
    expect(isTooFast("0", now)).toBe(false);
    expect(isTooFast("abc", now)).toBe(true);
  });
});

describe("delivery", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  const payload = () => buildPayload(inquirySchema.parse(valid), [], "/contact");

  it("builds a payload with readable labels", () => {
    const p = payload();
    expect(p.request.serviceLabel).toBe("Estate cleanout");
    expect(p.request.timelineLabel).toBe("Within 2–4 weeks");
  });

  it("signs webhook bodies with HMAC-SHA256", async () => {
    vi.stubEnv("LEAD_WEBHOOK_URL", "https://hooks.example.com/lead");
    vi.stubEnv("LEAD_WEBHOOK_SECRET", "s3cret");
    const fetchMock = vi.fn().mockResolvedValue(new Response("ok"));
    vi.stubGlobal("fetch", fetchMock);
    expect(await deliverLead(payload())).toBe("delivered");
    const [, init] = fetchMock.mock.calls[0];
    const expected = createHmac("sha256", "s3cret").update(init.body).digest("hex");
    expect(init.headers["X-Briarstone-Signature"]).toBe(`sha256=${expected}`);
  });

  it("fails when every adapter fails", async () => {
    vi.stubEnv("LEAD_WEBHOOK_URL", "https://hooks.example.com/lead");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("no", { status: 500 })));
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(await deliverLead(payload())).toBe("failed");
  });

  it("refuses to drop leads silently in production without an adapter", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(configuredAdapters({} as NodeJS.ProcessEnv)).toHaveLength(0);
    expect(await deliverLead(payload())).toBe("unconfigured");
  });
});
