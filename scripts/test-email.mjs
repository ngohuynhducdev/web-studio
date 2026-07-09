// Run: node --env-file=.env.local scripts/test-email.mjs
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const to = process.env.NOTIFICATION_EMAIL;

if (!apiKey) { console.error("❌  RESEND_API_KEY chưa có trong .env.local"); process.exit(1); }
if (!to)     { console.error("❌  NOTIFICATION_EMAIL chưa có trong .env.local"); process.exit(1); }

const resend = new Resend(apiKey);

const { data, error } = await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL ?? "Web Studio <onboarding@resend.dev>",
  to,
  subject: "✅ Test email — Web Studio",
  html: "<p>Email notification hoạt động rồi! 🎉</p><p>Đây là email test từ hệ thống webstudio.com.</p>",
});

if (error) {
  console.error("❌  Gửi thất bại:", error);
  process.exit(1);
}

console.log("✅  Gửi thành công! Email ID:", data.id);
console.log("   Kiểm tra hộp thư:", to);
