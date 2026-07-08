import type { PageSection } from "@/types";

export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "bannerCarouselSection", _key: "default-carousel",
    enabled: false,
    slides: [
      {
        _key: "s1",
        heading: "Đêm Giữa Tuần, Giảm 20%",
        subtext: "Liệu trình buổi tối Thứ 3 đến Thứ 5. Đặt trước trong ngày.",
        ctaLabel: "Giữ Chỗ Ngay",
        ctaUrl: "#booking",
        bgColor: "#2c2823",
      },
      {
        _key: "s2",
        heading: "Thẻ Liệu Trình 10 Lượt",
        subtext: "Tặng 2 lượt xông hơi thảo mộc, dùng chung được cho người thân.",
        ctaLabel: "Nhắn Zalo",
        ctaUrl: "#booking",
        bgColor: "#33302a",
      },
    ],
  },
  {
    _type: "heroSection", _key: "default-hero",
    eyebrow: "SUỐI MÂY · SPA & WELLNESS",
    headingMain: "Thư giãn,\nhồi phục,\ncân bằng.",
    headingItalic: "",
    subtitle: "Suối Mây là chốn dừng chân giữa lòng phố, nơi nghi thức chăm sóc cổ truyền gặp không gian tĩnh và ấm. Một giờ ở đây, để cơ thể được nghỉ thật sự.",
    ctaPrimary: "Đặt lịch ngay",
    ctaSecondary: "Xem dịch vụ",
    slides: [
      { _key: "hs1", imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2000&q=85&fit=crop&auto=format", eyebrow: "SUỐI MÂY · SPA & WELLNESS", headingMain: "Thư giãn,\nhồi phục,\ncân bằng.", headingItalic: "", subtitle: "Suối Mây là chốn dừng chân giữa lòng phố, nơi nghi thức chăm sóc cổ truyền gặp không gian tĩnh và ấm. Một giờ ở đây, để cơ thể được nghỉ thật sự." },
      { _key: "hs2", imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=2000&q=85&fit=crop&auto=format", eyebrow: "Không gian riêng tư", headingMain: "Tĩnh lặng\ncho riêng bạn.", headingItalic: "", subtitle: "Phòng trị liệu riêng, ánh đèn ấm và hương thảo mộc dịu nhẹ. Một giờ để gác lại mọi ồn ào ngoài kia." },
      { _key: "hs3", imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=2000&q=85&fit=crop&auto=format", eyebrow: "Chăm sóc chuyên sâu", headingMain: "Mỗi liệu trình,\nmột hành trình.", headingItalic: "", subtitle: "Trị liệu viên lành nghề lắng nghe cơ thể bạn và điều chỉnh từng động tác cho vừa vặn nhất." },
    ],
  },
  {
    _type: "servicesSection", _key: "default-services",
    eyebrow: "Dịch vụ của chúng tôi",
    headingMain: "Liệu trình",
    headingItalic: "đặc trưng.",
    subtitle: "Từ nghi thức cổ truyền đến chăm sóc hiện đại, mỗi liệu trình được dựng quanh hơi thở và sự thư giãn của bạn.",
    services: [
      {
        _key: "sv1", name: "Massage trị liệu toàn thân", duration: "60 phút", price: "480.000đ",
        desc: "Massage thư giãn sâu với tinh dầu ấm, giải tỏa căng cơ vai gáy và lưng, phù hợp người ngồi máy tính nhiều.",
        imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&q=80&fit=crop&auto=format",
        includes: ["Ngâm chân thảo mộc · 5 phút", "Massage lưng & vai gáy · 30 phút", "Massage tay & chân · 20 phút", "Trà gừng mật ong thư giãn"],
      },
      {
        _key: "sv2", name: "Chăm sóc da mặt chuyên sâu", duration: "75 phút", price: "520.000đ",
        desc: "Làm sạch, tẩy tế bào chết và đắp mặt nạ dưỡng từ thảo mộc hữu cơ, da sáng và đều màu hơn rõ rệt.",
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&q=80&fit=crop&auto=format",
        includes: ["Làm sạch & tẩy trang · 15 phút", "Tẩy tế bào chết + xông hơi · 15 phút", "Massage mặt nâng cơ · 20 phút", "Đắp mặt nạ dưỡng · 20 phút", "Thoa serum & chống nắng"],
      },
      {
        _key: "sv6", name: "Liệu trình đôi thư giãn", duration: "120 phút", price: "1.250.000đ",
        desc: "Phòng riêng cho hai người, hai giường trị liệu, khay trà bánh, không gian yên tĩnh trọn buổi. Nên đặt trước 2 ngày.",
        imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=200&q=80&fit=crop&auto=format",
        includes: ["Xông hơi thảo dược chung · 20 phút", "Massage toàn thân mỗi người · 60 phút", "Đắp mặt nạ thư giãn · 20 phút", "Khay trà bánh & nghỉ ngơi"],
      },
    ],
  },
  {
    _type: "menuSection", _key: "default-menu",
    eyebrow: "Bảng giá",
    headingMain: "Menu",
    headingItalic: "dịch vụ.",
    subtitle: "Giá đã gồm khăn, trà thảo mộc và tủ khoá riêng. Bảng giá tham khảo, nhắn Zalo để được tư vấn gói phù hợp.",
    note: "Liệu trình có thể điều chỉnh theo nhu cầu. Khách quen có ưu đãi riêng.",
    categories: [
      {
        _key: "sc1", title: "Massage & Trị liệu",
        items: [
          { _key: "pi1", name: "Massage trị liệu toàn thân", duration: "60 phút", price: "480.000đ" },
          { _key: "pi2", name: "Massage đá nóng", duration: "75 phút", price: "560.000đ" },
          { _key: "pi3", name: "Massage vai gáy cổ", duration: "45 phút", price: "320.000đ" },
          { _key: "pi4", name: "Massage chân & bấm huyệt", duration: "45 phút", price: "300.000đ" },
          { _key: "pi5", name: "Trị liệu hương thơm", duration: "60 phút", price: "450.000đ" },
        ],
      },
      {
        _key: "sc2", title: "Chăm sóc da mặt",
        items: [
          { _key: "pi6", name: "Chăm sóc da cơ bản", duration: "60 phút", price: "390.000đ" },
          { _key: "pi7", name: "Chăm sóc da mặt chuyên sâu", duration: "75 phút", price: "520.000đ" },
          { _key: "pi8", name: "Trị mụn & phục hồi", duration: "90 phút", price: "650.000đ" },
        ],
      },
      {
        _key: "sc3", title: "Xông hơi & Gói liệu trình",
        items: [
          { _key: "pi9", name: "Ngâm khoáng & xông thảo dược", duration: "90 phút", price: "720.000đ" },
          { _key: "pi10", name: "Gội đầu dưỡng sinh", duration: "45 phút", price: "260.000đ" },
          { _key: "pi11", name: "Liệu trình đôi thư giãn", duration: "120 phút", price: "1.250.000đ" },
        ],
      },
    ],
  },
  {
    _type: "gallerySection", _key: "default-gallery",
    eyebrow: "Không gian",
    headingMain: "Ghé thăm",
    headingItalic: "Suối Mây.",
    note: "Không gian thật tại spa — ấm, riêng tư và sạch sẽ.",
    items: [
      { _key: "g1", label: "Khu lễ tân", wide: true,  imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=85&fit=crop&auto=format" },
      { _key: "g2", label: "Phòng trị liệu", wide: false, imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85&fit=crop&auto=format" },
      { _key: "g3", label: "Tinh dầu & thảo mộc", wide: false, imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=85&fit=crop&auto=format" },
      { _key: "g4", label: "Góc trà thư giãn", wide: true,  imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=85&fit=crop&auto=format" },
      { _key: "g5", label: "Phòng xông thảo dược", wide: false, imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=85&fit=crop&auto=format" },
      { _key: "g6", label: "Chăm sóc da mặt", wide: false, imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "reviewsSection", _key: "default-reviews",
    eyebrow: "Khách nói gì",
    headingMain: "Những buổi",
    headingItalic: "đáng nhớ.",
    reviews: [
      { _key: "r1", text: "Mình làm ca đêm, lưng và cổ lúc nào cũng cứng. Liệu trình massage mỗi Chủ nhật thành thói quen 4 tháng nay, ngủ ngon hơn hẳn, không cần thuốc.", name: "Quang Vinh",  location: "Quận Bình Thạnh", service: "Massage trị liệu" },
      { _key: "r2", text: "Đặt liệu trình đôi cho kỷ niệm 5 năm. Phòng riêng yên tĩnh, trà rót không giới hạn, không ai làm phiền. Vợ mình bảo đây là món quà tốt nhất từ trước đến giờ.", name: "Minh Đăng", location: "Quận 2", service: "Liệu trình đôi" },
      { _key: "r3", text: "Phòng xông thảo dược sạch và thơm, không hắc như chỗ khác. Nhân viên nhớ tên khách quen, nhớ cả nhiệt độ nước mình thích. Chi tiết nhỏ nhưng giữ chân mình.", name: "Hồng Nhung", location: "TP. Thủ Đức", service: "Ngâm khoáng & xông hơi" },
    ],
  },
  {
    _type: "bookingSection", _key: "default-booking",
    eyebrow: "Giữ chỗ",
    headingMain: "Tặng mình",
    headingItalic: "một giờ tĩnh lặng.",
    subtitle: "Nhắn Zalo để giữ lịch, buổi tối và cuối tuần nên đặt trước một ngày. Không cần đặt cọc.",
    zaloUrl: "https://zalo.me/0902000000",
    phone: "0902 000 000",
    address: "215B Nguyễn Văn Hưởng, Thảo Điền, TP. Thủ Đức",
    hours: [
      { _key: "h1", day: "Thứ 2 – Thứ 6", time: "10:00 – 23:00" },
      { _key: "h2", day: "Thứ 7 – Chủ nhật", time: "09:00 – 23:30" },
    ],
  },
];
