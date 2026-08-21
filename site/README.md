# Interview Cheatsheets

A local, no-build reference site for coding / system-design / behavioral interviews, built from
the cheatsheet PDFs. Clean, searchable, syntax-highlighted, with a plain-English mnemonic above
every code snippet.

## Run it

Plain HTML/CSS/JS. Serve it over HTTP (the syntax highlighter is JS, and browsers restrict JS on
`file://`):

```bash
cd site && python3 -m http.server 8000
```

Then open http://localhost:8000 . After editing any file, **hard-refresh** (Cmd+Shift+R) — the
server caches JS/CSS.

Optional alias in `~/.zshrc`:
```bash
alias cheatsheets='cd ~/projects/system-design-practise/site && python3 -m http.server 8000'
```

## What's inside

The full cheatsheet content across three topics, cleanly formatted with:
- A sticky **table of contents** grouped by topic, with scroll-spy.
- A **filter box** to jump to a section by name.
- **Syntax-highlighted** code templates (Python + SQL).
- A **"🗣 Say it:"** one-line mnemonic above each snippet — recite it, then reconstruct the code.
- **Dark / light** theme toggle.

## Edit content

All content lives in one file — edit and hard-refresh:

- `data/reference.js` — `{ deck: [ { id, title, html } ] }`, where `deck` is `coding`,
  `system-design`, or `behavioral`. `html` is plain HTML; wrap code in `<pre>…</pre>` and put a
  `<div class="mnemonic">🗣 <b>Say it:</b> …</div>` above it.

## Files

```
site/
  index.html          shell + theme toggle
  css/styles.css      theme-aware styling (dark/light)
  js/app.js           renders the reference (TOC, search, scroll-spy)
  js/highlight.js     self-contained Python/SQL syntax highlighter
  data/reference.js   all cheatsheet content
```

The original PDFs are in the parent folder; extracted text is in `../extract/`.
