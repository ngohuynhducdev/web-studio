# DESIGN.md — Suối Mây

> Tài liệu design system cho **một** template: `suoi-may`.
> Đây KHÔNG phải design system chung của site. File này chỉ mô tả thế giới hình ảnh
> của Suối Mây.
>
> Nguồn token: `SuoiMay.module.css` + các component (single source of truth).
> Khi sửa giá trị, sửa ở CSS/component trước rồi cập nhật file này — đừng để lệch.

---

## 1. Visual Theme & Atmosphere

**Archetype: Spa sáng, thanh lịch, ấm — clone bố cục Lumera (ThemeForest).**

Cảm giác phải như bước vào một spa cao cấp ban ngày: sáng, sạch, ấm áp, nhiều khoảng
thở. Hero là một tấm nhiếp ảnh spa **sắc nét, đủ sáng**, chữ trắng đặt ở góc dưới-trái;
phần còn lại của trang là nền kem/trắng luân phiên, điểm nhấn đồng tiết chế.

- Tâm trạng: thanh lịch, ấm, tĩnh, đáng tin.
- Ánh sáng: high-key cho thân trang; hero là nhiếp ảnh có scrim tối; Booking là panel tối bo góc.
- Chuyển động: chậm, mềm (fade-up, reveal nhẹ) — không giật.
- Một câu để nhớ: *"sáng sớm trong spa, khăn trắng và nến ấm."*

> Lưu ý lịch sử: Suối Mây từng là template "onsen tối điện ảnh", sau đó là "spa sáng có
> nét onsen" (con dấu 湯, Ritual nóng–lạnh, rail Private Onsen). Theo yêu cầu khách
> (2026-06), đã **bỏ hẳn mọi motif onsen/Nhật** và dựng lại **bám sát Lumera**: hero ảnh
> sắc nét, intro "Quiet Refuge", treatment card grid, Reviews có sao,
> Booking (panel tối), footer đậm. Không còn 湯/Ritual. Sau đó (theo yêu cầu khách) chuyển hướng
> thành **mini-website**: **Dịch vụ** = 3 card signature (có giá + các bước hiện sẵn); **Bảng giá**
> tách thành section `menuSection` riêng kiểu thực đơn in (dotted leader); thêm **Gallery**; bỏ Team +
> Stats (mặt/số liệu giả). Địa chỉ/giờ ở Footer (địa chỉ bấm → Google Maps); không có section "Tìm
> đường" riêng. Đặt lịch vẫn chỉ qua Zalo (không booking online).

## 2. Color Palette & Roles

Tất cả định nghĩa trong `.page { ... }` của `SuoiMay.module.css`.
Token tiền tố `--sm-`. **Không dùng** `--color-brand-*` của site.

| Token | Giá trị | Vai trò |
|---|---|---|
| `--sm-bg` | `#f1e9dc` | Nền chính (kem ấm) |
| `--sm-bg2` | `#ffffff` | Bề mặt nâng — card, panel, section sáng |
| `--sm-bg0` | `#2c2823` | Dải tối — announcement bar + footer |
| `--sm-ivory` | `#2e2a24` | **Chữ chính** (nâu đậm trên kem) |
| `--sm-light` | `#f4ede2` | Chữ sáng cho dải tối / hero / Booking |
| `--sm-accent` | `#a9854f` | Đồng/vàng — eyebrow, CTA, giá, số, em nghiêng. **Client override qua `brandColor`** |
| `--sm-accent-10…50` | `color-mix(... var(--sm-accent) X%)` | Sắc đồng *mờ* (viền/nền nhấn). Bám theo `--sm-accent` |
| `--sm-muted` | `rgba(46,42,36,0.62)` | Chữ phụ, mô tả |
| `--sm-faint` | `rgba(46,42,36,0.45)` | Nhãn mờ |
| `--sm-line` | `rgba(46,42,36,0.14)` | Hairline, viền, divider |

