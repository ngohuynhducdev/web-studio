import type { Template, Step, TestimonialItem, PricingFeature, PricingPlan } from "@/types";
import { STUDIO_ZALO_URL } from "@/data/layout";

export type { Step, TestimonialItem, PricingFeature, PricingPlan };

// ── TapeStrip ────────────────────────────────────────────────────────────────

export const DEFAULT_TAPE_ITEMS = [
  "Tiệm Nail", "Spa & Massage", "Café & Quán", "Phòng Gym",
  "Salon Tóc", "Nha Khoa", "Nhà Hàng", "Studio Chụp Ảnh",
];

// ── Hero ─────────────────────────────────────────────────────────────────────

export const DEFAULT_HERO = {
  heroEyebrow:      "TIỆM WEB NHỎ · KỂ TỪ 2024",
  heroHeading:      "chọn mẫu — đo may —",
  heroHeadingItal:  "trong 5 ngày.",
  heroLede:         "tiệm web nhỏ có sẵn 15+ mẫu website đẹp cho tiệm nail, spa, café, gym. bạn chọn mẫu, mình customize theo tiệm bạn — không vội, không qua loa.",
  heroBadge:        "bàn giao trong 5 ngày",
  heroCtaPrimary:   "xem mẫu",
  heroCtaSecondary: "về chúng mình",
  heroMeta: ["không phí phát sinh", "chỉnh sửa 30 ngày miễn phí", "domain & hosting năm đầu"],
};

// ── HowItWorks ───────────────────────────────────────────────────────────────

export const DEFAULT_HIW_HEADINGS = {
  hiwEyebrow:    "CÁCH HOẠT ĐỘNG",
  hiwHeading:    "ba bước,",
  hiwHeadingItal: "từ tốn",
};

export const DEFAULT_STEPS: Step[] = [
  { _key: "h1", title: "chọn mẫu",           icon: "grid",  desc: "xem 15+ mẫu thiết kế đã có sẵn. chọn cái hợp với tiệm — màu sắc, không khí, kiểu chữ. nếu chưa chắc, tụi em gợi ý." },
  { _key: "h2", title: "gửi thông tin",       icon: "chat",  desc: "logo, ảnh, nội dung, bảng giá — anh chị gửi qua zalo. tụi em lo phần còn lại: layout, viết lại câu chữ, sắp ảnh." },
  { _key: "h3", title: "có web trong 5 ngày", icon: "pulse", desc: "tụi em deploy, gắn tên miền của tiệm, bàn giao tài khoản. có hướng dẫn nhỏ để anh chị tự cập nhật sau này." },
];

// ── TemplatesSection ─────────────────────────────────────────────────────────

export const DEFAULT_TEMPLATES_SECTION = {
  tplEyebrow:     "MẪU NỔI BẬT",
  tplHeading:     "bốn mẫu được chọn",
  tplHeadingItal: "nhiều nhất tháng này.",
};

// ── Testimonials ─────────────────────────────────────────────────────────────

export const DEFAULT_TESTI_HEADINGS = {
  testiEyebrow: "KHÁCH HÀNG NÓI GÌ",
  testiHeading: "không phải mình tự khen.",
};

export const FALLBACK_TESTIMONIALS: TestimonialItem[] = [
  { _key: "t1", clientName: "Chị Hương", shopName: "Lily Nail Studio", content: "Tiệm làm nail đẹp nhất mình từng đến. Web xong là khách tự vào đặt lịch, không cần hỏi inbox nữa — tiết kiệm cả tiếng mỗi ngày.", rating: 5, date: "Tháng 4, 2025" },
  { _key: "t2", clientName: "Anh Nam",   shopName: "Zen Spa",           content: "Không gian thư giãn, web đẹp đúng vibe. Nhìn vào là thấy spa mình chuyên nghiệp hơn hẳn. Khách mới book nhiều hơn từ khi có web.", rating: 5, date: "Tháng 3, 2025" },
  { _key: "t3", clientName: "Chị Lan",   shopName: "Moonlight Café",    content: "Khách vào web đặt bàn online nhiều hơn hẳn. 5 ngày là có web, đúng hẹn, không một đồng phụ phí. Làm việc tử tế, mình giới thiệu nhiều bạn rồi.", rating: 5, date: "Tháng 2, 2025" },
];

// ── Pricing ──────────────────────────────────────────────────────────────────

export const DEFAULT_PRICING_HEADINGS = {
  pricingEyebrow:     "BẢNG GIÁ",
  pricingHeading:     "ba gói —",
  pricingHeadingItal: "đủ dùng cho tiệm nhỏ,",
};

