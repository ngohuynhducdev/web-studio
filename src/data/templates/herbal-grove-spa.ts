import type { PageSection } from "@/types";

// Default content for Herbal Grove Spa — a traditional herbal foot spa.
export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "heroSection", _key: "default-hero",
    eyebrow: "Foot Spa · HCMC",
    headingMain: "Peace of mind,",
    headingItalic: "starting at your feet.",
    subtitle:
      "A traditional herbal foot spa — mugwort leaf soaks, ankle massage, belly warming. After a long day, you deserve to slow down for a while.",
    ctaPrimary: "View Services",
    ctaSecondary: "Book Now",
  },
  {
    _type: "servicesSection", _key: "default-services",
    headingMain: "Every treatment,",
    headingItalic: "its own story.",
    subtitle:
      "All herbs picked fresh each morning from our own garden in Da Lat. No blended oils. No fumigated stock.",
    services: [
      {
        _key: "sv1", tag: "Popular",
        name: "Mugwort Foot Soak",
        duration: "45 min", price: "180,000 VND",
        imageUrl: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=85&fit=crop&auto=format",
        desc: "Fresh mugwort, crushed ginger, wild betel leaf — simmered into water warmed to 42°C. Improves circulation, eases heel pain, and helps with cold hands and feet.",
      },
      {
        _key: "sv2", tag: "Bestseller",
        name: "Ankle Massage & Soak Combo",
        duration: "75 min", price: "280,000 VND",
        imageUrl: "https://images.unsplash.com/photo-1559185590-879c66a55254?w=800&q=85&fit=crop&auto=format",
        desc: "30 minutes of herbal foot soak plus 45 minutes of heel rubbing and pressure-point work. Suited to office workers whose feet ache from long hours on them.",
      },
      {
        _key: "sv3", tag: undefined,
        name: "Hot Stone Roll Treatment",
        duration: "60 min", price: "260,000 VND",
        imageUrl: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?w=800&q=85&fit=crop&auto=format",
        desc: "Heated volcanic basalt stones rolled along pressure points — deep warmth that releases tension in the feet. Ideal after a long journey.",
      },
      {
        _key: "sv4", tag: undefined,
        name: "Warm Belly & Herbal Feet",
        duration: "90 min", price: "350,000 VND",
        imageUrl: "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=800&q=85&fit=crop&auto=format",
        desc: "A warm herbal pouch placed on the belly, paired with a foot soak and massage. Designed for guests with difficult periods, a cold stomach, or trouble sleeping.",
      },
      {
        _key: "sv5", tag: "Premium",
        name: "Full Therapy Package",
        duration: "120 min", price: "480,000 VND",
        imageUrl: "https://images.unsplash.com/photo-1614740109275-69b54cd90983?w=800&q=85&fit=crop&auto=format",
        desc: "Foot soak, foot massage, hot stone rolling, warm herbal compress, and herbal tea to finish. The complete experience for first-time guests.",
      },
    ],
  },
  {
    _type: "aboutSection", _key: "default-about",
    headingMain: "We grow",
    headingItalic: "our own.",
    paragraphs: [
      "Herbal Grove Spa opened in 2018 on a simple belief: caring for your feet means caring for your health at the root. All day you stand, you walk, you carry the load — and by evening, it's your two feet that have taken the brunt of it.",
      "We keep our own herb garden in Da Lat — mugwort, lemongrass, ginger, wild betel leaf, holy basil. Picked every morning and brought to the shop the same day, because dried, frozen herbs never carry that same fresh scent.",
    ],
    quote: "Folk remedies were never meant to cure illness — just to help you wake up a little lighter tomorrow.",
    quoteAuthor: "Ms. Hai, Founder",
  },
  {
    _type: "featuresSection", _key: "default-herbs",
    headingMain: "Picked each morning,",
    headingItalic: "never dried or frozen.",
    items: [
      { _key: "hb1", emoji: "🌿", title: "Mugwort",         imageUrl: "Artemisia vulgaris", desc: "Improves circulation, eases heel pain, and helps with cold hands and feet. Featured in our classic foot soak." },
      { _key: "hb2", emoji: "🫚", title: "Fresh Ginger",    imageUrl: "Zingiber officinale", desc: "Warms the belly, eases joint pain, and stimulates circulation. Crushed and added to the 42°C soaking water." },
      { _key: "hb3", emoji: "🍃", title: "Lemongrass",      imageUrl: "Cymbopogon citratus", desc: "Deodorizes, fights bacteria, and lends a light, calming scent. Bruised and left floating on the soak." },
      { _key: "hb4", emoji: "🌱", title: "Wild Betel Leaf", imageUrl: "Piper sarmentosum", desc: "Relieves chronic joint and bone pain, especially for older guests. Used in our hot stone roll treatment." },
      { _key: "hb5", emoji: "🍀", title: "Holy Basil",      imageUrl: "Ocimum gratissimum", desc: "Cools the body, eases colds, and supports sleep. Brewed as tea to close out each session." },
      { _key: "hb6", emoji: "🌾", title: "Perilla Leaf",    imageUrl: "Perilla frutescens", desc: "Anti-inflammatory, aids digestion, and is gentle for women. Featured in our warm belly and feet treatment." },
    ],
  },
  {
    _type: "stepsSection", _key: "default-process",
    headingMain: "A session at Herbal Grove Spa,",
    headingItalic: "unfolds like this.",
    steps: [
      { _key: "p1", num: "01", title: "Welcome & Warm Tea", desc: "Guests are welcomed with a warm herbal tea and a quick check-in on how they're feeling, so we can match them to the right treatment." },
      { _key: "p2", num: "02", title: "Foot Soak", desc: "Herbal water warmed to 42°C, soaked for 25–30 minutes. Guests rest, read, or listen to soft music." },
      { _key: "p3", num: "03", title: "Therapeutic Massage", desc: "Our therapists work through rubbing and pressure-point techniques suited to the treatment — no heavy force, no pain." },
      { _key: "p4", num: "04", title: "Tea & Rest", desc: "To close, guests are offered a cooling herbal tea and ten more minutes to rest before heading out." },
    ],
  },
  {
    _type: "gallerySection", _key: "default-gallery",
    headingMain: "A quiet corner",
    headingItalic: "in the middle of the city.",
    note: "Private room · 4 chairs",
    items: [
      { _key: "g1", label: "foot soak room", wide: true,  imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=85&fit=crop&auto=format" },
      { _key: "g2", label: "fresh herbs",   wide: false, imageUrl: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=85&fit=crop&auto=format" },
      { _key: "g3", label: "closing tea corner", wide: false, imageUrl: "https://images.unsplash.com/photo-1770573320171-9f21c3c1f8f5?w=800&q=85&fit=crop&auto=format" },
      { _key: "g4", label: "warm & quiet", wide: false, imageUrl: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?w=800&q=85&fit=crop&auto=format" },
      { _key: "g5", label: "herbal tea bowls",   wide: false, imageUrl: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&q=85&fit=crop&auto=format" },
      { _key: "g6", label: "hot stone area", wide: true,  imageUrl: "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=1400&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "pricingSection", _key: "default-pricing",
    headingMain: "Full-session packages,",
    headingItalic: "better value.",
    subtitle: "Book a package and save 10–15% versus paying per treatment — tea and a light finishing touch included.",
    packages: [
      {
        _key: "pk1", name: "Essential",
        desc: "For busy guests who want quick relief after work.",
        price: "260,000 VND", duration: "/ session", featured: false,
        includes: [
          "30-minute herbal foot soak",
          "30-minute ankle massage",
          "Herbal tea at start and finish",
        ],
      },
      {
        _key: "pk2", name: "Therapy",
        desc: "Our most popular package — suited to office workers and chronic aches.",
        price: "420,000 VND", duration: "/ session", featured: true,
        includes: [
          "30-minute herbal foot soak",
          "45-minute foot massage & pressure points",
          "20-minute hot stone roll",
          "Warm herbal belly compress",
          "Cooling herbal tea to finish",
        ],
      },
      {
        _key: "pk3", name: "Recovery",
        desc: "A full treatment for deep fatigue or special occasions.",
        price: "680,000 VND", duration: "/ session", featured: false,
        includes: [
          "Foot soak with essential oils",
          "90-minute foot & hand massage",
          "Hot stone roll & herbal compress",
          "Deep warm belly treatment",
          "A take-home herbal pack included",
        ],
      },
    ],
  },
  {
    _type: "reviewsSection", _key: "default-reviews",
    headingMain: "Real reviews,",
    headingItalic: "straight from Google.",
    reviews: [
      { _key: "r1", name: "Mr. Tuan",  service: "Therapeutic Massage", rating: 5, text: "I'd had heel pain for ages — three sessions in and it's noticeably better. Clean space, skilled therapists. I'll keep coming back." },
      { _key: "r2", name: "Ms. Mai",  service: "Warm Belly Treatment",       rating: 5, text: "My periods used to hurt a lot. Two visits here and I felt so much better — not like other places that just rub through it. Recommended." },
      { _key: "r3", name: "Mrs. Lan",  service: "Mugwort Foot Soak",    rating: 5, text: "I'm older and my knees ache often. The staff here were so attentive, never rushing me. The closing tea was lovely too." },
    ],
  },
  {
    _type: "bookingSection", _key: "default-booking",
    headingMain: "Come by Herbal Grove Spa",
    headingItalic: "for a session.",
    subtitle:
      "Message us on Zalo ahead of time to hold your seat — we'll have fresh herbs and a private room ready for you.",
    zaloUrl: "https://zalo.me/0901234567",
    phone: "0901 234 567",
    address: "128 Cao Thang, District 3, HCMC",
    hours: [
      { _key: "h1", day: "Mon – Fri", time: "10:00 – 22:00" },
      { _key: "h2", day: "Sat",          time: "09:00 – 22:30" },
      { _key: "h3", day: "Sun",       time: "09:00 – 21:00" },
    ],
  },
];
