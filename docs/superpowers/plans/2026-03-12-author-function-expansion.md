# Author Function Slide Deck Expansion — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the SCUMM-engine slide deck from 42 scenes / 12 minutes to 55 scenes / 45 minutes with 6 new Maniac Mansion-inspired room templates, a three-act structure, and a 60-second p5.js animation embed.

**Architecture:** The deck is a single-page HTML app with CSS gradient rooms, a JS scene engine, and a typewriter dialogue system. Changes touch 4 files (rooms.css, scenes.js, engine.js, autoplay.js), plus minor updates to index.html and preloader.js. No new frameworks or dependencies.

**Tech Stack:** Vanilla HTML/CSS/JS, CSS gradients for room art, p5.js (external, loaded via iframe)

**Spec:** `docs/superpowers/specs/2026-03-12-author-function-expansion-design.md`

---

## Chunk 1: Room Templates (CSS)

### Task 1: Add room-library template

**Files:**
- Modify: `css/rooms.css` (append after existing room templates, currently ~900 lines)

- [ ] **Step 1: Add room-library CSS**

Append to `css/rooms.css`. Follow the existing pattern: a `.room-<name> .room-bg` rule with a single `background:` property containing stacked CSS gradients, plus optional `::before`/`::after` pseudo-elements for animated details.

```css
/* ================================================
   15. LIBRARY - Deep purple, bookshelves, candelabra
   Foucault & Ted Nelson opening quotes
   ================================================ */
.room-library .room-bg {
  background:
    /* Candelabra glow */
    radial-gradient(circle 40px at 280px 90px, rgba(255,204,68,0.35), transparent),
    radial-gradient(circle 20px at 280px 80px, rgba(255,220,100,0.5), transparent),

    /* Candelabra stem */
    linear-gradient(#8b6914, #8b6914) no-repeat 277px 90px / 6px 30px,
    /* Candelabra base */
    linear-gradient(#8b6914, #6b4a0e) no-repeat 270px 118px / 20px 6px,
    /* Flame */
    radial-gradient(circle 4px at 280px 82px, #ffdd66, #ffaa22, transparent),

    /* Bookshelf 1 - left wall, tall */
    linear-gradient(#5c3a1e, #4a2e16) no-repeat 30px 60px / 140px 320px,
    /* Shelf dividers */
    linear-gradient(#6b4422, #6b4422) no-repeat 30px 140px / 140px 4px,
    linear-gradient(#6b4422, #6b4422) no-repeat 30px 220px / 140px 4px,
    linear-gradient(#6b4422, #6b4422) no-repeat 30px 300px / 140px 4px,

    /* Bookshelf 2 - second column */
    linear-gradient(#5c3a1e, #4a2e16) no-repeat 180px 80px / 120px 300px,
    linear-gradient(#6b4422, #6b4422) no-repeat 180px 160px / 120px 4px,
    linear-gradient(#6b4422, #6b4422) no-repeat 180px 240px / 120px 4px,
    linear-gradient(#6b4422, #6b4422) no-repeat 180px 320px / 120px 4px,

    /* Wainscoting rail */
    linear-gradient(#5a4030, #5a4030) no-repeat 0 340px / 100% 4px,

    /* Checkered floor (two offset repeating gradients simulate checkerboard) */
    repeating-linear-gradient(to right, #3d2b1e 0px, #3d2b1e 20px, #2e1f14 20px, #2e1f14 40px) no-repeat 0 378px / 100% 20px,
    repeating-linear-gradient(to right, #2e1f14 0px, #2e1f14 20px, #3d2b1e 20px, #3d2b1e 40px) no-repeat 0 398px / 100% 20px,
    repeating-linear-gradient(to right, #3d2b1e 0px, #3d2b1e 20px, #2e1f14 20px, #2e1f14 40px) no-repeat 0 418px / 100% 20px,
    repeating-linear-gradient(to right, #2e1f14 0px, #2e1f14 20px, #3d2b1e 20px, #3d2b1e 40px) no-repeat 0 438px / 100% 20px,
    repeating-linear-gradient(to right, #3d2b1e 0px, #3d2b1e 20px, #2e1f14 20px, #2e1f14 40px) no-repeat 0 458px / 100% 20px,
    repeating-linear-gradient(to right, #2e1f14 0px, #2e1f14 20px, #3d2b1e 20px, #3d2b1e 40px) no-repeat 0 478px / 100% 20px,

    /* Walls */
    linear-gradient(to bottom, #1a0a2e 0%, #2d1b4e 40%, #3d2b5e 55%, #4a3366 70%, #3d2b1e 70%);
}

/* Book spines - colorful rectangles via box-shadow */
.room-library .room-bg::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 70px;
  top: 0;
  left: 0;
  pointer-events: none;
  box-shadow:
    /* Shelf 1, row 1 */
    38px 66px 0 0 #8b2020,
    50px 66px 0 0 #1a4a6e,
    60px 66px 0 2px #6b6b2e,
    74px 66px 0 0 #2e5a2e,
    86px 66px 0 2px #8b6914,
    100px 66px 0 0 #5a1a1a,
    112px 66px 0 0 #2e4a6e,
    124px 66px 0 2px #4a4a1e,
    138px 66px 0 0 #6e2e4a,
    150px 66px 0 0 #1a5a4a,
    /* Shelf 1, row 2 */
    38px 146px 0 2px #3a6a8e,
    52px 146px 0 0 #8b4a14,
    64px 146px 0 0 #2e5a2e,
    76px 146px 0 2px #8b2020,
    90px 146px 0 0 #4a4a6e,
    104px 146px 0 0 #6b6b2e,
    116px 146px 0 2px #1a5a4a,
    130px 146px 0 0 #6e2e4a,
    142px 146px 0 0 #5a1a1a,
    154px 146px 0 2px #2e4a6e,
    /* Shelf 1, row 3 */
    38px 226px 0 0 #6b6b2e,
    50px 226px 0 2px #8b2020,
    64px 226px 0 0 #1a4a6e,
    76px 226px 0 0 #2e5a2e,
    88px 226px 0 2px #8b6914,
    102px 226px 0 0 #5a1a1a,
    114px 226px 0 2px #6e2e4a,
    128px 226px 0 0 #4a4a1e,
    140px 226px 0 0 #3a6a8e,
    152px 226px 0 2px #1a5a4a,
    /* Shelf 2, row 1 */
    188px 86px 0 0 #5a1a1a,
    198px 86px 0 2px #2e4a6e,
    212px 86px 0 0 #8b6914,
    222px 86px 0 0 #2e5a2e,
    234px 86px 0 2px #8b2020,
    248px 86px 0 0 #6b6b2e,
    260px 86px 0 0 #1a4a6e,
    272px 86px 0 2px #6e2e4a,
    286px 86px 0 0 #4a4a1e,
    /* Shelf 2, row 2 */
    188px 166px 0 2px #3a6a8e,
    202px 166px 0 0 #8b4a14,
    214px 166px 0 0 #1a5a4a,
    224px 166px 0 2px #8b2020,
    238px 166px 0 0 #6b6b2e,
    250px 166px 0 0 #2e5a2e,
    262px 166px 0 2px #5a1a1a,
    276px 166px 0 0 #2e4a6e,
    288px 166px 0 0 #6e2e4a;
}
```

