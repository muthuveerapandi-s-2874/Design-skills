# Features Section — 7 variants

This is the most important section after the hero. Pick **ONE** variant.
Selection logic is at the bottom. Each variant is described in terms of
its purpose, structure, aesthetic moves, and content rules — never in
markup. Compose the HTML fresh each time you build a page.

---

## V1 — Bento Grid

**When to pick:** the product has several distinct surfaces, modules, or
strengths that don't have a natural narrative order. A platform with
analytics + integrations + security + an API. The bento format lets each
strength claim its own tile without forcing them into parallel structure.

**Structure:** an asymmetric grid where one tile is much larger (occupies
two columns and two rows), one or two tiles are wide (two columns, one
row), and the rest are normal-size single-cell tiles. Six tiles total is
the sweet spot. Five works if one is the large hero tile. Seven starts
to feel busy.

**The large tile** carries the headline feature and includes a visual —
a screenshot, a short code/CLI block, an inline mini-chart, an embedded
illustration. It should look "live" not static. The visual takes up the
bottom half of the tile; the headline and supporting sentence sit above.

**Small tiles** can each take a different visual approach so the grid
feels textured: one might use a custom geometric SVG glyph, one might
have a tiny code snippet, one might use a number or stat as its visual
anchor, one might be primarily typographic. **Avoid making all small
tiles identical** — that collapses into the AI-page three-card pattern
even inside a bento.

**Wide tiles** work well for "integrates with everything" content —
logo grid, list of supported platforms, or a horizontal flow.

**Aesthetic moves:**
- Rounded corners are larger here than elsewhere on the page (24–28px).
- Tile background is the surface color; section background is the
  off-white surface-2 — so tiles read as raised, not floating.
- Hover lifts the tile 4px and shifts the border to a stronger neutral.
  No shadow on default state, soft shadow on hover.
- The large tile may have a dark inner panel for its visual area, which
  doubles as a rhythm break.
- Headlines on tiles are 22–28px, letter-spacing tight. Body text on
  tiles is 15px, muted color, two lines max.

**Copy rules:** each tile's headline is a *claim* (what it does), not a
category label ("Sub-second queries on warehouse-scale data" not
"Performance"). Body text gives one specific reason to believe.

**Mobile:** grid collapses to single column; large and wide tiles lose
their span and become normal tiles in flow order.

---

## V2 — Alternating Left/Right

**When to pick:** the product is a journey or workflow. There's a
narrative — step 1, step 2, step 3 — or each feature is deep enough to
deserve its own row of real estate. Storytelling pages, "how it works"
pages, products where the value compounds across stages.

**Structure:** a stack of three or four full-width rows. Each row is a
two-column split: text on one side, large visual on the other. The
**direction alternates** — first row text-left, second row text-right,
third row text-left. This rhythm is the whole point; if all rows go
the same direction the page feels lazy.

**Each row's text column** has: a small numbered eyebrow (01, 02, 03 —
or a kicker like "Step one"), a medium-sized headline (32–48px),
2–3 sentences of body, and optionally a small inline link to a deeper
page. Don't add CTAs in every row — one in the last row is enough.

**Each row's visual column** is generous — the image fills the column
fully, with a subtle border or thin shadow. Heights around 480px on
desktop. The image should be specific to the feature being described,
not stock-feeling. For software products, screenshots or interface
fragments work; for service/concept products, photography or
illustration.

**Aesthetic moves:**
- Large vertical gap between rows (96–120px) so each row reads as its
  own moment, not a list item.
- The numbered eyebrow uses the brand primary color and is the only
  spot of brand color in the row — keeps the eye moving down the page.
- Headlines use the display font, body uses text font, with clear size
  contrast (headline ≥2× body).
- Visuals can occasionally include a small caption underneath, set in
  the muted text color, mono font — adds an editorial feel.

**Copy rules:** the row headline is what the *user does* or *gets*, not
what the product *has*. "Connect your data sources" and "Define what
matters" — verbs, not nouns. The body explains the how in plain language.

