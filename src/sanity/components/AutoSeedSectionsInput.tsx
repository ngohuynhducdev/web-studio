'use client'
import { useEffect, useRef } from 'react'
import { set, useFormValue } from 'sanity'
import type { ArrayOfObjectsInputProps } from 'sanity'
import { DEFAULT_SECTIONS_MAP } from '@/data/templates'

// Behaviour:
// - First mount, sections already filled  → do nothing (don't overwrite saved content)
// - First mount, sections empty           → seed for current componentKey
// - User switches componentKey            → always re-seed with new template's sections
export function AutoSeedSectionsInput(props: ArrayOfObjectsInputProps) {
  const componentKey = useFormValue(['componentKey']) as string | undefined

  const onChangeRef = useRef(props.onChange)
  const readOnlyRef = useRef(props.readOnly)
  const valueLengthRef = useRef(props.value?.length ?? 0)

  useEffect(() => {
    onChangeRef.current = props.onChange
    readOnlyRef.current = props.readOnly
    valueLengthRef.current = props.value?.length ?? 0
  })

  // Track previous componentKey to distinguish "first mount" from "user switched"
  const prevKeyRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (!componentKey) { prevKeyRef.current = undefined; return }

    const prevKey = prevKeyRef.current
    prevKeyRef.current = componentKey

    // Same key as before — nothing changed (e.g. re-render after seeding)
    if (prevKey === componentKey) return

    const isFirstMount = prevKey === undefined

    // On first mount: only seed if sections is empty
    if (isFirstMount && valueLengthRef.current > 0) return

    const sections = DEFAULT_SECTIONS_MAP[componentKey]
    if (!sections) return
    if (readOnlyRef.current) return
    onChangeRef.current(set(sections))
  }, [componentKey])

  return props.renderDefault(props)
}