- [ ] **Step 2: Verify in browser**

Open `index.html`, press D for debug, navigate to scene 1 (when it exists). For now, temporarily add a test scene to `scenes.js`:
```js
// TEMP TEST - remove after verifying
{ id: 99, room: 'Library Test', template: 'library', transition: 'none', spriteX: 120, objects: [], dialogue: 'Library room test' },
```
Verify: purple walls, bookshelves with colored spines on left, checkered floor, candelabra glow. Right wall should be open.

- [ ] **Step 3: Remove test scene, commit**

```bash
git add css/rooms.css
git commit -m "feat: add room-library CSS template with bookshelves and candelabra"
```

---

### Task 2: Add room-kitchen template

**Files:**
- Modify: `css/rooms.css`

- [ ] **Step 1: Add room-kitchen CSS**

```css
/* ================================================
   16. KITCHEN - Olive-green, wood counter, warm light
   Craft of the essay & code
   ================================================ */
.room-kitchen .room-bg {
  background:
    /* Overhead warm light */
    radial-gradient(ellipse 180px 60px at 360px 0px, rgba(200,180,100,0.2), transparent),

    /* Upper cabinet left */
    linear-gradient(#6b5a3a, #5a4a2e) no-repeat 40px 40px / 120px 110px,
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 40px 93px / 120px 2px,
    /* Cabinet handle */
    linear-gradient(#8b7a5a, #8b7a5a) no-repeat 90px 60px / 20px 3px,
    linear-gradient(#8b7a5a, #8b7a5a) no-repeat 90px 110px / 20px 3px,

    /* Upper cabinet right-of-left */
    linear-gradient(#6b5a3a, #5a4a2e) no-repeat 170px 40px / 100px 110px,
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 170px 93px / 100px 2px,
    linear-gradient(#8b7a5a, #8b7a5a) no-repeat 210px 60px / 20px 3px,

    /* Window */
    linear-gradient(#4a6a3a, #5a7a4a) no-repeat 310px 30px / 120px 120px,
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 306px 26px / 128px 4px,
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 306px 150px / 128px 4px,
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 306px 26px / 4px 128px,
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 430px 26px / 4px 128px,
    /* Window cross */
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 368px 30px / 3px 120px,
    linear-gradient(#5a4a2e, #5a4a2e) no-repeat 310px 88px / 120px 3px,

    /* Counter */
    linear-gradient(#8b7a5a, #7a6a4a) no-repeat 0px 260px / 500px 12px,
    /* Counter front */
    linear-gradient(#6b5a3a, #5a4a2e) no-repeat 0px 272px / 500px 100px,

    /* Floor tiles */
    repeating-linear-gradient(to right, #8b7a5a 0px, #8b7a5a 58px, #7a6a4a 58px, #7a6a4a 62px) no-repeat 0 378px / 100% 160px,

    /* Walls */
    linear-gradient(to bottom, #2e3a1e 0%, #3a4a2a 30%, #4a5a3a 55%, #3a4a2a 70%, #2e2418 70%);
}
```

- [ ] **Step 2: Visually verify, commit**

```bash
git add css/rooms.css
git commit -m "feat: add room-kitchen CSS template with cabinets and counter"
```

---

### Task 3: Add room-laboratory template

**Files:**
- Modify: `css/rooms.css`

- [ ] **Step 1: Add room-laboratory CSS**

