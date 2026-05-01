# The Author Function: Slide Deck Expansion Design

## Overview

Expand the existing 42-scene SCUMM-engine-style interactive slide deck from a ~20-minute talk ("How to Write at the End of the World") into a 45-minute presentation ("The Author Function: Humanity (and Humanities) in the Age of AI"). The expansion adds 6 new Maniac Mansion-inspired CSS gradient room templates, ~13 new scenes with new images and content, a 60-second p5.js animation embed, and a three-act narrative structure.

## Title Change

**Old:** "How to Write at the End of the World"
**New:** "The Author Function: Humanity (and Humanities) in the Age of AI"

Update the title screen overlay text, the `<title>` tag in `index.html`, and any metadata references.

## Three-Act Structure

The new rooms serve as both thematic homes for new content and act boundaries.

### Act 1 — "How We Got Here" (Scenes 0–19, ~14 min)

Opens with Foucault's author-function framing in the Library, then flows through the existing narrative of reading stats, AI training data, electronic literature history, adventure games, Flash era, and digital preservation.

### Act 1 → Act 2 Transition (Scenes 20–21)

The **Typing Office** serves as the hinge: "every tool changes our writing." Bridges from historical tools to present-day concerns.

### Act 2 — "Where We Are Now" (Scenes 22–42, ~16 min)

