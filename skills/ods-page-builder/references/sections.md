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

The first impression. Choose archetypes that differ on focal element and composition.

- **Split asymmetric** — copy ~55% on left, product UI/screenshot/illustration ~45% on right; vertical alignment offset (text top-aligned, visual slightly below center)
- **Centered + product below** — headline + subhead + CTA centered, generous whitespace, large product screenshot or device mockup below
- **Editorial stacked** — eyebrow label, then very large display headline taking 2-3 lines, supporting paragraph, CTA — all left-aligned in a narrow column, no visual aid
- **Solid brand banner** *(for Shift)* — full-bleed `#3940D0` indigo background, white headline + ODS blue CTA. Banner-style hero specific to Shift's visual language.
- **Light gradient banner** *(for Shift)* — full-bleed `linear-gradient(180deg, #B4BCEE 0%, #EEF0FB 100%)`, dark text + ODS blue CTA. Banner-style hero for inner Shift pages.
- **Inverted dark hero** — dark surface (uses `var(--surface-dark)` / `#161B63` for Shift), white text, brand accent for highlights
- **Split with form** — copy on left, signup/CTA form on right (good for tools, newsletters, waitlists)
- **Side-by-side comparison** — "Before/After" or "Without us / With us" two-column visual hero

For Shift pages: prefer the **Solid brand banner** or **Light gradient banner**
options on the home/main pages, since they match the established Shift visual
language. Inner pages (feature, pricing) typically use Light gradient or
Editorial stacked.

## Logo cloud (social proof bar)

- **Centered band** — small "Trusted by" label centered, logos in a single horizontal row, evenly spaced
- **Marquee** — logos scrolling horizontally, infinite loop *(skip on Shift pages — no entrance animations / motion rule)*
- **Grid with quote** — 6–9 logos in a grid plus a customer quote pulled from one of them
- **Logos with metrics** — 3–4 logos paired with a metric per logo

## Features

The core content section. Choose 3 archetypes that vary on composition, density, and direction.

- **3-up grid** — three columns, each with icon + heading + 1–2 sentence description
- **Bento grid** — irregular grid (one large card + several smaller), each card a distinct feature with visual
- **Alternating left/right** — vertical stack of feature blocks, each alternating image left/right with copy on the other side
- **Tabbed deep-dive** — section title + horizontal tabs, picking a tab swaps the visual *(use sparingly on Shift pages — no scroll-jacking flow disruption)*
- **Sticky scroll** — left side stays put with feature title, right side scrolls through visuals *(skip on Shift pages — sticky is a form of scroll-jacking)*
- **List with media** — left-side vertical list of features (titles + 1-line descriptions), right-side a single large media that swaps based on which list item is hovered/active
- **Numbered steps** — features as numbered cards (01, 02, 03), implying progression
- **Icon wall** — many small features in a 4×N grid with just icon + label, for "everything you get"

## How it works / Process

- **Numbered horizontal steps** — 3–4 steps in a horizontal row with arrows or connectors
- **Numbered vertical steps** — same but stacked vertically with timeline-feel connectors on the left
- **Annotated screenshot** — single large product screenshot with numbered hotspots/labels
- **Diagram-led** — single illustrative diagram showing the whole flow with annotations

## Testimonials / Social proof

- **3-up cards** — three quote cards in a row, each with quote + name + role + avatar
- **Single large quote** — one massive pulled quote dominating the section, attributed below
- **Marquee of quotes** — many small quote cards scrolling horizontally *(skip on Shift pages — motion rule)*
- **Masonry grid** — 6–8 testimonial cards of varying heights in a Pinterest-style grid
- **Logo + quote pair** — one column logo, one column quote — repeats vertically for several customers
- **Stats + testimonial** — large stat ("4.9/5 from 2,000 reviews") paired with a single supporting quote

## Stats / Metrics

- **3-up large numbers** — three big numbers across, each with a label below
- **4-up compact** — four smaller stats in a row, more data-dense
- **Stats over background imagery** — numbers floating over a relevant image
- **Single hero stat with context** — one massive number + a paragraph wrapping around it

## Pricing

- **3-tier cards** — three plan cards side-by-side, middle one elevated/highlighted as recommended (the canonical Zoho pattern)
- **2-tier with comparison table below** — two main tiers + a detailed feature comparison table underneath
- **3-tier + Enterprise contact card** — 3 priced tiers + a fourth "Custom"/"Talk to sales" card without a price
- **Annual/monthly toggle + tiers** — standard tiers with a billing-period switch above

CTA on every pricing card: `var(--cta)` (ODS blue), regardless of tier.

## Comparison table

- **Feature × tier matrix** — rows of features grouped by category, columns of tiers with checkmarks/values
- **Three-column comparison** — your product vs. two competitors

## FAQ

- **Single accordion column** — questions stacked vertically, click to expand
- **Two-column accordion** — questions split across two columns, denser
- **Categorized accordion** — questions grouped by category (Pricing / Security / Migration / Support) with category headers

## CTA (final push before footer)

- **Centered with one CTA** — large headline + subhead + single CTA button, lots of whitespace
- **Centered with two CTAs** — primary + secondary CTA pair (e.g., "Start free trial" + "Talk to sales")
- **CTA with form** — headline + inline email signup form
- **Full-bleed brand banner** *(for Shift)* — solid `#3940D0` background or light gradient, headline + ODS blue CTA — bookend matches the hero pattern

For Shift pages, the final CTA section is typically a **Full-bleed brand banner**
matching the hero, creating bookend symmetry.

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
