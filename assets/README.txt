HOW THE SITE IS ORGANISED
=========================

Pages
  index.html          home: area selector + selected work + areas + about + contact
  video.html          Video area      (looping showreel + projects + filters)
  photography.html    Photography area (slideshow + projects + photo galleries)
  design.html         Design area     (projects + filters)
  motion.html         Motion area     (projects + filters)

Everything you edit lives in:
  assets/js/projects.js     projects, sectors, galleries, showreel, slideshow
  assets/css/styles.css     all styling
  assets/images/            photos
  assets/video/             videos (empty for now — see "VIDEOS")


1) PHOTOGRAPHY  ->  assets/images/photos/

   One folder per shoot:

     assets/images/photos/music-wicked/01.jpg
     assets/images/photos/music-wicked/02.jpg
     …
     assets/images/photos/music-wicked/07.jpg

   "01.jpg" is the cover. Every file in the folder is listed in the project's
   "gallery" array in projects.js, and opens inside the lightbox.

   Current shoots
     business-rimar        business-mahalo      business-sintrense
     business-dance        corporate-mentoria   corporate-century21
     realestate-portfolio  (24 photos — real estate portfolio)
     music-vespa-maia      music-wicked         music-jota-quest
     music-trunks          music-jonavo         music-roda-funk
     music-almanossa       editorial-mio        editorial-seaside
     editorial-djereny     editorial-seek4thafame

   To add a shoot: create the folder, drop the photos, copy one project block
   in projects.js and point "image" + "gallery" at the new files.


2) DESIGN / LOGOS  ->  assets/images/design/

     identity-calculame  identity-everydayguy  identity-incanto
     identity-kedy       identity-streammedia  identity-wegonrule

   Same idea: 01.jpg is the cover, the rest are the variants/mockups.


   PUBLICAR (Cloudflare Pages)
   Workers & Pages -> Create -> Pages -> Upload assets -> arrastar esta pasta.
   Ou ligar ao GitHub (RomelNeto/portfolio-website): preset None, build command
   "exit 0", output "/" — actualiza a cada push.
   O ficheiro _headers já configura cache e cabeçalhos; NÃO usar
   "Referrer-Policy: no-referrer", senão o YouTube dá erro 153.


0) VER O SITE NO COMPUTADOR  (importante)

   Abrir o index.html com duplo-clique mostra o site, mas os vídeos do YouTube
   NÃO tocam — o YouTube devolve "Erro 153" porque a página não tem endereço
   web (file://).

   Solução: duplo-clique em  abrir-site.command
   Ele arranca um servidor local e abre em  http://localhost:8000
   (é só para pré-visualizar; no alojamento funciona sem nada disto).


3) VIDEOS

   No video files are stored on the server. Upload the film to YouTube
   (unlisted) or Vimeo and put the ID in the project:

     youtube: "dQw4w9WgXcQ"     <- part after watch?v=
     vimeo:   "76979871"        <- the number in the Vimeo URL

   The Video page and the home page already open that link in the lightbox.
   The showreel (REEL at the bottom of projects.js) accepts the same fields.

   Until the films are online, video.html and motion.html show an honest
   "in production" panel (no fictional projects).

   DATA NEEDED PER VIDEO (to fill the project block)
     title        – client + piece, e.g. "Mentoria ACR — Event Film"
     sector       – Corporate | Business | Musical | Social | Titles | Logos
     year         – year of the shoot
     role         – what YOU did, e.g. "Camera · Edit" or "Direction · Edit · Color"
     image        – cover: a still from the film (assets/images/...)
     youtube      – link/ID
     description  – 2 lines: the brief, what you delivered, the result
     featured     – true if it should appear on the home page

   VIDEO COVERS
   assets/images/videos/<slug>.jpg  — one per video, taken from the YouTube
   thumbnail (long films) or the vertical thumbnail (shorts).

   SHORTS / REELS
   Any project with  vertical: true  goes into the "Shorts & reels" grid at the
   bottom of the Video page instead of the main grid, so 9:16 covers are never
   cropped into landscape slots.

   VERTICAL VIDEOS (Reels / TikTok / 9:16)
   Add  vertical: true,  and  ar: "9/16"  to the project. The lightbox
   switches to a portrait player and the card becomes a portrait tile with
   a small "9:16" badge. Example: "Komet — Cura" on video.html.

   VIMEO
   Use  vimeo: "1246221537"  (the number in player.vimeo.com/video/<ID>).
   On Vimeo you can hide the title and byline in the embed settings.
   The cover can be taken from the video page: right-click the poster →
   "Save image", or use the og:image URL of the video.

   The covers now in use are real stills from the films
   (assets/images/reel.jpg = frame from "Ela Diz — Trunks e Dave",
    assets/images/motion-cover.jpg = frame from the "5x points" animation).
   To make a still from any video on the Mac:
     qlmanage -t -s 1200 -o /tmp/out "file.mov"
   then convert to JPEG with sips.


4) SECTORS / FILTERS

   Each project has a "sector" (Corporate, Business, Music, Editorial,
   Identity…). It becomes a filter chip on that area's page. The chip order
   is defined in AREAS.<area>.sectors inside projects.js.


5) HOME PAGE SELECTION

   Mark projects with "featured: true". Eight works best (the grid fills
   perfectly). The quick selector above "Selected work" is built from the
   AREAS block: "cover" + "label".


6) IMAGE SPECS USED

   Photos: max 1500 px on the long edge, JPEG q78, EXIF stripped (~170 KB each).
   Logos:  square 1200 px, JPEG q82, transparent areas flattened onto a
   contrasting background.
