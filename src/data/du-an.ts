// ── Helpers ──────────────────────────────────────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/đ/g, "d")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  _id: string;
  shopName: string;
  industry: string;
  industryLabel: string;
  location: string;
  templateUsed: string;
  imageUrl?: string;
  liveUrl?: string;
  highlight: string;
}

export interface DuAnPageContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroTitleItal?: string;
  heroSub?: string;
  metaLocation?: string;
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaTitleItal?: string;
  ctaBody?: string;
}

// ── Fallback data ─────────────────────────────────────────────────────────────

export const FALLBACK_PROJECTS: Project[] = [
  {
    _id: "1",
    shopName: "Tiệm Nail Kim Anh",
    industry: "nail",
    industryLabel: "Nail salon",
    location: "Quận 7, TP.HCM",
    templateUsed: "Pink Luxury",
    imageUrl: "/images/nail-salon-shelves.jpg",
    highlight: "Tăng đặt lịch online từ 0 lên 40 lượt/tháng trong 3 tuần đầu.",
  },
  {
    _id: "2",
    shopName: "Hoa Đào Spa",
    industry: "spa",
    industryLabel: "Spa",
    location: "Quận 3, TP.HCM",
    templateUsed: "Zen Wellness",
    imageUrl: "/images/spa-massage.jpg",
    liveUrl: "/templates/zen-wellness",
    highlight: "Khách mới tìm qua Google tăng rõ rệt sau khi có web chuẩn SEO.",
  },
  {
    _id: "3",
    shopName: "Cà phê Nâu",
    industry: "cafe",
    industryLabel: "Cà phê",
    location: "Quận 1, TP.HCM",
    templateUsed: "Vintage Cozy",
    imageUrl: "/images/cafe-interior-01.jpg",
    highlight: "Web thay thế hoàn toàn trang Facebook — menu, giờ mở cửa, địa chỉ đầy đủ.",
  },
  {
    _id: "4",
    shopName: "Gym 365",
    industry: "gym",
    industryLabel: "Gym",
    location: "Bình Thạnh, TP.HCM",
    templateUsed: "Bold Energy",
    imageUrl: "/images/gym-fitness.jpg",
    highlight: "Landing page đăng ký thử 7 ngày miễn phí — giảm chi phí quảng cáo 30%.",
  },
  {
    _id: "5",
    shopName: "Nail Tường Vi",
    industry: "nail",
    industryLabel: "Nail salon",
    location: "Thủ Đức, TP.HCM",
    templateUsed: "Blossom Nails",
    imageUrl: "/images/nail-polish-wall.jpg",
    highlight: "Thiết kế trẻ trung phù hợp khách hàng gen Z — đặt lịch qua web ngay trên điện thoại.",
  },
  {
    _id: "6",
    shopName: "The Calm Studio",
    industry: "spa",
    industryLabel: "Spa",
    location: "Phú Nhuận, TP.HCM",
    templateUsed: "Lotus Spa",
    imageUrl: "/images/atmosphere-01.jpg",
    highlight: "Phong cách premium giúp tăng giá trị cảm nhận dịch vụ, khách sẵn sàng trả giá cao hơn.",
  },
];

export const FALLBACK_PAGE: DuAnPageContent = {
  heroEyebrow:  "DỰ ÁN ĐÃ LÀM",
  heroTitle:    "thực tế — không phải",
  heroTitleItal: "mock-up.",
  heroSub:      "Mỗi trang web ở đây đã đi qua tay mình — từ lúc chọn màu đến lúc gắn tên miền cho tiệm. Không có dự án nào giống dự án nào.",
  metaLocation: "tất cả tại TP.HCM",
  ctaEyebrow:   "TIẾP THEO",
  ctaTitle:     "tiệm của bạn có thể là",
  ctaTitleItal: "dự án tiếp theo.",
  ctaBody:      "Mỗi tiệm một câu chuyện khác nhau — mình sẽ lắng nghe và làm một trang web đúng với tiệm bạn, không copy-paste.",
};
