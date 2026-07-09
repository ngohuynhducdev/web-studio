'use client'
import { useEffect, useRef } from 'react'
import { set, useFormValue, useClient } from 'sanity'
import type { ArrayOfObjectsInputProps } from 'sanity'
import { apiVersion } from '@/sanity/env'
import { DEFAULT_SECTIONS_MAP } from '@/data/templates'
import type { PageSection } from '@/types'

// Merge strategy when switching templates:
// - New template's section ORDER is preserved
// - Existing content is matched by _key first, then by _type — each existing
//   section is consumed at most once, so templates with duplicate _type
//   (thai-spa, zen-wellness, bach-thao) merge correctly
// - Matched sections adopt the new template's _key so pick-by-_key lookups resolve
// - Sections in new template with no match → use new template's default
// - Leftover sections → appended at end with enabled:false (hidden but preserved)
function mergeSections(current: PageSection[], next: PageSection[]): PageSection[] {
  const remaining = [...current]
  const takeMatch = (newSec: PageSection): PageSection | undefined => {
    let idx = remaining.findIndex(s => s._key === newSec._key)
    if (idx === -1) idx = remaining.findIndex(s => s._type === newSec._type)
    if (idx === -1) return undefined
    return remaining.splice(idx, 1)[0]
  }

  const active = next.map(newSec => {
    const existing = takeMatch(newSec)
    if (!existing) return newSec
    // Strip enabled:false — section is back in active layout
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { enabled: _ignored, ...data } = existing as PageSection & { enabled?: boolean }
    return { ...data, _key: newSec._key } as PageSection
  })

  // Array _keys must stay unique — re-key leftovers that collide with an active key
  const activeKeys = new Set(active.map(s => s._key))
  const hidden = remaining.map(s => ({
    ...s,
    _key: activeKeys.has(s._key) ? `${s._key}-prev` : s._key,
    enabled: false,
  }) as PageSection)

  return [...active, ...hidden]
}

// Behaviour:
// - Page load, sections already filled  → do nothing (preserve existing client content)
// - Page load, sections empty           → seed from chosen template
// - User switches template, no content  → seed from new template
// - User switches template, has content → smart merge (keep matching sections, fill gaps)
export function AutoSeedSiteInput(props: ArrayOfObjectsInputProps) {
  const chosenTemplate = useFormValue(['chosenTemplate']) as { _ref?: string } | undefined
  const templateRef = chosenTemplate?._ref

  const client = useClient({ apiVersion })
  const clientRef = useRef(client)
  const onChangeRef = useRef(props.onChange)
  const readOnlyRef = useRef(props.readOnly)
  const currentSectionsRef = useRef<PageSection[]>(props.value as PageSection[] ?? [])

  useEffect(() => {
    clientRef.current = client
    onChangeRef.current = props.onChange
    readOnlyRef.current = props.readOnly
    currentSectionsRef.current = props.value as PageSection[] ?? []
  })

  const mountRefRef = useRef<string | undefined | null>(null)
  const lastSeededRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (mountRefRef.current === null) {
      mountRefRef.current = templateRef
    }

    if (!templateRef) return
    if (templateRef === lastSeededRef.current) return

    const isPageLoad = templateRef === mountRefRef.current
    const hasContent = currentSectionsRef.current.length > 0

    // Page load with existing sections → preserve
    if (isPageLoad && hasContent) {
      lastSeededRef.current = templateRef
      return
    }

    lastSeededRef.current = templateRef
    let cancelled = false

    clientRef.current
      .withConfig({ perspective: 'previewDrafts' })
      .fetch<{ componentKey?: string; sections?: PageSection[] } | null>(
        `*[_type == "template" && _id == $id][0] { componentKey, sections }`,
        { id: templateRef }
      )
      .then((template) => {
        if (cancelled) return
        if (readOnlyRef.current) return

        const newSections =
          (template?.sections?.length ? template.sections : null) ??
          (template?.componentKey ? DEFAULT_SECTIONS_MAP[template.componentKey] : null)

        if (!newSections) return

        // Template switch with existing content → merge
        if (!isPageLoad && hasContent) {
          onChangeRef.current(set(mergeSections(currentSectionsRef.current, newSections)))
          return
        }

        // No existing content (first seed or empty) → use new template as-is
        onChangeRef.current(set(newSections))
      })

    return () => { cancelled = true }
  }, [templateRef])

  return props.renderDefault(props)
}
