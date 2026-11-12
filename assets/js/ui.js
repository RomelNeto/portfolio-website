/* ==========================================================================
   Shared UI — used by every page
   Theme · header · reveal on scroll · toast · lightbox
   Exposed as window.RN
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Texto de interface: inglês por omissão, português nas páginas /pt/ */
  var EN_T = {
    all: "All", project: "project", projects: "projects", short: "short", shorts: "shorts",
    photos: "photos", photo: "photo", inProduction: "In production", looping: "Looping",
    reelComingSoon: "Reel coming soon", play: "Play", pause: "Pause", watchOn: "Watch on YouTube ↗",
    showreelNote: "The showreel is still being cut — this is the poster frame.",
    videoSoon: "Video coming soon — the preview still is shown until the final cut is online.",
    explore: "Explore ↗", openPhoto: "Open photo", goToPhoto: "Go to photo",
    fillForm: "Please fill in your name, email and project details.",
    badEmail: "That email address doesn't look right.",
    openingMail: "Opening your email app…",
    mailName: "Name", mailEmail: "Email", mailProject: "Project",
    reelMeta: "Direction · Camera · Edit · Color",
    themeDark: "Switch to dark theme", themeLight: "Switch to light theme",
    beingCut: "Being cut right now", requestReel: "Request the full reel"
  };
  var PT_T = window.RN_PT && window.RN_PT.ui;

  function T(key) {
    if (PT_T && PT_T[key]) return PT_T[key];
    return EN_T[key] || key;
  }

  function sectorLabel(sector) {
    if (window.RN_PT && window.RN_PT.sectors[sector]) return window.RN_PT.sectors[sector];
    return sector;
  }

  /* ---------------- Theme ---------------- */
  var root = document.documentElement;
  var themeBtn = $("#themeBtn");
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("rn-theme"); } catch (e) { /* private mode */ }
  root.setAttribute("data-theme", savedTheme === "dark" ? "dark" : "light");

  function syncThemeLabel() {
    if (!themeBtn) return;
    var isLight = root.getAttribute("data-theme") === "light";
    themeBtn.setAttribute("aria-label", isLight ? T("themeDark") : T("themeLight"));
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isLight ? "#f4f1ea" : "#0a0a0b");
  }
  syncThemeLabel();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("rn-theme", next); } catch (e) { /* ignore */ }
      syncThemeLabel();
    });
  }

  /* ---------------- Header ---------------- */
  var head = $("#head");
  var burger = $("#burger");
  var mobileNav = $("#mobileNav");

  function onScroll() {
    if (!head) return;
    if (head.classList.contains("head--solid") || window.scrollY > 24) head.classList.add("is-scrolled");
    else head.classList.remove("is-scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeMenu() {
    if (!burger || !mobileNav) return;
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
    mobileNav.hidden = true;
  }

  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      burger.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      mobileNav.hidden = open;
    });
    $$("a", mobileNav).forEach(function (a) { a.addEventListener("click", closeMenu); });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileNav.hidden) closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 880 && !mobileNav.hidden) closeMenu();
    });
  }

  /* ---------------- Toast ---------------- */
  var toastEl = $("#toast");
  var toastTimer;
  function toast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-on"); }, 3200);
  }

  /* ---------------- Reveal on scroll ---------------- */
  var observer = null;
  if ("IntersectionObserver" in window && !reduceMotion) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
  }

  function observe(el) {
    if (observer) observer.observe(el);
    else el.classList.add("is-in");
  }

  function revealAll(scope) {
    $$(".reveal:not(.is-in)", scope || document).forEach(observe);
  }

  /* ---------------- Lightbox ---------------- */
  var lb = $("#lightbox");
  var lbMedia = $("#lbMedia");
  var lbCap = $("#lbCap");
  var lbCount = $("#lbCount");
  var lbPrev = $("#lbPrev");
  var lbNext = $("#lbNext");
  var slides = [];
  var position = 0;
  var lastTrigger = null;

  function stopMedia() {
    if (!lbMedia) return;
    $$("video, iframe", lbMedia).forEach(function (node) { node.remove(); });
  }

  var fromFile = location.protocol === "file:";

  function fileNotice(slide, watchUrl) {
    return (
      '<div class="embed-block">' +
        '<p class="embed-block-title">YouTube blocks playback when the page is opened as a local file</p>' +
        "<p>The player needs a real web address. Open the site with <b>abrir-site.command</b> " +
        "(double-click it) or upload the site — it works normally once hosted.</p>" +
        '<a class="btn btn--primary" href="' + esc(watchUrl) + '" target="_blank" rel="noopener">' +
          esc(T("watchOn")) + "</a>" +
      "</div>"
    );
  }

  function mediaFor(slide) {
    var frameClass = slide.vertical ? ' class="vertical"' : "";
    if (slide.youtube && fromFile) {
      return fileNotice(slide, "https://www.youtube.com/watch?v=" + encodeURIComponent(slide.youtube));
    }
    if (slide.youtube) {
      return '<iframe' + frameClass + ' src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(slide.youtube) +
        '?autoplay=1&rel=0" title="' + esc(slide.title) +
        '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    }
    if (slide.vimeo) {
      return '<iframe' + frameClass + ' src="https://player.vimeo.com/video/' + encodeURIComponent(slide.vimeo) +
        '?autoplay=1&badge=0&autopause=0" title="' + esc(slide.title) +
        '" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen></iframe>';
    }
    if (slide.video) {
      return '<video src="' + esc(slide.video) + '" poster="' + esc(slide.poster || slide.image || "") +
        '" controls autoplay playsinline preload="metadata"></video>';
    }
    return '<img src="' + esc(slide.image) + '" alt="' + esc(slide.title) + '">';
  }

  function show() {
    var slide = slides[position];
    if (!slide) return;
    stopMedia();
    lbMedia.innerHTML = mediaFor(slide);

    var video = $("video", lbMedia);
    if (video) {
      video.addEventListener("error", function () {
        var fallback = slide.poster || slide.image;
        if (fallback) lbMedia.innerHTML = '<img src="' + esc(fallback) + '" alt="' + esc(slide.title) + '">';
      }, { once: true });
    }

    var caption = "<h3>" + esc(slide.title) + "</h3>";
    if (slide.meta) caption += "<p>" + esc(slide.meta) + "</p>";
    if (slide.frame && slide.frame.total > 1) {
      caption += '<p class="lb-frame">Photo ' + slide.frame.index + " of " + slide.frame.total + "</p>";
    }
    if (slide.description) caption += '<p class="lb-desc">' + esc(slide.description) + "</p>";
    if (slide.note) caption += '<p class="lb-missing">' + esc(slide.note) + "</p>";
    lbCap.innerHTML = caption;

    var single = slides.length < 2;
    lbCount.textContent = single ? "" : (position + 1) + " / " + slides.length;
    lbPrev.hidden = lbNext.hidden = single;
  }

  function step(dir) {
    if (slides.length < 2) return;
    position = (position + dir + slides.length) % slides.length;
    show();
  }

  function openLightbox(list, index, trigger) {
    if (!lb || !list || !list.length) return;
    slides = list;
    position = Math.max(0, Math.min(index || 0, list.length - 1));
    lastTrigger = trigger || document.activeElement;
    show();
    document.body.classList.add("lb-open");
    if (typeof lb.showModal === "function") {
      if (!lb.open) lb.showModal();
    } else {
      lb.setAttribute("open", "");
    }
  }

  function closeLightbox() {
    if (!lb) return;
    if (typeof lb.close === "function" && lb.open) lb.close();
    else lb.removeAttribute("open");
    document.body.classList.remove("lb-open");
    stopMedia();
  }

  if (lb) {
    $("#lbClose").addEventListener("click", closeLightbox);
    lbPrev.addEventListener("click", function () { step(-1); });
    lbNext.addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    lb.addEventListener("close", function () {
      document.body.classList.remove("lb-open");
      stopMedia();
      if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.open) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    });
  }

  /* ---------------- Cards & project galleries ---------------- */

  /* Shapes that always fill a 6-column grid: wide + tall, tall + wide, halves.
     The last card is stretched so a set never ends with a hole. */
  var SHAPE_WIDTHS = [4, 2, 2, 4, 3, 3];
  var SHAPE_CLASS = { 2: "s-tall", 3: "s-half", 4: "s-wide", 6: "s-full" };

  function shapesFor(count) {
    var widths = [];
    var rowUsed = 0;
    for (var i = 0; i < count; i++) {
      var w = i === count - 1 ? (rowUsed > 0 ? 6 - rowUsed : 6) : SHAPE_WIDTHS[i % 6];
      rowUsed = (rowUsed + w) % 6;
      widths.push(w);
    }
    return widths.map(function (w) { return SHAPE_CLASS[w] || "s-tall"; });
  }

  function projectMeta(project) {
    var bits = [];
    if (project.role) bits.push(project.role);
    if (project.year) bits.push(project.year);
    return bits.join(" · ");
  }

  function projectSlides(project) {
    var title = project.title;
    var meta = projectMeta(project);
    var gallery = project.gallery && project.gallery.length ? project.gallery : null;

    if (gallery) {
      return gallery.map(function (src, i) {
        return {
          image: src,
          title: title,
          meta: meta,
          description: i === 0 ? project.description : "",
          vertical: !!project.vertical,
          frame: { index: i + 1, total: gallery.length }
        };
      });
    }

    var note = "";
    if ((project.category === "video" || project.category === "motion") && !project.video && !project.youtube && !project.vimeo) {
      note = T("videoSoon");
    }

    return [{
      image: project.image,
      poster: project.image,
      video: project.video,
      youtube: project.youtube,
      vimeo: project.vimeo,
      title: title,
      meta: meta,
      description: project.description || "",
      vertical: !!project.vertical,
      note: note
    }];
  }

  function openProject(project, trigger) {
    openLightbox(projectSlides(project), 0, trigger);
  }

  function cardMarkup(project, index, options) {
    var opts = options || {};
    var shape = opts.shape || "s-tall";
    var isVideo = project.category === "video" || project.category === "motion";
    var photos = project.gallery && project.gallery.length > 1 ? project.gallery.length : 0;
    var meta = opts.showCategory === false
      ? (project.sector || "")
      : (CATEGORY_LABELS[project.category] || "") + " · " + (project.year || "");
    var vertical = project.vertical ? " is-vertical" : "";
    var verticalTag = project.vertical ? '<span class="card-tag">9:16</span>' : "";

    return (
      '<button class="card ' + shape + vertical + '" type="button" data-index="' + index + '">' +
        '<span class="card-media">' +
          '<img src="' + esc(project.image) + '" alt="' + esc(project.title) + '" loading="lazy" decoding="async">' +
          (isVideo ? '<span class="play-badge" aria-hidden="true"><i></i></span>' : "") +
          (photos && !isVideo ? '<span class="card-badge">' + photos + " " + T("photos") + "</span>" : "") +
          verticalTag +
        "</span>" +
        '<span class="card-cap">' +
          '<span class="card-title">' + esc(project.title) + "</span>" +
          '<span class="card-meta">' + esc(meta) + "</span>" +
        "</span>" +
      "</button>"
    );
  }

  function renderGrid(container, projects, options) {
    var opts = options || {};
    var shapes = shapesFor(projects.length);
    container.innerHTML = projects.map(function (p, i) {
      return cardMarkup(p, i, { showCategory: opts.showCategory, shape: shapes[i] });
    }).join("");
    $$("img", container).forEach(function (img) {
      img.addEventListener("error", function () {
        var holder = img.closest(".card-media");
        if (holder) holder.classList.add("is-empty");
        img.remove();
      }, { once: true });
    });
    $$(".card", container).forEach(function (card, i) {
      card.style.setProperty("--d", Math.min(i, 6) * 0.04 + "s");
      card.classList.add("reveal");
      observe(card);
    });
  }

  function renderFilters(container, sectors, current, onSelect) {
    var html = '<button class="filter' + (current === "all" ? " is-active" : "") +
      '" type="button" data-sector="all" aria-pressed="' + (current === "all") + '">' + esc(T("all")) + "</button>";
    html += sectors.map(function (sector) {
      var on = sector === current;
      return '<button class="filter' + (on ? " is-active" : "") + '" type="button" data-sector="' +
        esc(sector) + '" aria-pressed="' + on + '">' + esc(sectorLabel(sector)) + "</button>";
    }).join("");
    container.innerHTML = html;
    container.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-sector]");
      if (!btn) return;
      $$("[data-sector]", container).forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      onSelect(btn.dataset.sector);
    });
  }

  /* Delegated click: any .card opens its project (gallery for photo sets) */
  function bindGrid(container, getProjects) {
    container.addEventListener("click", function (e) {
      var card = e.target.closest(".card");
      if (!card) return;
      var project = getProjects()[Number(card.dataset.index)];
      if (project) openProject(project, card);
    });
  }

  /* ---------------- Export ---------------- */
  window.RN = {
    $: $,
    $$: $$,
    esc: esc,
    toast: toast,
    observe: observe,
    revealAll: revealAll,
    reduceMotion: reduceMotion,
    lightbox: { open: openLightbox, close: closeLightbox },
    openProject: openProject,
    projectSlides: projectSlides,
    renderGrid: renderGrid,
    T: T,
    sectorLabel: sectorLabel,
    renderFilters: renderFilters,
    bindGrid: bindGrid
  };
})();
