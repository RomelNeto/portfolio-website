/* ==========================================================================
   YOUR CONTENT
   --------------------------------------------------------------------------
   This is the only file you need to edit to change the site.

   PHOTOS
   Each photography project lives in its own folder:
     assets/images/photos/<project>/01.jpg, 02.jpg, ...
   "01.jpg" is the cover; the rest open inside the project as a gallery.
   To add photos, drop the files in that folder and list them in "gallery".

   LOGOS / DESIGN
   Same idea, in assets/images/design/<project>/.

   VIDEOS
   Not uploaded to the server: upload to YouTube (unlisted) or Vimeo and put
   the ID in the project, e.g. youtube: "dQw4w9WgXcQ" or vimeo: "76979871".

   PROJECT FIELDS
   title       – project name
   category    – "video" | "photo" | "design" | "motion"  (which page it appears on)
   sector      – filter chip (Corporate, Business, Real estate, Music, Editorial, Identity…)
   year        – shown next to the category
   role        – what you did
   image       – cover image
   gallery     – every photo of the shoot (first one = cover)
   description – optional paragraph shown under the title when opened
   video       – local MP4 (avoid for long films)
   youtube     – YouTube ID, plays in the lightbox
   vimeo       – Vimeo ID, plays in the lightbox
   featured    – true = also shows on the home page

   ADDING A VIDEO PROJECT (when the YouTube link is ready)
     {
       title: "Mentoria ACR — Event Film",
       category: "video",
       sector: "Corporate",
       year: "2026",
       role: "Camera · Edit",
       image: "assets/images/photos/corporate-mentoria/01.jpg",
       youtube: "dQw4w9WgXcQ",
       gallery: [],
       description: "Two-day mentoring event, 12 speakers. Shot solo, delivered in 5 days.",
       featured: false
     }
   ========================================================================== */

const AREAS = {
  video: {
    path: "video.html",
    label: "Video",
    kicker: "01",
    blurb: "Music videos, corporate aftermovies and social content — shot and edited end to end.",
    cover: "assets/images/video-cover.jpg",
    sectors: ["Business", "Corporate", "INCANTO", "Musical", "Social"],
    showreel: true
  },
  photo: {
    path: "photography.html",
    label: "Photography",
    kicker: "02",
    blurb: "Concerts, restaurants, team portraits and editorials — every shoot opens as a full set.",
    cover: "assets/images/photos/realestate-portfolio/01.jpg",
    sectors: ["Real estate", "Corporate", "Business", "Music", "Editorial"],
    slideshow: true
  },
  design: {
    path: "design.html",
    label: "Design",
    kicker: "03",
    blurb: "Logos and identity systems, from the mark to the merch it lives on.",
    cover: "assets/images/design/identity-calculame/01.jpg",
    sectors: ["Identity"]
  },
  motion: {
    path: "motion.html",
    label: "Motion",
    kicker: "04",
    blurb: "Titles, animated logos and explainers built for every screen.",
    cover: "assets/images/motion-cover.jpg",
    sectors: ["Motion graphics", "Titles", "Logos"]
  }
};

const AREA_ORDER = ["video", "photo", "design", "motion"];

