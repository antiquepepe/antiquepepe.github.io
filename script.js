/* AntiquePepe — small progressive enhancements. No tracking, no third parties. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  /* ---- Header border on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile navigation ---- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target)) setOpen(false);
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 720) setOpen(false); });
  }

  /* ---- Store buttons: active only when data-href holds a real URL ---- */
  document.querySelectorAll("[data-store-link]").forEach(function (el) {
    var url = (el.getAttribute("data-href") || "").trim();
    if (/^https:\/\//.test(url)) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("title", "Coming soon");
    }
  });

  /* ---- Support e-mail: one <meta name="support-email"> drives all mailto links ---- */
  var emailMeta = document.querySelector('meta[name="support-email"]');
  var email = emailMeta ? (emailMeta.getAttribute("content") || "").trim() : "";
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (emailOk) {
    document.querySelectorAll("[data-support-email]").forEach(function (el) { el.textContent = email; });
  }
  document.querySelectorAll("[data-mailto]").forEach(function (el) {
    if (emailOk) {
      var subject = el.getAttribute("data-subject") || "Support request";
      el.setAttribute("href", "mailto:" + email + "?subject=" + encodeURIComponent(subject));
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("title", "E-mail address coming soon");
      el.classList.add("is-disabled");
    }
  });

  /* ---- Images: show a clean placeholder until the real file exists ---- */
  document.querySelectorAll(".media-frame").forEach(function (frame) {
    var img = frame.querySelector("img");
    if (!img || !img.getAttribute("src")) { frame.classList.add("is-missing"); return; }
    var done = function () { frame.classList.remove("is-loading"); };
    var fail = function () { frame.classList.remove("is-loading"); frame.classList.add("is-missing"); };
    if (img.complete) {
      img.naturalWidth > 0 ? done() : fail();
    } else {
      frame.classList.add("is-loading");
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", fail, { once: true });
    }
  });

  /* ---- Language switch (privacy page) ---- */
  var blocks = document.querySelectorAll(".lang-block");
  if (blocks.length) {
    var links = document.querySelectorAll(".lang-switch a");
    var show = function (lang) {
      blocks.forEach(function (b) { b.hidden = b.getAttribute("lang") !== lang; });
      links.forEach(function (a) {
        var active = a.getAttribute("data-lang") === lang;
        a.classList.toggle("is-active", active);
        a.setAttribute("aria-current", active ? "true" : "false");
      });
    };
    var fromHash = function () {
      var h = (location.hash || "").replace("#", "").toLowerCase();
      if (h === "de" || h.indexOf("de-") === 0) return "de";
      if (h === "en" || h.indexOf("en-") === 0) return "en";
      return null;
    };
    var initial = fromHash() || ((navigator.language || "").toLowerCase().indexOf("de") === 0 ? "de" : "en");
    var scrollToHash = function () {
      var id = (location.hash || "").slice(1);
      var target = id && id !== "de" && id !== "en" ? document.getElementById(id) : null;
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    };
    show(initial);
    scrollToHash();
    window.addEventListener("hashchange", function () { var l = fromHash(); if (l) { show(l); scrollToHash(); } });
  }

  /* ---- Subtle reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Current year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
