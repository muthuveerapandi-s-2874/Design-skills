---
name: marketing-page-composition
description: Generate modern, custom-feeling single-file HTML webpages with strong structural variety — varied hero styles, mixed feature presentations (cards, tabs, large highlights), asymmetric grids, layered elements, and intentional visual rhythm. Use this skill whenever the user asks to build a marketing landing page, product feature page, pricing page, sector/industry page, or competitor/alternative page — even if they say "webpage", "site", "section", or just describe a page they want built. Especially trigger when the user wants something that "doesn't look like a template", "feels custom", "is conversion-focused", or "looks modern" — this skill exists specifically to break out of repetitive stacked-section AI defaults.
---

# Marketing Page Composition

A skill for generating webpages that feel custom-crafted, not template-stamped.

The default failure mode for AI-generated webpages is a predictable vertical stack: centered hero with a heading, two buttons, and a hero image, then a three-column "features" grid, then a centered testimonial, then a centered pricing table, then a CTA band. Every section is full-width, centered, and uses the same vertical rhythm. The result reads as "an AI made this."

This skill exists to fight that default. It does not give you templates to fill in. It gives you a vocabulary of structural moves and a discipline for choosing among them — so each page you build feels considered, varied, and human.

## What this skill produces

A single self-contained HTML file with inline `<style>` and inline `<script>` (if needed). No build step. No external CSS frameworks unless the user asks for one.

If your CSS grows past ~400 lines, consider splitting it into a separate file. Single-file is for quick prototypes and skill demonstrations, not for long-lived production pages.

The deliverable is one file the user can open directly in a browser.

## Page types this skill covers

This skill applies to any of these page types:

- Marketing landing page
- Product feature page
- Pricing-only page
- Sector / industry page
- Comparison / alternative page

The page type determines which sections are mandatory. See `references/page-types.md` for the playbook of each.

## The core principle: variation is the design

Most "modern" feels in webpage design come not from any single trick but from the page's **rhythm of difference**. Each section should feel structurally distinct from the section above and below it. If you can describe two adjacent sections with the same sentence ("centered text with three columns of cards"), one of them needs to change.

The variation lives in five dimensions, and you should consciously vary at least three of them between any two adjacent sections:

1. **Alignment** — left, right, centered, asymmetric (40/60, 30/70), justified
2. **Density** — sparse (lots of whitespace, one big idea) vs. dense (information-rich, multiple data points)
3. **Scale** — text size hierarchy ranging from oversized display type to small captions; image scale from full-bleed to inset
4. **Background** — flat, gradient, image, dark-on-light, light-on-dark, bordered/contained vs. full-bleed
5. **Composition shape** — single column, two-column, grid, overlap/layered, diagonal, off-axis

If two adjacent sections vary on only one or two of these, the page reads as monotonous even when the content is good.

## Workflow (REQUIRED — do not skip steps)

When the user asks for a page, work in this exact order. Skipping the rhythm table is the most common failure mode.

### Step 1: Identify the page type

Marketing landing, product feature, pricing-only, sector/industry, or comparison/alternative. The page type determines which sections are mandatory (see `references/page-types.md`).

### Step 2: Read the relevant page-type playbook

Pricing-only pages don't need a "what is the product" section. Sector pages lead with the sector's pain, not the product's features. The playbook tells you what's mandatory and what to skip.

### Step 3: Fill in the rhythm table BEFORE writing any HTML

This step is mandatory. Output the table as part of your response, before any code. Do not skip it. Do not abbreviate it. Filling in this table is what prevents the AI stack failure mode.

For each section, fill in all five dimensions:

```
| # | Section          | Alignment   | Density | Scale     | Background    | Composition   |
|---|------------------|-------------|---------|-----------|---------------|---------------|
| 1 | Hero             | asymmetric  | sparse  | oversized | light-contain | 2-col split   |
| 2 | Logo wall        | centered    | sparse  | small     | light-contain | row grid      |
| 3 | Bento features   | mixed       | dense   | mid       | light-contain | mixed grid    |
| 4 | Big highlight    | asymmetric  | mid     | mid       | dark-bleed    | 2-col split   |
| 5 | Stat band        | centered    | sparse  | oversized | light-contain | 3-up row      |
| 6 | Testimonial      | left        | sparse  | oversized | light-contain | single col    |
| 7 | Pricing          | centered    | dense   | mid       | light-contain | 3-up grid     |
| 8 | Final CTA        | centered    | sparse  | oversized | dark-bleed    | single col    |
```

Then check every adjacent pair: how many dimensions are different? Aim for 3+ differences on every pair.

If any adjacent pair shares 3+ dimensions (i.e., differs on 2 or fewer) — STOP and revise. Pick a different pattern for one of them. Fix the table. Then proceed.

This is not optional advisory output — it's the required gate before code.

### Step 4: Pick patterns for each section

Now consult the reference files for concrete pattern shapes:

- **Hero** → `references/hero-patterns.md` — pick by alignment + composition you wrote in the table
- **Feature sections** → `references/feature-patterns.md` — never use the same pattern twice on one page
- **Supporting sections** → `references/supporting-sections.md` — testimonial, metrics, pricing, CTA, logo wall, FAQ

### Step 5: Write the HTML

