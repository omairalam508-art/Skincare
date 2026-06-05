# BLANQUIQ Luxury Skincare Website

Premium Next.js 15 homepage for BLANQUIQ, a luxury brightening body mask brand.

## Included

- Next.js 15, React, TypeScript, Tailwind CSS
- Framer Motion, GSAP ScrollTrigger, Lenis smooth scroll
- Responsive homepage with hero, ingredient cards, dark formula showcase, horizontal product story, texture section, benefits, how-to-use timeline, reviews, before/after slider, FAQ, and final CTA
- SEO metadata and local product imagery

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Design Critique And 5 Improvements

1. Hierarchy: the strongest asset is the real green product photography, so the site leads with product-first imagery and keeps the headline short.
2. Interaction clarity: primary actions are repeated at the hero and final CTA, while secondary exploration moves users into the formula section.
3. Accessibility: focus states, semantic buttons, image alt text, accordion state, and reduced-motion support are included.
4. Edge cases: mobile uses stacked sections, fixed controls, constrained card dimensions, and no text over highly busy product-label areas.
5. Product goal alignment: the page balances luxury mood with performance proof by pairing cinematic visuals with exact active percentages and ritual instructions.

Recommended next improvements:

- Add a real product detail page with price, size, quantity, cart drawer, and checkout integration.
- Replace placeholder review names with verified review data and add skin-type filters.
- Add clinical/legal copy review for brightening and retinol/AHA claims before launch.
- Add WebP/AVIF image optimization variants for faster mobile loading.
- Add analytics events for hero CTA, formula exploration, before/after slider use, FAQ opens, and checkout clicks.
