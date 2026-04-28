# Pricing — 2 variants

The pricing section is a conversion moment. Confidence and clarity beat
cleverness here. Pick **ONE** variant. Selection logic at the bottom.

---

## Copywriting rules (apply to both variants)

- **Tier names should signal who each plan is for**, not "size."
  "Hacker / Team / Scale" or "Solo / Studio / Business" is more
  evocative than "Basic / Pro / Enterprise". Generic names are fine
  but boring — try for specific names that match the brand voice.
- **Each tier has 4–7 features.** Past 7, scanning falls apart and
  the tier looks bloated. If the tier genuinely has more, group them
  ("Everything in Team, plus...") and only highlight the differentials.
- **Middle tier is "Most popular."** This isn't optional — the
  recommendation badge is one of the strongest conversion levers in
  pricing. Pick the middle tier as default-recommended.
- **Enterprise tier shows "Custom" or "Talk to sales,"** never an
  invented enterprise number. The CTA should clearly route to a sales
  contact, not "Sign up."
- **Prices are large and confident.** Display font, 48–56px, tight
  letter-spacing. The dollar sign is smaller than the number (about
  half the size, vertical-align top). The cadence ("/mo", "/mo per
  seat", "+ usage") is small and muted.
- **Free plans, if offered, show "$0 forever" or similar specific
  language.** Don't be cute about pricing — say what it is.

---

## V1 — Three-Tier Cards (default)

**When to pick:** the product has 3 standard tiers and pricing is
straightforward (one main number per tier, one main CTA). This is the
right choice 90% of the time.

**Structure:** three equal-width cards in a row. Each card contains,
top to bottom:
1. (Optional) "Most popular" badge — a small pill anchored at the top
   of the card, centered, in the brand primary color with light text.
2. The tier name (display font, around 22–24px) and a one-line
   description ("For teams of 5 to 50") in muted text.
3. The price (display font, large) with currency symbol, the number,
   and the cadence label.
4. The primary CTA — a full-width button.
5. A hairline divider, then the feature list with bulleted items.

The **featured (middle) card** uses the brand-deep dark background
with light text — this single inverted card is the most powerful
visual-direction move in the section. It pulls the eye, signals
"this one." No need for a wild scale-up; subtly inverting the
colors is enough.

The featured card's CTA inverts too: a light filled button with dark
text. The non-featured cards use a quiet secondary button (off-white
fill, dark text).

**Bullet list style:** the bullet marker is a thin horizontal dash or
a checkmark in the brand color. Items use the muted text color. Don't
list every feature in every tier — show only the meaningful
differentials past the first tier ("Everything in Solo, plus:").

**Optional billing toggle** sits above the cards: a pill-shaped
two-button group ("Monthly / Yearly") with the active option filled.
A small "−20%" badge inside the yearly button signals annual savings.
This is purely visual unless you also wire JS to swap prices.

**Aesthetic moves:**
- Cards have a hairline border, the larger card radius (around 24px),
  moderate-to-generous padding (around 32–40px).
- The pricing section sits on the off-white surface-2 background, so
  the white cards feel raised.
- The featured card may scale up very slightly (around 1.02) — it's
  optional, but adds emphasis. Don't go larger; full pricing-card
  zoom-ups feel cheesy.

---

## V2 — Comparison Table

**When to pick:** the product has many feature differences across
tiers and the user benefits from a glanceable matrix. Also when the
user explicitly asks for "feature comparison" or "compare plans."
Enterprise-leaning pages often prefer this format.

**Structure:** a single table with the feature names down the left
column and the three (or more) tiers across the top row. Each cell
shows what the corresponding tier includes for that feature — could
be a checkmark, a number, a value, or a dash for "not included."

**The table** has rounded corners on the wrapper (it's a hairline
table inside a rounded container), hairline dividers between rows,
and a clear visual emphasis on the "Most popular" column. That column
gets a subtle brand-colored tint background and left/right hairline
borders in the brand primary color — turning the column into a
highlighted ribbon down the table.

**The header row** lives in the off-white surface color and contains:
tier name (display font, 18–20px) + price (small, muted, on a
second line) for each plan column. The first column header is empty
or labeled "Features" in muted text.

**Row content:** the leftmost cell of each row is the feature name
(text font, slightly bolder than the values), and the value cells use
the muted text color. Specific values ("Up to 50 seats", "99.9% SLA",
"SAML + SCIM") are more credible than just checkmarks.

**Aesthetic moves:**
- Generous cell padding (around 20px vertical, 24px horizontal) so
  the table breathes — cramped tables feel like spreadsheets.
- No alternating row stripes. Hairline dividers are enough.
- Body cell font size is around 14–15px, smaller than body copy
  elsewhere on the page — the density is the point.
- Mobile fallback: cells get smaller padding and smaller font. If the
  page is very wide on mobile, allow horizontal scroll on the table
  rather than collapsing it (which usually loses information).

---

## Selection logic

| Brief signal | Pick |
|---|---|
| Standard SaaS, 3 tiers, simple offer | **V1 Cards** |
| Many feature differences worth comparing in a glance | **V2 Table** |
| User explicitly asks "compare plans" / "feature comparison" | **V2 Table** |
| Enterprise-leaning brand, complex pricing | **V2 Table** |
| **Default** | **V1 Cards** |

If both could work, prefer V1 — it's faster to scan and converts
better in most cases. V2 is the right call when the comparison itself
is the value.

---

## What to avoid

- **"Contact sales" for the lowest tier.** Confidence in pricing is
  itself a brand signal. Hiding base prices behind sales calls
  undermines trust.
- **Hidden fees or asterisks for everything.** The pricing section
  should match the offer exactly. If something requires a footnote,
  put it on a separate billing page, not the main pricing.
- **More than 4 tiers.** 4 is the upper limit; 3 is the sweet spot.
  More than 4 tiers becomes a comparison-table problem in disguise —
  use V2.
- **Pricing comparisons against competitors** in this section.
  Competitor comparison is a separate page or section. Pricing here
  is about *your* offer, presented confidently on its own terms.
- **Negative-space-cluttered cards.** Pricing cards should look calm
  and confident, with strong type hierarchy. If they look busy, cut
  features or rebalance padding.
