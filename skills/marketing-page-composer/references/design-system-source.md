# Design System Source

This file documents the canonical source of brand tokens for this
skill. It is read first in every page-build, before any HTML is
composed.

The skill **fetches the design system at build time** rather than
hardcoding values. This means tokens stay in sync with the source as
it evolves, and a single update at the source flows into every page
generated afterward.

---

## Source location

The canonical design system lives in this GitHub repo:

```
https://github.com/muthuveerapandi-s-2874/design-skills-marketplace
```

The design system sits in the `/design-system` directory and is
organised as follows (verified actual structure):

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
additional files in `design-system/themes/`. The fetch contract below
is written to handle any number of theme files generically.

---

## Fetch URLs — try in this priority order

Use the raw GitHub URLs (not the tree URL — `web_fetch` returns the
file's actual JSON content from the raw URL). Try these in order; stop
once you have enough information to resolve all required tokens.

### Step 1: Identify the brand theme

If the user named a Zoho product (Shift, future CRM, etc.), fetch that
product's theme file directly:

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/themes/shift.json
```

For other products, replace `shift` with the product name (e.g.
`crm.json`, `books.json`). If the file 404s, the product theme hasn't
been onboarded yet — fall back to step 2 + ODS defaults.

If the user did NOT name a product (generic Zoho marketing page),
skip to step 2 — use ODS-wide tokens with no product-specific overlay.

### Step 2: Fetch ODS-wide tokens

Pull the ODS-wide color, typography, spacing, and radius tokens. These
apply to every Zoho product:

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/color/colors.json
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/typography/typography.json
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/spacing/spacing.json
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/tokens/radius/elevation-radius.json
```

### Step 3: Fetch the CTA component spec

The CTA is centralised — every product uses the same primary CTA color
(ODS blue `#0047FF`). Pull the canonical spec:

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/components/cta.json
```

This file contains the variants (`primary`, `primaryLine`, `secondary`,
etc.), sizes (`xs`, `sm`, `md`, `lg`), and state colors (default,
hover, active, focus, disabled). **Do not invent CTA colors or
hover states from the brand palette — read them from this file.**

### Step 4: Fetch accessibility checklist (optional but recommended)

```
https://raw.githubusercontent.com/muthuveerapandi-s-2874/design-skills-marketplace/main/design-system/accessibility/wcag.checklist.json
```

Use this to verify the page meets WCAG 2.1 AA before delivery.

---

## Token role-mapping

The design system uses specific token names. Map them to the skill's
internal token vocabulary by *role*, not by literal name match.

### Color tokens

The skill's internal names → where to find the value in the source.

For Shift specifically, theme values live in `themes/shift.json` under
the `colors` object: `colors.<family>.<shade>`. For example,
`colors.primary.500` resolves to Shift's brand color `#3940D0`.

| Skill internal token | Source location | Notes |
|---|---|---|
| `--brand-primary` (skill's internal CTA color) | `components/cta.json → variants.primary.colors.background` | This is the **CTA fill color**, ODS blue `#0047FF`. Same on every Zoho product. **Do not use the brand color (e.g. Shift indigo) on CTAs.** |
| `--brand-accent` | `themes/<product>.json → colors.primary.500` | Product brand surface color (Shift indigo `#3940D0`, etc.). Used for accent moments, banners, link highlights. **Not for CTAs.** |
| `--brand-deep` | `themes/<product>.json → colors.primary.900` (or 950) | Deepest dark in the product's primary scale. Use for hero/CTA dark backgrounds. For Shift, `colors.primary.900` = `#12143F`; the dark-section surface `#161B63` is between primary-800 and primary-900 (treat as a custom semantic token, not on the scale). |
| `--brand-deep-2` | `themes/<product>.json → colors.primary.800` | A companion dark for gradient mixing. |
| `--text` | `tokens/color/colors.json → grey.900` (or equivalent ODS-wide neutral) | Default body and headline color on light surfaces. |
| `--text-muted` | `tokens/color/colors.json → grey.500` | Secondary text on light. |
| `--text-subtle` | `tokens/color/colors.json → grey.400` | Captions, trust lines. |
| `--text-on-dark` | `tokens/color/colors.json → grey.100` (near-white) | Primary text on dark surfaces. |
| `--text-on-dark-muted` | Calculated: `--text-on-dark` at 60–70% alpha | Secondary text on dark. |
| `--surface` | `tokens/color/colors.json → white` (or `#FFFFFF`) | Default page background. |
| `--surface-2` | `tokens/color/colors.json → grey.50` | Alternating section background. |
| `--surface-3` | `tokens/color/colors.json → grey.100` (or 25 if defined) | Tertiary surface, used rarely. |
| `--border` | `tokens/color/colors.json → grey.200` | Hairline borders. |
| `--border-strong` | `tokens/color/colors.json → grey.300` | Hover-state borders. |

**Critical rule — CTA color does not change per product.** Every Zoho
product uses ODS blue `#0047FF` for the primary CTA fill. The brand
color (Shift indigo, etc.) lives on banners, surfaces, and accents —
never on a CTA button. This is enforced by `components/cta.json` and
must not be overridden.

### Typography

| Skill internal token | Source location |
|---|---|
| `--font-display` | `tokens/typography/typography.json` — look for the display family. ODS uses `'Zoho Puvi'`. |
| `--font-text` | Same file — look for the body family. ODS uses `'Zoho Puvi'` for both display and body (single-family system). |
| Type scale (sizes, weights, line-heights) | Same file — read the full scale and apply per the skill's H1/H2/H3/body specs. |

ODS uses a single-family type system (Zoho Puvi for both display and
text) with two weights (400 Regular, 500 Medium). If the source
confirms a different family or different weights, use those.

### Spacing

| Skill use | Source location |
|---|---|
| Section vertical padding (`120–160px desktop`) | `tokens/spacing/spacing.json` — find the section/large scale values. |
| Container max-width | Look for `--container-max` or use the skill's default `1200px`. |
| Grid gaps (24, 48, 80px) | Skill defaults; cross-check against `spacing.json` if it specifies gap values. |

### Radius

Read `tokens/radius/elevation-radius.json` for the canonical scale.
ODS uses **5 values: 0, 4, 8, 12, 999**. Map:

| Skill internal token | Source value | Use |
|---|---|---|
| `--r-sm` | 4px | Buttons, tight cards |
| `--r-md` | 8px | Inputs, small icon tiles |
| `--r-lg` | 12px | Default cards, screenshots |
| `--r-xl` | 12px (no larger value in ODS) | Same as `--r-lg` for ODS-aligned pages |
| `--r-pill` | 999px | Badges, avatars, status pills |
| `--r-btn` | 4px | Always 4px for CTAs (per `cta.json`) |

The skill's previous `--r-xl: 24px` value does not exist in ODS — use
12px as the largest. If the source shows a 16px value, ignore it (ODS
explicitly retired 16px in earlier versions).

### Motion / easing

`tokens/elevation-radius.json` and component files may include easing
curves. If found, use that for `--ease`. Default fallback:
`cubic-bezier(0.22, 1, 0.36, 1)`.

---

## Fallback values

Use these when the fetch fails, the repo is unreachable, or no usable
file is found in the source. They are ODS-aligned so the page still
feels native to the Zoho ecosystem.

**Color fallbacks:**
- `--brand-primary` (CTA) → `#0047FF`  *(ODS blue — universal across products)*
- `--brand-accent` → `#0047FF`  *(no product-specific theme; falls back to ODS blue)*
- `--brand-deep` → `#0B0C1F`
- `--brand-deep-2` → `#15173E`
- `--text` → `#262626`
- `--text-muted` → `#595959`
- `--text-subtle` → `#8C8C8C`
- `--text-on-dark` → `#F5F5F5`
- `--text-on-dark-muted` → `rgba(245,245,245,0.65)`
- `--surface` → `#FFFFFF`
- `--surface-2` → `#F5F5F5`
- `--surface-3` → `#FAFAFA`
- `--border` → `#E5E5E5`
- `--border-strong` → `#D4D4D4`

**Shift-specific fallbacks** (use when user named "Shift" but fetch failed):
- `--brand-accent` → `#3940D0`  *(Shift indigo, not for CTAs)*
- `--brand-deep` → `#161B63`  *(Shift dark surface)*
- `--brand-deep-2` → `#1B1F64`

**Type fallbacks:**
- `--font-display` → `'Zoho Puvi', 'Inter Tight', system-ui, sans-serif`
- `--font-text` → `'Zoho Puvi', 'Inter', system-ui, sans-serif`

**Radii fallbacks** (ODS scale — 5 values only):
- `--r-sm` → `4px`
- `--r-md` → `8px`
- `--r-lg` → `12px`
- `--r-xl` → `12px`  *(no larger value in ODS)*
- `--r-pill` → `999px`
- `--r-btn` → `4px`

**Motion fallback:**
- `--ease` → `cubic-bezier(0.22, 1, 0.36, 1)`

---

## Behavior summary

A clean build for a **named Zoho product** (e.g. "build me a Shift
landing page") looks like:

1. Claude reads `SKILL.md` and arrives at the brand-tokens step.
2. Claude reads this file (`design-system-source.md`).
3. Claude calls `web_fetch` against:
   - `themes/shift.json` for product brand colors
   - `tokens/color/colors.json` for ODS-wide neutrals
   - `components/cta.json` for the CTA spec
   - `tokens/typography/typography.json` for the type scale
4. Claude maps the source values into the skill's token names by role.
5. Claude composes the inline `:root` block using those values.
6. The page is built — CTAs are ODS blue, accents are Shift indigo,
   surfaces and text use ODS-wide neutrals.

A clean build for a **generic Zoho marketing page** (no product named)
looks like:

1. Same first two steps.
2. Claude **skips** the product-theme fetch entirely.
3. Claude pulls only ODS-wide tokens (`colors.json`, `cta.json`,
   `typography.json`).
4. The page is built using ODS blue for CTAs and ODS-wide neutrals for
   everything else.

A failed-fetch build looks like:

1. Same first two steps.
2. Claude attempts the fetches; none return useful content.
3. Claude uses the fallback values from this file.
4. Claude includes a one-line note in the response: "Couldn't reach
   the design system source — using fallback ODS-aligned defaults.
   The page is fully functional; rerun with web access enabled to
   pull live tokens."
5. The page is built and the build does not block.

A non-Zoho brand build looks like:

1. Claude reads SKILL.md and sees the user requested e.g. a
   Linear-style page.
2. Claude **skips** the ODS fetch entirely and applies the brand
   override values from SKILL.md.
3. The page is built with those values, restated at the top of
   the inline stylesheet.
