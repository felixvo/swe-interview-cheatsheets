/* Tiny self-contained syntax highlighter (Python + embedded SQL). No dependencies. */
const HL = (function () {
  const KW = new Set(['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'in', 'not',
    'and', 'or', 'is', 'None', 'True', 'False', 'import', 'from', 'class', 'with', 'as',
    'lambda', 'continue', 'break', 'yield', 'pass', 'try', 'except', 'finally', 'raise',
    'global', 'nonlocal', 'assert', 'del', 'await', 'async']);
  // SQL keywords — only highlighted when the token is ALL-CAPS (so they don't touch Python)
  const SQL = new Set(['SELECT', 'UPDATE', 'SET', 'WHERE', 'FROM', 'AND', 'OR', 'INSERT',
    'INTO', 'VALUES', 'DELETE', 'ORDER', 'BY', 'LIMIT', 'GROUP', 'HAVING', 'JOIN', 'ON',
    'FOR', 'SKIP', 'LOCKED', 'NOT', 'NULL', 'IF', 'EXISTS', 'DESC', 'ASC', 'AS', 'NX', 'PX']);
  const BUILTIN = new Set(['len', 'range', 'enumerate', 'max', 'min', 'sum', 'sorted',
    'map', 'filter', 'zip', 'deque', 'heappush', 'heappop', 'defaultdict', 'Counter',
    'append', 'pop', 'popleft', 'add', 'get', 'setdefault', 'abs', 'int', 'str', 'list',
    'dict', 'set', 'tuple', 'print', 'bisect_left', 'lru_cache', 'heapq']);

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const isId = c => c && /[A-Za-z0-9_]/.test(c);
  const isIdStart = c => c && /[A-Za-z_]/.test(c);

  function highlight(text) {
    let out = '', i = 0;
    const n = text.length;
    while (i < n) {
      const c = text[i];
      // comment
      if (c === '#') {
        let j = i; while (j < n && text[j] !== '\n') j++;
        out += '<span class="tok-com">' + esc(text.slice(i, j)) + '</span>'; i = j; continue;
      }
      // string
      if (c === '"' || c === "'") {
        const q = c; let j = i + 1;
        while (j < n && text[j] !== q) { if (text[j] === '\\') j++; j++; }
        j = Math.min(j + 1, n);
        out += '<span class="tok-str">' + esc(text.slice(i, j)) + '</span>'; i = j; continue;
      }
      // number
      if (/[0-9]/.test(c) && !isId(text[i - 1])) {
        let j = i; while (j < n && /[0-9a-fx._]/i.test(text[j])) j++;
        out += '<span class="tok-num">' + esc(text.slice(i, j)) + '</span>'; i = j; continue;
      }
      // identifier / keyword
      if (isIdStart(c)) {
        let j = i; while (j < n && isId(text[j])) j++;
        const w = text.slice(i, j);
        let cls = null;
        if (KW.has(w)) cls = 'tok-kw';
        else if (w === w.toUpperCase() && w.length > 1 && SQL.has(w)) cls = 'tok-kw';
        else if (BUILTIN.has(w)) cls = 'tok-fn';
        else if (text[j] === '(') cls = 'tok-fn';
        out += cls ? '<span class="' + cls + '">' + esc(w) + '</span>' : esc(w);
        i = j; continue;
      }
      // operators
      if (/[+\-*/%<>=!&|^~]/.test(c)) {
        let j = i; while (j < n && /[+\-*/%<>=!&|^~]/.test(text[j])) j++;
        out += '<span class="tok-op">' + esc(text.slice(i, j)) + '</span>'; i = j; continue;
      }
      out += esc(c); i++;
    }
    return out;
  }

  function highlightAll(root) {
    (root || document).querySelectorAll('pre').forEach(pre => {
      if (pre.dataset.hl) return;
      pre.dataset.hl = '1';
      pre.innerHTML = highlight(pre.textContent);
    });
  }

  return { highlight, highlightAll };
})();
