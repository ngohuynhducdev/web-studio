import { defineField, defineType } from 'sanity'
import { sectionTypes } from './sections'
import { INDUSTRY_OPTIONS } from '@/types'
import { AutoSeedSiteInput } from '@/sanity/components/AutoSeedSiteInput'
import { ChecklistWithProgress } from '@/sanity/components/ChecklistWithProgress'
import { RenewalDateInput } from '@/sanity/components/RenewalDateInput'
import { IsActiveInput } from '@/sanity/components/IsActiveInput'

export const siteSchema = defineType({
  name: 'site',
  title: 'Đơn hàng',
  type: 'document',
  groups: [
    { name: 'info', title: 'Thông tin đơn' },
    { name: 'workflow', title: 'Quy trình & thanh toán' },
    { name: 'content', title: 'Nội dung landing page' },
  ],
  fields: [
    // ── Thông tin đơn hàng ────────────────────────────
    defineField({
      name: 'clientName',
      title: 'Tên khách hàng',
      type: 'string',
      group: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'businessName',
      title: 'Tên tiệm',
      type: 'string',
      group: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Số điện thoại / Zalo',
      type: 'string',
      group: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'businessType',
      title: 'Loại hình kinh doanh',
      type: 'string',
      group: 'info',
      options: { list: [...INDUSTRY_OPTIONS] },
    }),
    defineField({
      name: 'chosenTemplate',
      title: 'Template đã chọn',
      type: 'reference',
      group: 'info',
      to: [{ type: 'template' }],
    }),
    defineField({
      name: 'status',
      title: 'Trạng thái',
      type: 'string',
      group: 'info',
      initialValue: 'in_progress',
      options: {
        list: [
          { title: '🆕 Mới', value: 'new' },
          { title: '⚙️ Đang làm', value: 'in_progress' },
          { title: '✅ Chờ duyệt', value: 'review' },
          { title: '🎉 Đã bàn giao', value: 'delivered' },
          { title: '❌ Hủy', value: 'cancelled' },
        ],
      },
    }),
    defineField({
      name: 'orderDate',
      title: 'Ngày đặt',
      type: 'date',
      group: 'info',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'deliveryDate',
      title: 'Ngày bàn giao (dự kiến)',
      type: 'date',
      group: 'info',
      initialValue: () => {
        const d = new Date()
        d.setDate(d.getDate() + 2)
        return d.toISOString().split('T')[0]
      },
    }),
    defineField({
      name: 'previewSlug',
      title: 'Slug preview (URL demo)',
      type: 'slug',
      group: 'info',
      description: 'Link demo: tiemwebnho.vercel.app/preview/[slug]',
      options: { source: 'businessName' },
    }),
    defineField({
      name: 'customDomain',
      title: 'Domain riêng của khách',
      type: 'string',
      group: 'info',
      description: 'Ví dụ: tiemnailcuanam.com — không có https://',
    }),
    defineField({
      name: 'domainStatus',
      title: 'Tình trạng domain',
      type: 'string',
      group: 'info',
      initialValue: 'none',
      options: {
        list: [
          { title: '— Chưa có', value: 'none' },
          { title: '🔧 Đang setup', value: 'setting_up' },
          { title: '🟢 Live', value: 'live' },
        ],
      },
    }),
    defineField({ name: 'dnsNote', title: 'Ghi chú DNS / nhà cung cấp domain', type: 'text', rows: 2, group: 'info' }),
    defineField({
      name: 'seoTitle',
      title: 'Tiêu đề SEO',
      type: 'string',
      group: 'info',
      description: 'Tiêu đề hiển thị trên Google. Để trống sẽ dùng tên tiệm.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Mô tả SEO',
      type: 'text',
      rows: 2,
      group: 'info',
      description: 'Mô tả ngắn hiển thị trên Google (120–160 ký tự).',
      validation: (Rule) => Rule.max(160).warning('Nên dưới 160 ký tự để hiển thị đầy đủ trên Google.'),
    }),
    defineField({ name: 'notes', title: 'Ghi chú nội bộ', type: 'text', rows: 3, group: 'info' }),

    // ── Quy trình & thanh toán ─────────────────────────
    defineField({
      name: 'isActive',
      title: 'Site đang hoạt động',
      type: 'boolean',
      group: 'workflow',
      initialValue: false,
      description: 'Tắt thủ công để khoá site ngay lập tức. Khi renewalDate qua, site cũng tự tắt dù đang bật.',
      components: { input: IsActiveInput },
    }),
    defineField({
      name: 'renewalDate',
      title: 'Ngày gia hạn tiếp theo',
      type: 'date',
      group: 'workflow',
      description: 'Dùng bộ tính bên trên để tự động điền, hoặc chọn thủ công nếu cần.',
      components: { input: RenewalDateInput },
    }),
    defineField({
      name: 'servicePlan',
      title: 'Gói dịch vụ',
      type: 'string',
      group: 'workflow',
      options: {
        list: [
          { title: 'Cơ bản — 399k/tháng', value: 'basic' },
          { title: 'Nâng cao — 699k/tháng', value: 'premium' },
        ],
      },
    }),
    defineField({
      name: 'setupFee',
      title: 'Phí setup đã thu (VNĐ)',
      type: 'number',
      group: 'workflow',
      description: 'Gói Cơ bản: 500k. Gói Nâng cao: 500k + tiền domain thực tế.',
    }),
    defineField({
      name: 'intakeReceived',
      title: 'Đã nhận nội dung từ khách',
      type: 'array',
      group: 'workflow',
      of: [{ type: 'string' }],
      description: 'Tích những gì khách đã gửi — checklist để không sót khi build.',
      components: { input: ChecklistWithProgress },
      options: {
        layout: 'grid',
        list: [
          { title: 'Logo / nhận diện', value: 'logo' },
          { title: 'Ảnh không gian / sản phẩm', value: 'photos' },
          { title: 'Danh sách dịch vụ / menu + giá', value: 'services' },
          { title: 'Thông tin liên hệ (địa chỉ, SĐT, Zalo)', value: 'contact' },
          { title: 'Giờ mở cửa', value: 'hours' },
          { title: 'Nội dung giới thiệu / câu chuyện', value: 'about' },
          { title: 'Đánh giá khách hàng', value: 'reviews' },
        ],
      },
    }),
    defineField({
      name: 'qaChecks',
      title: 'QA trước bàn giao',
      type: 'array',
      group: 'workflow',
      of: [{ type: 'string' }],
      description: 'Tích đủ 5 mục trước khi chuyển sang "Chờ duyệt".',
      components: { input: ChecklistWithProgress },
      options: {
        layout: 'grid',
        list: [
          { title: 'Nội dung đúng (tên tiệm, giá...)', value: 'content' },
          { title: 'Ảnh hiển thị đầy đủ', value: 'images' },
          { title: 'Link Zalo / SĐT bấm đúng', value: 'contact' },
          { title: 'Form hoạt động (gửi nhận được)', value: 'form' },
          { title: 'Hiển thị tốt trên mobile', value: 'mobile' },
        ],
      },
    }),

    // ── Tùy chỉnh giao diện ────────────────────────────
    defineField({
      name: 'brandColor',
      title: 'Màu thương hiệu',
      type: 'string',
      group: 'content',
      description: 'Mã màu hex — ví dụ: #d4a373. Để trống sẽ dùng màu mặc định của template.',
      validation: (Rule) =>
        Rule.custom((val) => {
          if (!val) return true;
          return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(val)
            ? true
            : 'Nhập mã hex hợp lệ, ví dụ: #d4a373';
        }),
    }),

    // ── Nội dung landing page ─────────────────────────
    defineField({
      name: 'sections',
      title: 'Nội dung các section',
      type: 'array',
      group: 'content',
      description:
        'Tự động điền khi chọn "Template đã chọn". ' +
        'Thứ tự & layout cố định trong code — chỉ sửa nội dung tại đây.',
      of: sectionTypes,
      options: { sortable: false },
      components: { input: AutoSeedSiteInput },
    }),
  ],
  preview: {
    select: {
      title: 'businessName',
      status: 'status',
      clientName: 'clientName',
      intakeReceived: 'intakeReceived',
      qaChecks: 'qaChecks',
      domainStatus: 'domainStatus',
      isActive: 'isActive',
      renewalDate: 'renewalDate',
    },
    prepare({ title, status, clientName, intakeReceived, qaChecks, domainStatus, isActive, renewalDate }) {
      const statusLabel: Record<string, string> = {
        new: '🆕', in_progress: '⚙️', review: '✅', delivered: '🎉', cancelled: '❌',
      }
      const today = new Date().toISOString().split('T')[0]
      const isExpired = renewalDate != null && (renewalDate as string) < today
      const suspended = isActive === false
      const intake = (intakeReceived as string[] | undefined)?.length ?? 0
      const qa = (qaChecks as string[] | undefined)?.length ?? 0
      const domIcon = ({ none: '', setting_up: '🔧', live: '🌐🟢' } as Record<string, string>)[domainStatus as string] ?? ''
      const statusIcon = statusLabel[status as string] ?? status
      const parts = [`${clientName} · ${statusIcon}`, `📋${intake}/7`, `✅${qa}/5`]
      if (domIcon) parts.push(domIcon)
      if (isExpired) parts.push('🔴 Hết hạn')
      else if (suspended) parts.push('💤 Tạm ngưng')
      return {
        title: title || 'Chưa đặt tên',
        subtitle: parts.join(' · '),
      }
    },
  },
})
