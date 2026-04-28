# Hero — 3 variants

The hero is the page's largest moment. Type, ambient depth, and one
clear action. Pick **ONE** variant. Selection logic at the bottom.

The hero always has these elements:
- An eyebrow (small badge, version tag, or category label)
- An H1 headline that is a *claim*, not a category description
- A sub-headline of one sentence (~20 words) that explains the H1
- A primary CTA + a secondary action (link or ghost button)
- An optional trust line at the very bottom (e.g. "Trusted by 2,800+ teams")

What changes between variants is layout, scale of the type, and the
nature of the ambient depth.

---

## V1 — Centered + Gradient Orb

**When to pick:** the product sells a feeling, idea, outcome, or
service rather than a screenshot-able UI. A consultancy, a developer
service, a marketplace, a tool whose value isn't conveyed by its
interface. Also the safe default when nothing else clearly fits.

**Layout:** everything centered horizontally — eyebrow, H1, sub-
headline, CTAs, trust line. Stacked vertically with generous space
between elements. Section padding is large (around 140px top, 120px
bottom on desktop).

**Type scale:** H1 reaches the upper bound of the type system —
clamp from around 48px on mobile to 96–112px on desktop. Letter-
spacing very tight (-0.045em). The H1 may break across 2–3 lines
deliberately, with `<br>` tags placed at meaningful syntactic breaks
to control rhythm.

**Ambient depth:** one large gradient orb sits behind the hero
content, positioned around the top center of the section. Around
800px wide, blurred at 140px, opacity 0.18–0.22, in the brand
primary color. A second smaller orb (around 500px) sits offset to
one side at lower opacity, in the brand accent color. This creates
the soft glow that makes the hero feel atmospheric.

**The eyebrow** is a pill — rounded full, hairline border, off-white
fill, small muted text. Often holds a version label or category
badge.

**CTAs** sit centered in a row with a 16px gap. Primary is a solid
filled button using the brand-deep color; secondary is a ghost
button or an inline link with arrow.

---

## V2 — Split + Product Mockup

**When to pick:** the product *has* a UI worth showing — a
dashboard, a tool, an app, an editor. The screenshot itself is
part of the pitch. Software products with strong visual interfaces
often choose this variant.

**Layout:** an asymmetric two-column grid — text on the left at
about 5/12 width, visual on the right at about 7/12. Aligned to
center vertically. Container padding is normal (around 120px
section padding).

**Type scale:** H1 is large but not as oversized as V1 — clamp
from 44px to about 80px, since the type shares the row with a
visual. Letter-spacing tight (-0.04em). Headline typically breaks
into 2–3 lines.

**The visual** is a real product screenshot or a stylized
representation — never a placeholder gray box. It fills the right
column with a height of about 560px, has rounded corners (the larger
radius), a hairline border, and a soft drop shadow that gives it
weight without floating it. Behind the visual, place a single
gradient orb in the brand accent color — positioned to the upper-
right and offscreen, so it bleeds in from the edge. This adds
ambient depth without a full mesh.

**The text column** has the eyebrow at top, then headline, then sub-
headline, then CTAs in a row. The CTA pair sits left-aligned (not
centered), since this whole column is left-aligned.

---

## V3 — Full-Bleed Dark

**When to pick:** the page wants drama. Premium positioning,
brand-led products, dev tools that take themselves seriously
(Linear, Vercel, Resend), consumer products with attitude. Also
appropriate when the brief says "bold" or "premium" or "Framer-
style."

**Layout:** the entire section is dark (brand-deep), full-width.
Content is centered, like V1. Section padding is the largest of
any variant (around 180px top, 160px bottom on desktop) so the
hero feels weighty.

**Type scale:** H1 reaches the maximum scale — clamp 56px to
128px. Letter-spacing very tight (-0.05em). Display font weight
is medium (500), not bold — bolder weights at this size feel
crude.

**Ambient depth:** a gradient mesh covers the entire section
behind the content. Two radial gradients positioned at opposite
corners (e.g. upper-left in brand primary, lower-right in brand
accent), heavily blurred (around 120px), at moderate opacity
(0.32–0.4). Optionally layer an SVG noise/grain filter at very low
opacity (0.04) over the whole thing — adds analog texture and
visibly elevates the craft.

**Optional:** a product preview can sit below the headline+CTAs in
this variant — for software products, a stylized terminal or
dashboard frame with the brand-deep-2 background and rounded
corners. The preview floats in front of the gradient mesh with a
strong colored shadow (using the brand primary at low opacity) for
glow effect. Limit this preview to one per page; if it's used here,
the features section uses simpler visuals.

**Body class:** when V3 is used, the body must get a `dark-hero`
class so the header switches to its light-on-dark mode (described
in `header.md`).

**Eyebrow** in V3 has a subtle dot or pulse element to its left in
the brand accent color — adds a "live / now" feeling. Background
is barely-there white (around 6% opacity).

**CTAs:** primary is a solid light button with dark text (inverted
from light pages). Secondary is a ghost button with a hairline
white border and light text — not a plain link, since the dark
backdrop calls for more weight.

**Trust line** at the bottom of the hero uses the on-dark muted
text color, very small (13px), letter-spacing wide.

---

## Selection logic

Read the brief and apply this priority:

| Brief signal | Pick |
|---|---|
| Product has a UI/dashboard worth showing | **V2 Split** |
| Product is premium / bold / dev-tool / "Framer-style" / brand-led | **V3 Full-Bleed Dark** |
| Product is a service, concept, or outcome (no UI to show) | **V1 Centered + Orb** |
| **Default when unclear** | **V1 Centered + Orb** |

Note: V3 (Full-Bleed Dark) is the strongest visual choice. Don't
default to it for everything — when overused, dark heroes lose their
drama. Reserve it for products that genuinely warrant a confident
opening statement.

---

## Universal rules

- The H1 *must* be a claim or a stance, never a category description.
  "Analytics that keep up with prod" beats "AI-powered analytics
  platform."
- The sub-headline explains the H1 in plain language. ~20 words. Don't
  add a second sentence "for SEO" — it always weakens the moment.
- Two CTAs maximum. The primary verb-led ("Start free", "Book a demo");
  the secondary either an outcome ("See it run →") or a deeper resource
  ("Read the docs →").
- The trust line, if used, names specific companies or a specific
  number — "Trusted by 2,800+ engineering teams" is fine; "Trusted by
  modern teams" is not.
- The hero always gets the scroll reveal classes on its child elements
  with a small stagger.
