# Business Requirements Document — EOSS Mongolia

> **Version:** 1.0  
> **Date:** 2026-06-24  
> **Author:** Business Analyst (AI)  
> **Status:** Draft

---

## 1. Executive Summary

EOSS Mongolia нь барилгын салбарт үйл ажиллагаа явуулдаг, эрчим хүчний дулааны хэмнэлттэй шилэн фасад, метал цонх, метал хаалга, дулаан систем болон өндөр барилгын шийдлийг үйлдвэрлэдэг компани юм. Уг вэбсайт нь B2B харилцагчид, төрийн болон хувийн хэвшлийн барилгын компаниудад чиглэсэн, мэргэжлийн, итгэл үнэмшилтэй дүр төрхтэй байх ёстой.

---

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|---|---|---|
| 1 | Борлуулалтын хүсэлт/Төсөвийн санал хүлээн авах | Холбоо барих маягтаар ирсэн хүсэлтийн тоо | Сардаа 30+ |
| 2 | Брэнд танигдах | Сайтын зочлогчдын тоо | Сардаа 1000+ |
| 3 | Мэдээлэл хүргэх | Блог/Бүтээгдэхүүний хуудасны уншилт | Дундаж 2+ хуудас/зочин |

---

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|---|---|---|
| Marketing/Борлуулалт | EOSS Mongolia | Контент шинэчлэх, хүсэлт хүлээн авах |
| IT/Админ | EOSS Mongolia | erxes CMS удирдах, сайтын аюулгүй байдал |
| Design Lead | AI Agent | Дизайн, фронтенд хяналт |

---

## 4. Scope

### 4.1 In-scope
- 2 хэл (монгол, англи) дэмжих вэбсайт
- Нүүр хуудас (hero)
- Бидний тухай (about)
- Бүтээгдэхүүн (services/products) — 5 ангилал
- Мэдээлэл (blog)
- Төсөл (projects)
- Холбоо барих (contact) + маягт
- Header/footer navigation
- erxes CMS интеграц

### 4.2 Out-of-scope
- E-commerce cart/checkout (B2B quotation model)
- Хэрэглэгчийн бүртгэл/нэвтрэх
- Онлайн төлбөр
- Real-time chat

---

## 5. Target Audience & User Personas

### Primary Persona
- **Demographics:** Барилгын компани, архитектор, инженер, худалдан авагч
- **Goals:** Чанартай фасад/цонх/хаалгын шийдэл олох, төсөв авах
- **Pain Points:** Дулаан алдагдал, өндөр барилгын стандарт хангах шаардлага
- **Tech Proficiency:** Дундаас дээш

### Secondary Persona
- **Demographics:** Төрийн байгууллага, хөрөнгө оруулагч
- **Goals:** Төслийн туршлага, баталгаат бүтээгдэхүүн сонгох
- **Pain Points:** Итгэл үнэмшилтэй нийлүүлэгч олох
- **Tech Proficiency:** Дундаж

---

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy
```text
Home
├── Бидний тухай
├── Бүтээгдэхүүн
│   ├── Шилэн фасад
│   ├── Метал цонх
│   ├── Метал хаалга
│   ├── Дулаан систем
│   └── Өндөр барилгын шийдэл
├── Мэдээлэл
├── Төсөл
└── Холбоо барих
```

### 6.2 Navigation Structure
- **Header:** Нүүр, Бидний тухай, Бүтээгдэхүүн, Мэдээлэл, Төсөл, Холбоо барих
- **Footer:** Компанийн мэдээлэл, бүтээгдэхүүний жагсаалт, холбоо барих
- **Mobile:** Hamburger menu

---

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Нүүр (Hero)
- **Purpose:** Компанийн гол мэссэж, брэнд дүр төрхийг танилцуулах
- **Content:** Том гарчиг, дэд гарчиг, CTA товч, background slider
- **CTA:** "Төсөв авах" / "Get a quote"
- **Interactions:** Hero slider autoplay, fade transition

#### Бидний тухай (About)
- **Purpose:** Компанийн танилцуулга, давуу тал
- **Content:** Түүх, эрхэм зорилго, үнэ цэнэ, статистик
- **CTA:** "Дэлгэрэнгүй"

#### Бүтээгдэхүүн (Products/Services)
- **Purpose:** Бүтээгдэхүүний ангилал танилцуулах
- **Content:** 5 ангилал, тус бүр зураг + тайлбар
- **CTA:** "Төсөв авах"

