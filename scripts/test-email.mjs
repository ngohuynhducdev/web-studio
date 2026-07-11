// Run: node --env-file=.env.local scripts/test-email.mjs
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const to = process.env.NOTIFICATION_EMAIL;

if (!apiKey) { console.error("❌  RESEND_API_KEY missing from .env.local"); process.exit(1); }
if (!to)     { console.error("❌  NOTIFICATION_EMAIL missing from .env.local"); process.exit(1); }

const resend = new Resend(apiKey);

const { data, error } = await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL ?? "Web Studio <onboarding@resend.dev>",
  to,
  subject: "✅ Test email — Web Studio",
  html: "<p>Email notifications are working! 🎉</p><p>This is a test email from the webstudio.com system.</p>",
});

if (error) {
  console.error("❌  Send failed:", error);
  process.exit(1);
}

console.log("✅  Sent successfully! Email ID:", data.id);
console.log("   Check your inbox:", to);
