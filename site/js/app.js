/* Interview Cheatsheets — reference-only viewer */
(function () {
  const DECKS = [
    { id: 'coding', name: 'Coding' },
    { id: 'system-design', name: 'System Design' },
    { id: 'behavioral', name: 'Behavioral' },
  ];
  const view = document.getElementById('view');
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const paint = () => { if (typeof HL !== 'undefined') HL.highlightAll(view); };

  /* ---------- Reference ---------- */
  function render() {
    const intro = el('div', 'ref-intro');
    intro.innerHTML = `<h1>SWE Interview Cheatsheets</h1>
      <p class="lead">A quick-reference library for <b>senior software-engineering interview</b> prep —
      condensed cheatsheets for <span class="pill coding">Coding</span>
      <span class="pill system-design">System Design</span>
      <span class="pill behavioral">Behavioral</span> rounds. Each section gives the frameworks,
      code templates, trade-offs, and a one-line <b>🗣 Say it</b> mnemonic to jog your memory.
      Use the table of contents or the filter box to jump to a topic.</p>`;
    view.appendChild(intro);

    const layout = el('div', 'ref-layout');
    const toc = el('aside', 'ref-toc');
    const content = el('div', 'ref-content');

    const search = el('input', 'ref-search');
    search.placeholder = 'Filter sections…';
    toc.appendChild(search);

    const links = [];
    DECKS.forEach(d => {
      const secs = REFERENCE[d.id] || [];
      if (!secs.length) return;
      const group = el('div', 'deck-group');
      group.appendChild(el('div', null, d.name));
      secs.forEach(sec => {
        const id = `${d.id}--${sec.id}`;
        const a = el('a', null, sec.title);
        a.href = '#' + id;
        a.dataset.target = id;
        a.onclick = e => { e.preventDefault(); document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' }); };
        group.appendChild(a);
        links.push({ a, title: sec.title.toLowerCase(), deck: d.name.toLowerCase() });

        const section = el('section', 'ref-section');
        section.id = id;
        section.innerHTML = `<div style="margin-bottom:6px"><span class="pill ${d.id}">${d.name}</span></div>
          <h2 style="margin-top:6px">${sec.title}</h2>${sec.html}`;
        content.appendChild(section);
      });
      toc.appendChild(group);
    });

    search.oninput = () => {
      const q = search.value.toLowerCase().trim();
      links.forEach(l => { l.a.style.display = (!q || l.title.includes(q) || l.deck.includes(q)) ? '' : 'none'; });
    };

    // scroll-spy: highlight the current section in the TOC
    const spy = () => {
      let cur = null;
      document.querySelectorAll('.ref-section').forEach(s => { if (s.getBoundingClientRect().top < 120) cur = s.id; });
      links.forEach(l => l.a.classList.toggle('active', l.a.dataset.target === cur));
    };
    window.addEventListener('scroll', spy, { passive: true });
    setTimeout(spy, 50);

    layout.append(toc, content);
    view.appendChild(layout);
    paint();
  }

  render();
})();
