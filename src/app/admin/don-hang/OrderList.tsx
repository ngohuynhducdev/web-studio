'use client'

import { useState } from 'react'
import { Site, OrderStatus } from '@/types'

const STATUS_CONFIG: Record<OrderStatus, { label: string; color: string }> = {
  new:         { label: '🆕 Mới',          color: 'bg-blue-100 text-blue-800' },
  in_progress: { label: '⚙️ Đang làm',    color: 'bg-orange-100 text-orange-800' },
  review:      { label: '✅ Chờ duyệt',   color: 'bg-purple-100 text-purple-800' },
  delivered:   { label: '🎉 Đã bàn giao', color: 'bg-green-100 text-green-800' },
  cancelled:   { label: '❌ Hủy',         color: 'bg-red-100 text-red-800' },
}

const BUSINESS_TYPE_LABEL: Record<string, string> = {
  nail: 'Tiệm Nail', spa: 'Spa & Massage', cafe: 'Café & Quán',
  gym: 'Phòng Gym', bakery: 'Tiệm Bánh', barber: 'Barber / Salon',
  studio: 'Studio', other: 'Khác',
}

const ALL_STATUSES = ['all', ...Object.keys(STATUS_CONFIG)] as const

function formatDate(dateStr?: string) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('vi-VN')
}

const DOMAIN_STATUS: Record<string, { label: string; color: string }> = {
  none:       { label: '—',          color: 'bg-gray-100 text-gray-500' },
  setting_up: { label: '🔧 Setup',  color: 'bg-yellow-100 text-yellow-800' },
  live:       { label: '🌐 Live',   color: 'bg-green-100 text-green-800' },
}

// Tổng số mục — khớp options trong site.ts (intakeReceived / qaChecks)
const INTAKE_TOTAL = 7
const QA_TOTAL = 5

function ProgressCell({ o }: { o: Site }) {
  const intake = o.intakeReceived?.length ?? 0
  const qa = o.qaChecks?.length ?? 0
  const domain = DOMAIN_STATUS[o.domainStatus ?? 'none'] ?? DOMAIN_STATUS.none
  const chip = 'inline-block px-2 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap'
  const ok = 'bg-green-100 text-green-800'
  const todo = 'bg-gray-100 text-gray-600'

  return (
    <div className="flex flex-col gap-1 items-start">
<span className={`${chip} ${intake === INTAKE_TOTAL ? ok : todo}`}>📋 {intake}/{INTAKE_TOTAL}</span>
      <span className={`${chip} ${qa === QA_TOTAL ? ok : todo}`}>✅ {qa}/{QA_TOTAL}</span>
      <span className={`${chip} ${domain.color}`}>{domain.label}</span>
    </div>
  )
}

