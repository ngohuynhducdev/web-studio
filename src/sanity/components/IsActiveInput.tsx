'use client'
import { useEffect, useRef } from 'react'
import { set } from 'sanity'
import { useFormValue } from 'sanity'
import type { BooleanInputProps } from 'sanity'

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

export function IsActiveInput(props: BooleanInputProps) {
  const renewalDate = useFormValue(['renewalDate']) as string | undefined
  const isOn = props.value ?? false

  const isExpired = renewalDate != null && renewalDate < todayStr()

  // Sync isActive with renewalDate: expired → OFF, future → ON.
  // Fires on mount and whenever renewalDate changes (e.g. after using the renewal calculator).
  const onChangeRef = useRef(props.onChange)
  useEffect(() => { onChangeRef.current = props.onChange }, [props.onChange])

  useEffect(() => {
    if (renewalDate == null) return
    onChangeRef.current(set(!isExpired))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renewalDate])

  function handleToggle() {
    props.onChange(set(!isOn))
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 14px', borderRadius: 6, width: '100%', textAlign: 'left',
        background: isOn ? '#0d1f12' : '#111',
        border: `1px solid ${isOn ? '#1a4a2e' : '#2a2a2a'}`,
        cursor: 'pointer',
      }}
    >
      {/* Toggle track */}
      <div style={{
        position: 'relative', width: 38, height: 22, borderRadius: 11, flexShrink: 0,
        background: isOn ? '#43d675' : '#333',
        transition: 'background 0.2s',
      }}>
        <div style={{
          position: 'absolute', top: 3,
          left: isOn ? 19 : 3,
          width: 16, height: 16, borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
        }} />
      </div>

      {/* Label */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: '#ddd' }}>
          Site is active
        </div>
        <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>
          Turn off to lock the site immediately
        </div>
      </div>

      {/* Status dot */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div style={{
          width: 7, height: 7, borderRadius: '50%',
          background: isOn ? '#43d675' : '#ff6b6b',
          boxShadow: `0 0 5px ${isOn ? '#43d675' : '#ff6b6b'}`,
        }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: isOn ? '#43d675' : '#ff6b6b' }}>
          {isOn ? 'Active' : 'Paused'}
        </span>
      </div>
    </button>
  )
}
