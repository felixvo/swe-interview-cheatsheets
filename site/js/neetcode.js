/* NeetCode 150 recall — random problem per page load, one-liner + solution */
(function () {
  const $ = id => document.getElementById(id);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } },
  };
  const DIFF = { E: ['Easy', 'nc-easy'], M: ['Medium', 'nc-medium'], H: ['Hard', 'nc-hard'] };
  const CATS = [...new Set(NEETCODE.map(p => p.c))];

  /* ---- category filter ---- */
  const sel = $('nc-cat');
  sel.innerHTML = `<option value="">All categories (${NEETCODE.length})</option>` +
    CATS.map(c => `<option value="${c}">${c} (${NEETCODE.filter(p => p.c === c).length})</option>`).join('');
  let cat = store.get('nc-cat', '');
  if (cat && !CATS.includes(cat)) cat = '';
  sel.value = cat;

  const pool = () => NEETCODE.map((p, i) => i).filter(i => !cat || NEETCODE[i].c === cat);

  /* ---- shuffle bag: no repeats until the whole pool has been seen ---- */
  const bagKey = () => 'nc-bag:' + (cat || 'all');
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function draw() {
    const valid = new Set(pool());
    let bag = store.get(bagKey(), []).filter(i => valid.has(i));
    if (!bag.length) {
      bag = shuffle([...valid]);
      const last = store.get('nc-last', -1);
      if (bag.length > 1 && bag[bag.length - 1] === last) [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
    }
    const idx = bag.pop();
    store.set(bagKey(), bag);
    store.set('nc-last', idx);
    return { idx, left: bag.length, total: valid.size };
  }

  /* ---- render ---- */
  let revealed = false;
  const autoshow = $('nc-autoshow');
  autoshow.checked = store.get('nc-autoshow', false);

  function setRevealed(on) {
    revealed = on;
    $('nc-solution').classList.toggle('hidden', !on);
    $('nc-toggle').firstChild.textContent = on ? 'Hide solution ' : 'Show solution ';
  }

  function show() {
    const { idx, left, total } = draw();
    const p = NEETCODE[idx];
    $('nc-catpill').textContent = p.c;
    const [dname, dcls] = DIFF[p.d];
    const d = $('nc-diff');
    d.textContent = dname;
    d.className = 'pill ' + dcls;
    const t = $('nc-title');
    t.textContent = p.t + ' ↗';
    t.href = p.u;
    $('nc-oneliner').textContent = p.o;
    $('nc-complexity').textContent = p.x;
    const code = $('nc-code');
    code.textContent = p.s;
    delete code.dataset.hl;
    HL.highlightAll($('nc-solution'));
    $('nc-progress').textContent = `${total - left} / ${total} seen this round`;
    document.title = p.t + ' · NeetCode 150';
    setRevealed(autoshow.checked);
  }

  /* ---- events ---- */
  sel.onchange = () => { cat = sel.value; store.set('nc-cat', cat); show(); };
  $('nc-next').onclick = () => { show(); window.scrollTo({ top: 0 }); };
  $('nc-toggle').onclick = () => setRevealed(!revealed);
  $('nc-reveal').onclick = () => setRevealed(true);
  autoshow.onchange = () => { store.set('nc-autoshow', autoshow.checked); if (autoshow.checked) setRevealed(true); };
  document.addEventListener('keydown', e => {
    // buttons are not excluded: Space on a focused button would otherwise re-click it
    if (e.metaKey || e.ctrlKey || e.altKey || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === ' ') { e.preventDefault(); setRevealed(!revealed); }
    else if (e.key === 'n' || e.key === 'N' || e.key === 'ArrowRight') { show(); }
  });

  show();
})();