Inline CSS in `<style>`, inline JS in `<script>` if interactivity is needed. Prefer CSS Grid over Flexbox for page-level layout — Grid is what enables the asymmetric and overlapping compositions that make pages feel custom.

### Step 6: Self-check against the quality bar

Before delivering, verify the binary checks below. Every box must be checked. If any fails, revise.

## Anti-patterns to refuse

If you find yourself producing any of these, stop and pick a different pattern:

- **The AI stack:** centered hero → 3-column feature grid → centered testimonial → centered pricing → centered CTA. This is the default this skill exists to prevent. See `references/before-after.md` for a concrete example.
- **Identical adjacent sections:** two card grids back-to-back, two centered text blocks back-to-back, two split-screen sections back-to-back with the image on the same side.
- **All-centered everything:** if every section's content is horizontally centered, the page has no visual rhythm. Centering should be a deliberate choice for one or two sections, not the default for all.
- **The two-button hero:** "Get Started" + "Learn More" side-by-side, both pill-shaped, primary and ghost. Allowed once per page if the page genuinely has two equally-important CTAs, but most pages have one primary action — make it singular and confident.
- **Lorem-ipsum-shaped copy:** placeholder phrases like "Powerful features for modern teams" or "Built for scale". If the user gave you real product context, use it. If not, write copy that's specific enough to be wrong — that's better than copy so generic it could be about anything.
- **The screenshot-shaped rectangle:** a grey 16:9 box with "Product Screenshot" written in it. If you can't include a real image, build something visual in HTML/CSS — a mock UI, a code snippet with syntax highlighting, an animated diagram, a styled data table. Empty placeholder boxes deflate the page.
- **Three-column everything:** when in doubt, AI defaults to three columns. Mix it up — a 2-column with one wide and one narrow, a 5-up logo strip, a 4-up small-card grid, a single hero feature with three supporting bullets to the right.

## Composition moves that buy you "modern"

Use these as a vocabulary, not a checklist. Reach for them when a section feels flat:

- **Asymmetric splits.** 40/60 or 60/40 instead of 50/50. The unequal weight creates focus.
- **Layered/overlapping elements.** A card that overlaps the section above it. An image that breaks out of its container. A heading that overlaps a background graphic. CSS Grid + negative margins + `z-index` make this easy.
- **Off-grid type.** A heading that doesn't start at the section's left margin — pull it left into the gutter, or push it right past center. Used sparingly, this signals "designed by a human."
- **Mixed type scale.** One section with a 96px headline next to a section with a 32px headline. The size shift between sections creates rhythm.
- **Stat-as-design-element.** A single huge number (e.g., "10×") used as a typographic anchor, with supporting context wrapped around it.
- **Eyebrow + headline + dek pattern.** Small uppercase eyebrow (12-14px, letter-spaced), large headline, medium body — used sparingly for sections that need editorial weight.
- **Bordered cards vs. floating cards.** Mix shadowed/floating cards in one section with bordered/flat cards in another. Don't use both styles in the same section.
- **Full-bleed sections in a contained page.** If most of the page is in a max-width container, a full-bleed section (gradient or image background) creates a strong visual break.
- **Diagonal or curved section dividers.** Used at most once or twice per page. SVG dividers between sections are stronger than straight horizontal lines.

## Reference files

When you actually start building, consult these. They have concrete patterns with code-shape descriptions:

- `references/page-types.md` — which sections each page type needs
- `references/hero-patterns.md` — eight distinct hero compositions with when to use each
- `references/feature-patterns.md` — feature presentation patterns: cards, tabs, large highlights, mixed grids, scrolljacked sequences
- `references/supporting-sections.md` — testimonial, metrics/stats, pricing, CTA, logo wall, FAQ patterns
- `references/structural-rhythm.md` — a worked example of how to plan a page's section-by-section variation before writing code
- `references/before-after.md` — concrete side-by-side: AI-stack page vs. rebuilt page with proper rhythm

For any page you build, you'll typically read `page-types.md` plus one or two of the others depending on what the page needs.

## Working with brand systems

This skill is brand-agnostic by default — it produces structurally good pages with neutral typography and a placeholder color palette. If the user has a brand system loaded (Zoho/ODS, ZeptoMail, Zoho Shifts, or any other), defer to that brand skill for color tokens, typography, CTA color, and component styling. This skill stays in its lane: composition and structure. Brand skills stay in theirs: color and visual language.

When both this skill and a brand skill are active, the page should use the brand's tokens but this skill's structural variety. The brand decides what red looks like; this skill decides where the section breaks happen.

## Quality bar (binary checks — every box must be checked before delivery)

Each check below is binary. Don't deliver until every box is checked.

- [ ] Did I output a complete rhythm table before writing HTML?
- [ ] Does every adjacent section pair differ on at least 3 of the 5 dimensions?
- [ ] Is at least one section using asymmetric alignment (not 50/50, not centered)?
- [ ] Is at least one section full-bleed (escapes the contained max-width)?
- [ ] Is at least one headline oversized (>72px on desktop)?
- [ ] If there are 2+ feature sections, do they use different patterns from `feature-patterns.md`?
- [ ] Is there exactly one primary CTA per major section (not multiple equal-weight buttons)?
- [ ] Is every visual either a real asset OR a substantive HTML/CSS construction (not a "Product Screenshot" placeholder rectangle)?

If any check fails, revise before delivering.
