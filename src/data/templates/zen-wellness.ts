import type { PageSection } from "@/types";

// Default content cho Zen Wellness — Modern Wellness Clinic.
// Persona: khách CEO/professional 35-50t, wellness journey hotel-style.
// Signature sections: WellnessJourney (purpose-picker) + MemberProgram (subscription tiers).
export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "heroSection", _key: "default-hero",
    eyebrow: "Zen Wellness · Modern Sanctuary",
    headingMain: "không gian\ndành riêng.",
    headingItalic: "wellness",
    subtitle:
      "Wellness sanctuary hiện đại — chăm sóc theo lộ trình cá nhân, không phải một-lần-rồi-thôi. Thiết kế cho người bận rộn muốn nghiêm túc với chính mình.",
    ctaPrimary: "Khám phá hành trình",
    ctaSecondary: "Xem membership",
    stats: [
      { _key: "s1", num: "500+", label: "thành viên gắn bó" },
      { _key: "s2", num: "8 năm", label: "wellness sanctuary" },
      { _key: "s3", num: "92%",   label: "khách thành member" },
    ],
  },
  {
    _type: "featuresSection", _key: "default-trust",
    items: [
      { _key: "t1", emoji: "✦", title: "8 năm wellness sanctuary" },
      { _key: "t2", emoji: "✦", title: "Chuyên viên đào tạo quốc tế" },
      { _key: "t3", emoji: "✦", title: "100% sản phẩm hữu cơ" },
      { _key: "t4", emoji: "✦", title: "Membership-first model" },
    ],
  },
  {
    _type: "featuresSection", _key: "default-journey",
    eyebrow: "Wellness Journey",
    headingMain: "Bạn đang tìm",
    headingItalic: "gì hôm nay?",
    items: [
      { _key: "j1", emoji: "💤", title: "Sleep & Rest",
        desc: "Liệu trình giảm stress sâu, cải thiện chất lượng giấc ngủ. Phù hợp người mất ngủ kinh niên, lo âu kéo dài." },
      { _key: "j2", emoji: "🌿", title: "Detox & Reset",
        desc: "Thanh lọc cơ thể, tái tạo năng lượng. Cho người sau chuyến công tác dài hoặc giai đoạn áp lực cao." },
      { _key: "j3", emoji: "🧘", title: "Stress Relief",
        desc: "Giải tỏa căng thẳng tích lũy. Hot stone, aromatherapy, ấn huyệt — combo cho người ngồi nhiều, đau vai gáy." },
      { _key: "j4", emoji: "✨", title: "Beauty & Glow",
        desc: "Sáng da, cải thiện kết cấu, anti-aging. Chăm sóc da mặt + body theo công thức hữu cơ." },
    ],
  },
  {
    _type: "servicesSection", _key: "default-services",
    eyebrow: "Liệu trình",
    headingMain: "danh sách",
    headingItalic: "đầy đủ.",
    subtitle: "Mỗi liệu trình thiết kế theo journey — chọn theo mục đích thay vì chọn theo tên.",
    services: [
      { _key: "sv1", name: "Hot Stone Deep Recovery",     duration: "90 phút",  price: "780.000đ", desc: "Đá basalt nung nóng đặt dọc cột sống — phục hồi cơ sâu, giảm đau mãn tính. Dành cho Stress Relief journey.",
        imageUrl: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=1200&q=85&fit=crop&auto=format" },
      { _key: "sv2", name: "Aromatherapy Sleep Ritual",   duration: "75 phút",  price: "620.000đ", desc: "Tinh dầu lavender + chamomile + bergamot — massage chậm theo nhịp thở. Cho Sleep journey.",
        imageUrl: "https://images.unsplash.com/photo-1635575066917-e788c2bd06b7?w=1200&q=85&fit=crop&auto=format" },
      { _key: "sv3", name: "Detox Body Wrap & Scrub",     duration: "90 phút",  price: "850.000đ", desc: "Tẩy da chết muối biển + body wrap thảo mộc — thanh lọc, trẻ hóa làn da. Cho Detox journey.",
        imageUrl: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?w=1200&q=85&fit=crop&auto=format" },
      { _key: "sv4", name: "Organic Facial Glow",         duration: "60 phút",  price: "580.000đ", desc: "Chăm sóc da mặt với serum hữu cơ nhập Pháp — làm sáng, cấp ẩm sâu. Cho Beauty journey.",
        imageUrl: "https://images.unsplash.com/photo-1731514771613-991a02407132?w=1200&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "pricingSection", _key: "default-member",
    eyebrow: "Membership",
    headingMain: "Trở thành",
    headingItalic: "thành viên.",
    subtitle:
      "Khách gắn bó tiết kiệm trung bình 30% so với mua lẻ. Ưu tiên đặt lịch, sự kiện riêng, tư vấn cá nhân hàng tháng.",
    packages: [
      {
        _key: "mb1", name: "Silver",
        desc: "Bước đầu vào wellness journey — chăm sóc nhẹ nhàng định kỳ.",
        price: "2.5tr", duration: "/ tháng", featured: false,
        includes: [
          "2 buổi liệu trình 60 phút/tháng",
          "1 buổi tư vấn lifestyle",
          "Ưu tiên đặt lịch 24h trước",
          "Tặng kèm trà thảo mộc mang về",
        ],
      },
      {
        _key: "mb2", name: "Gold",
        desc: "Cho người chăm sóc bản thân nghiêm túc — most popular.",
        price: "4.5tr", duration: "/ tháng", featured: true,
        includes: [
          "4 buổi liệu trình 90 phút/tháng",
          "2 buổi chăm sóc da/body",
          "Tư vấn lifestyle hàng tháng",
          "Ưu tiên đặt lịch 48h trước",
          "Tặng 1 thẻ guest mời bạn",
          "Discount 20% sản phẩm tại tiệm",
        ],
      },
      {
        _key: "mb3", name: "Platinum",
        desc: "Trải nghiệm trọn vẹn — unlimited access cho người yêu cầu cao.",
        price: "8.5tr", duration: "/ tháng", featured: false,
        includes: [
          "Liệu trình không giới hạn",
          "Chăm sóc da/body không giới hạn",
          "Personal wellness coach 1-1",
          "Phòng VIP riêng tư",
          "Sự kiện member-only hàng quý",
          "Discount 30% sản phẩm",
        ],
      },
    ],
  },
  {
    _type: "teamSection", _key: "default-team",
    eyebrow: "Sanctuary Team",
    headingMain: "chuyên viên",
    headingItalic: "đào tạo quốc tế.",
    members: [
      { _key: "m1", name: "Minh Châu",   role: "Founder & Lead Therapist", specialty: "Hot stone · Deep tissue recovery", exp: "12 năm", cert: "ITEC London + Bali certified — chuyên trị liệu phục hồi cơ sâu cho khách CEO, người ngồi nhiều.",
        imageUrl: "https://images.unsplash.com/photo-1526231237819-de846f3a7e16?w=900&q=85&fit=crop&auto=format" },
      { _key: "m2", name: "Thanh Hà",    role: "Senior Skincare Specialist", specialty: "Aromatherapy · Organic facial",  exp: "7 năm",  cert: "CIBTAC Aromatherapy — chuyên gia sản phẩm hữu cơ nhập Pháp.",
        imageUrl: "https://images.unsplash.com/photo-1505460470885-c72830808c42?w=900&q=85&fit=crop&auto=format" },
      { _key: "m3", name: "Trọng Nghĩa", role: "Wellness Coach",              specialty: "Sports recovery · Sleep ritual", exp: "5 năm",  cert: "VN Physiotherapy Association — chuyên phục hồi cho người tập gym + người mất ngủ.",
        imageUrl: "https://images.unsplash.com/photo-1681097561932-36d0df02b379?w=900&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "gallerySection", _key: "default-gallery",
    eyebrow: "Sanctuary Space",
    headingMain: "một nơi",
    headingItalic: "để thở.",
    items: [
      { _key: "g1", label: "phòng deep tissue",        wide: true,  imageUrl: "https://images.unsplash.com/photo-1641301315735-498855c6e3a8?w=1600&q=85&fit=crop&auto=format" },
      { _key: "g2", label: "sảnh đón warm welcome",     wide: false, imageUrl: "https://images.unsplash.com/photo-1649794349004-d6c8ddf347d3?w=800&q=85&fit=crop&auto=format" },
      { _key: "g3", label: "lab tinh dầu hữu cơ",       wide: false, imageUrl: "https://images.unsplash.com/photo-1676852148076-7a92002419f3?w=800&q=85&fit=crop&auto=format" },
      { _key: "g4", label: "couples suite riêng tư",   wide: false, imageUrl: "https://images.unsplash.com/photo-1690310588789-8fcee016f619?w=800&q=85&fit=crop&auto=format" },
      { _key: "g5", label: "lounge nghỉ giữa giờ",      wide: false, imageUrl: "https://images.unsplash.com/photo-1592324519748-98825f09ec29?w=800&q=85&fit=crop&auto=format" },
      { _key: "g6", label: "kệ sản phẩm signature",     wide: true,  imageUrl: "https://images.unsplash.com/photo-1767360963892-3353defd6584?w=1600&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "reviewsSection", _key: "default-reviews",
    eyebrow: "Member Voices",
    headingMain: "thành viên",
    headingItalic: "chia sẻ.",
    reviews: [
      { _key: "r1", name: "Phương Anh", handle: "PA", text: "Mình tham gia Gold membership được 8 tháng. Khác biệt thấy rõ ở chất lượng giấc ngủ và năng lượng làm việc. Đáng đồng tiền.", rating: 5, service: "Gold Member · Sleep Journey" },
      { _key: "r2", name: "Văn Hùng",   handle: "VH", text: "CEO bận thường xuyên travel. Membership Gold cho mình lịch cố định + ưu tiên book — không phải lo đặt chỗ. 5★.", rating: 5, service: "Gold Member · Stress Relief" },
      { _key: "r3", name: "Bảo Ngọc",   handle: "BN", text: "Da nhạy cảm khó tìm sản phẩm phù hợp. Beauty journey + chuyên viên Thanh Hà giúp mình thấy da đổi rõ sau 3 tháng.", rating: 5, service: "Silver Member · Beauty Journey" },
    ],
  },
  {
    _type: "bookingSection", _key: "default-booking",
    eyebrow: "Đặt lịch trial",
    headingMain: "thử 1 buổi",
    headingItalic: "trước khi quyết.",
    subtitle: "Buổi trial 60 phút giá 380k — khám phá xem Zen có phải sanctuary phù hợp với bạn không. Không cần cam kết membership.",
    zaloUrl: "https://zalo.me/0903000000",
    phone: "0903 000 000",
    address: "123 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
    hours: [
      { _key: "h1", day: "Thứ 2 – Thứ 7", time: "9h – 21h" },
      { _key: "h2", day: "Chủ nhật",       time: "10h – 19h (members only)" },
    ],
  },
];
