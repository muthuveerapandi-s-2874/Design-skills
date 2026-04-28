---
name: shift-visual-language
description: >
  Visual language for the Zoho Shift product — covers marketing website
  (zoho.com/shifts), product UI, landing pages, and any Shift-branded surface.
  Covers visual aesthetic, page composition rhythm, dot/grid patterns,
  light gradient banners, page structure library, icons, accent colours,
  and animation character. Defers to ODS design system for colours,
  typography, spacing, radius, CTA, screenshots, banners, dark theme,
  WCAG, logo, and stock-image rules — those live in the design-system
  files and ODS skills. Triggers on explicit naming only: "Shift visual
  language", "Shifts design", "Shifts brand guideline", "Shifts website",
  "Shifts landing page", or similar. Does NOT trigger on generic "Zoho"
  work or other products.
---

# Shift Visual Language

**The product:** Zoho Shift — employee scheduling and time-tracking software
for SMBs. Use cases: shift scheduling, time clock, shift swapping, team
messaging, leave management. The marketing website lives at zoho.com/shifts.

**Scope:** Shift's full visual language — applies to the marketing website
(home, product, pricing, docs, blog), product UI, landing pages, and any
other Shift-branded surface. One visual language across all page types.

**Relationship to ODS:**

This skill sits on top of the ODS design system. It does **not** redefine
components, tokens, or accessibility rules — those all come from ODS.

**This skill reads from:**
- `design-system/components/*.json` — buttons, inputs, cards (use as-is)
- `design-system/tokens/spacing/spacing.json` — spacing scale
- `design-system/tokens/radius/elevation-radius.json` — radius + elevation
- `design-system/tokens/typography/typography.json` — type scale
- `design-system/themes/shift.json` — Shift's colour palette
- `design-system/accessibility/rules.md` — WCAG 2.1 AA base rules
- `skills/ods-design-system/products/shift.md` — Shift product guardrails

**This skill owns** (Shift-specific marketing craft — not covered by ODS):
visual aesthetic, page composition rhythm, dot/grid patterns, light gradient
banner mechanics, page structure library, icons usage discipline, accent
colour application, and animation character.

**This skill defers to** (covered elsewhere — do not duplicate here):
- Colour values and tokens → `design-system/themes/shift.json` + `themes/shift.css`
- Typography scale → `design-system/tokens/typography/typography.json`
- Spacing scale → `design-system/tokens/spacing/spacing.json`
- Radius values → `design-system/tokens/radius/elevation-radius.json`
- CTA spec (variants, sizes, states, hover) → `design-system/components/cta.json`
- WCAG / accessibility → `design-system/accessibility/wcag.checklist.json`
- Banner colour rules, dark theme rhythm, screenshot conventions, logo
  usage, stock-image rules → ODS-wide design system documentation

**The rule:** when this skill and ODS disagree, ODS wins.

---

## TOP RULES — read first, never forget

These rules override every other section in this file. If anything below
seems to contradict, **these win.**

### Brand colour vs CTA colour — they are different

- **`--brand` = `#3940D0`** (Shift indigo). Used for: section banners,
  dark surfaces, links, accents, decorative elements.
  **NEVER on a CTA fill, border, or text.**

- **CTA colour = `#0047FF`** (ODS blue, from `cta.json`). Used for: every
  primary CTA on every Shift page, on every surface.
  **The CTA colour is the same on every Zoho product** — that's the
  whole point of the shared component.

### Hard rules

1. **Every CTA variant** (primary, primaryLine, secondary, secondaryLine,
   tertiary) **comes from `design-system/components/cta.json` as-is.**
   Read the JSON; do not invent variants.

2. **Primary CTA fill is `#0047FF`. Never `#3940D0`.** A line like
   `.btn-primary { background: var(--primary) }` where `--primary` is
   Shift indigo is a hard violation — use `cta.json`'s `colors.blue.500`
   token (`#0047FF`) instead.

3. **CTAs do not flip on banners or dark sections.** No `.btn--white`
   variant on Shift-indigo banners. No surface-based recolouring. The
   only documented exception is contrast failure on solid `#3940D0`
   banners — and the exception is to use `primaryLine` (white
   border, white text), not to invert the primary fill.

4. **Brand `#3940D0` lives on backgrounds, NEVER on CTAs.** Hero banners,
   dark sections, accents — yes. Buttons — no.

