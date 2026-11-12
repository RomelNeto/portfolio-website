/* ==========================================================================
   Area pages — Video · Photography · Design · Motion
   Filters, project grid, photo slideshow, looping showreel
   ========================================================================== */
(function () {
  "use strict";

  var RN = window.RN;
  var areaKey = document.body.dataset.area;
  var area = AREAS[areaKey];
  if (!RN || !area) return;

  var $ = RN.$;
  var $$ = RN.$$;
  var esc = RN.esc;

  var projects = PROJECTS.filter(function (p) { return p.category === areaKey; });
  var current = "all";
  var visible = projects.slice();

  /* ---------------- Sectors present (declared order first) ---------------- */
  function sectorList() {
    var found = [];
    projects.forEach(function (p) {
      if (p.sector && found.indexOf(p.sector) === -1) found.push(p.sector);
    });
    var ordered = (area.sectors || []).filter(function (s) { return found.indexOf(s) !== -1; });
    found.forEach(function (s) { if (ordered.indexOf(s) === -1) ordered.push(s); });
    return ordered;
  }

  /* ---------------- Grid + filters ---------------- */
  var grid = $("#workGrid");
  var filtersEl = $("#areaFilters");
  var emptyState = $("#emptyState");
  var countEl = $("#workCount");
  var shortsWrap = $("#shortsWrap");
  var shortsGrid = $("#shortsGrid");
  var shortsCount = $("#shortsCount");
  var landscape = [];
  var portrait = [];

  function updateCount() {
    if (!countEl) return;
    countEl.textContent = visible.length + (visible.length === 1 ? " project" : " projects");
  }

  function paint() {
    visible = projects.filter(function (p) { return current === "all" || p.sector === current; });
    updateCount();

    landscape = visible.filter(function (p) { return !p.vertical; });
    portrait = visible.filter(function (p) { return p.vertical; });

    if (shortsWrap) {
      shortsWrap.hidden = portrait.length === 0;
      if (portrait.length) {
        if (shortsCount) shortsCount.textContent = portrait.length + (portrait.length === 1 ? " short" : " shorts");
        RN.renderGrid(shortsGrid, portrait, { showCategory: false });
      } else {
        shortsGrid.innerHTML = "";
      }
    }

    if (emptyState) emptyState.hidden = visible.length > 0;

    if (!landscape.length) {
      grid.innerHTML = "";
      grid.style.display = "none";
      return;
    }
    grid.style.display = "";
    grid.classList.toggle("work-grid--duo", landscape.length === 2);
    grid.classList.toggle("work-grid--single", landscape.length === 1);
    RN.renderGrid(grid, landscape, { showCategory: false });
  }

  var sectors = sectorList();
  if (filtersEl && sectors.length < 2) {
    filtersEl.remove(); /* a single sector has nothing to filter */
    filtersEl = null;
  } else if (filtersEl) {
    RN.renderFilters(filtersEl, sectors, current, function (sector) {
      if (sector === current) return;
      current = sector;
      paint();
    });
  }

  if (grid && !projects.length && area.comingSoon) {
    if (filtersEl) filtersEl.remove();
    if (countEl) countEl.textContent = "In production";
    var panel = document.createElement("div");
    panel.className = "soon";
    panel.innerHTML =
      '<p class="kicker">In production</p>' +
      "<h3>Being cut right now</h3>" +
      "<p>" + esc(area.comingSoon) + "</p>" +
      '<a class="btn btn--ghost" href="index.html#contact">Request the full reel</a>';
    grid.parentNode.insertBefore(panel, grid);
    grid.remove();
    panel.classList.add("reveal");
    RN.observe(panel);
  } else if (grid) {
    RN.bindGrid(grid, function () { return landscape; });
    if (shortsGrid) RN.bindGrid(shortsGrid, function () { return portrait; });
    paint();
  }

  /* ---------------- Video: looping showreel ---------------- */
  var loop = $("#reelLoop");
  if (loop) {
    var loopVideo = $("#reelLoopVideo");
    var loopTag = $("#reelLoopTag");
    var loopPlay = $("#reelLoopPlay");

    var startLoop = function () {
      loopVideo.src = loopVideo.dataset.src;
      loopVideo.addEventListener("playing", function () {
        loop.classList.add("is-playing");
        if (loopTag) loopTag.textContent = "Looping";
      }, { once: true });
      loopVideo.addEventListener("error", function () {
        if (loopTag) loopTag.textContent = "Reel coming soon";
      }, { once: true });
      var playing = loopVideo.play();
      if (playing && playing.then) playing.catch(function () { /* autoplay blocked */ });
    };

    if (loopVideo && !RN.reduceMotion) {
      if (location.protocol === "file:") {
        startLoop();
      } else {
        fetch(loopVideo.dataset.src, { method: "HEAD" })
          .then(function (res) { if (res.ok) startLoop(); else if (loopTag) loopTag.textContent = "Reel coming soon"; })
          .catch(function () { if (loopTag) loopTag.textContent = "Reel coming soon"; });
      }
    } else if (loopTag) {
      loopTag.textContent = "Reel coming soon";
    }

    if (loopPlay) {
      loopPlay.addEventListener("click", function () {
        RN.lightbox.open([{
          image: REEL.poster,
          poster: REEL.poster,
          video: REEL.video,
          youtube: REEL.youtube,
          vimeo: REEL.vimeo,
          title: REEL.title,
          meta: "Direction · Camera · Edit · Color",
          note: REEL.video ? "" : "The showreel is still being cut — this is the poster frame."
        }], 0, loopPlay);
      });
    }
  }

  /* ---------------- Photography: slideshow ---------------- */
  var slidesEl = $("#slides");
  if (slidesEl && typeof PHOTO_SLIDESHOW !== "undefined" && PHOTO_SLIDESHOW.length) {
    var stage = $("#slidesStage");
    var dotsEl = $("#slidesDots");
    var barEl = $("#slidesBar");
    var countElSlides = $("#slidesCount");
    var titleEl = $("#slidesTitle");
    var capEl = $("#slidesCaption");
    var pauseBtn = $("#slidesPause");
    var DURATION = 5200;
    var index = 0;
    var timer = null;
    var userPaused = false;
    var hovering = false;

    stage.innerHTML = PHOTO_SLIDESHOW.map(function (s, i) {
      return '<button class="slide' + (i === 0 ? " is-active" : "") + '" type="button" data-index="' + i +
        '" aria-label="Open photo ' + (i + 1) + ": " + esc(s.title) + '">' +
        '<img src="' + esc(s.image) + '" alt="' + esc(s.title) + '" loading="' + (i === 0 ? "eager" : "lazy") + '">' +
        "</button>";
    }).join("");

    dotsEl.innerHTML = PHOTO_SLIDESHOW.map(function (s, i) {
      return '<button class="slide-dot' + (i === 0 ? " is-active" : "") + '" type="button" data-go="' + i +
        '" aria-label="Go to photo ' + (i + 1) + '"></button>';
    }).join("");

    var slideNodes = $$(".slide", stage);
    var dotNodes = $$(".slide-dot", dotsEl);

    function isRunning() {
      return !userPaused && !hovering && !RN.reduceMotion;
    }

    function stopTimer() {
      if (timer) clearTimeout(timer);
      timer = null;
    }

    function startTimer() {
      stopTimer();
      if (!isRunning() || document.hidden) return;
      timer = setTimeout(function () {
        goTo(index + 1);
        startTimer();
      }, DURATION);
    }

    function restartBar() {
      if (!barEl) return;
      barEl.style.animation = "none";
      void barEl.offsetWidth; /* reflow so the animation restarts */
      barEl.style.animation = "";
      barEl.style.animationDuration = DURATION + "ms";
      barEl.style.animationPlayState = isRunning() ? "running" : "paused";
    }

    function paintSlide() {
      slideNodes.forEach(function (n, i) { n.classList.toggle("is-active", i === index); });
      dotNodes.forEach(function (n, i) { n.classList.toggle("is-active", i === index); });
      var item = PHOTO_SLIDESHOW[index];
      if (titleEl) titleEl.textContent = item.title;
      if (capEl) capEl.textContent = item.caption || "";
      if (countElSlides) countElSlides.textContent = (index + 1) + " / " + PHOTO_SLIDESHOW.length;
      restartBar();
    }

    function goTo(next) {
      index = (next + PHOTO_SLIDESHOW.length) % PHOTO_SLIDESHOW.length;
      paintSlide();
    }

    function advance(dir) {
      goTo(index + dir);
      startTimer();
    }

    $("#slidesPrev").addEventListener("click", function () { advance(-1); });
    $("#slidesNext").addEventListener("click", function () { advance(1); });

    if (pauseBtn) {
      pauseBtn.addEventListener("click", function () {
        userPaused = !userPaused;
        pauseBtn.textContent = userPaused ? "Play" : "Pause";
        pauseBtn.setAttribute("aria-pressed", String(userPaused));
        if (userPaused) {
          stopTimer();
          if (barEl) barEl.style.animationPlayState = "paused";
        } else {
          restartBar();
          startTimer();
        }
      });
    }

    dotsEl.addEventListener("click", function (e) {
      var dot = e.target.closest("[data-go]");
      if (!dot) return;
      goTo(Number(dot.dataset.go));
      startTimer();
    });

    stage.addEventListener("click", function (e) {
      var slide = e.target.closest(".slide");
      if (!slide) return;
      var item = PHOTO_SLIDESHOW[Number(slide.dataset.index)];
      RN.lightbox.open([{
        image: item.image,
        title: item.title,
        meta: item.caption || ""
      }], 0, slide);
    });

    slidesEl.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); advance(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); advance(-1); }
    });

    /* Hover only holds the timer — it never overrides the pause button */
    slidesEl.addEventListener("pointerenter", function (e) {
      if (e.pointerType === "touch" || userPaused) return;
      hovering = true;
      stopTimer();
      if (barEl) barEl.style.animationPlayState = "paused";
    });
    slidesEl.addEventListener("pointerleave", function () {
      if (!hovering) return;
      hovering = false;
      if (!userPaused) { restartBar(); startTimer(); }
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopTimer();
      else startTimer();
    });

    paintSlide();
    startTimer();
  }


  /* ---------------- "Keep looking" — other areas ---------------- */
  var nextEl = $("#nextAreas");
  if (nextEl) {
    var others = AREA_ORDER.filter(function (k) { return k !== areaKey; });
    nextEl.innerHTML = others.map(function (key) {
      var a = AREAS[key];
      var count = PROJECTS.filter(function (p) { return p.category === key; }).length;
      return '<a class="next-card" href="' + a.path + '">' +
        '<span class="next-media"><img src="' + esc(a.cover) + '" alt="" loading="lazy"></span>' +
        '<span class="next-text"><b>' + esc(a.label) + "</b><small>" + count + " projects</small></span>" +
        '<span class="next-arrow" aria-hidden="true">↗</span>' +
      "</a>";
    }).join("");
    $$(".next-card", nextEl).forEach(function (card) {
      card.style.setProperty("--d", "0s");
      card.classList.add("reveal");
      RN.observe(card);
    });
  }

  /* reveal the static blocks (headings, hero) */
  RN.revealAll();
})();
