import type { PageSection } from "@/types";

// Default content cho Bách Thảo Spa — foot spa thảo mộc truyền thống.
export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "heroSection", _key: "default-hero",
    eyebrow: "Foot Spa · TP.HCM",
    headingMain: "An yên,",
    headingItalic: "từ bàn chân.",
    subtitle:
      "Spa thảo mộc truyền thống — ngâm chân ngải lá, massage cổ chân, ấm bụng. Sau một ngày dài, bạn xứng đáng được dừng lại một chút.",
    ctaPrimary: "Xem dịch vụ",
    ctaSecondary: "Đặt lịch",
  },
  {
    _type: "servicesSection", _key: "default-services",
    headingMain: "Mỗi bài chăm",
    headingItalic: "một câu chuyện riêng.",
    subtitle:
      "Toàn bộ thảo mộc tươi — hái mỗi sáng tại vườn riêng ở Đà Lạt. Không tinh dầu pha. Không xông trùng.",
    services: [
      {
        _key: "sv1", tag: "Phổ biến",
        name: "Ngâm chân ngải cứu",
        duration: "45 phút", price: "180.000đ",
        imageUrl: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=85&fit=crop&auto=format",
        desc: "Ngải cứu tươi, gừng giã nát, lá lốt — đun cùng nước ấm 42°C. Lưu thông khí huyết, giảm đau gót, tốt cho người hay lạnh tay chân.",
      },
      {
        _key: "sv2", tag: "Bestseller",
        name: "Massage cổ chân kết hợp ngâm",
        duration: "75 phút", price: "280.000đ",
        imageUrl: "https://images.unsplash.com/photo-1559185590-879c66a55254?w=800&q=85&fit=crop&auto=format",
        desc: "Ngâm chân thảo mộc 30 phút + xoa bóp gót, ấn huyệt bàn chân 45 phút. Phù hợp khách văn phòng đau mỏi do đứng nhiều.",
      },
      {
        _key: "sv3", tag: undefined,
        name: "Bài lăn đá nóng",
        duration: "60 phút", price: "260.000đ",
        imageUrl: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?w=800&q=85&fit=crop&auto=format",
        desc: "Đá basalt núi lửa được hâm nóng đặt theo huyệt — nhiệt thấm sâu, giải tỏa căng cơ dưới chân. Lý tưởng sau chuyến đi xa.",
      },
      {
        _key: "sv4", tag: undefined,
        name: "Ấm bụng + chân thảo dược",
        duration: "90 phút", price: "350.000đ",
        imageUrl: "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=800&q=85&fit=crop&auto=format",
        desc: "Đặt túi thảo mộc nóng lên bụng + ngâm chân kết hợp massage. Bài chuyên cho khách kinh nguyệt khó, bụng lạnh, khó ngủ.",
      },
      {
        _key: "sv5", tag: "Premium",
        name: "Bài trị liệu trọn gói",
        duration: "120 phút", price: "480.000đ",
        imageUrl: "https://images.unsplash.com/photo-1614740109275-69b54cd90983?w=800&q=85&fit=crop&auto=format",
        desc: "Ngâm chân + massage chân + lăn đá nóng + chườm túi thảo dược + trà thảo mộc cuối buổi. Trải nghiệm trọn vẹn cho khách lần đầu.",
      },
    ],
  },
  {
    _type: "aboutSection", _key: "default-about",
    headingMain: "Tụi mình",
    headingItalic: "trồng lấy.",
    paragraphs: [
      "Bách Thảo mở năm 2018 từ một niềm tin: chăm bàn chân là chăm sức khỏe gốc rễ. Cả ngày bạn đứng, bạn đi, bạn gánh — đến tối chỉ có hai bàn chân chịu nhiều nhất.",
      "Tụi mình có vườn thảo mộc riêng ở Đà Lạt — ngải cứu, sả, gừng, lá lốt, hương nhu. Hái mỗi sáng, chuyển về tiệm trong ngày. Vì thảo mộc khô đông lạnh không có cái mùi tươi đó.",
    ],
    quote: "Bài thuốc dân gian không phải để chữa bệnh — mà để ngày mai bạn dậy nhẹ hơn một chút.",
    quoteAuthor: "Cô Hai, Founder",
  },
  {
    _type: "featuresSection", _key: "default-herbs",
    headingMain: "Hái mỗi sáng,",
    headingItalic: "không khô đông lạnh.",
    items: [
      { _key: "hb1", emoji: "🌿", title: "Ngải cứu",   imageUrl: "Artemisia vulgaris", desc: "Lưu thông khí huyết, giảm đau gót, tốt cho người lạnh tay chân. Có trong bài ngâm chân chuẩn." },
      { _key: "hb2", emoji: "🫚", title: "Gừng tươi",  imageUrl: "Zingiber officinale", desc: "Ấm bụng, giảm đau khớp, kích thích tuần hoàn. Dùng giã nát thêm vào nước ngâm 42°C." },
      { _key: "hb3", emoji: "🍃", title: "Sả",         imageUrl: "Cymbopogon citratus", desc: "Khử mùi, kháng khuẩn, mùi thư giãn nhẹ. Đập dập, thả nổi trên mặt nước ngâm." },
      { _key: "hb4", emoji: "🌱", title: "Lá lốt",     imageUrl: "Piper sarmentosum", desc: "Giảm đau xương khớp mãn tính, đặc biệt cho người lớn tuổi. Dùng trong bài lăn đá nóng." },
      { _key: "hb5", emoji: "🍀", title: "Hương nhu",  imageUrl: "Ocimum gratissimum", desc: "Thanh nhiệt, giải cảm, hỗ trợ giấc ngủ. Pha trà cuối buổi cho khách." },
      { _key: "hb6", emoji: "🌾", title: "Tía tô",     imageUrl: "Perilla frutescens", desc: "Kháng viêm, hỗ trợ tiêu hóa, tốt cho phụ nữ. Có trong bài ấm bụng + chân." },
    ],
  },
  {
    _type: "stepsSection", _key: "default-process",
    headingMain: "Một buổi ở Bách Thảo,",
    headingItalic: "diễn ra thế này.",
    steps: [
      { _key: "p1", num: "01", title: "Đón & trà ấm", desc: "Khách được mời trà thảo mộc nóng + bài kiểm tra nhanh tình trạng cơ thể để chọn bài chăm phù hợp." },
      { _key: "p2", num: "02", title: "Ngâm chân", desc: "Nước thảo mộc đun ấm 42°C, ngâm 25-30 phút. Khách nghỉ ngơi, đọc sách hoặc nghe nhạc nhẹ." },
      { _key: "p3", num: "03", title: "Massage trị liệu", desc: "Kỹ thuật viên xoa bóp, ấn huyệt theo bài chuyên — không lực mạnh, không gây đau." },
      { _key: "p4", num: "04", title: "Trà & nghỉ", desc: "Cuối buổi mời thêm tách trà thanh nhiệt, nghỉ thêm 10 phút trước khi rời tiệm." },
    ],
  },
  {
    _type: "gallerySection", _key: "default-gallery",
    headingMain: "Một góc lặng",
    headingItalic: "giữa thành phố.",
    note: "Phòng riêng tư · 4 ghế",
    items: [
      { _key: "g1", label: "phòng ngâm chân", wide: true,  imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=85&fit=crop&auto=format" },
      { _key: "g2", label: "thảo mộc tươi",   wide: false, imageUrl: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=85&fit=crop&auto=format" },
      { _key: "g3", label: "góc trà cuối buổi", wide: false, imageUrl: "https://images.unsplash.com/photo-1770573320171-9f21c3c1f8f5?w=800&q=85&fit=crop&auto=format" },
      { _key: "g4", label: "ấm áp & yên tĩnh", wide: false, imageUrl: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?w=800&q=85&fit=crop&auto=format" },
      { _key: "g5", label: "chén thảo mộc",   wide: false, imageUrl: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&q=85&fit=crop&auto=format" },
      { _key: "g6", label: "khu lăn đá nóng", wide: true,  imageUrl: "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=1400&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "pricingSection", _key: "default-pricing",
    headingMain: "Gói trọn buổi,",
    headingItalic: "giá tốt hơn.",
    subtitle: "Đặt gói tiết kiệm 10-15% so với chọn lẻ — kèm trà + chăm sóc nhẹ cuối buổi.",
    packages: [
      {
        _key: "pk1", name: "Cơ bản",
        desc: "Cho khách bận, muốn thư giãn nhanh sau giờ làm.",
        price: "260.000đ", duration: "/ buổi", featured: false,
        includes: [
          "Ngâm chân thảo mộc 30 phút",
          "Massage cổ chân 30 phút",
          "Trà thảo mộc đầu/cuối buổi",
        ],
      },
      {
        _key: "pk2", name: "Trị liệu",
        desc: "Gói phổ biến — phù hợp khách văn phòng, đau mỏi mãn tính.",
        price: "420.000đ", duration: "/ buổi", featured: true,
        includes: [
          "Ngâm chân thảo mộc 30 phút",
          "Massage chân + ấn huyệt 45 phút",
          "Lăn đá nóng 20 phút",
          "Chườm túi thảo dược ấm bụng",
          "Trà thanh nhiệt cuối buổi",
        ],
      },
      {
        _key: "pk3", name: "Phục hồi",
        desc: "Bài trọn gói cho khách mệt mỏi nặng hoặc dịp đặc biệt.",
        price: "680.000đ", duration: "/ buổi", featured: false,
        includes: [
          "Ngâm chân kết hợp tinh dầu",
          "Massage chân + tay 90 phút",
          "Lăn đá nóng + chườm thảo dược",
          "Bài ấm bụng chuyên sâu",
          "Tặng kèm gói thảo mộc mang về",
        ],
      },
    ],
  },
  {
    _type: "reviewsSection", _key: "default-reviews",
    headingMain: "Đánh giá",
    headingItalic: "thật từ Google.",
    reviews: [
      { _key: "r1", name: "Anh Tuấn",  service: "Massage trị liệu", rating: 5, text: "Đau gót lâu rồi, đi 3 buổi thấy đỡ hẳn. Không gian sạch, kỹ thuật viên chuyên. Sẽ quay lại đều." },
      { _key: "r2", name: "Chị Mai",  service: "Bài ấm bụng",       rating: 5, text: "Kỳ kinh hay đau bụng dữ. Đi tiệm này 2 lần xong dễ chịu hẳn — không như mấy chỗ chỉ matxa qua loa. Recommended." },
      { _key: "r3", name: "Bác Lan",  service: "Ngâm chân ngải",    rating: 5, text: "Bác lớn tuổi hay đau khớp gối. Đến đây nhân viên rất ân cần, không hối thúc. Trà cuối buổi cũng ngon." },
    ],
  },
  {
    _type: "bookingSection", _key: "default-booking",
    headingMain: "Ghé Bách Thảo",
    headingItalic: "một buổi nhé.",
    subtitle:
      "Nhắn Zalo trước để giữ ghế — tụi mình chuẩn bị thảo mộc tươi và phòng riêng tư cho bạn.",
    zaloUrl: "https://zalo.me/0901234567",
    phone: "0901 234 567",
    address: "128 Cao Thắng, Quận 3, TP.HCM",
    hours: [
      { _key: "h1", day: "Thứ 2 – Thứ 6", time: "10:00 – 22:00" },
      { _key: "h2", day: "Thứ 7",          time: "09:00 – 22:30" },
      { _key: "h3", day: "Chủ nhật",       time: "09:00 – 21:00" },
    ],
  },
];
