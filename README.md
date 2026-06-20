# 🏛️ Rangrezza — Restaurant, Banquet & Nightlife

A premium multi-venue website for **Rangrezza** — a fine-dining restaurant, grand banquet hall, and Neurons restrobar, all in one immersive digital experience.

![Next.js](https://img.shields.io/badge/Next.js-16.2-000?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock)

---

## 🔗 Project Links

| | |
|---|---|
| **GitHub** | [github.com/Roony0708/Rangrezza_restro](https://github.com/Roony0708/Rangrezza_restro) |
| **Live Demo** | [rangrezza.vercel.app](https://rangrezza.vercel.app) |

---

## ✨ Features

| Section | Highlights |
|---------|-----------|
| **Home** | Full-screen video hero, floating particles, GSAP animations, featured dishes, event highlights |
| **Restaurant** | Chef's recommendation with Dal-Makhani visual, digital menu, food gallery, signature dishes, story section |
| **Banquet** | Hero with animated zoom, event types grid, capacity guide, booking process, inquiry CTA |
| **Restrobar / Neurons** | Nightlife gallery with 12 images, signature mocktails showcase, featured drinks carousel, music vibes |
| **Gallery** | Janta Fridge & Restaurant Vibes photo collections with lightbox, floating particles hero |
| **Contact** | Interactive expandable map (LocationMap), contact form with floating labels, business hours, social links |

### 🎬 Animations
- **GSAP** — Hero text reveals with stagger, scroll-triggered timelines
- **Framer Motion** — Layout animations, hover tilts, spring physics, parallax, scroll-triggered reveals
- **Custom particles** — Floating gold dots across hero sections
- **LocationMap** — 3D tilt on hover, click-to-expand with animated road networks, gold pin

---

## 🚀 Tech Stack

- **Framework** — Next.js 16 (App Router, Turbopack)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 with custom theme (charcoal, ivory, gold palette)
- **Animation** — Framer Motion 12 + GSAP 3
- **UI** — Custom glass-card components, lightbox, scroll-reveal, section-heading
- **Data** — Static menu (mocktails, shakes, soups, starters, mains, biryani, desserts, etc.)

---

## 📦 Project Structure

```
src/
├── app/              # Pages: /, /restaurant, /banquet, /restrobar, /gallery, /contact
│   ├── banquet/
│   ├── contact/
│   ├── gallery/
│   ├── restaurant/
│   └── restrobar/
├── components/
│   ├── banquet/      # BanquetHero, EventGallery, CapacitySection, etc.
│   ├── contact/      # ContactHero, ContactForm, MapSection, BusinessHours
│   ├── gallery/      # GalleryGrid
│   ├── home/         # HeroSection, FeaturedDishes, AboutPreview, etc.
│   ├── restaurant/   # RestaurantHero, ChefRecommendation, FoodGallery, etc.
│   ├── restrobar/    # RestrobarHero, NightlifeGallery, CocktailsShowcase, etc.
│   └── ui/           # Navbar, Footer, GlassCard, Lightbox, ScrollReveal, etc.
├── data/             # Static data: menu.ts, siteConfig.ts, gallery.ts, testimonials.ts
├── hooks/            # Custom hooks (useScrollAnimation)
└── lib/              # Utilities (formatPrice)
```

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🌐 Deployment

Deploy on [Vercel](https://vercel.com/new):

1. Push this repo to GitHub
2. Import into Vercel (auto-detects Next.js)
3. No config needed — `npm run build` already passes

---

## 🎨 Color Palette

| Token | Hex |
|-------|-----|
| `dark` | `#0D0D1A` |
| `charcoal` | `#1A1A2E` |
| `ivory` | `#FFF8F0` |
| `gold` | `#C9A84C` |
| `gold-light` | `#E8D48B` |
| `burgundy` | `#722F37` |

---

## 📄 License

All rights reserved — Rangrezza
