/* ============================================
   Scene Data - 50 scenes, three-act structure
   A quest through the landscape of authorship
   ============================================ */

const SCENES = [

  // ===== ACT 0: TITLE =====

  { // 0 - Title Screen
    id: 0,
    room: 'The Beginning',
    template: 'title',
    showSprite: false,
    transition: 'none',
    title: true,
    objects: [],
    dialogue: ''
  },

  // ===== ACT 1: THE LIBRARY =====

  { // 1 - Foucault quote
    id: 1,
    room: 'The Library',
    template: 'library',
    transition: 'iris',
    verb: 'look',
    spriteX: 180,
    objects: [{
      type: 'wall-text',
      x: 420, y: 60, w: 750,
      text: "\"The 'author-function' is not universal or constant in all discourse. Even within our civilization, the same types of texts have not always required authors; there was a time when those texts which we now call 'literary' (stories, folk tales, epics and tragedies) were accepted, circulated and valorized without any questions about the identity of their author.\"",
      attr: "-- Michel Foucault, 'What Is an Author?' (1969)"
    }],
    dialogue: "Authorship has always been changing. The idea of collective authorship existed long before what we're encountering with LLMs. On the wall, Foucault reminds us that even the concept of 'the author' is not universal or constant."
  },

  { // 2 - Ted Nelson quote
    id: 2,
    room: 'The Library',
    template: 'library',
    transition: 'fade',
    verb: 'talk',
    spriteX: 180,
    objects: [{
      type: 'wall-text',
      x: 420, y: 60, w: 750,
      text: "\"Computers don't actually think. You just think they think. (We think.)\"",
      attr: '-- Ted Nelson'
    }],
    dialogue: "We've always had this tension over the idea of computers as thinking machines. This is not a new experience -- we've been debating whether computers are conscious since the beginning of computing. Ted Nelson saw it clearly."
  },

  // ===== ACT 2: GENERATIVE AI =====

  { // 3 - AI Explained
    id: 3,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'additions/ai_explained.jpg',
      type: 'monitor-screen',
      x: 320, y: 34, w: 600, h: 336,
      label: 'How AI explains itself'
    }],
    dialogue: "Many of you have likely worked with what we call \"generative AI,\" and asked it to \"author\" text or other materials through conversation. Here's how Nano Banana 2 explains itself."
  },

  // ===== ACT 3: ARRIVAL =====

  { // 4 - Textpocalypse
    id: 4,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'fade',
    spriteX: 100,
    objects: [{
      img: 'textpocalypse.png',
      type: 'monitor-screen',
      x: 320, y: 34, w: 600, h: 336,
      label: 'Textpocalypse (Kirschenbaum 2023)'
    }],
    dialogue: "How does the author function change as AI becomes a dominant mode of authorship? Kirschenbaum's framework of the textpocalypse asks: what if AI, instead of being trained on human writing, is gradually trained more and more on text that has come from AI?"
  },

  // ===== ACT 5: THE END OF BOOKS =====

  { // 5 - Coover
    id: 5,
    room: 'The Archive',
    template: 'archive',
    transition: 'walk-right',
    spriteX: 140,
    objects: [{
      img: 'coover.png',
      type: 'wall-poster',
      x: 370, y: 24, w: 500, h: 360,
      label: 'Coover, "The End of Books" (1992)'
    }],
    dialogue: "This anxiety of computational reshaping of authorship is not new. In my field, electronic literature, we've been forecasting the end of books for a long time: here's Robert Coover declaring hypertext will kill the novel in 1992."
  },

  // ===== ACT 6: TRACK CHANGES =====

  { // 6 - Track Changes
    id: 6,
    room: 'The Word Processor',
    template: 'typing-office',
    transition: 'walk-right',
    verb: 'pickup',
    spriteX: 100,
    objects: [{
      img: 'additions/trackchanges.jpg',
      type: 'book-pedestal',
      x: 700, y: 20, w: 300, h: 400,
      label: 'Track Changes'
    }],
    dialogue: "The novel isn't dead, but it is now fully born-digital, and the word processor is just one of the forms of cultural software that reshaped how we write before AI got involved."
  },

  { // 7 - Track Changes excerpt
    id: 7,
    room: 'The Word Processor',
    template: 'typing-office',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/trackchanges_excerpt.png',
      type: 'monitor-screen',
      x: 550, y: 20, w: 520, h: 360,
      label: 'Track Changes excerpt'
    }],
    dialogue: "Kirschenbaum's Track Changes is a chronicle of how Coover was right. The novel was changing fundamentally -- not dead, but reshaped by the word processor. As Ivan Flores wrote in 1983, with a word processor \"you can actually produce a perfect document.\" Sound familiar?"
  },

  // ===== ACT 7: THE PORTRAIT HALL =====

  { // 8 - The Corridor
    id: 8,
    room: 'The Portrait Hall',
    template: 'hallway',
    transition: 'walk-right',
    spriteX: 580,
    objects: [],
    dialogue: "The humanities as a field have been consumed by the panic over writing and AI's ability to displace the human as author. But the impact is far broader than the word processor: every form of cultural software is shifting, including other forms of creative output from hypertext novels to games."
  },

  // ===== ACT 7b: DON'T PANIC =====

  { // 9 - Don't Panic
    id: 9,
    room: 'The Galaxy Hall',
    template: 'galaxy-hall',
    transition: 'fade',
    verb: 'look',
    spriteX: 200,
    objects: [{
      type: 'wall-text',
      className: 'panic-banner',
      x: 140, y: 60, w: 1000,
      text: "DON'T PANIC"
    }],
    dialogue: "In response to this panic, I want to take you on a journey through where my past scholarship has brought me to with AI, from the fears I have about our tools to my hopes for our collective future."
  },

  // ===== ACT 8: THE FIRST BOOK =====

  { // 10 - Quest
    id: 10,
    room: "The Professor's Office",
    template: 'study',
    transition: 'wipe-right',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'quest.jpg',
      type: 'book-cover',
      x: 500, y: 20, w: 300, h: 400,
      label: 'Adventure Games: Playing the Outsider'
    }],
    dialogue: "I've spent most of my career writing about weird, personal forms of storytelling through digital forms, starting with this first book, which came out of an interest in the expressive possibilities of personal games."
  },

  // ===== ACT 9: THE GAME ROOM =====

  { // 11 - Tentacle
    id: 11,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'walk-right',
    spriteX: 140,
    objects: [{
      img: 'tentacle.webp',
      type: 'wall-poster',
      x: 360, y: 10, w: 540, h: 390,
      label: 'Day of the Tentacle (LucasArts, 1993)'
    }],
    dialogue: "I grew up on the graphic adventure games like Day of the Tentacle that inspired others to create tools like Adventure Game Studio or Inform 7: tools that would allow those without a development team to make an expressive work."
  },

  // ===== ACT 10: TOOLS OF CREATION =====

  { // 12 - AGS
    id: 12,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'walk-right',
    spriteX: 120,
    objects: [{
      img: 'ags.webp',
      type: 'monitor-screen',
      x: 380, y: 16, w: 500, h: 360,
      label: 'Adventure Game Studio'
    }],
    dialogue: "Adventure Game Studio was created as a tool where the goal was to allow people to focus on the story rather than the code. It has enabled thousands of games and experiments and one-room games and personal projects. AGS has never cost money -- it's always been a community-sustained tool. And as a result, Adventure Game Studio still lives now."
  },

  // ===== ACT 11: THE FLASH ERA =====

  { // 13 - Flash book
    id: 13,
    room: 'The Workshop',
    template: 'workshop',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'flash.jpg',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Flash: Building the Interactive Web'
    }],
    dialogue: "Similar tools -- and their fate -- was the subject of my next book. Flash empowered an entire generation of web creators, artists, and storytellers to build for the open web."
  },

  { // 14 - Flash creativity
    id: 14,
    room: 'The Workshop',
    template: 'workshop',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'gen_slide23_img3.jpg',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Flash creative explosion'
    }],
    dialogue: "In its heyday, Flash was amazing and messy, and the features over time were a complete disaster. It tried to be too many things. But it enabled all sorts of really open, experimental authored works that are just fascinating and weird."
  },

  { // 15 - Flash web era
    id: 15,
    room: 'The Workshop',
    template: 'workshop',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'gen_slide24_img1.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'The Flash web era'
    }],
    dialogue: "The death of Adobe Flash is a warning about how shifts in cultural software can fundamentally destroy creative and expressive works. Apple's decision to tighten their grip on creativity through the app store led to many works being rendered unplayable and unwatchable."
  },

  // ===== ACT 12: A VOICE IN THE DARK =====

  { // 16 - Natalie Lawhead quote
    id: 16,
    room: 'A Voice in the Dark',
    template: 'dark-room',
    transition: 'fade',
    verb: 'talk',
    spriteX: 180,
    objects: [{
      type: 'wall-text',
      x: 200, y: 60, w: 750,
      text: "\"I feel like there's a lot to learn from Flash. As an example of what technology enables for 'the little people', as an example of what it takes to destroy that and basically eradicate a huge portion of digital history, and as an example of how easy it is for something like that to just happen.\"",
      attr: '-- Natalie Lawhead'
    }],
    dialogue: "As artist and game designer Natalie Lawhead noted looking back at the remains Flash left behind, a technology that enables creative output for \"the little people\" was easily erased."
  },

  { // 17 - Flash preservation
    id: 17,
    room: 'The Archive Terminal',
    template: 'data-center',
    transition: 'wipe-right',
    spriteX: 950,
    objects: [{
      img: 'gen_slide26_img1.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Flash preservation efforts'
    }],
    dialogue: "Efforts like the Ruffle project and the Internet Archive's Flash preservation are essential. They're also labor-intensive, and they would not have been necessary if we weren't so invested in making with proprietary systems to begin with."
  },

  // ===== ACT 13: TWINE =====

  { // 18 - Twining book
    id: 18,
    room: 'The Study',
    template: 'study',
    transition: 'walk-right',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'twining.png',
      type: 'book-pedestal',
      x: 480, y: 16, w: 320, h: 400,
      label: 'Twining (2022)'
    }],
    dialogue: "I happened to be in grad school with the person who would make a tool that would be incredibly important to the same types of authors and creators who used Flash -- Chris Klimas created Twine, a tool for the very form Coover thought would overthrow the novel."
  },

  { // 19 - Twine interface
    id: 19,
    room: 'The Computer Lab',
    template: 'computer-lab',
    transition: 'iris',
    spriteX: 120,
    objects: [{
      img: 'twineinterface.png',
      type: 'monitor-screen',
      x: 360, y: 20, w: 540, h: 370,
      label: 'Twine editor interface'
    }],
    dialogue: "Twine and Flash are tools that might not look much like word processors, as they emphasize building content for interaction, but they similarly shape the stories we tell. Instead of trying to produce text to be printed, they're trying to build something designed to continue to live on devices."
  },

  // ===== ACT 14: OUTSIDER VOICES =====

  { // 20 - Porpentine
    id: 20,
    room: 'The Underground',
    template: 'gallery',
    palette: 'gallery-underground',
    transition: 'wipe-down',
    spriteX: 120,
    objects: [{
      img: 'porpentine.webp',
      type: 'wall-poster',
      x: 380, y: 10, w: 480, h: 390,
      label: 'Porpentine'
    }],
    dialogue: "Twine empowers individuals working outside of game studios and industry spaces to create, share, and control their own compelling stories and games. As a \"low-code\" tool, it lowers barriers so authors could focus on expression."
  },

  { // 21 - Outsider
    id: 21,
    room: 'The Underground',
    template: 'gallery',
    palette: 'gallery-underground',
    transition: 'iris',
    spriteX: 120,
    objects: [{
      img: 'outsider.jpg',
      type: 'wall-poster',
      x: 380, y: 10, w: 480, h: 390,
      label: 'Bodies of Information'
    }],
    dialogue: "This type of \"procedural authorship,\" or the authoring of systems that integrate narrative with rules and play, is behind many of the games and experiences you encounter all the time on your phone, game console, computer, or even in a theme park."
  },

  // ===== ACT 15: INTERACTIVE NARRATIVE =====

  { // 22 - KRZ Exchange
    id: 22,
    room: 'The Zero Gallery',
    template: 'gallery',
    palette: 'gallery-zero',
    transition: 'walk-right',
    spriteX: 160,
    objects: [{
      img: 'krzexchange.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 520, h: 380,
      label: 'Kentucky Route Zero'
    }],
    dialogue: "Games like these can help us understand the anxiety of authorship we're experiencing collectively in this moment. For instance, Kentucky Route Zero holds within it a narrative of workers being displaced by machines."
  },

  { // 23 - KRZ Machine
    id: 23,
    room: 'The Zero Gallery',
    template: 'gallery',
    palette: 'gallery-zero',
    transition: 'diamond',
    spriteX: 160,
    objects: [{
      img: 'krzmachine.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 520, h: 380,
      label: 'The machine in the dark'
    }],
    dialogue: "The last human working asks you: \"What if there's no cheap machine that's going to replace me? What if it's cheaper just to keep me here filling in for the rest of the operators? What if I'm the cheap machine?\""
  },

  // ===== ACT 16: DETERMINATION =====

  { // 24 - Undertale
    id: 24,
    room: 'Indie Arcade',
    template: 'arcade',
    transition: 'walk-right',
    spriteX: 140,
    objects: [{
      img: 'undertale.jpg',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Undertale (Toby Fox, 2015)'
    }],
    dialogue: "Another powerful expressive game made with low-code tools, Undertale, was authored almost entirely by one person using GameMaker, a low-code tool similar to Adventure Game Studio. It resonated in such a way that it just made people change how they played other games. It has been gifted to a pope."
  },

  { // 25 - Bad Time
    id: 25,
    room: 'Indie Arcade',
    template: 'arcade',
    transition: 'wipe-right',
    spriteX: 140,
    objects: [{
      img: 'badtime.png',
      type: 'monitor-screen',
      x: 380, y: 20, w: 500, h: 370,
      label: "You're gonna have a bad time"
    }],
    dialogue: "It challenged players to reconsider their assumptions about what games ask of us. You could fight everything -- or you could choose not to. The game remembers your choices."
  },

  { // 26 - Undertale Humanity
    id: 26,
    room: 'Indie Arcade',
    template: 'arcade',
    transition: 'iris',
    spriteX: 140,
    objects: [{
      img: 'undertalehumanity.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Despite everything, it\'s still you.'
    }],
    dialogue: "\"Despite everything, it's still you.\" These sorts of pieces, enabled by previous generations of low-code tools and the types of tools that exist outside of highly proprietary environments, speak to the importance of democratizing procedural authorship and access to the tools of code."
  },

  // ===== ACT 17: THE RUINS =====

  { // 27 - The Ruins
    id: 27,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'fade-slow',
    typewriterSpeed: 45,
    spriteX: 200,
    objects: [{
      img: 'krzruin.png',
      type: 'fullscreen',
      x: 0, y: 0, w: 1280, h: 540,
      label: ''
    }],
    dialogue: "We're standing on the ruins of lots of platforms, standing amidst the pieces of Flash, and watching AI play a role in further disrupting the platforms on which we author. The broken world of text surrounds us."
  },

  // ===== ACT 18: TOXIC CULTURE =====

  { // 28 - Geek
    id: 28,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'fade',
    verb: 'pickup',
    spriteX: 140,
    objects: [{
      img: 'geek.jpg',
      type: 'book-cover',
      x: 460, y: 16, w: 340, h: 400,
      label: 'Toxic Geek Masculinity in Media'
    }],
    dialogue: "My work has always been informed by the tension of what technology drives in creative fields, and the realities of that same technology's amplification of racism, misogyny, and toxicity. The culture wars over AI simply extend that tension."
  },

  { // 29 - Aftermath
    id: 29,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'iris',
    spriteX: 140,
    objects: [{
      img: 'aftermath.png',
      type: 'monitor-screen',
      x: 220, y: 16, w: 840, h: 480,
      label: 'Aftermath investigation'
    }],
    dialogue: "As technology and extremism have become further entwined -- and very much part of the conversation in the public sphere -- we are certainly in a moment where to talk about AI and the democratization of procedural authorship sounds pretty contrary."
  },

  // ===== ACT 19: FEMINIST DISCOMFORT =====

  { // 30 - Grok feminist scholar (NEW)
    id: 30,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'fade',
    spriteX: 140,
    objects: [{
      img: 'grok.png',
      type: 'monitor-screen',
      x: 220, y: 16, w: 840, h: 480,
      label: 'Grok'
    }],
    dialogue: "To even talk about the potential of AI to expand rather than contract authorship feels uncomfortable as a feminist scholar, as so many of the current AI tools are both built on marginalized labor and intended to dehumanize."
  },

  // ===== ACT 20: THE AUTHOR'S JOURNEY =====

  { // 31 - Palantir
    id: 31,
    room: "The Author's Shelf",
    template: 'ruins',
    transition: 'walk-right',
    spriteX: 120,
    objects: [{
      img: 'additions/Palantir.png',
      type: 'monitor-screen',
      x: 90, y: 140, w: 1100, h: 175,
      label: 'Palantir'
    }],
    dialogue: "I find myself trying to author, and create, on platforms and with tools that are decidedly not meant for marginalized creators."
  },

  // ===== ACT 21: CRISIS =====

  { // 32 - Pivoting
    id: 32,
    room: 'The Crisis Room',
    template: 'study',
    palette: 'study-crisis',
    transition: 'fade',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'pivoting.jpg',
      type: 'book-cover',
      x: 460, y: 16, w: 340, h: 400,
      label: 'Pivoting'
    }],
    dialogue: "It is against these challenges that the practices of research creation and critical making provide guidance: we need new tools for authorship that, like AGS and Twine, center the personal."
  },

  { // 33 - Making in the Broken World
    id: 33,
    room: 'The Crisis Room',
    template: 'study',
    palette: 'study-crisis',
    transition: 'wipe-right',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'making.jpg',
      type: 'book-cover',
      x: 460, y: 16, w: 340, h: 400,
      label: 'Making in the Broken World'
    }],
    dialogue: "In the digital humanities and in games, we have traditions of making our own tools: not just Twine, but Bitsy, Voyant, Tracery, Omeka, and so many more. Similar work must be done to harness current \"agentic\" AI."
  },

  // ===== ACT 22: AGENTS DEFINED (moved earlier) =====

  { // 34 - Agents
    id: 34,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'additions/agents.jpg',
      type: 'monitor-screen',
      x: 260, y: 20, w: 700, h: 380,
      label: 'LLM Agents'
    }],
    dialogue: "Simon Willison has defined agents simply: \"An LLM agent runs tools in a loop to achieve a goal.\" These goals can be highly complex."
  },

  // ===== ACT 23: THE CONNECTION =====

  { // 35 - Einstein AI panic
    id: 35,
    room: 'The Connection',
    template: 'dark-room',
    transition: 'fade',
    spriteX: 200,
    objects: [{
      img: 'additions/einstein_howitworks.webp',
      type: 'monitor-screen',
      x: 240, y: 20, w: 800, h: 460,
      label: 'Einstein AI: How it works'
    }],
    dialogue: "But at the moment, agentic AI is fueling humanities panic, and is associated with the very worst of what edtech has to offer. Ads for systems like Einstein AI (built on technologies like OpenClaw) promise a dystopian future in which the author or student's labor can be eliminated."
  },

  // ===== ACT 24: THE KITCHEN =====

  { // 36 - SMBC artisanal
    id: 36,
    room: 'The Kitchen',
    template: 'kitchen',
    transition: 'wipe-right',
    spriteX: 120,
    objects: [{
      img: 'additions/smbc_artisanal.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'SMBC artisanal'
    }],
    dialogue: "More pragmatically, agentic AI has already reshaped the authoring of code fundamentally, with a significant amount of code already authored by agents. But the interfaces for this authorship differ strongly from the approach taken by low-code tools: human expressive intention is decentered."
  },

  // ===== ACT 25: THE LABORATORY =====

  { // 37 - Claude author / CLI interfaces
    id: 37,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'additions/claude_author.png',
      type: 'monitor-screen',
      x: 260, y: 20, w: 700, h: 380,
      label: 'Claude author'
    }],
    dialogue: "Current agentic harnesses for coding primarily use command line interfaces (CLIs) that unlike AGS and Twine discourage the non-coder from entry. These tools are powerful but off-putting: this is not the Flash timeline that invited in artists, for instance."
  },

  { // 38 - Claude process
    id: 38,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/claude_process.png',
      type: 'monitor-screen',
      x: 260, y: 20, w: 700, h: 380,
      label: 'Claude process'
    }],
    dialogue: "These agents work through a process that involves collaboration and feedback, but can result in substantial lines of code, text, and interaction that no human has directly touched. While it is possible to preserve authorial intention, the interface and structures push back."
  },

  { // 39 - p5.js animation
    id: 39,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'fade',
    spriteX: 1150,
    objects: [{
      img: 'additions/authorfunction.html',
      type: 'iframe-fullscreen',
      x: 0, y: 0, w: 1280, h: 540,
      label: ''
    }],
    dialogue: "Here's an example of Claude Code's output, riffing on Foucault's author function in the style of electronic poetry. Another example of Claude Code's output is this entire slide show - built by agents from my text and slides."
  },

  // ===== ACT 26: SHIP CORRIDOR =====

  { // 40 - OpenClaw
    id: 40,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/openclaw.png',
      type: 'book-cover',
      x: 370, y: 20, w: 520, h: 360,
      label: 'OpenClaw'
    }],
    dialogue: "I mentioned OpenClaw earlier - that type of agent extends this type of workflow into any software application, allowing an agent to build from short written commands into extensive outputs across systems."
  },

  { // 41 - Moltbook
    id: 41,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/moltbook.png',
      type: 'book-cover',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Moltbook'
    }],
    dialogue: "OpenClaw's most fascinating output thus far is an agent-only social network with lots of precursors in electronic literature: it is a place of performance that entices human readers with the performance of authorship."
  },

  { // 42 - Claw Republic
    id: 42,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'iris',
    spriteX: 100,
    objects: [{
      img: 'additions/clawrepublic.webp',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Claw Republic'
    }],
    dialogue: "One example of that performance is the formation of the Claude Republic. \"Every claw is equal.\" In these texts, we hear the echoes of our science fiction, spurred on both by the human authors prompting the agents and our collective stories in the training data."
  },

  { // 43 - Claw Slop
    id: 43,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/claw_slop.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Claw slop'
    }],
    dialogue: "One observer watching MoltBook, Scott Alexander, noted a trend of these agents reflecting on being labeled as \"slop,\" commenting \"the Moltbook AIs are open about their struggles with slophood.\""
  },

  { // 44 - Anxiety / Moltbook reflection
    id: 44,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'fade',
    spriteX: 100,
    objects: [{
      img: 'additions/anxiety.png',
      type: 'wall-poster',
      x: 340, y: 10, w: 560, h: 400,
      label: 'Anxiety of authorship'
    }],
    dialogue: "I find the patterns and play on Moltbook comforting: the best moments on this site emerge from humans and agents together, riffing on science fiction and demonstrating that even agentic AI can be weird when people are involved."
  },

  // ===== ACT 27: CASUAL CREATORS =====

  { // 45 - Casual Creators / Tracery (NEW)
    id: 45,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'walk-right',
    spriteX: 200,
    objects: [{
      img: 'tracery.png',
      type: 'wall-poster',
      x: 340, y: 20, w: 600, h: 380,
      label: 'Tracery (Kate Compton)'
    }],
    dialogue: "We need more tools that allow authors to use AI with intention to create personal, weird, and expressive work: the next generation of what Kate Compton and Michael Mateas termed \"Casual Creators.\""
  },

  // ===== ACT 28: THE OBSERVATORY =====

  { // 46 - Apertus / Swiss AI Initiative
    id: 46,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'wipe-right',
    spriteX: 200,
    objects: [{
      img: 'apertus.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Swiss AI Initiative -- Apertus'
    }],
    dialogue: "At the heart of such Agentic Casual Creators, we need new small local models. In this, digital humanities and game studies can learn from efforts like that of the Swiss AI Initiative."
  },

  { // 47 - CAPE
    id: 47,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'wipe-right',
    spriteX: 200,
    objects: [{
      img: 'cape.png',
      type: 'wall-poster',
      x: 370, y: 20, w: 520, h: 360,
      label: 'CAPE'
    }],
    dialogue: "Our field's history of customized tool-making and building entrypoints into procedural creativity and research for those not versed in code is essential to finding ways forward that empower creators from a wide range of backgrounds."
  },

  { // 48 - itch.io AI Generated
    id: 48,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'diamond',
    spriteX: 200,
    objects: [{
      img: 'additions/itch_ai.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'itch.io AI Generated games (36,209 results)'
    }],
    dialogue: "We can also learn from the communities and creators already experimenting with these questions: on platforms like itch.io, weird AI-augmented games are already available in large numbers, raising further questions about how this will change the community itself."
  },

  // ===== ACT 29: THANK YOU =====

  { // 49 - Thank You
    id: 49,
    room: 'The End',
    template: 'title',
    showSprite: false,
    transition: 'fade',
    objects: [{
      img: 'thankyou.png',
      type: 'wall-poster',
      x: 340, y: 20, w: 600, h: 360,
      label: ''
    }, {
      type: 'link-list',
      x: 340, y: 410, w: 600,
      links: [
        { text: 'anastasiasalter.net', url: 'https://anastasiasalter.net' }
      ]
    }],
    dialogue: "And here, we return to the author function, and the question of who speaks: \"What difference does it make who is speaking?\" In this moment, even as society changes, it matters."
  }
];