5. **Components do not have product-specific colour variants.** Every
   Zoho product's CTA looks identical. Brand differentiation lives on
   the surface, not on the button.

If you remember nothing else from this file, remember rule 2.

---

## 1. Visual Aesthetic & Creative

**The feeling:** Warm and human — built for real teams. Scheduling is a messy, people-heavy problem (servers swapping Saturday night, a manager covering a call-out at 6am). The site should feel like it was made by someone who understands that — not a generic SaaS marketing machine.

**The creative register:** Restrained. Quiet craft, never loud. Confidence comes from typography, spacing, and real product UI — not from decorative flourish, oversized gradients, or "look at me" animation. If a section is catching your eye because of its decoration, it's wrong. It should catch your eye because the content is sitting right.

**The lead principle:** Real product UI, not illustrations. Every time the page needs a visual, the first move is a real product screenshot — a real shift card with Alex on Saturday 10–6, a real time-clock reading 09:02, a real swap request. Illustrations and AI imagery are fallbacks, not defaults. This is the single biggest thing that separates a Shifts page from generic SaaS.

**The three-part test — every page must pass all three:**

1. Does it feel made for real teams, not for a pitch deck? (warm & human)
2. Is every visual element doing work, or is some of it decoration for its own sake? (restrained)
3. Would a shift manager recognize the product from the screenshots alone? (real UI first)

---

## 2. Senior Web Designer

**The bar:** Every page must read as the work of a senior web designer — someone with ten years of restraint, taste, and instinct for what to leave out. Not someone competent. Someone who's built enough to know what not to do.

**The six traits every page must show:**

1. **Intentionality.** Every element is there on purpose. If you can't say *why* a card, divider, or icon exists, it doesn't exist. Senior designers cut first, add second.
2. **Balance.** Type, color, whitespace, and imagery are in harmony across every section. No section visually outweighs the next unless the hierarchy calls for it. The page has a center of gravity.
3. **Restraint.** One idea per section. One primary CTA per viewport. One accent tile per card. When in doubt, subtract. Decoration without a job is the first tell of amateur work.
4. **Rhythm.** Sections don't all look alike and they don't all compete. The eye moves down the page through varied-but-related beats — text, visual, text, dark, visual, CTA. Spacing and structure carry the rhythm, not color changes.
5. **Craft in the details.** Radii on scale. Spacing on scale. Type weights pick from two (not five). Shadows soft, not dramatic. Icon tiles aligned to the grid. The little stuff is where senior shows up.
6. **Editorial confidence.** Headlines aren't hedged. Copy is direct. The page doesn't over-explain itself with badges, labels, tooltips, or "learn more" links everywhere. It says its thing and trusts the reader.

**The single ship test:** *"Can this page sit next to zoho.com/en-in/erp/ on the same domain without looking worse?"* If the answer is "probably fine" — rebuild it. The answer has to be an unambiguous yes.