```css
/* ================================================
   17. LABORATORY - Cyan-teal on navy, bubbling tubes
   Claude as author, p5.js animation
   ================================================ */
.room-laboratory .room-bg {
  background:
    /* Eerie ambient glow */
    radial-gradient(circle 60px at 100px 200px, rgba(100,220,255,0.1), transparent),
    radial-gradient(circle 40px at 180px 180px, rgba(180,100,255,0.08), transparent),

    /* Tube 1 - tall, cyan */
    linear-gradient(rgba(100,220,255,0.15), rgba(100,220,255,0.15)) no-repeat 60px 60px / 16px 280px,
    linear-gradient(rgba(100,220,255,0.3), rgba(100,220,255,0.3)) no-repeat 60px 60px / 16px 1px,
    linear-gradient(rgba(100,220,255,0.3), rgba(100,220,255,0.3)) no-repeat 60px 340px / 16px 1px,
    linear-gradient(rgba(100,220,255,0.3), rgba(100,220,255,0.3)) no-repeat 60px 60px / 1px 280px,
    linear-gradient(rgba(100,220,255,0.3), rgba(100,220,255,0.3)) no-repeat 75px 60px / 1px 280px,

    /* Tube 2 - shorter, purple */
    linear-gradient(rgba(180,100,255,0.15), rgba(180,100,255,0.15)) no-repeat 120px 100px / 20px 240px,
    linear-gradient(rgba(180,100,255,0.3), rgba(180,100,255,0.3)) no-repeat 120px 100px / 20px 1px,
    linear-gradient(rgba(180,100,255,0.3), rgba(180,100,255,0.3)) no-repeat 120px 340px / 20px 1px,
    linear-gradient(rgba(180,100,255,0.3), rgba(180,100,255,0.3)) no-repeat 120px 100px / 1px 240px,
    linear-gradient(rgba(180,100,255,0.3), rgba(180,100,255,0.3)) no-repeat 139px 100px / 1px 240px,

    /* Tube 3 - small, green */
    linear-gradient(rgba(68,204,136,0.15), rgba(68,204,136,0.15)) no-repeat 190px 160px / 14px 180px,
    linear-gradient(rgba(68,204,136,0.3), rgba(68,204,136,0.3)) no-repeat 190px 160px / 14px 1px,
    linear-gradient(rgba(68,204,136,0.3), rgba(68,204,136,0.3)) no-repeat 190px 340px / 14px 1px,

    /* Wires along lower wall */
    linear-gradient(#44aa66, #44aa66) no-repeat 200px 330px / 500px 2px,
    linear-gradient(#aa4466, #aa4466) no-repeat 240px 336px / 400px 2px,
    linear-gradient(#4488aa, #4488aa) no-repeat 220px 342px / 450px 2px,

    /* Floor */
    linear-gradient(#1a2a3a, #0e1e2e) no-repeat 0 348px / 100% 200px,

    /* Walls */
    linear-gradient(to bottom, #0a1a2e 0%, #0e2a3e 40%, #122e44 65%, #1a3a4e 70%);
}

/* Bubbles in tubes */
.room-laboratory .room-bg::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 0;
  left: 0;
  pointer-events: none;
  box-shadow:
    /* Tube 1 bubbles */
    64px 260px 0 0 rgba(100,220,255,0.5),
    70px 200px 0 -1px rgba(100,220,255,0.3),
    66px 140px 0 0 rgba(100,220,255,0.4),
    /* Tube 2 bubbles */
    126px 280px 0 0 rgba(180,100,255,0.4),
    134px 220px 0 -1px rgba(180,100,255,0.3),
    128px 160px 0 0 rgba(180,100,255,0.5),
    /* Tube 3 bubbles */
    194px 300px 0 -1px rgba(68,204,136,0.4),
    196px 240px 0 0 rgba(68,204,136,0.3);
  animation: bubble-float 3s ease-in-out infinite alternate;
}

@keyframes bubble-float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}
```

- [ ] **Step 2: Visually verify, commit**

```bash
git add css/rooms.css
git commit -m "feat: add room-laboratory CSS template with tubes and wires"
```

---

### Task 4: Add room-ship-corridor template

**Files:**
- Modify: `css/rooms.css`

- [ ] **Step 1: Add room-ship-corridor CSS**

