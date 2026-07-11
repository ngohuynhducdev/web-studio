'use client'
import type { ArrayOfPrimitivesInputProps } from 'sanity'

export function ChecklistWithProgress(props: ArrayOfPrimitivesInputProps) {
  const checked = props.value?.length ?? 0
  const total = (props.schemaType.options as { list?: unknown[] } | undefined)?.list?.length ?? 0
  const pct = total > 0 ? Math.round((checked / total) * 100) : 0
  const done = pct === 100

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 5,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}>
          <span style={{ color: done ? '#43d675' : '#999' }}>
            {done ? '✓ Done' : `${checked} / ${total} items`}
          </span>
          <span style={{ color: done ? '#43d675' : '#888' }}>{pct}%</span>
        </div>
        <div style={{
          height: 5,
          background: '#1a1a1a',
          borderRadius: 99,
          overflow: 'hidden',
          border: '1px solid #333',
        }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            borderRadius: 99,
            background: done
              ? 'linear-gradient(90deg, #43d675, #2ecc71)'
              : 'linear-gradient(90deg, #2276fc, #5b9cf6)',
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }} />
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  )
}
