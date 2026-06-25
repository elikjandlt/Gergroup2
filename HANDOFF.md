# Design Handoff — EOSS Mongolia

## 0. Approval Record

- **Homepage options shown:** Option A (faithful light-industrial), Option B (dark hero modern), Option C (editorial bold)
- **Selected option:** Option A — Light Industrial, Mongolian language
- **Reference site:** https://en.eoss-system.com/ (used for `improve-site` strategy)
- **Preview artifact file paths:**
  - `output/eossmongolia/designs/homepage-option-a.png`
  - `output/eossmongolia/designs/homepage-option-b.png`
  - `output/eossmongolia/designs/homepage-option-c.png`
- **Final design artifacts:**
  - `output/eossmongolia/designs/design.pen`
  - `output/eossmongolia/designs/design.png`
  - `output/eossmongolia/design-tokens.json`
  - `output/eossmongolia/ui-libraries.json`
- **Pencil project paths used:**
  - Previews: `output/eossmongolia/designs/homepage-directions.pen`
  - Approved final: `output/eossmongolia/designs/design.pen`
- **Source audit:** `output/eossmongolia/source-audit.json`
- **Locked constraints:**
  - Light theme (#FFFFFF background)
  - Primary accent: teal (#3D8B8B) from logo
  - Secondary accent: red (#E40000)
  - Industrial/minimal visual direction
  - Hero-first homepage with full-screen slider
  - Mongolian default, English secondary
  - B2B quotation model (no e-commerce checkout)

---

## 1. Design Summary

EOSS Mongolia сайт нь `https://en.eoss-system.com/` сайтын бүтцийг сайжруулсан, цайвар фонтой, үйлдвэрлэлийн мэргэжлийн харагдах байдалтай. Нүүр хуудас нь бүрэн дэлгэцийн hero slider-ээс бүрдэнэ. Бүтээгдэхүүнүүд нь зурагтай кард хэлбэрээр харагдана.

### Visual Direction
- **Direction:** Light Industrial
- **Mood:** Corporate, premium engineering, clean
- **Background:** White (#FFFFFF)
- **Surfaces:** Light gray (#F5F7FA, #F0F4F9)
- **Primary accent:** Teal (#3D8B8B)
- **Secondary accent:** Red (#E40000)
- **Typography:** Inter

---

## 2. Motion & Animation

- **Motion level:** 3 (expressive)
- **Libraries:** framer-motion, Lenis, react-intersection-observer
- **Hero slider:** Autoplay 6s, fade transition 1.2s, image zoom-out from 1.05x to 1.0x
- **Hero text:** Staggered fade-in-up (0.7s, 0.8s, 1.0s delays)
- **Header:** Transparent over hero, white background on scroll
- **Stats cards:** Fade-in-up on scroll
- **Product cards:** Hover lift + shadow
- **CTA button:** Subtle pulse on idle
- **Page transitions:** Fade 0.3s
- **Scroll:** Smooth scroll via Lenis
- **Reduced motion:** Respect `prefers-reduced-motion`

---

## 3. Typography

- **Display/Body:** Inter
- **Hero headline:** 56px, bold
- **Hero subheadline:** 20px, light weight
- **Page titles:** 42px bold
- **Section titles:** 36px bold
- **Body:** 16px regular, #666666

---

## 4. Color System

| Token | Value | Usage |
|-------|-------|-------|
| `background` | #FFFFFF | Page background |
| `bg-light` | #F5F7FA | Section alternates, form bg |
| `dropdown-bg` | #F0F4F9 | Navigation dropdowns |
| `primary` | #3D8B8B | CTAs, hover underlines, accents |
| `secondary` | #E40000 | Secondary CTA, badges |
| `text` | #1A1A1A | Primary text |
| `text-muted` | #666666 | Secondary text |
| `border` | #E5E8ED | Dividers |
| `bg-dark` | #353F4C | Footer background |

---

## 5. Layout Principles

- Max content width: 1280px
- Section padding: 80px vertical
- Header: fixed, white background on scroll
- Hero: full viewport height (min 700px), centered content
- Footer: dark slate background, multi-column

---

## 6. Component Inventory

### Global
- **Header:** logo left, nav center, language right
- **Mobile Nav:** hamburger sheet
- **Footer:** company info, product links, company links, support links, copyright

### Homepage
- **HeroSlider:** full-screen background image slider, headline, subheadline, CTA, indicators
- **About Section:** two-column text + image
- **Stats Bar:** icon cards with numbers
- **ProductGrid:** image cards with title and description
- **CTA Section:** two-column text + contact info on teal background

### Standalone Pages
- **PageHeader:** centered title + breadcrumb on light gray bg
- **ProductList:** alternating image + text layout
- **ProjectGrid:** 3-column project cards
- **BlogGrid:** 3-column blog cards with pagination
- **ContactForm:** fields + submit, contact info icons

---

## 7. Section-by-Section Layout

### Homepage
1. Header
2. Hero Slider
3. About Section
4. Stats Bar
5. Products Grid
6. CTA Section
7. Footer

### Standalone Pages
- `/about` — page header + intro + values + CTA + footer
- `/products` — page header + intro + product list + CTA + footer
- `/projects` — page header + intro + project grid + CTA + footer
- `/blog` — page header + blog grid + pagination + footer
- `/contact` — page header + contact info + form + footer

---

## 8. Interaction Rules

- Header background transitions to white on scroll
- Nav items have teal color on hover
- CTA buttons: teal background, white text
- Secondary buttons: red background
- Product cards lift on hover
- Footer links: muted gray, lighter on hover

---

## 9. Responsive Behavior

- Desktop (1280px+): full nav, multi-column grids
- Tablet (768px): simplified nav, 2-column grids
- Mobile (375px): hamburger menu, single column, stacked hero text

---

## 10. Accessibility

- WCAG 2.1 AA target
- Teal (#3D8B8B) on white meets contrast requirements
- Keyboard navigation
- ARIA labels on nav, search, language switch
- Alt text on images
- `prefers-reduced-motion` support

---

## 11. Content Tone

- **Mongolian:** Мэргэжлийн, товч, итгэл үнэмшилтэй
- **English:** Professional, concise, engineering-focused

---

## 12. Frontend Build Map

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Language: TypeScript
- CMS: erxes via Apollo Client
- Routes:
  - `/[locale]/` — homepage
  - `/[locale]/about`
  - `/[locale]/products`
  - `/[locale]/projects`
  - `/[locale]/blog`
  - `/[locale]/blog/[slug]`
  - `/[locale]/contact`

---

## 13. erxes CMS Field Map

### Pages
- `home` — homepage hero content
- `about` — company introduction
- `products` — product series listing
- `projects` — projects listing
- `blog` — blog listing intro
- `contact` — contact page

### Menu
- Header: Нүүр, Бүтээгдэхүүн, Бидний тухай, Төсөл, Мэдээлэл, Холбоо барих
- Footer: Products, Company, Support columns

### Translations
- Primary: Mongolian
- Secondary: English
- Slugs identical across locales

---

## 14. Setup Commands

```bash
pnpm add framer-motion lenis lucide-react clsx tailwind-merge next-themes react-intersection-observer
pnpm dlx shadcn add button card input textarea separator sheet
```

---

## 15. Exact Items That Must Not Change

- Primary color: #3D8B8B
- Background color: #FFFFFF
- Inter font family
- Hero-first homepage structure
- Navigation labels and order
- Two-language support (MN/EN)
- B2B quotation model (no e-commerce checkout)
- Reference site inspired minimalism
