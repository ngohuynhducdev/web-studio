import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singletons — layout
      S.listItem().title('🧭 Header').child(
        S.document().schemaType('siteHeader').documentId('siteHeader')
      ),
      S.listItem().title('🦶 Footer').child(
        S.document().schemaType('siteFooter').documentId('siteFooter')
      ),
      S.divider(),
      // Singletons — pages
      S.listItem().title('🏠 Homepage').child(
        S.document().schemaType('homepage').documentId('homepage')
      ),
      S.listItem().title('👋 About Us').child(
        S.document().schemaType('aboutPage').documentId('aboutPage')
      ),
      S.listItem().title('📬 Contact').child(
        S.document().schemaType('contactPage').documentId('contactPage')
      ),
      S.listItem().title('🗂️ Template Library').child(
        S.document().schemaType('templatesPage').documentId('templatesPage')
      ),
      S.divider(),
      // Document lists
      S.documentTypeListItem('template').title('📋 Templates'),
      S.listItem().title('📦 Orders').child(
        S.list().title('Orders').items([
          S.listItem().title('📋 All').child(
            S.documentList()
              .title('All Orders')
              .filter('_type == "site"')
              .defaultOrdering([{ field: 'orderDate', direction: 'desc' }])
          ),
          S.divider(),
          // Renewal
          S.listItem().title('⏰ Renewing Soon').child(
            S.documentList()
              .title('Renewing Soon')
              .filter('_type == "site" && isActive == true && defined(renewalDate)')
              .defaultOrdering([{ field: 'renewalDate', direction: 'asc' }])
          ),
          S.listItem().title('🔴 Expired').child(
            S.documentList()
              .title('Expired')
              .filter('_type == "site" && isActive != false && defined(renewalDate) && dateTime(renewalDate + "T00:00:00Z") < now()')
              .defaultOrdering([{ field: 'renewalDate', direction: 'asc' }])
          ),
          S.divider(),
          // Status
          S.listItem().title('🆕 New').child(
            S.documentList()
              .title('New Orders')
              .filter('_type == "site" && status == "new"')
              .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
          ),
          S.listItem().title('⚙️ In Progress').child(
            S.documentList()
              .title('In Progress')
              .filter('_type == "site" && status == "in_progress"')
              .defaultOrdering([{ field: 'deliveryDate', direction: 'asc' }])
          ),
          S.listItem().title('✅ Awaiting Review').child(
            S.documentList()
              .title('Awaiting Review')
              .filter('_type == "site" && status == "review"')
              .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
          ),
          S.listItem().title('🎉 Delivered').child(
            S.documentList()
              .title('Delivered')
              .filter('_type == "site" && status == "delivered"')
              .defaultOrdering([{ field: 'deliveryDate', direction: 'desc' }])
          ),
          S.listItem().title('❌ Cancelled').child(
            S.documentList()
              .title('Cancelled')
              .filter('_type == "site" && status == "cancelled"')
              .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
          ),
        ])
      ),
    ])
