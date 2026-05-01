/* ============================================
   Scene Data - 59 scenes, three-act structure
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

  { // 3 - AI Explained (NEW)
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
    dialogue: "What does it mean if AI becomes one of the dominant modes of authoring text? Kirschenbaum's framework of the textpocalypse asks: what if AI, instead of being trained on human writing, is gradually trained more and more on text that has come from AI? How is our relationship to writing and reading going to fundamentally change?"
  },

  { // 5 - Reading Stats 1
    id: 5,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'fade',
    spriteX: 100,
    objects: [{
      img: 'readingstatsone.png',
      type: 'monitor-screen',
      x: 320, y: 34, w: 600, h: 336,
      label: 'Reading statistics (YouGov 2025)'
    }],
    dialogue: "The kind of percentages of readership and the acts of reading already -- it's not great. This 2025 study caps out at about 40% of people reading. If you're looking for academic books, they're right there clustered at 10%, just above graphic novels and still beating poetry."
  },

  { // 6 - Reading Stats 2
    id: 6,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'readingstatstwo.png',
      type: 'monitor-screen',
      x: 320, y: 34, w: 600, h: 336,
      label: 'More reading statistics'
    }],
    dialogue: "Those of us with excessive TBR piles and particular attachment to print are in a very low percentage of who is actually doing reading. Most people who read are a small percentage within the context of American adults."
  },

  // ===== ACT 4: SOMETHING IS READING =====

  { // 7 - LibGen
    id: 7,
    room: 'The Data Center',
    template: 'data-center',
    transition: 'walk-right',
    spriteX: 950,
    objects: [{
      img: 'libgen.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Library Genesis'
    }],
    dialogue: "Well, we know SOMETHING is reading. The Books3 dataset scraped Library Genesis -- 196,640 books fed into AI training. No permission asked, no compensation given."
  },

  { // 8 - Books3
    id: 8,
    room: 'The Data Center',
    template: 'data-center',
    transition: 'fade',
    spriteX: 950,
    objects: [{
      img: 'gen_slide21_img2.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Books3 training dataset'
    }],
    dialogue: "I saw a few of my titles in there, and pretty much any academic can say the same. Entertainingly, many of us are not eligible to hop in on the lawsuits if we work with small publishers, because they don't bother with all the copyright steps. For academic books, that would probably be more money than most monographs will ever make."
  },

  // ===== ACT 5: THE END OF BOOKS =====

  { // 9 - Coover
    id: 9,
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
    dialogue: "In electronic literature, the study of born-digital narratives, we've been talking about the end of books for a long time. Robert Coover declared in 1992 that the novel as we know it has come to its end. He was writing about the hypertext novel, which did not turn out to be the thing that would displace the novel. But that doesn't mean he was wrong."
  },

  // ===== ACT 6: TRACK CHANGES (moved after Coover) =====

  { // 10 - Track Changes
    id: 10,
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
    dialogue: "But every text is 'born-digital' now, even if it does eventually land in print. Every tool changes our writing. From the printing press to the typewriter to the word processor -- each technology reshapes not just how we write, but what we write."
  },

  { // 11 - Track Changes excerpt
    id: 11,
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

  { // 12 - The Corridor
    id: 12,
    room: 'The Portrait Hall',
    template: 'hallway',
    transition: 'walk-right',
    spriteX: 580,
    objects: [],
    dialogue: "It's not the hypertext novel, but indeed all of the web and digital writing and interactivity -- the ways that we consume and read text -- that have shifted the cultural role of the novel, and shifted where people do creative writing. AI could enter that space and change our relationship with the platforms on which we do most of our authorship and reading."
  },

  // ===== ACT 8: THE FIRST BOOK =====

  { // 13 - Quest
    id: 13,
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
    dialogue: "This was my first book. The working title was 'Magical Books,' which was shot down by a table of scholars at the Electronic Literature Organization in favor of a Monty Python joke."
  },

  { // 14 - Python
    id: 14,
    room: "The Professor's Office",
    template: 'study',
    transition: 'diamond',
    spriteX: 120,
    objects: [{
      img: 'python.gif',
      type: 'monitor-screen',
      x: 400, y: 40, w: 460, h: 320,
      label: 'Monty Python and the Holy Grail'
    }],
    dialogue: "We went with a quest metaphor instead. I saw interactive fiction and adventure games as extensions of literary tradition -- the reader as hero, the author as architect of possibility."
  },

  { // 15 - Alice
    id: 15,
    room: "The Professor's Office",
    template: 'study',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'alice.webp',
      type: 'ipad-screen',
      x: 400, y: 80, w: 480, h: 320,
      label: 'Alice for the iPad (2010)'
    }],
    dialogue: "For a moment, there was real excitement about the iPad as something that creative people could build applications for. It turned out to be depressingly wrong -- not because the idea was bad, but because the App Store drove individual creatives out with expensive fees and demands to constantly rebuild for the latest devices. Almost nothing is playable now."
  },

  // ===== ACT 9: THE GAME ROOM =====

  { // 16 - Tentacle
    id: 16,
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
    dialogue: "Day of the Tentacle -- my personal favorite game. These classic graphic adventure games inspired the folks working in things like Bitsy and Twine. Many of them get rendered unplayable or require substantial work and emulation -- done by open source communities and people who care about still being able to read and play those works."
  },

  { // 17 - Jane Jensen
    id: 17,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'wipe-right',
    spriteX: 140,
    objects: [{
      img: 'jensen.jpg',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Jane Jensen'
    }],
    dialogue: "These eras have amazing examples of authors working with teams of collaborators on digital projects, telling stories just as important as any novel -- like Jane Jensen's Gabriel Knight series. If you haven't played it, I just so highly recommend."
  },

  { // 18 - Gabriel Knight
    id: 18,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'wipe-right',
    spriteX: 140,
    objects: [{
      img: 'knight.webp',
      type: 'monitor-screen',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Gabriel Knight: Sins of the Fathers'
    }],
    dialogue: "It exists in a remastered version in large part because it has such a fandom -- people who still want it to exist, doing the work of digital preservation and emulation."
  },

  // ===== ACT 10: TOOLS OF CREATION =====

  { // 19 - AGS
    id: 19,
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

  { // 20 - Flash book
    id: 20,
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

  { // 21 - Flash creativity
    id: 21,
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

  { // 22 - Flash web era
    id: 22,
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
    dialogue: "Apple -- going back to the story of the iPad and their interest in eliminating competition and free authorship on their platform -- refused to support Flash. We've lost libraries worth of animations and games and experiences and weird things as a result of a proprietary platform killing another proprietary platform."
  },

  // ===== ACT 12: A VOICE IN THE DARK =====

  { // 23 - Natalie Lawhead quote
    id: 23,
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
    dialogue: "An essential Flash and digital artist looks back at the death of Flash and says: we really have to think about how little it takes to destroy a technology that enables a wide number of people to do creative, meaningful digital work. And in that destruction, eradicate a huge portion of digital history."
  },

  { // 24 - Flash preservation
    id: 24,
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

  { // 25 - Twining book
    id: 25,
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

  { // 26 - Twine interface
    id: 26,
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
    dialogue: "Twine and Flash are tools that might not look much like Word Processors, as they emphasize building content for interaction, but they similarly shape the stories we tell. Instead of trying to produce text to be printed, they're trying to build something designed to continue to live on devices."
  },

  // ===== ACT 14: OUTSIDER VOICES =====

  { // 27 - Porpentine
    id: 27,
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

  { // 28 - Outsider
    id: 28,
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

  { // 29 - KRZ Exchange
    id: 29,
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

  { // 30 - KRZ Machine
    id: 30,
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

  { // 31 - Undertale
    id: 31,
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
    dialogue: "Another powerful expressive game made with low-code tools, Undertale, was built almost entirely by one person, using a free game tool with a lot in common with Adventure Game Studio. It resonated in such a way that it just made people change how they played other games. It has been gifted to a pope."
  },

  { // 32 - Bad Time
    id: 32,
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

  { // 33 - Undertale Humanity
    id: 33,
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
    dialogue: "Despite everything, it's still you. These sorts of pieces, enabled by previous generations of low-code tools and the types of tools that exist outside of highly proprietary environments, speak to the importance of democratizing procedural authorship and access to the tools of code."
  },

  // ===== ACT 17: THE RUINS =====

  { // 34 - The Ruins
    id: 34,
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

  { // 35 - Geek
    id: 35,
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

  { // 36 - Aftermath
    id: 36,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'iris',
    spriteX: 140,
    objects: [{
      img: 'aftermath.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Aftermath investigation'
    }],
    dialogue: "As technology and extremism have become further entwined -- and very much part of the conversation in the public sphere -- we are certainly in a moment where to talk about AI and the democratization of procedural authorship sounds pretty contrary."
  },

  // ===== ACT 19: THE AUTHOR'S JOURNEY =====

  { // 37 - Palantir (was Fanboy)
    id: 37,
    room: "The Author's Shelf",
    template: 'ruins',
    transition: 'walk-right',
    spriteX: 120,
    objects: [{
      img: 'additions/Palantir.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Palantir'
    }],
    dialogue: "I find myself trying to write in a landscape where the things that bring me joy -- the platforms and tools that historically enabled authorship and play -- are a source of perpetual despair and frustration."
  },

  // ===== ACT 20: CRISIS =====

  { // 38 - Pivoting
    id: 38,
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
    dialogue: "In the classroom, students and colleagues fatigued from the last five years are now asking how we should write and what we can and should entrust to these technologies. People often get frustrated when there's no one-size-fits-all answer."
  },

  { // 39 - Making in the Broken World
    id: 39,
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
    dialogue: "Historically, every platform and tool that has tried to enable greater freedom of authorship and play has tried to accomplish a lot of the things that agentic AI is now doing. But educators and creators need to understand these systems to keep control of the author function."
  },

  // ===== ACT 21: THE CONNECTION =====

  { // 40 - Haraway quote
    id: 40,
    room: 'The Connection',
    template: 'dark-room',
    transition: 'fade',
    verb: 'talk',
    spriteX: 200,
    objects: [{
      type: 'wall-text',
      x: 200, y: 70, w: 780,
      text: "\"Technology is not neutral. We're inside of what we make, and it's inside of us. We're living in a world of connections -- and it matters which ones get made and unmade.\"",
      attr: '-- Donna Haraway'
    }],
    dialogue: "Today, writing - and learning - is in an inflection point of crisis. Ads for systems like Einstein AI (built on technologies like OpenClaw) promise a dystopian future in which the author or student's labor can be eliminated."
  },

  // ===== ACT 22: THE KITCHEN =====

  { // 41 - SMBC artisanal
    id: 41,
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
    dialogue: "Ironically, the type of authorship most in crisis today is code: agents are better at writing and crafting computational systems than most of us already. But even in those systems, the history of games and electronic literatures reminds us how critical the author remains."
  },

  // ===== ACT 23: THE LABORATORY =====

  { // 42 - Claude author
    id: 42,
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
    dialogue: "Today's agents work in harnesses, such as Claude Code, that are now built using these same tools. This type of supervised system is already a major force in software development."
  },

  { // 43 - Agents (NEW)
    id: 43,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/agents.jpg',
      type: 'monitor-screen',
      x: 260, y: 20, w: 700, h: 380,
      label: 'LLM Agents'
    }],
    dialogue: "Simon Willison has defined agents simply: \"An LLM agent runs tools in a loop to achieve a goal.\" These goals can be highly complex."
  },

  { // 44 - Claude process
    id: 44,
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
    dialogue: "These agents work through a process that involves collaboration and feedback, but can result in substantial lines of code, text, and interaction that no human has directly touched."
  },

  { // 45 - p5.js animation
    id: 45,
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

  // ===== ACT 24: SHIP CORRIDOR =====

  { // 46 - OpenClaw
    id: 46,
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

  { // 47 - Moltbook
    id: 47,
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

  { // 48 - Claw Republic
    id: 48,
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

  { // 49 - Claw Slop
    id: 49,
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

  { // 50 - Slopcode (NEW)
    id: 50,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/slopcode.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Slop code'
    }],
    dialogue: "I'm not a fan of the word slop myself, because it feeds into the idea that AI is doing the authoring. But so-called \"slop\" is still expressions of human intention, and we cannot lose sight of those authors and blame the machine."
  },

  { // 51 - Anxiety book
    id: 51,
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
    dialogue: "The anxiety of authorship in the age of AI is not abstract. It shapes every decision we make about what to create, how to create it, and whether it matters."
  },

  // ===== ACT 25: THE OBSERVATORY =====

  { // 52 - Apertus / Swiss AI Initiative
    id: 52,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'walk-right',
    spriteX: 200,
    objects: [{
      img: 'apertus.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Swiss AI Initiative — Apertus'
    }],
    dialogue: "To take control of our creative work through AI, we need to learn from projects like the Swiss AI Initiative, and build community-driven tools that are thoughtfully and intentionally sourced."
  },

  { // 53 - CAPE
    id: 53,
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
    dialogue: "Digital humanities scholars are well-positioned to make these interventions through collaborative, feminist approaches to research-creation."
  },

  { // 54 - itch.io AI Generated
    id: 54,
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
    dialogue: "And in game studies and design, we're already seeing the impact -- just look at the weird, experimental, and creative works tagged as AI-generated on itch.io so far."
  },

  // ===== ACT 26: THANK YOU =====

  { // 55 - Thank You
    id: 55,
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
        { text: 'anastasiasalter.net', url: 'https://anastasiasalter.net' },
        { text: 'distantcoding.ai', url: 'https://distantcoding.ai/' }
      ]
    }],
    dialogue: "Thank you for playing."
  }
];
