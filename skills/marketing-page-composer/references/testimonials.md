# Testimonials — 3 variants

Testimonials are the page's "other people's voices" moment. They earn
their place by sounding *real* — like things a person actually said,
not marketing-mouthful praise. Pick **ONE** variant. Selection logic
at the bottom.

---

## Voice rules (apply to all variants)

These matter more than the visual choice. A perfectly designed
testimonial section with bad copy will fail; a plain testimonial
section with great copy will work.

- **Job titles are specific.** "Head of RevOps at Linear" beats
  "Marketing Professional." "Staff Engineer at Northwind" beats
  "Software Developer." Use the kind of job titles that appear in real
  Slack profiles, not the kind that appear on stock-photo job boards.
- **Quotes name a concrete outcome.** A number ("cut onboarding from 6
  weeks to 4 days"), a specific behavior change ("our reporting cycle
  went from a week to a Tuesday afternoon"), or a thing replaced
  ("replaced four tools we were paying for"). Generic praise — "It's
  amazing!", "Game-changer!", "Highly recommend!" — kills credibility.
- **One feeling per quote.** Don't pile claims into a single quote.
  Each testimonial expresses one thing the customer noticed.
- **Match the cadence of real speech or writing.** A real Slack message
  or LinkedIn comment has rhythm and a slight informality. A fake
  testimonial has perfect grammar and reads like a press release.
- **Avatars are real photos** sourced from Unsplash with the
  `?w=160&h=160&q=80&auto=format&fit=crop&crop=faces` parameters.
  Choose photos with neutral backgrounds. Vary demographics. Avoid
  photos that look like stock-photo people (forced smiles, business
  attire in a studio).

---

## V1 — Marquee Scroll

**When to pick:** the page is motion-forward (Framer/Webflow-style),
the page tone supports ambient movement, and there are 6+ short
testimonials. Each quote is brief (1–2 sentences) — long quotes don't
work in a marquee.

**Structure:** two horizontal rows of testimonial cards. The top row
scrolls left-to-right; the bottom row scrolls right-to-left. The
opposing directions create texture without either feeling overwhelming.
Each row is a marquee track (same technique as the logo wall — duplicated
content, CSS keyframe animation, transparency mask on the edges).

Each testimonial card is a fixed-width tile (around 360–400px wide) with:
the quote at the top, an attribution row at the bottom (small avatar +
name + title). Cards have a hairline border, the larger card radius,
moderate padding (around 28px). Background is the surface color so they
read as objects floating on the section background (which should be the
off-white surface-2 to give the cards definition).

Animation duration is long enough that the motion feels gentle, not
frenetic — around 60 seconds for a full loop. Pause on hover.

**Best for:** consumer products, dev tools with personality, products
where the quantity of love matters as much as the depth.

---

## V2 — Three-Column Cards

**When to pick:** the brand is B2B, the audience values credibility,
and there are 3 strong testimonials from named companies worth quoting.
This is the most professional, most enterprise-friendly variant. Default
to it for any page that leans serious.

**Structure:** three equal-width cards in a single row. Each card has:
a subtle quote-mark glyph at the top (a stylized opening quote, in the
brand primary at low opacity — around 40%), the quote in display font
at around 19–22px, and an attribution footer with avatar (44px), name,
and job title.

Cards have a hairline border, the larger card radius, generous padding
(around 36–40px). On hover, the card lifts 4px and the border
strengthens. Background of cards is surface; section background can be
either pure surface or off-white — depending on the rhythm of sections
above and below.

The quote font is the **display font**, not the text font. This is the
key move that distinguishes premium testimonials from generic ones —
quotes set in the display face read as voice, not as body copy.
Letter-spacing is tight (-0.01em).

Each quote should be 2–3 sentences. Long enough to convey something
real, short enough to read in five seconds.

---

## V3 — Featured Quote with Thumbnail Rail

**When to pick:** there is a hero customer worth leading with — a
recognizable name, a great story, a quote that deserves real estate.
Premium positioning, customer-story-driven pages, brand pages where
one customer's voice carries the section.

**Structure:** a two-column hero quote area at the top, plus a rail of
small clickable thumbnails at the bottom for other customer stories.

The hero quote area has the quote on one side (about 1.1fr) and a
relevant photograph on the other (1fr). The quote is **large** —
around 28–44px in the display font, soft weight (400), tight letter-
spacing. Below the quote sits the attribution: a 56px avatar, name,
title, and an optional "Read the full story →" link.

The photograph isn't a screenshot of the product — it's a photo from
the customer's company or work environment. Pick something that
reinforces the human, real-place quality of the story.

The thumbnail rail at the bottom has 4–8 small pills (rounded full),
each containing a tiny avatar (28px) and a company name. The active
pill is filled (with a subtle background), inactive pills are outlined.
Clicking a pill switches the featured quote — but in a static page
build, this can be visual-only or just one rendered state.

This variant works especially well on a **dark section background**.
The dark backdrop puts the quote in cinematic focus, and the rail
elements glow subtly against it. The brand accent color is used for
the eyebrow and the "Read more" link.

---

## Selection logic

Read the brief and apply this priority:

| Brief signal | Pick |
|---|---|
| Motion-forward page, 6+ short quotes, vibes-led | **V1 Marquee** |
| B2B, enterprise tone, 3 strong named customers | **V2 3-Col Cards** |
| Single hero customer story, premium / brand-led page | **V3 Featured + Rail** |
| **Default when unclear** | **V2 3-Col Cards** |

V2 is the safest default — it works for almost every product. V1 needs
matching page tone. V3 needs an actual hero customer story to lean on.

---

## What to avoid

- **Star ratings on B2B pages.** Five gold stars feels like Yelp; it
  weakens enterprise credibility. Save for consumer products.
- **Carousels.** Auto-rotating testimonials are unread by design and
  betray a lack of confidence in any single quote. Pick the right
  layout for your quotes — don't hide them behind a slider.
- **Walls of text.** Each quote should fit on a screen at the size
  you're rendering it. If it doesn't, it's too long.
- **Generic avatars** (initials in a circle) instead of real photos.
  This reads as a beta product. Always use real photos — or, if you
  can't, omit avatars entirely and use just name + title.
- **Logos in place of avatars.** Redundant if you have a logo wall on
  the same page; awkward if you don't. Stick with photos.
