# SWE Interview Cheatsheets

**Live:** https://swe-cheatsheets.pages.dev/

A quick-reference web app for **senior software-engineering interview** prep — condensed,
searchable cheatsheets for **Coding**, **System Design**, and **Behavioral** rounds, with
syntax-highlighted code templates and a one-line **🗣 Say it** mnemonic above every snippet so you
can recall the template from a sentence. Built from a set of cheatsheet PDFs.

## What's inside

- **Coding** — pattern recognition, canonical templates, complexity reasoning, edge cases.
- **System Design** — frameworks, estimation, architecture patterns, trade-offs, question walkthroughs.
- **Behavioral** — STAR (senior edition), story bank, company frameworks, senior signals.

Plus: a visual **pattern map** at the top of Coding (signal → pattern family → template), a sticky
table of contents grouped by topic with scroll-spy, a filter box, a self-contained Python/SQL
syntax highlighter (no dependencies), and a dark / light theme toggle.

Plus a **🎲 NeetCode 150** recall page (`neetcode.html`): every refresh shows a random problem (no
repeats until you've seen them all) with a one-line **🧠 Remember** hint and a blurred Python solution
you reveal with Space. Filter by category; press N for the next one.

It's a **fully static site** — no build step, no backend.

## Run locally

The syntax highlighter is JavaScript, which browsers block on `file://`, so serve it over HTTP:

```bash
cd site && python3 -m http.server 8000
```

Open http://localhost:8000 . After editing any file, hard-refresh (Cmd+Shift+R) — the dev server
caches JS/CSS.

## Deploy (Cloudflare Pages)

Static direct upload of the `site/` directory. With Wrangler:

```bash
npx wrangler pages deploy site --project-name swe-cheatsheets
```

Or drag the `site/` folder into the Cloudflare dashboard → **Workers & Pages** → **Create** →
**Pages** → **Upload assets**. No build command or framework preset needed.

## Edit content

All content lives in one file: `site/data/reference.js` — a map of
`{ deck: [ { id, title, html } ] }` where `deck` is `coding`, `system-design`, or `behavioral`.
`html` is plain HTML; wrap code in `<pre>…</pre>` and put a
`<div class="mnemonic">🗣 <b>Say it:</b> …</div>` above it. Edit and hard-refresh — no rebuild.

## Structure

```
site/
  index.html          shell + theme toggle
  css/styles.css      theme-aware styling (dark/light)
  js/app.js           renders the reference (TOC, search, scroll-spy)
  js/highlight.js     self-contained Python/SQL syntax highlighter
  data/reference.js   all cheatsheet content
  neetcode.html       NeetCode 150 random-recall page
  js/neetcode.js      recall page logic (shuffle bag, reveal)
  js/theme.js         shared theme picker
  data/neetcode.js    150 problems: one-liner, complexity, Python solution
extract/              plain-text extracted from the source PDFs
*.pdf                 original cheatsheet sources
```
