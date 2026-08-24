/* Reference content. Each section: {id, title, html}. Faithful to the cheatsheets, cleanly formatted. */
const REFERENCE = {
  /* =================== CODING =================== */
  coding: [
    { id: 'map', title: 'Pattern Map — which pattern?', html: `
      <p>Classify a new problem by its strongest <b>signal</b>, then jump to the matching template. The full trigger→pattern lookup is in <b>Pattern Recognition</b> below.</p>
      <div class="mm-wrap"><svg class="mindmap" viewBox="0 0 662 832" width="662" role="img" aria-label="Coding pattern map">
<defs><linearGradient id="mmroot" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b6ef5"/><stop offset="1" stop-color="#7b5cff"/></linearGradient></defs>
<path class="mm-link mm-c0" d="M140,424.5 C168,424.5 168,97.0 196,97.0"/>
<path class="mm-link mm-c1" d="M140,424.5 C168,424.5 168,245.0 196,245.0"/>
<path class="mm-link mm-c2" d="M140,424.5 C168,424.5 168,342.0 196,342.0"/>
<path class="mm-link mm-c3" d="M140,424.5 C168,424.5 168,473.0 196,473.0"/>
<path class="mm-link mm-c4" d="M140,424.5 C168,424.5 168,621.0 196,621.0"/>
<path class="mm-link mm-c5" d="M140,424.5 C168,424.5 168,752.0 196,752.0"/>
<path class="mm-link mm-c0" d="M346,97.0 C374,97.0 374,29.0 402,29.0"/>
<path class="mm-link mm-c0" d="M346,97.0 C374,97.0 374,63.0 402,63.0"/>
<path class="mm-link mm-c0" d="M346,97.0 C374,97.0 374,97.0 402,97.0"/>
<path class="mm-link mm-c0" d="M346,97.0 C374,97.0 374,131.0 402,131.0"/>
<path class="mm-link mm-c0" d="M346,97.0 C374,97.0 374,165.0 402,165.0"/>
<path class="mm-link mm-c1" d="M346,245.0 C374,245.0 374,211.0 402,211.0"/>
<path class="mm-link mm-c1" d="M346,245.0 C374,245.0 374,245.0 402,245.0"/>
<path class="mm-link mm-c1" d="M346,245.0 C374,245.0 374,279.0 402,279.0"/>
<path class="mm-link mm-c2" d="M346,342.0 C374,342.0 374,325.0 402,325.0"/>
<path class="mm-link mm-c2" d="M346,342.0 C374,342.0 374,359.0 402,359.0"/>
<path class="mm-link mm-c3" d="M346,473.0 C374,473.0 374,405.0 402,405.0"/>
<path class="mm-link mm-c3" d="M346,473.0 C374,473.0 374,439.0 402,439.0"/>
<path class="mm-link mm-c3" d="M346,473.0 C374,473.0 374,473.0 402,473.0"/>
<path class="mm-link mm-c3" d="M346,473.0 C374,473.0 374,507.0 402,507.0"/>
<path class="mm-link mm-c3" d="M346,473.0 C374,473.0 374,541.0 402,541.0"/>
<path class="mm-link mm-c4" d="M346,621.0 C374,621.0 374,587.0 402,587.0"/>
<path class="mm-link mm-c4" d="M346,621.0 C374,621.0 374,621.0 402,621.0"/>
<path class="mm-link mm-c4" d="M346,621.0 C374,621.0 374,655.0 402,655.0"/>
<path class="mm-link mm-c5" d="M346,752.0 C374,752.0 374,701.0 402,701.0"/>
<path class="mm-link mm-c5" d="M346,752.0 C374,752.0 374,735.0 402,735.0"/>
<path class="mm-link mm-c5" d="M346,752.0 C374,752.0 374,769.0 402,769.0"/>
<path class="mm-link mm-c5" d="M346,752.0 C374,752.0 374,803.0 402,803.0"/>
<rect class="mm-rootbox" x="8" y="392.5" width="132" height="64" rx="12"/>
<text class="mm-roott" x="74" y="418.5" text-anchor="middle">Which pattern?</text>
<text class="mm-roots" x="74" y="436.5" text-anchor="middle">read the signal</text>
<rect class="mm-cl mm-c0" x="196" y="81.0" width="150" height="32" rx="8"/>
<text class="mm-clt mm-c0" x="271" y="95.0" text-anchor="middle">Array / string</text>
<text class="mm-clt mm-c0" x="271" y="108.0" text-anchor="middle">scan</text>
<rect class="mm-cl mm-c1" x="196" y="229.0" width="150" height="32" rx="8"/>
<text class="mm-clt mm-c1" x="271" y="243.0" text-anchor="middle">Search &amp;</text>
<text class="mm-clt mm-c1" x="271" y="256.0" text-anchor="middle">order</text>
<rect class="mm-cl mm-c2" x="196" y="326.0" width="150" height="32" rx="8"/>
<text class="mm-clt mm-c2" x="271" y="346.0" text-anchor="middle">Linked list</text>
<rect class="mm-cl mm-c3" x="196" y="457.0" width="150" height="32" rx="8"/>
<text class="mm-clt mm-c3" x="271" y="471.0" text-anchor="middle">Trees &amp;</text>
<text class="mm-clt mm-c3" x="271" y="484.0" text-anchor="middle">graphs</text>
<rect class="mm-cl mm-c4" x="196" y="605.0" width="150" height="32" rx="8"/>
<text class="mm-clt mm-c4" x="271" y="619.0" text-anchor="middle">Choices &amp;</text>
<text class="mm-clt mm-c4" x="271" y="632.0" text-anchor="middle">cost</text>
<rect class="mm-cl mm-c5" x="196" y="736.0" width="150" height="32" rx="8"/>
<text class="mm-clt mm-c5" x="271" y="750.0" text-anchor="middle">Number / string</text>
<text class="mm-clt mm-c5" x="271" y="763.0" text-anchor="middle">tricks</text>
<rect class="mm-leaf" x="402" y="16.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c0" x="402" y="16.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="33.0">Two pointers</text>
<rect class="mm-leaf" x="402" y="50.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c0" x="402" y="50.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="67.0">Sliding window</text>
<rect class="mm-leaf" x="402" y="84.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c0" x="402" y="84.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="101.0">Monotonic deque</text>
<rect class="mm-leaf" x="402" y="118.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c0" x="402" y="118.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="135.0">Prefix sum + hashmap</text>
<rect class="mm-leaf" x="402" y="152.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c0" x="402" y="152.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="169.0">Monotonic stack</text>
<rect class="mm-leaf" x="402" y="198.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c1" x="402" y="198.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="215.0">Binary search</text>
<rect class="mm-leaf" x="402" y="232.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c1" x="402" y="232.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="249.0">Heap / top-K</text>
<rect class="mm-leaf" x="402" y="266.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c1" x="402" y="266.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="283.0">Intervals: sort + sweep</text>
<rect class="mm-leaf" x="402" y="312.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c2" x="402" y="312.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="329.0">Fast &amp; slow pointers</text>
<rect class="mm-leaf" x="402" y="346.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c2" x="402" y="346.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="363.0">In-place reversal</text>
<rect class="mm-leaf" x="402" y="392.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c3" x="402" y="392.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="409.0">DFS on trees</text>
<rect class="mm-leaf" x="402" y="426.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c3" x="402" y="426.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="443.0">BFS</text>
<rect class="mm-leaf" x="402" y="460.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c3" x="402" y="460.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="477.0">Topological sort</text>
<rect class="mm-leaf" x="402" y="494.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c3" x="402" y="494.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="511.0">Union-Find</text>
<rect class="mm-leaf" x="402" y="528.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c3" x="402" y="528.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="545.0">Dijkstra</text>
<rect class="mm-leaf" x="402" y="574.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c4" x="402" y="574.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="591.0">Backtracking</text>
<rect class="mm-leaf" x="402" y="608.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c4" x="402" y="608.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="625.0">Dynamic programming</text>
<rect class="mm-leaf" x="402" y="642.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c4" x="402" y="642.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="659.0">Greedy</text>
<rect class="mm-leaf" x="402" y="688.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c5" x="402" y="688.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="705.0">Cyclic sort / XOR</text>
<rect class="mm-leaf" x="402" y="722.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c5" x="402" y="722.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="739.0">Expand around center</text>
<rect class="mm-leaf" x="402" y="756.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c5" x="402" y="756.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="773.0">Trie</text>
<rect class="mm-leaf" x="402" y="790.0" width="248" height="26" rx="7"/>
<rect class="mm-bar mm-c5" x="402" y="790.0" width="4" height="26" rx="2"/>
<text class="mm-leaft" x="418" y="807.0">Matrix traversal</text>
</svg></div>
      <p class="faint" style="font-size:12.5px">Colour = family of signal. Scroll sideways on a narrow screen.</p>` },
    { id: 'framework', title: 'Universal Framework', html: `
      <p>Use roughly this sequence for every coding question:</p>
      <ol>
        <li>Restate the problem in your own words</li>
        <li>Clarify constraints (n? value range? sorted? duplicates? negatives?)</li>
        <li>Walk one example by hand; propose edge cases</li>
        <li>State the brute force + its complexity (out loud, don't code it)</li>
        <li>Optimize: name the bottleneck, match a pattern</li>
        <li>Agree on the approach with the interviewer <b>before</b> coding</li>
        <li>Code cleanly, narrating as you go</li>
        <li>Test: trace the given example, then your edge cases</li>
        <li>State final time/space complexity</li>
        <li>Discuss follow-ups and trade-offs</li>
      </ol>
      <div class="callout">Constraints are hints. <code>n ≤ 1e5</code> is the interviewer telling you the target is roughly O(n log n).</div>
      <h3>45-minute pacing</h3>
      <table><tr><th>Time</th><th>Activity</th></tr>
        <tr><td>0–5</td><td>Restate, clarify constraints, example + edge cases</td></tr>
        <tr><td>5–10</td><td>Brute force out loud → optimize → agree on approach</td></tr>
        <tr><td>10–30</td><td>Code, narrating; keep functions small</td></tr>
        <tr><td>30–38</td><td>Test by tracing; fix bugs calmly</td></tr>
        <tr><td>38–45</td><td>Complexity, follow-ups, variants</td></tr></table>
      <p>Never code in silence, and never start coding before the interviewer agrees with the plan. If stuck 2+ minutes, say what you're considering — hints cost a communicative candidate far less than dead air.</p>` },

    { id: 'complexity', title: 'Complexity & Constraints', html: `
      <p>Budget: roughly 1e6–1e7 simple operations/second in Python (1e7–1e8 in C++/Java). State which language you're quoting.</p>
      <h3>Constraint → target complexity</h3>
      <table><tr><th>Input size n</th><th>Target</th><th>Typical approach</th></tr>
        <tr><td>n ≤ 10</td><td>O(n!)</td><td>permutations, brute force</td></tr>
        <tr><td>n ≤ 22</td><td>O(2ⁿ)</td><td>subsets, backtracking, bitmask</td></tr>
        <tr><td>n ≤ 200</td><td>O(n³)</td><td>triple loop, Floyd–Warshall</td></tr>
        <tr><td>n ≤ 3,000</td><td>O(n²)</td><td>double loop, 2D DP</td></tr>
        <tr><td>n ≤ 1e5</td><td>O(n log n)</td><td>sort, heap, binary search, divide & conquer</td></tr>
        <tr><td>n ≤ 1e6</td><td>O(n)</td><td>one pass, two pointers, hashmap</td></tr>
        <tr><td>n ≥ 1e9</td><td>O(log n) / O(1)</td><td>binary search on answer, math, bit tricks</td></tr></table>
      <p>A very large <code>n</code> (≈ 1e9+) usually means the "input" is <b>implicit</b> — a range or answer space to search over rather than an array you store — so the target drops to O(log n) or O(1); it's a strong hint, not a guarantee (a 1e9-element stream still gets processed in one O(n) pass). Amortized: a Python list append is O(1) amortized. Space includes the recursion stack — a DFS on a skewed tree is O(n) space even with no explicit structure. Graph algorithms are usually O(V + E).</p>` },

    { id: 'datastructures', title: 'Data Structure Cheat Sheet', html: `
      <table><tr><th>Structure</th><th>Strengths</th><th>Watch out</th></tr>
        <tr><td>Array / list</td><td>index O(1), append O(1) am.</td><td>insert/delete middle O(n)</td></tr>
        <tr><td>Hash map / set</td><td>lookup/insert/delete O(1) avg</td><td>worst O(n); keys must be hashable</td></tr>
        <tr><td>Linked list</td><td>insert/delete at a known node O(1)</td><td>no random access — search O(n)</td></tr>
        <tr><td>Stack</td><td>push/pop/peek O(1)</td><td>LIFO only</td></tr>
        <tr><td>Queue / deque</td><td>both ends O(1)</td><td>never pop(0) on a Python list</td></tr>
        <tr><td>Heap (heapq)</td><td>peek O(1), push/pop O(log n)</td><td>min-heap by default; Python 3.14+ adds <code>heappush_max</code>/<code>heappop_max</code>, else negate for max</td></tr>
        <tr><td>Monotonic deque</td><td>sliding-window min/max O(n)</td><td>store indices</td></tr>
        <tr><td>Balanced BST</td><td>search/insert/delete O(log n)</td><td>not in Python stdlib — use bisect list / heap</td></tr>
        <tr><td>Trie</td><td>word ops O(L)</td><td>memory-heavy</td></tr>
        <tr><td>Union-Find</td><td>find/union ~O(1) amortized</td><td>needs path compression + union by size</td></tr></table>
      <p><b>Choosing:</b> fast membership → hash set · order + fast min/max → heap · order + arbitrary lookup → sorted structure + bisect · "next greater/smaller" → monotonic stack · sliding window max → monotonic deque · grouping/connectivity → union-find.</p>` },

    { id: 'triggers', title: 'Pattern Recognition (triggers)', html: `
      <table><tr><th>Trigger words in the problem</th><th>Pattern</th></tr>
        <tr><td>sorted array; pair summing to target</td><td>Two pointers</td></tr>
        <tr><td>contiguous subarray/substring, longest/shortest window</td><td>Sliding window</td></tr>
        <tr><td>max/min of every window of size k</td><td>Monotonic deque</td></tr>
        <tr><td>subarray sum equals k (negatives allowed); range sums</td><td>Prefix sum + hashmap</td></tr>
        <tr><td>sorted/rotated; "minimize the maximum"; smallest feasible answer</td><td>Binary search (index or answer)</td></tr>
        <tr><td>linked list cycle / middle / k-th from end</td><td>Fast & slow pointers</td></tr>
        <tr><td>matching brackets; next greater/smaller; spans</td><td>Stack / monotonic stack</td></tr>
        <tr><td>top k, k-th largest, k closest, merge k lists, running median</td><td>Heap</td></tr>
        <tr><td>intervals: merge, overlap, meeting rooms</td><td>Sort + sweep / heap</td></tr>
        <tr><td>shortest path (unweighted), minimum steps, level order</td><td>BFS</td></tr>
        <tr><td>tree paths, subtree properties, validate BST</td><td>DFS on trees</td></tr>
        <tr><td>all permutations/combinations/subsets; N-Queens; word search</td><td>Backtracking</td></tr>
        <tr><td>prerequisites / dependency order; components; cheapest path</td><td>Topo sort / Union-Find / Dijkstra</td></tr>
        <tr><td>count the ways; min/max cost over choices; "can you reach"</td><td>Dynamic programming</td></tr>
        <tr><td>locally best and provably safe</td><td>Greedy (usually after sorting)</td></tr>
        <tr><td>prefix matching, autocomplete, many word lookups</td><td>Trie</td></tr>
        <tr><td>numbers 1..n with one missing/dup; O(1) space</td><td>Cyclic sort / index-as-hash / XOR</td></tr>
        <tr><td>palindromic substrings</td><td>Expand around center</td></tr>
        <tr><td>spiral order, rotate image, set matrix zeroes</td><td>Matrix traversal</td></tr></table>` },

    { id: 'templates-core', title: 'Core Templates (windows, search, pointers)', html: `
      <h3>Sliding window (shrinkable)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Grow on the right; while invalid, shrink from the left; track the best size.</div>
      <pre>left = best = 0
for right in range(len(a)):
    # add a[right] to the window state
    while window_invalid():
        # remove a[left] from state
        left += 1
    best = max(best, right - left + 1)</pre>
      <p>Only valid when growing/shrinking moves the constraint <b>monotonically</b> (e.g. sums of all-positive numbers). With negatives, "subarray sum = k" is a prefix-sum problem.</p>
      <h3>Monotonic deque — window maximum, O(n)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Deque of indices, biggest at the front; drop the expired left and any smaller tail; the front is the max.</div>
      <pre>from collections import deque
dq, res = deque(), []
for i, x in enumerate(a):
    if dq and dq[0] &lt;= i - k:      # left index expired
        dq.popleft()
    while dq and a[dq[-1]] &lt;= x:    # x dominates smaller
        dq.pop()
    dq.append(i)
    if i &gt;= k - 1:
        res.append(a[dq[0]])</pre>
      <h3>Prefix sum + hashmap — count subarrays summing to k</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Carry a running sum; seen (sum − k) before? that many subarrays hit k. Seed {0:1}.</div>
      <pre>count = prefix = 0
seen = {0: 1}   # empty prefix
for x in nums:
    prefix += x
    count += seen.get(prefix - k, 0)
    seen[prefix] = seen.get(prefix, 0) + 1</pre>
      <h3>Binary search — lower bound</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Halve the range; mid too small → go right, else keep mid; stop when it collapses. (On the answer space: guess a value, ask "feasible?", shrink toward the smallest yes.)</div>
      <pre>lo, hi = 0, len(a)
while lo &lt; hi:
    mid = (lo + hi) // 2
    if a[mid] &lt; target:
        lo = mid + 1
    else:
        hi = mid
return lo</pre>
      <p>On the answer space: <code>if feasible(mid): hi = mid; else: lo = mid + 1</code>. For largest feasible: <code>mid = (lo + hi + 1) // 2</code>, <code>lo = mid</code> when feasible else <code>hi = mid - 1</code>. <b>feasible() must be monotonic.</b></p>
      <h3>Two pointers — opposite ends</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Start at both ends; sum too small → left up, too big → right down, until they meet.</div>
      <pre>l, r = 0, len(a) - 1
while l &lt; r:
    s = a[l] + a[r]
    if s == target: return [l, r]
    if s &lt; target: l += 1
    else:          r -= 1</pre>` },

    { id: 'templates-graph', title: 'Graph & Tree Templates', html: `
      <h3>BFS with level tracking</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Queue the start; per level pop everyone and enqueue unseen neighbors (mark on enqueue); count levels.</div>
      <pre>from collections import deque
q = deque([start]); seen = {start}; steps = 0
while q:
    for _ in range(len(q)):        # one level at a time
        node = q.popleft()
        if node == goal: return steps
        for nb in neighbors(node):
            if nb not in seen:
                seen.add(nb)         # mark WHEN ENQUEUING
                q.append(nb)
    steps += 1</pre>
      <p>Grid: <code>for dr, dc in ((1,0),(-1,0),(0,1),(0,-1))</code> with bounds checks. Multi-source BFS: seed the queue with all sources at distance 0.</p>
      <h3>Tree DFS — return info up, update answer globally</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Each node returns its tallest arm; the answer is the widest pair of arms seen. (Max path sum: drop negative arms, add the node's own value.)</div>
      <pre># Diameter (edges): init self.best = 0
def dfs(node):
    if not node: return 0
    left, right = dfs(node.left), dfs(node.right)
    self.best = max(self.best, left + right)
    return max(left, right) + 1

# Max Path Sum: init self.best = -inf, clamp negatives
def dfs(node):
    if not node: return 0
    left  = max(dfs(node.left), 0)
    right = max(dfs(node.right), 0)
    self.best = max(self.best, left + right + node.val)
    return max(left, right) + node.val</pre>
      <h3>Topological sort (Kahn's)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Start with the zero-prerequisite nodes; removing each frees its dependents; anything left over means a cycle.</div>
      <pre>from collections import defaultdict, deque
adj = defaultdict(list); indeg = [0]*n
for u, v in edges:                 # edge u -&gt; v (u before v)
    adj[u].append(v); indeg[v] += 1
q = deque(i for i in range(n) if indeg[i] == 0)
order = []
while q:
    u = q.popleft(); order.append(u)
    for v in adj[u]:
        indeg[v] -= 1
        if indeg[v] == 0: q.append(v)
# len(order) &lt; n  ⇒  cycle</pre>
      <h3>Union-Find (path compression + union by size)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Everyone points to a boss; find walks the chain (compressing it); union hangs the smaller tree under the bigger.</div>
      <pre>parent = list(range(n)); size = [1]*n
def find(x):
    while parent[x] != x:
        parent[x] = parent[parent[x]]
        x = parent[x]
    return x
def union(a, b):
    ra, rb = find(a), find(b)
    if ra == rb: return False        # already connected
    if size[ra] &lt; size[rb]: ra, rb = rb, ra
    parent[rb] = ra; size[ra] += size[rb]
    return True</pre>
      <h3>Dijkstra (non-negative weights)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Pop the closest unsettled node; relax its edges; ignore stale heap entries.</div>
      <pre>import heapq
inf = float('inf')
dist = {src: 0}; h = [(0, src)]     # adj: {u: [(v, w), ...]}
while h:
    d, u = heapq.heappop(h)
    if d &gt; dist.get(u, inf): continue   # stale
    for v, w in adj[u]:
        nd = d + w
        if nd &lt; dist.get(v, inf):
            dist[v] = nd
            heapq.heappush(h, (nd, v))</pre>` },

    { id: 'templates-dp', title: 'DP, Backtracking & Heaps', html: `
      <h3>DP 5-step framework (say it out loud)</h3>
      <ol><li><b>State</b> — what does <code>dp[i]</code> MEAN, in one sentence</li>
        <li><b>Transition</b> — dp[i] from smaller states</li>
        <li><b>Base cases</b></li>
        <li><b>Order</b> — iterate so dependencies are ready</li>
        <li><b>Answer</b> — which cell holds it</li></ol>
      <div class="mnemonic">🗣 <b>Say it:</b> Write the recurrence as a function, cache it, base case at the bottom.</div>
      <pre># Top-down = transcription of the recurrence
from functools import lru_cache
@lru_cache(None)
def dp(i):
    if i &lt; 0: return 0
    return max(dp(i-1), dp(i-2) + nums[i])   # House Robber</pre>
      <p><b>Knapsack direction:</b> 0/1 iterates capacity <b>backward</b> (each item once); unbounded iterates <b>forward</b> (reuse). <b>LCS:</b> pad to (n+1)×(m+1) zeros — not optional, or Python silently wraps <code>dp[i-1][-1]</code>.</p>
      <h3>Backtracking (choose / explore / un-choose)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Choose, explore, un-choose.</div>
      <pre>def backtrack(start, path):
    res.append(path[:])                 # or if is_goal(path)
    for i in range(start, len(nums)):
        if i &gt; start and nums[i] == nums[i-1]:
            continue                    # skip dups (sorted)
        path.append(nums[i])
        backtrack(i + 1, path)
        path.pop()</pre>
      <p>Subsets O(2ⁿ), permutations O(n·n!). Word search: mark the cell in place (<code>board[r][c] = '#'</code>), recurse, restore.</p>
      <h3>Heap / top-k</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Keep a min-heap of size k; its smallest is the k-th largest.</div>
      <pre># K-th largest: min-heap of size k, O(n log k)
import heapq
h = []
for x in nums:
    heapq.heappush(h, x)
    if len(h) &gt; k: heapq.heappop(h)
return h[0]</pre>
      <p>Merge k lists: heap of <code>(value, list_index, node)</code>. Running median: max-heap (lower half) + min-heap (upper half).</p>` },

    { id: 'templates-more', title: 'More Templates (stack, intervals, list, trie, matrix)', html: `
      <h3>Monotonic stack — next greater element</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Keep a stack of indices waiting for their next greater; when a bigger value arrives, pop and resolve them.</div>
      <pre>res = [-1] * len(a)     # -1 = no greater element to the right
stack = []              # indices, values decreasing
for i, x in enumerate(a):
    while stack and a[stack[-1]] &lt; x:
        res[stack.pop()] = x
    stack.append(i)
return res</pre>
      <p>Flip the comparison for next-smaller; iterate right→left for "previous" variants. Same shape solves daily temperatures, stock span, largest rectangle in histogram.</p>
      <h3>Intervals — merge overlapping</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Sort by start; if the next interval touches the last kept one, extend it, else append.</div>
      <pre>intervals.sort(key=lambda iv: iv[0])
merged = []
for s, e in intervals:
    if merged and s &lt;= merged[-1][1]:
        merged[-1][1] = max(merged[-1][1], e)
    else:
        merged.append([s, e])
return merged</pre>
      <p><b>Sweep line</b> for "max concurrent" (meeting rooms): push <code>(start,+1)</code> and <code>(end,-1)</code>, sort, running sum — process <code>-1</code> before <code>+1</code> at a tie if endpoints touch and don't count as overlap.</p>
      <h3>Fast &amp; slow pointers — cycle + midpoint</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Slow steps one, fast steps two; they meet inside a cycle; reset one to the head and they meet at the entry.</div>
      <pre>def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False
# Midpoint: when fast stops, slow is the middle.
# Cycle start: after a meet, reset slow=head; advance both by 1 until equal.</pre>
      <h3>Linked-list reversal (iterative)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Walk forward flipping each next pointer backward; keep prev, cur, and a saved next.</div>
      <pre>prev, cur = None, head
while cur:
    nxt = cur.next     # save
    cur.next = prev    # flip
    prev = cur         # advance
    cur = nxt
return prev            # new head</pre>
      <p>Reverse a sublist [m,n): isolate with a dummy head + a fixed node before m, then splice. Recursion is O(n) stack — mention it.</p>
      <h3>Trie (prefix tree)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> A tree of chars; each node maps a letter to a child; a flag marks a complete word.</div>
      <pre>class Trie:
    def __init__(self):
        self.root = {}
    def insert(self, word):
        node = self.root
        for c in word:
            node = node.setdefault(c, {})
        node['$'] = True          # end-of-word marker
    def _find(self, word):
        node = self.root
        for c in word:
            if c not in node: return None
            node = node[c]
        return node
    def search(self, word):
        node = self._find(word)
        return node is not None and '$' in node
    def starts_with(self, prefix):
        return self._find(prefix) is not None</pre>
      <h3>Greedy — interval scheduling (max non-overlapping)</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Sort by earliest finish; take a job if it starts after the last one you took ended.</div>
      <pre>intervals.sort(key=lambda iv: iv[1])   # by end time
count, end = 0, float('-inf')
for s, e in intervals:
    if s &gt;= end:        # doesn't overlap the last pick
        count += 1
        end = e
return count</pre>
      <p>Greedy is only correct with a proof (exchange argument) or a known safe rule: earliest-finish for scheduling, largest-coin for canonical currencies, sort-by-ratio for fractional knapsack. If unsure, say "greedy would take X here — let me sanity-check it against DP."</p>
      <h3>Expand around center — palindromes</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Every palindrome has a center; grow outward while the ends match. Try both odd and even centers.</div>
      <pre>def longest_palindrome(s):
    def grow(l, r):
        while l &gt;= 0 and r &lt; len(s) and s[l] == s[r]:
            l -= 1; r += 1
        return s[l+1:r]         # last valid span
    best = ""
    for i in range(len(s)):
        for cand in (grow(i, i), grow(i, i+1)):   # odd, even
            if len(cand) &gt; len(best): best = cand
    return best</pre>
      <h3>Matrix traversal — spiral order</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> Peel the outer ring — top row, right col, bottom row, left col — then shrink the bounds inward.</div>
      <pre>res = []
top, bot = 0, len(m) - 1
left, right = 0, len(m[0]) - 1
while top &lt;= bot and left &lt;= right:
    for c in range(left, right + 1): res.append(m[top][c])
    top += 1
    for r in range(top, bot + 1): res.append(m[r][right])
    right -= 1
    if top &lt;= bot:
        for c in range(right, left - 1, -1): res.append(m[bot][c])
        bot -= 1
    if left &lt;= right:
        for r in range(bot, top - 1, -1): res.append(m[r][left])
        left += 1
return res</pre>
      <p>Grid neighbours: <code>for dr, dc in ((1,0),(-1,0),(0,1),(0,-1))</code> then <code>0 &lt;= nr &lt; rows and 0 &lt;= nc &lt; cols</code>. In-place mark on visit; rotate 90° = transpose then reverse each row.</p>` },

    { id: 'toolbox', title: 'Python Toolbox & Gotchas', html: `
      <table><tr><th>Tool</th><th>Use</th></tr>
        <tr><td>collections.Counter</td><td>frequency map; Counter(a)==Counter(b) = anagram check</td></tr>
        <tr><td>collections.defaultdict(list)</td><td>adjacency lists, grouping</td></tr>
        <tr><td>collections.deque</td><td>O(1) queue — never list.pop(0)</td></tr>
        <tr><td>heapq</td><td>min-heap; Python 3.14+ has <code>heapify_max</code>/<code>heappush_max</code>/<code>heappop_max</code>, else negate keys for max</td></tr>
        <tr><td>bisect.bisect_left / insort</td><td>binary search / keep list sorted</td></tr>
        <tr><td>functools.lru_cache(None)</td><td>instant memoization for top-down DP</td></tr>
        <tr><td>float('inf')</td><td>sentinel for min/max scans</td></tr>
        <tr><td>ord(c) - ord('a')</td><td>bucket letters into [0]*26</td></tr></table>
      <p><b>Gotchas:</b> strings are immutable — build with a list + <code>''.join()</code> (<code>s += c</code> is O(n²)). <code>//</code> floors toward −∞. Dict/set keys must be hashable — use <code>tuple(lst)</code>. Recursion limit ≈ 1000 (raise with <code>sys.setrecursionlimit</code>). Compare node identity with <code>is</code>. Python ints don't overflow.</p>
      <p class="srcnote"><b>Last reviewed:</b> 2026-08 · Heap max-variants: <a href="https://docs.python.org/3.14/library/heapq.html">docs.python.org — heapq</a> (<code>heappush_max</code> etc. added in 3.14).</p>` },

    { id: 'toolbox-java', title: 'Java Toolbox (compact)', html: `
      <p>If you interview in Java, the same patterns map to these types. State your language when you quote a complexity budget (Java runs ~1e7–1e8 simple ops/sec).</p>
      <table><tr><th>Need</th><th>Java</th></tr>
        <tr><td>Growable array</td><td><code>ArrayList&lt;&gt;</code>; fixed <code>int[]</code></td></tr>
        <tr><td>Hash map / set</td><td><code>HashMap&lt;&gt;</code>, <code>HashSet&lt;&gt;</code>; <code>getOrDefault</code>, <code>computeIfAbsent</code>, <code>merge(k,1,Integer::sum)</code></td></tr>
        <tr><td>Ordered map / set</td><td><code>TreeMap</code>, <code>TreeSet</code> — <code>floorKey</code>, <code>ceilingKey</code>, <code>firstKey</code> (the BST Python lacks)</td></tr>
        <tr><td>Queue / deque / stack</td><td><code>ArrayDeque&lt;&gt;</code> for all three — avoid the legacy <code>Stack</code></td></tr>
        <tr><td>Heap</td><td><code>PriorityQueue&lt;&gt;</code> (min); max: <code>new PriorityQueue&lt;&gt;(Collections.reverseOrder())</code> or a comparator</td></tr>
        <tr><td>Binary search</td><td><code>Arrays.binarySearch</code>; on answer space, hand-roll <code>lo/hi</code></td></tr>
        <tr><td>String building</td><td><code>StringBuilder</code> (never <code>+=</code> in a loop); <code>s.toCharArray()</code></td></tr>
        <tr><td>Big numbers</td><td><code>long</code> for overflow-prone sums; <code>BigInteger</code> when even that overflows</td></tr></table>
      <div class="mnemonic">🗣 <b>Say it:</b> "In Java I'd reach for a TreeMap here — I need ordered keys with floor/ceiling, which Python only fakes with <code>bisect</code>."</div>
      <p><b>Gotchas:</b> <code>int</code> overflows silently at ~2.1e9 — use <code>long</code>. <code>==</code> compares references for objects; use <code>.equals()</code> (and <code>Integer</code> caches only −128..127). Integer division truncates toward zero, not −∞. Arrays have <code>.length</code>, collections <code>.size()</code>, strings <code>.length()</code>.</p>` },

    { id: 'edge-mistakes', title: 'Edge Cases, Mistakes & Senior Communication', html: `
      <h3>Edge-case checklist</h3>
      <ul>
        <li>Empty input; single element; two elements</li>
        <li>All equal; already sorted; reverse sorted; duplicates</li>
        <li>Negatives & zero (breaks window-sum; all-negative trees)</li>
        <li>Target absent; k larger than n</li>
        <li>List: empty, one node, cycle at the head</li>
        <li>Tree: empty, single node, fully skewed (recursion depth!)</li>
        <li>Graph: disconnected, self-loop, cycle</li>
        <li>Intervals: touching endpoints, nesting</li>
        <li>Matrix: single row/column, non-square</li>
        <li>Values outside the assumed range</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Coding before agreement; silent coding</li>
        <li>Improvised binary search (off-by-one death) — one memorized template</li>
        <li>Marking visited on pop instead of push in BFS</li>
        <li>Forgetting duplicate handling after sorting</li>
        <li>Claiming O(1) space while recursing (the stack counts)</li>
        <li>Skipping the brute force; not tracing the example before "done"</li>
      </ul>
      <h3>Lines that sound senior</h3>
      <ul>
        <li>"Constraints say n up to 1e5, so I'm aiming for O(n log n) or better."</li>
        <li>"The bottleneck is the inner lookup; a hashmap removes it."</li>
        <li>"Heap of size k beats sorting: O(n log k) when k is small."</li>
        <li>"Trade-off: the hashmap costs O(n) space for O(1) lookups."</li>
      </ul>
      <div class="callout">One sentence: a coding interview tests whether you can map a new problem onto a known pattern — and narrate that mapping — under time pressure. <b>Patterns over problems.</b></div>` },
  ],

  /* =================== SYSTEM DESIGN =================== */
  'system-design': [
    { id: 'framework', title: 'Universal Framework & Pacing', html: `
      <p>Use roughly this sequence for almost every system-design interview:</p>
      <ol><li>Clarify requirements</li><li>Estimate scale</li><li>Define API</li><li>Define data model</li>
        <li>Draw high-level architecture</li><li>Explain critical flows</li><li>Identify bottlenecks</li>
        <li>Deep dive</li><li>Reliability / failure handling</li><li>Trade-offs</li></ol>
      <div class="callout warn">Breadth first → then depth. Do NOT open by drawing Kafka, Redis, Cassandra, Kubernetes.</div>
      <p><b>Functional</b> — what users actually need to do (Twitter: post, follow, read home timeline, view profile). De-scope search, ads, DMs, moderation unless asked. <b>Non-functional</b> — scale, latency, availability, consistency, durability, region, read/write ratio.</p>
      <h3>45-minute pacing (most failures are pacing, not knowledge)</h3>
      <table><tr><th>Time</th><th>Activity</th></tr>
        <tr><td>0–5</td><td>Functional + non-functional reqs, de-scope</td></tr>
        <tr><td>5–8</td><td>Estimation (QPS, storage, machine count)</td></tr>
        <tr><td>8–13</td><td>API + data model</td></tr>
        <tr><td>13–20</td><td>High-level architecture + core flows</td></tr>
        <tr><td>20–35</td><td>Deep dive on the hardest part of THIS problem</td></tr>
        <tr><td>35–42</td><td>Failure modes, scaling, trade-offs</td></tr>
        <tr><td>42–45</td><td>Summary: main trade-off, risks, next step at 10×</td></tr></table>` },

    { id: 'estimation', title: 'Back-of-the-Envelope Estimation', html: `
      <p>1 day ≈ 1e5 s. Stay consistent:</p>
      <table><tr><th>Daily volume</th><th>≈ Avg QPS</th></tr>
        <tr><td>1M/day</td><td>10</td></tr><tr><td>100M/day</td><td>1,000</td></tr><tr><td>1B/day</td><td>10,000</td></tr></table>
      <p>Peak QPS ≈ average × 3–10.</p>
      <h3>Latency numbers</h3>
      <table><tr><th>Operation</th><th>Order of magnitude</th></tr>
        <tr><td>RAM access</td><td>~100 ns</td></tr>
        <tr><td>SSD random read</td><td>~100 µs</td></tr>
        <tr><td>Same-DC network RTT</td><td>~0.5 ms</td></tr>
        <tr><td>Redis GET (same DC)</td><td>&lt; 1 ms</td></tr>
        <tr><td>Indexed SQL read</td><td>~1–10 ms</td></tr>
        <tr><td>HDD seek</td><td>~10 ms</td></tr>
        <tr><td>Cross-continent RTT</td><td>~70–150 ms</td></tr></table>
      <p>Any synchronous cross-region coordination costs ~100 ms per round trip on the hot path.</p>
      <h3>From capacity to machines</h3>
      <ul><li>Stateless API ~1K rps/node → 100K peak QPS ≈ 100 nodes + headroom</li>
        <li>WebSocket gateway ~100K conns/node → 10M users ≈ 100 gateways</li>
        <li>Redis ~25–50 GB usable/node → 200 GB hot set ≈ 6–8 shards + replicas</li></ul>
      <p>Storage/day = objects/day × avg size. Bandwidth = QPS × response size. Egress often costs more than storage — CDN offload cuts origin egress.</p>` },

    { id: 'patterns', title: 'Reusable Architecture Patterns', html: `
      <p>Most questions are combinations of eight shapes:</p>
      <table><tr><th>#</th><th>Pattern</th><th>Shape</th><th>Examples</th></tr>
        <tr><td>1</td><td>CRUD service</td><td>client → API → cache → DB</td><td>profiles, catalog, URL shortener</td></tr>
        <tr><td>2</td><td>Async processing</td><td>API → DB → queue → workers</td><td>email, image processing</td></tr>
        <tr><td>3</td><td>Fanout</td><td>producer → queue → workers → many consumers</td><td>Twitter, notifications</td></tr>
        <tr><td>4</td><td>Shared log</td><td>producer → ordered log → many readers</td><td>Telegram channels, huge groups</td></tr>
        <tr><td>5</td><td>Real-time connection</td><td>client ↔ WS gateway ↔ service ↔ bus</td><td>chat, collaboration, games</td></tr>
        <tr><td>6</td><td>Media pipeline</td><td>upload → storage → queue → processors → CDN</td><td>YouTube, Netflix, Instagram</td></tr>
        <tr><td>7</td><td>Search</td><td>DB → CDC/Kafka → indexer → Elasticsearch → API</td><td>any full-text search</td></tr>
        <tr><td>8</td><td>CQRS-like</td><td>write model + denormalized read model</td><td>timelines, dashboards</td></tr></table>
      <p>Use the shared log when fanout copies get too expensive. <b>Full-text search:</b> at scale, keep it off the primary transactional DB — a dedicated engine (Elasticsearch/OpenSearch) isolates heavy scoring/aggregation load and gives real relevance ranking. For modest corpora, Postgres (<code>tsvector</code>/GIN) or MySQL full-text indexes are a legitimate first step; reach for a search cluster when result quality, facets, or query volume outgrow them.</p>` },

    { id: 'database', title: 'Databases & Sharding', html: `
      <table><tr><th>Type</th><th>Pick when</th><th>Examples</th></tr>
        <tr><td>SQL</td><td>transactions, constraints, relations, complex queries</td><td>PostgreSQL, MySQL</td></tr>
        <tr><td>Key-value</td><td>key→value at speed: sessions, config, cache, URL maps</td><td>Redis, DynamoDB</td></tr>
        <tr><td>Wide-column</td><td>huge scale, known access patterns, high write throughput</td><td>Cassandra, Bigtable</td></tr>
        <tr><td>Document</td><td>flexible nested documents</td><td>MongoDB</td></tr>
        <tr><td>Search engine</td><td>full-text search, ranking, filters</td><td>Elasticsearch</td></tr>
        <tr><td>Object storage</td><td>images, video, large files, backups</td><td>S3-style</td></tr></table>
      <p><b>Secondary indexes:</b> a local index lives per-shard — queries scatter-gather across all shards. A global index is partitioned by the indexed value — fast targeted lookups, at the cost of an extra write per update and (in most systems, e.g. DynamoDB GSIs) <b>eventual</b> consistency between base table and index. Some engines offer synchronous/transactional global indexes at a latency cost — name the engine before promising read-your-write on an index.</p>
      <h3>Sharding & replication</h3>
      <p><b>Replication</b> = same data in many places (availability, read scaling, DR). <b>Sharding</b> = different data on different machines (write/storage scaling). Good shard key: high cardinality, even distribution, matches access pattern. Bad: <code>country</code> when US is 70%.</p>
      <p><code>hash(key) % N</code> distributes well, but changing N remaps nearly everything. Solutions: consistent hashing, <b>logical shards</b> (4096 logical mapped onto 100 physical), directory-based routing. <b>Live reshard:</b> dual-write → backfill → verify (row counts, checksums) → cut reads → cut writes → retire.</p>` },

    { id: 'caching', title: 'Caching Cheat Sheet', html: `
      <p>Common path: Application → Redis → (miss) → Database.</p>
      <h3>Strategies</h3>
      <ul>
        <li><b>Cache-aside</b> (most common) — read: get / miss / load DB / set; write: update DB, then delete the key; next read repopulates.</li>
        <li><b>Write-through</b> — writes go through the cache synchronously.</li>
        <li><b>Write-behind</b> — cache flushes to DB asynchronously; fastest, real durability risk.</li>
      </ul>
      <h3>Problems and answers</h3>
      <ul>
        <li><b>Stampede</b> — a hot key expires and 100K requests hit the DB at once → request coalescing / single-flight, stale-while-revalidate, randomized (jittered) TTLs.</li>
        <li><b>Hot key</b> — one entity overwhelms one shard → local in-process cache, key replication, replicas, CDN, coalescing.</li>
        <li><b>Penetration</b> — requests for nonexistent IDs always miss → negative caching, Bloom filter.</li>
        <li><b>Cache death</b> — Redis dies, DB gets 100× → replication/failover, local cache, rate limiting, load shedding.</li>
      </ul>` },

    { id: 'kafka', title: 'Kafka & Queues', html: `
      <p><b>Why a queue:</b> decouple producer/consumer, absorb spikes, async processing, retries, fanout, event streaming. Bad answer: "because the system is large."</p>
      <ul>
        <li>Mental model: topic → partitions. <b>Order guaranteed within one partition only.</b></li>
        <li>Partition key = the entity whose ordering matters (<code>conversation_id</code>, <code>user_id</code>).</li>
        <li>Consumer group: each partition consumed by exactly one consumer → parallelism capped by partition count.</li>
        <li>Slow consumer: lag grows → more partitions + consumers, batching, optimize, backpressure.</li>
      </ul>
      <h3>Delivery semantics</h3>
      <ul>
        <li><b>At-least-once</b> (default): a worker that crashes before committing its offset causes redelivery → make consumers <b>idempotent</b>.</li>
        <li><b>At-most-once:</b> commit the offset before processing — no dupes, possible loss.</li>
        <li><b>Exactly-once (EOS):</b> real, but <b>only within Kafka</b> — the idempotent producer plus transactions give atomic read-process-write across Kafka topics (what Kafka Streams uses). It does <b>not</b> extend to an external database or API on its own; end-to-end you still need an idempotent sink or the transactional-outbox pattern.</li>
      </ul>
      <p>Kafka <b>can</b> be an authoritative, durable event log — it's the backbone of event-sourcing and log-as-source-of-truth designs (retention can be infinite; log compaction keeps the latest value per key). The real caveat is that it's not a <b>queryable</b> store: you can't index or ad-hoc query it, so derive materialized read models (in a DB, cache, or search engine) for lookups.</p>
      <p class="srcnote"><b>Last reviewed:</b> 2026-08 · Kafka EOS &amp; transactions: <a href="https://kafka.apache.org/documentation/#semantics">kafka.apache.org — delivery semantics</a>.</p>` },

    { id: 'consistency', title: 'Consistency, Transactions & Multi-Region', html: `
      <p><b>Strong consistency</b> (all reads see the write): payments, inventory, balances. <b>Eventual</b> (replicas briefly disagree): feeds, likes, view counts, analytics.</p>
      <p><b>CAP:</b> during a network partition, choose C or A — always name the operation and failure scenario. <b>PACELC:</b> if Partitioned → A vs C; Else (normal) → Latency vs Consistency. The else-half is what most multi-region debates are actually about.</p>
      <ul>
        <li><b>Idempotency:</b> client sends <code>Idempotency-Key: abc123</code>; server stores key→result; retries return the same result.</li>
        <li><b>Optimistic concurrency:</b> <code>UPDATE ... WHERE id=? AND version=5</code> — zero rows updated means someone else changed it.</li>
        <li><b>Pessimistic locking:</b> <code>SELECT ... FOR UPDATE</code> — for frequent conflicts, reduces concurrency.</li>
        <li><b>Distributed transactions:</b> <b>2PC</b> gives real atomicity across resources but blocks on the coordinator (a failed coordinator can leave participants locked), so it's a poor fit for high-throughput, cross-service, or cross-region work — it's still reasonable within one org for a bounded set of XA-capable resources. For long-running, service-spanning workflows prefer a <b>saga</b> (Create Order → Reserve Inventory → Charge Payment → Ship; compensate on failure): it trades atomicity for availability, so you must design compensations and accept temporarily visible intermediate states.</li>
      </ul>
      <h3>Multi-region</h3>
      <p>Start by asking <b>why</b>: latency, DR, availability, or <b>data residency</b> (frequently the real driver). <b>Active-passive:</b> simple, failover takes time. <b>Active-active:</b> write anywhere, hard (conflicts, ordering, uniqueness, lag). Conflict toolbox: last-write-wins, version vectors, CRDTs, app-level merge, or per-key single-writer ownership. <b>Home region</b>: each user/conversation owned by one region; writes route to owner, reads replicate globally. Quantify <b>RPO</b> (data loss) and <b>RTO</b> (recovery time).</p>` },

    { id: 'reliability', title: 'Reliability & Security', html: `
      <ul>
        <li><b>Timeout</b> — every network call needs one; a hanging dependency piles up threads.</li>
        <li><b>Retry</b> — transient failures only; never retry invalid/auth/permanent errors.</li>
        <li><b>Exponential backoff + jitter</b> — 100 → 200 → 400 → 800 ms.</li>
        <li><b>Retry amplification</b> — client ×3, gateway ×3, service ×3 = 27× load. Retry at one layer, cap attempts, use retry budgets (≤10%), honor <code>Retry-After</code>.</li>
        <li><b>Circuit breaker</b> — CLOSED → OPEN → HALF-OPEN.</li>
        <li><b>Backpressure</b> — autoscale consumers, throttle producers, drop low-priority, load shedding.</li>
        <li><b>Bulkhead</b> — separate resource pools so one failure can't exhaust everything.</li>
        <li><b>Graceful degradation</b> — recommendations down → show popular items; the core keeps working.</li>
      </ul>
      <h3>Security (one paragraph prevents the "you never mentioned auth" ding)</h3>
      <p><b>Edge:</b> TLS everywhere, WAF, rate limiting; authenticate at the gateway (OAuth2/OIDC, short-lived access + rotating refresh tokens). <b>Internal:</b> pass identity via signed headers or mTLS; authorize per service; never trust client-supplied IDs (IDOR). <b>Data:</b> encrypt PII at rest, minimize collection, secrets in a secret manager. <b>Compliance:</b> data residency, right-to-be-forgotten (propagate deletes to caches/backups), audit logs.</p>` },

    { id: 'operations', title: 'Observability, Migrations & Data Movement', html: `
      <p>Naming these unprompted is a strong senior signal — they're what turns a happy-path diagram into something operable.</p>
      <h3>Observability &amp; SLOs</h3>
      <ul>
        <li><b>Three signals:</b> metrics (cheap, aggregate — rates, latency histograms, saturation), logs (structured, sampled at high volume), traces (one request across services — propagate a trace/correlation ID at the edge).</li>
        <li><b>Golden signals</b> (per service): latency, traffic, errors, saturation. Alert on <b>symptoms</b> users feel, not every cause.</li>
        <li><b>SLI → SLO → error budget:</b> an SLI is the measured ratio (e.g. % of requests &lt; 200 ms); the SLO is the target (99.9%); the <b>error budget</b> is <code>1 − SLO</code> — the allowed failure that lets you trade reliability for release velocity. Quote latency SLOs as percentiles (p99), never averages.</li>
        <li>"Three nines" ≈ 43 min/month down; "four nines" ≈ 4.3 min/month. Availability multiplies across hard dependencies in series.</li>
      </ul>
      <h3>Schema migration (zero-downtime)</h3>
      <p>Never rename/drop a column in one deploy while old code runs. Use <b>expand → migrate → contract</b>: add the new column/table (nullable, no rewrite); dual-write old+new and backfill in batches; move reads to the new shape once backfill + verification pass; then stop writing the old and drop it in a later deploy. Keep every intermediate step <b>backward-compatible</b> so app and DB can deploy independently and you can roll back. Add indexes concurrently; guard against long locks on large tables.</p>
      <h3>CDC &amp; the outbox pattern</h3>
      <p>The classic bug: write to the DB <b>and</b> publish an event as two steps — a crash between them loses the event or emits a phantom. Fix with the <b>transactional outbox</b>: in one local DB transaction, write the business row <i>and</i> an <code>outbox</code> row; a relay (poller or CDC) reads the outbox and publishes to Kafka, marking rows sent. <b>CDC</b> (e.g. Debezium tailing the WAL/binlog) streams committed row changes with no app code and no dual-write — ideal for feeding search indexes, caches, read models, and data lakes. Both give at-least-once delivery → downstream consumers must be idempotent.</p>
      <h3>Dead-letter queues &amp; replay</h3>
      <p>A message that keeps failing must not block its partition or retry forever. After N attempts (with backoff), route it to a <b>DLQ</b> with the failure reason and original metadata; alert on DLQ depth. Distinguish <i>transient</i> failures (retry in place) from <i>poison</i> messages (bad data — straight to DLQ, don't waste retries). <b>Replay:</b> once the bug/dependency is fixed, re-inject DLQ messages to the source topic or a dedicated retry topic — which is safe precisely because consumers are idempotent. Kafka also lets you replay by resetting a consumer group's offset (e.g. to rebuild a corrupted read model).</p>` },

    { id: 'classification', title: 'Question Classification', html: `
      <p>Classify the question, then compose the building blocks:</p>
      <table><tr><th>Type</th><th>Examples</th><th>Think</th></tr>
        <tr><td>Feed</td><td>Twitter, Instagram, Facebook</td><td>fanout, timeline store, ranking, celebrity, cursor pagination</td></tr>
        <tr><td>Messaging</td><td>WhatsApp, Telegram, Slack</td><td>WebSocket, persistence, ordering, delivery, offline, groups</td></tr>
        <tr><td>Media</td><td>Netflix, YouTube, TikTok</td><td>object storage, transcoding, segments, CDN, adaptive bitrate</td></tr>
        <tr><td>Scarce inventory</td><td>Ticketmaster, hotels, airlines</td><td>concurrency, reservation, expiration, strong consistency, idempotency</td></tr>
        <tr><td>Location</td><td>Uber, Maps, Yelp</td><td>geo index, location updates, nearby search, routing</td></tr>
        <tr><td>Large async pipeline</td><td>crawler, notifications, metrics</td><td>Kafka, workers, partitioning, retry, DLQ, backpressure</td></tr></table>` },

    { id: 'walkthroughs', title: 'Question Pattern Summaries', html: `
      <p class="faint" style="font-size:12.5px">Compressed reference cards — each names the data model, core flow, and the one deep dive an interviewer usually pushes on. Expand the one that matches your question into the full framework (reqs → estimates → API → data model → architecture → deep dive → failure modes → trade-offs).</p>
      <h3>URL Shortener</h3>
      <p>POST long → short; GET short → redirect. <code>ShortURL(short_code, long_url, created_at, expires_at, user_id)</code>; access pattern is short_code→long_url, so KV fits. <b>IDs:</b> auto-increment + Base62 (but sequential = enumerable), random Base62 (INSERT IF NOT EXISTS, retry on collision), or Snowflake. Read: Client → CDN/LB → Redirect Service → Redis → (miss) → DB. Shard by <code>hash(short_code)</code>. <b>301</b> permanent — browsers/CDNs cache aggressively, so you see fewer hits and lose per-click analytics; <b>302</b> found — by default not cached, so most requests reach you (better for analytics and revocation). Both are cache-controllable: a <code>301</code> can be limited with <code>Cache-Control: max-age</code>, and a <code>302</code> with an explicit <code>Cache-Control</code> can be cached too — the verb sets the default, the header sets the truth.</p>
      <h3>Twitter / X — feed generation</h3>
      <p>Fanout-on-read (cheap writes, slow reads) vs fanout-on-write (fast reads, celebrity write amplification) vs <b>hybrid</b> (strongest). Store tweet IDs, hydrate from cache. Cursor pagination: <code>WHERE (created_at, id) &lt; (:ts, :id)</code>. Deep dive: "What happens when Ronaldo posts?"</p>
      <h3>WhatsApp — messaging</h3>
      <p>WebSocket ↔ Gateway → Message Service → Store. <b>Ordering is owned by the sequencer, not the pipe</b> — per-conversation monotonic seq at persist time; clients render by seq, detect gaps. Offline: fetch after last seq. At-least-once + dedup by <code>(conversation_id, seq)</code>.</p>
      <p><b>Acknowledgement ladder</b> (the ticks): <i>sent</i> = server persisted it (server→sender ack); <i>delivered</i> = recipient's device received it (device→server ack, relayed to sender); <i>read</i> = recipient opened it (read receipt). Each stage is a separate ack the recipient/server emits; the sender advances the UI on each. Delivery/read acks let the server drop a message from the recipient's pending-delivery queue and stop retrying. Keep acks idempotent — a re-delivered message must not double-count.</p>
      <h3>Telegram — fanout ladder</h3>
      <div class="mnemonic">🗣 <b>Say it:</b> The bigger the audience, the less you copy — push → fanout → shared log → pull.</div>
      <pre>2-person chat   → push delivery
small group     → push / fanout
huge group      → shared log + notify
massive channel → pull from shared log</pre>
      <h3>Payment System</h3>
      <p>Idempotency key → never charge twice. State machine PENDING→AUTHORIZED→CAPTURED (+FAILED, REFUNDED). Immutable double-entry ledger (<code>sum(debits)=sum(credits)</code>). Processor <b>timeout ≠ failure</b> → idempotency + status query + reconciliation job.</p>
      <p><b>Reconciliation</b> closes the gap between your ledger and the processor/bank's truth: ingest the processor's settlement report (file or API) on a schedule, then match each external transaction to a ledger entry by idempotency/processor reference. Classify the diffs — <i>matched</i>, <i>missing on our side</i> (processor charged, we never recorded → replay/repair), <i>missing on theirs</i> (we think it captured, they don't → re-query, then void), <i>amount/fee mismatch</i>. Auto-resolve the mechanical cases (fees, rounding, timing across a day boundary); queue the rest for manual review. This is also how you catch a timed-out charge that actually succeeded. Interviewers at fintechs specifically look for "I'd run daily reconciliation against the processor" — see Fintech in the behavioral deck.</p>
      <h3>Ticketmaster — scarce inventory</h3>
      <p>Users → Waiting Room → Rate Limiter → Ticket Service → Seat Inventory → Payment. Seat AVAILABLE→HELD→SOLD. Prevent double-booking with <code>UPDATE seat SET status='HELD', hold_expires_at=now()+'10 min' WHERE seat_id=? AND status='AVAILABLE'</code> — 1 row updated = you won the hold. DB conditional writes beat distributed locks for source-of-truth inventory.</p>
      <p><b>Hold expiry</b> — don't trust a client to release a seat it abandoned. Store <code>hold_expires_at</code> and make expiry authoritative <b>at read time</b>: any query treats <code>status='HELD' AND hold_expires_at &lt; now()</code> as available, and the conditional purchase/hold write includes that clause so a stale hold is atomically reclaimed. A background sweeper (or Redis key-TTL / a delay queue firing at expiry) flips lapsed rows back to AVAILABLE for cleanliness and to refresh the UI — but correctness lives in the read/write predicate, not the sweeper, so a late sweep never lets two buyers hold the same seat. On successful payment, HELD→SOLD only <code>WHERE status='HELD' AND hold_expires_at &gt; now()</code>; if the hold lapsed mid-payment, refund/redirect rather than overselling.</p>
      <h3>Rate Limiter</h3>
      <p><b>Token bucket</b> (capacity + refill) = best general-purpose. Atomicity: Redis Lua script for read→refill→decrement→write, keeping the check-and-decrement on one node. Reject with 429 + Retry-After.</p>
      <p><b>Multi-region:</b> do <b>not</b> put a single synchronous global counter on the hot path — a cross-region round trip per request adds ~100 ms and creates a single point of failure. Instead: (a) <b>local limits</b> — each region enforces against its own Redis, so a global limit N is split as N/regions (simple, but bursts can briefly exceed N); (b) <b>regional quota allocation</b> — a background controller hands each region a slice of the global budget and rebalances every few seconds based on observed demand (approximate, self-correcting); or (c) <b>home-region routing</b> — pin each key (user/tenant) to an owning region and enforce there, so its limit is exact while other regions forward or cache. Reserve a strict global counter for cases that truly require exactness (e.g. hard billing caps), and accept its latency.</p>
      <h3>Job Scheduler</h3>
      <p>Claim atomically: <code>SELECT ... FOR UPDATE SKIP LOCKED</code> or conditional PENDING→CLAIMED. Leases + heartbeat + fencing token (slow ≠ dead). At-least-once → idempotent jobs.</p>
      <p><b>Timing — firing at the right moment.</b> Store <code>run_at</code>; workers poll <code>WHERE run_at &lt;= now() AND status='PENDING'</code> indexed on <code>run_at</code>. Polling interval bounds precision: a 1 s poll means "runs within ~1 s after due," i.e. <b>at-least-after, never-before</b> — good enough for most jobs. For sub-second or millions of near-term timers, layer a <b>timer wheel</b>/in-memory heap (or Redis sorted set keyed by <code>run_at</code>, or a broker delay queue) in front of the durable store; the DB stays the source of truth so nothing is lost on crash. Watch: <i>clock skew</i> across nodes (use one authority — the DB's <code>now()</code> — not each worker's wall clock); <i>missed ticks</i> after downtime (decide per job: fire every backlog occurrence, coalesce to one catch-up run, or skip stale ones); <i>thundering herd</i> when many jobs share a round timestamp (jitter <code>run_at</code>); and recurring jobs — compute the next <code>run_at</code> only after a run completes so a slow run can't overlap itself.</p>` },

    { id: 'quick-patterns', title: 'Quick Patterns (other questions)', html: `
      <ul>
        <li><b>Typeahead:</b> precompute top-K completions per prefix (trie/prefix table), serve from cache/edge — ~50 ms budget means no DB on the hot path.</li>
        <li><b>Leaderboard:</b> Redis sorted set (ZADD, ZREVRANGE, ZRANK); snapshot to a DB for durability.</li>
        <li><b>Event aggregation:</b> Kafka → windowed stream aggregation → store. A stream processor (Kafka Streams, Flink) gives true exactly-once <i>within</i> the pipeline via transactions/checkpoints; writing out to an external store still needs an <b>idempotent sink</b> (or transactional two-phase commit sink) for end-to-end exactly-once. Late events → watermarks + allowed lateness.</li>
        <li><b>Distributed lock:</b> <code>SET key val NX PX ttl</code> or etcd/ZooKeeper lease. A lock alone is not correctness — pair with fencing tokens, or use conditional writes.</li>
        <li><b>Collaborative editing:</b> OT (central sequencer) or CRDTs (offline-friendly). Presence + sticky WebSockets.</li>
        <li><b>Matching engine:</b> sequence all orders for a symbol through one ordered log; single-threaded in-memory matcher (price-time priority). HA = replicate + replay.</li>
      </ul>` },

    { id: 'whatif', title: 'Follow-Ups & What-If Bank', html: `
      <ul>
        <li><b>Traffic ×10?</b> Horizontal scaling, cache, partition DB, queue expensive work, CDN.</li>
        <li><b>Traffic ×100 instantly?</b> Rate limiting, waiting room, queue, backpressure, load shedding — autoscaling alone is too slow.</li>
        <li><b>DB too large?</b> Partition/shard, archive, hot/cold split, read replicas.</li>
        <li><b>Reads dominate?</b> Cache, read replicas, denormalized read model, CDN.</li>
        <li><b>Writes dominate?</b> Sharding, batching, append logs, async processing.</li>
        <li><b>Dependency slow?</b> Timeout, circuit breaker, fallback, bulkhead.</li>
        <li><b>Processed twice?</b> Idempotent consumer, dedup key, conditional write.</li>
        <li><b>Out of order?</b> Partition by entity, sequence/version numbers, reorder or drop stale.</li>
        <li><b>Region fails?</b> Health detection, global LB rerouting, replicated data, failover — quantify RPO & RTO.</li>
        <li><b>One shard hot?</b> Better shard key, split the logical shard, replicate reads, cache, special-case celebrity.</li>
      </ul>
      <p><b>IDs:</b> UUID, Snowflake (timestamp + machine + sequence), DB sequences. <b>Pagination:</b> cursor, never large OFFSET.</p>` },

    { id: 'senior-close', title: 'Senior Thinking, Mistakes & Close', html: `
      <h3>A senior answer discusses four things</h3>
      <ul>
        <li><b>Ownership</b> — which component owns this data? (Payment Service owns payment state; others consume a <code>PaymentCompleted</code> event.)</li>
        <li><b>Boundaries</b> — avoid mega-services: Order, Inventory, Payment, Shipping.</li>
        <li><b>Failure</b> — for every remote call: can it fail? time out? return twice? arrive out of order?</li>
        <li><b>Trade-offs</b> — "I choose eventual consistency because stale counts for seconds are acceptable and it avoids cross-region coordination."</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Buzzword architecture (drawing everything with no "why")</li>
        <li>Demanding everything — it's all trade-offs</li>
        <li>Kafka for synchronous request-response</li>
        <li>Distributed transactions across every service</li>
        <li>"NoSQL because it scales" without the access pattern</li>
        <li>Ignoring failure after the happy path</li>
      </ul>
      <div class="callout">Closing: "The main trade-off is <b>X versus Y</b>. We optimize for X because the requirements say Y is acceptable. The largest remaining risks are <b>A and B</b>. If scale increased 10×, I would next address <b>C</b>."</div>
      <p><b>One sentence:</b> a good system-design interview isn't "can I design Twitter's exact architecture?" It's "can I identify the requirements, find the bottleneck, make reasonable trade-offs, and explain how the system evolves as scale increases?"</p>` },
  ],

  /* =================== BEHAVIORAL =================== */
  behavioral: [
    { id: 'framework', title: 'Universal Framework', html: `
      <p>Behavioral interviews are scored against a rubric. Each question maps to a competency — ownership, conflict, ambiguity, leadership, delivery, growth — and the interviewer is writing down evidence they can quote in the debrief. Your job is to hand them quotable evidence.</p>
      <h3>Strong evidence is:</h3>
      <ul>
        <li><b>Specific</b> — one real event, with names of systems and stakes</li>
        <li><b>Recent</b> — senior stories from the last 2–3 years</li>
        <li><b>Quantified</b> — scale, impact, results in numbers</li>
        <li><b>Yours</b> — your actions separable from the team's</li>
        <li><b>Reflected</b> — what changed in how you operate afterward</li>
      </ul>
      <p>Expect drill-downs three levels deep ("What did you do?", "What did they say back?", "What would you do differently?"). Invented stories collapse at level two or three.</p>
      <h3>45-minute pacing</h3>
      <table><tr><th>Time</th><th>Activity</th></tr>
        <tr><td>0–5</td><td>Intro + your 90-second pitch</td></tr>
        <tr><td>5–35</td><td>3–5 stories, ~6–7 min each including follow-ups</td></tr>
        <tr><td>35–40</td><td>Their remaining probes / your clarifications</td></tr>
        <tr><td>40–45</td><td>Your questions for them</td></tr></table>
      <p>Keep each uninterrupted answer to 2–3 minutes, then stop and invite follow-ups. Long monologues read as poor self-awareness.</p>` },

    { id: 'star', title: 'STAR Method, Senior Edition', html: `
      <table><tr><th>Beat</th><th>Share</th><th>What belongs there</th></tr>
        <tr><td>Situation</td><td>~10%</td><td>2–3 sentences: context, team size, your role, stakes</td></tr>
        <tr><td>Task</td><td>~10%</td><td>why it was hard, why it landed on you</td></tr>
        <tr><td>Action</td><td>~60%</td><td>Mostly <b>I</b> — your decisions, reasoning, alternatives you rejected — while crediting the team for what they did</td></tr>
        <tr><td>Result</td><td>~15%</td><td>Numbers: business metric &gt; technical metric &gt; activity</td></tr>
        <tr><td>+Reflection</td><td>~5%</td><td>what changed in how you operate — the senior fifth beat</td></tr></table>
      <p>The single most common failure is a three-minute Situation. Compress ruthlessly: "We were a 6-person team owning the order pipeline at ~40K orders/min; a regulatory deadline gave us 8 weeks for a migration normally scoped at 6 months." That's a complete Situation.</p>
      <p>Signpost the Action: "There were three things I did. First…" — keeps you structured and easy to take notes on.</p>
      <p><b>"I" vs "we":</b> the interviewer can only score <i>you</i>, so make your own decisions and reasoning unmistakable — but a wall of "I" on team work reads as credit-grabbing. Own your part precisely and credit the team explicitly: "I made the call to shard by tenant and drove the rollout; two engineers I paired with built the backfill tooling." Ownership and generosity together are the senior signal, not either alone.</p>
      <p><b>Results hierarchy:</b> "reduced checkout failures 0.8% → 0.05%, worth ~$2M/quarter" &gt; "improved reliability" &gt; "worked very hard on reliability."</p>
      <div class="callout">Confidentiality: always anonymize the <b>source</b> — "at a previous employer, a mid-size payments platform…". For non-sensitive operational metrics you can keep the number fairly sharp (checkout failures ~0.8% → 0.05%). For anything confidential — absolute revenue, user counts, transaction volumes, unreleased figures — <b>round or normalize</b> instead: use a ratio, a percentage improvement, or an order of magnitude ("cut infra cost ~40%", "tens of millions of DAU"), not the exact protected figure. A relative result is usually more impressive anyway, and it keeps you on the right side of an NDA — interviewers respect a candidate who visibly protects their current employer's data.</div>` },

    { id: 'storybank', title: 'Story Bank & Matrix', html: `
      <p>Prepare <b>8 stories</b> before interviewing anywhere. Write each as a bullet card, not a script: one-line title, context numbers, 3 key actions, result numbers, reflection, categories covered. Rehearse aloud once per story.</p>
      <ol>
        <li>The biggest system you designed or scaled</li>
        <li>A production incident you owned end to end</li>
        <li>A technical disagreement you resolved with data</li>
        <li>A project that failed or was cancelled</li>
        <li>Someone you mentored to a visible outcome</li>
        <li>A cross-team dependency you unblocked</li>
        <li>A time you pushed back on scope or a deadline</li>
        <li>Something you drove that nobody asked for</li>
        <li>(<b>EM track only</b>) A people-management call — hiring-bar decision, managing an underperformer / PIP, headcount or team-structure trade-off</li>
        <li>(<b>Staff+ IC track</b>) A technical-strategy or org-wide-influence call — a multi-team standard you set, a build/buy/deprecate decision, aligning several teams behind one direction <i>without</i> managing them</li>
      </ol>
      <p class="faint" style="font-size:12.5px">Match story #9 to the ladder you're interviewing for: personnel/PIP examples belong to the <b>EM</b> track. For a Staff+ <b>IC</b> loop, lead with technical judgment and influence-without-authority instead — a PIP story there answers a question they didn't ask.</p>
      <h3>The Story Matrix</h3>
      <p>List your real 8 (or 9) stories down the side and check off every competency each genuinely demonstrates (Conflict, Failure, Leadership, Ambiguity, Deadline, Influence, Growing others). <b>Every column needs ≥2 checks; every row needs ≥2 checks.</b> In the room you never think "which story fits?" from scratch — you already know the two candidates for every column.</p>` },

    { id: 'categories', title: 'Question Categories', html: `
      <p>For each: what it tests, the shape of a strong answer, the red flag.</p>
      <h3>"Tell me about yourself"</h3>
      <p>90 seconds: present (role + scope in numbers) → past (two highlights relevant to this job, with results) → future (why this role, specifically). Red flag: a chronological résumé walk from university.</p>
      <h3>Conflict / disagreement</h3>
      <p>Tests: do you disagree with data and empathy, and commit after. Shape: understood their position first, brought data/prototype, resolution, relationship intact. If it went against you: committed fully anyway. Red flag: villain narrative; "I turned out to be right."</p>
      <h3>Failure / mistake</h3>
      <p>Shape: a real failure with real cost; name your share plainly; immediate fix then the <b>systemic</b> prevention (postmortem, guardrail, alert); evidence it never recurred. Red flag: fake failures ("I care too much").</p>
      <h3>Most challenging project / proudest achievement</h3>
      <p>Pick the story with the richest trade-off discussion — what you optimized for, what you consciously sacrificed. Red flag: hard because of long hours, not hard decisions.</p>
      <h3>Leadership / influence without authority</h3>
      <p>Aligned people who didn't report to you — shared goal framing, data, a prototype, credit given away. Red flag: "leadership" that's just doing your job well.</p>
      <h3>Ambiguity / incomplete requirements</h3>
      <p>Clarified the actual problem, defined success metrics and milestones, timeboxed unknowns, communicated early. Red flag: paralysis, or charging ahead without validating.</p>
      <h3>Tight deadline / prioritization</h3>
      <p>What you cut and why that piece, who you informed, the risk you accepted, how you tracked it. Red flag: "we just worked weekends."</p>
      <h3>Feedback (receiving & giving)</h3>
      <p>Receiving: specific uncomfortable feedback, honest first reaction, what you changed, the measurable difference. Giving: direct, kind, actionable, in private, followed up. Red flag: feedback you "didn't really agree with"; public callouts framed as courage.</p>
      <h3>Mentoring / growing others</h3>
      <p>A specific person, their gap, your method (pairing, delegated ownership with a safety net), and their outcome. Red flag: "I'm always available for questions" — availability isn't development.</p>
      <h3>Strengths & weaknesses</h3>
      <p>Weakness: a real one, the mitigation system you built, evidence of progress: "I over-engineer under uncertainty; I now timebox a design spike and force a walking skeleton first — cut a design phase from 3 weeks to 1." Red flag: the humblebrag.</p>` },

    { id: 'signals', title: 'Senior-Level Signals', html: `
      <p>What separates a senior/staff answer from mid-level on the same question:</p>
      <ul>
        <li><b>Scope</b> — team/org level, not task level. "I changed how our five teams do schema migrations" beats "I completed my migration ticket."</li>
        <li><b>Numbers everywhere</b> — scale (QPS, users, team size), effort (weeks, headcount), results (latency, incident rate, revenue, cost). Give a defensible order of magnitude if you don't remember exactly.</li>
        <li><b>Trade-offs named</b> — every real decision sacrificed something; say what you gave up and why.</li>
        <li><b>Multiplier effects</b> — documentation, tooling, runbooks, review standards, mentoring. "I made sure this outlived me: runbook + two trained on-call engineers."</li>
        <li><b>Judgment under uncertainty</b> — decisions with incomplete information, plus how you de-risked (spike, feature flag, staged rollout, reversible first step).</li>
        <li><b>Ownership of the boring parts</b> — migrations, rollout plans, deprecations, docs. Claiming the glamorous design while others cleaned up is a mid-level tell.</li>
      </ul>` },

    { id: 'companies', title: 'Company Frameworks', html: `
      <h3>Amazon — Leadership Principles</h3>
      <p>The archetype of rubric-driven interviewing. Each interviewer owns 2–3 principles and wants ~2 stories each; the <b>Bar Raiser</b> drills deepest. Interviewers compare notes in the debrief, so <b>minimize reuse across the loop</b> — bring enough distinct stories that you rarely repeat one. It's fine to reuse a story when a question genuinely calls for it (draw out a different facet — the conflict angle for one interviewer, the ownership angle for another); just don't lean on two or three stories for the whole loop. This is why you want 8+ distinct stories here more than anywhere. 16 principles (14 original + Strive to be Earth's Best Employer & Success and Scale Bring Broad Responsibility, added 2021).</p>
      <h3>Google</h3>
      <p>Scored on cognitive ability, leadership, role knowledge, and "Googleyness" (collaboration, intellectual humility). Expect hypotheticals alongside past-behavior — answer with a framework first, then anchor: "…and in practice, when this happened to me last year, I…"</p>
      <h3>Meta</h3>
      <p>Signal is impact and directness: moving fast, resolving conflict head-on, self-awareness about failures. Quantified impact per half is the native language.</p>
      <h3>Netflix</h3>
      <p>The "Keeper Test": would your manager fight to keep you? Blunt, specific self-assessment and genuine comfort with direct feedback. Candor is read as a strength. Red flag: hedged, consensus-seeking answers, or feedback stories where criticism gets buried in praise.</p>
      <h3>Fintech / Exchanges</h3>
      <p>Weight two competencies harder: <b>incident transparency</b> (disclose fast, accurately, without spin) and <b>risk/compliance judgment</b> (escalate control-relevant things even when it slows you). Have a reconciliation/data-correctness story and a "found a control gap and closed it" story ready.</p>
      <p><b>Everywhere else:</b> read the company's published values before the loop and map two stories to each — the rubric is usually a light rewrite of that page.</p>
      <p class="srcnote"><b>Last reviewed:</b> 2026-08 · Company processes change — reconfirm against the official page before your loop. Amazon Leadership Principles (16, incl. the two added July 2021): <a href="https://www.amazon.jobs/content/en/our-workplace/leadership-principles">amazon.jobs/leadership-principles</a>. Treat the Google/Meta/Netflix notes as widely-reported patterns, not official rubrics.</p>` },

    { id: 'phrases', title: 'Phrase Bank & Questions to Ask', html: `
      <h3>Lines that raise your level</h3>
      <ul>
        <li>"The core tension was X versus Y. I chose X because…"</li>
        <li>"I disagreed, so I brought data instead of opinions: …"</li>
        <li>"To de-risk it, I shipped a reversible first step behind a flag."</li>
        <li>"Three things I did. First…"</li>
        <li>"The result: p99 from 800 ms to 120 ms, and incidents from ~5/month to under 1."</li>
        <li>"My share of that failure was the design review I skipped."</li>
        <li>"I made sure it outlived me: runbook, dashboards, and two trained owners."</li>
        <li>"Honest answer: I didn't consider that at the time. What I'd do today is…"</li>
        <li>"Let me regroup for a second." (recovers better on video than dead air)</li>
      </ul>
      <p>Pause two seconds before answering — reads as thoughtfulness, not weakness.</p>
      <h3>Questions to ask (2–3 per interviewer)</h3>
      <ul>
        <li><b>Peer engineer:</b> What does on-call actually look like week to week? How do design decisions get made — RFC, review board, strongest voice? What's the part of the system everyone avoids touching?</li>
        <li><b>Hiring manager:</b> What does success look like at 6 and 12 months? Biggest team challenge now? How does this role grow?</li>
        <li><b>Skip-level / director:</b> Where is the org investing over the next year? How does the roadmap connect?</li>
      </ul>
      <p>Avoid: anything answerable from the website; compensation (outside recruiter); questions you don't care about. Never say "you covered everything."</p>` },

    { id: 'tricky-mistakes', title: 'Tricky Moments, Mistakes & Core Idea', html: `
      <h3>Tricky moments</h3>
      <ul>
        <li><b>"Why the employment gap?"</b> — brief, factual, no apology; pivot to readiness.</li>
        <li><b>"Expected compensation?" (early)</b> — "I'd like to understand the role's scope first — happy to talk numbers once we both see a fit. What's the band for this level?"</li>
        <li><b>"A time you [never did]"</b> — bridge honestly: "I haven't led a 20-person org, but the closest analogue is coordinating four teams on X — here's what transfers." Name the gap yourself.</li>
        <li><b>"Interviewing elsewhere?"</b> — honest and brief; mild urgency doesn't hurt.</li>
        <li><b>A tech you don't know</b> — say so in one sentence, then show how you'd close the gap; never bluff.</li>
        <li><b>You blank</b> — "Good question — give me a moment to pick the best example." Ten seconds of silence is recoverable; a rambling non-story is not.</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Badmouthing an employer</li>
        <li>"We" throughout with no clear "I" — they can only score you; own your part (while still crediting the team)</li>
        <li>No numbers anywhere — quantified results are more memorable and credible, and an unquantified claim is easy for a skeptical interviewer to discount. A defensible estimate ("roughly 40% faster") beats none; not every point needs a metric.</li>
        <li>Three-minute Situations; robotic delivery</li>
        <li>The fake weakness</li>
        <li>Fighting the follow-up — drill-downs are the interview working as intended</li>
        <li>Answering a different question than asked</li>
        <li>Inventing stories — one collapse poisons every answer</li>
      </ul>
      <div class="callout">One sentence: behavioral interviews test whether your past behavior is evidence of senior judgment — <b>bring evidence, not adjectives.</b></div>` },
  ],
};
