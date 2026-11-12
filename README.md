# Romel Neto — Portfolio

Portfolio website for Romel Neto — videographer, photographer and designer.
Static site: no build step, no dependencies, no backend.

**Live:** https://romelneto.github.io/portfolio-website/

## Pages

| File | What it is |
|---|---|
| `index.html` | Home: area selector, selected work, showreel, services, about, contact |
| `video.html` | Video area — IN CANTO series, main work, shorts & reels |
| `photography.html` | Photography — slideshow, 18 shoots with photo galleries |
| `design.html` | Logo & identity work |
| `motion.html` | Motion graphics |

## Editing

Almost everything lives in **`assets/js/projects.js`** — projects, sectors, galleries,
showreel and the photography slideshow. See `assets/README.txt` for the full guide.

Videos are embedded from YouTube / Vimeo (nothing is stored on the server):

```js
{
  title: "Mio — 26ºDia",
  category: "video",
  sector: "Musical",
  year: "2026",
  role: "Camera · Edit · Production · Direction",
  image: "assets/images/videos/mio-26-dia.jpg",
  youtube: "u77vJR43R68",
  description: "Music video for the single 26ºDia…"
}
```

## Local preview

Open the site through a local server, otherwise YouTube refuses to play (error 153):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

On macOS you can double-click `abrir-site.command` instead.

## Deploy

Any static host works (GitHub Pages, Cloudflare Pages, Netlify) — upload the folder as is.

For GitHub Pages: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
