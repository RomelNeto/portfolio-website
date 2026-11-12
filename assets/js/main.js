/* ==========================================================================
   Home page — selected work, area cards, showreel, contact form
   ========================================================================== */
(function () {
  "use strict";

  var RN = window.RN;
  if (!RN) return;

  var $ = RN.$;
  var $$ = RN.$$;
  var esc = RN.esc;

  /* ---------------- Selected work ---------------- */
  var grid = $("#workGrid");
  var featured = PROJECTS.filter(function (p) { return p.featured; });
  /* home order: set with featuredRank in projects.js (video first, then photo) */
  featured.sort(function (a, b) { return (a.featuredRank || 99) - (b.featuredRank || 99); });
  if (grid && featured.length) {
    RN.renderGrid(grid, featured, { showCategory: true });
    RN.bindGrid(grid, function () { return featured; });
  }

  /* ---------------- Quick area selector (above Selected work) ---------------- */
  var strip = $("#areaStrip");
  if (strip) {
    strip.innerHTML = AREA_ORDER.map(function (key) {
      var area = AREAS[key];
      return (
        '<a class="area-pill" href="' + area.path + '">' +
          '<span class="area-pill-media"><img src="' + esc(area.cover) + '" alt="' + esc(area.label) + '" loading="lazy" decoding="async"></span>' +
          '<span class="area-pill-name">' + esc(area.label) +
            '<span class="area-pill-arrow" aria-hidden="true">↗</span>' +
          "</span>" +
        "</a>"
      );
    }).join("");

    RN.$$("img", strip).forEach(function (img) {
      img.addEventListener("error", function () {
        img.closest(".area-pill-media").classList.add("is-empty");
        img.remove();
      }, { once: true });
    });
  }

  /* ---------------- Area cards ---------------- */
  var areaCards = $("#areaCards");
  if (areaCards) {
    areaCards.innerHTML = AREA_ORDER.map(function (key) {
      var area = AREAS[key];
      var items = PROJECTS.filter(function (p) { return p.category === key; });
      return (
        '<a class="area-card" href="' + area.path + '">' +
          '<span class="area-media"><img src="' + esc(area.cover) + '" alt="" loading="lazy"></span>' +
          '<span class="area-body">' +
            '<span class="area-num">' + esc(area.kicker) + "</span>" +
            '<span class="area-name">' + esc(area.label) + "</span>" +
            '<span class="area-blurb">' + esc(area.blurb) + "</span>" +
            '<span class="area-foot"><span>' + items.length + " projects</span><span>Explore ↗</span></span>" +
          "</span>" +
        "</a>"
      );
    }).join("");

    $$(".area-card", areaCards).forEach(function (card, i) {
      card.style.setProperty("--d", (i % 2) * 0.06 + "s");
      card.classList.add("reveal");
      RN.observe(card);
    });
  }

  /* ---------------- Showreel ---------------- */
  function openReel(trigger) {
    RN.lightbox.open([{
      image: REEL.poster,
      poster: REEL.poster,
      video: REEL.video,
      youtube: REEL.youtube,
      vimeo: REEL.vimeo,
      title: REEL.title,
      meta: "Direction · Camera · Edit · Color",
      note: REEL.video ? "" : "The showreel is still being cut — this is the poster frame."
    }], 0, trigger);
  }

  var reelCard = $("#reelCard");
  if (reelCard) reelCard.addEventListener("click", function () { openReel(reelCard); });

  var watchReel = $("#watchReel");
  if (watchReel) watchReel.addEventListener("click", function () { openReel(watchReel); });

  /* ---------------- Hero video (only if the file exists) ---------------- */
  var heroVideo = $("#heroVideo");
  if (heroVideo) {
    var wantsVideo = !RN.reduceMotion && window.matchMedia("(min-width: 860px)").matches &&
      !(navigator.connection && navigator.connection.saveData);

    if (wantsVideo) {
      var startHeroVideo = function () {
        heroVideo.src = heroVideo.dataset.src;
        heroVideo.addEventListener("playing", function () { heroVideo.classList.add("is-playing"); });
        heroVideo.addEventListener("error", function () { heroVideo.remove(); }, { once: true });
        var playing = heroVideo.play();
        if (playing && playing.then) playing.catch(function () {});
      };
      if (location.protocol === "file:") {
        startHeroVideo();
      } else {
        fetch(heroVideo.dataset.src, { method: "HEAD" })
          .then(function (res) { if (res.ok) startHeroVideo(); })
          .catch(startHeroVideo);
      }
    }
  }

  /* ---------------- Contact form ---------------- */
  var form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#cfName").value.trim();
      var email = $("#cfEmail").value.trim();
      var type = $("#cfType").value;
      var msg = $("#cfMsg").value.trim();

      if (!name || !email || !msg) {
        RN.toast("Please fill in your name, email and project details.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        RN.toast("That email address doesn't look right.");
        return;
      }

      var subject = type + " — " + name;
      var body = "Name: " + name + "\nEmail: " + email + "\nProject: " + type + "\n\n" + msg;
      window.location.href = "mailto:hello@romelneto.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg);
      RN.toast("Opening your email app…");
    });
  }

  /* ---------------- Misc ---------------- */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  RN.revealAll();
})();