**Quy tắc màu:**
- Nền sáng (kem/trắng) là chủ đạo; tông tối ở announcement bar, **Booking** (panel tối) và footer.
- Accent đồng là điểm nóng *duy nhất* — dùng tiết chế (CTA, giá, một từ nghiêng, icon tròn).
- `--sm-ivory` = chữ tối (nền sáng); `--sm-light` = chữ sáng (nền tối/hero). KHÔNG lẫn lộn.
- `--sm-accent` có thể bị khách đổi qua CMS `brandColor`. Mọi sắc đồng mờ phải dùng token `--sm-accent-XX`.

## 3. Typography Rules

Load qua `next/font` trong `index.tsx`, expose thành biến.

- **Display:** Cormorant Garamond → `var(--sm-font-display)` → dùng qua `--sm-serif`. Weight 300/400/500, có italic.
- **Body:** Manrope → `var(--sm-font-body)`. Weight 300–600.

| Vai trò | Font | Cỡ | Đặc điểm |
|---|---|---|---|
| Hero title (`.heroH1`) | serif 300 | `clamp(2.7rem,7vw,4.6rem)` | line-height 1.02, chữ **sáng** trên ảnh |
| Section heading (`.secH2`) | serif 300 | `clamp(2rem,4vw,3.1rem)` | căn giữa, em = italic + accent |
| Eyebrow (`.secEyebrow`/`.heroLede`) | body | `0.7rem` | UPPERCASE, letter-spacing `0.26em`, accent, có hairline |
| Card title (`.trName`) | serif 400 | `1.2–1.35rem` | tên dịch vụ |
| Body / sub | body | `0.86–1rem` | line-height 1.7–1.85, màu muted |
| Giá (`.menuPrice`) / quote review | serif italic 300 | — | giá màu accent; quote ivory/90 |

**Quy tắc chữ:**
- Tiêu đề LUÔN serif weight mỏng (300), không in đậm.
- Nhấn mạnh = một từ `<em>` **chỉ in nghiêng, KHÔNG đổi màu**. Mỗi cụm chữ chỉ MỘT màu (không tô vàng một từ trong câu).
- Header section **căn giữa** (eyebrow gạch hai bên + heading + sub). Riêng Hero & Intro căn trái.
- Không dùng dấu gạch ngang "—" trong câu chữ UI (dùng dấu phẩy / câu ngắn).

## 4. Component Stylings

