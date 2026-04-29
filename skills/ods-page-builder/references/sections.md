# Section archetypes (ODS marketing pages)

Layout archetypes for each section type, scoped to the four page types
this skill covers: landing, feature, pricing, and about pages.

## How to use this file

1. Identify the page type (landing/feature/pricing/about). Use the default
   section orderings below as the starting plan; adapt based on the user's
   content.
2. For each section, read its archetype list and pick **three that differ
   on layout DNA** — not three cosmetic shuffles.
3. Render each variant using the chosen aesthetic's layout/type/spacing
   rhythm + ODS color tokens.

The archetypes are descriptions of layout DNA, not finished templates.
Interpret each through the chosen aesthetic.

---

## Default section ordering by page type

### Landing page (top of funnel)

```
Hero → Logo cloud → Features (3-up or bento) → How it works → Stats →
Testimonials → Pricing teaser → FAQ → CTA → Footer
```

Skip a section ONLY if the user explicitly says no (e.g., "no FAQ", "skip
testimonials"). Otherwise propose the full plan and let them remove.

### Feature page (mid-funnel — deep dive on one feature)

```
Feature hero → Problem this solves → How it works (detailed) →
What you can do with it → Sample use cases → Related features → CTA → Footer
```

Note: a feature page does NOT need a logo cloud (already covered on
landing) or pricing (already on pricing page) — keep it focused.

### Pricing page

```
Pricing hero (short) → Plan cards (3-tier) → Feature comparison table →
FAQ (billing/plans) → Money-back/trust section → CTA → Footer
```

Pricing pages don't need a "what is the product" section — visitors
arrived already shopping. Skip product-explanation sections.

### About page

```
About hero (mission) → Origin story → Team or leadership → Values →
Stats/scale → Press mentions → CTA (careers or contact) → Footer
```

About pages skew narrative — the variant flow matters less for sections
like origin story (which is just well-formatted prose). For those, offer
fewer variants (two layout choices: editorial column vs. timeline format).

---

## Hero

The first impression. Choose archetypes that differ on focal element and composition. **Order Variant A as the most daring, Variant C as the safest** (per `SKILL.md` Step 5b).

### Daring options (Variant A candidates)

- **Solid brand banner** — full-bleed `var(--brand)` background (the product brand color — a deep indigo, a warm red, a forest green, depending on which product), white headline + ODS blue CTA. The most product-distinctive hero option. Banner takes the entire hero section.
- **Split asymmetric (60/40 with offset)** — copy ~55% on left, product UI/screenshot ~45% on right, vertical alignment offset (text top-aligned, visual pulled slightly below center for tension). The asymmetry creates focus.
- **Inverted dark hero** — full-bleed dark surface (`var(--surface-dark)` from the product theme), oversized white headline (96px+), brand accent for highlights. Confident and editorial.
- **Hero with sample artifact** — copy on one side, the actual product output on the other (a sample dashboard view with real data, a sample report, a sample message thread, a sample timeline — whatever artifact the product produces). The hero IS the product.

### Editorial / text-led options (Variant B candidates)

- **Editorial stacked** — eyebrow label, then very large display headline (80px+) taking 2-3 lines, supporting paragraph, CTA — all left-aligned in a narrow column, no visual aid. The headline is the hero.
- **Split with form** — copy on left, signup/CTA form on right (good for tools, newsletters, waitlists). The form makes interaction the focal point.

### Safe options (Variant C — the "AI default")

- **Centered + product below** — headline + subhead + CTA centered, generous whitespace, large product screenshot below. The pattern users have seen on every other SaaS site. **Use sparingly** — only when the user explicitly wants conventional, or when the brief requires maximum approachability.
- **Side-by-side comparison** — "Before/After" or "Without us / With us" two-column hero. Conservative but informative.

### When the product has a visual-language skill

If a product visual-language skill is loaded (e.g., for a product where the brand has established hero conventions like specific banner patterns), prefer the **Solid brand banner** or **Inverted dark hero** for at least one of the three variants — these are the most product-distinctive options. Centered + product below is rarely the right answer for a brand-distinctive product page; it should be Variant C if it appears at all.

For products without a visual-language skill, all archetypes above are available; pick three that best fit the brief.

## Logo cloud (social proof bar)

- **Centered band** — small "Trusted by" label centered, logos in a single horizontal row, evenly spaced
- **Marquee** — logos scrolling horizontally, infinite loop *(skip when the active product visual-language disallows motion / entrance animations)*
- **Grid with quote** — 6–9 logos in a grid plus a customer quote pulled from one of them
- **Logos with metrics** — 3–4 logos paired with a metric per logo

## Features

The core content section. Choose 3 archetypes that vary on composition, density, and direction. **Order Variant A as the most daring, Variant C as the safest** (per `SKILL.md` Step 5b).

### Daring options (Variant A candidates)

- **Bento grid (one hero feature + supporting)** — irregular grid where one card is 60% of the grid width and contains a feature with a visual mockup; surrounding smaller cards cover supporting features. Creates visual hierarchy automatically — the biggest card is the most important feature. Inspired by Apple's bento layouts as adopted by Linear, Vercel, Notion.
- **Alternating left/right with offset images** — vertical stack of feature blocks, each alternating image left/right with copy on the other side. Image positions are slightly offset (not flush — pulled toward the gutter or beyond the grid line) for editorial feel.
- **Annotated single feature** — one feature gets the full section: a real product screenshot with numbered annotation pins (1, 2, 3) calling out specific UI parts. Other features link to dedicated pages. The single-screenshot focus is striking when the feature is genuinely the headline.

### Editorial / text-led options (Variant B candidates)

- **List with media** — left-side vertical list of features (titles + 1-line descriptions), right-side a single large media that swaps based on which list item is hovered or active. Editorial because the typography of the list IS the design.
- **Tabbed deep-dive** — section title + horizontal tabs, picking a tab swaps a large content panel (visual + headline + bullets). Each tab gets editorial treatment in its panel. *(When the active product visual-language disallows motion, ensure tab-switch is instant — no animated transitions.)*

### Safe options (Variant C — the "AI default")

- **3-up grid** — three columns, each with icon + heading + 1–2 sentence description. The most-seen pattern in SaaS marketing. Use only when the features genuinely have peer importance and the brief calls for maximum scanability.

### Cut from the catalog (overlap with stronger options)

- *Numbered steps as feature cards* — overlaps too much with 3-up grid. Use the "How it works" section for actual sequential steps; don't disguise features as steps.
- *Icon wall (4×N small features)* — overlaps with 3-up grid; "many small features" is rarely a brief that needs visual distinction. If the brief is "everything you get", use a comparison table instead.
- *Sticky scroll* — forbidden when the active product visual-language disallows scroll-jacking. Even as Variant A, don't include for products with no-motion rules. Available for products that permit scroll-driven interactions.

## How it works / Process

- **Numbered horizontal steps** — 3–4 steps in a horizontal row with arrows or connectors
- **Numbered vertical steps** — same but stacked vertically with timeline-feel connectors on the left
- **Annotated screenshot** — single large product screenshot with numbered hotspots/labels
- **Diagram-led** — single illustrative diagram showing the whole flow with annotations

## Testimonials / Social proof

**Order Variant A as the most daring, Variant C as the safest** (per `SKILL.md` Step 5b).

### Daring options (Variant A candidates)

- **Single oversized pull quote** — one massive pulled quote dominating the section, set in display type at 40-60px (headline-scale), centered or asymmetric. The attribution sits small below. The quote is treated as editorial copy, not a card. Premium feel.
- **Stats + testimonial** — large stat ("4.9/5 from 2,000 reviews" or "12× faster scheduling") paired with a single supporting quote alongside. Combines qualitative and quantitative proof in one section. Strong for B2B.
- **Editorial woven** — testimonials embedded inside feature explanations rather than a dedicated section. "Here's how X works — and here's how [Customer] used it to do Y." Reduces page length and makes testimonial feel like proof, not pageantry.

### Editorial / text-led options (Variant B candidates)

- **Logo + quote pair** — one column logo, one column quote. Repeats vertically for 3-4 customers. The logo grounds the quote.
- **Masonry grid** — 6–8 testimonial cards of varying heights in a Pinterest-style grid. Variation in height creates visual rhythm. Less templated than a clean 3-up.

### Safe options (Variant C — the "AI default")

- **3-up cards** — three quote cards in a row, each with quote + name + role + avatar. The most-seen pattern in SaaS. Use when the brief calls for breadth (multiple validators) over depth (one strong story).

### Cut from the catalog (forbidden or weak)

- *Marquee of quotes* — forbidden when the active product visual-language disallows motion. Don't include even as Variant A for products with no-motion rules. Available when product visual-language permits motion.
- *Carousel of stories* — adds JS complexity; static page builders shouldn't reach for this unless the brief specifically requires it.

## Stats / Metrics

- **3-up large numbers** — three big numbers across, each with a label below
- **4-up compact** — four smaller stats in a row, more data-dense
- **Stats over background imagery** — numbers floating over a relevant image
- **Single hero stat with context** — one massive number + a paragraph wrapping around it

## Pricing

**Order Variant A as the most daring, Variant C as the safest** (per `SKILL.md` Step 5b).

### Daring options (Variant A candidates)

- **Comparison-led** — skip the plan cards entirely; lead with the full feature × tier matrix. Each plan is a column header with price + CTA at the top. Best when buyers want to compare features more than they want to be sold. Editorial and confident.
- **Single hero plan + add-on toggles** — for products with one primary plan, show that plan's price prominently and list optional add-ons below. Cleaner than fake-tiering when there's really just one product.
- **Calculator-driven** — sliders or inputs that let the user model their cost based on volume. Real-time price calculation. Strong for usage-priced products. *(When the active product visual-language disallows motion, the calculator must use instant updates — no animated transitions on number changes.)*

### Editorial / text-led options (Variant B candidates)

- **2-tier with comparison table below** — two main tiers as cards + a detailed feature comparison table underneath. Combines the at-a-glance familiarity of cards with the depth of comparison. Honest about trade-offs.
- **3-tier + Enterprise contact card** — 3 priced tiers + a fourth "Custom"/"Talk to sales" card without a price. Acknowledges enterprise buyers as a separate motion. Common pattern, executed well it doesn't feel like an afterthought.

### Safe options (Variant C — the "AI default")

- **3-tier cards** — three plan cards side-by-side, middle one elevated/highlighted as recommended (the canonical Zoho pattern). Use when the audience is conventional and quick comparison matters more than depth.

### CTA discipline on every Pricing variant

CTA on every pricing card: `var(--cta)` (ODS blue), regardless of tier or aesthetic.

## Comparison table

- **Feature × tier matrix** — rows of features grouped by category, columns of tiers with checkmarks/values
- **Three-column comparison** — your product vs. two competitors

## FAQ

- **Single accordion column** — questions stacked vertically, click to expand
- **Two-column accordion** — questions split across two columns, denser
- **Categorized accordion** — questions grouped by category (Pricing / Security / Migration / Support) with category headers

## CTA (final push before footer)

**Order Variant A as the most daring, Variant C as the safest** (per `SKILL.md` Step 5b).

### Daring options (Variant A candidates)

- **Full-bleed brand banner** — solid `var(--brand)` background, oversized headline (80px+) + ODS blue CTA. Bookends the hero — opens and closes the page on the same surface (when the hero also uses a brand banner). The most product-distinctive CTA option. Confident and singular.
- **Asymmetric with visual** — 60/40 split — headline + CTA on one side, a final visual or testimonial on the other. Less in-your-face than a full banner but more interesting than centered.

### Editorial / text-led options (Variant B candidates)

- **CTA with form** — headline + inline email signup form. Reduces friction by making the CTA the action itself, not a button-to-page. Good for free-trial products.
- **Quiet left-aligned** — for premium / enterprise positioning where shouting feels off-brand. Simple "Ready to see it in action? [Book a demo]" left-aligned with generous whitespace.

### Safe options (Variant C — the "AI default")

- **Centered with one CTA** — large headline + subhead + single CTA button, lots of whitespace. The most-seen CTA pattern. Confident if the headline earns its size; bland if it doesn't.

### Cut from the catalog

- *Centered with two CTAs* — most pages have one primary action. Two equally-weighted buttons hedge the conversion. Use only if the page genuinely has two equally-important actions (e.g., "Start trial" AND "Book demo" for a product with both self-serve and sales-led motions).

### When the product has a visual-language skill

If a product visual-language skill is loaded and the brand has hero-banner conventions, the final CTA section is typically the **Full-bleed brand banner** — bookending the hero creates symmetry that's part of the product's visual rhythm.

## Footer

- **Multi-column links** — 4–5 columns of grouped links (Product, Company, Resources, Legal) + logo + tagline + social icons
- **Minimal** — just logo, copyright, a few core links, and social icons in one row
- **Newsletter + links** — newsletter signup at top, link columns below

## About page sections (specialized)

### Origin story
- **Editorial column** — long-form prose in a narrow column, narrative tone
- **Timeline format** — milestones with dates, photos/screenshots per milestone
- **Quote-driven** — alternating prose blocks with founder quotes pulled out

### Team / leadership
- **Grid of cards** — photos in a regular grid with name + role under each
- **Featured + grid** — one large founder card + smaller team cards
- **Editorial portraits** — a few large portrait photos with bios next to them, magazine-style

### Values
- **3-up cards** — three values, each with title + 1-2 sentence description
- **Numbered list** — values as a vertical numbered list, more editorial
- **Icon + statement** — each value paired with a custom icon + short statement

---

## Picking three variants — the rule

When generating three variants for a section, ensure the three are
**far apart on the layout DNA axis**. Two grid layouts and a slightly
different grid layout doesn't count.

For each section type, here's a useful axis to span across the three variants:

| Section | Axis to span |
|---|---|
| Hero | Visual (split with image) ↔ Text-led (editorial stacked) ↔ Banner (full-bleed brand) |
| Features | Compact (icon wall) ↔ Standard (3-up grid) ↔ Editorial (alternating left/right) |
| Pricing | Standard (3-tier) ↔ Comparison (2-tier + table) ↔ Hybrid (3-tier + Enterprise) |
| Testimonials | Single statement (oversized quote) ↔ Multiple (3-up grid) ↔ Quantitative (stats + quote) |
| FAQ | Simple (single column accordion) ↔ Dense (two-column) ↔ Structured (categorized) |

For sections with ≤4 archetypes total in the catalog (e.g., logo cloud has 4),
you can show all of them as variants. For sections with 5+ (e.g., Features
has 8), pick three that span the axis above.

## Mixing and matching

If the user's content suggests a section type not listed here exactly
(e.g., "showcase" or "manifesto"), pick the closest analogue and adapt.
The archetype lists aren't exhaustive — they're a starting palette.

## Section transition consistency

Between adjacent sections, vary at least 2 of these:
- Background color (white ↔ alt surface ↔ dark)
- Density (sparse ↔ dense)
- Composition (centered ↔ asymmetric ↔ grid)

Two adjacent sections that share all three feel monotonous regardless
of how good either one is in isolation.
