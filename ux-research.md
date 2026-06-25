# UX Research Document — EOSS Mongolia

> **Version:** 1.0  
> **Date:** 2026-06-24  
> **Author:** UX Researcher (AI)  
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives
- Хэрэглэгчдэд EOSS Mongolia-г найдвартай, мэргэжлийн нийлүүлэгч хэмээн харуулах
- Бүтээгдэхүүн, төслийн мэдээллийг олоход хялбар болгох
- B2B харилцагчдаас холбоо барих хүсэлт хүлээн авах

### 1.2 Methodology
- Document analysis
- Stakeholder interview
- Competitive analysis

### 1.3 Scope
- Бизнес сайтны бүх хуудасны UX
- Desktop + mobile responsive
- Монгол, англи хэл

### 1.4 Key Findings Summary
1. **Найдвартай байдал чухал:** Хэрэглэгчид 5 секундын дотор компани найдвартай эсэхийг үнэлнэ.
2. **Удаан судлах хэв маяг:** Хэрэглэгчид дэлгэрэнгүй мэдээлэл хайдаг тул структур сайтай байх ёстой.
3. **B2B контекст:** Хэрэглэгчид төсөв, технологи, туршлагыг харьцуулахыг хүснэ.

---

## 2. User Personas

### Persona 1: Барилгын инженер Бат

#### Demographics & Context
- **Age Range:** 30–50
- **Location:** Улаанбаатар
- **Occupation:** Барилгын компаны инженер/худалдан авагч
- **Tech Proficiency:** Дундаас дээш
- **Primary Device:** Desktop (оффис дээр), утас (төслийн талбай дээр)

#### Behavioral Patterns
- **Usage Frequency:** Төсөл эхлэх үед, нийлүүлэгч хайхдаа
- **Task Priorities:** Бүтээгдэхүүний чанар, үзүүлэлт, төсөв
- **Decision Factors:** Чанар, туршлага, баталгаа
- **Pain Points:** Муу мэдээлэл бүтэц, хайлт хийхэд төвөгтэй
- **Motivations:** Төслийн шаардлага хангах, зардлаа хэмнэх

#### Goals & Needs
- **Primary Goals:** Тохиромжтой фасад/цонхны шийдэл олох
- **Secondary Goals:** Компанийн туршлага харах
- **Success Criteria:** Хурдан холбоо барих, төсөв авах

#### Context of Use
- **Environment:** Оффис, талбай
- **Time Constraints:** Дунд
- **Distractions:** И-мэйл, дуудлага

#### Quote
> "Би эхлээд компани найдвартай эсэхийг нь хардаг. Дараа нь бүтээгдэхүүний дэлгэрэнгүй мэдээлэл авдаг."

### Persona 2: Архитектор Сүх

#### Demographics & Context
- **Age Range:** 28–45
- **Location:** Улаанбаатар
- **Occupation:** Архитектор
- **Tech Proficiency:** Дээш
- **Primary Device:** Desktop

#### Behavioral Patterns
- **Usage Frequency:** Төсөл дизайн хийх үед
- **Task Priorities:** Зураг төсөл, техник үзүүлэлт, материал
- **Decision Factors:** Дизайн, стандарт, инновац
- **Pain Points:** Муу зураг, бага мэдээлэл
- **Motivations:** Сайн харагдах, стандарт хангах

#### Goals & Needs
- **Primary Goals:** Зураг төсөлд тохирох шийдэл олох
- **Secondary Goals:** Шинэ технологи мэдэх
- **Success Criteria:** Дэлгэрэнгүй каталог, техник файл

#### Context of Use
- **Environment:** Оффис
- **Time Constraints:** Бага
- **Distractions:** Төсөлийн хурал

#### Quote
> "Зураг, техник үзүүлэлт сайтай байвал илүү итгэл үнэмшилтэй."

---

## 3. Customer Journey Mapping

### Journey Overview
**Stages:** Discovery → Consideration → Conversion → Retention

### Stage 1: Discovery
- **Touchpoints:** Google, reference, social media
- **User Actions:** Хайлт хийх, нүүр хуудас руу орно
- **Emotions:** Сонирхолтой, эргэлзээтэй
- **Pain Points:** Найдвартай эсэхийг хурдан олж чадахгүй
- **Opportunities:** Hero дээр туршлага, гэрчилгээ, CTA тавих

