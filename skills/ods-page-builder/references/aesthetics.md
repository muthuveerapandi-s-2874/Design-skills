# Aesthetics catalog (ODS-compatible)

Four aesthetics that fit Zoho's brand range. Each is a complete visual
system: typography, spacing rhythm, radius vocabulary, motion feel.

**Critical:** Aesthetics define **layout DNA, type rhythm, spacing, and
radii** — they do NOT define color. All color values come from ODS
tokens (loaded per `references/design-system-source.md`). Where the
generic `page-builder` aesthetic might say `accent: #4F46E5`, this
skill maps that to `var(--brand)` from your design system.

When the user picks an aesthetic, every section variant rendered after
inherits the **layout/type/spacing/radii** from the aesthetic + the
**colors** from ODS.

Present these to the user with **name + one-line description** only.
The tokens are for you, not for them.

---

## Modern Minimal

*Calm, confident, lots of white space. Think Linear, Stripe, Vercel.*

### Layout & composition
- Single-axis hierarchy — content centered or left-aligned, never both on the same page
- Cards are simple — bordered or subtle-shadowed rectangles
- Section padding generous: 96–128px vertical desktop, 56–72px mobile
- Grid: 12-column with consistent 24px or 32px gaps

### Typography
- **Type pair:** single family, weight does the work — `'Zoho Puvi', sans-serif` (your design system's font)
- **Type scale:** 14 / 16 / 18 / 20 / 24 / 32 / 48 / 64 / 80
- **Headlines:** tight tracking (-0.02em), weights 500–600, never 700+
- **Body:** 16px, 1.6 line-height
- **Letter-spacing on H1:** -0.03em or tighter

### Radii (always ODS scale: 0, 4, 8, 12, 999)
- Buttons: 4px (matches `cta.json`)
- Cards: 12px
- Inputs: 8px
- Pills/badges: 999px

### Borders & shadows
- 1px hairlines using `var(--line)` — used sparingly
- Cards: either bordered OR with the faintest shadow, never both
- No drop shadows beyond `0 1px 3px rgba(0,0,0,0.04)`

### Motion (overridden by `shift-visual-language` for Shift pages)
- 150ms ease-out on hovers
- No bouncing, no overshoot
- For Shift: no entrance animations at all

### Color application
- Background: `var(--canvas)` (white)
- Section alt: subtle off-white if needed (use `var(--surface)` or sparingly applied gray-50)
- Text: `var(--fg-primary)` for headings, `var(--fg-tertiary)` for body
- Brand accent: `var(--brand)` — used sparingly, on emphasis links/highlights
- CTA: `var(--cta)` — ODS blue

### Don't
Drop shadows beyond the faintest. Gradient text. Decorative shapes.
Three-column-everything (vary the composition).

---

## Editorial

*Magazine-feeling, type-driven, asymmetric. Think Stripe Press, Apple newsroom.*

### Layout & composition
- Asymmetric grid — pull-quotes break grid, captions sit in margins, columns of varying widths
- Hero is text-only or text + small visual; the headline is the hero
- Content blocks vary in width — narrow body columns, wider visuals, edge-to-edge images
- Section padding: 120–160px vertical desktop, 64–80px mobile (more breathing room than Modern Minimal)

### Typography
- **Type pair:** ideally serif display + sans body, but with Zoho Puvi available, use weight contrast: Puvi 400 (regular) for headlines + Puvi 500 (medium) for body emphasis
- **Type scale:** wide range — 14 / 17 / 20 / 28 / 40 / 56 / 80 / 112
- **Headlines:** very large (80px+ on desktop hero), normal tracking (0 to -0.01em), regular weight (400), not bold
- **Body:** 17–18px, generous 1.7 line-height
- **Eyebrows:** 12-14px, all-caps, letter-spaced 0.08em

### Radii
- Mostly square: 0px or 4px
- Avoid rounded cards
- Pills 999px allowed for tags only

### Borders & shadows
- Hairline rules above section labels (1px `var(--line)`)
- No card shadows
- Section dividers: thin horizontal rules between major sections

### Motion
- Slow reveals (300-400ms ease-out) — but for Shift pages, NO reveals at all
- No transforms

### Color application
- Background: `var(--canvas)` or a slightly warm off-white
- Text: `var(--fg-primary)` for headlines, `var(--fg-tertiary)` for body — slightly darker than Modern Minimal
- Brand accent: `var(--brand)` — used as a single muted accent (never neon)
- CTA: `var(--cta)` — but consider treating CTAs as text links with arrows for an editorial feel

### Don't
Rounded corners on cards. Drop shadows. Busy gradients. Three-column-everything.

---

## Tech / Cyberpunk

*Dark, dense, terminal-feeling. Think Vercel dark mode, Resend, Railway.*

### Layout & composition
- Dark backgrounds dominant — think 70%+ of page surface dark
- Information density higher than Modern Minimal — more content per section
- Code blocks, terminal mockups, monospace labels are signature elements
- Section padding: 80–96px vertical desktop, 48–64px mobile (tighter than Modern Minimal)

### Typography
- **Type pair:** Zoho Puvi for display + monospace (`'JetBrains Mono', monospace`) for code/labels/captions
- **Type scale:** 12 / 14 / 16 / 20 / 28 / 40 / 56
- **Headlines:** medium weight (500), tight tracking (-0.02em); for Shift, no gradient text on headlines
- **Body:** 15–16px, 1.5 line-height (denser than other aesthetics)
- **Code/labels:** monospace, 14px

### Radii
- 4px and 8px primarily
- Buttons: 4px (matches `cta.json`)
- Code blocks: 8px

### Borders & shadows
- 1px in low-opacity white for borders on dark — use `rgba(255,255,255,0.08)` or your design system's `--border-on-dark` if defined
- The signature dark-UI hairline — soft glow possible on hover (but for Shift, no glows)

### Motion (overridden by `shift-visual-language` for Shift pages)
- Fast snappy transitions, 100-150ms
- For Shift: no animations at all
- Possible monospace cursor blink in code mockups (allowed for non-Shift)

### Color application
- Background: dark surface — for Shift, use `#161B63` (Shift dark surface). For non-Shift, dark navy from ODS palette.
- Text on dark: near-white or `var(--fg-on-dark)`
- Brand accent: `var(--brand)` — slightly more saturated treatment OK on dark
- CTA: `var(--cta)` (ODS blue) — note: ODS blue on dark backgrounds may need to be checked for contrast; use `primaryLine` variant if needed (border + text only)

### Don't
White backgrounds. Warm colors. Decorative imagery. Soft edges.

---

## Playful

*Friendly, energetic, brand-forward. Think Notion, Loom, Figma marketing pages.*

### Layout & composition
- Multi-column grids with personality — alternating card sizes
- Bento-style layouts encouraged
- Bigger emphasis on illustrative or screenshot-led sections
- Section padding: 64–96px vertical desktop, 40–56px mobile

### Typography
- **Type pair:** Zoho Puvi only — use weight 700 for headlines for chunkier feel, weight 500 for body emphasis
- **Type scale:** 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64
- **Headlines:** bold (700), slightly tight tracking (-0.01em)
- **Body:** 16–17px, 1.55 line-height

### Radii
- Slightly larger than Modern Minimal but still on ODS scale (0, 4, 8, 12, 999)
- Cards: 12px
- Buttons: 4px (matches `cta.json` — don't go larger)
- Pills: 999px (used heavily for tags, badges)

### Borders & shadows
- No borders, soft shadows allowed: `0 4px 12px rgba(0,0,0,0.06)`
- Slight elevation on cards is fine

### Motion
- Spring-feel transitions for non-Shift
- For Shift: no motion (overridden)
- Hover micro-interactions OK on non-Shift (slight scale or shadow lift)

### Color application
- Background: `var(--canvas)` — possibly with a slightly warm or pastel-tinted alt section
- Text: `var(--fg-primary)` for headlines, `var(--fg-tertiary)` for body
- Brand accent: `var(--brand)` — used playfully across sections
- CTA: `var(--cta)` — chunky weight, slight shadow OK

### Don't
Harsh contrasts. All-caps headlines. Monochrome.

---

## Token cheat sheet

When rendering a variant, pull from the chosen aesthetic for layout +
type + spacing + radii. Pull from ODS (via `design-system-source.md`) for
all color tokens.

| What you're picking | Where it comes from |
|---|---|
| Type family | Aesthetic (always Zoho Puvi for ODS) + size scale from aesthetic |
| Section padding rhythm | Aesthetic |
| Card composition (bordered vs. shadowed vs. flat) | Aesthetic |
| Radii (within ODS scale) | Aesthetic decides which of the 5 ODS values |
| Background color | ODS — `var(--canvas)` or `var(--surface)` |
| Text colors | ODS — `var(--fg-primary)`, `var(--fg-tertiary)`, `var(--fg-on-dark)` |
| Brand accent | ODS — `var(--brand)` (resolves to product brand color) |
| CTA fill | ODS — `var(--cta)` (always ODS blue `#0047FF`) |
| Status colors | ODS — `var(--success)`, `var(--warning)`, `var(--error)`, `var(--info)` |
| Borders | ODS — `var(--line)` |

If the user later asks for a "small change" that violates the ODS color
system (e.g., "make the CTA orange"), flag the trade-off but defer to
them — though `--cta` should still come from `cta.json` if at all
possible.

## Don't let aesthetic = color

The most common failure mode is leaning entirely on the chosen aesthetic
and skipping the ODS color discipline. "Modern Minimal = white backgrounds
+ minimal styling" is incomplete. The aesthetic actually shows up in
**type weight, spacing rhythm, radius vocabulary, layout composition,
and label treatments** — together, those carry more identity than the
ODS color overlay. When rendering a variant, check:

- Have I used the aesthetic's typography rules (size scale, weight, tracking)?
- Have I used the aesthetic's spacing rhythm (section padding values)?
- Have I used the aesthetic's radius vocabulary (which of the 5 ODS values)?
- Have I composed the section per the aesthetic's layout DNA (asymmetric for Editorial, dense for Tech, etc.)?
- Are all colors coming from ODS tokens, not from generic aesthetic defaults?

If the only thing that says "Modern Minimal" about your variant is the
white background, you've under-shipped the aesthetic. If the only thing
that says "ODS" is the CTA color, you've under-shipped the design system.
Both layers need to be visible.
