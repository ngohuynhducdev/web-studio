import type { PageSection } from "@/types";

export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "bannerCarouselSection", _key: "default-carousel",
    enabled: false,
    slides: [
      {
        _key: "s1",
        heading: "Midweek Nights, 20% Off",
        subtext: "Evening treatments Tuesday through Thursday. Same-day booking available.",
        ctaLabel: "Reserve Now",
        ctaUrl: "#booking",
        bgColor: "#2c2823",
      },
      {
        _key: "s2",
        heading: "10-Session Treatment Card",
        subtext: "Includes 2 complimentary herbal steam sessions — shareable with family.",
        ctaLabel: "Message on Zalo",
        ctaUrl: "#booking",
        bgColor: "#33302a",
      },
    ],
  },
  {
    _type: "heroSection", _key: "default-hero",
    eyebrow: "MIST SPRING SPA · SPA & WELLNESS",
    headingMain: "Relax,\nrestore,\nbalance.",
    headingItalic: "",
    subtitle: "Mist Spring Spa is a quiet retreat in the heart of the city, where time-honored rituals meet warm, tranquil spaces. An hour here is all it takes for your body to truly rest.",
    ctaPrimary: "Book Now",
    ctaSecondary: "View Services",
    slides: [
      { _key: "hs1", imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2000&q=85&fit=crop&auto=format", eyebrow: "MIST SPRING SPA · SPA & WELLNESS", headingMain: "Relax,\nrestore,\nbalance.", headingItalic: "", subtitle: "Mist Spring Spa is a quiet retreat in the heart of the city, where time-honored rituals meet warm, tranquil spaces. An hour here is all it takes for your body to truly rest." },
      { _key: "hs2", imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=2000&q=85&fit=crop&auto=format", eyebrow: "A Private Space", headingMain: "Stillness,\njust for you.", headingItalic: "", subtitle: "Private treatment rooms, warm lighting, and a gentle herbal scent. An hour to set aside all the noise outside." },
      { _key: "hs3", imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=2000&q=85&fit=crop&auto=format", eyebrow: "Intensive Care", headingMain: "Every treatment,\na journey.", headingItalic: "", subtitle: "Skilled therapists listen to your body and tailor every movement to fit you best." },
    ],
  },
  {
    _type: "servicesSection", _key: "default-services",
    eyebrow: "Our Services",
    headingMain: "Signature",
    headingItalic: "treatments.",
    subtitle: "From time-honored rituals to modern care, every treatment is built around your breath and your relaxation.",
    services: [
      {
        _key: "sv1", name: "Full-Body Therapeutic Massage", duration: "60 min", price: "480,000 VND",
        desc: "A deeply relaxing massage with warm oils that releases tension in the neck, shoulders, and back — ideal for anyone who sits at a desk all day.",
        imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&q=80&fit=crop&auto=format",
        includes: ["Herbal foot soak · 5 min", "Back & shoulder massage · 30 min", "Arm & leg massage · 20 min", "Relaxing ginger honey tea"],
      },
      {
        _key: "sv2", name: "Intensive Facial Treatment", duration: "75 min", price: "520,000 VND",
        desc: "Cleansing, exfoliation, and a nourishing mask made from organic herbs — skin looks noticeably brighter and more even-toned.",
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&q=80&fit=crop&auto=format",
        includes: ["Cleansing & makeup removal · 15 min", "Exfoliation + steam · 15 min", "Lifting facial massage · 20 min", "Nourishing mask · 20 min", "Serum & sunscreen application"],
      },
      {
        _key: "sv6", name: "Relaxing Couples Treatment", duration: "120 min", price: "1,250,000 VND",
        desc: "A private room for two, two treatment beds, a tea and pastry tray, and quiet space for the whole session. Booking two days ahead is recommended.",
        imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=200&q=80&fit=crop&auto=format",
        includes: ["Shared herbal steam · 20 min", "Full-body massage for each guest · 60 min", "Relaxing mask · 20 min", "Tea and pastry tray & rest time"],
      },
    ],
  },
  {
    _type: "menuSection", _key: "default-menu",
    eyebrow: "Price List",
    headingMain: "Menu",
    headingItalic: "of services.",
    subtitle: "Prices include towels, herbal tea, and a private locker. This list is for reference — message us on Zalo for help choosing the right package.",
    note: "Treatments can be adjusted to your needs. Regular guests receive special offers.",
    categories: [
      {
        _key: "sc1", title: "Massage & Therapy",
        items: [
          { _key: "pi1", name: "Full-Body Therapeutic Massage", duration: "60 min", price: "480,000 VND" },
          { _key: "pi2", name: "Hot Stone Massage", duration: "75 min", price: "560,000 VND" },
          { _key: "pi3", name: "Neck & Shoulder Massage", duration: "45 min", price: "320,000 VND" },
          { _key: "pi4", name: "Foot Massage & Acupressure", duration: "45 min", price: "300,000 VND" },
          { _key: "pi5", name: "Aromatherapy", duration: "60 min", price: "450,000 VND" },
        ],
      },
      {
        _key: "sc2", title: "Facial Care",
        items: [
          { _key: "pi6", name: "Basic Facial Care", duration: "60 min", price: "390,000 VND" },
          { _key: "pi7", name: "Intensive Facial Treatment", duration: "75 min", price: "520,000 VND" },
          { _key: "pi8", name: "Acne Treatment & Recovery", duration: "90 min", price: "650,000 VND" },
        ],
      },
      {
        _key: "sc3", title: "Steam & Treatment Packages",
        items: [
          { _key: "pi9", name: "Mineral Soak & Herbal Steam", duration: "90 min", price: "720,000 VND" },
          { _key: "pi10", name: "Therapeutic Hair Wash", duration: "45 min", price: "260,000 VND" },
          { _key: "pi11", name: "Relaxing Couples Treatment", duration: "120 min", price: "1,250,000 VND" },
        ],
      },
    ],
  },
  {
    _type: "gallerySection", _key: "default-gallery",
    eyebrow: "Our Space",
    headingMain: "Visit",
    headingItalic: "Mist Spring Spa.",
    note: "Real spaces at the spa — warm, private, and spotless.",
    items: [
      { _key: "g1", label: "Reception Area", wide: true,  imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=85&fit=crop&auto=format" },
      { _key: "g2", label: "Treatment Room", wide: false, imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85&fit=crop&auto=format" },
      { _key: "g3", label: "Oils & Herbs", wide: false, imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=85&fit=crop&auto=format" },
      { _key: "g4", label: "Relaxing Tea Corner", wide: true,  imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=85&fit=crop&auto=format" },
      { _key: "g5", label: "Herbal Steam Room", wide: false, imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=85&fit=crop&auto=format" },
      { _key: "g6", label: "Facial Care", wide: false, imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "reviewsSection", _key: "default-reviews",
    eyebrow: "What Guests Say",
    headingMain: "Sessions",
    headingItalic: "worth remembering.",
    reviews: [
      { _key: "r1", text: "I work night shifts, so my back and neck are always stiff. A Sunday massage has been my routine for 4 months now — I sleep so much better, no medication needed.", name: "Mr. Vinh",  location: "Binh Thanh, HCMC", service: "Therapeutic Massage" },
      { _key: "r2", text: "Booked the couples treatment for our 5th anniversary. Quiet private room, unlimited tea, no one bothering us. My wife said it was the best gift I've ever given her.", name: "Mr. Dang", location: "District 2, HCMC", service: "Couples Treatment" },
      { _key: "r3", text: "The herbal steam room is clean and fragrant, not overpowering like other places. Staff remember regulars by name — even the water temperature I like. Small details, but they're what keep me coming back.", name: "Ms. Nhung", location: "Thu Duc, HCMC", service: "Mineral Soak & Steam" },
    ],
  },
  {
    _type: "bookingSection", _key: "default-booking",
    eyebrow: "Reserve Your Spot",
    headingMain: "Give yourself",
    headingItalic: "an hour of stillness.",
    subtitle: "Message us on Zalo to hold your spot — for evenings and weekends, booking a day ahead is recommended. No deposit required.",
    zaloUrl: "https://zalo.me/0902000000",
    phone: "0902 000 000",
    address: "215B Nguyen Van Huong, Thao Dien, Thu Duc, HCMC",
    hours: [
      { _key: "h1", day: "Mon – Fri", time: "10:00 – 23:00" },
      { _key: "h2", day: "Sat – Sun", time: "09:00 – 23:30" },
    ],
  },
];