**What makes a page look amateur (the #1 tell):** Templated, over-decorated, generic SaaS. You've seen the look — three feature cards with icon tiles, a gradient hero, a stats strip, a testimonial slider, a CTA. Everything is present. Nothing is chosen. Every time a page looks like it could belong to any SaaS product with the logo swapped, it fails this section. The fix is almost always: subtract decoration, increase spacing, commit to one idea per section.

### Vibrancy principle

Zoho pages should feel **bright, fresh, and confident** — not washed out, not apologetic, not corporate-bland.

1. **Use accent base colors (500) at full saturation.** When an accent appears — a cyan icon tile, a sky badge, a royal blue chip — it uses the base 500 hex at full opacity. Never dim with alpha or tint with grey.
2. **Status colors read vibrant.** Green `#05B488`, orange `#E14F06`, red `#BA0530` appear on pills and dots at full strength. Soft pastel versions exist only as paired backgrounds (`success-bg`, `warning-bg`, `error-bg`) with the dark text variant on top.
3. **Multiple accent icon tiles per page are encouraged** (within the 2-accent max rule) — they add color life across the page. A page of white cards with grey icons is wrong.
4. **Shadows stay soft but cards stay bright.** Elevation comes from shadow, not from dimming card content.
5. **Whitespace is the brightener.** A cramped page feels dim regardless of the colors. Follow the ODS spacing scale (`design-system/tokens/spacing/spacing.json`) — generous padding keeps the page feeling airy and vibrant. **When something feels off, add spacing before adding color.**

### Screenshot / product UI rules

When the page includes product screenshots or UI fragments:

1. **Show only what's needed** — one specific moment; strip chrome, menus, sidebars unless directly relevant.
2. **No decorative annotations on the screenshot** — no arrows, no "click here" labels, no callouts overlaid on the UI.
3. **Real, plausible data** — `09:02`, `Alex`, `42 shifts`. Never `Lorem ipsum` or `Item 1 / Item 2`.
4. **No extra decoration around the screenshot** — soft shadow is enough. No glow rings, sparkles, or badges unless the composition explicitly calls for one status pill.
5. **Crop tight** — if UI needs room to breathe, increase container padding, not the image's internal whitespace.

### No stock imagery — non-negotiable

**Stock photos and stock illustrations are forbidden. No exceptions.** Stock kills the "senior designer" quality bar and makes pages feel templated.

**Fallback order when content needs a visual:**

1. **HTML/CSS UI mocks first.** If the content describes a shift calendar, time clock, chat thread, conflict alert, or dashboard, build it as real markup using the skill's cards, tokens, and status colors. This is the default — what produces the feature-page UI fragments.
2. **Read the content; make the visual match it.** If the copy says "Jordan requested a swap for Saturday 10–6," the visual shows a card with Jordan's name, Saturday, and those exact times. Never a generic person, never a generic calendar.
3. **AI-generated imagery only when HTML/CSS can't carry it** (hero illustrations, abstract concepts). Direct the generation to match the skill aesthetic — warm neutral canvas, soft editorial lighting, primary blue accents. Never generic corporate-SaaS output.
4. **People → initials avatars**, never photos. Use accent-palette fills — `AL` on cyan `#00B4D2`, `JO` on sky `#5A8CFF`, `MO` on royal blue `#2264DC`. Never stock headshots or AI-generated photorealistic faces. If a real face is genuinely needed, comment `needs real customer photography` and leave a placeholder.

**Forbidden explicitly:** Unsplash, Pexels, Pixabay, Shutterstock, iStock, Getty, Adobe Stock, any stock library; generic office/handshake/laptop/team photography; isometric SaaS illustrations ("people at desks," "floating dashboards," "hands holding phones"); placeholder services (placeholder.com, picsum.photos) even as mockup.

**The test:** If the visual could appear on any other SaaS site unchanged, it fails. Every Zoho Shifts visual should look specifically like it belongs to Zoho Shifts.

---

## 5. Pattern

**Two patterns carry the whole system: Dotted and Grid.** The old Hatch pattern is retired. One pattern per section — never layered.

Both patterns come from ODS tokens — opacity, line weight, and color are defined there, not re-declared in the skill. Use the ODS token; don't hand-tune the `rgba()` value.

### Pattern A — Dotted

**Where it goes:**
1. **Behind every product screenshot** — as the radial-fade zone that frames the UI mock (see §Screenshot Rules). The screenshot sits on the page, the dots fade in around it. No container box, no border.
2. **On dark-theme `#161B63` sections** — the dots appear at low opacity over the dark surface, giving the dark beat a subtle texture. Stops the dark section from feeling like a flat void.

**Where it does NOT go:**
- Not on plain white content sections (those stay clean white).
- Not on banners (dotted on banners reads as noise — banners use grid).
- Not on footers.
- Not inside cards or icon tiles.

```css
/* Reference shape — use ODS tokens for color + opacity */
.bg-dots {
  background-image: radial-gradient(circle, var(--pattern-dot-color) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Pattern B — Grid

**Where it goes:** Wherever you want, as editorial softening — most commonly:
1. **Banners** (both solid primary and light gradient) — white or tinted grid lines at low opacity.
2. **Footer** — dark grid lines on the footer surface.
3. **Any content section** where a plain-white expanse needs a touch of structure (rare — default is plain white).

**Where it does NOT go:**
- Not behind screenshots (that's dotted territory).
- Not on dark `#161B63` sections (that's dotted territory).
- Not stacked with dotted on the same surface.

```css
/* Reference shape — use ODS tokens for color + opacity */
.bg-grid {
  background-image:
    linear-gradient(to right, var(--pattern-grid-color) 0.5px, transparent 0.5px),
    linear-gradient(to bottom, var(--pattern-grid-color) 0.5px, transparent 0.5px);
  background-size: 40px 40px;
}
```

### Hard rules

1. **Dotted = screenshots + dark sections. Grid = banners, footer, optional editorial use.** Getting this backwards (grid behind a screenshot, dotted on a banner) is a signature of an amateur page.
2. **One pattern per section. Never combine.** No dotted overlaid on grid. No grid on a dark section with dots. A section has one pattern or zero patterns — never two.
3. **Plain white (no pattern) is the default** for every content section that isn't a screenshot zone. When in doubt — no pattern.
4. **Opacity comes from ODS tokens.** Don't invent values. If a pattern feels too strong or too faint, check that the ODS token is being applied — don't override it with an arbitrary `rgba()`.
5. **Hatch is retired.** Don't introduce a third pattern. If a section needs something extra, it probably needs more whitespace — not another pattern.

### Typical page pattern sequence

| Section | Pattern |
|---|---|
| Hero banner (solid primary or light gradient) | Grid |
| Hero screenshot (on white) | Dotted radial-fade around the screenshot |
| Intro text section | Plain white |
| Deep-dive screenshot | Dotted radial-fade around the screenshot |
| Deep-dive text section | Plain white |
| **Dark section 1** | Dotted (low opacity over `#161B63`) |
| Feature grid | Plain white |
| **Dark section 2** | Dotted (low opacity over `#161B63`) |
| CTA banner | Grid |
| Footer | Grid |

### The "if you remember one thing"

**Dots behind UI, grid behind banners.** Everything else is plain white.

Goal: considered rhythm, not wallpaper.

---

## 8. Light Gradient theme

The light gradient `linear-gradient(180deg, #B4BCEE 0%, #EEF0FB 100%)` is the skill's "light theme" surface, and it appears **as a banner flavor only**. It is not a separate theme, not a section background, and not a page variant.

**Hard rules:**

1. Banner-only — never a section background, card fill, or hover state.
2. Direction fixed: top-to-bottom, `#B4BCEE` at top → `#EEF0FB` at bottom.
3. Used for inner product / feature / docs / pricing pages (home and landing use solid primary instead).
4. Text on the gradient is dark: H1 `#161B63`, body `#55597A`. White text on this surface fails contrast.
5. Grid pattern overlay at low opacity (per §5 Pattern). Never dotted.

---

## 13. Structure Library

**Where it lives:** `references/structure-library.md` — a curated set of **20 proven section patterns (S1–S20)**. Each structure documents a proven composition: column split, element order, visual treatment, recommended use cases.

**What it's for:** a menu of compositions the designer can reach for when building a page. Faster than freestyling, and the patterns are battle-tested across Zoho marketing pages — so pages built from the library already feel on-brand before anything is tuned.

**How to use it:**

1. **List the page's content beats** — hero, feature group A, deep-dives, feature group B, dark sections, CTA. Write them down.
2. **Open `references/structure-library.md`** and browse the 20 structures. Pick one that fits each beat.
3. **Build the section using the structure's documented layout** — element order, column split, visual treatment.
4. **Vary structure types across a page** to keep rhythm. Don't use the same structure three times in a row unless it's deliberate (e.g. a run of alternating deep-dives).

### Hard rules

1. **Use the library when it helps — not because you have to.** The structure library is a tool for the designer, not an audit gate. No required structure-map comment at the top of HTML output. No rebuild-on-failure rule.
2. **If nothing fits perfectly, adapt the closest one** rather than building from scratch. The library is built from what works — inventing a new layout usually produces something worse than the closest library fit.
3. **Don't repeat the same structure ID three times in a row** unless the rhythm is intentional. Variation across the page is how structures compose into a whole.
4. **When two structures both fit, pick the simpler one.** A hero with a single visual (S1) beats a hero with a media duo (S2) when the content doesn't justify two visuals.

### The "if you remember one thing"

**The Structure Library is a menu, not a gate. Open it when you're building a page — not because a rule says to, but because the answer is probably already in there.**

---
## 16. Icons

**Library:** [Iconex](https://www.figma.com/design/1AoH3qZqIgyrSM0kY99vAf/Iconex---Freebie-icons--Community-?node-id=0-1) — a stroke-style icon set from the Figma Community. The whole site uses this one library. No mixing — not Lucide, not Phosphor, not Material, not custom one-offs. One library keeps every icon in visual agreement across the page.

If an icon doesn't exist in Iconex, either pick the closest match or request it — don't grab a substitute from another library, because stroke weight and proportions won't line up and the inconsistency shows.

### Style

**Stroke (outline) only.** No filled icons, no duotone, no 2-color.

### Stroke weight

**2px everywhere.** One weight across all sizes and contexts. Use `vector-effect: non-scaling-stroke` to keep the stroke visually at 2px when scaling. If Iconex ships at a different default, re-stroke before use.

### Sizes

Four sizes — 16, 20, 24, 32 — picked by context, not by personal taste.

| Size | Use |
|---|---|
| **16px** | Inline with body text (trailing arrow in CTAs, inline info icons in running text, small status indicators) |
| **20px** | Inside 40px icon tiles (feature cards, nav items with icons) |
| **24px** | Standalone icons in content (feature callout icons, section-opener icons, slightly larger nav icons) |
| **32px** | Hero moments only (a single prominent icon in a hero feature card, or inside a 56–64px tile for a bold accent block). Rare. |

Nothing in between — no 18px, no 22px, no 28px. If a size doesn't fit one of the four, the surrounding component is probably wrong, not the icon.

### Color

**Single dark color only — `--secondary` `#161B63`.** Every icon on the site uses this one color. No blacks, no greys, no accent-colored icons, no per-icon color choices.

**Three exceptions** — narrow, specific, non-negotiable:

1. **On dark `#161B63` sections** — flip to `#FFFFFF`. No other color is acceptable on dark.
2. **Status/state icons inside the product UI only** — inside a product screenshot, status icons (green check, orange warning, red error) stay their status color.
3. **CTA trailing arrow** — matches the CTA's text colour per `design-system/components/cta.json` (white on `primary`, ODS blue `#0047FF` on `primaryLine`).

**Icons inside accent-colored tiles:** the tile fill carries the accent color; the icon inside stays `#FFFFFF` on a full-saturation tile, or `#161B63` on a light-fill tile.

### Hard rules

1. **Iconex only.** No mixing libraries.
2. **Stroke style only**, **2px weight everywhere** (use `vector-effect: non-scaling-stroke`).
3. **Four sizes: 16, 20, 24, 32.** Nothing else.
4. **Single icon color — `#161B63` on light, `#FFFFFF` on dark.** Exceptions only for status icons inside product screenshots and CTA trailing arrows.
5. **Icons inside tiles are centered with equal padding.**
6. **Decorative icons get `aria-hidden="true"`.**

### The "if you remember one thing"

**Iconex, stroke 2px, single color `#161B63` (white on dark). Four sizes: 16/20/24/32.**

---
## 17. Use of Accent Colours

**Four accents, sourced from ODS Shifts brand.** Everything about them — base hex, light-fill variant, text-on-light variant — comes from the ODS color system. Don't hand-roll accent tints.

### The four accents

| Accent | Name | Base 500 | Light 50 | Text 700 |
|---|---|---|---|---|
| `--accent-sharing` | **Cyan** | `#00B4D2` | `#E0F8FC` | `#007286` |
| `--accent-knowledge` | **Sky** | `#5A8CFF` | `#EEF3FF` | `#2A56BC` |
| `--accent-experience` | **Royal Blue** | `#2264DC` | `#E7EEFB` | `#144294` |
| `--accent-tech` | **Deep Indigo** | `#0A0046` | `#ECE9F6` | `#06002E` |

Full 11-stop scales (50 → 950) exist in the ODS system for each accent. The three above cover the common cases (light fill, base, text-on-light-fill) — reach for intermediates only when a specific pattern calls for them.

### What accents are for

**Both categorical and decorative.** Accents don't need to "mean something" to be used — they're a free tool for the designer to add color life across a page.

- **Categorical use** — when sections or cards represent different types of content (e.g. four features in a grid, each with its own icon tile color). Good: the accent reinforces the distinction. The designer can also reuse the same accent for the same feature across the site (Team/Messaging → Cyan on every page it appears) — this is helpful for recognition but not required.
- **Decorative use** — when a page just needs warmth and visual rhythm. A single accent tile beside a feature name, an accent-colored pull quote, an accent pattern behind a hero — all fine, even if the accent isn't "standing for" a category.

### No per-page cap

The old "max 2 accents per page" rule is gone. Designer picks per page. Common patterns:

- **A feature grid with 4 cards** can use all 4 accents — one per card tile. Not a rainbow, not amateur — it's the accents doing exactly what they're for.
- **A simple page** might use just one accent for an icon tile and nothing else. Also fine.
- **A busy page** that already has a lot of product UI visible might use zero accents — the UI's own colors carry the color life.

The test isn't a count — it's whether the page still reads as restrained (§2). If accents feel like noise, subtract; if the page feels monochrome and cold, add.

### Icon-tile pattern (surface-aware)

The most common accent use is inside 40px icon tiles (feature cards, nav items). The tile treatment changes with the surface it sits on:

| Surface | Tile fill | Icon color |
|---|---|---|
| White / light gradient section | Light 50 (e.g. `#E0F8FC` for Cyan) | Base 500 (e.g. `#00B4D2` for Cyan) |
| Dark `#161B63` section | Base 500 (e.g. `#00B4D2` for Cyan) | White `#FFFFFF` |

On light surfaces, the tile is the soft fill and the icon carries the saturated color. On dark surfaces, the tile carries the saturated color (so it reads against the dark bg) and the icon flips to white. Don't use light-50 tiles on dark — they almost disappear.

### Other accent patterns

- **Accent pills/badges** — Base 500 fill + white text, or Light 50 fill + Text 700 text. Both are valid; pick one per page and stay with it.
- **Accent underline/highlight** — a 3px Base 500 underline below an H2 or callout header.
- **Accent pull quote** — Text 700 for the quote body, Base 500 for the quotation-mark glyph.
- **Accent section divider** — accents can replace primary blue on section dividers if the page's narrative calls for it.

### What accents never do

1. **Accents are not CTA fills.** CTAs come from `design-system/components/cta.json` (ODS blue `#0047FF`). Accents never replace the CTA colour, and `#3940D0` is never on a CTA either.
2. **Never replace status colors.** Success/warning/error/info live in their own token set. An accent-colored "success" pill is wrong.
3. **Never mixed with status colors in the same card.** A card's icon tile is either an accent or a status — never both side-by-side.
4. **Never dimmed with alpha.** Accents appear at full saturation of their 500 value. No `rgba(0, 180, 210, 0.6)`. If a softer feel is wanted, use the Light 50 variant — don't tint the base.

### Hard rules

1. **Four accents — Cyan, Sky, Royal Blue, Deep Indigo.** No fifth accent.
2. **ODS tokens only** — `var(--accent-sharing)`, not raw hex.
3. **Icon tiles change with surface** — light-50/icon-500 on white, base-500/white-icon on dark.
4. **Base 500 always at full saturation** — never dimmed with alpha. Use Light 50 for softer feel.
5. **Accents never replace primary, CTA, or status colors.** They're a separate decorative layer.
6. **No per-page cap.** But stay restrained per §2.
7. **Consistency across a page** — if Cyan is the team-collaboration feature in the hero, it stays Cyan throughout the page.

### The "if you remember one thing"

**Cyan, Sky, Royal Blue, Deep Indigo. Light fill on white, base fill on dark. Never as a CTA. No per-page cap — but stay restrained.**

---
## 20. Animation & Hover

Shift's marketing pages are mostly **static**. Motion is a deliberate signature, not a default. The vibe is "calm, confident, considered" — not "alive with animation."

### Hard rules

1. **No entrance animations.** Content appears immediately on page load. No fade-ups, no stagger, no scroll-triggered reveals.
2. **No parallax, no pinned sections, no scroll-hijacking.** Page scrolls normally.
3. **Active states are instant** (no transition needed).
4. **One hero animation per page maximum** (optional). If the page has a hero illustration that animates, no other section gets entrance motion.

### Hover states

CTAs (all variants):
- Hover, active, focus, and disabled states come from `design-system/components/cta.json`. Do not restate or invent button hover colours here.
- If the CTA label includes a trailing arrow icon, the arrow translates 4px right on hover, 200ms ease.
- No Y-translate on buttons.

Cards (feature, pricing, content):
- Background tint — a faint primary fill at low opacity (`rgba(57, 64, 208, 0.04)`), 150ms ease.
- If the card has a trailing arrow, the arrow slides 4px right.
- **No Y-lift, no shadow intensification, no border change.** The tint is the entire hover treatment.

Links and ghost buttons:
- Underline appears or thickens on hover, 150ms ease.

### What this skill does NOT use

No flowchart traveling-dash animations. No scroll-triggered counters. No micro-animations on icons. No animated gradients. No animated backgrounds. Pages stay still.

---