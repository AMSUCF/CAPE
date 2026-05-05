/* ============================================
   Core Engine
   Scene state, keyboard navigation, scaling,
   room builder, verb bar flash
   ============================================ */

const Engine = (() => {
  let _currentScene = -1;
  let _elements = {};
  let _debugMode = false;
  let _pendingScene = null;

  function init() {
    // Cache DOM elements
    _elements = {
      game: document.getElementById('game'),
      viewport: document.getElementById('viewport'),
      room: document.getElementById('room'),
      objects: document.getElementById('objects'),
      roomBar: document.getElementById('room-bar'),
      roomName: document.getElementById('room-name'),
      score: document.getElementById('score'),
      dialogue: document.getElementById('dialogue-text'),
      verbBar: document.getElementById('verb-bar'),
      overlay: document.getElementById('transition-overlay'),
      sprite: document.getElementById('sprite'),
      preloader: document.getElementById('preloader'),
      progressBar: document.getElementById('progress-bar-inner'),
      preloaderStatus: document.getElementById('preloader-status'),
      titleScreen: document.getElementById('title-screen'),
      sceneCounter: document.getElementById('scene-counter'),
    };

    // Init subsystems
    Typewriter.init(_elements.dialogue);
    Sprite.init(_elements.sprite);
    Transitions.init(_elements.overlay, _elements.viewport);
    Autoplay.init();

    // Responsive scaling
    handleResize();
    window.addEventListener('resize', handleResize);

    // Start preloading
    startPreload();
  }

  // --- Responsive Scaling ---
  function handleResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scale = Math.min(w / 1280, h / 720);
    const game = _elements.game;
    game.style.transform = `scale(${scale})`;
    game.style.left = ((w - 1280 * scale) / 2) + 'px';
    game.style.top = ((h - 720 * scale) / 2) + 'px';
  }

  // --- Preloader ---
  function startPreload() {
    Preloader.loadAll(SCENES, (loaded, total) => {
      if (total === 0) return;
      const pct = Math.round((loaded / total) * 100);
      _elements.progressBar.style.width = pct + '%';
      _elements.preloaderStatus.textContent = `Loading assets... ${loaded}/${total}`;
    }).then(() => {
      _elements.preloader.classList.add('hidden');
      goToScene(0);
      setTimeout(() => bindInput(), 100);
    });
  }

  // --- Keyboard + Tap Navigation ---
  function handleKey(e) {
    // Jump overlay open: only Escape closes it; swallow other navigation keys
    const jumpList = document.getElementById('jump-list');
    if (jumpList && !jumpList.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeJumpList();
      }
      return;
    }

    // Title screen: any key advances
    if (_currentScene === 0 && !Transitions.isLocked()) {
      if (e.key === 'd' || e.key === 'D') {
        toggleDebug();
        return;
      }
      goToScene(1);
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        requestScene(_currentScene + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        requestScene(_currentScene - 1);
        break;
      case 'd':
      case 'D':
        toggleDebug();
        break;
      case 'Home':
        e.preventDefault();
        requestScene(0);
        break;
      case 'End':
        e.preventDefault();
        requestScene(SCENES.length - 1);
        break;
    }
  }

  function bindInput() {
    document.addEventListener('keydown', handleKey);

    // Tap / click on viewport advances scenes
    _elements.viewport.addEventListener('click', (e) => {
      // Don't intercept clicks on links or buttons
      if (e.target.closest('a, button')) return;

      if (_currentScene === 0 && !Transitions.isLocked()) {
        goToScene(1);
        return;
      }

      requestScene(_currentScene + 1);
    });

    // Jump-to-scene overlay
    const jumpBtn = document.getElementById('jump-btn');
    const jumpClose = document.getElementById('jump-close');
    const jumpList = document.getElementById('jump-list');
    if (jumpBtn && jumpList) {
      jumpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (jumpList.classList.contains('hidden')) {
          openJumpList();
        } else {
          closeJumpList();
        }
      });
    }
    if (jumpClose) {
      jumpClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeJumpList();
      });
    }
  }

  // --- Jump-to-scene overlay ---
  function sceneLabel(scene) {
    if (scene.title) return 'Title screen';
    if (scene.objects && scene.objects[0] && scene.objects[0].label) {
      return scene.objects[0].label;
    }
    if (scene.dialogue) {
      const text = scene.dialogue.replace(/\s+/g, ' ').trim();
      return text.length > 70 ? text.slice(0, 67) + '...' : text;
    }
    return '';
  }

  function buildJumpList() {
    const grid = document.getElementById('jump-grid');
    if (!grid) return;
    grid.innerHTML = '';
    SCENES.forEach((scene, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'jump-item' + (idx === _currentScene ? ' current' : '');
      btn.dataset.idx = idx;

      const num = document.createElement('span');
      num.className = 'jump-num';
      num.textContent = String(idx).padStart(2, '0');

      const room = document.createElement('span');
      room.className = 'jump-room';
      room.textContent = scene.room || '';

      const label = document.createElement('span');
      label.className = 'jump-label';
      label.textContent = sceneLabel(scene);

      btn.appendChild(num);
      btn.appendChild(room);
      btn.appendChild(label);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeJumpList();
        requestScene(idx);
      });
      grid.appendChild(btn);
    });
  }

  function openJumpList() {
    const jumpList = document.getElementById('jump-list');
    if (!jumpList) return;
    buildJumpList();
    jumpList.classList.remove('hidden');
    const current = jumpList.querySelector('.jump-item.current');
    if (current) current.scrollIntoView({ block: 'center' });
  }

  function closeJumpList() {
    const jumpList = document.getElementById('jump-list');
    if (jumpList) jumpList.classList.add('hidden');
  }

  /** Queue a scene; if mid-transition, it will play after current finishes. */
  function requestScene(index) {
    if (index < 0 || index >= SCENES.length) return;
    if (Transitions.isLocked()) {
      _pendingScene = index;
      return;
    }
    goToScene(index);
  }

  function nextScene() {
    requestScene(_currentScene + 1);
  }

  function prevScene() {
    requestScene(_currentScene - 1);
  }

  function toggleDebug() {
    _debugMode = !_debugMode;
    _elements.sceneCounter.classList.toggle('visible', _debugMode);
  }

  // --- Scene Navigation ---
  async function goToScene(index) {
    if (index < 0 || index >= SCENES.length) return;
    if (Transitions.isLocked()) return;

    const scene = SCENES[index];
    const prevIndex = _currentScene;
    const goingForward = index > prevIndex;

    // Determine transition type
    let transType = scene.transition || 'iris';
    if (prevIndex === -1) transType = 'none'; // first load
    // For backward navigation, always use iris (simpler)
    if (!goingForward && prevIndex !== -1) transType = 'iris';

    // Determine direction for walk transitions
    let direction = goingForward ? 'right' : 'left';
    if (transType === 'walk-left') direction = 'left';
    else if (transType === 'walk-right') direction = 'right';

    _currentScene = index;

    // Update debug counter
    _elements.sceneCounter.textContent = `Scene ${index}/${SCENES.length - 1}`;

    // Notify autoplay of scene change
    if (typeof Autoplay !== 'undefined') Autoplay.onSceneChange(index);

    await Transitions.run(transType, () => buildScene(scene), {
      spriteX: scene.spriteX || 200,
      showSprite: scene.showSprite !== false && scene.template !== 'title',
      direction: direction,
    });

    // Flash active verb
    flashVerb(scene.verb);

    // Animate objects appearing
    staggerObjects();

    // Typewriter dialogue
    await Typewriter.type(scene.dialogue, scene.typewriterSpeed || 25);

    // If a scene was queued during this transition, go there now
    if (_pendingScene !== null) {
      const next = _pendingScene;
      _pendingScene = null;
      goToScene(next);
    }
  }

  // --- Room Building ---
  function buildScene(scene) {
    const room = _elements.room;
    const objects = _elements.objects;

    // Clear previous
    room.className = '';
    room.innerHTML = '';
    objects.innerHTML = '';
    Typewriter.clear();

    // Hide/show title screen
    if (scene.title) {
      _elements.titleScreen.classList.remove('hidden');
    } else {
      _elements.titleScreen.classList.add('hidden');
    }

    // Set room template
    const templateClass = 'room-' + scene.template;
    room.classList.add(templateClass);

    // Apply palette variation
    if (scene.palette) {
      room.classList.add(scene.palette);
    }

    // Room background element
    const bg = document.createElement('div');
    bg.className = 'room-bg';
    room.appendChild(bg);

    // Template-specific overlays
    if (scene.template === 'dark-room' || scene.template === 'ruins') {
      const fog = document.createElement('div');
      fog.className = 'fog-overlay';
      room.appendChild(fog);

      const fire = document.createElement('div');
      fire.className = 'fire-overlay';
      room.appendChild(fire);
    }

    if (scene.template === 'title' || scene.template === 'exterior' || scene.template === 'observatory' || scene.template === 'galaxy-hall') {
      const stars = document.createElement('div');
      stars.className = 'star-field';
      room.appendChild(stars);
    }

    if (scene.template === 'title') {
      const cityscape = document.createElement('div');
      cityscape.className = 'cityscape';
      room.appendChild(cityscape);
    }

    // Room name bar
    _elements.roomName.textContent = scene.room || '';
    _elements.score.textContent = 'Score: ' + _currentScene + ' of ' + (SCENES.length - 1);

    // Build objects
    if (scene.objects) {
      scene.objects.forEach((obj, i) => {
        const el = createObject(obj, i);
        objects.appendChild(el);
      });
    }

    // Sprite visibility
    if (scene.showSprite === false || scene.template === 'title') {
      Sprite.hide();
    }
  }

  function createObject(obj, index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'scene-object obj-' + (obj.type || 'wall-poster');
    if (obj.className) wrapper.className += ' ' + obj.className;
    wrapper.style.left = (obj.x || 0) + 'px';
    wrapper.style.top = (obj.y || 0) + 'px';
    if (obj.w) wrapper.style.width = obj.w + 'px';
    if (obj.h && obj.type !== 'fullscreen') wrapper.style.height = obj.h + 'px';

    // Stagger index stored as data attribute, applied via JS setTimeout
    wrapper.dataset.index = index;

    if (obj.type === 'wall-text') {
      // Text-only object
      const textEl = document.createElement('div');
      textEl.className = 'wall-text-content';
      textEl.textContent = obj.text || '';
      wrapper.appendChild(textEl);

      if (obj.attr) {
        const attrEl = document.createElement('span');
        attrEl.className = 'quote-attr';
        attrEl.textContent = obj.attr;
        wrapper.appendChild(attrEl);
      }
    } else if (obj.links) {
      obj.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'scene-link';
        wrapper.appendChild(a);
      });
    } else if (obj.type === 'iframe-fullscreen' && obj.img) {
      const iframe = document.createElement('iframe');
      iframe.src = obj.img;
      iframe.style.width = (obj.w || 1280) + 'px';
      iframe.style.height = (obj.h || 540) + 'px';
      iframe.style.border = 'none';
      iframe.style.background = 'transparent';
      iframe.setAttribute('allow', 'autoplay');
      iframe.addEventListener('load', () => {
        try {
          iframe.contentWindow.document.addEventListener('keydown', handleKey);
        } catch (err) {
          // cross-origin iframe: cannot attach handler
        }
      });
      wrapper.appendChild(iframe);
    } else if (obj.img) {
      const img = document.createElement('img');
      img.src = obj.img;
      img.alt = obj.label || '';
      if (obj.w) img.style.width = '100%';
      if (obj.h && obj.type !== 'fullscreen') img.style.height = '100%';
      if (obj.type === 'fullscreen') {
        img.style.width = obj.w + 'px';
        img.style.height = obj.h + 'px';
      }
      img.style.objectFit = 'contain';
      wrapper.appendChild(img);
    }

    // Label
    if (obj.label) {
      const label = document.createElement('div');
      label.className = 'object-label';
      label.textContent = obj.label;
      wrapper.appendChild(label);
    }

    return wrapper;
  }

  // --- Object stagger animation ---
  function staggerObjects() {
    const objs = _elements.objects.querySelectorAll('.scene-object');
    objs.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 200 + i * 400);
    });
  }

  // --- Verb bar flash ---
  function flashVerb(verbKey) {
    const verbs = _elements.verbBar.querySelectorAll('.verb');
    verbs.forEach(v => v.classList.remove('active'));

    const target = _elements.verbBar.querySelector(`[data-verb="${verbKey || 'look'}"]`);
    if (target) {
      target.classList.add('active');
      setTimeout(() => target.classList.remove('active'), 1500);
    }
  }

  function getCurrentScene() {
    return _currentScene;
  }

  function getSceneCount() {
    return SCENES.length;
  }

  return { init, nextScene, goToScene, getCurrentScene, getSceneCount };
})();

// Boot
document.addEventListener('DOMContentLoaded', Engine.init);