#### Мэдээлэл (Blog)
- **Purpose:** Мэдээ, зөвлөгөө, төслийн танилцуулга
- **Content:** Нийтлэлүүдийн жагсаалт
- **CTA:** "Унших"

#### Төсөл (Projects)
- **Purpose:** Хийсэн ажлуудыг харуулах
- **Content:** Оффис, орон сууц, худалдааны төв, зочид буудал, үйлдвэр, олон улсын төсөл
- **CTA:** "Дэлгэрэнгүй"

#### Холбоо барих (Contact)
- **Purpose:** Хүсэлт хүлээн авах
- **Content:** Хаяг, утас, имэйл, мап, маягт
- **CTA:** "Илгээх"

### 7.2 E-commerce Requirements
- B2B quotation model — онлайн худалдан авалтгүй
- Холбоо барих маягтаар хүсэлт хүлээн авна

### 7.3 Content Management Requirements
- erxes CMS-ээр хуудас, блог, цэсний удирдлага

### 7.4 Multi-language Requirements
- Монгол (default), англи
- Бүх CMS контент хоёр хэлд орчуулагдана
- Slug-ууд хоёр хэлд ижил байна

### 7.5 User Account & Authentication
- Шаардлагагүй

### 7.6 Search & Filtering
- Phase 2-д нэмэх боломжтой

---

## 8. Non-functional Requirements

### 8.1 Performance
- Page load time: < 3 seconds
- TTFB: < 200ms
- FCP: < 1.8s
- LCP: < 2.5s
- CLS: < 0.1

### 8.2 SEO
- Meta title/description per page
- Open Graph tags
- Semantic HTML
- Sitemap + robots.txt

### 8.3 Accessibility
- WCAG 2.1 AA
- Keyboard navigation
- Alt text on images

### 8.4 Security
- HTTPS only
- Environment variables for tokens

### 8.5 Browser & Device Support
- Chrome, Safari, Firefox, Edge
- Desktop, tablet, mobile responsive

---

## 9. Design Direction

### 9.1 Visual Style
- Мэргэжлийн, цэвэрхэн, үйлдвэрлэлийн
- Light background, teal primary accent
- Corporate, premium engineering mood

### 9.2 Color Palette
- Primary: #3D8B8B (logo teal)
- Secondary: #E40000 (red accent)
- Background: #FFFFFF
- Surface: #F5F7FA
- Text: #1A1A1A
- Muted: #666666

### 9.3 Typography
- Font: Inter
- Scale: 12px–56px

### 9.4 Imagery & Photography
- Барилга, фасад, цонх, хаалгын мэргэжлийн зураг
- Industrial/minimal mood

---

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|---|---|---|---|
| Hero | Төсөв авах | /contact | Lead capture |
| Products | Төсөв авах | /contact | Lead capture |
| About | Дэлгэрэнгүй | /about | Engagement |
| Blog | Унших | /blog/[slug] | Engagement |
| Footer | Холбоо барих | /contact | Lead capture |

---

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics
- Сардаа 30+ холбоо барих хүсэлт
- Сардаа 1000+ зочин
- 2+ хуудас/зочин

### 11.2 Qualitative Criteria
- Мэргэжлийн, итгэл үнэмшилтэй дүр төрх
- Хоёр хэлээр бүрэн ажиллагаатай
- Mobile responsive

---

## 12. Assumptions & Constraints

### Assumptions
- erxes CMS хаяг, token бэлэн
- Лого болон брэнд өнгө бэлэн
- График контент phase 2-д нэмэгдэнэ

### Constraints
- B2B quotation model (no checkout)
- 2 хэл дэмжилт
- GitHub deploy only (no Vercel token)

---

## 13. References & Appendices

### 13.1 Reference Documents
- Reference site: https://en.eoss-system.com/
- Logo: output/eossmongolia/logo.jpg.jpg
- site.config.json

### 13.2 Competitor Analysis

| Competitor | URL | Strengths | Weaknesses |
|---|---|---|---|
| EOSS System | https://en.eoss-system.com/ | Corporate, product-focused | Could use stronger local Mongolian presence |

### 13.3 Glossary

| Term | Definition |
|---|---|
| Фасад | Барилгын гадна талын өнгөтэй/шилэн ханын систем |
| B2B | Бизнесээс бизнест борлуулалт |
| CMS | Агуулгын удирдлагын систем |

