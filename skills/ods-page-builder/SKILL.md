---
name: ods-page-builder
description: >
  Build Zoho marketing pages section-by-section using the Webflow/Framer
  variant-picking flow — show 3 layout options per section, get the user's
  pick, move on. Always uses real ODS tokens from the design system
  (colors, typography, CTA spec). Use this skill whenever the user wants
  to iterate on a Zoho marketing page interactively, including phrases
  like "build me a Shift landing page", "let's design a Zoho pricing
  page", "iterate on this section by section", "show me variants for
  the hero", or "build it like Webflow but with our brand". For
  one-shot generation (no variant picking) use `marketing-page-composer`
  instead. For non-Zoho client work use `page-builder` instead. Covers
  landing, feature, pricing, and about pages.
---

# ODS Page Builder

A section-by-section page builder for Zoho marketing pages. Combines the
Webflow/Framer variant-picking flow with real ODS design tokens.

## Why this skill exists

Designers iterating on Zoho pages need two things at once:
1. The variant-picking flow that forces real design decisions per section
2. Actual ODS tokens (real CTA color, real Shift indigo, real Zoho Puvi)
   so the page feels native to the brand from the first variant onward

Existing skills do one or the other. `marketing-page-composer` knows ODS
tokens but generates pages one-shot. `page-builder` has the variant flow
but uses generic aesthetics like `#4F46E5` indigo. This skill does both.

## Scope

Covers four page types: **landing pages, feature pages, pricing pages,
about pages.**

For a Shift-specific page, this skill loads and respects
`shift-visual-language` rules — its TOP RULES, banner rules, dark-theme
rhythm, and animation discipline override any aesthetic defaults that
conflict.

For non-Shift Zoho pages (generic Zoho marketing, Zoho One announcements,
docs landing pages), the skill applies ODS Light defaults from the
design system.

## When NOT to use this skill

- **One-shot generation** (no variant picking) — use `marketing-page-composer`
- **Non-Zoho client work** — use `page-builder` (it has Brutalist, Maximalist, etc.)
- **A single component or section** — write inline; don't invoke the skill
- **Brand themes for non-page artifacts** (PPTX, DOCX, social banners) — use `zoho-theme-factory`

## The flow

1. **Content intake** — accept whatever the user gives. Ask only what's missing.
2. **Aesthetic pick** — 4 ODS-compatible aesthetics (Modern Minimal, Editorial, Tech/Cyberpunk, Playful). User picks one.
3. **Product detection + theme load** — detect if this is a Shift page (or future CRM/Books). Load product theme tokens. If Shift, also load `shift-visual-language` rules.
4. **Section plan** — propose section order based on page type and content. Get user confirmation.
5. **Variant pick loop** — for each section, render 3 distinct variants, user picks one, move to next.
6. **Assembly** — produce one `index.html` and one `styles.css` in `/mnt/user-data/outputs/`, present to user.

Each step has its own section below.

## Step 1 — Content intake

Accept whatever the user shares: pasted copy, structured brief, description
of an existing page, wireframe sketch in words. Read once, identify what's
there, identify what's missing.

**Ask only the gaps that matter.** One or two targeted questions is the
ceiling. Don't run a 10-question intake form.

If the user mentions a Zoho product name (Shift, CRM, Books, Desk, etc.),
note it — that determines which theme file to fetch in Step 3.

If the user names a page type ("landing page", "pricing page", "about page",
"feature page"), note it — that determines section plan in Step 4.

## Step 2 — Aesthetic pick

Before any sections render, the user picks a visual direction. Read
`references/aesthetics.md` for the 4 ODS-compatible aesthetics:

- **Modern Minimal** — calm, white-dominant, Linear/Stripe/Vercel feel
- **Editorial** — magazine-feeling, type-driven, asymmetric
- **Tech / Cyberpunk** — dark, dense, terminal-feeling (developer/AI pages)
- **Playful** — friendly, energetic, brand-forward (announcements/launches)

Use `ask_user_input_v0` with these four as options so the user can tap
rather than type. Keep labels short. The reference file holds the detail.

