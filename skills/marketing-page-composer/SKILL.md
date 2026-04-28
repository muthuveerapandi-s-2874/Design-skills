---
name: marketing-page-composer
description: >
  Build a single-file HTML marketing/landing page with Framer/Webflow-grade
  visual quality — motion-forward, big confident type, gradient ambient depth,
  generous whitespace. Outputs ONE .html file with inline CSS and minimal vanilla
  JS. Use whenever the user asks to build, design, or compose a marketing page,
  landing page, product page, homepage, hero section, feature section,
  testimonials, pricing, FAQ, or CTA — even without saying "marketing page".
  Triggers on "landing page", "marketing page", "Framer-style", "Webflow-style",
  "hero section", "pricing tiers", "testimonials block", "feature grid", "build
  a homepage", "design a product page". Assembles sections in fixed order:
  header → hero → logo wall → features → testimonials → pricing → FAQ → CTA →
  footer. Picks ONE feature variant based on context. Pulls imagery from
  Unsplash/Pexels direct URLs. Defaults to Zoho ODS tokens, can be overridden.
---

# Marketing Page Composer

**The mandate:** Pages that look like a senior visual designer made them at
Framer or Webflow — confident typography, intentional motion, ambient depth
from gradients and blur, asymmetric where it earns its place. Never the
generic three-column-blue-button-icon-card AI-landing-page look.

This skill produces **one self-contained `.html` file**. Inline `<style>`,
inline `<script>`, no external CSS frameworks. The only external resources
are: Google Fonts (one family), Unsplash/Pexels image URLs, and inline SVG
for icons and ornaments.

---

## Decision flow when the skill triggers

1. **Read the brief.** Identify: product name, one-line value prop,
   target audience, and any brand direction the user has stated. If
   any are missing, fill from context or use sensible placeholders.
   Do NOT block on missing marketing copy — write believable copy
   yourself.

2. **Resolve brand tokens.** If the user requested a non-Zoho brand
   (Linear, Stripe, custom startup), apply the override values
   described in the brand-tokens section below and skip the fetch.
   Otherwise, read `references/design-system-source.md` and fetch the
   live ODS tokens from the marketplace repo. If the fetch fails, use
   the fallback values documented in that file and note it briefly in
   the response. Do NOT block on a failed fetch.

3. **Pick the feature-section variant.** Based on the brief, choose
   ONE from `references/features.md`. Selection logic is in that file.

4. **Pick the hero variant.** Choose ONE of three from
   `references/hero.md` based on whether the product is best shown as:
   a screenshot/UI (split), a feeling/concept (centered with orb), or
   a bold statement (full-bleed dark).

5. **Pick testimonial + pricing variants.** Same logic — see the
   section files.

6. **Assemble in this exact order** (skip a section ONLY if the user
   explicitly says "no pricing" / "no FAQ" / etc.):

   ```
   header → hero → logo wall → features → testimonials → pricing → FAQ → CTA → footer
   ```

7. **Apply the global aesthetic rules below** to every section.

8. **Save the file** with a descriptive name (e.g. `acme-landing.html`)
   and present it.

---

## NON-NEGOTIABLE: aesthetic rules

These apply to every page this skill produces. If a draft violates one of
these, fix it before presenting.

### 1. Type is the hero

- Display headlines use `clamp()` and reach **96–128px** on desktop. If the
  H1 looks like a body paragraph, the page has failed.
- Letter-spacing is **negative** on display sizes: `letter-spacing: -0.04em`
  for h1/h2, `-0.02em` for h3. Tight type reads as confident.
- Body text is **17–19px**, line-height **1.55–1.65**. Never 14px body.
- One display family + one text family maximum. Pair recommendations:
  - Default (ODS): `'Zoho Puvi'` for everything
  - Editorial: `Instrument Serif` (display) + `Inter` (text)
  - Modern-tech: `Geist` or `Inter Tight` (both)
  - Brutalist-soft: `PP Neue Montreal` style — use `Space Grotesk` as proxy

### 2. Ambient depth, not flat

Every long-form page needs at least **two** ambient depth elements:

- **Gradient orb** — a 600–900px blurred radial-gradient div, `filter: blur(120px)`,
  `opacity: 0.3–0.5`, positioned absolutely behind content. Orbs use brand
  accent colors at low opacity.
- **Gradient mesh** — `linear-gradient` or `radial-gradient` backdrop on
  hero/CTA sections, very subtle, never garish.
- **Noise/grain** (optional but elite) — an inline SVG noise filter at
  `opacity: 0.03–0.06` over hero or CTA sections.

Red flag: if the page is pure flat white with no depth elements, it looks
like a Bootstrap template. Add an orb.

### 3. Motion that earns its place

- Scroll-triggered reveal on every section: `IntersectionObserver` flips a
  class that triggers `transform: translateY(20px) → 0` + `opacity: 0 → 1`
  with a 600ms cubic-bezier ease.