### Stage 2: Consideration
- **Touchpoints:** Бүтээгдэхүүн, төсөл, бидний тухай
- **User Actions:** Хуудас хооронд шилжих, мэдээлэл харна
- **Emotions:** Судалж буй, үнэлж буй
- **Pain Points:** Мэдээлэл олоход төвөгтэй
- **Opportunities:** Тодорхой ангилал, сайн навигац

### Stage 3: Conversion
- **Touchpoints:** Холбоо барих хуудас
- **User Actions:** Маягт бөглөх, дуудлага хийх
- **Emotions:** Итгэлтэй, шийдвэрлэх
- **Pain Points:** Маягт төвөгтэй, хариу удаан
- **Opportunities:** Энгийн маягт, баталгаа харуулах

### Stage 4: Retention
- **Touchpoints:** Email, дахин зочлох
- **User Actions:** Мэдээлэл хүлээн авах, холбоо барих
- **Emotions:** Сэтгэл ханамжтай
- **Pain Points:** Сайн дэмжлэггүй
- **Opportunities:** Хурдан хариу, төслийн мэдээлэл

---

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy
```text
Нүүр
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

### 4.2 Navigation Design
- **Primary Navigation:** Нүүр, Бидний тухай, Бүтээгдэхүүн, Мэдээлэл, Төсөл, Холбоо барих
- **Secondary Navigation:** Хэл солих (MN/EN), хайлт
- **Footer Navigation:** Компани, бүтээгдэхүүн, холбоо барих, нууцлалын бодлого
- **Mobile Navigation:** Hamburger menu, accordion submenu

### 4.3 Content Organization Principles
- Тодорхой, ойлгомжтой ангилал
- Breadcrumb optional
- Бүтээгдэхүүнийг хурдан хүргэх

### 4.4 Search & Filter Strategy
- Phase 2: бүтээгдэхүүн, мэдээлэл хайлт
- Filter: ангилал, жил, төслийн төрөл

---

## 5. Wireframe Guidance

### 5.1 Global Layout Structure
- **Header:** Logo зүүн, nav голд, хэл + хайлт баруун
- **Footer:** Dark background, 3–4 багана
- **Content Width:** 1280px max
- **Grid System:** 12-column grid

### 5.2 Section Layouts

#### Hero
- **Layout Type:** Full-width, centered text
- **Content Priority:** Company tagline, CTA
- **Component Types:** Background image/slider, headline, subheadline, button
- **White Space:** Их
- **Responsive Behavior:** Том текст жижгэрнэ

#### About
- **Layout Type:** Two-column text + image
- **Content Priority:** Company intro, stats
- **Component Types:** Text block, image, stat cards
- **White Space:** Дунд
- **Responsive Behavior:** Single column on mobile

#### Products
- **Layout Type:** Grid cards
- **Content Priority:** Product categories
- **Component Types:** Product cards
- **White Space:** Дунд
- **Responsive Behavior:** 3 cols → 2 → 1

#### Blog
- **Layout Type:** Card grid
- **Content Priority:** Latest posts
- **Component Types:** Post cards
- **White Space:** Дунд
- **Responsive Behavior:** 3 cols → 1

#### Projects
- **Layout Type:** Gallery/grid
- **Content Priority:** Project showcase
- **Component Types:** Project cards
- **White Space:** Дунд
- **Responsive Behavior:** 2 cols → 1

#### Contact
- **Layout Type:** Two-column form + info
- **Content Priority:** Form, contact info
- **Component Types:** Form inputs, map placeholder
- **White Space:** Дунд
- **Responsive Behavior:** Stacked

### 5.3 Content Priority
1. **Homepage:** Hero → About teaser → Products → Projects → Blog → CTA → Footer

### 5.4 Component Patterns
- **Cards:** Тодорхой толгой, товч тайлбар, CTA
- **Lists:** Зөвлөгөө, үзүүлэлт
- **Forms:** Энгийн, тодорхой label
- **Media:** Өндөр чанартай зураг

---

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
|---|---|---|
| Keyboard Navigation | All interactive elements accessible via keyboard | High |
| Screen Reader Support | ARIA labels, landmarks, skip links | High |
| Color Contrast | 4.5:1 for normal text, 3:1 for large text | High |
| Focus Indicators | Visible focus states | High |
| Alt Text | Descriptive alt text for all images | High |
| Form Labels | All inputs have labels | High |
| Text Resizing | Support 200% zoom | Medium |
| Motion Sensitivity | Respect `prefers-reduced-motion` | Medium |

### 6.2 Multi-language Accessibility
- Text expansion allowance
- Cyrillic rendering support

### 6.3 Mobile Accessibility
- Touch targets 44x44px
- Zoom allowed
- Gesture alternatives

---

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|---|---|---|---|
| Mobile | 375px | Smartphones | Single column, stacked |
| Tablet | 768px | Tablets | Two columns |
| Desktop | 1280px+ | Desktops | Full multi-column |

### 7.2 Mobile-first Approach
- Mobile layout эхлээд зохион байгуулах
- Tablet/desktop дээр өргөжүүлэх

### 7.3 Content Adaptation
- Hero text size reduce
- Grid columns reduce
- Navigation → hamburger

### 7.4 Performance Budget
- Mobile: < 1MB initial load, < 3s
- Desktop: < 2MB initial load, < 2s

---

## 8. Interaction & Motion Design

### 8.1 Animation Principles
- Бага, зөв газар ашиглах
- Анимаци агуулгыг туслах, саад болохгүй
- `prefers-reduced-motion` хүндэтгэх

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
|---|---|---|---|
| Buttons | Hover | Background darken | 200ms |
| Cards | Hover | Subtle lift | 250ms |
| Links | Hover | Underline + color | 150ms |
| Inputs | Focus | Border color | 200ms |
| Hero | Load | Fade in + slide up | 600ms |

### 8.3 Page Transitions
- Fade in on page load
- No heavy transitions

### 8.4 Scroll Behaviors
- Smooth scroll
- Header background on scroll

---

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice
- Албан ёсны, мэргэжлийн, итгэл үнэмшилтэй
- Товч, тодорхой

### 9.2 Terminology

| Term | Usage | Avoid |
|---|---|---|
| Шилэн фасад | Glazing facade system | "Шилэн хана" (ambiguous) |
| Дулаан систем | Thermal insulation system | "Дулаалга" alone |
| Төсөл | Completed/completed project | "Ажил" (too vague) |

### 9.3 CTA Copy Guidelines
- Үйлдэл тодорхой
- Товч, ойлгомжтой
- Жишээ: "Төсөв авах", "Холбоо барих"

### 9.4 Multi-language UX Writing
- Монгол default
- Англи орчуулга ижил бүтэцтэй

### 9.5 Error Messages
- Тодорхой, тусламжтай
- Жишээ: "Имэйл хаягаа шалгана уу"

---

## 10. Usability Testing Plan

### 10.1 Test Scenarios
- Нүүр хуудаснаас холбоо барих маягт хүрэх
- Бүтээгдэхүүний ангилал хайх
- Хэл солих

### 10.2 Testing Methods
- Think-aloud
- Task completion rate
- Heatmap

### 10.3 Success Metrics
- Task completion > 80%
- Time on task < 2 min
- Error rate < 10%

---

## 11. Competitive UX Analysis

| Competitor | Strengths | Weaknesses | Opportunities |
|---|---|---|---|
| EOSS System | Clean, product-focused | Local MN presence weak | Mongolian market-specific content |
| Local competitors | Local trust | Poor design | Professional modern UX |

---

## 12. Success Metrics & KPIs

### 12.1 UX Metrics
- Task completion rate
- Time on site
- Pages per session

### 12.2 Business Metrics
- Lead form submissions
- Contact requests

### 12.3 Technical Metrics
- LCP, FCP, CLS
- Mobile performance

---

## 13. Design Agent Collaboration

Specialized design assistance may help with:
- Hero slider animation
- Product card micro-interactions
- Color refinement

---

## 14. Assumptions & Constraints

### Assumptions
- Reference site дээр үндэслэн сайжруулна
- Лого/брэнд өнгө бэлэн
- CMS контент орчуулагдана

### Constraints
- No e-commerce checkout
- GitHub deploy only
- 2 languages

---

## 15. Next Steps

1. UX research батлах
2. Pencil.dev дээр homepage direction үүсгэх
3. Direction сонгох
4. Full design package хөгжүүлэх
5. Frontend build хийх