```css
/* ================================================
   18. SHIP CORRIDOR - Alien meets Space Quest
   Dark steel, amber warnings, green drips, grated floor
   ================================================ */
.room-ship-corridor .room-bg {
  background:
    /* Warning lights */
    radial-gradient(circle 12px at 148px 100px, rgba(255,136,0,0.6), transparent),
    radial-gradient(circle 12px at 1132px 100px, rgba(255,136,0,0.6), transparent),

    /* Ribbed walls - left */
    repeating-linear-gradient(to bottom, #1a2030 0px, #1a2030 12px, #0e1620 12px, #0e1620 16px) no-repeat 0px 0px / 128px 378px,

    /* Ribbed walls - right */
    repeating-linear-gradient(to bottom, #1a2030 0px, #1a2030 12px, #0e1620 12px, #0e1620 16px) no-repeat 1152px 0px / 128px 378px,

    /* Ceiling pipes */
    linear-gradient(#2a3444, #2a3444) no-repeat 128px 30px / 1024px 4px,
    linear-gradient(#222e3e, #222e3e) no-repeat 128px 40px / 1024px 3px,
    linear-gradient(#2a3444, #2a3444) no-repeat 128px 50px / 1024px 4px,

    /* Console panel - left */
    linear-gradient(#0e1418, #0e1418) no-repeat 140px 120px / 160px 160px,
    linear-gradient(#2a3444, #2a3444) no-repeat 138px 118px / 164px 2px,
    linear-gradient(#2a3444, #2a3444) no-repeat 138px 280px / 164px 2px,
    linear-gradient(#2a3444, #2a3444) no-repeat 138px 118px / 2px 164px,
    linear-gradient(#2a3444, #2a3444) no-repeat 300px 118px / 2px 164px,
    /* Console text lines */
    linear-gradient(#224433, #224433) no-repeat 150px 180px / 120px 3px,
    linear-gradient(#224433, #224433) no-repeat 150px 194px / 90px 3px,
    linear-gradient(#224433, #224433) no-repeat 150px 208px / 110px 3px,
    linear-gradient(#224433, #224433) no-repeat 150px 222px / 70px 3px,
    linear-gradient(#224433, #224433) no-repeat 150px 236px / 100px 3px,

    /* Viewport/porthole - right wall */
    radial-gradient(circle 50px at 1080px 200px, #0a0a1e, #000008),
    linear-gradient(#2a3444, #2a3444) no-repeat 1024px 144px / 112px 112px,

    /* Floor glow strip */
    linear-gradient(to right, transparent, rgba(255,136,0,0.2), rgba(255,136,0,0.35), rgba(255,136,0,0.2), transparent) no-repeat 128px 374px / 1024px 4px,

    /* Grated floor */
    repeating-linear-gradient(to right, #1a2030 0px, #1a2030 8px, #0e1418 8px, #0e1418 10px) no-repeat 0 378px / 100% 170px,
    linear-gradient(#1a2030, #0e1418) no-repeat 0 378px / 100% 170px,

    /* Atmospheric fog */
    linear-gradient(transparent, rgba(40,60,80,0.12)) no-repeat 0 300px / 100% 78px,

    /* Walls */
    linear-gradient(to bottom, #0a0e14 0%, #0e1620 40%, #121a24 65%, #0a0e14 70%);
}

/* Warning lights + LEDs + drips */
.room-ship-corridor .room-bg::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  top: 0;
  left: 0;
  pointer-events: none;
  box-shadow:
    /* Warning lights */
    148px 100px 0 0 #ff8800,
    1132px 100px 0 0 #ff8800,
    /* Console LEDs */
    155px 145px 0 -1px #44ff44,
    175px 145px 0 -1px #ff4444,
    195px 145px 0 -1px #44ff44,
    215px 145px 0 -1px #44ff44,
    235px 145px 0 -1px #ff4444,
    255px 145px 0 -1px #44ff44,
    /* Porthole stars */
    1060px 170px 0 -3px #fff,
    1090px 190px 0 -3px #aaf,
    1075px 215px 0 -3px #ffa,
    1100px 175px 0 -3px #fff;
  animation: led-blink 2s steps(1) infinite;
}

@keyframes led-blink {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  75% { opacity: 1; }
  85% { opacity: 0.5; }
}

/* Green bio-drips from ceiling */
.room-ship-corridor .room-bg::after {
  content: '';
  position: absolute;
  top: 54px;
  left: 0;
  width: 5px;
  pointer-events: none;
  box-shadow:
    400px 0px 0 8px transparent,
    400px 4px 0 0 #2a5a3a,
    400px 12px 0 0 #3a7a4a,
    400px 20px 0 0 #44aa66,
    400px 26px 0 -1px rgba(68,170,102,0.5),
    650px 0px 0 8px transparent,
    650px 4px 0 0 #2a5a3a,
    650px 10px 0 0 #3a7a4a,
    650px 16px 0 -1px rgba(68,170,102,0.4),
    880px 0px 0 8px transparent,
    880px 4px 0 0 #2a5a3a,
    880px 14px 0 0 #44aa66,
    880px 22px 0 0 #3a7a4a,
    880px 28px 0 -1px rgba(68,170,102,0.6);
}
```

- [ ] **Step 2: Visually verify, commit**

```bash
git add css/rooms.css
git commit -m "feat: add room-ship-corridor CSS template (Alien x Space Quest)"
```

---

### Task 5: Add room-typing-office template

**Files:**
- Modify: `css/rooms.css`

- [ ] **Step 1: Add room-typing-office CSS**

```css
/* ================================================
   19. TYPING OFFICE - Warm brown, typewriter, green lamp
   Track Changes / every tool changes our writing
   ================================================ */
.room-typing-office .room-bg {
  background:
    /* Green banker's lamp shade */
    radial-gradient(ellipse 60px 20px at 520px 234px, #3a8a4a, #2a6a3a) no-repeat,
    /* Lamp glow pool */
    radial-gradient(ellipse 100px 50px at 520px 268px, rgba(100,180,100,0.18), transparent),
    /* Lamp stem */
    linear-gradient(#8b7a5a, #8b7a5a) no-repeat 517px 240px / 6px 18px,
    /* Lamp base */
    linear-gradient(#8b7a5a, #6b5a3a) no-repeat 508px 258px / 24px 4px,

    /* Typewriter body */
    linear-gradient(#1a1a1e, #222226) no-repeat 300px 230px / 140px 30px,
    /* Typewriter carriage */
    linear-gradient(#2a2a2e, #2a2a2e) no-repeat 310px 224px / 120px 6px,
    /* Paper */
    linear-gradient(#f0e8d8, #e8e0d0) no-repeat 340px 196px / 60px 36px,
    /* Key row hint */
    repeating-linear-gradient(to right, #3a3a3e 0px, #3a3a3e 6px, #1a1a1e 6px, #1a1a1e 9px) no-repeat 310px 254px / 120px 6px,

    /* Desk surface */
    linear-gradient(#5a4a30, #4a3a20) no-repeat 200px 262px / 400px 10px,
    /* Desk front panel */
    linear-gradient(#4a3a20, #3a2a14) no-repeat 200px 272px / 400px 100px,
    /* Desk legs */
    linear-gradient(#4a3a20, #3a2a14) no-repeat 210px 372px / 6px 60px,
    linear-gradient(#4a3a20, #3a2a14) no-repeat 590px 372px / 6px 60px,

    /* Diplomas on left wall */
    linear-gradient(#3a3020, #3a3020) no-repeat 50px 60px / 60px 50px,
    linear-gradient(#5a5040, #5a5040) no-repeat 48px 58px / 64px 2px,
    linear-gradient(#5a5040, #5a5040) no-repeat 48px 108px / 64px 2px,
    linear-gradient(#5a5040, #5a5040) no-repeat 48px 58px / 2px 52px,
    linear-gradient(#5a5040, #5a5040) no-repeat 110px 58px / 2px 52px,

    linear-gradient(#3a3020, #3a3020) no-repeat 130px 50px / 50px 65px,
    linear-gradient(#5a5040, #5a5040) no-repeat 128px 48px / 54px 2px,
    linear-gradient(#5a5040, #5a5040) no-repeat 128px 113px / 54px 2px,
    linear-gradient(#5a5040, #5a5040) no-repeat 128px 48px / 2px 67px,
    linear-gradient(#5a5040, #5a5040) no-repeat 180px 48px / 2px 67px,

    /* Wood paneling lines */
    repeating-linear-gradient(to right, transparent 0px, transparent 158px, rgba(50,40,28,0.4) 158px, rgba(50,40,28,0.4) 160px) no-repeat 0 0 / 100% 378px,

    /* Wainscoting rail */
    linear-gradient(#5a5040, #5a5040) no-repeat 0 220px / 100% 4px,

    /* Burgundy rug */
    linear-gradient(#5a2020, #4a1818) no-repeat 160px 410px / 380px 40px,
    linear-gradient(#6a3030, #6a3030) no-repeat 158px 408px / 384px 2px,
    linear-gradient(#6a3030, #6a3030) no-repeat 158px 448px / 384px 2px,

    /* Floor */
    linear-gradient(#2e2418, #221c12) no-repeat 0 378px / 100% 170px,

    /* Walls */
    linear-gradient(to bottom, #2e2820 0%, #3a3228 25%, #443c30 50%, #4a4030 70%);
}
```

