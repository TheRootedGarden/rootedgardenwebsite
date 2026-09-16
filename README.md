# The Rooted Garden — Website

A simple, free-to-host website for The Rooted Garden. No build tools,
no frameworks, no server required — just HTML, CSS, and a little
JavaScript, ready to publish on GitHub Pages or Cloudflare Pages.

## What's in this folder

```
the-rooted-garden/
├── index.html          The whole site (one page, with section anchors)
├── css/
│   └── style.css       All colors, fonts, and layout
├── js/
│   └── main.js         Menu behavior + your Google Form link
├── images/
│   ├── favicon.png              Browser tab icon (from your logo)
│   ├── logo-mark.png             Black version of your sprout mark — used in the nav
│   ├── logo-mark-white.png       White version — used in the footer
│   ├── placeholder-headshot.svg  Used until you add Kavi's real photo
│   ├── yalkin.jpg                Yalkin's photo (already in place)
│   ├── hero-microgreens.jpg      A spare wide pea-shoot photo, not currently used anywhere — see note below
│   └── varieties/
│       ├── broccoli.jpg
│       ├── pea-shoots.jpg
│       └── radish.jpg
└── README.md            You're reading it
```

## Quick preview (before publishing)

Just double-click `index.html` and it opens in your browser. That's
the whole site — no installation needed.

## Add your content

Everywhere something still needs your input, look for a dashed box,
dashed underline, or bracketed text like `[Add Kavi's bio here...]`.
Every one of these has an `EDIT ME` or `ADD` comment right above it
in the code explaining exactly what to do. Here's what's left:

### 1. Kavi's photo, and both founders' bios
Open `index.html` and search for `story-title` (or scroll to the
"Grown by real people" section). Yalkin's photo is already in.
For Kavi:
1. Save a square photo (JPG/PNG/WebP, 800×800px or larger)
2. Put it in the `images` folder as `images/kavi.jpg`
3. Change the `src` in his `<img>` tag to point to it, and update the `alt` text
4. Delete `ghost-block` from the surrounding `<figure class="founder-photo ghost-block">` tag, and delete the `<figcaption>` block below it

Then replace both bracketed `[Add ...'s bio here...]` paragraphs
with 2–3 real sentences each. There's also a short "our story"
paragraph above the founder cards — replace that with your real
origin story (2–4 sentences).

### 2. Your Google Form (B2B / wholesale inquiries)
This lives in `js/main.js`, not `index.html`. Open that file — the
first thing in it is:

```js
const GOOGLE_FORMS = {
  b2b: "",
};
```

To connect it:
1. Create the form at [forms.google.com](https://forms.google.com)
2. Click **Send** (top right of the form editor)
3. Click the **`<>`** embed icon
4. Copy the URL inside `src="..."` from the code shown — it looks
   like `https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxx/viewform?embedded=true`
5. Paste it between the quotes after `b2b:`

Leave it as `""` to keep showing the "add your form" placeholder box
on the live site. As soon as a URL is added, the real form appears
automatically — embedded on the page, plus an "Open form in a new
tab" button as a backup. (Want a second form later? Add another
line like `contact: "",` in that same object, and give a new HTML
block a matching `data-google-form="contact"` attribute.)

### 3. Contact details & social links
Search for `contact-title`. Your email is already filled in
(`therootedgardenpgh@gmail.com`) in two spots — the Wholesale
section and the Contact section. Still to do:
- `[(555) 555-5555]` — add a real phone number, or delete that whole block if you'd rather not list one
- The `href="#"` on the Instagram/Facebook icons — replace with your real profile URLs

The same social icons appear again in the footer near the bottom of
the file — update those too (or delete the whole `.footer-social`
block if you'd rather not repeat them there).

### 4. Microgreen varieties
Search for `variety-grid`. Broccoli, Pea Shoots, and Radish already
use real photos of your trays. Salad Mix uses a simple illustration
for now since we didn't have a dedicated photo for it — search for
"Salad Mix" in the file for the exact swap-in instructions once you
have one. To add or remove a variety entirely, copy or delete a
whole `<article class="variety-card">...</article>` block.

## About the logo

Your logo (`therootedagrdenpfp.png` you sent over) had its sprout
icon lifted out and cleaned up into two transparent PNGs —
`logo-mark.png` (black, for the light-colored nav) and
`logo-mark-white.png` (white, for the dark red footer) — plus a
round `favicon.png` for the browser tab. If you ever update your
logo, regenerate these three the same way (crop tight to the icon,
make the background transparent) so they stay crisp at small sizes.

## Add images or links anywhere else

You're not limited to the spots above — the whole page is normal
HTML, so you can add a photo or a link anywhere:

- **An image:** put the file in `images/`, then add
  `<img src="images/your-file.jpg" alt="Describe the image">`
  wherever you'd like it to appear.
- **A link:** wrap anything in
  `<a href="https://example.com">your text</a>`.

## Publish for free

This site is fully static (no server, no build step), so both
options below work with zero configuration.

### Option A: GitHub Pages
1. Create a new repository on [github.com](https://github.com) (public or private both work)
2. Upload every file in this folder to the repository, keeping the same folder structure (`css/`, `js/`, `images/`, `index.html`, `README.md`)
3. Go to the repo's **Settings → Pages**
4. Under "Build and deployment," set **Source** to "Deploy from a branch," choose the `main` branch and the `/ (root)` folder, then **Save**
5. GitHub will give you a URL like `https://yourusername.github.io/your-repo-name` within a minute or two

### Option B: Cloudflare Pages
1. Sign up / log in at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Workers & Pages → Create → Pages**
3. Either connect your GitHub repo (pick it, leave the build command blank, set the output directory to `/`) or use **"Upload assets"** to drag-and-drop this whole folder directly — no repo needed
4. Click **Deploy**. Cloudflare will give you a URL like `your-project.pages.dev`

Either option gives you a free `https://` address. Both let you
attach a custom domain later (e.g. `therootedgardenpgh.com`) for
free if you buy one.

## Customizing colors & fonts

Open `css/style.css` — the very top of the file has a `:root` block
with every color and font used on the site:

```css
--paper: #ffffff;      /* page background */
--red: #c1392b;        /* primary brand red */
--red-deep: #7a2119;   /* dark red — footer, hover states */
--ink: #1a1815;         /* near-black text */
```

Change a value there and it updates everywhere on the site
automatically — no need to hunt through the rest of the file.

## Troubleshooting

- **Images not showing:** double-check the file name and folder path match exactly, including capitalization (`Kavi.JPG` is not the same as `kavi.jpg` on some hosts).
- **Google Form not showing:** make sure the URL in `js/main.js` ends in `?embedded=true` and is wrapped in quotes, and that you saved the file.
- **Fonts look like a generic serif/sans-serif:** the page loads fonts from Google Fonts over the internet — check your connection, or that your host isn't blocking external font requests (GitHub Pages and Cloudflare Pages both allow this by default).
- **Menu doesn't open on mobile, or scroll animations don't play:** make sure `js/main.js` is uploaded alongside `index.html` and that the `<script src="js/main.js">` tag at the bottom of `index.html` hasn't been moved or removed.
