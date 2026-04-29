# Design System Source

This file documents the canonical source of brand tokens for this skill.
Read it before composing any HTML/CSS — every variant rendered and the
final assembly must use real ODS values, not invented or aesthetic-default
ones.

The skill **fetches the design system at build time** rather than
hardcoding values. This means tokens stay in sync with the source as
it evolves, and a single update at the source flows into every page
generated afterward.

---

## Source location

The canonical design system lives in this repo:

```
https://github.com/muthuveerapandi-s-2874/design-skills-marketplace
```

Verified actual structure of `design-system/`:

```
design-system/
├── README.md
├── DESIGN.md
├── accessibility/
│   ├── examples.md
│   ├── rules.md
│   └── wcag.checklist.json
├── components/
│   └── cta.json
├── themes/
│   └── shift.json    (additional product themes added here as products onboard)
└── tokens/
    ├── color/
    │   └── colors.json
    ├── layout/
    │   └── grid.json
    ├── radius/
    │   └── elevation-radius.json
    ├── spacing/
    │   └── spacing.json
    └── typography/
        └── typography.json
```

When more product themes onboard (CRM, Books, etc.), they appear as
additional files in `design-system/themes/`.

---

## Fetch URLs — try in this priority order

Use raw GitHub URLs (not the tree URL — `web_fetch` returns the file's
actual content from the raw URL).

### Step 1: Identify the brand theme

If the user named a Zoho product (any product in the Zoho family):

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/themes/<product>.json
```

Replace `<product>` with the product name (e.g., `shift.json`, `crm.json`,
`books.json`). If the file 404s, the product theme hasn't been onboarded
yet — use ODS-wide defaults (Step 2).

If the user did NOT name a product, skip to Step 2.

### Step 2: Fetch ODS-wide tokens

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/color/colors.json
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/typography/typography.json
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/spacing/spacing.json
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/radius/elevation-radius.json
```

### Step 3: Fetch the CTA component spec

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/components/cta.json
```

This file contains CTA variants (`primary`, `primaryLine`, `secondary`),
sizes (`xs`, `sm`, `md`, `lg`), and state colors (default/hover/active/focus/disabled).
**Do not invent CTA colors or hover states from the brand palette — read them from this file.**

### Step 4: Fetch accessibility checklist (optional)

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/accessibility/wcag.checklist.json
```

---

## Token names this skill uses (matching ODS semantic conventions)

This skill uses the same semantic token names as your design system's
design system's CSS files (e.g., the per-product theme CSS) and `.cursorrules`. These are the names that appear in the
generated `styles.css` `:root` block and in `var(...)` references.

### Color tokens — what they're for

| Token | What it's for |
|---|---|
| `--cta` | Primary CTA fill — ODS blue, same on every Zoho product. **Never the brand color.** |
| `--cta-hover` | CTA hover state |
| `--cta-active`, `--cta-focus` | CTA active and focus states |
| `--canvas` | Default page background — usually white |
| `--surface` | Alternating section background — subtle off-white |
| `--brand` | Product brand color — used for banners, accents, link highlights. Resolves per product (a deep indigo, a warm red, a forest green, etc.). **Never on a CTA button.** |
| `--brand-hover` | Brand surface hover state |
| `--surface-dark` | Dark theme section background — varies per product. Resolves to whatever the product's theme defines. |
| `--fg-primary` | Headlines, primary text on light surfaces |
| `--fg-secondary` | Sub-headlines |
| `--fg-tertiary` | Body paragraphs |
| `--fg-muted` | Decorative / disabled — fails 4.5:1, never readable text |
| `--fg-on-dark` | Primary text on dark surfaces |
| `--success`, `--warning`, `--error`, `--info` | Status colors |
| `--line` | Card borders, neutral strokes |
| `--line-active` | Active flow paths, focus borders |

### How to resolve tokens from the source

For any named Zoho product, the resolution flow:

1. Read `themes/<product>.json`. The `colors` object has 11 families × 11 shades — the standard ODS scale convention.
2. Resolve `--brand` to `colors.primary.500` (the product's brand color at full saturation)
3. Resolve `--brand-hover` to `colors.primary.600` (one step deeper than brand)
4. Resolve `--surface-dark` to the product's preferred dark section background. The product theme should define this explicitly as a custom semantic token (it usually doesn't fall on a scale step — most products pick a specific dark hex that sits between two scale values, e.g., between `primary-800` and `primary-900`). If the theme doesn't define it explicitly, fall back to `colors.primary.900`.

For CTA tokens:

1. Read `components/cta.json`
2. `--cta` resolves to `variants.primary.colors.background` — ODS blue `#0047FF`
3. `--cta-hover` resolves to the hover state in the same file

For ODS neutrals (text, surface, line):

