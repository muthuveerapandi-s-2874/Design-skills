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
│   └── shift.json
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

If the user named a Zoho product (e.g., "Shift signup page"):

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/themes/shift.json
```

For other products, replace `shift` with the product name (e.g.,
`crm.json`). If the file 404s, the product theme hasn't been onboarded
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
`shift.css` and `.cursorrules`. These are the names that appear in the
generated `styles.css` `:root` block and in `var(...)` references.

### Color tokens — what they're for

| Token | What it's for |
|---|---|
| `--cta` | Primary CTA fill — ODS blue, same on every Zoho product. **Never the brand color.** |
| `--cta-hover` | CTA hover state |
| `--cta-active`, `--cta-focus` | CTA active and focus states |
| `--canvas` | Default page background — usually white |
| `--surface` | Alternating section background — subtle off-white |
| `--brand` | Product brand color (Shift indigo, future CRM color, etc.) — used for banners, accents, link highlights. Resolves per product. **Never on a CTA button.** |
| `--brand-hover` | Brand surface hover state |
| `--surface-dark` | Dark theme section background — varies per product. For Shift, `#161B63`. |
| `--fg-primary` | Headlines, primary text on light surfaces |
| `--fg-secondary` | Sub-headlines |
| `--fg-tertiary` | Body paragraphs |
| `--fg-muted` | Decorative / disabled — fails 4.5:1, never readable text |
| `--fg-on-dark` | Primary text on dark surfaces |
| `--success`, `--warning`, `--error`, `--info` | Status colors |
| `--line` | Card borders, neutral strokes |
| `--line-active` | Active flow paths, focus borders |
| `--light-gradient-top`, `--light-gradient-bottom` | Light banner gradient stops (Shift-specific surface) |

### How to resolve tokens from the source

For a Shift page, the resolution flow:

1. Read `themes/shift.json`. The `colors` object has 11 families × 11 shades.
2. Resolve `--brand` to `colors.primary.500` (`#3940D0` for Shift)
3. Resolve `--brand-hover` to `colors.primary.600` (`#2F35B0`)
4. Resolve `--surface-dark` to the Shift-specific dark surface — note that
   for Shift, `#161B63` is between `primary-800` and `primary-900` on the
   scale. It's a custom semantic token (not a scale step). If the source
   defines it explicitly, use that. If not, use `#161B63` (well-known Shift value).
5. Resolve `--light-gradient-top` to `colors.primary.200` (`#B4BCEE`)
6. Resolve `--light-gradient-bottom` to `colors.primary.50` (`#EEF0FB`)

For CTA tokens:

1. Read `components/cta.json`
2. `--cta` resolves to `variants.primary.colors.background` — ODS blue `#0047FF`
3. `--cta-hover` resolves to the hover state in the same file

For ODS neutrals (text, surface, line):

1. Read `tokens/color/colors.json`
2. `--fg-primary` → for Shift, use `#161B63` (matches the dark surface, which is the heading color in Shift visual language). For other products, use `colors.gray.900` or equivalent.
3. `--fg-secondary` → `colors.gray.400` or equivalent
4. `--fg-tertiary` → `colors.gray.700` or equivalent
5. `--canvas` → white
6. `--surface` → `colors.gray.50` (alt section background)
7. `--line` → `colors.gray.200` (or `colors.slate.300` for Shift if specified)

---

## Critical rule — CTA color does not change per product

Every Zoho product uses ODS blue `#0047FF` for the primary CTA fill.
The brand color (Shift indigo `#3940D0`, etc.) lives on banners, surfaces,
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
--info: #3940D0;
--line: #E5E5E5;
--line-active: var(--brand);
--light-gradient-top: #DCE0F7;
--light-gradient-bottom: #EEF0FB;
```

### Color fallbacks (Shift)

If user named "Shift" but the fetch failed, use these Shift-specific values:

```css
--brand: #3940D0;             /* Shift indigo — primary-500 */
--brand-hover: #2F35B0;       /* primary-600 */
--surface-dark: #161B63;      /* Shift dark surface */
--fg-primary: #161B63;        /* matches surface-dark — Shift heading color */
--fg-secondary: #343A66;      /* gray-400 in Shift palette */
--fg-tertiary: #55597A;       /* slate-700 in Shift palette */
--line: #D2D6EC;              /* slate-300 in Shift palette */
--line-active: var(--brand);
--light-gradient-top: #B4BCEE;     /* primary-200 */
--light-gradient-bottom: #EEF0FB;  /* primary-50 */
/* CTA tokens unchanged — still ODS blue */
```

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

A clean build for a **named Zoho product** (e.g., "build me a Shift landing page"):

1. Read `SKILL.md`, arrive at the brand-tokens step
2. Read this file (`design-system-source.md`)
3. Call `web_fetch` against:
   - `themes/shift.json` for product brand colors
   - `tokens/color/colors.json` for ODS-wide neutrals
   - `components/cta.json` for the CTA spec
   - `tokens/typography/typography.json` for the type scale
4. Map source values into the skill's token names by role
5. Compose the inline `:root` block using those values
6. Build the page — CTAs are ODS blue, accents are Shift indigo, surfaces and text use ODS-wide neutrals
7. If Shift, also load `shift-visual-language` rules and apply throughout

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
