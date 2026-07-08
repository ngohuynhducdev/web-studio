import type { PageSection } from "@/types";

export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "heroSection", _key: "default-hero",
    eyebrow: "Specialty Coffee · TP.HCM",
    headingMain: "NĂNG\nLƯỢNG",
    headingItalic: "cho mọi",
    subtitle: "Specialty coffee tươi pha mỗi ngày — single origin, handcrafted, đủ vị để bắt đầu một ngày thật tốt.",
    ctaPrimary: "Xem menu",
    ctaSecondary: "Sự kiện tháng này →",
    stats: [
      { _key: "s1", num: "4.9★", label: "Google reviews" },
      { _key: "s2", num: "200+", label: "khách mỗi ngày" },
      { _key: "s3", num: "5+", label: "năm hoạt động" },
    ],
  },
  {
    _type: "servicesSection", _key: "default-services",
    eyebrow: "Thức uống",
    headingMain: "Chọn đúng vị,",
    headingItalic: "cảm đúng ngày.",
    subtitle: "Tất cả thức uống dùng hạt specialty grade — rang và xay ngay trong ngày để giữ hương vị tươi nhất.",
    services: [
      { _key: "sv1", emoji: "☕", tag: "Best seller", featured: true,  name: "Urban Latte",      size: "S · M · L", price: "45.000đ", desc: "Espresso đậm vị kết hợp milk foam mịn — cân bằng giữa đắng và ngọt, uống cả ngày không ngán." },
      { _key: "sv2", emoji: "🧊", tag: "Mới",         featured: false, name: "Cold Brew Tonic",  size: "M · L",     price: "55.000đ", desc: "Cold brew ngâm 18 giờ pha tonic water và lemon — đủ tỉnh, đủ mát, đủ để tiếp tục một buổi chiều dài." },
      { _key: "sv3", emoji: "🍵", tag: "Trending",    featured: true,  name: "Matcha Oat Latte", size: "M · L",     price: "60.000đ", desc: "Matcha Nhật xịn, oat milk béo mịn — đẹp hình, ngon vị, up story là bạn bè hỏi mua ở đâu liền." },
      { _key: "sv4", emoji: "🫧", tag: undefined,     featured: false, name: "Signature Dirty",  size: "L",         price: "65.000đ", desc: "Double espresso đổ lên fresh milk lạnh — hai lớp đen trắng đẹp mắt, vị đắng ngọt hòa quyện cực đỉnh." },
    ],
  },
  {
    _type: "aboutSection", _key: "default-about",
    eyebrow: "Về chúng tôi",
    headingMain: "5 năm làm specialty,",
    headingItalic: "không một ngày qua loa.",
    quote: "Cà phê tốt không cần giải thích — nó tự nói lên qua từng ngụm.",
    quoteAuthor: "Hà, Head Barista",
    paragraphs: [
      "Urban Brew ra đời 2019 từ niềm tin đơn giản: cà phê ngon thật sự không đắt tiền, và mọi người đều xứng đáng được uống thức uống tử tế.",
      "Tụi mình source hạt trực tiếp từ các farm tại Đà Lạt, Kon Tum — rang thủ công từng mẻ nhỏ, pha theo order từng ly. Không có ly nào giống ly nào, và điều đó làm tụi mình tự hào.",
    ],
  },
  {
    _type: "gallerySection", _key: "default-gallery",
    eyebrow: "Không gian",
    headingMain: "Một nơi để làm việc,",
    headingItalic: "chill, và kết nối.",
    items: [
      { _key: "g1", emoji: "☕", label: "không gian tầng 1", wide: true },
      { _key: "g2", emoji: "🪴", label: "góc xanh yêu thích", wide: false },
      { _key: "g3", emoji: "🎵", label: "acoustic corner",   wide: false },
      { _key: "g4", emoji: "🧊", label: "cold brew station", wide: false },
      { _key: "g5", emoji: "✨", label: "bar barista",       wide: false },
    ],
  },
  {
    _type: "reviewsSection", _key: "default-reviews",
    eyebrow: "Đánh giá",
    headingMain: "Khách hàng nói —",
    headingItalic: "tụi mình lắng nghe.",
    reviews: [
      { _key: "r1", name: "Minh Khoa",  handle: "@minhkhoa.jpg",    text: "Quán có vibe cực chất. Cold brew tonic ở đây mình uống mỗi tuần không ngán. Barista thân thiện, không show-off.", rating: 5 },
      { _key: "r2", name: "Thùy Linh", handle: "@thuylinhdesign", text: "Remote work ở đây cả ngày được. Wifi ổn, ổ cắm nhiều, playlist hay. Oat latte ngon nhất trong xóm luôn.", rating: 5 },
      { _key: "r3", name: "Đức Anh",   handle: "@ducanhfilm",    text: "Latte art workshop của shop xịn xò lắm. Học được cách pour tốt hơn mình tưởng. Highly recommend!", rating: 5 },
    ],
  },
  {
    _type: "bookingSection", _key: "default-booking",
    eyebrow: "Tìm quán",
    headingMain: "Ghé tụi mình nào!",
    zaloUrl: "https://zalo.me/0901234567",
    phone: "0901 234 567",
    address: "78 Nguyễn Huệ, Quận 1, TP.HCM",
    hours: [
      { _key: "h1", day: "Thứ 2 – Thứ 6", time: "07:00 – 22:00" },
      { _key: "h2", day: "Thứ 7",          time: "08:00 – 23:00" },
      { _key: "h3", day: "Chủ nhật",       time: "08:00 – 21:00" },
    ],
  },
];
