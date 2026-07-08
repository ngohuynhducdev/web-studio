import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { sitesQuery } from '@/lib/queries'
import { Site } from '@/types'
import OrderList from './OrderList'

export const dynamic = 'force-dynamic'

export default async function DonHangPage() {
  const orders: Site[] = await client.fetch(sitesQuery)

  const stats = {
    total: orders.length,
    newOrders: orders.filter((o) => o.status === 'new').length,
    inProgress: orders.filter((o) => o.status === 'in_progress').length,
    review: orders.filter((o) => o.status === 'review').length,
    delivered: orders.filter((o) => o.status === 'delivered').length,
  }

  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-[var(--color-brand-ink)]">
            Quản lý đơn hàng
          </h1>
          <p className="text-[var(--color-brand-ink)]/50 mt-1 text-sm">
            Cập nhật tại{' '}
            <Link href="/studio" className="text-[var(--color-brand-mocha)] hover:underline">
              Sanity Studio
            </Link>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Tổng đơn', value: stats.total, color: 'text-[var(--color-brand-ink)]' },
            { label: 'Mới', value: stats.newOrders, color: 'text-blue-600' },
            { label: 'Đang làm', value: stats.inProgress, color: 'text-orange-600' },
            { label: 'Chờ duyệt', value: stats.review, color: 'text-purple-600' },
            { label: 'Đã bàn giao', value: stats.delivered, color: 'text-green-600' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-xl border border-[var(--color-brand-beige)] px-5 py-4">
              <p className="text-sm text-[var(--color-brand-ink)]/50">{label}</p>
              <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* Order list */}
        <div className="bg-white rounded-xl border border-[var(--color-brand-beige)] p-6">
          <OrderList orders={orders} />
        </div>
      </div>
    </main>
  )
}
