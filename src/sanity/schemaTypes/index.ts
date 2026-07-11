import { type SchemaTypeDefinition } from 'sanity'
import { templateSchema } from './template'
import { siteSchema } from './site'
import { homepageSchema } from './homepage'
import { siteHeaderSchema } from './siteHeader'
import { siteFooterSchema } from './siteFooter'
import { aboutPageSchema } from './aboutPage'
import { contactPageSchema } from './contactPage'
import { templatesPageSchema } from './templatesPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepageSchema,
    siteHeaderSchema,
    siteFooterSchema,
    aboutPageSchema,
    contactPageSchema,
    templatesPageSchema,
    templateSchema,
    siteSchema,
  ],
}
