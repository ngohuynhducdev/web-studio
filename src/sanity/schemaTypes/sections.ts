import { defineArrayMember, defineField } from 'sanity'

// ── Shared helpers ───────────────────────────────────────────────
// "enabled" là đòn bẩy DUY NHẤT studio có ở cấp section: bật/tắt hiển thị.
// Thứ tự & layout do code template quyết định — KHÔNG đổi được trong CMS.
const enabledField = () =>
  defineField({
    name: 'enabled',
    title: 'Hiển thị section này',
    type: 'boolean',
    initialValue: true,
  })

// Preview gắn nhãn "đã ẩn" để studio nhìn list là biết section nào tắt.
const sectionPreview = (icon: string, label: string) => ({
  select: { enabled: 'enabled' },
  prepare: ({ enabled }: { enabled?: boolean }) => ({
    title: `${icon} ${label}${enabled === false ? ' — đã ẩn' : ''}`,
  }),
})

const headingFields = [
  defineField({ name: 'eyebrow', title: 'Eyebrow (dòng nhỏ trên tiêu đề)', type: 'string' }),
  defineField({ name: 'headingMain', title: 'Tiêu đề chính', type: 'string' }),
  defineField({ name: 'headingItalic', title: 'Tiêu đề — dòng nghiêng', type: 'string' }),
]