**Mobile:** all rows collapse to single column with text first, image
second; alternation is dropped (it doesn't make sense in a single column).

---

## V3 — Three-Column Cards

**When to pick:** the product genuinely has three peer features of equal
importance, AND none of the other variants fits better. This is the
default-looking variant; reach for it last, not first. If you're picking
this because nothing else seems right, prefer Bento (V1) instead.

**Structure:** three equal-width cards in a single row. Each card is a
self-contained unit with: a numbered eyebrow, a headline, body copy,
and optionally a small stat or pull-quote at the bottom of the card to
add weight beyond just text.

**The senior-designer version of three-column cards** distinguishes
itself from the AI-page three-card pattern by:
- Using **numbered eyebrows** (01, 02, 03) instead of icons in circles
- Letting cards have **different content shapes** — one card might end
  with a stat, another with a pull-quote, another with a small list
- Making the cards feel like **editorial blocks** with generous interior
  padding (40px+) and good type hierarchy, not like dashboard tiles
- Avoiding identical body-copy length across cards — varied length
  makes the row feel alive

**Aesthetic moves:**
- Section background is the off-white surface-2; cards are pure surface.
- Card border is a hairline; on hover it lifts 4px and the border
  strengthens.
- Card corners use the larger radius (20–24px).
- Headlines are 28–32px, display font, tight letter-spacing.
- The stat or pull-quote at the bottom of a card sits above a hairline
  divider, with the divider in the muted border color.

**Copy rules:** the three headlines should fit a single rhetorical frame
— three things we do better, three reasons to switch, three principles —
so the row reads as a triptych, not three random features.

**Mobile:** stacks to single column, gap stays generous.

---

## V4 — Tabs

**When to pick:** the product serves multiple personas or use cases that
are meaningfully different. "For Engineering / For Design / For Product
/ For Ops" is the canonical case. Also works for product surfaces:
"Dashboards / Alerts / Reports / API". The user clicks a tab and the
panel below changes to show that persona's view of the product.

**Structure:** a row of tab buttons (3–5 tabs), and below them a single
panel area that swaps content based on the active tab. Each panel
contains a two-column layout: text on the left (headline + body + a
short list of bullets specific to that persona), product visual on the
right.

**The tabs themselves** are pill-shaped buttons in a row. The active tab
uses the brand-deep color (filled) with light text; inactive tabs are
outlined with muted text. On hover, inactive tabs gain a stronger
border and darker text. They sit centered or left-aligned under the
section headline.

**Each panel's visual** should change meaningfully — different
screenshot, different illustration, different angle — so flipping tabs
feels like seeing a different view of the product, not the same picture
with a different label.

**Aesthetic moves:**
- Panel transitions use a quick fade-in-with-rise (300–500ms ease-out)
  when a tab is clicked. No slide carousels.
- The panel content area can have a subtle background tint (a few
  percent off-white) to visually separate it from the tabs above.
- The bullet list inside the text column uses an arrow glyph (→) or
  thin dash (—) as the bullet, never circles or check marks (which feel
  pricing-table-y).

**Copy rules:** each tab label is a single noun (the persona or
surface), short. Each panel headline addresses *that persona*
specifically — "Ship without breaking things" for engineers, not
"Reliable deployments" (which is generic). The bullets inside should
each be 3–5 words, scannable.

**Mobile:** tabs become a horizontal-scroll row (don't wrap them), the
panel collapses to single column.

---

## V5 — Accordion

**When to pick:** the product has many small features (8–15) and the
user benefits from being able to scan headlines and selectively expand
the ones they care about. Compliance pages, security pages, "what's
included" sections, integration listings.

**Structure:** a vertical list of expandable rows. Each row has a
headline and a `+` icon on the right when collapsed. Clicking a row
expands it to show 1–3 sentences of detail; the icon rotates to ×.

**Row layout:** numbered eyebrow on the far left (01, 02…), headline
in the middle (display font, 24–32px), expand icon on the right. The
expanded body sits below, indented to align with the headline (not the
number).

**Aesthetic moves:**
- Hairline divider between rows; the first row gets a top divider too,
  so the list feels bounded.
- No card backgrounds, no shadows — accordion is a typographic system,
  not a card system. The visual weight is in the type.
- Section uses a narrower container (around 880px) since wide accordion
  rows look weird with short body text.
- The expand icon is a thin `+` that rotates 45° to become `×` when
  open, animated 250ms.
- Single-open behavior is preferred (opening one closes others) — keeps
  the page compact.

**Copy rules:** headlines are short noun phrases ("Single sign-on",
"Audit logs", "Data residency"), 1–4 words. Body copy is 1–3 sentences
of plain explanation, no marketing fluff. If the answer is technical,
let it be technical.

**Mobile:** unchanged structurally; type sizes shrink slightly.

---

## V6 — Icon Grid

**When to pick:** density is the point. The user needs to see at a
glance that "you get all of this" — 6 to 12 small parity features with
short descriptions. Often used near the bottom of a features narrative
to communicate breadth after depth.

**Default away from this variant** unless density is explicitly the
goal. The icon-grid pattern is the closest legitimate cousin of the
AI-page three-card pattern, and it earns its place only when there's
genuinely a long list to communicate quickly.

**Structure:** 3-column grid (or 4-column on very wide screens) of
small tiles, each containing: a custom inline SVG glyph at top, a
short headline below, one sentence of body. No card borders or
backgrounds — the tiles are just typographic blocks separated by gap.

**The icons must be a unified custom set** — same stroke weight (1.5px),
same geometric language, same size (28–32px), all in the brand primary
color. **Never use Lucide's default icons** (Zap, Sparkles, Shield,
Rocket, etc.) — they're the visual equivalent of clip art at this point.
If you need to fall back, use simple geometric primitives: a square, a
circle with a line through it, two arrows, a checkmark inside a frame,
etc., drawn fresh each time.

**Aesthetic moves:**
- Generous gap between tiles (40–48px) so the grid breathes.
- No tile borders — the icon + type alone holds the structure.
- Headlines are 18–22px (smaller than other variants) — the density is
  the visual.
- Body text is one sentence, 15–16px, muted. Don't try to write
  paragraphs in this variant.

**Mobile:** collapses to single column; gap reduces.

---

## V7 — Big Image with Bullets

**When to pick:** there is a single hero feature that deserves its own
moment — usually because the product *is* that feature, or because it's
the most unique thing about the product. Often used as a **second**
features section that sits after V1 (Bento) or V2 (Alternating) to
spotlight one thing the broader features section couldn't fully convey.

**Structure:** a two-column layout — about 1fr / 1.1fr (image slightly
larger). Text on one side: small eyebrow, large headline, lead
paragraph, bulleted list with bolded lead-ins, primary CTA. Image on
the other side: large, tall (around 560px), with a subtle border or
inner shadow.

**The list inside the text column** is the workhorse here. Each bullet
starts with a bolded phrase (the claim) followed by an em-dash and a
short explanation. The bullet marker is a thin horizontal line, not a
dot or check. This formatting reads like a product page in a magazine,
not a feature list.

**Aesthetic moves:**
- This variant looks great on a **dark background** — it adds drama and
  contrasts the lighter sections around it. When dark, add a single
  large gradient orb behind the image side at low opacity.
- Headline is large (clamp 40–64px), display font, very tight letter-
  spacing (-0.04em).
- The CTA at the bottom uses the strongest button style — this variant
  is asking for action.
- The image gets a thin 1px border in a low-opacity white (on dark) or
  the standard border color (on light). No drop shadow — borders feel
  more confident here.

**Copy rules:** the headline is bold and specific — name what the thing
*is*, not its category. Bulleted lead-ins are claims with a number or
specific behavior in them. Body copy under the headline is one sentence
explaining the headline.

**Mobile:** collapses to single column; image height reduces; bullets
stay full-width.

---

## Selection logic

Read the brief and apply this priority order:

| Brief signal | Pick |
|---|---|
| Multi-module platform; several distinct strengths | **V1 Bento** |
| A workflow, journey, or "how it works" narrative | **V2 Alternating** |
| Multi-persona product (engineering / design / ops / etc.) | **V4 Tabs** |
| Long list of small parity features (compliance, integrations, what's-included) | **V5 Accordion** or **V6 Icon Grid** |
| One hero feature deserves its own spotlight (often a second features section) | **V7 Big Image** |
| Three genuinely peer features and nothing else fits | **V3 Three-Column** |
| **Default when unclear** | **V1 Bento** |

**One feature variant per page.** If the user explicitly asks for two
features sections or for "stacked" features, the cleanest combination is
V1 Bento (broad strengths) followed later by V7 Big Image (one feature
spotlight). Never stack two variants of the same shape (e.g. two
alternating sections) — the page loses rhythm.

---

## Universal rules across all variants

- The features section never sits directly after another off-white
  section — alternate the surface color or insert a different section
  between them.
- The section headline at the top uses the standard pattern: small
  brand-color eyebrow, then a large two-part display headline (often
  with a muted second clause).
- Every tile / row / panel / card gets a scroll-triggered fade-in, with
  a small stagger across siblings (60–80ms).
- Hover states on interactive tiles are required — flat hover is a
  failure of craft on a page like this.
