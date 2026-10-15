import "server-only";

/** Submissions faster than this after the form rendered are treated as bots. */
export const MIN_FILL_MS = 3000;

export function isHoneypotTripped(value: FormDataEntryValue | null) {
  return typeof value === "string" && value.trim() !== "";
}

/**
 * The form stamps the time it was mounted. A value of 0 means JavaScript never
 * ran (a real visitor with scripts off), so the timing check is skipped and the
 * honeypot and optional Turnstile check still apply.
 */
export function isTooFast(startedAt: FormDataEntryValue | null, now = Date.now()) {
  const started = Number(startedAt);
  if (!Number.isFinite(started) || started < 0) return true;
  if (started === 0) return false;
  return now - started < MIN_FILL_MS;
}

/**
 * Verifies a Cloudflare Turnstile token when TURNSTILE_SECRET_KEY is set.
 * Without a secret the check is skipped (honeypot + timing still apply).
 */
export async function verifyTurnstile(token: FormDataEntryValue | null, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