export const sectionTypes = [
  // ══ TẦNG 1 — CORE ═══════════════════════════════════════════════

  // ── Hero ──────────────────────────────────────────
  defineArrayMember({
    name: 'heroSection',
    title: 'Hero',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Mô tả ngắn', type: 'text', rows: 2 }),
      defineField({ name: 'ctaPrimary', title: 'Nút CTA chính', type: 'string' }),
      defineField({ name: 'ctaSecondary', title: 'Link phụ', type: 'string' }),
      defineField({
        name: 'slides',
        title: 'Hero slides (carousel)',
        description: 'Để trống = dùng tiêu đề ở trên làm 1 slide tĩnh. Từ 2 slide trở lên sẽ tự bật mũi tên + chấm chuyển slide. (Một số template render hero dạng carousel.)',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'heroSlide',
          fields: [
            defineField({ name: 'image', title: 'Ảnh nền', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'eyebrow', title: 'Eyebrow (dòng nhỏ)', type: 'string' }),
            defineField({ name: 'headingMain', title: 'Tiêu đề chính (Enter để xuống dòng)', type: 'text', rows: 2 }),
            defineField({ name: 'headingItalic', title: 'Tiêu đề nghiêng (tùy chọn)', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Mô tả ngắn', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'headingMain', subtitle: 'eyebrow', media: 'image' } },
        })],
      }),
      defineField({
        name: 'stats',
        title: 'Số liệu thống kê',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({ name: 'num', title: 'Con số (vd: 8, 600+)', type: 'string' }),
            defineField({ name: 'label', title: 'Nhãn (vd: năm kinh nghiệm)', type: 'string' }),
          ],
          preview: { select: { title: 'num', subtitle: 'label' } },
        })],
      }),
      defineField({
        name: 'features',
        title: 'Feature strip (điểm nổi bật phía dưới)',
        type: 'array',
        of: [{ type: 'string' }],
      }),
    ],
    preview: sectionPreview('🦸', 'Hero'),
  }),

  // ── Features (trust bar / marquee / benefits / values) ────
  defineArrayMember({
    name: 'featuresSection',
    title: 'Điểm nổi bật',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'items',
        title: 'Các mục',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'emoji', title: 'Emoji / icon (fallback nếu chưa có ảnh)', type: 'string' }),
            defineField({ name: 'title', title: 'Tiêu đề', type: 'string' }),
            defineField({ name: 'desc', title: 'Mô tả', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'desc' } },
        })],
      }),
    ],
    preview: sectionPreview('✨', 'Điểm nổi bật'),
  }),

  // ── About / Story ─────────────────────────────────
  defineArrayMember({
    name: 'aboutSection',
    title: 'Giới thiệu',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'paragraphs',
        title: 'Đoạn nội dung',
        type: 'array',
        of: [{ type: 'text' }],
      }),
      defineField({ name: 'quote', title: 'Trích dẫn (tùy chọn)', type: 'text', rows: 2 }),
      defineField({ name: 'quoteAuthor', title: 'Người nói (vd: — Hà, Head Barista)', type: 'string' }),
      defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
    ],
    preview: sectionPreview('📖', 'Giới thiệu'),
  }),

  // ── Gallery ───────────────────────────────────────
  defineArrayMember({
    name: 'gallerySection',
    title: 'Không gian',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'note', title: 'Ghi chú mô tả', type: 'text', rows: 2 }),
      defineField({
        name: 'items',
        title: 'Ô gallery',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'galleryItem',
          fields: [
            defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'emoji', title: 'Emoji (fallback nếu chưa có ảnh)', type: 'string' }),
            defineField({ name: 'label', title: 'Nhãn (vd: sảnh đón khách)', type: 'string' }),
            defineField({ name: 'wide', title: 'Ô rộng (chiếm 2 cột)', type: 'boolean' }),
          ],
          preview: { select: { title: 'label' } },
        })],
      }),
    ],
    preview: sectionPreview('🖼', 'Không gian'),
  }),

  // ── Reviews ───────────────────────────────────────
  defineArrayMember({
    name: 'reviewsSection',
    title: 'Đánh giá khách hàng',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'reviews',
        title: 'Đánh giá',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'review',
          fields: [
            defineField({ name: 'text', title: 'Nội dung đánh giá', type: 'text', rows: 3 }),
            defineField({ name: 'name', title: 'Tên khách', type: 'string' }),
            defineField({ name: 'location', title: 'Khu vực (vd: Quận 7)', type: 'string' }),
            defineField({ name: 'service', title: 'Dịch vụ đã dùng', type: 'string' }),
            defineField({ name: 'rating', title: 'Số sao (1–5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
            defineField({ name: 'handle', title: 'Tài khoản MXH (vd: @minhkhoa)', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'service' } },
        })],
      }),
    ],
    preview: sectionPreview('⭐', 'Đánh giá'),
  }),

  // ── Booking / Location / Order CTA ────────────────
  defineArrayMember({
    name: 'bookingSection',
    title: 'Đặt lịch & Liên hệ',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Mô tả', type: 'text', rows: 2 }),
      defineField({ name: 'zaloUrl', title: 'Link Zalo', type: 'string' }),
      defineField({ name: 'phone', title: 'Số điện thoại', type: 'string' }),
      defineField({ name: 'email', title: 'Email', type: 'string' }),
      defineField({ name: 'address', title: 'Địa chỉ', type: 'text', rows: 2 }),
      defineField({ name: 'mapLabel', title: 'Nhãn bản đồ (vd: tên tiệm trên map)', type: 'string' }),
      defineField({
        name: 'hours',
        title: 'Giờ mở cửa',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'hour',
          fields: [
            defineField({ name: 'day', title: 'Ngày (vd: Thứ 2 – Thứ 6)', type: 'string' }),
            defineField({ name: 'time', title: 'Giờ (vd: 09:00 – 20:00)', type: 'string' }),
          ],
          preview: { select: { title: 'day', subtitle: 'time' } },
        })],
      }),
    ],
    preview: sectionPreview('📅', 'Đặt lịch'),
  }),

  // ══ TẦNG 2 — OFFERINGS (chọn theo loại hình) ═══════════════════════

  // ── Services / Menu (gộp dịch vụ + menu món) ──────
  defineArrayMember({
    name: 'servicesSection',
    title: 'Dịch vụ / Menu',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Mô tả', type: 'text', rows: 2 }),
      defineField({
        name: 'services',
        title: 'Danh sách dịch vụ / món',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({ name: 'name', title: 'Tên', type: 'string' }),
            defineField({ name: 'desc', title: 'Mô tả', type: 'text', rows: 2 }),
            defineField({ name: 'price', title: 'Giá (vd: 350.000đ)', type: 'string' }),
            defineField({ name: 'duration', title: 'Thời gian (spa — vd: 60 phút)', type: 'string' }),
            defineField({ name: 'size', title: 'Size (café — vd: S · M · L)', type: 'string' }),
            defineField({ name: 'tag', title: 'Nhãn (vd: Best seller, Mới)', type: 'string' }),
            defineField({ name: 'emoji', title: 'Emoji (fallback nếu chưa có ảnh)', type: 'string' }),
            defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'featured', title: 'Nổi bật', type: 'boolean' }),
            defineField({ name: 'includes', title: 'Các bước trong liệu trình (hiện khi hover thẻ)', type: 'array', of: [{ type: 'string' }] }),
          ],
          preview: { select: { title: 'name', subtitle: 'price' } },
        })],
      }),
    ],
    preview: sectionPreview('💆', 'Dịch vụ / Menu'),
  }),

  // ── Menu / Bảng giá (list theo nhóm) ───────────────
  defineArrayMember({
    name: 'menuSection',
    title: 'Bảng giá / Menu dịch vụ',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Mô tả', type: 'text', rows: 2 }),
      defineField({ name: 'note', title: 'Ghi chú dưới bảng giá', type: 'string' }),
      defineField({
        name: 'categories',
        title: 'Nhóm dịch vụ',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'menuCategory',
          fields: [
            defineField({ name: 'title', title: 'Tên nhóm (vd: Massage, Chăm sóc da)', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Dịch vụ',
              type: 'array',
              of: [defineArrayMember({
                type: 'object',
                name: 'menuItem',
                fields: [
                  defineField({ name: 'name', title: 'Tên dịch vụ', type: 'string' }),
                  defineField({ name: 'duration', title: 'Thời lượng (vd: 60 phút)', type: 'string' }),
                  defineField({ name: 'price', title: 'Giá', type: 'string' }),
                ],
                preview: { select: { title: 'name', subtitle: 'price' } },
              })],
            }),
          ],
          preview: { select: { title: 'title' } },
        })],
      }),
    ],
    preview: sectionPreview('📋', 'Bảng giá'),
  }),

  // ── Pricing ───────────────────────────────────────
  defineArrayMember({
    name: 'pricingSection',
    title: 'Gói dịch vụ',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Mô tả', type: 'text', rows: 2 }),
      defineField({
        name: 'packages',
        title: 'Các gói',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'package',
          fields: [
            defineField({ name: 'name', title: 'Tên gói', type: 'string' }),
            defineField({ name: 'desc', title: 'Mô tả ngắn', type: 'string' }),
            defineField({ name: 'price', title: 'Giá', type: 'string' }),
            defineField({ name: 'duration', title: 'Thời gian', type: 'string' }),
            defineField({ name: 'includes', title: 'Bao gồm', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'featured', title: 'Nổi bật nhất', type: 'boolean' }),
          ],
          preview: { select: { title: 'name', subtitle: 'price' } },
        })],
      }),
    ],
    preview: sectionPreview('💰', 'Gói dịch vụ'),
  }),

  // ── Team (đội ngũ nhiều người) ────────────────────
  defineArrayMember({
    name: 'teamSection',
    title: 'Đội ngũ',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'members',
        title: 'Thành viên',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'member',
          fields: [
            defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'emoji', title: 'Emoji (fallback nếu chưa có ảnh)', type: 'string' }),
            defineField({ name: 'name', title: 'Tên', type: 'string' }),
            defineField({ name: 'role', title: 'Chức vụ', type: 'string' }),
            defineField({ name: 'specialty', title: 'Chuyên môn', type: 'string' }),
            defineField({ name: 'exp', title: 'Kinh nghiệm (vd: 8 năm)', type: 'string' }),
            defineField({ name: 'cert', title: 'Chứng chỉ', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'role' } },
        })],
      }),
    ],
    preview: sectionPreview('👥', 'Đội ngũ'),
  }),

  // ── Founder (1 chuyên viên — khác Team) ────────────
  defineArrayMember({
    name: 'founderSection',
    title: 'Chuyên viên / Founder',
    type: 'object',
    fields: [
      enabledField(),
      defineField({ name: 'eyebrow', title: 'Eyebrow (vd: Chuyên Viên Trị Liệu)', type: 'string' }),
      defineField({ name: 'name', title: 'Tên', type: 'string' }),
      defineField({ name: 'role', title: 'Chức danh', type: 'string' }),
      defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
      defineField({
        name: 'credentials',
        title: 'Chứng chỉ / điểm nổi bật',
        type: 'array',
        of: [{ type: 'string' }],
      }),
      defineField({
        name: 'socials',
        title: 'Mạng xã hội',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'social',
          fields: [
            defineField({ name: 'platform', title: 'Nền tảng (facebook / instagram / phone)', type: 'string' }),
            defineField({ name: 'url', title: 'Link / số', type: 'string' }),
          ],
          preview: { select: { title: 'platform', subtitle: 'url' } },
        })],
      }),
    ],
    preview: {
      select: { name: 'name', enabled: 'enabled' },
      prepare: ({ name, enabled }: { name?: string; enabled?: boolean }) => ({
        title: `🧑‍⚕️ Chuyên viên${name ? ' — ' + name : ''}${enabled === false ? ' — đã ẩn' : ''}`,
      }),
    },
  }),

  // ── Steps (quy trình / các bước) ──────────────────
  defineArrayMember({
    name: 'stepsSection',
    title: 'Các bước / Quy trình',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'steps',
        title: 'Các bước',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            defineField({ name: 'num', title: 'Số thứ tự (vd: 01)', type: 'string' }),
            defineField({ name: 'title', title: 'Tiêu đề / caption', type: 'string' }),
            defineField({ name: 'desc', title: 'Mô tả', type: 'text', rows: 2 }),
            defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'title', subtitle: 'num' } },
        })],
      }),
    ],
    preview: sectionPreview('🔢', 'Các bước'),
  }),

  // ── Callout (ưu đãi / đặt riêng / highlight) ──────
  defineArrayMember({
    name: 'calloutSection',
    title: 'Ưu đãi / Kêu gọi',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'body', title: 'Nội dung', type: 'text', rows: 3 }),
      defineField({ name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
      defineField({ name: 'bullets', title: 'Gạch đầu dòng', type: 'array', of: [{ type: 'string' }] }),
      defineField({ name: 'ctaLabel', title: 'Nhãn nút CTA', type: 'string' }),
      defineField({ name: 'ctaHref', title: 'Link CTA', type: 'string' }),
      defineField({ name: 'showLeadForm', title: 'Hiện form thu thông tin (tên + SĐT)', type: 'boolean', initialValue: false }),
      defineField({ name: 'web3formsKey', title: 'Web3Forms Access Key (nếu bật form)', type: 'string' }),
      defineField({ name: 'successMessage', title: 'Tin nhắn sau khi gửi form', type: 'string' }),
    ],
    preview: sectionPreview('📣', 'Ưu đãi / Kêu gọi'),
  }),

  // ── Banner Carousel (quảng cáo / ưu đãi) ─────────
  defineArrayMember({
    name: 'bannerCarouselSection',
    title: 'Banner Carousel',
    type: 'object',
    fields: [
      enabledField(),
      defineField({
        name: 'slides',
        title: 'Slides',
        type: 'array',
        validation: (Rule) => Rule.min(1),
        of: [defineArrayMember({
          type: 'object',
          name: 'slide',
          fields: [
            defineField({ name: 'heading',  title: 'Tiêu đề',                          type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'subtext',  title: 'Mô tả ngắn',                       type: 'text', rows: 2 }),
            defineField({ name: 'ctaLabel', title: 'Nút CTA (vd: Đặt lịch ngay)',      type: 'string' }),
            defineField({ name: 'ctaUrl',   title: 'Link CTA (vd: #booking / URL)',     type: 'string' }),
            defineField({ name: 'bgColor',  title: 'Màu nền hex (vd: #1a0a0a)',         type: 'string' }),
            defineField({ name: 'image',    title: 'Ảnh nền (ưu tiên hơn màu nền)',     type: 'image', options: { hotspot: true } }),
          ],
          preview: {
            select: { title: 'heading' },
            prepare: ({ title }: { title?: string }) => ({ title: `🖼 ${title ?? 'Slide'}` }),
          },
        })],
      }),
    ],
    preview: sectionPreview('🎠', 'Banner Carousel'),
  }),

  // ── Contact Form (form liên hệ độc lập) ───────────
  defineArrayMember({
    name: 'contactFormSection',
    title: 'Form liên hệ',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Mô tả', type: 'text', rows: 2 }),
      defineField({
        name: 'web3formsKey',
        title: 'Web3Forms Access Key',
        type: 'string',
        description: 'Lấy miễn phí tại web3forms.com — để trống thì form gửi về email của studio',
      }),
      defineField({
        name: 'successMessage',
        title: 'Tin nhắn sau khi gửi thành công',
        type: 'string',
      }),
    ],
    preview: sectionPreview('📋', 'Form liên hệ'),
  }),
]