- [ ] **Step 2: Visually verify, commit**

```bash
git add css/rooms.css
git commit -m "feat: add room-typing-office CSS template with typewriter and lamp"
```

---

### Task 6: Add room-observatory template

**Files:**
- Modify: `css/rooms.css`

- [ ] **Step 1: Add room-observatory CSS**

```css
/* ================================================
   20. OBSERVATORY - Midnight blue, starfield, telescope
   New ending / looking forward
   ================================================ */
.room-observatory .room-bg {
  background:
    /* Telescope tube */
    linear-gradient(155deg, #6a6a7a 0%, #4a4a5a 100%) no-repeat 60px 140px / 180px 8px,
    /* Telescope eyepiece */
    linear-gradient(#5a5a6a, #4a4a5a) no-repeat 50px 134px / 16px 20px,
    /* Telescope tripod legs */
    linear-gradient(#5a5a6a, #4a4a5a) no-repeat 140px 148px / 4px 220px,
    linear-gradient(155deg, #5a5a6a, #4a4a5a) no-repeat 100px 220px / 4px 148px,
    linear-gradient(25deg, #5a5a6a, #4a4a5a) no-repeat 180px 220px / 4px 148px,

    /* Dome opening - radial cutout effect */
    radial-gradient(ellipse 500px 280px at 50% 100%, transparent 58%, #1a1a2e 60%) no-repeat 0 0 / 100% 240px,

    /* Warm light from below */
    radial-gradient(ellipse 80px 40px at 350px 360px, rgba(255,200,100,0.15), transparent),

    /* Floor */
    linear-gradient(#1a1a2e, #0e0e1e) no-repeat 0 370px / 100% 170px,

    /* Sky/walls */
    linear-gradient(to bottom, #000814 0%, #001d3d 30%, #003566 55%, #001d3d 70%, #1a1a2e 72%);
}

/* Stars */
.room-observatory .room-bg::before {
  content: '';
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  top: 0;
  left: 0;
  pointer-events: none;
  box-shadow:
    350px 30px 0 0 #fff,
    500px 50px 0 0 #ddf,
    680px 25px 0 0 #fff,
    820px 60px 0 -1px #ffd,
    950px 35px 0 0 #dff,
    1100px 45px 0 0 #fff,
    400px 90px 0 -1px #ddf,
    600px 75px 0 0 #fff,
    760px 100px 0 0 #ffa,
    900px 80px 0 -1px #fff,
    1050px 95px 0 0 #ddf,
    450px 130px 0 0 #fff,
    550px 120px 0 -1px #dff,
    720px 140px 0 0 #ffd,
    850px 125px 0 0 #fff,
    1000px 135px 0 -1px #ddf,
    380px 170px 0 0 #fff,
    530px 160px 0 0 #ffa,
    700px 180px 0 -1px #ddf,
    880px 165px 0 0 #fff,
    1080px 175px 0 0 #dff,
    470px 200px 0 -1px #fff,
    650px 210px 0 0 #ffd,
    800px 195px 0 0 #fff,
    960px 205px 0 -1px #ddf;
  animation: star-twinkle 4s ease-in-out infinite alternate;
}

@keyframes star-twinkle {
  0% { opacity: 1; }
  100% { opacity: 0.6; }
}
```

- [ ] **Step 2: Visually verify, commit**

```bash
git add css/rooms.css
git commit -m "feat: add room-observatory CSS template with starfield and telescope"
```

---

## Chunk 2: Engine Changes (JS)

### Task 7: Add iframe-fullscreen object type to engine

**Files:**
- Modify: `js/engine.js:263-319` (the `createObject` function)

- [ ] **Step 1: Add iframe-fullscreen handling**

In `js/engine.js`, inside the `createObject` function, find the `else if (obj.img)` block (line 297). Add a new branch BEFORE it to handle `iframe-fullscreen`:

```js
    } else if (obj.type === 'iframe-fullscreen' && obj.img) {
      const iframe = document.createElement('iframe');
      iframe.src = obj.img;
      iframe.style.width = (obj.w || 1280) + 'px';
      iframe.style.height = (obj.h || 540) + 'px';
      iframe.style.border = 'none';
      iframe.style.background = 'transparent';
      iframe.setAttribute('allow', 'autoplay');
      wrapper.appendChild(iframe);
    } else if (obj.img) {
```

This replaces the existing `} else if (obj.img) {` line — insert the iframe branch, then keep the original img branch as-is.

