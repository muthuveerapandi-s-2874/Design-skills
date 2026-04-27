# Before / After: The AI Stack vs. Rhythmic Composition

The same content, two ways. The "before" is what AI defaults to when given no constraints. The "after" is what this skill produces.

Read both. Then compare the rhythm tables at the bottom. The difference is structural, not cosmetic.

---

## The brief

A landing page for a hypothetical product called **Slate** — a writing tool for technical teams. The user asks: "Build me a landing page for Slate. It's a markdown editor with built-in version control, AI suggestions, and team comments."

---

## ❌ Before: The AI stack

```html
<!-- Section 1: Hero -->
<section style="text-align: center; padding: 6rem 2rem;">
  <h1 style="font-size: 56px;">Slate — Writing tool for technical teams</h1>
  <p>Markdown editor with version control, AI suggestions, and team comments.</p>
  <button>Get Started</button>
  <button>Learn More</button>
  <img src="hero-screenshot.png" alt="" style="margin-top: 4rem;">
</section>

<!-- Section 2: Features (3-column grid) -->
<section style="text-align: center; padding: 6rem 2rem;">
  <h2>Features</h2>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    <div class="card">
      <h3>Markdown Editor</h3>
      <p>Write in markdown with live preview.</p>
    </div>
    <div class="card">
      <h3>Version Control</h3>
      <p>Track every change. Restore any version.</p>
    </div>
    <div class="card">
      <h3>AI Suggestions</h3>
      <p>Get smart writing suggestions as you type.</p>
    </div>
  </div>
</section>

<!-- Section 3: Testimonial -->
<section style="text-align: center; padding: 6rem 2rem;">
  <blockquote>"Slate has transformed how our team writes."</blockquote>
  <p>— Sarah, Engineering Manager</p>
</section>

<!-- Section 4: Pricing -->
<section style="text-align: center; padding: 6rem 2rem;">
  <h2>Simple Pricing</h2>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    <div class="card">
      <h3>Starter</h3>
      <p>$9/mo</p>
    </div>
    <div class="card">
      <h3>Team</h3>
      <p>$29/mo</p>
    </div>
    <div class="card">
      <h3>Enterprise</h3>
      <p>Contact us</p>
    </div>
  </div>
</section>

<!-- Section 5: CTA -->
<section style="text-align: center; padding: 6rem 2rem;">
  <h2>Ready to start writing?</h2>
  <button>Get Started</button>
</section>
```

### Why this fails

Every section is centered. Every section is sparse. Every section uses the same vertical rhythm. The cards on section 2 are visually indistinguishable from the cards on section 4 — the eye gets the same shape twice.

The headline doesn't earn its size because the content is generic ("Writing tool for technical teams" could describe anything). The two-button hero hedges the CTA. The testimonial is a single floating quote with no context. The pricing tier names are the same three you see on every SaaS page.

Reading sections 1, 2, 3, 4, 5 in order: centered + sparse → centered + sparse → centered + sparse → centered + sparse → centered + sparse. **Five identical rhythm signatures back-to-back.**

---

## ✅ After: Rhythmic composition

Same content, restructured. Notice that the sections still cover the same ground (hero, features, testimonial, pricing, CTA) — but each one feels structurally distinct.