const PROJECTS = [
/* ---------------- PHOTOGRAPHY ---------------- */
  {
    title: "Real Estate — Portfolio",
    category: "photo",
    sector: "Real estate",
    year: "2024",
    role: "Real estate photography · Retouch",
    image: "assets/images/photos/realestate-portfolio/01.jpg",
    gallery: [
      "assets/images/photos/realestate-portfolio/01.jpg",
      "assets/images/photos/realestate-portfolio/02.jpg",
      "assets/images/photos/realestate-portfolio/03.jpg",
      "assets/images/photos/realestate-portfolio/04.jpg",
      "assets/images/photos/realestate-portfolio/05.jpg",
      "assets/images/photos/realestate-portfolio/06.jpg",
      "assets/images/photos/realestate-portfolio/07.jpg",
      "assets/images/photos/realestate-portfolio/08.jpg",
      "assets/images/photos/realestate-portfolio/09.jpg",
      "assets/images/photos/realestate-portfolio/10.jpg",
      "assets/images/photos/realestate-portfolio/11.jpg",
      "assets/images/photos/realestate-portfolio/12.jpg",
      "assets/images/photos/realestate-portfolio/13.jpg",
      "assets/images/photos/realestate-portfolio/14.jpg",
      "assets/images/photos/realestate-portfolio/15.jpg",
      "assets/images/photos/realestate-portfolio/16.jpg",
      "assets/images/photos/realestate-portfolio/17.jpg",
      "assets/images/photos/realestate-portfolio/18.jpg",
      "assets/images/photos/realestate-portfolio/19.jpg",
      "assets/images/photos/realestate-portfolio/20.jpg",
      "assets/images/photos/realestate-portfolio/21.jpg",
      "assets/images/photos/realestate-portfolio/22.jpg",
      "assets/images/photos/realestate-portfolio/23.jpg",
      "assets/images/photos/realestate-portfolio/24.jpg"
    ],
    featured: true,
    featuredRank: 2
  },
  {
    title: "Mentoria ACR",
    category: "photo",
    sector: "Corporate",
    year: "2026",
    role: "Photography · Corporate event",
    image: "assets/images/photos/corporate-mentoria/01.jpg",
    gallery: [
      "assets/images/photos/corporate-mentoria/01.jpg",
      "assets/images/photos/corporate-mentoria/02.jpg",
      "assets/images/photos/corporate-mentoria/03.jpg",
      "assets/images/photos/corporate-mentoria/04.jpg",
      "assets/images/photos/corporate-mentoria/05.jpg",
      "assets/images/photos/corporate-mentoria/06.jpg",
      "assets/images/photos/corporate-mentoria/07.jpg"
    ],
    featured: true,
    featuredRank: 4
  },
  {
    title: "Century21 — Agent Portraits",
    category: "photo",
    sector: "Corporate",
    year: "2025",
    role: "Photography · Retouch",
    image: "assets/images/photos/corporate-century21/03.jpg",
    gallery: [
      "assets/images/photos/corporate-century21/01.jpg",
      "assets/images/photos/corporate-century21/02.jpg",
      "assets/images/photos/corporate-century21/03.jpg",
      "assets/images/photos/corporate-century21/04.jpg",
      "assets/images/photos/corporate-century21/05.jpg",
      "assets/images/photos/corporate-century21/06.jpg",
      "assets/images/photos/corporate-century21/07.jpg",
      "assets/images/photos/corporate-century21/08.jpg"
    ],
    featured: true,
    featuredRank: 9
  },
  {
    title: "Rimar — Seaside Restaurant",
    category: "photo",
    sector: "Business",
    year: "2026",
    role: "Photography · Retouch",
    image: "assets/images/photos/business-rimar/v2/01.jpg",
    gallery: [
      "assets/images/photos/business-rimar/v2/01.jpg",
      "assets/images/photos/business-rimar/v2/02.jpg",
      "assets/images/photos/business-rimar/v2/03.jpg",
      "assets/images/photos/business-rimar/v2/04.jpg",
      "assets/images/photos/business-rimar/v2/05.jpg",
      "assets/images/photos/business-rimar/v2/06.jpg",
      "assets/images/photos/business-rimar/v2/07.jpg",
      "assets/images/photos/business-rimar/v2/08.jpg"
    ],
    featured: true,
    featuredRank: 10
  },
  {
    title: "Mahalo Sushi",
    category: "photo",
    sector: "Business",
    year: "2026",
    role: "Photography · Retouch",
    image: "assets/images/photos/business-mahalo/01.jpg",
    gallery: [
      "assets/images/photos/business-mahalo/01.jpg",
      "assets/images/photos/business-mahalo/02.jpg",
      "assets/images/photos/business-mahalo/03.jpg",
      "assets/images/photos/business-mahalo/04.jpg",
      "assets/images/photos/business-mahalo/05.jpg",
      "assets/images/photos/business-mahalo/06.jpg",
      "assets/images/photos/business-mahalo/07.jpg"
    ],
    featured: false
  },
  {
    title: "Sintrense — Team Portraits",
    category: "photo",
    sector: "Business",
    year: "2026",
    role: "Photography · Retouch",
    image: "assets/images/photos/business-sintrense/01.jpg",
    gallery: [
      "assets/images/photos/business-sintrense/01.jpg",
      "assets/images/photos/business-sintrense/02.jpg",
      "assets/images/photos/business-sintrense/03.jpg",
      "assets/images/photos/business-sintrense/04.jpg",
      "assets/images/photos/business-sintrense/05.jpg",
      "assets/images/photos/business-sintrense/06.jpg",
      "assets/images/photos/business-sintrense/07.jpg"
    ],
    featured: true,
    featuredRank: 8
  },
  {
    title: "U.Dance — Dance Event",
    category: "photo",
    sector: "Business",
    year: "2024",
    role: "Photography · Event",
    image: "assets/images/photos/business-dance/01.jpg",
    gallery: [
      "assets/images/photos/business-dance/01.jpg",
      "assets/images/photos/business-dance/02.jpg",
      "assets/images/photos/business-dance/03.jpg",
      "assets/images/photos/business-dance/04.jpg",
      "assets/images/photos/business-dance/05.jpg",
      "assets/images/photos/business-dance/06.jpg",
      "assets/images/photos/business-dance/07.jpg"
    ],
    featured: false
  },
  {
    title: "Vespa Maia — Tokyo Lisboa",
    category: "photo",
    sector: "Music",
    year: "2026",
    role: "Photography · Live",
    image: "assets/images/photos/music-vespa-maia/01.jpg",
    gallery: [
      "assets/images/photos/music-vespa-maia/01.jpg",
      "assets/images/photos/music-vespa-maia/02.jpg",
      "assets/images/photos/music-vespa-maia/03.jpg",
      "assets/images/photos/music-vespa-maia/04.jpg",
      "assets/images/photos/music-vespa-maia/05.jpg",
      "assets/images/photos/music-vespa-maia/06.jpg",
      "assets/images/photos/music-vespa-maia/07.jpg"
    ],
    featured: false
  },
  {
    title: "Wicked Session",
    category: "photo",
    sector: "Music",
    year: "2026",
    role: "Photography · Live",
    image: "assets/images/photos/music-wicked/01.jpg",
    gallery: [
      "assets/images/photos/music-wicked/01.jpg",
      "assets/images/photos/music-wicked/02.jpg",
      "assets/images/photos/music-wicked/03.jpg",
      "assets/images/photos/music-wicked/04.jpg",
      "assets/images/photos/music-wicked/05.jpg",
      "assets/images/photos/music-wicked/06.jpg",
      "assets/images/photos/music-wicked/07.jpg"
    ],
    featured: false
  },
  {
    title: "Jota Quest — Coliseu",
    category: "photo",
    sector: "Music",
    year: "2025",
    role: "Photography · Live",
    image: "assets/images/photos/music-jota-quest/01.jpg",
    gallery: [
      "assets/images/photos/music-jota-quest/01.jpg",
      "assets/images/photos/music-jota-quest/02.jpg",
      "assets/images/photos/music-jota-quest/03.jpg",
      "assets/images/photos/music-jota-quest/04.jpg",
      "assets/images/photos/music-jota-quest/05.jpg",
      "assets/images/photos/music-jota-quest/06.jpg",
      "assets/images/photos/music-jota-quest/07.jpg"
    ],
    featured: false
  },
  {
    title: "Sessão Trunks",
    category: "photo",
    sector: "Music",
    year: "2025",
    role: "Photography · Studio",
    image: "assets/images/photos/music-trunks/01.jpg",
    gallery: [
      "assets/images/photos/music-trunks/01.jpg",
      "assets/images/photos/music-trunks/02.jpg",
      "assets/images/photos/music-trunks/03.jpg",
      "assets/images/photos/music-trunks/04.jpg",
      "assets/images/photos/music-trunks/05.jpg",
      "assets/images/photos/music-trunks/06.jpg",
      "assets/images/photos/music-trunks/07.jpg"
    ],
    featured: false
  },
  {
    title: "Jonavo — Coliseu",
    category: "photo",
    sector: "Music",
    year: "2025",
    role: "Photography · Live",
    image: "assets/images/photos/music-jonavo/01.jpg",
    gallery: [
      "assets/images/photos/music-jonavo/01.jpg",
      "assets/images/photos/music-jonavo/02.jpg",
      "assets/images/photos/music-jonavo/03.jpg",
      "assets/images/photos/music-jonavo/04.jpg",
      "assets/images/photos/music-jonavo/05.jpg",
      "assets/images/photos/music-jonavo/06.jpg"
    ],
    featured: false
  },
  {
    title: "Roda Funk — Village Underground",
    category: "photo",
    sector: "Music",
    year: "2025",
    role: "Photography · Live",
    image: "assets/images/photos/music-roda-funk/01.jpg",
    gallery: [
      "assets/images/photos/music-roda-funk/01.jpg",
      "assets/images/photos/music-roda-funk/02.jpg",
      "assets/images/photos/music-roda-funk/03.jpg",
      "assets/images/photos/music-roda-funk/04.jpg",
      "assets/images/photos/music-roda-funk/05.jpg",
      "assets/images/photos/music-roda-funk/06.jpg"
    ],
    featured: false
  },
  {
    title: "Almanossa — Live",
    category: "photo",
    sector: "Music",
    year: "2025",
    role: "Photography · Live",
    image: "assets/images/photos/music-almanossa/01.jpg",
    gallery: [
      "assets/images/photos/music-almanossa/01.jpg",
      "assets/images/photos/music-almanossa/02.jpg",
      "assets/images/photos/music-almanossa/03.jpg",
      "assets/images/photos/music-almanossa/04.jpg",
      "assets/images/photos/music-almanossa/05.jpg",
      "assets/images/photos/music-almanossa/06.jpg",
      "assets/images/photos/music-almanossa/07.jpg"
    ],
    featured: false
  },
  {
    title: "Sessão Mio",
    category: "photo",
    sector: "Editorial",
    year: "2026",
    role: "Photography · Direction",
    image: "assets/images/photos/editorial-mio/01.jpg",
    gallery: [
      "assets/images/photos/editorial-mio/01.jpg",
      "assets/images/photos/editorial-mio/02.jpg",
      "assets/images/photos/editorial-mio/03.jpg",
      "assets/images/photos/editorial-mio/04.jpg",
      "assets/images/photos/editorial-mio/05.jpg",
      "assets/images/photos/editorial-mio/06.jpg",
      "assets/images/photos/editorial-mio/07.jpg"
    ],
    featured: false
  },
  {
    title: "Moda & Poses — Seaside",
    category: "photo",
    sector: "Editorial",
    year: "2025",
    role: "Photography · Portrait",
    image: "assets/images/photos/editorial-seaside/01.jpg",
    gallery: [
      "assets/images/photos/editorial-seaside/01.jpg",
      "assets/images/photos/editorial-seaside/02.jpg",
      "assets/images/photos/editorial-seaside/03.jpg"
    ],
    featured: false
  },
  {
    title: "Djereny — Black & White",
    category: "photo",
    sector: "Editorial",
    year: "2025",
    role: "Photography · Portrait",
    image: "assets/images/photos/editorial-djereny/01.jpg",
    gallery: [
      "assets/images/photos/editorial-djereny/01.jpg",
      "assets/images/photos/editorial-djereny/02.jpg",
      "assets/images/photos/editorial-djereny/03.jpg",
      "assets/images/photos/editorial-djereny/04.jpg"
    ],
    featured: false
  },
  {
    title: "Seek4thafame",
    category: "photo",
    sector: "Editorial",
    year: "2025",
    role: "Photography · Direction",
    image: "assets/images/photos/editorial-seek4thafame/01.jpg",
    gallery: [
      "assets/images/photos/editorial-seek4thafame/01.jpg",
      "assets/images/photos/editorial-seek4thafame/02.jpg",
      "assets/images/photos/editorial-seek4thafame/03.jpg",
      "assets/images/photos/editorial-seek4thafame/04.jpg",
      "assets/images/photos/editorial-seek4thafame/05.jpg",
      "assets/images/photos/editorial-seek4thafame/06.jpg",
      "assets/images/photos/editorial-seek4thafame/07.jpg"
    ],
    featured: false
  },
/* ---------------- DESIGN ---------------- */
  {
    title: "Calculame.pt — Logo & Icon",
    category: "design",
    sector: "Identity",
    year: "2026",
    role: "Identity · Logo design",
    image: "assets/images/design/identity-calculame/01.jpg",
    gallery: [
      "assets/images/design/identity-calculame/01.jpg",
      "assets/images/design/identity-calculame/02.jpg",
      "assets/images/design/identity-calculame/03.jpg"
    ],
    featured: false
  },
  {
    title: "Everyday Guy — Wordmark",
    category: "design",
    sector: "Identity",
    year: "2025",
    role: "Identity · Logo design",
    image: "assets/images/design/identity-everydayguy/01.jpg",
    gallery: [],
    featured: false
  },
  {
    title: "Incanto Concerts — Badge",
    category: "design",
    sector: "Identity",
    year: "2025",
    role: "Identity · Logo design",
    image: "assets/images/design/identity-incanto/01.jpg",
    gallery: [],
    featured: false
  },
  {
    title: "Kedy — Logo System",
    category: "design",
    sector: "Identity",
    year: "2025",
    role: "Identity · Logo · Merch",
    image: "assets/images/design/identity-kedy/01.jpg",
    gallery: [
      "assets/images/design/identity-kedy/01.jpg",
      "assets/images/design/identity-kedy/02.jpg",
      "assets/images/design/identity-kedy/03.jpg",
      "assets/images/design/identity-kedy/04.jpg"
    ],
    featured: false
  },
  {
    title: "Stream Media Solutions — Identity",
    category: "design",
    sector: "Identity",
    year: "2024",
    role: "Identity · Logo design",
    image: "assets/images/design/identity-streammedia/01.jpg",
    gallery: [
      "assets/images/design/identity-streammedia/01.jpg",
      "assets/images/design/identity-streammedia/02.jpg"
    ],
    featured: false
  },
  {
    title: "We Gon Rule — Badge & Merch",
    category: "design",
    sector: "Identity",
    year: "2024",
    role: "Identity · Logo · Merch",
    image: "assets/images/design/identity-wegonrule/01.jpg",
    gallery: [
      "assets/images/design/identity-wegonrule/01.jpg",
      "assets/images/design/identity-wegonrule/02.jpg"
    ],
    featured: false
  },

  /* ---------------- MOTION ---------------- */
  {
    title: "Loop — Motion Graphics",
    category: "motion",
    sector: "Motion graphics",
    year: "2025",
    role: "Motion design · Edit",
    image: "assets/images/videos/loop-motion.jpg",
    gallery: [],
    youtube: "UiBch9Y2ka0",
    description: "Motion graphics package built in After Effects, Premiere Pro and Photoshop.",
    featured: false
  },
  {
    title: "89DOTS — Músicas Tristes",
    category: "motion",
    sector: "Motion graphics",
    year: "2024",
    role: "Photography · Edit · Animation",
    image: "assets/images/videos/89dots-musicas-tristes.jpg",
    gallery: [],
    youtube: "fjsoONa4ZUQ",
    vertical: true,
    ar: "9/16",
    description: "Music short with motion graphics built in After Effects and Premiere Pro, from photography to final animation.",
    featured: false
  },

  /* ---------------- VIDEO ---------------- */
  {
    title: "Rimar — Social Short",
    category: "video",
    sector: "Business",
    year: "2026",
    role: "Camera · Edit",
    image: "assets/images/videos/rimar-short.jpg",
    gallery: [],
    youtube: "W-7sw09RDfo",
    vertical: true,
    ar: "9/16",
    description: "Short-form content for Rimar's social channels. Shot on Sony A7 IV, edited in DaVinci Resolve.",
    featured: true,
    featuredRank: 7
  },
  {
    title: "Mahalo Sushi — Short 5",
    category: "video",
    sector: "Business",
    year: "2026",
    role: "Camera · Edit",
    image: "assets/images/videos/mahalo-5.jpg",
    gallery: [],
    youtube: "e8qrwR6dr8g",
    vertical: true,
    ar: "9/16",
    description: "Food and drinks short for Mahalo Sushi. Shot on Sony A7 IV, edited and graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Mahalo Sushi — Short 4",
    category: "video",
    sector: "Business",
    year: "2026",
    role: "Camera · Edit",
    image: "assets/images/videos/mahalo-4.jpg",
    gallery: [],
    youtube: "Nco9bchSIx8",
    vertical: true,
    ar: "9/16",
    description: "Menu piece for social media, shot in the restaurant and edited in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Mahalo Sushi — Short 3",
    category: "video",
    sector: "Business",
    year: "2026",
    role: "Photography · Camera · Edit",
    image: "assets/images/videos/mahalo-3.jpg",
    gallery: [],
    youtube: "-yxvlkRjU3Y",
    vertical: true,
    ar: "9/16",
    description: "Photo-and-video short: stills graded in Lightroom, motion edited in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Mahalo Sushi — Short 2",
    category: "video",
    sector: "Business",
    year: "2026",
    role: "Photography · Camera · Edit",
    image: "assets/images/videos/mahalo-2.jpg",
    gallery: [],
    youtube: "y__JGCda8nI",
    vertical: true,
    ar: "9/16",
    description: "Second social piece from the same shoot — one session, several deliverables.",
    featured: false
  },
  {
    title: "Mahalo Sushi — Short 1",
    category: "video",
    sector: "Business",
    year: "2026",
    role: "Photography · Camera · Edit",
    image: "assets/images/videos/mahalo-1.jpg",
    gallery: [],
    youtube: "cBpBxFI-kB8",
    vertical: true,
    ar: "9/16",
    description: "First short of the series, built from the photo shoot to keep photo and video consistent.",
    featured: false
  },
  {
    title: "Aegyo Galaxy — K-pop Event",
    category: "video",
    sector: "Business",
    year: "2024",
    role: "Camera · Edit",
    image: "assets/images/videos/aegyo-galaxy.jpg",
    gallery: [],
    youtube: "yTFRC4S4CHQ",
    vertical: true,
    ar: "9/16",
    description: "K-pop dance event coverage. Shot on Sony A7 IV, edited in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Mentoria ACR — Aftermovie",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera · Edit",
    image: "assets/images/videos/mentoria-acr.jpg",
    gallery: [],
    youtube: "WlSVD9kCp4k",
    description: "Training event for real estate consultants. Shot on Sony A7 IV, edited in DaVinci Resolve.",
    featured: true,
    featuredRank: 3
  },
  {
    title: "Real Estate Event — Aftermovie",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Edit",
    image: "assets/images/videos/evento-imobiliario.jpg",
    gallery: [],
    youtube: "nYQSU5ySr0g",
    description: "Two-day training for real estate consultants. Edited in DaVinci Resolve from a multi-camera set-up.",
    featured: true,
    featuredRank: 1
  },
  {
    title: "Moita — Sports Complex Opening",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera",
    image: "assets/images/videos/moita-complexo.jpg",
    gallery: [],
    youtube: "RIRvCtGmZkE",
    description: "Opening of the Moita sports complex. Gimbal work on Sony A7 IV for local government press.",
    featured: true,
    featuredRank: 5
  },
  {
    title: "Moita — Baião de Oxigénio",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera",
    image: "assets/images/videos/moita-baiao.jpg",
    gallery: [],
    youtube: "uQ3hHchLZ8g",
    description: "Aftermovie of the show Baião de Oxigénio. Gimbal work, Sony A7 IV.",
    featured: false
  },
  {
    title: "Moita — Noite Branca",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera",
    image: "assets/images/videos/moita-noite-branca.jpg",
    gallery: [],
    youtube: "BLhJ75e6I9c",
    description: "Aftermovie of Noite Branca da Moita. Gimbal work, Sony A7 IV.",
    featured: true,
    featuredRank: 6
  },
  {
    title: "AHDPP — Association Launch",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera",
    image: "assets/images/videos/ahdpp-launch.jpg",
    gallery: [],
    youtube: "9NxwpXi_lig",
    description: "Press launch of Associação AHDPP. Second camera on a two-camera set-up, Sony A7 IV.",
    featured: false
  },
  {
    title: "Barreiro — Milhanas Live",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera",
    image: "assets/images/videos/barreiro-milhanas.jpg",
    gallery: [],
    youtube: "ywubGN2BG9A",
    vertical: true,
    ar: "9/16",
    description: "Concert aftermovie for the Municipality of Barreiro. Shot on Sony A7 IV.",
    featured: false
  },
  {
    title: "Festas de Azeitão",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera",
    image: "assets/images/videos/festas-azeitao.jpg",
    gallery: [],
    youtube: "WZVWmrKuz_Y",
    vertical: true,
    ar: "9/16",
    description: "Village festivities aftermovie for the local parish council. Shot on Sony A7 IV.",
    featured: false
  },
  {
    title: "Festas de Azeitão 2",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera",
    image: "assets/images/videos/festas-azeitao-2.jpg",
    gallery: [],
    youtube: "6ulG-7hAGCk",
    vertical: true,
    ar: "9/16",
    description: "Second piece from the same festivities, cut for social.",
    featured: false
  },
  {
    title: "Mentoria ACR — Short 1",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera · Edit",
    image: "assets/images/videos/mentoria-short-1.jpg",
    gallery: [],
    youtube: "nrh80TAzKjE",
    vertical: true,
    ar: "9/16",
    description: "Vertical cut of the ACR training event for social media.",
    featured: false
  },
  {
    title: "Mentoria ACR — Short 2",
    category: "video",
    sector: "Corporate",
    year: "2026",
    role: "Camera · Edit",
    image: "assets/images/videos/mentoria-short-2.jpg",
    gallery: [],
    youtube: "MPFTHCGU-vw",
    vertical: true,
    ar: "9/16",
    description: "Second vertical cut from the ACR training event.",
    featured: false
  },
  {
    title: "Ana Pshokina & Taras Kuznetsov — IN CANTO Ep.31",
    category: "video",
    sector: "INCANTO",
    year: "2026",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep31.jpg",
    gallery: [],
    youtube: "BkGEu2Khcss",
    description: "IN CANTO live session with Ukrainian musicians based in Lisbon, blending folk and contemporary classical. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Emmy Curl — IN CANTO Ep.39",
    category: "video",
    sector: "INCANTO",
    year: "2026",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep39.jpg",
    gallery: [],
    youtube: "7zg8xhpHQag",
    description: "IN CANTO live session with Portuguese singer-songwriter. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Nicole Monteiro & Adolfo Lothar — IN CANTO Ep.32",
    category: "video",
    sector: "INCANTO",
    year: "2026",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep32.jpg",
    gallery: [],
    youtube: "EhNRS2kkr68",
    description: "IN CANTO live session with Lisbon-based duo celebrating songbook and poetry. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Bando da Lua — IN CANTO Ep.30",
    category: "video",
    sector: "INCANTO",
    year: "2026",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep30.jpg",
    gallery: [],
    youtube: "I66CW7s8ykI",
    description: "IN CANTO live session with Bia Souza's project, roots and modern sounds. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Cristovon Colombia — IN CANTO Ep.27",
    category: "video",
    sector: "INCANTO",
    year: "2026",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep27.jpg",
    gallery: [],
    youtube: "_6_H5pCRJCM",
    description: "IN CANTO live session with original songs crossing Latin and Colombian rhythms. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "TAYFA — IN CANTO Ep.25",
    category: "video",
    sector: "INCANTO",
    year: "2026",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep25.jpg",
    gallery: [],
    youtube: "SFeOAW6V8Fo",
    description: "IN CANTO live session with quartet playing Anatolian music heritage. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Kenny Caetano & Luzingo Monimambo — IN CANTO Ep.14",
    category: "video",
    sector: "INCANTO",
    year: "2025",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep14.jpg",
    gallery: [],
    youtube: "sPSoQfO_2mo",
    description: "IN CANTO live session with Lisbon producer mixing electronica, afrobeat and soul. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Julia Vargas — IN CANTO Ep.10",
    category: "video",
    sector: "INCANTO",
    year: "2025",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep10.jpg",
    gallery: [],
    youtube: "gQVaKcJq53U",
    description: "IN CANTO live session with Rio de Janeiro singer-songwriter on her Eurotour. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Serginho Mota — IN CANTO Ep.9",
    category: "video",
    sector: "INCANTO",
    year: "2025",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep9.jpg",
    gallery: [],
    youtube: "cWON_iLMctY",
    description: "IN CANTO live session with Brazilian singer-songwriter from Minas Gerais. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "NURIA & Renato — IN CANTO Ep.7",
    category: "video",
    sector: "INCANTO",
    year: "2025",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep7.jpg",
    gallery: [],
    youtube: "hmM6OdtVbKA",
    description: "IN CANTO live session with Brazilian duo with an original sound. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Kristoffer Chris — IN CANTO Ep.20",
    category: "video",
    sector: "INCANTO",
    year: "2025",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep20.jpg",
    gallery: [],
    youtube: "yUT47-Rphtk",
    description: "IN CANTO live session with Angolan bassist with a groove-led set. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Cristina Clara — IN CANTO Ep.19",
    category: "video",
    sector: "INCANTO",
    year: "2025",
    role: "Direction · Camera · Edit",
    image: "assets/images/videos/incanto-ep19.jpg",
    gallery: [],
    youtube: "7CNywzCtxL8",
    description: "IN CANTO live session with Portuguese singer from Minho. Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Mio — 26ºDia",
    category: "video",
    sector: "Musical",
    year: "2026",
    role: "Camera · Edit · Production · Direction",
    image: "assets/images/videos/mio-26-dia.jpg",
    gallery: [],
    youtube: "u77vJR43R68",
    description: "Music video for the single 26ºDia. Shot on Sony A7 IV, edited in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Mio — Fim da Cegueira",
    category: "video",
    sector: "Musical",
    year: "2026",
    role: "Camera · Edit · Production · Direction",
    image: "assets/images/videos/mio-fim-da-cegueira.jpg",
    gallery: [],
    youtube: "8UIsmK9A73Y",
    description: "Second music video for Mio, from concept and production to the final grade.",
    featured: false
  },
  {
    title: "Komet — Cura",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit",
    image: "assets/images/videos/komet-cura.jpg",
    gallery: [],
    vimeo: "1246221537",
    vertical: true,
    ar: "9/16",
    description: "Short musical for social media. Shot and edited in 7 days, delivered in vertical 9:16 for Reels and TikTok.",
    featured: false
  },
  {
    title: "Djereny — ALTITUDE",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit · Direction",
    image: "assets/images/videos/djereny-altitude.jpg",
    gallery: [],
    youtube: "DcBB46qCWUU",
    description: "Music video shot on Sony A7 IV and graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Djereny — Fala de Love",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit · Direction",
    image: "assets/images/videos/djereny-fala-de-love.jpg",
    gallery: [],
    youtube: "Uug5W2nOkIs",
    description: "Music video shot on Sony A7 IV and graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Djereny — Go Crazy",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit · Direction",
    image: "assets/images/videos/djereny-go-crazy.jpg",
    gallery: [],
    youtube: "KIrAM-2Ol-U",
    description: "Music video shot on Sony A7 IV and graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "ElaDiz — TRUNKS e DAVE",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit · Direction",
    image: "assets/images/videos/eladiz-trunks-dave.jpg",
    gallery: [],
    youtube: "PbHMxaoyteQ",
    description: "Music video for TraPunKidz. Shot on Sony A7 IV, edited and graded in DaVinci Resolve.",
    featured: false
  },
  {
    title: "TraPunKidz — Rockstar",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit",
    image: "assets/images/videos/trapunkidz-rockstar.jpg",
    gallery: [],
    youtube: "VS4a1SWeZDw",
    description: "Music video shot on Sony A7 IV, edited in DaVinci Resolve.",
    featured: false
  },
  {
    title: "Údi — Conversa com IA",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit · Direction",
    image: "assets/images/videos/udi-conversa-com-ia.jpg",
    gallery: [],
    youtube: "bc7O00JtDf0",
    description: "Studio music video shot on Sony A7 IV, edited in DaVinci Resolve.",
    featured: false
  },
,
  {
    title: "Jonavo — Coliseu dos Recreios",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Camera · Edit",
    image: "assets/images/videos/jonavo-coliseu.jpg",
    gallery: [],
    youtube: "4DzBECHf-ew",
    vertical: true,
    ar: "9/16",
    description: "Concert aftermovie at Coliseu dos Recreios. Shot on Sony A7 IV, edited in Premiere Pro.",
    featured: false
  },
  {
    title: "Jonavo — London",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Edit",
    image: "assets/images/videos/jonavo-londres.jpg",
    gallery: [],
    youtube: "xsGxqlqfh3I",
    vertical: true,
    ar: "9/16",
    description: "Concert aftermovie from the London show. Edited in Premiere Pro.",
    featured: false
  },
  {
    title: "Jonavo — Dublin",
    category: "video",
    sector: "Musical",
    year: "2025",
    role: "Edit",
    image: "assets/images/videos/jonavo-dublin.jpg",
    gallery: [],
    youtube: "-8bK0r2BThI",
    vertical: true,
    ar: "9/16",
    description: "Concert aftermovie from the Dublin show. Edited in Premiere Pro.",
    featured: false
  }

];