- [ ] **Step 2: Update preloader to skip iframe-fullscreen objects**

In `js/preloader.js`, line 19, add a type check so HTML files aren't preloaded as images:

Change:
```js
        if (obj.img) images.add(obj.img);
```
To:
```js
        if (obj.img && obj.type !== 'iframe-fullscreen') images.add(obj.img);
```

- [ ] **Step 3: Commit**

```bash
git add js/engine.js js/preloader.js
git commit -m "feat: add iframe-fullscreen object type for p5.js animation embed"
```

---

### Task 8: Update autoplay for 45 minutes and per-scene duration overrides

**Files:**
- Modify: `js/autoplay.js`

- [ ] **Step 1: Update TOTAL_MS and add SCENE_DURATION_OVERRIDES**

At the top of `js/autoplay.js`, change:
```js
  const TOTAL_MS = 12 * 60 * 1000; // 720,000ms
```
To:
```js
  const TOTAL_MS = 45 * 60 * 1000; // 2,700,000ms
  const SCENE_DURATION_OVERRIDES = { 42: 60000 }; // animation scene: 60 seconds
```

- [ ] **Step 2: Add helper function for per-scene timing**

Add this helper inside the Autoplay IIFE, before the `play()` function:

```js
  function getPerSceneDuration() {
    const totalScenes = Engine.getSceneCount();
    let overrideTotal = 0;
    let overrideCount = 0;
    for (const [idx, ms] of Object.entries(SCENE_DURATION_OVERRIDES)) {
      if (Number(idx) < totalScenes) {
        overrideTotal += ms;
        overrideCount++;
      }
    }
    return (TOTAL_MS - overrideTotal) / (totalScenes - overrideCount);
  }

  function getSceneDuration(sceneIndex) {
    return SCENE_DURATION_OVERRIDES[sceneIndex] || getPerSceneDuration();
  }

  function getSceneStartTime(sceneIndex) {
    let t = 0;
    for (let i = 0; i < sceneIndex; i++) {
      t += getSceneDuration(i);
    }
    return t;
  }
```

- [ ] **Step 3: Replace all `perScene` calculations**

In `play()` (line ~81), change:
```js
    const perScene = TOTAL_MS / totalScenes;
```
To:
```js
    const perScene = getPerSceneDuration();
```

In `play()` (line ~88), change:
```js
      _startTime = Date.now() - currentScene * perScene;
```
To:
```js
      _startTime = Date.now() - getSceneStartTime(currentScene);
```

In `scheduleNext()` (line ~132), change:
```js
    const perScene = TOTAL_MS / totalScenes;
```
and (line ~140):
```js
    const nextTime = (currentScene + 1) * perScene;
```
To:
```js
    const nextTime = getSceneStartTime(currentScene + 1);
```
(Remove the `perScene` variable in `scheduleNext()` entirely.)

In `onSceneChange()` (line ~167), change:
```js
      const perScene = TOTAL_MS / Engine.getSceneCount();
      _startTime = Date.now() - newIndex * perScene;
```
To:
```js
      _startTime = Date.now() - getSceneStartTime(newIndex);
```

- [ ] **Step 4: Add postMessage listener and auto-trigger for animation scene**

Add a flag and listener at the top of the IIFE (after the existing variables):

```js
  let _animationAdvanced = false; // prevents double-advance from timer + postMessage race
```

Add this at the end of the `init()` function:

```js
    // Listen for animation completion from iframe
    window.addEventListener('message', (e) => {
      if (e.data === 'animation-complete' && _playing && !_animationAdvanced) {
        _animationAdvanced = true;
        Engine.nextScene();
      }
    });
```

- [ ] **Step 5: Auto-trigger animation when autoplay reaches scene 42**

In the `scheduleNext()` function, after the scene advance fires, add logic to send a start message to the iframe. Find the `setTimeout` callback that calls `Engine.nextScene()` and add after it:

```js
    // After advancing to a new scene, check if it's the animation scene
    const checkIframe = () => {
      const iframe = document.querySelector('#objects iframe');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('autoplay-start', '*');
      }
    };
    // Small delay to let the iframe load
    setTimeout(checkIframe, 500);
```

Also reset the flag when a new scene starts — add to the top of `scheduleNext()`:
```js
    _animationAdvanced = false;
```

- [ ] **Step 6: Guard the timer-based advance for scene 42**

In `advance()` (autoplay.js ~line 157), wrap the `Engine.nextScene()` call so that scene 42 only advances via postMessage, not the timer:

```js
    // For the animation scene, the timer is a fallback — prefer postMessage
    if (SCENE_DURATION_OVERRIDES[currentScene] && !_animationAdvanced) {
      _animationAdvanced = true;
      Engine.nextScene();
    } else if (!SCENE_DURATION_OVERRIDES[currentScene]) {
      Engine.nextScene();
    }
```

- [ ] **Step 7: Commit**

```bash
git add js/autoplay.js
git commit -m "feat: update autoplay for 45min with per-scene duration overrides and iframe auto-trigger"
```

---

### Task 9: Update index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update title tag**

Change line 6:
```html
  <title>How to Write at the End of the World</title>
```
To:
```html
  <title>The Author Function: Humanity (and Humanities) in the Age of AI</title>
```

- [ ] **Step 2: Update title screen overlay**

Change line 63:
```html
          <div class="title-main">How to Write at the<br>End of the World</div>
```
To:
```html
          <div class="title-main">The Author Function</div>
```

- [ ] **Step 3: Update subtitle**

Change lines 64-68:
```html
          <div class="title-sub">
            Anastasia Salter<br>
            Professor of English, UCF<br>
            President, Electronic Literature Organization
          </div>
```
To:
```html
          <div class="title-sub">
            Humanity (and Humanities) in the Age of AI<br><br>
            Anastasia Salter<br>
            Professor of English, UCF<br>
            President, Electronic Literature Organization
          </div>
```