Once they pick, the rest of the build inherits that aesthetic's layout
DNA, type rhythm, spacing, and radius vocabulary. **Color tokens still
come from ODS** (Step 3), not from the aesthetic's generic colors.

## Step 3 — Product detection and theme load

Read `references/design-system-source.md` for the fetch contract.

If the user named a Zoho product (e.g., "Shift signup page"):

1. Fetch `themes/<product>.json` from the marketplace repo for product brand colors
2. If product is Shift, also load Shift's TOP RULES from `shift-visual-language`. Hold those rules through every variant render and the final assembly.

If no product was named (generic Zoho marketing page):

1. Fetch only ODS-wide tokens (`colors.json`, `typography.json`, `cta.json`)
2. Apply ODS Light defaults

Either way, the CTA color always resolves from `cta.json` — ODS blue
`#0047FF` — never from the aesthetic's accent or the product's brand color.

## Step 4 — Section plan

Auto-detect which sections the page needs based on the page type and
content. Don't make the user list sections. Propose the order in plain
text:

> "Here's what I'd build for your Shift landing page, in this order:
> Hero → Logo cloud → Features (3-up) → How it works → Pricing teaser
> → Testimonials → FAQ → CTA → Footer. Want me to add, remove, or
> reorder anything?"

Default section orders for each page type are in `references/sections.md`
(ordering subsection). The catalog of which archetypes exist for each
section is also there.

After the user confirms, lock the plan. Move to Step 5.

## Step 5 — Variant pick loop (the core)

For each section in order, present 3 variants. The user picks one. Move on.

### 5a. Render three distinct variants

Open `references/sections.md`, find the section type, pick **three
archetypes that differ on layout DNA** — not three cosmetic shuffles
of the same layout.

Each variant must use:
- The chosen aesthetic's typography, spacing, and radius vocabulary
- ODS color tokens (from Step 3) for color
- Real user content — actual headlines, actual feature names, actual names
- For Shift pages, all `shift-visual-language` TOP RULES

**Before the first `show_widget` call** in the session, call
`visualize:read_me` with the `mockup` module so you have the host's
design tokens. Override the visualizer's surface defaults with inline
styles when the chosen aesthetic + ODS tokens demand it (the visualizer
is the rendering substrate, not the style guide).

Render each variant in its own `show_widget` call so the user sees them
as three separate visuals to compare.

### 5b. Variant ordering — A is daring, B is editorial, C is safe

The order in which you present the three variants matters. Most users
will mentally evaluate them top-to-bottom and absorb the safest option
as default. To prevent the "AI stack" rhythm where every section ends
up as the safest variant, **always order variants this way:**

- **Variant A** — the most editorially daring ODS-compatible option:
  asymmetric, off-axis, oversized, full-bleed brand, or
  composition-breaking. Push to the edge of what's defensible for the
  audience while staying inside ODS rules and (if Shift) the
  `shift-visual-language` discipline. Examples: full-bleed `#3940D0`
  banner hero, asymmetric 60/40 split with offset visual, oversized
  pull-quote testimonial at 56px headline-scale, bento grid with one
  hero feature taking 60% width.

- **Variant B** — the most editorial / text-led / typographically
  expressive option: large display type, narrow content column,
  generous whitespace, asymmetric layout where text is the focal
  element. Examples: editorial stacked hero with no visual, single
  oversized testimonial quote, hero-stat with paragraph wrapping
  around it.

- **Variant C** — the safest, most familiar option: centered, gridded,
  conventional. The pattern users have seen on every other SaaS
  site. Examples: centered headline + product screenshot below,
  3-up feature card grid, 3-up testimonial cards, 3-tier pricing cards.

**Never order three safe options as A/B/C.** If you cannot generate a
genuinely daring Variant A that respects ODS + product rules, say so
explicitly to the user — don't substitute another safe option.

This rule applies to the five **load-bearing sections** where design
character matters most:
- **Hero**
- **Features**
- **Testimonials**
- **Pricing**
- **CTA (final push)**

