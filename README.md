# AntiquePepe – Developer Website

Static developer website for **AntiquePepe**, hosted for free on GitHub Pages:
**https://antiquepepe.github.io**

Plain HTML, CSS and a small vanilla JavaScript file. No build step, no backend,
no cookies, no analytics, no external fonts or scripts.

## Pages

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | Home: hero, games, about, support teaser |
| `/privacy.html` | `privacy.html` | Privacy policy, English + German (language switch) |
| `/imprint.html` | `imprint.html` | German legal notice (Impressum) |
| `/support.html` | `support.html` | Support page (link this in App Store / Google Play) |
| `/app-ads.txt` | `app-ads.txt` | AdMob authorized sellers file (not final yet) |
| any unknown URL | `404.html` | "Page not found" |

`.nojekyll` tells GitHub Pages to serve the files as they are.

## Structure

```
antiquepepe.github.io/
├── index.html  privacy.html  imprint.html  support.html  404.html
├── style.css  script.js  app-ads.txt  README.md  .nojekyll
└── assets/
    ├── logos/        logo mark, favicon, app icon sizes
    ├── images/       general images (empty)
    ├── fonts/        empty – the site uses the system font stack
    └── games/
        └── gomoku/
            ├── cover.jpg                  ← add (1600×1000 recommended)
            └── screenshots/
                ├── screenshot-1.jpg … screenshot-4.jpg   ← add (1080×1920 portrait)
```

Missing images show a neutral placeholder automatically. As soon as a file with
the exact name above exists, it is displayed – no code change needed.

## Common edits

**Store links (Gomoku: Ascension)** – in `index.html`, put the real URL into the
`data-href=""` attribute of the App Store / Google Play button. An empty value keeps
the button disabled ("Coming soon to …").

**Instagram** – in the footer of each page, put the profile URL into `data-href=""`
of the Instagram link (4 files: index, privacy, imprint, support).

**Support e-mail** – in `support.html`, fill `<meta name="support-email" content="">`.
All "Write an e-mail" links activate automatically. Also replace the e-mail placeholders
in `privacy.html` and `imprint.html`.

**Add a new game** – in `index.html`, copy the whole `<article class="game-card">` block
(marked with a comment), change texts/ids, create `assets/games/<slug>/` for its images.
Add a matching section to `privacy.html` (EN + DE) and `support.html`.

**app-ads.txt** – replace the comment lines with the exact line from AdMob,
e.g. `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0` (real ID only).

**After changing `style.css` or `script.js`** – raise the version number in the
`style.css?v=…` / `script.js?v=…` references of all HTML pages (index, privacy, imprint,
support, 404). GitHub Pages lets browsers cache these files for 10 minutes; the new
number makes sure visitors get the matching version right away.

**Placeholders** – everything still missing is marked `[MISSING …]`, `[FEHLT …]`,
`[TO VERIFY …]` or `[PRÜFEN …]` (yellow, dashed). Search the files for these markers.

## Publishing on GitHub Pages

1. Sign in on github.com and create a **public** repository named exactly
   `antiquepepe.github.io` (owner: the `antiquepepe` account).
2. In the repository: **Add file → Upload files**. Drag the *contents* of this folder
   (all files and the `assets` folder, including `.nojekyll`) into the browser window.
   `index.html` must end up at the top level of the repository, not inside a subfolder.
3. Click **Commit changes**.
4. **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`, **Save**.
5. After 1–2 minutes the site is live at https://antiquepepe.github.io.
6. Check https://antiquepepe.github.io/privacy.html, `/support.html`, `/imprint.html`
   and `/app-ads.txt`.

Hidden files like `.nojekyll` can be hidden in Windows Explorer – enable
*View → Show → Hidden items* before dragging, or create the file on GitHub with
**Add file → Create new file** (name `.nojekyll`, empty content).

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static file
server. Paths are relative, so it works without a server too (the 404 page needs
GitHub Pages to be tested properly).