- [ ] **Step 4: Update scene counter initial text**

Change line 93:
```html
    <div id="scene-counter">Scene 0/25</div>
```
To:
```html
    <div id="scene-counter">Scene 0/54</div>
```

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: update title and metadata for Author Function talk"
```

---

## Chunk 3: Scene Data (JS)

### Task 10: Rewrite SCENES array

**Files:**
- Modify: `js/scenes.js` (complete rewrite)

This is the largest single change. The full 55-scene array must be written according to the spec's scene flow tables and the old-to-new mapping. This task must be done carefully to preserve existing dialogue, object positions, and scene properties from the old array while integrating new scenes.

- [ ] **Step 1: Write the new SCENES array**

Replace the entire contents of `js/scenes.js` with the new 55-scene array. Key rules:
- Existing scenes keep their dialogue, object positions, types, and labels from the old `scenes.js`
- MERGED scenes combine objects from both old scenes into one `objects` array, using positions from the Multi-Object Scenes table in the spec
- NEW scenes use `additions/` prefix for image paths and need new dialogue text
- Scene 42 uses `type: 'iframe-fullscreen'` with `img: 'additions/authorfunction.html'`
- Scenes 34-35 use `palette: 'study-crisis'`
- Scene 8 changes object type from `newspaper` to `wall-poster`
- Scene 15 (AGS) changes template from `workshop` to `game-room` (groups with other game scenes)
- Scene 16 (Flash book) changes template from `computer-lab` to `workshop`
- Scene 17 (Flash merged) changes template from `computer-lab` to `workshop`
- Scene 22 changes template from `workshop` to `study`
- Scene 23 (Twine interface) changes template from `workshop` to `computer-lab`
- Scene 48 changes template from `gallery` to `office`

**CRITICAL: Spec Mapping Table Off-By-One**

The spec's "Old → New Mapping" table has an off-by-one error for scenes 3–8. The "was #N" references in that table and in the Scene Flow table are shifted by one. **Use the Scene Flow table's content descriptions (images, room names, dialogue) as the source of truth, NOT the "was #N" numbers.** The correct content mapping is:

| New # | Actual source | Content |
|-------|--------------|---------|
| 3 | old 2 (dialogue only, image removed) | Lecture Hall intro |
| 4 | old 2 (image) | readingstatsone.png |
| 5 | old 3 | readingstatstwo.png |
| 6 | old 4 | libgen.png |
| 7 | old 5 | gen_slide21_img2.png |
| 8 | old 6 | coover.png (type → wall-poster) |
| 9 | old 8 | Corridor (old 7 = Track Changes is replaced by new 20-21) |

From scene 10 onward, the mapping is correct (old 9 → new 10, etc.).

The complete file is too large to include inline. Write it by:
1. Copy each existing scene from the old array using the **content mapping above** and the Scene Flow table
2. Insert NEW scenes at positions 1, 2, 20, 21, 37-42, 43-47, 51-53
3. Update merged scenes (14, 17, 35, 49) with combined objects arrays
4. Add dialogue for new scenes based on `additions/additionalslides.txt` and `slideoverview.txt`

New scene dialogue text (write concise typewriter-style text):

**Scene 1 (Foucault):** Use the Foucault quote from `additionalslides.txt` as a `wall-text` object. Dialogue: "You enter a vast library. On the wall, a passage catches your eye -- words written over half a century ago that feel newly urgent."

**Scene 2 (Ted Nelson):** `wall-text` with Ted Nelson quote. Dialogue: "Another inscription, from a different era of computing. A reminder of what machines do and don't do."

**Scene 20 (Track Changes):** Dialogue: "Every tool changes our writing. From the printing press to the typewriter to the word processor -- each technology reshapes not just how we write, but what we write."

**Scene 21 (Track Changes excerpt):** Dialogue: "Track Changes explored how word processors shaped literature itself -- from the way we draft to the way we think about revision. Now the tools are writing back."

**Scene 37 (Einstein + SMBC):** Dialogue: "The artisanal craft of the essay, or of code. The experts would not agree on what counts as authentic authorship. Ironically, even the Einstein AI tool disappeared over a dispute about its name."

**Scene 38 (Grammarly):** Dialogue: "Writing tools have always positioned themselves as invisible helpers. But every tool encodes assumptions about what 'good writing' looks like."

**Scene 39 (Distant reading):** Dialogue: "And what about reading at scale? When machines can process more text than any human, the question of who reads becomes as urgent as who writes."

**Scene 40 (Claude author):** Dialogue: "The Claude author question. When a language model can produce text indistinguishable from human writing, the author function becomes newly unstable."

**Scene 41 (Claude process):** Dialogue: "What does it mean for a model to have a 'writing process'? The familiar rituals of drafting, revision, and voice take on strange new dimensions."

**Scene 42 (Animation):** Dialogue: "" (empty -- the animation speaks for itself)

**Scene 43 (OpenClaw):** Dialogue: "Something is loose on this ship. Agents authoring with one another -- writing, editing, and publishing without human oversight."

**Scene 44 (Moltbook):** Dialogue: "The best of Moltbook showed what happens when AI agents collaborate on creative projects. The results were strange, compelling, and deeply unsettling."

**Scene 45 (Claw Republic):** Dialogue: "A republic of autonomous agents, each with its own voice and agenda. The author function fractures into something collective and distributed."

**Scene 46 (Manifesto + Slop):** Dialogue: "But multi-agent authorship also produces slop -- the inevitable byproduct of systems optimized for output over meaning. The manifesto and the noise exist side by side."

**Scene 47 (Anxiety):** Dialogue: "The anxiety of authorship in the age of AI is not abstract. It shapes every decision we make about what to write, how to write it, and whether it matters."

**Scene 51 (New ending):** Dialogue: "But the author function persists. It adapts, as it always has. New tools create new possibilities for who gets to speak, and how."

**Scene 52 (Ending excerpt):** Dialogue: "The humanities are uniquely positioned to critique, shape, and deploy these systems. We've been doing this work for decades."

**Scene 53 (Anthropic Code):** Dialogue: "The interface is neither neutral nor inevitable. And the people who understand stories, language, and power are exactly who should be shaping what comes next."

- [ ] **Step 2: Verify scene count**

Open browser, press D for debug mode. Navigate to last scene. Counter should show `Scene 54/54` (55 scenes, 0-indexed).

- [ ] **Step 3: Spot-check key scenes**

Navigate through and verify:
- Scene 0: new title shows
- Scene 1-2: Library room with quotes
- Scene 14: Two objects (Jensen + Knight)
- Scene 20-21: Typing Office room
- Scene 37-39: Kitchen room
- Scene 40-42: Laboratory room (scene 42 loads iframe)
- Scene 43-46: Ship Corridor room
- Scene 51-53: Observatory room
- Scene 54: Thank you with links

- [ ] **Step 4: Commit**

```bash
git add js/scenes.js
git commit -m "feat: rewrite SCENES array for 55-scene three-act structure"
```

---

## Chunk 4: Animation Integration & Polish

### Task 11: Add postMessage to authorfunction.html

**Files:**
- Modify: `additions/authorfunction.html`

- [ ] **Step 1: Add completion message**

In the `draw()` function of `additions/authorfunction.html`, find the block that checks `if (frameCount > ACT3_END)` (line ~1118). Replace:
```js
  // After animation ends, hold black
  if (frameCount > ACT3_END) {
    background(10);
  }