function SeedButton({ orderId, templateSlug }: { orderId: string; templateSlug?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')

  async function handleSeed() {
    if (!templateSlug) return alert('Đơn này chưa chọn template.')
    if (!confirm(`Seed sections từ template "${templateSlug}" vào đơn này?`)) return

    setStatus('loading')
    try {
      const res = await fetch('/api/admin/seed-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, templateSlug }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setStatus('ok')
    } catch (err) {
      console.error(err)
      setStatus('err')
    }
  }

  return (
    <button
      onClick={handleSeed}
      disabled={status === 'loading'}
      title="Copy DEFAULT_SECTIONS vào đơn này"
      className={`text-xs px-2 py-1 rounded border transition-colors ${
        status === 'ok'  ? 'border-green-400 text-green-700 bg-green-50' :
        status === 'err' ? 'border-red-400 text-red-700 bg-red-50' :
        'border-[var(--color-brand-beige)] text-[var(--color-brand-ink)]/60 hover:border-[var(--color-brand-mocha)] hover:text-[var(--color-brand-mocha)]'
      }`}
    >
      {status === 'loading' ? '...' : status === 'ok' ? '✓ Đã seed' : status === 'err' ? '✗ Lỗi' : '⚡ Seed'}
    </button>
  )
}

const PAGE_SIZE = 20

export default function OrderList({ orders }: { orders: (Site & { previewSlug?: string })[] }) {
  const [activeStatus, setActiveStatus] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [sortField, setSortField] = useState<'orderDate' | 'deliveryDate'>('orderDate')
  const [sortDir, setSortDir] = useState<'desc' | 'asc'>('desc')

  function toggleSort(field: 'orderDate' | 'deliveryDate') {
    if (sortField === field) setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'))
    else { setSortField(field); setSortDir('desc') }
    setPage(1)
  }

  const filtered = orders.filter((o) => {
    const matchStatus = activeStatus === 'all' || o.status === activeStatus
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      o.businessName.toLowerCase().includes(q) ||
      o.clientName.toLowerCase().includes(q) ||
      o.phone.includes(q)
    return matchStatus && matchSearch
  })

  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortField] ?? ''
    const bv = b[sortField] ?? ''
    return sortDir === 'desc' ? bv.localeCompare(av) : av.localeCompare(bv)
  })

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const countByStatus = (status: string) =>
    status === 'all'
      ? orders.length
      : orders.filter((o) => o.status === status).length

  return (
    <div>
      {/* Search */}
      <input
        type="text"
        placeholder="Tìm theo tên tiệm, tên khách, SĐT..."
        value={search}
        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        className="w-full mb-4 px-4 py-2 border border-[var(--color-brand-beige)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-mocha)]"
      />

      {/* Status tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ALL_STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => { setActiveStatus(s); setPage(1); }}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeStatus === s
                ? 'bg-[var(--color-brand-mocha)] text-white'
                : 'bg-[var(--color-brand-beige)] text-[var(--color-brand-ink)] hover:bg-[var(--color-brand-mocha)]/10'
            }`}
          >
            {s === 'all' ? 'Tất cả' : STATUS_CONFIG[s as OrderStatus].label}
            <span className="ml-1.5 opacity-70">({countByStatus(s)})</span>
          </button>
        ))}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <p className="text-center py-16 text-[var(--color-brand-ink)]/40">Không có đơn nào.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-brand-beige)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--color-brand-beige)]/50">
              <tr>
                {['Tiệm', 'Khách hàng', 'SĐT', 'Loại hình', 'Template', 'Trạng thái', 'Tiến độ', 'Preview'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-medium text-[var(--color-brand-ink)]/60 whitespace-nowrap">{h}</th>
                ))}
                {(['orderDate', 'deliveryDate'] as const).map((field) => (
                  <th key={field} className="text-left px-4 py-3 font-medium text-[var(--color-brand-ink)]/60 whitespace-nowrap">
                    <button
                      onClick={() => toggleSort(field)}
                      className="inline-flex items-center gap-1 hover:text-[var(--color-brand-mocha)] transition-colors"
                    >
                      {field === 'orderDate' ? 'Ngày đặt' : 'Bàn giao'}
                      <span className="text-[10px]">{sortField === field ? (sortDir === 'desc' ? '↓' : '↑') : '↕'}</span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-beige)]">
              {paginated.map((o) => {
                const status = STATUS_CONFIG[o.status] ?? { label: o.status, color: 'bg-gray-100 text-gray-700' }
                const templateSlug = o.chosenTemplate?.slug
                return (
                  <tr key={o._id} className="hover:bg-[var(--color-brand-cream)] transition-colors">
                    <td className="px-4 py-3 font-semibold text-[var(--color-brand-ink)]">
                      {o.businessName}
                      {o.notes && (
                        <p className="text-xs font-normal text-[var(--color-brand-ink)]/50 mt-0.5 max-w-[160px] truncate">
                          {o.notes}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-brand-ink)]/80">{o.clientName}</td>
                    <td className="px-4 py-3">
                      <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="text-[var(--color-brand-mocha)] hover:underline">
                        {o.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-[var(--color-brand-ink)]/70">
                      {o.businessType ? BUSINESS_TYPE_LABEL[o.businessType] ?? o.businessType : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        {templateSlug ? (
                          <span className="text-[var(--color-brand-mocha)]">{o.chosenTemplate!.title}</span>
                        ) : <span className="text-[var(--color-brand-ink)]/30">—</span>}
                        <SeedButton orderId={o._id} templateSlug={templateSlug} />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <ProgressCell o={o} />
                    </td>
                    <td className="px-4 py-3">
                      {o.previewSlug ? (
                        <div className="flex items-center gap-2">
                          <a
                            href={`/preview/${o.previewSlug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--color-brand-mocha)] hover:underline whitespace-nowrap"
                          >
                            Xem preview ↗
                          </a>
                          <button
                            onClick={() => navigator.clipboard.writeText(`${window.location.origin}/preview/${o.previewSlug}`)}
                            title="Copy link"
                            className="text-xs text-[var(--color-brand-ink)]/40 hover:text-[var(--color-brand-mocha)]"
                          >
                            📋
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-[var(--color-brand-ink)]/30">Chưa có</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-brand-ink)]/60 whitespace-nowrap">
                      {formatDate(o.orderDate)}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-brand-ink)]/60 whitespace-nowrap">
                      {formatDate(o.deliveryDate)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm text-[var(--color-brand-ink)]/60">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1.5 rounded border border-[var(--color-brand-beige)] disabled:opacity-40 hover:border-[var(--color-brand-mocha)] hover:text-[var(--color-brand-mocha)] transition-colors"
          >
            ← Trước
          </button>
          <span>
            Trang {page} / {totalPages} &nbsp;·&nbsp; {sorted.length} đơn
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1.5 rounded border border-[var(--color-brand-beige)] disabled:opacity-40 hover:border-[var(--color-brand-mocha)] hover:text-[var(--color-brand-mocha)] transition-colors"
          >
            Tiếp →
          </button>
        </div>
      )}
    </div>
  )
}
