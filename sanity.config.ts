'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
// Singleton documents — exactly one instance, edited via the desk structure.
// Block create/delete/duplicate so editors can't break the fixed _id queries.
const singletonTypes = new Set([
  'homepage',
  'siteHeader',
  'siteFooter',
  'aboutPage',
  'contactPage',
  'templatesPage',
  'duAnPage',
])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
    newDocumentOptions: (prev, {creationContext}) =>
      creationContext.type === 'global'
        ? prev.filter((item) => !singletonTypes.has(item.templateId))
        : prev,
  },
  plugins: [
    structureTool({structure}),
    media(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