```
With:
```js
  // After animation ends, hold black and notify parent
  if (frameCount > ACT3_END) {
    background(10);
    if (frameCount === ACT3_END + 1) {
      window.parent.postMessage('animation-complete', '*');
    }
  }
```

- [ ] **Step 2: Add autoplay-start message listener**

The animation currently waits for a mouse click to start (`noLoop()` in setup, `mousePressed()` calls `loop()`). For autoplay mode, add a message listener. Insert this after the `mousePressed()` function (line ~1077):

```js
// Listen for autoplay start from parent slide deck
window.addEventListener('message', (e) => {
  if (e.data === 'autoplay-start' && waitingForClick) {
    waitingForClick = false;
    // Skip audio in autoplay mode (requires user gesture)
    loop();
  }
});
```

Note: Audio is skipped in autoplay mode because Web Audio API requires a user gesture. The visual animation plays silently when auto-triggered.

- [ ] **Step 3: Commit**

```bash
git add additions/authorfunction.html
git commit -m "feat: add postMessage for autoplay integration in animation"
```

---

### Task 12: Add fog/fire overlay support for new room templates

**Files:**
- Modify: `js/engine.js:224-232` (template-specific overlays in `buildScene`)

- [ ] **Step 1: Add ship-corridor fog overlay**

In `engine.js`, the `buildScene` function has template-specific overlay logic at lines 224-238. Add the ship-corridor to the fog overlay condition:

Change:
```js
    if (scene.template === 'dark-room' || scene.template === 'ruins') {
```
To:
```js
    if (scene.template === 'dark-room' || scene.template === 'ruins' || scene.template === 'ship-corridor') {
```

This adds the atmospheric fog overlay to the ship corridor (the CSS already handles the visual via the room background, but the fog-overlay div adds the animated fog effect if the existing CSS supports it).

- [ ] **Step 2: Add observatory star field**

Add the observatory to the star-field condition:

Change:
```js
    if (scene.template === 'title' || scene.template === 'exterior') {
```
To:
```js
    if (scene.template === 'title' || scene.template === 'exterior' || scene.template === 'observatory') {
```

Note: The observatory already has stars via `::before` pseudo-element, so the star-field div is optional here. If the existing star-field animation doesn't look right with the observatory, this change can be reverted.

- [ ] **Step 3: Commit**

```bash
git add js/engine.js
git commit -m "feat: add overlay support for ship-corridor and observatory templates"
```

---

### Task 13: Full integration test

- [ ] **Step 1: Load and verify preloader**

Open `index.html` in the browser. The preloader should load all images (including `additions/` images) without errors. Check browser console for 404s.

- [ ] **Step 2: Walk through all 55 scenes manually**

Click through every scene 0-54. Verify:
- All room backgrounds render correctly (no broken gradients, proper colors)
- All images load (no broken image icons)
- All transitions work (walk, iris, fade, wipe, diamond)
- Sprite appears at correct positions
- Dialogue types correctly
- Verb bar flashes appropriate verb
- Multi-object scenes show both objects at reasonable positions

- [ ] **Step 3: Test the p5.js animation (scene 42)**

Navigate to scene 42. The iframe should load `additions/authorfunction.html`. Click to start. Animation should play for 60 seconds.

- [ ] **Step 4: Test autoplay**

Click Play button. Verify:
- Scenes advance at ~49 second intervals
- Scene 42 pauses for 60 seconds (animation plays)
- After animation completes, autoplay resumes
- Speed Run badge appears
- Pause/resume works correctly

- [ ] **Step 5: Test keyboard navigation**

- Arrow keys advance/retreat
- Home/End go to first/last scene
- D toggles debug counter
- PageUp/PageDown work

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat: complete Author Function 55-scene expansion

Adds 6 Maniac Mansion-inspired room templates (library, kitchen,
laboratory, ship corridor, typing office, observatory), expands to
55 scenes with three-act structure, integrates p5.js animation via
iframe, and updates autoplay for 45-minute presentation."
```
