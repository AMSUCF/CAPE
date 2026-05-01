/* ============================================
   Transition Orchestrator
   Sequences animations + DOM swaps between scenes
   ============================================ */

const Transitions = (() => {
  let _overlay = null;
  let _viewport = null;
  let _locked = false;

  function init(overlay, viewport) {
    _overlay = overlay;
    _viewport = viewport;
  }

  function isLocked() {
    return _locked;
  }

  async function run(type, swapFn, opts = {}) {
    if (_locked) return;
    _locked = true;

    const showSprite = opts.showSprite !== false;
    const spriteX = opts.spriteX || 200;
    const direction = opts.direction || 'right';

    try {
      switch (type) {
        case 'none':
          await swapFn();
          if (showSprite) Sprite.place(spriteX);
          break;
        case 'walk-right':
        case 'walk-left':
          await doWalkTransition(direction, swapFn, spriteX, showSprite);
          break;
        case 'fade':
          await doFadeWithWalk('fade', direction, swapFn, spriteX, showSprite);
          break;
        case 'fade-slow':
          await doFadeWithWalk('fade-slow', direction, swapFn, spriteX, showSprite);
          break;
        case 'iris':
          await doIrisWithWalk(direction, swapFn, spriteX, showSprite);
          break;
        case 'diamond':
          await doDiamondWithWalk(direction, swapFn, spriteX, showSprite);
          break;
        case 'wipe-right':
          await doWipeWithWalk('right', direction, swapFn, spriteX, showSprite);
          break;
        case 'wipe-left':
          await doWipeWithWalk('left', direction, swapFn, spriteX, showSprite);
          break;
        case 'wipe-down':
          await doWipeWithWalk('down', direction, swapFn, spriteX, showSprite);
          break;
        default:
          await swapFn();
          if (showSprite) Sprite.place(spriteX);
          break;
      }
    } finally {
      _locked = false;
    }
  }

  // --- Iris with walk ---
  async function doIrisWithWalk(direction, swapFn, spriteX, showSprite) {
    const exitDir = direction === 'right' ? 'right' : 'left';
    const enterDir = direction === 'right' ? 'left' : 'right';

    // Walk out (don't await — overlap with iris close)
    Sprite.walkOut(exitDir);
    await wait(400);

    const pctX = getSpritePercentX();
    const pctY = '70%';
    _viewport.style.setProperty('--iris-x', pctX);
    _viewport.style.setProperty('--iris-y', pctY);
    _viewport.classList.add('iris-closing');
    await wait(820);

    _viewport.classList.remove('iris-closing');
    _viewport.style.clipPath = 'circle(0% at ' + pctX + ' ' + pctY + ')';
    Sprite.stopWalk();

    await swapFn();
    if (!showSprite) Sprite.hide();
    await wait(50);

    // Iris open
    _viewport.style.setProperty('--iris-x', pctX);
    _viewport.style.setProperty('--iris-y', pctY);
    _viewport.classList.add('iris-opening');
    _viewport.style.clipPath = '';

    // Walk in during iris open — await fully
    if (showSprite) {
      await Sprite.walkIn(enterDir, spriteX);
    } else {
      await wait(820);
    }
    _viewport.classList.remove('iris-opening');
  }

  // --- Diamond with walk ---
  async function doDiamondWithWalk(direction, swapFn, spriteX, showSprite) {
    const exitDir = direction === 'right' ? 'right' : 'left';
    const enterDir = direction === 'right' ? 'left' : 'right';

    Sprite.walkOut(exitDir);
    await wait(400);

    _viewport.classList.add('diamond-closing');
    await wait(820);

    _viewport.classList.remove('diamond-closing');
    _viewport.style.clipPath = 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)';
    Sprite.stopWalk();

    await swapFn();
    if (!showSprite) Sprite.hide();
    await wait(50);

    _viewport.classList.add('diamond-opening');
    _viewport.style.clipPath = '';

    if (showSprite) {
      await Sprite.walkIn(enterDir, spriteX);
    } else {
      await wait(820);
    }
    _viewport.classList.remove('diamond-opening');
  }

  // --- Wipe with walk ---
  async function doWipeWithWalk(wipeDir, walkDir, swapFn, spriteX, showSprite) {
    const exitDir = walkDir === 'right' ? 'right' : 'left';
    const enterDir = walkDir === 'right' ? 'left' : 'right';

    Sprite.walkOut(exitDir);
    await wait(400);

    _overlay.className = 'wipe-' + wipeDir + '-close';
    await wait(420);

    _overlay.className = '';
    _overlay.style.background = '#000';
    Sprite.stopWalk();

    await swapFn();
    if (!showSprite) Sprite.hide();
    await wait(50);

    _overlay.className = 'wipe-' + wipeDir + '-open';
    _overlay.style.background = '';

    if (showSprite) {
      await Sprite.walkIn(enterDir, spriteX);
    } else {
      await wait(420);
    }
    _overlay.className = '';
  }

  // --- Fade with walk ---
  async function doFadeWithWalk(type, direction, swapFn, spriteX, showSprite) {
    const isSlow = type === 'fade-slow';
    const duration = isSlow ? 1200 : 600;
    const outClass = isSlow ? 'fade-slow-out' : 'fade-out';
    const inClass = isSlow ? 'fade-slow-in' : 'fade-in';
    const exitDir = direction === 'right' ? 'right' : 'left';
    const enterDir = direction === 'right' ? 'left' : 'right';

    // Walk out during fade out
    Sprite.walkOut(exitDir);
    await wait(200);

    _overlay.className = outClass;
    await wait(duration + 50);
    Sprite.stopWalk();

    await swapFn();
    if (!showSprite) Sprite.hide();
    await wait(100);

    _overlay.className = inClass;

    // Walk in during fade in — await fully
    if (showSprite) {
      await Sprite.walkIn(enterDir, spriteX);
    } else {
      await wait(duration);
    }
    _overlay.className = '';
  }

  // --- Walk (character walks + wipe) ---
  async function doWalkTransition(direction, swapFn, spriteX, showSprite) {
    const exitDir = direction === 'right' ? 'right' : 'left';
    const enterDir = direction === 'right' ? 'left' : 'right';
    const wipeDir = direction;

    await Sprite.walkOut(exitDir);

    _overlay.className = 'wipe-' + wipeDir + '-close';
    await wait(420);

    _overlay.className = '';
    _overlay.style.background = '#000';
    await swapFn();
    await wait(50);

    _overlay.className = 'wipe-' + wipeDir + '-open';
    _overlay.style.background = '';
    await wait(420);
    _overlay.className = '';

    if (showSprite) {
      await Sprite.walkIn(enterDir, spriteX);
    } else {
      Sprite.hide();
    }
  }

  function getSpritePercentX() {
    const spriteEl = document.getElementById('sprite');
    const rawX = spriteEl ? (parseInt(spriteEl.style.left) || 200) + 28 : 640;
    const vpW = _viewport ? _viewport.offsetWidth : 1280;
    return ((rawX / vpW) * 100).toFixed(1) + '%';
  }

  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  return { init, run, isLocked };
})();
