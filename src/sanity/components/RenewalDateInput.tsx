'use client'
import { useState } from 'react'
import { set } from 'sanity'
import type { StringInputProps } from 'sanity'

function addMonths(dateStr: string, months: number): string {
  const d = new Date(dateStr + 'T00:00:00')
  d.setMonth(d.getMonth() + months)
  return d.toISOString().split('T')[0]
}

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function fmt(dateStr: string) {
  const [y, m, d] = dateStr.split('-')
  return `${d}/${m}/${y}`
}

function getDaysLeft(renewalDate: string): number {
  const today = new Date(todayStr() + 'T00:00:00')
  const renewal = new Date(renewalDate + 'T00:00:00')
  return Math.round((renewal.getTime() - today.getTime()) / 86_400_000)
}

function statusConfig(days: number): { bg: string; border: string; text: string; badge: string; badgeBg: string } {
  if (days < 0)   return { bg: '#1a0a0a', border: '#5a1a1a', text: '#ff6b6b', badge: `Hết hạn ${Math.abs(days)} ngày trước`, badgeBg: '#5a1a1a' }
  if (days <= 7)  return { bg: '#1a1400', border: '#5a4a00', text: '#ffd43b', badge: `Còn ${days} ngày`, badgeBg: '#5a4a00' }
  if (days <= 14) return { bg: '#0d1a0d', border: '#2a4a1a', text: '#69db7c', badge: `Còn ${days} ngày`, badgeBg: '#1a4a1a' }
  return { bg: '#0d1a0d', border: '#1a4a2e', text: '#43d675', badge: `Còn ${days} ngày`, badgeBg: '#0d2b1a' }
}

export function RenewalDateInput(props: StringInputProps) {
  const current = props.value
  const [startDate, setStartDate] = useState(current ?? todayStr())
  const [months, setMonths] = useState('1')

  const parsed = parseInt(months, 10)
  const validMonths = !isNaN(parsed) && parsed >= 1
  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(startDate)
  const calculated = validMonths && validDate ? addMonths(startDate, parsed) : null

  const daysLeft = current ? getDaysLeft(current) : null
  const status = daysLeft != null ? statusConfig(daysLeft) : null

  function handleApply() {
    if (!calculated) return
    props.onChange(set(calculated))
    setStartDate(calculated)
    setMonths('1')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>

      {/* ── Current status ─────────────────────────── */}
      {current && status ? (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px', borderRadius: 6,
          background: status.bg, border: `1px solid ${status.border}`,
        }}>
          <div>
            <div style={{ fontSize: 11, color: '#666', marginBottom: 2 }}>Ngày gia hạn hiện tại</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: status.text }}>{fmt(current)}</div>
          </div>
          <div style={{
            padding: '3px 10px', borderRadius: 99, fontSize: 11, fontWeight: 600,
            background: status.badgeBg, color: status.text,
          }}>
            {status.badge}
          </div>
        </div>
      ) : (
        <div style={{
          padding: '10px 14px', borderRadius: 6,
          background: '#1a1a1a', border: '1px solid #333',
          fontSize: 13, color: '#666', fontStyle: 'italic',
        }}>
          Chưa có ngày gia hạn — điền bên dưới để thiết lập.
        </div>
      )}

      {/* ── Calculator ─────────────────────────────── */}
      <div style={{
        padding: '12px 14px', borderRadius: 6,
        background: '#111', border: '1px solid #2a2a2a',
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: '#555', marginBottom: 10, textTransform: 'uppercase' }}>
          {current ? 'Gia hạn thêm' : 'Thiết lập lần đầu'}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 8, alignItems: 'end', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 11, color: '#777', marginBottom: 4 }}>Từ ngày</div>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              style={{
                width: '100%', padding: '6px 8px', borderRadius: 4,
                border: '1px solid #3a3a3a', background: '#1a1a1a',
                color: '#ddd', fontSize: 13, boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ fontSize: 18, color: '#444', paddingBottom: 6, textAlign: 'center' }}>+</div>
          <div>
            <div style={{ fontSize: 11, color: '#777', marginBottom: 4 }}>Số tháng</div>
            <input
              type="number"
              min="1"
              value={months}
              placeholder="1, 3, 6, 12..."
              onChange={e => setMonths(e.target.value)}
              style={{
                width: '100%', padding: '6px 8px', borderRadius: 4,
                border: '1px solid #3a3a3a', background: '#1a1a1a',
                color: '#ddd', fontSize: 13, boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{
            flex: 1, padding: '7px 10px', borderRadius: 4,
            background: calculated ? '#0a1f12' : '#161616',
            border: `1px solid ${calculated ? '#1a4a2e' : '#2a2a2a'}`,
            fontSize: 13,
            color: calculated ? '#43d675' : '#444',
            fontWeight: calculated ? 600 : 400,
          }}>
            {calculated ? `→ Gia hạn đến ${fmt(calculated)}` : '→ …'}
          </div>
          <button
            type="button"
            disabled={!calculated}
            onClick={handleApply}
            style={{
              padding: '7px 16px', borderRadius: 4, border: 'none',
              cursor: calculated ? 'pointer' : 'not-allowed',
              background: calculated ? '#43d675' : '#222',
              color: calculated ? '#061209' : '#555',
              fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap',
            }}
          >
            Áp dụng
          </button>
        </div>
      </div>

    </div>
  )
}
