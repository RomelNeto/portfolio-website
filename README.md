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

## Deploy — Cloudflare Pages

No build step: the folder is served as is. Two ways:

**A. Upload (fastest, no build config)**

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Drag this folder in → **Deploy site**
3. Live at `https://<project>.pages.dev`

**B. Connected to Git (auto-deploy on every push)**

1. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Pick `RomelNeto/portfolio-website`
3. Framework preset: **None** · Build command: *(leave empty)* · Build output directory: **/**
4. **Save and Deploy**

Every `git push` to `main` republishes the site.

### Files Cloudflare reads automatically

- `_headers` — cache for `/assets/*` and security headers. Do **not** set
  `Referrer-Policy: no-referrer`: the YouTube/Vimeo players need the referrer,
  otherwise they fail with **error 153**.
- There is no `_redirects` and no build output folder — everything is at the root.

### Limits

25 MiB per file, 20 000 files. This site: ~33 MB, 214 files, largest file ~380 KB.