```html
<!-- Section 1: Asymmetric hero (60/40 split, left-aligned text) -->
<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">Markdown editor for engineering teams</p>
    <h1>Write the docs your code deserves.</h1>
    <p>Slate gives engineering teams a fast markdown editor with built-in version
       control, AI suggestions, and threaded team comments. No more Google Docs
       gymnastics for technical writing.</p>
    <a class="cta-primary">Try Slate free</a>
  </div>
  <div class="hero-visual">
    <!-- Mock editor UI built in HTML/CSS, not a placeholder image -->
    <div class="editor-mock">
      <div class="editor-toolbar">…toolbar buttons…</div>
      <pre><code># API Reference

Slate's REST API uses standard HTTP verbs…</code></pre>
      <div class="editor-comment-pin">3</div>
    </div>
  </div>
</section>

<!-- Section 2: Logo wall (centered, sparse, very different scale) -->
<section class="logo-wall">
  <p class="eyebrow">Used by docs teams at</p>
  <div class="logos">
    <!-- 8 monochrome SVG logos in a row -->
  </div>
</section>

<!-- Section 3: Bento feature grid (mixed-size cards, dense) -->
<section class="bento">
  <div class="big-card">
    <h2>Version control built for prose, not code.</h2>
    <p>Slate tracks every change. Compare any two versions side-by-side. Restore
       a version with one click. No git commands required.</p>
    <!-- Mini diff visualization built in HTML -->
  </div>
  <div class="medium-card-1">
    <h3>AI suggestions</h3>
    <p>Catches passive voice, jargon, and inconsistent terminology — without
       rewriting your style.</p>
  </div>
  <div class="medium-card-2">
    <h3>Threaded comments</h3>
    <p>Pin a comment to any line. Resolve as a team. No notification overload.</p>
  </div>
  <div class="small-card-1">
    <h3>Markdown native</h3>
  </div>
  <div class="small-card-2">
    <h3>Real-time co-editing</h3>
  </div>
  <div class="small-card-3">
    <h3>Export to PDF, HTML, MDX</h3>
  </div>
</section>

<!-- Section 4: Big-feature highlight (asymmetric, dark background) -->
<section class="highlight dark">
  <div class="highlight-visual">
    <!-- Annotated screenshot or mock UI -->
    <div class="version-timeline-mock">
      <div class="version">v3 — 2h ago — Sarah</div>
      <div class="version">v2 — 1d ago — Mark</div>
      <div class="version current">v1 — 3d ago — initial</div>
    </div>
  </div>
  <div class="highlight-text">
    <h2>Every change. Every version. Every time.</h2>
    <p>Engineering teams need version control. Marketing teams need it too —
       they just don't realize it until a draft gets clobbered.</p>
    <ul>
      <li>Auto-saved snapshots every 60 seconds</li>
      <li>Named milestones for major versions</li>
      <li>Branch and merge for parallel drafts</li>
    </ul>
  </div>
</section>

<!-- Section 5: Stat band (centered, oversized numbers) -->
<section class="stats">
  <div class="stat">
    <span class="number">12×</span>
    <span class="label">faster review cycles</span>
  </div>
  <div class="stat">
    <span class="number">4.9</span>
    <span class="label">average team rating</span>
  </div>
  <div class="stat">
    <span class="number">340</span>
    <span class="label">teams shipped this quarter</span>
  </div>
</section>

<!-- Section 6: Testimonial as oversized pull-quote (left-aligned, editorial) -->
<section class="testimonial">
  <blockquote>
    "We replaced three tools with Slate — Google Docs for drafts, GitHub for
    versions, and Slack threads for comments. Our docs ship 12× faster now."
  </blockquote>
  <div class="attribution">
    <strong>Sarah Chen</strong>, VP Engineering at Linkedlite
  </div>
</section>

<!-- Section 7: Pricing — three plan cards, with featured plan visually distinct -->
<section class="pricing">
  <h2>Pricing that scales with your team</h2>
  <div class="plans">
    <div class="plan">
      <h3>Starter</h3>
      <div class="price">$9/mo</div>
      …
    </div>
    <div class="plan featured">  <!-- Visually distinct: colored background, slight scale up -->
      <p class="badge">Most popular</p>
      <h3>Team</h3>
      <div class="price">$29/mo</div>
      …
    </div>
    <div class="plan">
      <h3>Enterprise</h3>
      <div class="price">Custom</div>
      …
    </div>
  </div>
</section>

<!-- Section 8: Final CTA — full-bleed dark band, single primary button -->
<section class="final-cta dark-bleed">
  <h2>Stop fighting your writing tools.</h2>
  <a class="cta-primary">Try Slate free for 14 days</a>
</section>
```

