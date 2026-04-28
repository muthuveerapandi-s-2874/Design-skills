# FAQ Section

One variant — an accordion in a two-column layout: section heading on
the left, expandable questions on the right. This sidesteps the
centered-everything default that makes most FAQ sections feel
generic.

---

## Structure

A two-column grid:

- **Left column (about 1fr):** the section heading area. A small
  brand-colored eyebrow ("FAQ"), then a large two-part display
  headline (e.g. "Questions, answered." or "Common questions, real
  answers."), and a single sub-paragraph offering a path forward —
  often a "Still curious? Talk to us" with an inline link to contact
  or sales. This column is `position: sticky` near the top so it
  stays in view as the user scrolls through questions on the right.

- **Right column (about 1.4fr):** the accordion list of questions.

The section uses a wide gap between columns (around 80–96px) so they
don't fight visually.

---

## Question writing rules

The questions should be **the questions the user is actually
asking** — the objections that are blocking them from converting,
not the questions you wish they were asking. Cover:

- **Setup time.** "How long does setup take?" / "Can I be up and
  running today?"
- **Switching.** "What if we're moving from [competitor]?" or "Can
  we import existing data?"
- **Security and trust.** "Is my data safe?" / "Where is data
  stored?" / "Can we self-host?"
- **Cancel / lock-in.** "Can I cancel anytime?" Honest answer beats
  evasive marketing.
- **Pricing edge cases.** "Is there a free tier?" / "What happens if
  I exceed the included usage?"
- **Specific to your audience.** Engineering pages get a
  self-host or API question. Consumer pages get a privacy or refund
  question.

5–7 questions is the sweet spot. Past 7, the page feels desperate to
preempt every objection. If you have more, move some to a docs page.

---

## Question + answer format

- **Questions sound like real things real people ask.** "How long
  does setup take?" beats "What is the implementation timeline?"
  Conversational > corporate.
- **Answers are 1–3 sentences.** If an answer needs a paragraph,
  link out to a docs page in the answer.
- **Be specific in answers.** "Most teams are up in under 15 minutes"
  beats "Setup is fast." Concrete details signal that the answer
  isn't marketing fluff.
- **Don't ask easy softball questions.** Answering "Why should I
  choose you?" with marketing copy doesn't help. The FAQ section is
  for the friction questions.

---

## Accordion behavior

Each row uses the native `<details><summary>` HTML element — accessible
by default, no JS required for the basic open/close. The summary
contains the question text and a small `+` icon at the right; the
expanded body contains a paragraph or two of answer text.

The icon rotates 45° to become an `×` when the row is open. The
animation is 250–300ms with the page's standard ease.

Optional behavior: **single-open** (opening one closes the others) —
nice on mobile especially, since multiple open rows make the page
feel sprawling. Add a small JS listener on the toggle event to close
siblings when one opens.

By default, the **first question is open** when the page loads. This
gives the user something to read immediately and signals "yes, you're
allowed to click these."

---

## Aesthetic moves

- **Hairline dividers between rows;** the first row gets a top
  divider too, so the list feels bounded rather than floating.
- **No card backgrounds, no shadows.** The accordion is a typographic
  system, not a card system. Visual weight comes from the type and
  spacing, not from boxes.
- **Question text is the display font** at around 21–24px, medium
  weight, tight letter-spacing. Bigger than body copy, smaller than
  feature headlines.
- **Answer text is the text font** at 16–17px in the muted text
  color, max-width around 560px so it doesn't sprawl.
- **Generous vertical padding inside each row** (around 28px) so
  questions feel hit-targets, not a checklist.

---

## Placement

The FAQ usually sits between pricing and the final CTA. It's the
"answer the last objections" beat right before the final ask.

If pricing isn't on the page, FAQ can sit between testimonials and
the final CTA.

---

## What to avoid

- **Centered FAQ headline + centered questions.** This is the
  generic web-template look. The two-column sticky-heading layout is
  what distinguishes a senior-designer FAQ from a Bootstrap one.
- **Fake urgency questions** ("Why should I sign up today?"). These
  are sales pitches in disguise and feel desperate.
- **Long, prose-heavy answers.** If the answer needs a paragraph,
  link to a docs page or a longer write-up. The FAQ section is a
  triage layer, not a knowledge base.
- **Nesting.** Don't do nested accordions or sub-questions. Flatten.
