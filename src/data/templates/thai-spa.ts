import type { PageSection } from "@/types";

// Thai Spa — nội dung mặc định (demo). Chỉ chứa TEXT.
// Ảnh mặc định, vị trí crop và layout nằm trong từng component (đó là design,
// không phải nội dung). Khi client upload ảnh qua CMS, `imageUrl` sẽ override.
// Template render theo thứ tự cứng trong code và pick section theo `_key`.
export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "bannerCarouselSection", _key: "carousel",
    enabled: false,
    slides: [
      {
        _key: "s1",
        heading: "Ưu Đãi Tháng Này — Giảm 20%",
        subtext: "Áp dụng cho tất cả gói massage body. Đặt lịch trước ngày 30 để nhận ưu đãi.",
        ctaLabel: "Đặt Lịch Ngay",
        ctaUrl: "#booking",
        bgColor: "#2d1200",
      },
      {
        _key: "s2",
        heading: "Gói Couple Massage",
        subtext: "Trải nghiệm cùng người thân — 90 phút thư giãn toàn thân trong phòng riêng biệt.",
        ctaLabel: "Xem Chi Tiết",
        ctaUrl: "#services",
        bgColor: "#1a0a0a",
      },
      {
        _key: "s3",
        heading: "Liệu Trình Chăm Sóc Da Mặt Mới",
        subtext: "Công nghệ phục hồi da chuyên sâu — kết hợp thảo dược truyền thống Thái Lan.",
        ctaLabel: "Tìm Hiểu Thêm",
        ctaUrl: "#services",
        bgColor: "#3d1500",
      },
    ],
  },
  {
    _type: "heroSection", _key: "hero",
    headingMain: "Đắm Mình Trong Không Gian",
    headingItalic: "Thư Giãn Theo Phong Cách Thái",
    subtitle:
      "Những liệu trình độc đáo — hành trình thực sự vào thế giới văn hóa và nghệ thuật trị liệu Thái Lan.",
    ctaPrimary: "Bắt Đầu Hành Trình",
  },
  {
    _type: "aboutSection", _key: "loving-touch",
    headingMain: "Trị Liệu Qua",
    headingItalic: "Từng Chạm Nhẹ",
    paragraphs: [
      "Chuyên viên được đào tạo bài bản, sẵn sàng chăm sóc cả thể xác lẫn tinh thần — mỗi liệu trình là một hành trình phục hồi toàn diện.",
    ],
  },
  {
    _type: "featuresSection", _key: "benefits",
    headingMain: "Massage Thái Giúp Bạn Nếu Bạn:",
    items: [
      { _key: "b1", title: "Cảm Thấy Nhẹ Nhàng Hơn",      desc: "Muốn có cơ thể dẻo dai và linh hoạt hơn" },
      { _key: "b2", title: "Thoát Khỏi Những Cơn Đau",     desc: "Đang sống chung với những cơn đau mãn tính" },
      { _key: "b3", title: "Ngủ Ngon Hơn, Đầy Năng Lượng", desc: "Mất ngủ, thức dậy mệt mỏi mỗi ngày" },
      { _key: "b4", title: "Giải Phóng Căng Thẳng",        desc: "Thường xuyên căng thẳng, không thể thư giãn" },
      { _key: "b5", title: "Tự Tin Hơn Trong Cuộc Sống",   desc: "Muốn tìm lại sự cân bằng và rõ ràng trong tâm trí" },
    ],
  },
  {
    _type: "aboutSection", _key: "harmony",
    headingMain: "Nơi Căng Thẳng Tan Biến\nVà Sự",
    headingItalic: "Hài Hòa Bắt Đầu",
    paragraphs: [
      "Trải nghiệm sức mạnh chữa lành của massage Thái — sự kết hợp giữa truyền thống và nghệ thuật chăm sóc được thiết kế để giải phóng căng thẳng, cải thiện tuần hoàn và phục hồi sự bình yên nội tâm.",
    ],
  },
  {
    _type: "stepsSection", _key: "welcome-ritual",
    eyebrow: "Welcome Ritual",
    headingMain: "Khi bạn",
    headingItalic: "bước vào.",
    steps: [
      { _key: "wr1", num: "01", title: "Đón bằng vòng tay Wai", desc: "Lễ thức Wai truyền thống Thái — không vội, không chào hỏi qua loa. Đặt khách vào tâm trạng ngay từ ngưỡng cửa." },
      { _key: "wr2", num: "02", title: "Trà gừng sả nóng",      desc: "Cốc trà gừng sả + đường thốt nốt được pha tại chỗ. Vừa giữ ấm bụng vừa giúp khách thả lỏng trước khi vào phòng." },
      { _key: "wr3", num: "03", title: "Ngâm chân dược liệu",    desc: "Chân được ngâm trong nước sả tươi + lá kaffir + muối hồng Himalaya — kích hoạt tuần hoàn trước massage chính." },
      { _key: "wr4", num: "04", title: "Hướng dẫn vào phòng",   desc: "Chuyên viên dẫn riêng vào phòng trị liệu, giới thiệu tinh dầu sẽ dùng, mời chọn music ambient + cường độ ánh sáng." },
    ],
  },
  {
    _type: "stepsSection", _key: "after-massage",
    headingMain: "Sau Buổi Trị Liệu",
    steps: [
      { _key: "s1", num: "01", title: "Thả lỏng hoàn toàn, chìm vào giấc nghỉ sâu" },
      { _key: "s2", num: "02", title: "Bước vào thế giới chữa lành cho cơ thể và tâm hồn" },
      { _key: "s3", num: "03", title: "Cảm nhận sự nhẹ nhàng lan tỏa trong từng cơ và khớp" },
      { _key: "s4", num: "04", title: "Bắt đầu hành trình trẻ hóa và hồi phục bền vững" },
    ],
  },
  {
    _type: "founderSection", _key: "founder",
    eyebrow: "Chuyên Viên Trị Liệu",
    name: "Linh Phương",
    credentials: [
      "Chuyên viên massage Thái được chứng nhận quốc tế",
      "Hơn 10 năm kinh nghiệm trong lĩnh vực trị liệu cơ thể",
      "Đào tạo tại Bangkok — The Traditional Thai Massage School",
      "Kết hợp y học cổ truyền với kỹ thuật trị liệu hiện đại",
      "Tiếp nhận mọi đối tượng khách hàng, không phân biệt độ tuổi",
      "Kích hoạt nhẹ nhàng quá trình tự chữa lành tự nhiên của cơ thể",
    ],
    socials: [
      { _key: "fb", platform: "facebook",  url: "#" },
      { _key: "ig", platform: "instagram", url: "#" },
      { _key: "ph", platform: "phone",     url: "#" },
    ],
  },
  {
    _type: "reviewsSection", _key: "reviews",
    headingMain: "Khách Hàng Nói Gì",
    reviews: [
      { _key: "r1", name: "Lan Anh",   text: "Chuyên viên thực sự tuyệt vời. Sau buổi massage, cơ thể mình nhẹ nhàng cả tuần. Không gian yên tĩnh, không ai thúc ép — đây là điều mình trân trọng nhất." },
      { _key: "r2", name: "Minh Khoa", text: "Không khí tại spa cực kỳ thư giãn ngay từ phút đầu tiên. Sau buổi trị liệu, mình cảm nhận không chỉ thể xác nhẹ nhàng mà tinh thần cũng cân bằng hơn hẳn. Hơn cả một buổi massage." },
      { _key: "r3", name: "Thu Hà",    text: "Cơn đau lưng mãn tính của mình đã thuyên giảm rõ rệt sau 3 buổi. Mỗi lần đến đây mình đều ra về với tâm trạng tươi tắn và đầy năng lượng hơn rất nhiều." },
      { _key: "r4", name: "Phúc Bình", text: "Chuyên viên lắng nghe, điều chỉnh theo từng nhu cầu và không bao giờ vội vã. Đây là nơi mình tìm đến mỗi tháng để reset lại hoàn toàn." },
    ],
  },
  {
    _type: "pricingSection", _key: "pricing",
    headingMain: "Liệu Trình Phù Hợp Với Mọi Nhu Cầu",
    packages: [
      {
        _key: "p1", name: "Cơ Bản", desc: "", price: "350.000đ / buổi", duration: "", featured: false,
        includes: [
          "Massage Thái truyền thống 60 phút",
          "Tinh dầu thảo mộc nguyên chất",
          "Trà thảo dược sau buổi trị liệu",
        ],
      },
      {
        _key: "p2", name: "Tiêu Chuẩn", desc: "", price: "550.000đ / buổi", duration: "", featured: true,
        includes: [
          "Massage Thái truyền thống 90 phút",
          "Tinh dầu thảo mộc nguyên chất",
          "Thảo dược hấp nóng",
          "Phản xạ học bàn chân (15 phút)",
        ],
      },
      {
        _key: "p3", name: "Trọn Gói", desc: "", price: "780.000đ / buổi", duration: "", featured: false,
        includes: [
          "Massage Thái cao cấp 120 phút",
          "Tinh dầu thảo mộc nguyên chất",
          "Thảo dược hấp nóng",
          "Phản xạ học bàn chân (15 phút)",
          "Liệu pháp đá nóng",
        ],
      },
    ],
  },
  {
    _type: "calloutSection", _key: "offer",
    headingMain: "Ưu Đãi 10% Cho",
    headingItalic: "Lần Đầu Trải Nghiệm",
    body: "Điền thông tin và chúng tôi sẽ liên hệ bạn trong vòng 30 phút.",
    ctaLabel: "Nhận Ưu Đãi Ngay",
    showLeadForm: true,
    successMessage: "Cảm ơn bạn — chúng tôi sẽ liên hệ sớm.",
  },
  {
    _type: "bookingSection", _key: "booking",
    headingMain: "Liên Hệ",
    zaloUrl: "https://zalo.me/0901234567",
    phone: "0901 234 567",
    email: "hello@lotusthai.vn",
    address: "88 Lê Lợi, Quận 1\nTP. Hồ Chí Minh",
  },
];