| Component | Style chính |
|---|---|
| **Header** | Announcement bar tối + nav nền kem `bg/95` blur, logo serif giữa, link gold-underline khi active, CTA pill "Đặt lịch" |
| **Hero** | **Carousel** (swiper, fade). Slides lấy từ CMS `heroSection.slides` (mỗi slide: ảnh + eyebrow + tiêu đề + mô tả); **≥2 slide** mới bật autoplay + dots + mũi tên (≥48rem), **0–1 slide** = hero tĩnh. Mỗi slide: ảnh full-bleed + `.heroScrim` (gradient đậm trái) + chữ **sáng** căn **giữa-trái**; pill gold + **pill outline** (UPPERCASE). Cao `clamp` (~70vh, thấp như Lumera). KHÔNG seal, KHÔNG stats |
| **Intro** (Quiet Refuge, `#about`) | Trái: cụm 2 ảnh xếp lớp (`.introImg1`/`.introImg2`). Phải: eyebrow + heading + đoạn văn + checklist 4 ý (icon tròn accent) + pill gold |
| **Dịch vụ** (`servicesSection`, `#services`) | **3 card signature** (`.trCard`, ảnh + **chip giá** góc trên + icon + tên + mô tả + "Đặt liệu trình →") — `.trGrid` 1→2→3 cột. Trong thân thẻ **hiện sẵn** (không hover) "Liệu trình gồm" + các bước (`includes`, chấm vàng) → khách thấy ngay *trả X được làm gì*; CTA bottom-align (`.trLink margin-top:auto`). |
| **Menu / Bảng giá** (`menuSection`, `#menu`) | Section riêng, nền trắng. Header căn giữa. Bảng giá **kiểu thực đơn in**: multi-column cân bằng (`.mnGrid` `column-count:2` + `break-inside:avoid`), mỗi nhóm = tên serif + accent underline; mỗi dòng = `tên · thời lượng` ……**dotted leader**…… giá serif italic gold (`.mnLeader`/`.mnPrice`). Ghi chú cuối. |
| **Gallery** (`gallerySection`, `#gallery`) | CMS-driven. Lưới ảnh 2→3 cột (`.galGrid`), item `wide` span 2 cột; bo góc, hover zoom, caption chip góc dưới-trái. |
| **Reviews** (`#reviews`) | 3 card trắng đều nhau: hàng 5 sao accent → quote serif italic → divider → avatar chữ cái (monogram) tròn + tên + dịch vụ |
| **Booking** (`.bkInner`, `#booking`) | **Panel tối bo góc** (`--sm-bg0`) trên nền kem (tách khỏi footer), 2 cột: trái = eyebrow + heading + sub + **pill Zalo** + nút gọi (outline) + 3 "perk" có tick vàng (không cọc / phản hồi nhanh / ưu đãi lần đầu); phải = ảnh spa ấm. Mobile dồn dọc, CTA lên trước. Dùng `bookingSection`. |
| **Footer** | Dải tối `--sm-bg0`, 4 cột: thương hiệu+social, "Khám phá", "Liên hệ" (địa chỉ/điện thoại/**giờ mở cửa** + pill Zalo), thanh copyright |
| **Header (nav)** | `sticky top-0` (chạy được nhờ `.page` dùng `overflow-x: clip` chứ không `hidden`). Nav inline + nút "Đặt lịch" hiện từ `≥64rem` (lg); dưới đó dùng hamburger (menu mobile có đủ mục). Nav có item cho **mọi section** (`#about/#services/#menu/#gallery/#reviews`) — **scroll-spy** gạch chân item đúng theo section đang xem. |
| **Hamburger** | 3 vạch `--sm-ivory`, animate thành X |

## 5. Layout Principles

- Container: `max-width: 78rem`, padding `0 1.5rem` (mobile) → `0 2.5rem` (≥48rem). Class `.sectionInner`.
- Breakpoint chính: `48rem`; treatment thêm `40rem`/`64rem`; **nav header hiện inline từ `64rem` (lg)**, dưới đó hamburger. Mobile-first (`min-width`), không `max-width` query.
- `scroll-margin-top: 5.25rem` cho `section[id]` để né header sticky.
- **Header section căn giữa** (Lumera-style); Hero + Intro căn trái.
- **Color-blocking tạo nhịp**: kem (`--sm-bg`) ↔ trắng (`--sm-bg2`) luân phiên, chèn tông tối (Booking panel + footer).

## 6. Depth & Elevation

Chiều sâu đến từ **bóng mềm + bo góc + ảnh + scrim**, không phải vignette/grain tối:

- **Card shadow mềm** tông ấm (`rgba(46,42,36,...)`), nâng nhẹ khi hover (treatment zoom ảnh).
- **Bo góc** nhất quán (`0.9rem`).
- **Grain rất nhẹ** (`.page::after` opacity `0.03`) như texture giấy.
- **Scrim ảnh**: `.heroScrim` (tối góc dưới-trái) để chữ sáng nổi trên ảnh hero.

**Signature (code-only, thuộc identity — khách KHÔNG sửa qua CMS):**
- **Hero carousel** (swiper fade; slides từ CMS `heroSection.slides`, ≥2 mới bật điều khiển).
- **Intro xếp lớp ảnh** (`.introImg1`/`.introImg2`) + checklist.
- **Booking** — panel tối bo góc (`.bkInner`) trên nền kem.

## 7. Do's & Don'ts

**DO**
- Giữ nền sáng (kem/trắng); accent đồng là điểm nóng duy nhất.
- Hero dùng ảnh sắc nét + scrim → chữ sáng nổi rõ.
- Card trắng bo góc + bóng mềm; icon tròn accent trên treatment card.
- Nhấn bằng 1 từ italic **cùng màu** (không tô vàng); tiêu đề serif mỏng. Mỗi cụm chữ chỉ MỘT màu.
- Không dùng dấu "—" trong câu chữ UI.
- Chữ tối = `--sm-ivory`; chữ trên nền tối/hero = `--sm-light`; viền dùng `--sm-line`.
- Tôn trọng `prefers-reduced-motion`.

**DON'T**
- ❌ Quay lại motif onsen/Nhật (con dấu 湯, Ritual nóng–lạnh, rail "Private Onsen") — đã bỏ hẳn.
- ❌ Quay lại nền tối toàn trang / vignette / film grain nặng (bản onsen noir cũ).
- ❌ Dùng `--color-brand-*` của site hay inline style (trừ dynamic CSS var như `--sm-accent`).
- ❌ Tô tràn accent, hoặc dùng bold thay cho italic-accent.

## 8. Responsive Behavior

- Mobile-first; base = mobile, mở rộng tại `≥40/48/64rem`.
- Hero: carousel 3 slide, chữ căn **giữa-trái** (vertical center). Cao `clamp(30rem,80vh,40rem)` (mobile) → `clamp(34rem,70vh,45rem)` (≥48rem). Mũi tên ẩn ở mobile (chỉ vuốt + dots).
- Intro: ảnh xếp lớp trên → copy dưới (mobile) → 2 cột (lg).
- Treatment grid: 1 → 2 (`≥40rem`) → 3 (`≥64rem`).

## 9. Agent Prompt Guide

Khi nhờ AI dựng/đổi UI cho Suối Mây, dán đoạn tóm tắt này:

> Suối Mây = **clone bố cục Lumera** — spa sáng, thanh lịch. Nền kem `#f1e9dc`, card trắng,
> chữ nâu đậm `#2e2a24`, accent đồng `#a9854f` (tiết chế). Display = Cormorant Garamond mỏng
> (300), body = Manrope. Hero ảnh spa **sắc nét full-bleed**, scrim tối góc dưới-trái, chữ
> **sáng** căn **giữa-trái** (vertical center), pill gold + pill outline (UPPERCASE). Thân trang:
> Intro "Quiet Refuge" (2 ảnh xếp lớp + checklist), **Dịch vụ = 3 card signature** (giá + các bước hiện
> sẵn), **Bảng giá** = section riêng kiểu thực đơn in (dotted leader, multi-column cân bằng), **Gallery** không gian,
> **Reviews** 3 card có 5 sao + avatar monogram, **Booking** (panel tối CTA) + Zalo,
> footer đậm 4 cột (có giờ mở cửa). Đây là **mini-website** (đủ thông tin) nhưng đặt lịch CHỈ qua Zalo, KHÔNG booking online.
> Header section căn giữa. Nhấn = một
> từ `<em>` italic **cùng màu** (mỗi cụm chữ chỉ MỘT màu, KHÔNG tô vàng). KHÔNG dùng dấu "—". Tuyệt đối
> KHÔNG motif onsen/Nhật (湯, Ritual, rail), KHÔNG nền tối toàn trang, KHÔNG `--color-brand-*`,
> KHÔNG inline style (trừ `--sm-accent` dynamic). Token tiền tố `--sm-`; chữ tối `--sm-ivory`,
> chữ trên nền tối `--sm-light`; mọi viền dùng `--sm-line`. Tôn trọng `prefers-reduced-motion`.
> Vietnamese cho text UI, English cho code comment.

**Tham chiếu nhanh:** nền `--sm-bg #f1e9dc` · card `--sm-bg2 #fff` · chữ `--sm-ivory #2e2a24` ·
accent `--sm-accent #a9854f` · dải tối `--sm-bg0 #2c2823` · line
`--sm-line` · container `78rem` · breakpoint chính `48rem`.