/* The showreel: plays on the home page, on the Video page (looping preview)
   and from any "Watch the reel" button.
   Put your best 60–90s edit at assets/video/reel.mp4. Until then the poster
   is shown, so nothing looks broken. */
const REEL = {
  title: "Showreel 2026",
  poster: "assets/images/reel.jpg",
  video: "assets/video/reel.mp4",
  youtube: "",
  vimeo: ""
};

/* The photography slideshow at the top of the Photography page. */
const PHOTO_SLIDESHOW = [
  { image: "assets/images/photos/business-rimar/v2/01.jpg", title: "Rimar — Seaside Restaurant", caption: "Business · 2026" },
  { image: "assets/images/photos/business-mahalo/01.jpg", title: "Mahalo Sushi", caption: "Business · 2026" },
  { image: "assets/images/photos/corporate-mentoria/03.jpg", title: "Mentoria ACR", caption: "Corporate · 2026" },
  { image: "assets/images/photos/realestate-portfolio/02.jpg", title: "Real Estate — Portfolio", caption: "Real estate · 2024" },
  { image: "assets/images/photos/business-sintrense/01.jpg", title: "Sintrense — Team Portraits", caption: "Business · 2026" },
  { image: "assets/images/photos/music-vespa-maia/01.jpg", title: "Vespa Maia — Tokyo Lisboa", caption: "Music · 2026" }
];

const CATEGORY_LABELS = {
  video: "Video",
  photo: "Photography",
  design: "Design",
  motion: "Motion"
};
