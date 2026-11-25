/* AntiquePepe — small progressive enhancements. No tracking, no third parties. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  /* ======================================================================
     Translations (EN + DE)
     - data-i18n="key"        → textContent
     - data-i18n-html="key"   → innerHTML (own static strings only)
     - data-i18n-attr="attr:key;attr2:key2" → attributes
     - .lang-block[lang]      → whole blocks shown only in their language
     ====================================================================== */
  var I18N = {
    en: {
      "skip": "Skip to content",
      "nav.games": "Games",
      "nav.about": "About",
      "nav.support": "Support",
      "nav.label": "Main",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "lang.label": "Language",
      "footer.privacy": "Privacy Policy",
      "footer.imprint": "Legal Notice",
      "footer.support": "Support",
      "footer.rights": "All rights reserved.",
      "soon": "Coming soon",
      "home": "AntiquePepe – Home",

      "index.title": "AntiquePepe – Independent Game Development",
      "index.desc": "AntiquePepe is an independent game developer creating mobile and PC games. Home of Gomoku: Ascension.",
      "hero.logo": "AntiquePepe logo",
      "hero.sub": "Independent Game Development",
      "hero.tagline": "Crafting unique gaming experiences.",
      "hero.explore": "Explore games",
      "hero.about": "About",
      "games.eyebrow": "Games",
      "games.title": "Our games",
      "game.soon": "Coming Soon",
      "gomoku.tagline": "A timeless strategy game, reimagined.",
      "store.apple.label": "Download on the",
      "store.apple.soon": "Coming soon to the",
      "store.google.label": "Get it on",
      "store.google.soon": "Coming soon to",
      "game.inDev": "In Development",
      "anomaly.tagline": "More details coming soon.",
      "store.steam.label": "Available on",
      "store.steam.soon": "Coming soon to",
      "media.coverAltAnomaly": "Project Anomaly cover art",
      "media.cover": "Cover art coming soon",
      "media.coverAlt": "Gomoku: Ascension cover art",
      "media.shot": "Soon",
      "media.shots": "Screenshots",
      "games.more": "More games in development.",
      "about.eyebrow": "About",
      "about.title": "Independent by design.",
      "about.p1": "AntiquePepe is an independent game development brand focused on building high-quality games for mobile and PC.",
      "about.p2": "The goal is simple: games that are easy to pick up, rewarding to master and carefully crafted down to the details. From refined takes on classic strategy games to larger PC projects, every title is developed with attention to clean design, fair play and a polished experience.",
      "pillar.mobile.t": "Mobile",
      "pillar.mobile.d": "Focused games for iOS and Android, designed for short sessions and long-term depth.",
      "pillar.pc.t": "PC",
      "pillar.pc.d": "Larger, more ambitious projects built for desktop players.",
      "pillar.craft.t": "Craft",
      "pillar.craft.d": "Minimal interfaces, thoughtful mechanics and attention to detail.",
      "cta.title": "Need help?",
      "cta.text": "Questions, bug reports or feedback — we're happy to hear from you.",
      "cta.btn": "Go to Support",

      "support.title": "Support – AntiquePepe",
      "support.desc": "Support for AntiquePepe games: contact, technical problems, bug reports and feedback.",
      "support.eyebrow": "Support",
      "support.h1": "How can we help?",
      "support.lead": "Questions about a game, a technical problem or an idea to share — get in touch and we'll get back to you as soon as possible.",
      "support.contact": "Contact",
      "support.fastest": "The fastest way to reach us is by e-mail:",
      "support.write": "Write an e-mail",
      "support.helpWith": "What can we help with?",
      "support.general.t": "General questions",
      "support.general.d": "Anything about AntiquePepe or our games.",
      "support.general.a": "Send a question",
      "support.tech.t": "Technical problems",
      "support.tech.d": "Crashes, loading issues, performance or display problems.",
      "support.tech.a": "Report a problem",
      "support.bug.t": "Bug reports",
      "support.bug.d": "Something doesn't work as expected? Tell us what happened.",
      "support.bug.a": "Report a bug",
      "support.fb.t": "Feedback & ideas",
      "support.fb.d": "Suggestions, wishes and honest opinions are always welcome.",
      "support.fb.a": "Send feedback",
      "support.report.h": "Writing a helpful bug report",
      "support.report.p": "The more details you include, the faster we can find and fix the issue:",
      "support.report.1": "<strong>Game</strong> – e.g. Gomoku: Ascension, plus the app version if you know it.",
      "support.report.2": "<strong>Device and system</strong> – e.g. iPhone 15, iOS 18 or Pixel 8, Android 15.",
      "support.report.3": "<strong>What happened</strong> – and what you expected to happen instead.",
      "support.report.4": "<strong>Steps to reproduce</strong> – what you did right before the problem occurred.",
      "support.report.5": "<strong>Screenshots or screen recordings</strong> – if possible.",
      "support.report.note": "Please don't send passwords or other sensitive personal data. Information you send by e-mail is used only to handle your request — see our <a href=\"privacy.html\">Privacy Policy</a>.",
      "support.games.h": "Game-specific support",
      "support.gomoku.meta": "Platforms: iOS, Android · Status: Coming Soon",
      "support.faq1.q": "When will the game be available?",
      "support.faq1.a": "Gomoku: Ascension is currently in development. Store links will appear on the <a href=\"./#gomoku-ascension\">games page</a> as soon as it is released.",
      "support.faq2.q": "I found a bug or have a problem with the game.",
      "support.faq2.a": "Please <a data-mailto data-subject=\"Gomoku: Ascension – Bug report\">send us a bug report</a> with the details listed above.",
      "support.faq3.q": "Where can I read how my data is handled?",
      "support.faq3.a": "See the <a href=\"privacy.html#en-gomoku\">Gomoku: Ascension section of our Privacy Policy</a>.",
      "support.legal": "Legal information: <a href=\"imprint.html\">Legal Notice</a> · <a href=\"privacy.html\">Privacy Policy</a>",
      "mail.general": "General question",
      "mail.support": "Support request",
      "mail.tech": "Technical problem",
      "mail.bug": "Bug report",
      "mail.feedback": "Feedback",
      "mail.soon": "E-mail address coming soon",

      "privacy.title": "Privacy Policy – AntiquePepe",
      "imprint.title": "Legal Notice – AntiquePepe",
      "imprint.eyebrow": "Legal",
      "imprint.h1": "Legal Notice"
    },
    de: {
      "skip": "Zum Inhalt springen",
      "nav.games": "Spiele",
      "nav.about": "Über uns",
      "nav.support": "Support",
      "nav.label": "Hauptmenü",
      "menu.open": "Menü öffnen",
      "menu.close": "Menü schließen",
      "lang.label": "Sprache",
      "footer.privacy": "Datenschutz",
      "footer.imprint": "Impressum",
      "footer.support": "Support",
      "footer.rights": "Alle Rechte vorbehalten.",
      "soon": "Demnächst",
      "home": "AntiquePepe – Startseite",

      "index.title": "AntiquePepe – Unabhängige Spieleentwicklung",
      "index.desc": "AntiquePepe ist ein unabhängiger Spieleentwickler für Mobile- und PC-Spiele. Die Heimat von Gomoku: Ascension.",
      "hero.logo": "AntiquePepe-Logo",
      "hero.sub": "Unabhängige Spieleentwicklung",
      "hero.tagline": "Wir erschaffen einzigartige Spielerlebnisse.",
      "hero.explore": "Spiele entdecken",
      "hero.about": "Über uns",
      "games.eyebrow": "Spiele",
      "games.title": "Unsere Spiele",
      "game.soon": "Demnächst",
      "gomoku.tagline": "Ein zeitloses Strategiespiel, neu interpretiert.",
      "store.apple.label": "Laden im",
      "store.apple.soon": "Demnächst im",
      "store.google.label": "Jetzt bei",
      "store.google.soon": "Demnächst bei",
      "game.inDev": "In Entwicklung",
      "anomaly.tagline": "Weitere Details folgen in Kürze.",
      "store.steam.label": "Erhältlich auf",
      "store.steam.soon": "Demnächst auf",
      "media.coverAltAnomaly": "Project Anomaly Coverbild",
      "media.cover": "Cover folgt in Kürze",
      "media.coverAlt": "Gomoku: Ascension Coverbild",
      "media.shot": "Bald",
      "media.shots": "Screenshots",
      "games.more": "Weitere Spiele in Entwicklung.",
      "about.eyebrow": "Über uns",
      "about.title": "Unabhängig aus Überzeugung.",
      "about.p1": "AntiquePepe ist eine unabhängige Game-Development-Marke mit Fokus auf hochwertige Spiele für Mobile und PC.",
      "about.p2": "Das Ziel ist einfach: Spiele, die leicht zugänglich sind, sich lohnend meistern lassen und bis ins Detail sorgfältig gestaltet sind. Von neu gedachten Strategie-Klassikern bis zu größeren PC-Projekten – jeder Titel entsteht mit Blick auf klares Design, faires Gameplay und ein ausgereiftes Spielerlebnis.",
      "pillar.mobile.t": "Mobile",
      "pillar.mobile.d": "Fokussierte Spiele für iOS und Android – gemacht für kurze Runden und lange Motivation.",
      "pillar.pc.t": "PC",
      "pillar.pc.d": "Größere, ambitioniertere Projekte für Spielerinnen und Spieler am Desktop.",
      "pillar.craft.t": "Handwerk",
      "pillar.craft.d": "Minimalistische Oberflächen, durchdachte Mechaniken und Liebe zum Detail.",
      "cta.title": "Brauchst du Hilfe?",
      "cta.text": "Fragen, Fehlerberichte oder Feedback – wir freuen uns, von dir zu hören.",
      "cta.btn": "Zum Support",

      "support.title": "Support – AntiquePepe",
      "support.desc": "Support für Spiele von AntiquePepe: Kontakt, technische Probleme, Fehlerberichte und Feedback.",
      "support.eyebrow": "Support",
      "support.h1": "Wie können wir helfen?",
      "support.lead": "Fragen zu einem Spiel, ein technisches Problem oder eine Idee? Schreib uns – wir melden uns so schnell wie möglich.",
      "support.contact": "Kontakt",
      "support.fastest": "Am schnellsten erreichst du uns per E-Mail:",
      "support.write": "E-Mail schreiben",
      "support.helpWith": "Wobei können wir helfen?",
      "support.general.t": "Allgemeine Fragen",
      "support.general.d": "Alles rund um AntiquePepe und unsere Spiele.",
      "support.general.a": "Frage senden",
      "support.tech.t": "Technische Probleme",
      "support.tech.d": "Abstürze, Ladeprobleme, Performance- oder Darstellungsfehler.",
      "support.tech.a": "Problem melden",
      "support.bug.t": "Fehlerberichte",
      "support.bug.d": "Etwas funktioniert nicht wie erwartet? Erzähl uns, was passiert ist.",
      "support.bug.a": "Fehler melden",
      "support.fb.t": "Feedback & Ideen",
      "support.fb.d": "Vorschläge, Wünsche und ehrliche Meinungen sind immer willkommen.",
      "support.fb.a": "Feedback senden",
      "support.report.h": "So hilft dein Fehlerbericht am meisten",
      "support.report.p": "Je mehr Details du angibst, desto schneller können wir das Problem finden und beheben:",
      "support.report.1": "<strong>Spiel</strong> – z. B. Gomoku: Ascension, wenn möglich mit App-Version.",
      "support.report.2": "<strong>Gerät und System</strong> – z. B. iPhone 15, iOS 18 oder Pixel 8, Android 15.",
      "support.report.3": "<strong>Was ist passiert</strong> – und was hättest du stattdessen erwartet?",
      "support.report.4": "<strong>Schritte zum Nachstellen</strong> – was du direkt vor dem Problem gemacht hast.",
      "support.report.5": "<strong>Screenshots oder Bildschirmaufnahmen</strong> – falls möglich.",
      "support.report.note": "Bitte sende keine Passwörter oder andere sensible persönliche Daten. Angaben, die du uns per E-Mail schickst, verwenden wir nur zur Bearbeitung deiner Anfrage – siehe unsere <a href=\"privacy.html#de\">Datenschutzerklärung</a>.",
      "support.games.h": "Support zu einzelnen Spielen",
      "support.gomoku.meta": "Plattformen: iOS, Android · Status: Demnächst",
      "support.faq1.q": "Wann erscheint das Spiel?",
      "support.faq1.a": "Gomoku: Ascension befindet sich derzeit in Entwicklung. Die Store-Links erscheinen auf der <a href=\"./#gomoku-ascension\">Spieleseite</a>, sobald das Spiel veröffentlicht ist.",
      "support.faq2.q": "Ich habe einen Fehler gefunden oder ein Problem mit dem Spiel.",
      "support.faq2.a": "Bitte <a data-mailto data-subject=\"Gomoku: Ascension – Fehlerbericht\">schick uns einen Fehlerbericht</a> mit den oben genannten Angaben.",
      "support.faq3.q": "Wo kann ich nachlesen, wie meine Daten verarbeitet werden?",
      "support.faq3.a": "Siehe den <a href=\"privacy.html#de-gomoku\">Abschnitt zu Gomoku: Ascension in unserer Datenschutzerklärung</a>.",
      "support.legal": "Rechtliches: <a href=\"imprint.html\">Impressum</a> · <a href=\"privacy.html#de\">Datenschutzerklärung</a>",
      "mail.general": "Allgemeine Frage",
      "mail.support": "Support-Anfrage",
      "mail.tech": "Technisches Problem",
      "mail.bug": "Fehlerbericht",
      "mail.feedback": "Feedback",
      "mail.soon": "E-Mail-Adresse folgt in Kürze",

      "privacy.title": "Datenschutzerklärung – AntiquePepe",
      "imprint.title": "Impressum – AntiquePepe",
      "imprint.eyebrow": "Rechtliches",
      "imprint.h1": "Impressum"
    }
  };

  var STORAGE_KEY = "antiquepepe-lang";
  var lang = "en";
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || ""; }

  function readStored() { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } }
  function writeStored(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* ignore */ } }
  function langFromHash() {
    var h = (location.hash || "").replace("#", "").toLowerCase();
    if (h === "de" || h.indexOf("de-") === 0) return "de";
    if (h === "en" || h.indexOf("en-") === 0) return "en";
    return null;
  }

  /* ---- Support e-mail: one <meta name="support-email"> drives all mailto links ---- */
  var emailMeta = document.querySelector('meta[name="support-email"]');
  var email = emailMeta ? (emailMeta.getAttribute("content") || "").trim() : "";
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  function wireMailto() {
    if (emailOk) {
      document.querySelectorAll("[data-support-email]").forEach(function (el) { el.textContent = email; });
    }
    document.querySelectorAll("[data-mailto]").forEach(function (el) {
      var key = el.getAttribute("data-subject-key");
      var subject = key ? t(key) : (el.getAttribute("data-subject") || t("mail.support"));
      if (emailOk) {
        el.setAttribute("href", "mailto:" + email + "?subject=" + encodeURIComponent(subject));
        el.removeAttribute("aria-disabled");
        el.removeAttribute("title");
        el.classList.remove("is-disabled");
      } else {
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("title", t("mail.soon"));
        el.classList.add("is-disabled");
      }
    });
  }

  /* ---- Store / social links: active only when data-href holds a real URL ---- */
  function wireExternalLinks() {
    document.querySelectorAll("[data-store-link]").forEach(function (el) {
      var url = (el.getAttribute("data-href") || "").trim();
      if (/^https:\/\//.test(url)) {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
        el.classList.remove("is-disabled");
        el.removeAttribute("aria-disabled");
        el.removeAttribute("title");
      } else {
        el.removeAttribute("href");
        el.classList.add("is-disabled");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("title", t("soon"));
      }
    });
  }

  function applyLang(next, opts) {
    lang = next === "de" ? "de" : "en";
    root.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n")); if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-html")); if (v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"); if (p.length === 2) { var v = t(p[1].trim()); if (v) el.setAttribute(p[0].trim(), v); }
      });
    });
    var titleKey = root.getAttribute("data-title-key");
    if (titleKey && t(titleKey)) document.title = t(titleKey);
    var descKey = root.getAttribute("data-desc-key");
    var desc = document.querySelector('meta[name="description"]');
    if (descKey && desc && t(descKey)) desc.setAttribute("content", t(descKey));

    /* Whole-language blocks (privacy policy, imprint) */
    document.querySelectorAll(".lang-block").forEach(function (b) { b.hidden = b.getAttribute("lang") !== lang; });
    document.querySelectorAll(".lang-switch a").forEach(function (a) {
      var active = a.getAttribute("data-lang") === lang;
      a.classList.toggle("is-active", active);
      a.setAttribute("aria-current", active ? "true" : "false");
    });

    /* Flag buttons */
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      var active = b.getAttribute("data-set-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });

    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
    }

    wireMailto();
    wireExternalLinks();
    if (opts && opts.save) writeStored(lang);
  }

  var navLang = (navigator.language || "").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  applyLang(langFromHash() || readStored() || navLang);

  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = b.getAttribute("data-set-lang");
      /* Drop a language hash (e.g. #de) so it doesn't override the choice */
      if (langFromHash() && history.replaceState) history.replaceState(null, "", location.pathname + location.search);
      applyLang(next, { save: true });
    });
  });

  /* Language hashes on the privacy page (#de, #en, #de-gomoku …) */
  function scrollToHash() {
    var id = (location.hash || "").slice(1);
    var target = id && id !== "de" && id !== "en" ? document.getElementById(id) : null;
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
  }
  if (langFromHash()) scrollToHash();
  window.addEventListener("hashchange", function () {
    var l = langFromHash();
    if (l) { applyLang(l, { save: true }); scrollToHash(); }
  });

  /* ---- Header border on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile navigation ---- */
  var nav = document.querySelector(".nav");
  var navToggle = document.querySelector(".nav-toggle");
  if (nav && navToggle) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
    };
    navToggle.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target)) setOpen(false);
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 720) setOpen(false); });
  }

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
