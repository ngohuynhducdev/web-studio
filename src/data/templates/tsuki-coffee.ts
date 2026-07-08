import type { PageSection } from "@/types";

// Default content cho Tsuki Coffee — café Nhật Bản hiện đại, dark luxury.
export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "heroSection", _key: "hero",
    eyebrow: "Specialty Café · 月",
    headingMain: "Đêm chậm rãi,",
    headingItalic: "cà phê chậm hơn.",
    subtitle:
      "Specialty coffee Nhật Bản — hạt rang ngày, pha tay, phục vụ trong không gian dành riêng cho người yêu sự tĩnh lặng.",
    ctaPrimary: "Đặt chỗ ngay",
    ctaSecondary: "Khám phá menu",
  },
  {
    _type: "aboutSection", _key: "about",
    eyebrow: "Câu chuyện",
    headingMain: "Một chốn dừng",
    headingItalic: "giữa Sài Gòn không ngủ.",
    paragraphs: [
      "Tsuki ra đời từ niềm tin rằng buổi tối có thể là khoảnh khắc đẹp nhất trong ngày — khi đèn vàng dịu xuống, sương nhẹ phủ kính, và bạn cuối cùng cũng có lý do để ngồi xuống.",
      "Chúng tôi nhập hạt single-origin trực tiếp từ Kyoto và Đà Lạt — rang thủ công từng mẻ nhỏ, pha bằng kỹ thuật pour-over Nhật. Không lớn lao. Chỉ là cà phê tử tế trong một không gian tử tế.",
    ],
    quote: "Một tách cà phê ngon không thay đổi ngày của bạn — nhưng nó cho bạn 15 phút để thở.",
    quoteAuthor: "Haru, Head Barista",
  },
  {
    _type: "servicesSection", _key: "signature",
    eyebrow: "Signature",
    headingMain: "Ba ly đặc biệt,",
    headingItalic: "ba câu chuyện.",
    subtitle:
      "Bộ sưu tập signature pha riêng cho Tsuki — không có ở bất kỳ tiệm nào khác.",
    services: [
      {
        _key: "sg1", tag: "House Special", name: "Tsuki Latte",
        price: "85.000đ",
        desc: "Espresso Ethiopia đậm vị kết hợp với milk foam hạt mơ Nhật. Vị béo dày, dư âm hoa quả mãi không phai.",
      },
      {
        _key: "sg2", tag: "Best Seller", name: "Hojicha Cold Brew",
        price: "95.000đ",
        desc: "Trà hojicha rang đậm pha cold brew 18 giờ với oat milk. Vị nướng thảo mộc, ngọt nhẹ — đẹp nhất giờ midnight.",
      },
      {
        _key: "sg3", tag: "Mới", name: "Yuzu Espresso Tonic",
        price: "98.000đ",
        desc: "Double espresso đổ trên tonic water + tinh dầu yuzu Nhật. Lạnh, sảng khoái, hương cam quýt thoảng — uống thay cocktail.",
      },
    ],
  },
  {
    _type: "gallerySection", _key: "space",
    eyebrow: "Không gian",
    headingMain: "Trong vắt,",
    headingItalic: "ấm áp, riêng tư.",
    note: "Mở cửa 17:00 — 1:00",
    items: [
      { _key: "sp1", label: "tầng 1 · counter bar",      wide: true,  imageUrl: "https://images.unsplash.com/photo-1560640507-a9e7a39b38f0?w=1400&q=85&fit=crop&auto=format" },
      { _key: "sp2", label: "góc reading · tầng 2",       wide: false, imageUrl: "https://images.unsplash.com/photo-1599631171355-8aceb4cdedd5?w=800&q=85&fit=crop&auto=format" },
      { _key: "sp3", label: "bàn đôi · cửa sổ",           wide: false, imageUrl: "https://images.unsplash.com/photo-1618616058461-9b827bc808e3?w=800&q=85&fit=crop&auto=format" },
      { _key: "sp4", label: "barista station",             wide: false, imageUrl: "https://images.unsplash.com/photo-1762657425062-3817aaf24312?w=800&q=85&fit=crop&auto=format" },
      { _key: "sp5", label: "private nook · 4 ghế",        wide: false, imageUrl: "https://images.unsplash.com/photo-1564759254519-75290ce0af79?w=800&q=85&fit=crop&auto=format" },
      { _key: "sp6", label: "ban công · view phố",         wide: true,  imageUrl: "https://images.unsplash.com/photo-1536183801678-ecc5eaf42bf9?w=1400&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "servicesSection", _key: "menu",
    eyebrow: "Menu",
    headingMain: "Đầy đủ menu,",
    headingItalic: "không vội vã.",
    subtitle:
      "Toàn bộ thức uống dùng hạt specialty + nguyên liệu nhập Nhật. Không đường nhân tạo, không siro công nghiệp.",
    services: [
      { _key: "m1", name: "Espresso Single",      size: "30ml",      price: "55.000đ", desc: "Hạt Kyoto single-origin, pha thủ công. Vị ngọt cacao, dư âm hoa nhài." },
      { _key: "m2", name: "Pour Over Hario V60",  size: "200ml",     price: "75.000đ", desc: "Cà phê pha tay theo kỹ thuật V60 Nhật — bạn ngắm pha tại bàn." },
      { _key: "m3", name: "Iced Latte",            size: "S · M",      price: "65.000đ", desc: "Espresso đôi + sữa tươi + đá vê tròn. Đơn giản nhưng cân bằng tuyệt đối." },
      { _key: "m4", name: "Matcha Latte Nhật",    size: "M",          price: "78.000đ", desc: "Matcha Uji uống nóng hoặc lạnh, oat milk hoặc sữa tươi nguyên kem." },
      { _key: "m5", name: "Hojicha Latte",         size: "M",          price: "72.000đ", desc: "Trà hojicha rang nâu — vị khói nhẹ, không gắt, hợp với người dị ứng caffeine." },
      { _key: "m6", name: "Bánh trà xanh Kyoto",   size: "1 lát",       price: "58.000đ", desc: "Bánh mochi cuộn trà xanh tự làm — ngọt thanh, dùng tốt với pour over." },
    ],
  },
  {
    _type: "bookingSection", _key: "booking",
    eyebrow: "Đặt chỗ",
    headingMain: "Giữ một bàn",
    headingItalic: "tối nay nhé.",
    subtitle:
      "Tsuki giới hạn 24 chỗ mỗi buổi để giữ không gian yên tĩnh. Nhắn Zalo trước để chắc chắn có chỗ.",
    zaloUrl: "https://zalo.me/0901234567",
    phone: "0901 234 567",
    address: "18 Lý Tự Trọng, Quận 1, TP.HCM",
    hours: [
      { _key: "h1", day: "Thứ 2 – Thứ 5", time: "17:00 – 24:00" },
      { _key: "h2", day: "Thứ 6 – Thứ 7", time: "17:00 – 01:00" },
      { _key: "h3", day: "Chủ nhật",        time: "17:00 – 23:00" },
    ],
  },
];
