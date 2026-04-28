# Stats Section

A compact section of large numbers with short labels underneath. Used
as a **bridge** between two larger sections to break visual rhythm —
typically inserted between the logo wall and features, or between
testimonials and pricing. Optional. Skip it if you don't have credible
numbers.

---

## When to use it

When the brief includes (or the page would credibly support) **specific,
defensible numbers**: customer count, uptime percentage, dollars saved,
queries per second, response times, etc. The stats section earns its
place when the numbers themselves are persuasive.

When **NOT** to use it:
- The page would have to invent numbers to fill it. Made-up stats are
  worse than no stats — they erode trust if a sharp reader spots them.
- The page is short and the bridge isn't needed. Stats sections feel
  forced when sandwiched between two short sections.
- The numbers wouldn't be impressive to the audience anyway. "47
  customers" doesn't help.

If unsure, leave it out. Its absence is invisible; its weak presence
is loud.

---

## Structure

A single horizontal row of 3 or 4 large numbers, evenly spaced. Each
"stat" is a vertical pair: the **number** (large, display font) on top
and a **short label** (one line, muted text) below. The numbers may
include a prefix ("$"), suffix ("ms", "%", "M", "+"), or formatting
(decimal place, comma separator).

The section sits on the surface color (or surface-2, depending on the
rhythm of the surrounding sections), with a hairline border above and
below to demarcate it as a self-contained band. Vertical padding is
moderate — around 96px — smaller than the tentpole sections.

The numbers are large but not as large as the hero H1 — clamp from
around 40px on mobile to 64px on desktop. Letter-spacing very tight.
Display font, medium weight.

The labels are around 14px in muted text, narrow max-width (about
220px) so they break naturally and don't sprawl. They sit a small gap
below the numbers (around 12px).

---

## Behavior — count-up animation

The numbers should animate from 0 to their final value when the
section scrolls into view. Use IntersectionObserver to detect entry,
then a requestAnimationFrame loop with an ease-out cubic curve over
about 1.4 seconds. Format the number in-flight: respect any decimal
places, prefix, and suffix during the count-up.

This animation is what makes the stats feel "alive" — without it, the
numbers are just static labels. Keep the animation subtle (duration
under 1.5s) so it doesn't feel like a slot machine.

---

## Aesthetic moves

- The numbers can use a **gradient text fill** sparingly — picking
  one of the four numbers to render in a brand-color gradient creates
  a small accent moment without overdoing it. Don't gradient all of
  them; the consistency would override the rule about "headlines aren't
  brand-colored."
- The labels stay in muted text color always. They're support, not
  emphasis.
- The numbers are **specific** — "187 ms" beats "Fast." "2,800+ teams"
  beats "Many customers." If the number isn't specific, the stat fails.

---

## Placement

Insert between the logo wall and the features section, OR between the
testimonials and pricing — never both in one page. Pick the spot where
the page needs a visual breath. If you're between two dark/white
alternations and don't need the rhythm break, skip it.

---

## What to avoid

- **Vague stats.** "Trusted by thousands" / "Lightning fast" / "Best
  in class" — these aren't stats, they're claims. The whole point of
  the stats section is specificity.
- **Too many stats.** 5+ stats start looking like a dashboard widget
  and lose impact. Stick to 3 or 4 strong numbers.
- **Awkward number formatting.** "1.234M" looks weird; prefer "$1.2M"
  or "1,234,000". Pick the cleanest representation.
- **Animation that loops or restarts.** It's a one-time fade-in count.
  If the user scrolls past and back, it doesn't re-animate — the IO
  unobserves after the first hit.