For utility sections (footer, logo wall, FAQ, navigation, stats band),
the daring rule is overkill — present three reasonable options in any
order. These sections are functional, not signature design moments.

#### Audience-aware softening

If the user mentions a **conservative audience** (healthcare, finance,
government, enterprise compliance) in the brief, you can soften
Variant A — but keep at least one structurally distinct option per set.
Don't collapse all three variants into safe defaults. A healthcare
landing page can still have an asymmetric hero or an oversized stat —
just less editorial flair than a Linear-style developer tool.

The default bias is **daring within ODS**: asymmetric splits, full-bleed
brand banners, oversized type, editorial layouts. Never things that
violate `shift-visual-language` or core ODS rules.

### 5c. The CTA rule across all variants

In every variant, every primary CTA uses the values from `cta.json`:
- Primary fill: ODS blue `#0047FF`
- Primary text: white
- Border radius: 4px
- Hover/active/focus states: as defined in `cta.json`

**Never use the brand color (Shift indigo `#3940D0`, future CRM color, etc.)
on a CTA.** This rule survives all aesthetic choices and all product themes.
The brand color goes on banners, surfaces, and accents — never on a button.

### 5d. The animation rule for Shift pages

If `shift-visual-language` is loaded, every variant must respect:
- No entrance animations on page load
- No scroll-triggered reveals
- No parallax or sticky-scroll sections
- Hover states only — tint shifts and 4px arrow translates

Even if the aesthetic suggests "subtle scroll-triggered reveals" (Modern
Minimal) or "fast snappy transitions" (Tech/Cyberpunk) or "spring-feel
with overshoot" (Playful) — the Shift product rule wins.

For non-Shift Zoho pages, the aesthetic's motion vocabulary applies.

### 5e. The variant selection UI

After rendering the three variants, write a one-line note for each
("A is bold and editorial, B is calm and product-forward, C is moody
and image-led") and use `ask_user_input_v0` with options:
- "Variant A"
- "Variant B"
- "Variant C"
- "None — try again with different directions"

If the user picks "None," generate three new archetypes (different from
the first three) and re-present.

### 5f. Track picks and keep momentum

When the user picks, briefly acknowledge it and move to the next section.
Don't re-render the picked variant on its own. Track picks internally:

- Hero: Variant B
- Logo cloud: Variant A
- Features: Variant C
- ...

### 5g. Rhythm intervention every 3 picks

Before generating variants for section N+3, look at the cumulative picks
for sections N, N+1, N+2. If the user has picked the same alignment,
density, or composition shape for 3 sections in a row, your next 3
variants MUST include at least one option that breaks that pattern.

When you make this intervention, name it explicitly so the user knows
it's deliberate:

> "I noticed you've picked centered layouts for the last 3 sections. For
> visual rhythm, I'm including a left-aligned editorial option as
> Variant A here."

This isn't optional. The page-level rhythm rule is what separates
designed pages from AI-stack output: every 3 sections back-to-back that
share alignment + composition shape collapse the page into "competent
but expected" — even when each individual section was a reasonable
choice.

**What to track across picks:**
- Alignment (left / centered / asymmetric / off-axis)
- Density (sparse with whitespace / dense with content)
- Background (white / brand banner / dark / light gradient)
- Composition shape (single column / 2-col split / grid / overlap / list)

A streak in any one of these dimensions is enough to trigger the
intervention. You don't need all four to be the same — three centered
sections in a row is a streak even if their backgrounds vary.

**Soft intervention only.** Don't lecture. Don't refuse to generate.
Just include the breaking option in the next variant set and name it
once. The user can still pick the safe option if they want — but they're
choosing the streak, not absorbing it as default.

### 5h. Fatigue checkpoint

For pages with 7+ sections, around the midpoint check in once: "We're
halfway. Want to keep picking variants for each remaining section, or
should I pick what fits best for the rest based on what you've chosen
so far?" If they fast-track, infer their taste from prior picks (do they
consistently pick centered? Most editorial option?) and apply that
pattern.