- Stagger children by 60–80ms.
- Hover micro-interactions on cards: lift (`translateY(-4px)`) + soft shadow
  + border color shift. 250ms ease-out.
- Header collapses height + adds backdrop-blur on scroll.
- **No** carousels with auto-play that distract. **No** parallax that fights
  the content. Motion is seasoning.

### 4. Spacing rhythm

- Section vertical padding: **120–160px desktop**, **80px mobile**.
- Container max-width: **1200px** for content, **1400px** for full-bleed hero.
- Grid gaps: **24px** for tight, **48px** for breathing, **80px** for hero
  asymmetry.
- Never let two sections of the same background color touch — alternate
  surface colors or insert a divider/orb to break the monotony.

### 5. Color discipline

- One primary brand color. Used for CTAs and one accent moment per section.
- Do **not** color every heading the brand color. Headings are body-text
  color; accents are accents.
- Dark sections (hero or CTA): use the brand's deepest neutral, not pure
  black. ODS default is `#0B0C1F`.
- Muted text uses a **specific** muted token (e.g. `#595959`), not
  `opacity: 0.6`.

### 6. Imagery

- All imagery comes from **Unsplash** (`https://images.unsplash.com/photo-...`)
  or **Pexels** (`https://images.pexels.com/photos/...`) as direct URLs.
- Use the URL parameters to size: Unsplash `?w=1600&q=80&auto=format&fit=crop`.
- Avatars for testimonials: Unsplash people photos, square crop, 80px rendered.
- **Never** use placeholder.com or grey boxes in the final output. Pick real
  imagery that fits the product's domain.
- Logo wall uses **inline SVG wordmarks** of plausible fictitious companies
  (or real companies if the user names them) — never raster logos.

### 7. The "AI-page" tells to AVOID

If the page has any of these, it has failed:

- Three identical icon-card columns with circle-icon + heading + 2 lines
- Generic `Lucide` icons (especially `Zap`, `Sparkles`, `Shield`) used as
  the only visual differentiator
- Gradient text on every other heading
- Centered hero with `Get Started` and `Learn More` ghost button as the
  only composition
- Emoji as decoration in serious B2B pages
- The phrase "Empower your team" or "Unlock your potential"

Replace these with: real composition variation, asymmetric layouts,
meaningful imagery, copy that says something specific.

---

## Brand tokens — fetch from the design system source

**This skill does not hardcode brand tokens.** The canonical design
system lives at the marketplace repo, and Claude fetches the current
values from there at the moment a page is built. This keeps the skill
in lockstep with the design system as it evolves — no token drift, no
stale values baked into snippets.

### The fetch contract

Before composing any HTML, Claude does the following, in order:

1. **Read `references/design-system-source.md`** in this skill. That
   file documents the GitHub URL, the file paths to look for, and what
   each token category looks like.
2. **Fetch the design system files** from the URLs listed in that
   reference file using `web_fetch`. Pull color tokens, type tokens,
   spacing/radii, and any motion/easing values.
3. **Translate the fetched values into the CSS custom properties** the
   skill uses (`--brand-primary`, `--text`, `--surface-2`, etc. —
   names listed in the page-skeleton section below). Map by *role*,
   not by literal name match: the design system might call its CTA
   color `blue-500` or `--zoho-primary` — Claude resolves it to
   `--brand-primary` in the output stylesheet.
4. **Restate the resolved tokens** at the top of the inline `:root`
   block so the generated page is self-documenting and the user can
   see what was used.

### When the fetch is unavailable

If `web_fetch` is disabled, the repo is unreachable, or the fetch
returns nothing useful, Claude does NOT block — it falls through to
the **fallback defaults** in `references/design-system-source.md`,
notes briefly in the response that the live design system couldn't be
reached and the fallback was used, and proceeds to build the page.

The fallback defaults are deliberately ODS-aligned (Zoho blue family,
neutral greys, deep dark hero color) so the page still feels native
to the Zoho ecosystem even when the source is unreachable.

### Non-Zoho brand requests

If the user explicitly asks for a non-Zoho brand (Linear, Stripe,
Vercel, custom startup, etc.), Claude **does not fetch the ODS source**
— it overrides the tokens with brand-appropriate values and restates
those at the top of the inline stylesheet. Common starting points:

- **Linear-style:** primary `#5E6AD2`, deep `#08090A`, Inter Tight
  font, cyan accent for code/mono moments.
- **Stripe-style:** primary `#635BFF`, accent `#00D4FF`, deep `#0A2540`,
  slightly larger radii.
- **Vercel-style:** primary `#000`, accent `#0070F3`, Geist font,
  tight 4–6px radii.

The skill's *structure* (token names, the section flow, the aesthetic
rules) stays the same regardless of which brand is in play. Only the
values change.