export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    _key: "basic",
    name: "cơ bản",
    description: "một trang, đủ điều cần kể về tiệm.",
    price: 299000,
    features: [
      { _key: "f1", text: "1 trang landing đầy đủ",       included: true  },
      { _key: "f2", text: "nút gọi · zalo · chỉ đường",   included: true  },
      { _key: "f3", text: "tên miền .vn năm đầu",         included: true  },
      { _key: "f4", text: "chỉnh sửa miễn phí 30 ngày",   included: true  },
      { _key: "f5", text: "đặt lịch online",               included: false },
      { _key: "f6", text: "gallery ảnh & bảng giá động",  included: false },
    ],
    cta: "chọn gói cơ bản",
    footnote: "phù hợp tiệm mới mở",
  },
  {
    _key: "standard",
    name: "tiêu chuẩn",
    description: "3 trang — landing, dịch vụ, liên hệ. đủ cho 90% tiệm.",
    price: 499000,
    features: [
      { _key: "f1", text: "3 trang tuỳ chỉnh",            included: true  },
      { _key: "f2", text: "đặt lịch online / zalo",        included: true  },
      { _key: "f3", text: "gallery ảnh & bảng giá động",  included: true  },
      { _key: "f4", text: "tên miền + hosting năm đầu",   included: true  },
      { _key: "f5", text: "chỉnh sửa miễn phí 60 ngày",   included: true  },
      { _key: "f6", text: "blog · SEO cơ bản",             included: false },
    ],
    cta: "chọn gói tiêu chuẩn",
    footnote: "8/10 khách chọn gói này",
    featured: true,
  },
  {
    _key: "pro",
    name: "pro",
    description: "5 trang trở lên, blog, đa ngôn ngữ — cho tiệm đã quen khách.",
    price: 799000,
    features: [
      { _key: "f1", text: "5+ trang, tuỳ chỉnh sâu",              included: true },
      { _key: "f2", text: "blog · SEO cơ bản",                     included: true },
      { _key: "f3", text: "tiếng Việt + tiếng Anh",                included: true },
      { _key: "f4", text: "tích hợp google maps · zalo OA",        included: true },
      { _key: "f5", text: "chỉnh sửa miễn phí 90 ngày",            included: true },
      { _key: "f6", text: "ưu tiên hỗ trợ",                        included: true },
    ],
    cta: "chọn gói pro",
    footnote: "cho tiệm có chi nhánh",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────────

export const DEFAULT_FAQ_ITEMS = [
  {
    _key: "faq1",
    q: "Bao lâu thì có web?",
    a: "Thường 5 ngày làm việc kể từ khi bạn gửi đủ thông tin (logo, ảnh, nội dung). Nếu cần gấp hơn, nhắn Zalo để mình sắp xếp.",
  },
  {
    _key: "faq2",
    q: "Giá đã bao gồm những gì?",
    a: "Bao gồm thiết kế, lập trình, hosting, tên miền .vn năm đầu và chỉnh sửa miễn phí 30 ngày sau bàn giao. Không có phí ẩn.",
  },
  {
    _key: "faq3",
    q: "Tôi có thể thay đổi màu sắc, logo, nội dung không?",
    a: "Hoàn toàn được. Tất cả màu sắc, font chữ, logo, ảnh và nội dung đều tùy chỉnh theo tiệm của bạn.",
  },
  {
    _key: "faq4",
    q: "Sau khi bàn giao, tôi có thể tự cập nhật không?",
    a: "Có. Mình sẽ hướng dẫn bạn chỉnh sửa nội dung cơ bản qua Sanity Studio — đơn giản như dùng Google Docs, không cần biết code.",
  },
  {
    _key: "faq5",
    q: "Nếu tôi không hài lòng với kết quả thì sao?",
    a: "Mình chỉnh sửa miễn phí trong 30 ngày đầu cho đến khi bạn ưng ý. Trước khi bàn giao, mình luôn xin feedback để sửa trước.",
  },
];

// ── CTA ──────────────────────────────────────────────────────────────────────

export const DEFAULT_CTA = {
  ctaEyebrow:     "BẮT ĐẦU THÔI",
  ctaHeading:     "tiệm bạn xứng đáng có",
  ctaHeadingItal: "một web tử tế.",
  ctaBody:        "không cần biết mình muốn gì — cứ nhắn, mình tư vấn miễn phí.",
  ctaZaloUrl:     STUDIO_ZALO_URL,
  ctaPhone:       "0903 555 119",
  ctaHours:       "Thứ 2 – Thứ 7, 9h–18h",
};

// ── HomeTemplateGrid (fallback khi CMS trống) ────────────────────────────────

export const FALLBACK_TEMPLATES: Template[] = [
  {
    _id: "1",
    title: "Pink Luxury",
    slug: "pink-luxury",
    description: "Thiết kế sang trọng, tông hồng pastel — phù hợp tiệm nail cao cấp muốn ghi dấu ấn từ cái nhìn đầu tiên.",
    industry: "nail",
    price: 499000,
    demoUrl: "#",
    thumbnailUrl: "/images/nail-polish-wall.jpg",
    features: ["đặt lịch online", "gallery ảnh", "bảng giá"],
    isFeatured: true,
    isActive: true,
  },
  {
    _id: "2",
    title: "Zen Wellness",
    slug: "zen-wellness",
    description: "Tone xanh sage nhẹ nhàng, bố cục thoáng — tạo cảm giác thư thái ngay từ trang chủ cho spa & massage.",
    industry: "spa",
    price: 499000,
    demoUrl: "#",
    thumbnailUrl: "/images/spa-flowers.jpg",
    features: ["đặt hẹn", "liệu trình", "gói dịch vụ"],
    isFeatured: true,
    isActive: true,
  },
  {
    _id: "3",
    title: "Vintage Cozy",
    slug: "vintage-cozy",
    description: "Màu nâu ấm, font serif nhẹ nhàng — đúng không khí quán cà phê specialty chậm rãi, tử tế.",
    industry: "cafe",
    price: 499000,
    demoUrl: "#",
    thumbnailUrl: "/images/cafe-interior-01.jpg",
    features: ["menu", "câu chuyện thương hiệu", "đặt bàn"],
    isFeatured: true,
    isActive: true,
  },
  {
    _id: "4",
    title: "Bold Energy",
    slug: "bold-energy",
    description: "Tối, mạnh, dứt khoát — dành cho gym & fitness studio muốn truyền năng lượng ngay từ trang web.",
    industry: "gym",
    price: 499000,
    demoUrl: "#",
    thumbnailUrl: "/images/gym-fitness.jpg",
    features: ["lớp học", "đăng ký thử", "huấn luyện viên"],
    isFeatured: false,
    isActive: true,
  },
];
