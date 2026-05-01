/* ============================================
   Character Sprite Controller
   Image-based sprite with walk cycle frames
   Pre-caches all frames to reduce memory churn
   ============================================ */

const Sprite = (() => {
  let _container = null;
  let _img = null;
  let _frame = 'idle';
  let _walkInterval = null;
  let _visible = true;

  // Frame sources
  const FRAME_SRCS = {
    idle:  'sprites/walk1.png',  // front-facing standing
    walk1: 'sprites/walk2.png',  // profile stride 1
    walk2: 'sprites/walk3.png',  // profile stride 2
    walk3: 'sprites/walk4.png',  // profile stride 3
    walk4: 'sprites/walk5.png',  // profile stride 4
  };

  // Pre-cached Image elements (set during init)
  const _cache = {};

  function init(el) {
    _container = el;

    // Pre-cache all frames as Image objects
    for (const [key, src] of Object.entries(FRAME_SRCS)) {
      const img = new Image();
      img.src = src;
      _cache[key] = src;
    }

    // Create the single img element
    _img = document.createElement('img');
    _img.src = FRAME_SRCS.idle;
    _img.alt = '';
    _img.draggable = false;
    _container.appendChild(_img);
  }

  function setFrame(frame) {
    if (_frame === frame) return;
    _frame = frame;
    if (_img && _cache[frame]) {
      _img.src = _cache[frame];
    }
  }

  function show(x) {
    _visible = true;
    _container.classList.remove('hidden');
    if (typeof x === 'number') {
      _container.style.left = x + 'px';
    }
    setFrame('idle');
  }

  function hide() {
    _visible = false;
    _container.classList.add('hidden');
    if (_walkInterval) {
      clearInterval(_walkInterval);
      _walkInterval = null;
    }
  }

  /** Start walk animation cycling through profile walk frames only. */
  function startWalk() {
    const walkFrames = ['walk1', 'walk2', 'walk3', 'walk4'];
    let idx = 0;
    if (_walkInterval) {
      clearInterval(_walkInterval);
      _walkInterval = null;
    }
    _frame = ''; // force update
    setFrame(walkFrames[0]);
    _walkInterval = setInterval(() => {
      idx = (idx + 1) % walkFrames.length;
      setFrame(walkFrames[idx]);
    }, 200);
  }

  function stopWalk() {
    if (_walkInterval) {
      clearInterval(_walkInterval);
      _walkInterval = null;
    }
    if (_visible) {
      _frame = ''; // force update
      setFrame('idle');
    }
  }

  function walkOut(direction) {
    return new Promise((resolve) => {
      startWalk();
      _container.classList.add('walking');
      if (direction === 'left') {
        _container.classList.add('flip');
      } else {
        _container.classList.remove('flip');
      }
      const target = direction === 'right' ? 1300 : -80;
      _container.style.left = target + 'px';

      setTimeout(() => {
        stopWalk();
        _container.classList.remove('walking');
        resolve();
      }, 1450);
    });
  }

  function walkIn(fromDirection, targetX) {
    return new Promise((resolve) => {
      _visible = true;
      _container.classList.remove('hidden');

      // Position off-screen instantly
      _container.style.transition = 'none';
      _container.classList.remove('flip', 'walking');
      _container.style.left = (fromDirection === 'left' ? -80 : 1300) + 'px';
      if (fromDirection === 'right') {
        _container.classList.add('flip');
      } else {
        _container.classList.remove('flip');
      }

      void _container.offsetWidth;

      // Start walk cycle and animate to target
      _container.style.transition = '';
      startWalk();
      _container.classList.add('walking');
      _container.style.left = targetX + 'px';

      setTimeout(() => {
        stopWalk();  // sets idle (front-facing)
        _container.classList.remove('walking', 'flip');
        resolve();
      }, 1450);
    });
  }

  function place(x) {
    _visible = true;
    _container.classList.remove('hidden', 'flip', 'walking');
    _container.style.transition = 'none';
    _container.style.left = x + 'px';
    void _container.offsetWidth;
    _container.style.transition = '';
    _frame = ''; // force update
    setFrame('idle');
  }

  return { init, show, hide, startWalk, stopWalk, walkOut, walkIn, place, setFrame };
})();