### Why this works

Read sections 1-8 in order: asymmetric+sparse → centered+sparse-tiny → mixed+dense → asymmetric+dark+mid → centered+sparse+oversized → left+sparse+oversized → centered+dense → centered+sparse+full-bleed-dark.

**No two adjacent sections share more than 2 of the 5 dimensions.** That's the structural difference.

The headline ("Write the docs your code deserves") is specific. The hero visual is a constructed editor mock, not a placeholder. The bento grid creates hierarchy through size variation, so the most important feature reads as such automatically. Section 4 inverts the hero's split (visual on left this time, dark background) so it doesn't feel like the same shape repeating.

Section 5's stat band feels like a different page from section 4 because of the alignment shift, the oversized numbers, and the return to light background. Section 8 closes the page with a full-bleed dark band that hasn't been used since section 4 — that returns the visual closure without feeling repetitive.

---

## The rhythm tables side-by-side

### Before — AI stack

| # | Section          | Alignment | Density | Scale | Background    | Composition  |
|---|------------------|-----------|---------|-------|---------------|--------------|
| 1 | Hero             | centered  | sparse  | mid   | light-contain | single col   |
| 2 | Features         | centered  | sparse  | mid   | light-contain | 3-up grid    |
| 3 | Testimonial      | centered  | sparse  | mid   | light-contain | single col   |
| 4 | Pricing          | centered  | sparse  | mid   | light-contain | 3-up grid    |
| 5 | CTA              | centered  | sparse  | mid   | light-contain | single col   |

Adjacent pairs sharing 4+ dimensions: every single one. The page has no rhythm.

### After — Rhythmic composition

| # | Section          | Alignment   | Density | Scale     | Background     | Composition   |
|---|------------------|-------------|---------|-----------|----------------|---------------|
| 1 | Hero             | asymmetric  | sparse  | oversized | light-contain  | 2-col split   |
| 2 | Logo wall        | centered    | sparse  | small     | light-contain  | row grid      |
| 3 | Bento features   | mixed       | dense   | mid       | light-contain  | mixed grid    |
| 4 | Big highlight    | asymmetric  | mid     | mid       | dark-bleed     | 2-col split   |
| 5 | Stat band        | centered    | sparse  | oversized | light-contain  | 3-up row      |
| 6 | Testimonial      | left        | sparse  | oversized | light-contain  | single col    |
| 7 | Pricing          | centered    | dense   | mid       | light-contain  | 3-up grid     |
| 8 | Final CTA        | centered    | sparse  | oversized | dark-bleed     | single col    |

Check adjacent pairs:

- 1→2: alignment, scale, composition (3 differ) ✓
- 2→3: alignment, density, composition (3 differ) ✓
- 3→4: alignment, density, scale, background (4 differ) ✓
- 4→5: alignment, density, scale, background, composition (5 differ — strong rhythm break) ✓
- 5→6: alignment, composition (2 differ — borderline; saved by very different visual character) ⚠️
- 6→7: alignment, density, composition (3 differ) ✓
- 7→8: density, scale, background (3 differ) ✓

Even the after page has one borderline pair (5→6). That's normal — perfect rhythm isn't the goal. **No pair sharing 4+ is the goal.** The before page has 4 such pairs in a row.

---

## What to take from this

The fix isn't in any single section. It's in the relationships between sections.

When you build a page, you can have section 2 be a perfectly fine 3-column feature grid — but only if section 1 wasn't also centered+sparse, and only if section 3 isn't another 3-column grid. The structural quality emerges from the variation, not from any single section being clever.

Before writing HTML for a page, fill in the rhythm table from `SKILL.md` Step 3. Check every adjacent pair. **Then** write the code.