1. Read `tokens/color/colors.json`
2. `--fg-primary` → check the product theme first. Some products derive `--fg-primary` from `--surface-dark` (so headings on white surfaces match the dark surface color visually). Others use the ODS-wide neutral `colors.gray.900`. Default fallback: `colors.gray.900` from `tokens/color/colors.json`.
3. `--fg-secondary` → `colors.gray.400` or equivalent
4. `--fg-tertiary` → `colors.gray.700` or equivalent
5. `--canvas` → white
6. `--surface` → `colors.gray.50` (alt section background)
7. `--line` → `colors.gray.200` (or a product-specific override if the product theme defines one — e.g., a tinted border color from the product's own neutral scale)

---

## Critical rule — CTA color does not change per product

Every Zoho product uses ODS blue `#0047FF` for the primary CTA fill.
The product brand color (whatever `var(--brand)` resolves to for this product) lives on banners, surfaces,
and accents — **never on a CTA button**. This is enforced by `cta.json` and
must not be overridden by aesthetic choices or product themes.

If a variant places `var(--brand)` on `.btn-primary`, that's a violation.
Stop and fix before rendering.

---

## Fallback values

Use these when the fetch fails, the repo is unreachable, or no usable
file is found in the source. They are ODS-aligned so the page still
feels native to the Zoho ecosystem.

### Color fallbacks (no product named)

```css
--cta: #0047FF;
--cta-hover: #003BD9;
--canvas: #FFFFFF;
--surface: #F5F5F5;
--brand: #0047FF;       /* falls back to ODS blue when no product theme available */
--brand-hover: #003BD9;
--surface-dark: #0B0C1F;
--fg-primary: #262626;
--fg-secondary: #4F4F4F;
--fg-tertiary: #595959;
--fg-muted: #8C8C8C;
--fg-on-dark: #F5F5F5;
--success: #05B488;
--warning: #E14F06;
--error: #BA0530;
--info: #0047FF;
--line: #E5E5E5;
--line-active: var(--brand);
```

### Color fallbacks (named product, theme fetch failed)

If the user named a product but the theme fetch failed (network error,
file 404), apply these fallback rules so the page is still buildable:

1. Keep `--cta` and all CTA tokens at their ODS values — these never
   change per product (`#0047FF` for `--cta`).
2. Keep `--canvas`, `--surface`, `--success`, `--warning`, `--error`,
   `--info`, `--line` at the generic ODS fallbacks above.
3. Substitute these for the product brand tokens, marking it as a
   degraded build:

```css
--brand: #0047FF;        /* falls back to ODS blue */
--brand-hover: #003BD9;
--surface-dark: #0B0C1F;
--fg-primary: #262626;   /* generic neutral, not product-tinted */
--fg-secondary: #4F4F4F;
--fg-tertiary: #595959;
--line: #E5E5E5;
```

The page reads as ODS-aligned but loses product brand identity. Include
a one-line note: "Couldn't reach the design system source — building
with ODS-aligned defaults instead of the product brand. Rerun with web
access to pull live tokens."

### Type fallbacks

```css
--font-display: 'Zoho Puvi', 'Inter Tight', system-ui, sans-serif;
--font-text: 'Zoho Puvi', 'Inter', system-ui, sans-serif;
```

Load Zoho Puvi via:
```html
<link rel="stylesheet" href="https://static.zohocdn.com/fonts/zoho-puvi/zoho-puvi.css">
```

### Radii fallbacks (ODS scale — 5 values only)

```css
--r-none: 0;
--r-sm: 4px;        /* Buttons, tight cards */
--r-md: 8px;        /* Inputs, small icon tiles */
--r-lg: 12px;       /* Default cards, screenshots */
--r-pill: 999px;    /* Badges, avatars, status pills */
```

Note: ODS does not have 16px or 24px radii. If the picked aesthetic
suggests a larger radius, cap at 12px.

### Spacing fallbacks

Section vertical padding by aesthetic (per `aesthetics.md`):
- Modern Minimal: 96–128px desktop, 56–72px mobile
- Editorial: 120–160px desktop, 64–80px mobile
- Tech/Cyberpunk: 80–96px desktop, 48–64px mobile
- Playful: 64–96px desktop, 40–56px mobile

Container max-width: 1200px (or per source if specified)

---

## Behavior summary

A clean build for a **named Zoho product**:

1. Read `SKILL.md`, arrive at the brand-tokens step
2. Read this file (`design-system-source.md`)
3. Call `web_fetch` against:
   - `themes/<product>.json` for product brand colors
   - `tokens/color/colors.json` for ODS-wide neutrals
   - `components/cta.json` for the CTA spec
   - `tokens/typography/typography.json` for the type scale
4. Map source values into the skill's token names by role
5. Compose the inline `:root` block using those values
6. Build the page — CTAs are ODS blue (universal), accents are the product's brand color, surfaces and text use ODS-wide neutrals
7. If a visual-language skill exists for that product, also load and apply its rules throughout

A clean build for a **generic Zoho marketing page** (no product named):

1. Same first two steps
2. Skip the product-theme fetch
3. Pull only ODS-wide tokens (`colors.json`, `cta.json`, `typography.json`)
4. Build the page using ODS Light defaults

A failed-fetch build:

1. Same first two steps
2. Attempt the fetches; none return useful content
3. Use the fallback values from this file
4. Include a one-line note: "Couldn't reach the design system source — using fallback ODS-aligned defaults. Page is fully functional; rerun with web access enabled to pull live tokens."
5. Build the page; the build does not block.
