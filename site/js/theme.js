/* Shared theme picker (used by every page) */
(function () {
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /* ---------- Theme ---------- */
  const themeKey = 'it-theme';
  const THEMES = [
    { id: 'gruvbox',         name: 'Gruvbox Dark',    bg: '#282828', accent: '#83a598' },
    { id: 'gruvbox-light',   name: 'Gruvbox Light',   bg: '#fbf1c7', accent: '#076678' },
    { id: 'nord',            name: 'Nord',            bg: '#2e3440', accent: '#88c0d0' },
    { id: 'dracula',         name: 'Dracula',         bg: '#282a36', accent: '#bd93f9' },
    { id: 'catppuccin',      name: 'Catppuccin',      bg: '#1e1e2e', accent: '#89b4fa' },
    { id: 'solarized-light', name: 'Solarized Light', bg: '#fdf6e3', accent: '#268bd2' },
    { id: 'dark',            name: 'Midnight',        bg: '#0f1116', accent: '#5b8cff' },
    { id: 'light',           name: 'Daylight',        bg: '#f6f7f9', accent: '#3b6ef5' },
  ];
  const DEFAULT_THEME = 'dark';
  const getTheme = () => {
    const t = localStorage.getItem(themeKey);
    return THEMES.some(x => x.id === t) ? t : DEFAULT_THEME;
  };
  const applyTheme = () => document.documentElement.setAttribute('data-theme', getTheme());

  const picker = document.querySelector('.theme-picker');
  const toggleBtn = document.getElementById('theme-toggle');
  const menu = el('div', 'theme-menu');
  menu.hidden = true;
  menu.setAttribute('role', 'menu');
  const closeMenu = () => { menu.hidden = true; toggleBtn.setAttribute('aria-expanded', 'false'); };
  const renderMenu = () => {
    const cur = getTheme();
    menu.innerHTML = '<div class="tm-head">Theme</div>';
    THEMES.forEach(t => {
      const b = el('button', 'theme-opt' + (t.id === cur ? ' active' : ''));
      b.setAttribute('role', 'menuitemradio');
      b.setAttribute('aria-checked', t.id === cur ? 'true' : 'false');
      b.style.setProperty('--sw-bg', t.bg);
      b.style.setProperty('--sw-accent', t.accent);
      b.innerHTML = `<span class="sw" aria-hidden="true"></span><span>${t.name}</span><span class="tm-check" aria-hidden="true">✓</span>`;
      b.onclick = () => { localStorage.setItem(themeKey, t.id); applyTheme(); renderMenu(); closeMenu(); };
      menu.appendChild(b);
    });
  };
  const openMenu = () => { renderMenu(); menu.hidden = false; toggleBtn.setAttribute('aria-expanded', 'true'); };
  toggleBtn.addEventListener('click', e => { e.stopPropagation(); menu.hidden ? openMenu() : closeMenu(); });
  document.addEventListener('click', e => { if (!picker.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  picker.appendChild(menu);
  applyTheme();
})();
