# Final CTA + Footer

These are the page's two closing beats. The CTA is the last conversion
moment and deserves drama. The footer is utility — links, brand block,
legal — and shouldn't be over-styled.

---

## Final CTA

**The mandate:** the final CTA should feel like the *conclusion* of the
page, visually distinct from everything above. The reader has just seen
features, pricing, FAQ — now is the moment to act. The visual weight
matches that.

### Structure

A full-width section with centered content. Top to bottom:
- A large display headline (the "ask" — the moment-of-action statement)
- A short sub-paragraph easing the friction (free trial, no card,
  cancel anytime — whatever lowers the barrier)
- A pair of CTAs: a strong primary (the actual conversion action) and
  a secondary ("Talk to a human →" or "Read the docs →")

Section padding is the largest of any section on the page (around
160px top and bottom on desktop). The CTA is meant to feel weighty.

The container narrows here — content max-width is around 800px so the
type doesn't sprawl.

### Visual style

The final CTA **must** be on a dark background — usually the brand-deep
color, with a strong gradient mesh behind the content. Two radial
gradients positioned at opposite sides of the section (e.g. left side
in brand primary, right side in brand accent), heavily blurred, at
moderate opacity (around 0.3–0.4). This mirrors the V3 dark hero
treatment and creates a satisfying bookend if V3 was used at the top.

If the hero was V1 or V2 (light), the dark final CTA still works — it
provides a strong visual climax that contrasts the lighter sections
above. The page should always end with this dark moment regardless of
where it started.

### Type scale

Headline: clamp from 48px on mobile to 88–96px on desktop. Display
font, medium weight, very tight letter-spacing (-0.045em). It can be a
single line or break into two lines depending on length — but keep it
short. "Ready when you are." or "Stop waiting on dashboards." beat
longer pleas.

Sub-paragraph: 18–22px, muted on-dark text color, max one sentence.

### CTA buttons

Primary: a solid light-on-dark button (light fill, dark text), the most
visually prominent button on the page. Substantial padding (around 16px
× 32px), 15–16px font weight, the standard small button radius.

Secondary: a ghost button with a subtle hairline border in low-opacity
white, light text. Or an inline link with arrow if the page wants to
stay restrained.

### Headline writing

The headline should be one of these archetypes:
- **A direct invitation:** "Ready when you are." / "Start in 60 seconds."
- **A challenge or stance:** "Stop waiting on dashboards." / "Software
  that respects your time."
- **A summary of the offer:** "Free for 10,000 queries a month."

Avoid: "What are you waiting for?" / "Take the next step." / "Join
thousands of customers." All are exhausted clichés.

---

## Footer

**The mandate:** utility. The footer is wayfinding to docs, legal,
careers, social — it doesn't need to be beautiful, it needs to be
clear.

### Structure

Top: a multi-column grid of links. Bottom: a horizontal "base bar"
with copyright and legal links.

The grid is typically four columns:
- **Brand column (1.5fr):** logo wordmark, a one-sentence brand
  positioning ("Software that respects your time."), social icons in
  small icon-only buttons. This is the only column that has anything
  besides text links.
- **Three link columns (1fr each):** organized by topic. Common
  groupings: Product / Developers / Company / Resources. Each column
  has an uppercase muted heading (12px, letter-spacing slightly wide),
  followed by 4–6 stacked text links.

Below the grid is a hairline divider, and below that is the **base
bar**: copyright on the left, legal links (Privacy, Terms, Security)
on the right.

### Visual style

The footer sits on the surface (white) background — a calm, light
ending after the dramatic dark CTA. A hairline border at the very top
separates it from the CTA. Generous vertical padding above the grid
(around 96px) and moderate below (around 48px).

Type sizes are small throughout — link text around 14px, headings
12–13px. The footer is not the place for big type.

Link colors are the muted text color by default; on hover, they shift
to the full text color with no underline. Keep transitions quick (around
200ms) so the footer feels responsive but not noisy.

### Social icons

Small (around 14–16px), wrapped in a 32px square button with a hairline
border and a small radius. Icon-only — never with labels. On hover, the
border strengthens and the icon color shifts to full text.

Use inline SVG for the social glyphs (X, GitHub, LinkedIn, etc.) — same
rule as logos, no rasters.

### Mobile

Grid collapses to two columns; the brand block spans both columns at
the top. The base bar stacks vertically: copyright above, legal links
below.

---

## What to avoid in either section

- **A "newsletter signup" form in the footer.** If it was important
  enough to convert with, it would have been higher up the page.
- **Decorative ornaments in the final CTA.** The gradient mesh is the
  ornament; don't add illustrations, mascots, or floating shapes on top
  of it.
- **"Made with ❤️" or other emoji decoration in the footer.** It's a
  cliché that signals an early-stage indie project, not the senior
  marketing-page tone.
- **A footer with twenty link columns.** If the link inventory is huge,
  group it more tightly. Three or four columns is the right scope for a
  marketing page.
- **A second large headline in the footer.** Footers stay quiet.
