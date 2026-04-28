# Logo Wall

A small, calm section right after the hero. Its job is one thing: social
proof in five seconds. Pick **ONE** of two variants.

Logo walls always use **inline SVG wordmarks**, never raster logos
(.png/.jpg). Raster logos look pixelated on retina, scale terribly, and
mark the page as cheap. If the user names real customer companies, use
their actual wordmarks (composed in inline SVG with the right typeface
and stroke). If no real customers are named, invent plausible-sounding
companies — Helix, Northwind, Mercer, Loom, Periscope, Atlas, Foundry,
Ember are all good fictional names — and render them in matching
wordmark style: same font weight, same height, same letter-spacing,
same color. The row should read as a unified band, not a parade of
random logos at different scales.

Logo color is the muted text color at around 70% opacity in the default
state. On hover (or just on dark sections without hover), the opacity
goes to 100%. Never use brand colors on the logos themselves — that's
both incorrect and ugly.

---

## V1 — Static Grid (default)

**When to pick:** there are 5–8 logos and the rest of the page tone is
calm or restrained. Most pages should choose this variant.

**Structure:** a single horizontal row of logos, evenly spaced across
the container width using `justify-content: space-between` (or with a
generous fixed gap). Above the row sits a small label like "Trusted by
engineering teams worldwide" or "Powering observability at" — set in
the subtle text color, around 13px, letter-spacing slightly wide.

The section has a hairline border at the bottom (and sometimes the top
too) to separate it from the sections above and below. Vertical padding
is moderate (around 64–80px) — this is a small, punchual section, not
a tentpole moment.

On wrap (smaller viewports), the logos break into a flex-wrap grid with
consistent gap. Order doesn't matter functionally, but the visual
heaviness of each logo (long names take more horizontal space) should
be alternated so the row feels balanced.

---

## V2 — Infinite Marquee

**When to pick:** the page tone is motion-forward (Framer/Webflow-style),
there are 8 or more logos, and ambient motion adds energy. Don't use
this on calm or enterprise-leaning pages — it adds noise.

**Structure:** the logos sit on a single horizontal track that scrolls
continuously to the left. To create a seamless loop, the same logo
group is duplicated within the track, and a CSS keyframe animates the
track from `translateX(0)` to `translateX(-50%)` over 30–60 seconds. The
duplicated group is marked with `aria-hidden="true"` for accessibility.

The marquee is wrapped in a container that masks the left and right
edges with a fade-to-transparent gradient mask, so logos don't pop in
and out abruptly — they appear and disappear into a soft fade. Use
`mask-image: linear-gradient(to right, transparent, black 8–10%, black
90–92%, transparent)`.

The animation pauses on hover so the user can read a logo if they
want — but most won't. Hover-pause is a small detail of craft.

The label above the marquee is the same as in V1 — subtle, small,
centered.

---

## Default behavior

When in doubt, pick V1 Static Grid. Marquee is only the right call when
the page tone supports it. A marquee on an otherwise calm page reads as
trying-too-hard; a static grid on a motion-forward page reads as
correctly restrained.

If you find yourself writing more than 8 logos and the page is
calm-leaning, prefer V1 with the logos on two rows, or V1 with smaller
logos that fit one row, over forcing a marquee.

---

## Common mistakes to avoid

- **Logos at wildly different sizes.** Normalize to a consistent
  height (24–28px). The visual weight of each logo should match —
  resize the SVGs so they feel like peers.
- **Brand-colored logos on a marketing page.** Always neutralize to
  the muted text color. Real brand-color logos belong on a customer
  detail page, not a logo wall.
- **A "logo cloud" with 20+ logos.** Too many erodes credibility and
  feels like padding. 5–8 named customers is more persuasive than 25
  unrecognized ones.
- **Forgetting the label above the row.** Without the label, the
  logos feel orphaned. Always lead with one short sentence.