---

## Page skeleton

Compose the HTML fresh each time. The page is one `<!doctype html>`
file with the standard structure: `<html lang="en">`, `<head>` with
charset, viewport meta, title (formatted as `Product — value prop`),
Google Fonts preconnect and stylesheet links (one display family + one
text family from the chosen brand tokens), and a single inline
`<style>` block. Then `<body>` containing the section markup in fixed
order, followed by a single inline `<script>` block at the bottom.

The inline stylesheet starts with the `:root` block of brand-token
custom properties (using the values described above), then a small
reset (`box-sizing: border-box` for everything, body margin zero, body
font and color from the tokens, antialiasing on), then a `.container`
class with max-width 1200px and 24px horizontal padding (with a
`.container.narrow` variant at 880px for accordion-style sections),
then a `.reveal` utility class for scroll fade-ins (initial state:
opacity zero, transform translateY 24px; with-transition state when
the `.in` class is added: opacity one, no transform; transition uses
the standard ease over 800ms). After that, all section-specific styles
are written inline as the page is composed.

The inline script at the bottom does three things minimum:
1. An IntersectionObserver that adds the `.in` class to any `.reveal`
   element when it enters the viewport (at 0.12 threshold), then
   unobserves so the animation doesn't re-fire.
2. A scroll listener on the window that toggles a `.scrolled` class
   on the `header.site` element when `scrollY` exceeds about 8 pixels
   — this drives the header's blur/border state change.
3. Any small interactive bits the page needs (FAQ single-open
   accordion behavior, pricing toggle visual swap, tab panel switching).

Don't pull in any external JS libraries. Everything is vanilla.

The body element receives a `dark-hero` class when (and only when) the
hero variant is V3 full-bleed dark — this drives the header's
light-on-dark variant.

---

## Section reference files

Read the relevant file when you reach that point in the build. Each
file describes the section's purpose, structure, aesthetic moves,
copywriting rules, and variant selection logic — all in prose. None
contain copy-paste markup; Claude composes HTML fresh each time.

- `references/design-system-source.md` — fetch contract for brand tokens ★ read first
- `references/header.md` — sticky nav with backdrop-blur on scroll
- `references/hero.md` — 3 variants (centered+orb, split+mockup, full-bleed dark)
- `references/logo-wall.md` — static grid or infinite marquee
- `references/features.md` — 7 variants + selection logic ★ key file
- `references/testimonials.md` — 3 variants (marquee, 3-col, featured+rail)
- `references/pricing.md` — 2 variants (3-tier cards, comparison table)
- `references/stats.md` — animated count-up bridge section (optional)
- `references/faq.md` — accordion in two-column layout
- `references/cta-footer.md` — final CTA + footer

---

## Copywriting voice

The skill writes its own marketing copy when the user doesn't provide it.
Voice principles:

- **Specific over generic.** "Cuts onboarding from 6 weeks to 4 days" beats
  "Streamline your workflow."
- **One verb per sentence.** Active. Present tense.
- **Headlines are claims, not categories.** "Ship 10× faster" not
  "AI-powered productivity platform".
- **Sub-headlines explain the headline.** One sentence, ~20 words.
- **CTAs are verbs.** "Start free", "Book a demo", "See pricing" — never
  "Click here" or "Learn more" alone.
- **Testimonials sound human.** Real-feeling job titles ("Head of RevOps,
  not "Marketing Professional"), specific outcomes with numbers when
  possible.

---

## Quality checklist before presenting

Run through this mentally before saving the file:

- [ ] H1 is at least 64px on desktop (clamp ok)
- [ ] At least one gradient orb visible behind hero
- [ ] At least one section has dark background to break rhythm
- [ ] No section has the AI-page three-icon-cards pattern unless explicitly
      requested as the feature variant
- [ ] All images load from Unsplash/Pexels with proper sizing params
- [ ] `.reveal` class on every major content block, IntersectionObserver
      hooked up
- [ ] Mobile breakpoint at 768px works — type scales, grids collapse
- [ ] Header has backdrop-blur on scroll
- [ ] No emoji decoration in B2B contexts
- [ ] Footer has at least 3 link columns + brand block
- [ ] CTAs are verb-led and visually distinct (not two ghost buttons)
- [ ] Real content in testimonials/FAQ — not "Lorem ipsum" or "Question 1"

If any box is unchecked, fix before presenting.

---

## When NOT to use this skill

- The user wants a **dashboard, app UI, or admin interface** — use
  `frontend-design` and `saas-design-system` instead.
- The user wants a **specific Zoho product page** (ZeptoMail, Shifts) —
  use those product-specific skills instead, which have stricter rules.
- The user wants a **single component**, not a full page — answer
  inline with that component only.
- The user wants a **PPTX, DOCX, or PDF** — use those skills instead.