Existing content (Twine, Porpentine, KRZ, Undertale, toxic geek culture, author's journey, Haraway) leads into new material: the **Kitchen** (craft of the essay, artisanal authorship) and the **Laboratory** (Claude as author, p5.js animation as dramatic peak).

### Act 2 → Act 3 Transition (Scene 43)

The **Ship Corridor** opens with agents running unsupervised.

### Act 3 — "Where We're Going" (Scenes 43–54, ~15 min)

Multi-agent authorship content in the Ship Corridor, existing inspiration content (Carol, Loveless), then the **Observatory** for the new ending. The existing thank-you/links slide closes the deck.

## New Room Templates

Six new CSS gradient room templates for `rooms.css`, each built entirely with CSS gradients, box-shadows, and pseudo-elements (matching the existing approach — no external images for room backgrounds).

### 1. room-library

**Purpose:** Foucault & Ted Nelson opening quotes
**Palette:** Deep purple (#1a0a2e, #2d1b4e, #4a3366), dark wood (#5c3a1e, #4a2e16), candlelight (#ffcc44)
**Elements:** Tall bookshelves on the left wall with colored book spines. Candelabra with warm glow. Checkered dark wood floor. Wainscoting.
**Layout:** Bookshelves and decorative elements pushed to the left 30%. Right wall fully open for wall-text quote objects. Floor at bottom 30%.
**Maniac Mansion inspiration:** The mansion library — seat of knowledge, where you find the important documents.

### 2. room-kitchen

**Purpose:** Craft of the essay & code (Einstein, Grammarly, SMBC artisanal)
**Palette:** Warm olive-green (#2e3a1e, #3a4a2a, #4a5a3a), wood tones (#8b7a5a, #6b5a3a), warm light
**Elements:** Upper cabinets and window on left side. Counter/workbench across left 60%. Warm overhead light pool.
**Layout:** Cabinets and window left of center. Counter provides secondary surface zone. Right wall open for monitor-screen/wall-poster objects. Floor at bottom 30%.
**Maniac Mansion inspiration:** The kitchen — domestic labor, where things are made by hand.

### 3. room-laboratory

**Purpose:** Claude as author, the p5.js animation
**Palette:** Cold cyan-teal (#64dcff, #44cc88) on deep navy (#0a1a2e, #0e2a3e, #122e44), purple accents (#b464ff)
**Elements:** Bubbling glass tubes on far left with colored liquid and rising bubbles. Trailing wires along lower wall. Eerie ambient glow.
**Layout:** Lab equipment pushed to left 20%. Extra-large center-right zone (55% width) for monitor content. The animation scene uses the fullscreen object type to take over the entire viewport. Floor at bottom 25%.
**Maniac Mansion inspiration:** Dr. Fred's laboratory — where something new is being created (or unleashed).

### 4. room-ship-corridor

**Purpose:** Multi-agent authorship (OpenClaw, Moltbook, Claw Republic)
**Palette:** Dark steel-blue (#0a0e14, #0e1620, #1a2030), amber warnings (#ff8800), green status LEDs (#44ff44), bio-green drips (#44aa66)
**Elements:** Ribbed walls (Alien-style) on left and right edges (10% width each). Ceiling pipes. Amber warning lights. Small console panel with blinking LED indicators on left. Green biological drips from ceiling pipes. Grated metal floor with amber guide strip. Atmospheric fog in lower portion. Small viewport/porthole showing starfield.
**Layout:** Console and ribbed walls frame the edges. Large center-right zone (55% width) for book-cover and monitor-screen objects. Floor at bottom 30% with grated texture.
**Maniac Mansion inspiration:** Alien meets Space Quest — something is loose on this ship. The agents are running unsupervised.

### 5. room-typing-office

**Purpose:** Track Changes / "every tool changes our writing"
**Palette:** Warm brown (#2e2820, #3a3228, #443c30), wood paneling (#4a4030, #5a5040), green banker's lamp (#2a6a3a, #3a8a4a), paper white (#f0e8d8), burgundy rug (#5a2020)
**Elements:** Vertical wood paneling with wainscoting rail across back wall. Typewriter on desk (permanent room fixture, left-center) with paper coming out of the platen. Green banker's lamp with downward glow pool casting green light on the desk surface. Framed diplomas on left wall. Worn burgundy rug on floor. Desk with legs visible.
**Layout:** Typewriter and lamp are permanent fixtures on a desk at left-center. Diplomas on far left wall. Right wall (45% width) fully open for wall-poster/monitor-screen objects. Floor at bottom 30%.
**Maniac Mansion inspiration:** The old-school office — writing was once a physical, mechanical act.

### 6. room-observatory

**Purpose:** New ending / looking forward
**Palette:** Midnight blue (#000814, #001d3d, #003566), starfield whites, warm accent (#ffd60a), cool metal (#4a4a5a, #6a6a7a)
**Elements:** Starfield across upper portion (scattered dots with box-shadow glow in white, pale blue, pale yellow). Telescope on tripod at far left, angled upward. Dome opening suggested by radial gradient. Warm light from below. Dark floor.
**Layout:** Telescope far left. Massive open center-right zone (60% width) for content against starfield backdrop. Stars visible around and behind objects for a contemplative, expansive feel. Floor at bottom 25%.
**Maniac Mansion inspiration:** Looking outward and upward — a reflective, hopeful counterpoint to the ruins. Where you end up after surviving the mansion.

### Consistency Rules Across All New Rooms

| Element | Position | Notes |
|---------|----------|-------|
| Floor line | Bottom 30% (25% for lab/observatory) | Matches existing room conventions |
| Sprite position | Left 5–15%, standing on floor line | Consistent across all rooms |
| Room furniture/detail | Left 3–30% | Keeps right side clear for content |
| Primary content zone | Top 5–15% to 55–60%, right 30–95% | All rooms use the same region |
| Secondary surface zone | 40–55% height, left-center | Kitchen and Typing Office only (have desk/counter surfaces) |

## Scene Migration

The new 55-scene flow is a complete rewrite of the SCENES array. The mapping from old scene indices to new is as follows. Scenes marked **NEW** have no old equivalent. Scenes marked **DROPPED** from the old deck are cut intentionally.

### Old → New Mapping

| Old # | New # | Notes |
|-------|-------|-------|
| 0 | 0 | Title screen (text updated) |
| — | 1 | **NEW** — Library, Foucault quote |
| — | 2 | **NEW** — Library, Ted Nelson quote |
| 1 | — | **DROPPED** — UCF exterior arrival (cut for pacing; talk now opens with theoretical framing) |
| 2 | 3 | Lecture Hall intro (dialogue only, readingstatsone.png moved to scene 4) |
| 2 | 4 | readingstatsone.png (image from old scene 2, presented as its own scene) |
| 3 | 5 | Reading stats two (readingstatstwo.png) |
| 4 | 6 | Data center / LibGen (libgen.png) |
| 5 | 7 | Data center / Books3 AI training (gen_slide21_img2.png) |
| 6 | 8 | Archive / Coover (coover.png, object type changed from `newspaper` to `wall-poster`) |
| 7 | — | Track Changes — replaced by NEW scenes 20-21 in Typing Office (image trackchanges.jpg reused) |
| 8 | 9 | Corridor |
| 9 | 10 | Study / quest |
| 10 | 11 | Study / python |
| 11 | 12 | Study / alice |
| 12 | 13 | Game room / tentacle |
| 13+14 | 14 | **MERGED** — Jensen + Knight into one scene (two objects) |
| 15 | 15 | Game room / AGS |
| 16 | 16 | Workshop / flash |
| 17+18 | 17 | **MERGED** — Two Flash content scenes into one (two objects) |
| 19 | 18 | Workshop / Lawhead quote |
| 20 | 19 | Archive / preservation |
| — | 20 | **NEW** — Typing Office, trackchanges |
| — | 21 | **NEW** — Typing Office, trackchanges_excerpt |
| 21 | 22 | Twining (template changed from workshop to study — book moves to the study where other books live) |
| 22 | 23 | Twine interface |
| 23 | 24 | Porpentine |
| 24 | 25 | Outsider |
| 25 | 26 | KRZ exchange |
| 26 | 27 | KRZ machine |
| 27 | 28 | Undertale |
| 28 | 29 | Bad time |
| 29 | 30 | Undertale humanity |
| 30 | 31 | KRZ ruin |
| 31 | 32 | Geek |
| 32 | 33 | Aftermath |
| 33 | 34 | Fanboy (study-crisis palette) |
| 34+35 | 35 | **MERGED** — Pivoting + Making into one scene (two book-cover objects) |
| 36 | 36 | Haraway quote |
| — | 37 | **NEW** — Kitchen, Einstein + SMBC |
| — | 38 | **NEW** — Kitchen, Grammarly |
| — | 39 | **NEW** — Kitchen, distant reading |
| — | 40 | **NEW** — Laboratory, Claude author |
| — | 41 | **NEW** — Laboratory, Claude process |
| — | 42 | **NEW** — Laboratory, p5.js animation |
| — | 43 | **NEW** — Ship Corridor, OpenClaw |
| — | 44 | **NEW** — Ship Corridor, Moltbook |
| — | 45 | **NEW** — Ship Corridor, Claw Republic |
| — | 46 | **NEW** — Ship Corridor, Manifesto + Slop |
| — | 47 | **NEW** — Study, Anxiety book |
| 37 | 48 | Loveless (template changed from gallery to office — groups all "inspiration" content in the office) |
| 38+39 | 49 | **MERGED** — Carol Poster (was gallery) + Carol (was office) into one scene in office template (two objects) |
| 40 | 50 | Pluribus |
| — | 51 | **NEW** — Observatory, new ending |
| — | 52 | **NEW** — Observatory, ending excerpt |
| — | 53 | **NEW** — Observatory, Anthropic Code |
| 41 | 54 | Thank you / links |

**Summary:** 42 old scenes → 1 dropped (exterior #1), 1 replaced (track changes #7 → new 20-21), 4 merged (13+14, 17+18, 34+35, 38+39), old #2 split into 2 scenes (3+4) = 36 unique old scenes kept + 19 new scenes = 55 total.

### Deliberate Changes to Existing Scenes

- **Scene 8 (Coover):** Object type changed from `newspaper` to `wall-poster`. The newspaper type's sepia filter and clipping are less appropriate for the Coover article image.
- **Scene 22 (Twining):** Template changed from `room-workshop` to `room-study`. Groups the book with the other book-display scenes in the study.
- **Scene 14 (Knight):** Object type changed from `monitor-screen` to `book-cover`. Gabriel Knight is displayed as a book/game box rather than a screen image.
- **Scene 48 (Loveless):** Template changed from `room-gallery` to `room-office`. Groups all end-of-talk inspiration content in the office room.
- **Scene 49 (Carol):** Two previously separate scenes (Carol Poster in gallery + Carol in office) merged into one office scene with two objects.
- **Scene 15 (AGS):** Template changed from `room-workshop` to `room-game-room`. Groups the authoring tool with the other game scenes.
- **Scene 16 (Flash book):** Template changed from `room-computer-lab` to `room-workshop`. Flash era content consolidated in the workshop.
- **Scene 17 (Flash merged):** Template changed from `room-computer-lab` to `room-workshop` (same reason).
- **Scene 23 (Twine interface):** Template changed from `room-workshop` to `room-computer-lab`. Twine editor is more natural on a computer screen.
- **Scene 20 (Track Changes):** Uses root-level `trackchanges.jpg` (same file as in the original deck). The `additions/trackchanges.jpg` file is not used.
- **Scenes 14, 17, 35, 37, 46, 49:** These scenes contain two objects each. See "Multi-Object Scenes" below.

## Multi-Object Scenes

Several scenes display two objects simultaneously. Each object needs its own entry in the scene's `objects` array with distinct positioning:

| Scene | Object 1 | Position 1 | Object 2 | Position 2 |
|-------|----------|------------|----------|------------|
| 14 | wall-poster (jensen) | x: 450, y: 60 | book-cover (knight) | x: 850, y: 120 |
| 17 | monitor-screen (gen_slide23_img3) | x: 400, y: 50 | monitor-screen (gen_slide24_img1) | x: 820, y: 50 |
| 35 | book-cover (pivoting) | x: 450, y: 100 | book-cover (making) | x: 800, y: 100 |
| 37 | monitor-screen (einstein_howitworks) | x: 450, y: 50 | wall-poster (smbc_artisanal) | x: 850, y: 60 |
| 46 | wall-poster (clawmanifesto) | x: 420, y: 50 | monitor-screen (claw_slop) | x: 830, y: 50 |
| 49 | wall-poster (CarolPoster) | x: 420, y: 50 | monitor-screen (carol) | x: 830, y: 50 |

Positions are approximate and should be tuned visually. The primary content zone spans x: 384–1216 (right 30–95% of 1280px) and y: 64–432 (top 9–60% of 720px). Two objects side-by-side should each be ~300px wide with ~50px gap.

## Scene Flow (55 scenes total)

Each row is annotated with its origin: **NEW**, **EXISTING (was #N)**, or **MERGED (was #N+#M)**.

### Act 1 — "How We Got Here"

| # | Origin | Room | Template | Transition | Content | Objects | Verb |
|---|--------|------|----------|------------|---------|---------|------|
| 0 | EXISTING (was #0) | Title | room-title | none | New title: "The Author Function..." | Title overlay | — |
| 1 | **NEW** | The Library | room-library | iris | Foucault quote on the author function | wall-text | look |
| 2 | **NEW** | The Library | room-library | fade | Ted Nelson: "Computers don't actually think..." | wall-text | talk |
| 3 | EXISTING (was #2, dialogue only) | Lecture Hall | room-lecture-hall | walk-right | Reading stats intro | — | talk |
| 4 | EXISTING (was #2, image) | Lecture Hall | room-lecture-hall | fade | YouGov stats | monitor-screen (readingstatsone.png) | look |
| 5 | EXISTING (was #3) | Lecture Hall | room-lecture-hall | fade | More stats | monitor-screen (readingstatstwo.png) | look |
| 6 | EXISTING (was #4) | Data Center | room-data-center | walk-right | "Something is reading" / LibGen | monitor-screen (libgen.png) | look |
| 7 | EXISTING (was #5) | Data Center | room-data-center | fade | AI training data | monitor-screen (gen_slide21_img2.png) | look |
| 8 | EXISTING (was #6) | Archive | room-archive | walk-right | Coover, end of books 1992 | wall-poster (coover.png) | look |
| 9 | EXISTING (was #8) | Corridor | room-hallway | walk-right | Platforms shape authorship | — | talk |
| 10 | EXISTING (was #9) | Study | room-study | walk-right | First book — adventure games | book-cover (quest.jpg) | look |
| 11 | EXISTING (was #10) | Study | room-study | fade | Monty Python joke | monitor-screen (python.gif) | talk |
| 12 | EXISTING (was #11) | Study | room-study | fade | Alice iPad app | ipad-screen (alice.webp) | look |
| 13 | EXISTING (was #12) | Game Room | room-game-room | walk-right | Day of the Tentacle | monitor-screen (tentacle.webp) | use |
| 14 | MERGED (was #13+#14) | Game Room | room-game-room | fade | Jane Jensen / Gabriel Knight | wall-poster (jensen.jpg) + book-cover (knight.webp) | look |
| 15 | EXISTING (was #15) | Game Room | room-game-room | fade | AGS — tools for authorship | monitor-screen (ags.webp) | use |
| 16 | EXISTING (was #16) | Workshop | room-workshop | walk-right | Flash era | monitor-screen (flash.jpg) | look |
| 17 | MERGED (was #17+#18) | Workshop | room-workshop | fade | Flash content | monitor-screen (gen_slide23_img3.jpg) + monitor-screen (gen_slide24_img1.png) | look |
| 18 | EXISTING (was #19) | Workshop | room-workshop | fade | Natalie Lawhead quote | wall-text | talk |
| 19 | EXISTING (was #20) | Archive | room-archive | walk-right | Flash preservation / open data | monitor-screen (gen_slide26_img1.png) | look |

### Act 1 → Act 2 Transition

| # | Origin | Room | Template | Transition | Content | Objects | Verb |
|---|--------|------|----------|------------|---------|---------|------|
| 20 | **NEW** | The Typing Office | room-typing-office | walk-right | "Every tool changes our writing" | wall-poster (trackchanges.jpg) | look |
| 21 | **NEW** | The Typing Office | room-typing-office | fade | Track Changes excerpt | monitor-screen (additions/trackchanges_excerpt.png) | look |

### Act 2 — "Where We Are Now"

| # | Origin | Room | Template | Transition | Content | Objects | Verb |
|---|--------|------|----------|------------|---------|---------|------|
| 22 | EXISTING (was #21) | Study | room-study | walk-right | Twining book | book-pedestal (twining.png) | look |
| 23 | EXISTING (was #22) | Computer Lab | room-computer-lab | walk-right | Twine interface | monitor-screen (twineinterface.png) | use |
| 24 | EXISTING (was #23) | Gallery Underground | room-gallery-underground | walk-right | Porpentine | wall-poster (porpentine.webp) | look |
| 25 | EXISTING (was #24) | Gallery Underground | room-gallery-underground | fade | Outsider voices | book-cover (outsider.jpg) | look |
| 26 | EXISTING (was #25) | Gallery | room-gallery | walk-right | KRZ exchange | monitor-screen (krzexchange.png) | look |
| 27 | EXISTING (was #26) | Gallery | room-gallery | fade | KRZ machine | monitor-screen (krzmachine.png) | look |
| 28 | EXISTING (was #27) | Arcade | room-arcade | walk-right | Undertale | monitor-screen (undertale.jpg) | use |
| 29 | EXISTING (was #28) | Arcade | room-arcade | fade | Bad time | monitor-screen (badtime.png) | use |
| 30 | EXISTING (was #29) | Arcade | room-arcade | fade | Undertale humanity | monitor-screen (undertalehumanity.png) | look |
| 31 | EXISTING (was #30) | Ruins | room-ruins | fade-slow | "...brings us to the end of the world" | monitor-screen (krzruin.png) | look |
| 32 | EXISTING (was #31) | Ruins | room-ruins | fade | Toxic geek culture | book-cover (geek.jpg) | look |
| 33 | EXISTING (was #32) | Ruins | room-ruins | fade | Aftermath / Epstein quote | monitor-screen (aftermath.png) | look |
| 34 | EXISTING (was #33) | Study (dim) | room-study, palette: study-crisis | walk-right | Fanboy | book-cover (fanboy.jpg) | look |
| 35 | MERGED (was #34+#35) | Study (dim) | room-study, palette: study-crisis | fade | Pivoting / Making | book-cover (pivoting.jpg) + book-cover (making.jpg) | look |
| 36 | EXISTING (was #36) | Dark Room | room-dark-room | fade-slow | Haraway quote | wall-text | talk |
| 37 | **NEW** | The Kitchen | room-kitchen | walk-right | Craft & artisanal authorship | monitor-screen (additions/einstein_howitworks.webp) + wall-poster (additions/smbc_artisanal.png) | look |
| 38 | **NEW** | The Kitchen | room-kitchen | fade | Writing tools | monitor-screen (additions/grammarly.png) | use |
| 39 | **NEW** | The Kitchen | room-kitchen | fade | Distant reading | monitor-screen (additions/distantread.png) | look |
| 40 | **NEW** | Dr. Fred's Lab | room-laboratory | walk-right | Claude as author | monitor-screen (additions/claude_author.png) | talk |
| 41 | **NEW** | Dr. Fred's Lab | room-laboratory | fade | Claude's process | monitor-screen (additions/claude_process.png) | look |
| 42 | **NEW** | Dr. Fred's Lab | room-laboratory | fade-slow | **p5.js animation (60s, iframe)** | iframe-fullscreen (additions/authorfunction.html) | — |

### Act 2 → Act 3 Transition

| # | Origin | Room | Template | Transition | Content | Objects | Verb |
|---|--------|------|----------|------------|---------|---------|------|
| 43 | **NEW** | Ship Corridor | room-ship-corridor | wipe-right | Agents authoring — OpenClaw | book-cover (additions/openclaw.png) | look |

### Act 3 — "Where We're Going"

| # | Origin | Room | Template | Transition | Content | Objects | Verb |
|---|--------|------|----------|------------|---------|---------|------|
| 44 | **NEW** | Ship Corridor | room-ship-corridor | fade | Moltbook | book-cover (additions/moltbook.png) | look |
| 45 | **NEW** | Ship Corridor | room-ship-corridor | fade | Claw Republic | monitor-screen (additions/clawrepublic.webp) | look |
| 46 | **NEW** | Ship Corridor | room-ship-corridor | fade | Claw Manifesto / Slop | wall-poster (additions/clawmanifesto.png) + monitor-screen (additions/claw_slop.png) | look |
| 47 | **NEW** | Study | room-study | walk-right | Anxiety | book-cover (additions/anxiety.png) | look |
| 48 | EXISTING (was #37) | Office | room-office | walk-right | Loveless / research creation | book-pedestal (loveless.jpg) | look |
| 49 | MERGED (was #38+#39) | Office | room-office | fade | Carol and the End of the World | wall-poster (CarolPoster.jpg) + monitor-screen (carol.webp) | look |
| 50 | EXISTING (was #40) | Office | room-office | fade | E pluribus | monitor-screen (pluribus.jpg) | look |
| 51 | **NEW** | The Observatory | room-observatory | walk-right | New ending — looking forward | monitor-screen (additions/newending.png) | look |
| 52 | **NEW** | The Observatory | room-observatory | fade | Ending excerpt | wall-poster (additions/endingexcerpt.png) | look |
| 53 | **NEW** | The Observatory | room-observatory | fade | Anthropic Code | monitor-screen (additions/anthropiccode.png) | look |
| 54 | EXISTING (was #41) | Thank You | room-office | fade-slow | Links and resources | link-list | — |

## p5.js Animation Integration

### Embedding

- Add a new object type `iframe-fullscreen` to the engine's `createObject` function in `engine.js`
- When the engine encounters `type: 'iframe-fullscreen'`, it creates an `<iframe>` element instead of an `<img>`, with `src` set to the object's `img` path
- The iframe fills the viewport area (same dimensions as `fullscreen` images: 100% width and height of the viewport)
- The iframe gets `border: none`, `allow: autoplay`, and a transparent background
- The existing `fullscreen` type remains unchanged (always creates `<img>` elements)

### Autoplay Handling

- When autoplay reaches scene 42, pause the autoplay timer
- Listen for a completion event from the iframe (postMessage from the p5.js sketch when the 60-second animation ends)
- On completion, resume autoplay and advance to scene 43
- If the user manually advances during the animation, cancel the iframe and proceed normally

### Click-to-Start

- The animation's own click-to-start screen is appropriate — the user clicks the viewport area to begin the animation, which aligns with the existing "click to advance" interaction pattern
- In autoplay mode, auto-trigger the animation start via postMessage

## Autoplay Recalculation

- **Total duration:** 45 minutes (2700 seconds)
- **Animation scene (42):** 60 seconds fixed
- **Remaining 54 scenes:** (2700 - 60) / 54 ≈ **49 seconds per scene**
- The existing autoplay system calculates equal time per scene. Add a `SCENE_DURATION_OVERRIDES` map to `autoplay.js`:
  ```js
  const SCENE_DURATION_OVERRIDES = { 42: 60000 }; // animation scene: 60 seconds
  ```
  When calculating per-scene timing, subtract all override durations from the total, then divide the remainder equally among non-overridden scenes.

## Sprite Considerations

### Foucault and Ted Nelson Pixel Characters

The additions reference "pixel character" sprites for Foucault and Ted Nelson. Two approaches:

**Option A (Recommended):** Use the existing professor sprite for all scenes. The Foucault and Ted Nelson quotes display as wall-text objects — the professor is presenting them, not the philosophers speaking directly. This is simpler and consistent with the rest of the deck.

**Option B:** Create 2 additional CSS pixel-art sprites (Foucault, Ted Nelson) that appear in the Library scenes only. This is more visually distinctive but requires significant CSS pixel art work and a mechanism to swap sprites per-scene.

This spec assumes Option A. If Option B is desired, the sprite system needs a `sprite` property added to the scene data to specify which character to display.

## Files to Modify

### CSS
- `css/rooms.css` — Add 6 new room template classes
- `css/scumm.css` — No changes needed (title text is in index.html, not CSS)

### JavaScript
- `js/scenes.js` — Replace SCENES array with new 55-scene flow
- `js/engine.js` — Add `iframe-fullscreen` object type in `createObject()`, update title
- `js/autoplay.js` — Update `TOTAL_MS` from `12 * 60 * 1000` to `45 * 60 * 1000`. Add `SCENE_DURATION_OVERRIDES` map. Modify the four timing calculation sites (lines ~82, ~132, ~140, ~167) to account for per-scene overrides. Add animation pause/resume logic via postMessage listener.
- `js/preloader.js` — Collect image paths from new scenes (skip `iframe-fullscreen` objects — HTML files are not preloadable as images)

### HTML
- `index.html` — Update `<title>` tag and title screen overlay text. Update hardcoded scene counter initial text.

### No Changes Needed
- `css/reset.css`, `css/fonts.css`, `css/sprites.css`, `css/transitions.css` — unchanged
- `js/typewriter.js`, `js/sprites.js`, `js/transitions.js` — unchanged

### New Files
- `additions/authorfunction.html` — Already exists, the p5.js animation (may need postMessage integration for autoplay coordination)

## Image Path Convention

Existing images are in the project root and referenced by bare filename (e.g., `'readingstatsone.png'`). New images are in the `additions/` directory and **must** be referenced with the `additions/` prefix in scene object `img` properties (e.g., `'additions/claude_author.png'`).

The root-level `trackchanges.jpg` (used in scene 20) is a different file from `additions/trackchanges_excerpt.png` (used in scene 21).

### New images (all paths relative to project root):
- additions/anxiety.png
- additions/distantread.png
- additions/einstein_howitworks.webp
- additions/smbc_artisanal.png
- additions/grammarly.png
- additions/claude_author.png
- additions/claude_process.png
- additions/anthropiccode.png
- additions/openclaw.png
- additions/moltbook.png
- additions/clawrepublic.webp
- additions/clawmanifesto.png
- additions/claw_slop.png
- additions/newending.png
- additions/endingexcerpt.png
- additions/trackchanges_excerpt.png
- additions/authorfunction.html (iframe, not preloaded as image)

## Dialogue Text

Dialogue text for new scenes needs to be written. Key scenes requiring new dialogue:

- Scene 1: Foucault quote (from additions content)
- Scene 2: Ted Nelson quote (from additions content)
- Scene 20: "Every tool changes our writing" / Track Changes intro
- Scene 21: Track Changes reflection
- Scene 37–39: Craft of the essay narration
- Scene 40–41: Claude as author narration
- Scene 43–46: Multi-agent authorship narration
- Scene 51–53: New ending narration

Existing dialogue from the slideoverview.txt and additions files should be adapted to fit the typewriter format (concise, one thought per scene).

## Out of Scope

- Audio/sound design (referenced in the animation spec but not part of this deck expansion)
- New pixel-art sprite characters (using existing professor sprite per Option A)
- Changes to the transition system (existing transitions are sufficient)
- Mobile/responsive changes (deck is fixed 1280x720)
