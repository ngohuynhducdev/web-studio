import { Resend } from "resend";

export type NewOrderData = {
  clientName: string;
  phone: string;
  businessName: string;
  businessType?: string;
  templateSlug?: string;
  message?: string;
  orderId: string;
  previewSlug: string;
};

const INDUSTRY_LABELS: Record<string, string> = {
  nail:   "Nail salon",
  spa:    "Spa / Massage",
  cafe:   "Cafe / Bubble tea",
  gym:    "Gym / Yoga / Fitness",
  bakery: "Bakery",
  barber: "Barber / Hair salon",
  studio: "Studio",
  other:  "Other",
};

const TEMPLATE_LABELS: Record<string, string> = {
  "thai-spa":  "Thai Spa",
  "herbal-grove-spa": "Herbal Grove Spa",
  "mist-spring-spa":  "Mist Spring Spa",
};

// Returns false (silently) when env vars are missing — order creation still succeeds.
export async function sendNewOrderNotification(data: NewOrderData): Promise<void> {
  const to = process.env.NOTIFICATION_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!to || !apiKey) return;

  // Construct lazily — never at module load, so a missing key (e.g. staging,
  // where email is intentionally disabled) doesn't crash the build/import.
  const resend = new Resend(apiKey);

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Web Studio <onboarding@resend.dev>";

  const industryLabel = data.businessType
    ? (INDUSTRY_LABELS[data.businessType] ?? data.businessType)
    : "—";
  const templateLabel = data.templateSlug
    ? (TEMPLATE_LABELS[data.templateSlug] ?? data.templateSlug)
    : "Not chosen / needs advice";

  await resend.emails.send({
    from,
    to,
    subject: `🛎 New order — ${data.businessName} (${industryLabel})`,
    html: buildHtml({ ...data, industryLabel, templateLabel }),
  });
}

// Escape user-supplied text before interpolating into the notification HTML
// (prevents HTML/attribute injection in the recipient's email client).
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 12px;color:#6f4e37;font-weight:600;white-space:nowrap;width:140px">${label}</td>
      <td style="padding:8px 12px;color:#2d2419">${value}</td>
    </tr>`;
}

function buildHtml(
  d: NewOrderData & { industryLabel: string; templateLabel: string }
): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudio.com";
  const adminUrl = `${siteUrl}/admin/orders`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#faf6f0;font-family:'Helvetica Neue',Arial,sans-serif">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08)">

    <!-- Header -->
    <div style="background:#6f4e37;padding:24px 32px">
      <p style="margin:0;color:#faf6f0;font-size:13px;letter-spacing:.08em;text-transform:uppercase">Web Studio</p>
      <h1 style="margin:6px 0 0;color:#fff;font-size:22px;font-weight:700">New order 🎉</h1>
    </div>

    <!-- Body -->
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;border:1px solid #e8ddd0;border-radius:8px;overflow:hidden">
        <tbody>
          ${row("Client", escapeHtml(d.clientName))}
          ${row("Phone / Zalo", `<a href="tel:${escapeHtml(d.phone)}" style="color:#6f4e37">${escapeHtml(d.phone)}</a>`)}
          ${row("Business name", `<strong>${escapeHtml(d.businessName)}</strong>`)}
          ${row("Industry", escapeHtml(d.industryLabel))}
          ${row("Interested template", escapeHtml(d.templateLabel))}
          ${d.message ? row("Notes", escapeHtml(d.message).replace(/\n/g, "<br>")) : ""}
          ${row("Order code", `<code style="background:#f5ede6;padding:2px 6px;border-radius:4px">${escapeHtml(d.previewSlug)}</code>`)}
        </tbody>
      </table>

      <div style="margin-top:24px;text-align:center">
        <a href="${adminUrl}" style="display:inline-block;background:#6f4e37;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px">
          View order dashboard →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;border-top:1px solid #e8ddd0;text-align:center">
      <p style="margin:0;font-size:12px;color:#a09080">
        This email is sent automatically when a new order comes in on webstudio.com
      </p>
    </div>

  </div>
</body>
</html>`;
}