Don't ask this on shorter plans (≤6 sections) — the rhythm is the value.

## Step 6 — Final assembly

Once every section has a pick, build the deliverable:

1. **Produce `index.html`** — full page in section order, using picked
   archetype for each. Semantic HTML (`<header>`, `<section>`, `<footer>`,
   etc.). Link to single `styles.css`.
2. **Produce `styles.css`** — handwritten CSS with all ODS tokens at
   `:root` as CSS custom properties (semantic names: `--cta`, `--brand`,
   `--canvas`, `--fg-primary`, etc. — matching your design system's
   token names, not aesthetic-generic names).
3. **Save both files** to `/mnt/user-data/outputs/`
4. **Call `present_files`** with both paths — `index.html` first
5. **Briefly summarize** what was built — keep it short, the files are
   the deliverable.

### Quality bar for the final files

Before calling `present_files`, every box must be checked:

- [ ] CTAs use `var(--cta)` — never the brand color, never an aesthetic accent
- [ ] Brand color (`var(--brand)`) appears on banners, accents, link highlights — never on a button
- [ ] If Shift page: at least one solid `#3940D0` banner and at least one dark `#161B63` section
- [ ] Type uses Zoho Puvi (or fallback `'Zoho Puvi', 'Inter', system-ui`)
- [ ] Border radius uses ODS scale: 0, 4, 8, 12, or 999 (never 16, 20, 24)
- [ ] No entrance animations on Shift pages; aesthetic motion otherwise
- [ ] Mobile-responsive at 380px / 768px / 1280px
- [ ] WCAG AA color contrast for body text
- [ ] Real copy throughout — no Lorem ipsum, no `[Your tagline here]`
- [ ] Logo placeholders look intentional (word marks in the right typeface, not generic icons)
- [ ] No external dependencies the user has to install (Google Fonts via `<link>` is fine)

## Reference files

- `references/aesthetics.md` — 4 ODS-compatible aesthetics with full token sets, with brand colors mapped to ODS
- `references/sections.md` — section archetypes for landing/feature/pricing/about pages, plus default section orders
- `references/design-system-source.md` — fetch contract for ODS tokens from the marketplace repo

## Working with `shift-visual-language`

When this skill builds a Shift page, `shift-visual-language` is loaded
in parallel. Their relationship:

| Layer | What it provides |
|---|---|
| `shift-visual-language` | Shift's TOP RULES, brand-vs-CTA rule, banner spec, dark theme rhythm, animation discipline |
| `ods-page-builder` (this skill) | Page assembly flow, variant picking, section plan, layout vocabulary |
| `design-system/themes/shift.json` | Raw color values (primary scale, surface-dark) |
| `design-system/components/cta.json` | CTA spec (states, sizes, radii) |

When rules conflict between this skill's aesthetic and `shift-visual-language`,
the product rule wins. Specifically: animation defaults from the aesthetic
are overridden by `shift-visual-language`'s "no entrance animations" rule.

## Anti-patterns to refuse

If you find yourself producing any of these, stop:

- **Brand color on a CTA.** `var(--cta)` is ODS blue. The brand color (Shift indigo, etc.) goes on banners and accents.
- **Three cosmetic shuffles as "variants."** Variants must differ on layout DNA — composition, focal element, content positioning.
- **Aesthetic accent overriding ODS.** "Tech/Cyberpunk says lime accent" — no, the accent comes from ODS, the aesthetic provides the layout/rhythm/typography.
- **Hardcoded hex values in the final CSS.** Use semantic tokens (`var(--cta)`, `var(--brand)`, `var(--fg-primary)`). Hex only in the `:root` declaration.
- **The AI stack.** Centered hero → 3-column features → centered testimonial → centered pricing → centered CTA. All variants for adjacent sections must differ on alignment, density, or composition shape.
- **Lorem ipsum.** Use real user content. If something is missing, ask once.
- **Imagined product UI.** Use real Shift screenshots from `themes/shift.json` references when available; for other products, use placeholder containers labeled with product UI intent.
