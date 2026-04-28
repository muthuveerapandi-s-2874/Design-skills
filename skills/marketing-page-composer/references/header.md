# Header / Navigation

One variant. Sticky positioning, transparent at the top of the page,
gains a translucent background and backdrop-blur once the user scrolls.
A thin border underneath appears at the same time. The header is the
first thing the eye anchors to — keep it confident and small.

---

## Structure

A horizontal bar with three logical groups, divided across the
container:

- **Left:** the wordmark logo. A small inline SVG (or a styled
  `<span>` with the display font) — never a raster image. About 18–24px
  tall. If the brand has a small icon mark, place it to the left of
  the wordmark with a tight 8px gap.

- **Center / flexible middle:** primary navigation links, 4–6 items,
  evenly spaced. Use only single-word or two-word labels (Product,
  Pricing, Customers, Docs, Changelog). Skip mega-menus unless the
  product genuinely has multiple sub-products to disclose — most
  marketing pages don't need them.

- **Right:** a quiet "Sign in" link followed by a small primary
  button (the trial / sign-up CTA). The button is a compact version
  of the page's primary button style — about 9–10px vertical padding,
  smaller font (13–14px) than the hero CTAs.

A hamburger menu icon sits on the right at mobile breakpoints, replacing
both the nav links and the "Sign in" link. The primary button can stay
visible on mobile if it's important to the page goal.

---

## Behavior

The header is `position: sticky; top: 0` so it remains visible as the
user scrolls. At the top of the page it has no background, no border —
it floats over the hero. Once `scrollY > 8`, a `.scrolled` class is
added (via a scroll listener), which:

- Sets the background to a translucent neutral (white at ~72% opacity
  on light pages, near-black at ~72% on dark-hero pages).
- Adds `backdrop-filter: saturate(180%) blur(16px)` so content beneath
  blurs softly.
- Reveals a hairline bottom border in the standard border color.
- Reduces vertical padding slightly (16px → 12px) for a "tucked in"
  feel.

All transitions are 300ms with the page's standard ease curve.

---

## Light vs dark hero handling

When the page uses the **V3 full-bleed dark hero**, the body gets a
`dark-hero` class. In that mode:

- The logo, nav links, and "Sign in" link start in the on-dark muted
  text color (so they read as light against the dark hero).
- On hover, links shift to the full on-dark text color.
- The primary CTA button inverts — it's a light button with dark text
  on the dark hero, becoming a dark button with light text once
  scrolled (or stays inverted, depending on the specific brand —
  Linear and Vercel keep it inverted).
- The mobile menu icon bars are also light.

When the page uses a light hero (V1 centered + orb, V2 split), the
header uses default colors throughout.

---

## Aesthetic moves

- The bar is **calm**. No mega-shadows, no gradients on the bar
  itself, no decorative ornaments. The header is a wayfinding tool,
  not a hero element.
- Logo wordmark uses the display font with semi-bold weight (600) and
  tight letter-spacing — matches the typography identity of the rest
  of the page in miniature.
- Nav link font size is **smaller** than body copy — usually 14px.
  Large nav links feel dated.
- The gap between nav links is generous (around 32px). Cramped nav
  reads as cheap.
- The primary button has a subtle lift on hover (1–2px) — not a color
  shift. Color shifts on the small CTA make the bar feel busy.

---

## What to avoid

- A logo so large it dominates the bar — keep it under 28px tall.
- More than 6 nav items — past 5 the bar feels crowded; past 6 it's
  failing to make choices.
- "Get started" + "Sign up" + "Try free" all in the header —
  redundant CTAs split attention. One quiet link + one primary button.
- A search bar in the header on a marketing page — that's an app
  pattern.
- An announcement banner stacked above the header on the very first
  draft. If you need one, it can come on a later iteration.
