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
      S.listItem().title('👋 Về chúng mình').child(
        S.document().schemaType('aboutPage').documentId('aboutPage')
      ),
      S.listItem().title('📬 Liên hệ').child(
        S.document().schemaType('contactPage').documentId('contactPage')
      ),
      S.listItem().title('🗂️ Thư viện mẫu').child(
        S.document().schemaType('templatesPage').documentId('templatesPage')
      ),
      S.listItem().title('📁 Dự án').child(
        S.list().title('Dự án').items([
          S.listItem().title('📄 Nội dung trang').child(
            S.document().schemaType('duAnPage').documentId('duAnPage')
          ),
          S.documentTypeListItem('project').title('🖼️ Danh sách dự án'),
        ])
      ),
      S.divider(),
      // Document lists
      S.documentTypeListItem('template').title('📋 Templates'),
      S.listItem().title('📦 Đơn hàng').child(
        S.list().title('Đơn hàng').items([
          S.listItem().title('📋 Tất cả').child(
            S.documentList()
              .title('Tất cả đơn')
              .filter('_type == "site"')
              .defaultOrdering([{ field: 'orderDate', direction: 'desc' }])
          ),
          S.divider(),
          // Gia hạn
          S.listItem().title('⏰ Sắp gia hạn').child(
            S.documentList()
              .title('Sắp gia hạn')
              .filter('_type == "site" && isActive == true && defined(renewalDate)')
              .defaultOrdering([{ field: 'renewalDate', direction: 'asc' }])
          ),
          S.listItem().title('🔴 Hết hạn').child(
            S.documentList()
              .title('Hết hạn')
              .filter('_type == "site" && isActive != false && defined(renewalDate) && dateTime(renewalDate + "T00:00:00Z") < now()')
              .defaultOrdering([{ field: 'renewalDate', direction: 'asc' }])
          ),
          S.divider(),
          // Tình trạng
          S.listItem().title('🆕 Mới').child(
            S.documentList()
              .title('Đơn mới')
              .filter('_type == "site" && status == "new"')
              .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
          ),
          S.listItem().title('⚙️ Đang làm').child(
            S.documentList()
              .title('Đang làm')
              .filter('_type == "site" && status == "in_progress"')
              .defaultOrdering([{ field: 'deliveryDate', direction: 'asc' }])
          ),
          S.listItem().title('✅ Chờ duyệt').child(
            S.documentList()
              .title('Chờ duyệt')
              .filter('_type == "site" && status == "review"')
              .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
          ),
          S.listItem().title('🎉 Đã bàn giao').child(
            S.documentList()
              .title('Đã bàn giao')
              .filter('_type == "site" && status == "delivered"')
              .defaultOrdering([{ field: 'deliveryDate', direction: 'desc' }])
          ),
          S.listItem().title('❌ Hủy').child(
            S.documentList()
              .title('Hủy')
              .filter('_type == "site" && status == "cancelled"')
              .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
          ),
        ])
      ),
    ])
