import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "hello@launchdoor.studio";
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Launchdoor <onboarding@resend.dev>";

const ALLOWED_BUDGETS = new Set([
  "< $10k",
  "$10k — $25k",
  "$25k — $50k",
  "$50k — $100k",
  "$100k+",
  "Not sure yet",
]);

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const existing = hits.get(ip);
  if (!existing || existing.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (existing.count >= RATE_LIMIT_MAX) return false;
  existing.count++;
  return true;
}

function htmlEscape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
  website?: string;
};

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in an hour." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const budget = (body.budget ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || name.length > 100) {
    return NextResponse.json(
      { error: "Please enter a valid name." },
      { status: 400 },
    );
  }
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }
  if (message.length < 20 || message.length > 5000) {
    return NextResponse.json(
      { error: "Message should be 20–5000 characters." },
      { status: 400 },
    );
  }
  if (company.length > 200) {
    return NextResponse.json(
      { error: "Company name is too long." },
      { status: 400 },
    );
  }
  if (budget && !ALLOWED_BUDGETS.has(budget)) {
    return NextResponse.json(
      { error: "Invalid budget range." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  const plain = [
    `New project inquiry from ${name}`,
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    company ? `Company: ${company}` : null,
    budget ? `Budget:  ${budget}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = renderEmail({ name, email, company, budget, message });

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New project inquiry — ${name}`,
      text: plain,
      html,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        { error: "Failed to send. Please email hello@launchdoor.studio directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please email hello@launchdoor.studio directly." },
      { status: 500 },
    );
  }
}

function renderEmail({
  name,
  email,
  company,
  budget,
  message,
}: {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}) {
  const row = (label: string, value: string, link?: string) =>
    `<tr>
      <td style="padding:6px 0;color:#666;font-size:13px;width:84px;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;font-size:14px;color:#111;">${
        link
          ? `<a href="${htmlEscape(link)}" style="color:#145dfd;text-decoration:none;">${htmlEscape(value)}</a>`
          : htmlEscape(value)
      }</td>
    </tr>`;

  return `<!DOCTYPE html>
<html>
  <body style="background:#f7f7f5;margin:0;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#111;">
    <table role="presentation" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e6e5e0;border-radius:12px;padding:28px;">
      <tr>
        <td>
          <p style="margin:0 0 4px;color:#838892;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">New project inquiry</p>
          <h1 style="margin:0 0 18px;font-size:20px;font-weight:600;letter-spacing:-0.01em;">${htmlEscape(name)}</h1>
          <table role="presentation" style="width:100%;border-collapse:collapse;">
            ${row("Email", email, `mailto:${email}`)}
            ${company ? row("Company", company) : ""}
            ${budget ? row("Budget", budget) : ""}
          </table>
          <div style="margin-top:22px;border-top:1px solid #ececea;padding-top:18px;">
            <p style="margin:0 0 8px;color:#838892;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">Message</p>
            <div style="white-space:pre-wrap;line-height:1.55;font-size:14px;color:#1a1d22;">${htmlEscape(message)}</div>
          </div>
          <p style="margin-top:22px;font-size:12px;color:#838892;">Reply directly to this email to respond to ${htmlEscape(name)}.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
