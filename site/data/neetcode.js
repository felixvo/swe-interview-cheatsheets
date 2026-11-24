/* NeetCode 150 — one-liner + Python solution for each problem.
 * P(category, title, url, difficulty, oneLiner, complexity, code)
 * Code is plain Python; avoid backslashes and backticks inside it (template literal). */
const NEETCODE = [];
const P = (c, t, u, d, o, x, s) => NEETCODE.push({ c, t, u, d, o, x, s: s.replace(/^\n/, '').replace(/\s+$/, '') });
const LC = slug => 'https://leetcode.com/problems/' + slug + '/';

/* ── Arrays & Hashing ── */
P('Arrays & Hashing', 'Contains Duplicate', LC('contains-duplicate'), 'E',
  'Dump into a set — if the set is smaller than the list, something repeated.',
  'O(n) time · O(n) space', `
def containsDuplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False`);

P('Arrays & Hashing', 'Valid Anagram', LC('valid-anagram'), 'E',
  'Same letters with the same counts — compare two Counters.',
  'O(n) time · O(1) space (26 letters)', `
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    count = [0] * 26
    for a, b in zip(s, t):
        count[ord(a) - ord('a')] += 1
        count[ord(b) - ord('a')] -= 1
    return all(c == 0 for c in count)`);

P('Arrays & Hashing', 'Two Sum', LC('two-sum'), 'E',
  'Before storing x, ask the map "have I seen target − x?"',
  'O(n) time · O(n) space', `
def twoSum(nums, target):
    index = {}                      # value -> index
    for i, n in enumerate(nums):
        if target - n in index:
            return [index[target - n], i]
        index[n] = i`);

P('Arrays & Hashing', 'Group Anagrams', LC('group-anagrams'), 'M',
  'Anagrams share a fingerprint: the 26-letter count tuple is the dict key.',
  'O(n·k) time · O(n·k) space', `
from collections import defaultdict

def groupAnagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        count = [0] * 26
        for ch in s:
            count[ord(ch) - ord('a')] += 1
        groups[tuple(count)].append(s)
    return list(groups.values())`);

P('Arrays & Hashing', 'Top K Frequent Elements', LC('top-k-frequent-elements'), 'M',
  'Bucket sort by frequency (index = count), then read buckets from high to low.',
  'O(n) time · O(n) space', `
from collections import Counter

def topKFrequent(nums, k):
    buckets = [[] for _ in range(len(nums) + 1)]   # buckets[freq] = values
    for num, freq in Counter(nums).items():
        buckets[freq].append(num)
    res = []
    for freq in range(len(buckets) - 1, 0, -1):
        for num in buckets[freq]:
            res.append(num)
            if len(res) == k:
                return res`);

P('Arrays & Hashing', 'Encode and Decode Strings', 'https://neetcode.io/problems/string-encode-and-decode', 'M',
  'Prefix every word with "len#" — read the length, jump past #, slice exactly that many chars.',
  'O(n) time · O(1) extra', `
def encode(strs):
    return ''.join(str(len(s)) + '#' + s for s in strs)

def decode(s):
    res, i = [], 0
    while i < len(s):
        j = i
        while s[j] != '#':
            j += 1
        length = int(s[i:j])
        res.append(s[j + 1 : j + 1 + length])
        i = j + 1 + length
    return res`);

P('Arrays & Hashing', 'Product of Array Except Self', LC('product-of-array-except-self'), 'M',
  'Answer = product of everything to my left × everything to my right — two passes, no division.',
  'O(n) time · O(1) extra (output excluded)', `
def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n
    prefix = 1
    for i in range(n):               # left products
        res[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):   # times right products
        res[i] *= suffix
        suffix *= nums[i]
    return res`);

P('Arrays & Hashing', 'Valid Sudoku', LC('valid-sudoku'), 'M',
  'Three families of sets — row, column, and box (r//3, c//3); any repeat means invalid.',
  'O(81) time · O(81) space', `
from collections import defaultdict

def isValidSudoku(board):
    rows, cols, boxes = defaultdict(set), defaultdict(set), defaultdict(set)
    for r in range(9):
        for c in range(9):
            v = board[r][c]
            if v == '.':
                continue
            box = (r // 3, c // 3)
            if v in rows[r] or v in cols[c] or v in boxes[box]:
                return False
            rows[r].add(v); cols[c].add(v); boxes[box].add(v)
    return True`);

P('Arrays & Hashing', 'Longest Consecutive Sequence', LC('longest-consecutive-sequence'), 'M',
  'Only start counting at a sequence head (n−1 not in the set), then walk n+1, n+2, …',
  'O(n) time · O(n) space', `
def longestConsecutive(nums):
    s = set(nums)
    best = 0
    for n in s:
        if n - 1 not in s:           # n starts a run
            length = 1
            while n + length in s:
                length += 1
            best = max(best, length)
    return best`);

/* ── Two Pointers ── */
P('Two Pointers', 'Valid Palindrome', LC('valid-palindrome'), 'E',
  'Pointers from both ends, skip non-alphanumerics, compare lowercase.',
  'O(n) time · O(1) space', `
def isPalindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum():
            l += 1
        while l < r and not s[r].isalnum():
            r -= 1
        if s[l].lower() != s[r].lower():
            return False
        l, r = l + 1, r - 1
    return True`);

P('Two Pointers', 'Two Sum II - Input Array Is Sorted', LC('two-sum-ii-input-array-is-sorted'), 'M',
  'Sorted → sum too big, move right in; too small, move left in.',
  'O(n) time · O(1) space', `
def twoSum(numbers, target):
    l, r = 0, len(numbers) - 1
    while l < r:
        s = numbers[l] + numbers[r]
        if s > target:
            r -= 1
        elif s < target:
            l += 1
        else:
            return [l + 1, r + 1]    # 1-indexed`);

P('Two Pointers', '3Sum', LC('3sum'), 'M',
  'Sort, fix one number, Two-Sum-II the rest — skip duplicates at both levels.',
  'O(n²) time · O(1) extra', `
def threeSum(nums):
    nums.sort()
    res = []
    for i, a in enumerate(nums):
        if a > 0:
            break
        if i > 0 and a == nums[i - 1]:
            continue                 # skip duplicate anchor
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = a + nums[l] + nums[r]
            if s > 0:
                r -= 1
            elif s < 0:
                l += 1
            else:
                res.append([a, nums[l], nums[r]])
                l += 1
                while l < r and nums[l] == nums[l - 1]:
                    l += 1           # skip duplicate second value
    return res`);

P('Two Pointers', 'Container With Most Water', LC('container-with-most-water'), 'M',
  'Start widest; always move the shorter wall — the taller one can never be the bottleneck.',
  'O(n) time · O(1) space', `
def maxArea(height):
    l, r = 0, len(height) - 1
    best = 0
    while l < r:
        best = max(best, (r - l) * min(height[l], height[r]))
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return best`);

P('Two Pointers', 'Trapping Rain Water', LC('trapping-rain-water'), 'H',
  'Water at i = min(maxLeft, maxRight) − h; move the side with the smaller max — its bound is known.',
  'O(n) time · O(1) space', `
def trap(height):
    if not height:
        return 0
    l, r = 0, len(height) - 1
    left_max, right_max = height[l], height[r]
    water = 0
    while l < r:
        if left_max < right_max:
            l += 1
            left_max = max(left_max, height[l])
            water += left_max - height[l]
        else:
            r -= 1
            right_max = max(right_max, height[r])
            water += right_max - height[r]
    return water`);

/* ── Sliding Window ── */
P('Sliding Window', 'Best Time to Buy and Sell Stock', LC('best-time-to-buy-and-sell-stock'), 'E',
  'Track the cheapest price so far; profit = today − cheapest.',
  'O(n) time · O(1) space', `
def maxProfit(prices):
    lowest = float('inf')
    best = 0
    for p in prices:
        lowest = min(lowest, p)
        best = max(best, p - lowest)
    return best`);

P('Sliding Window', 'Longest Substring Without Repeating Characters', LC('longest-substring-without-repeating-characters'), 'M',
  'Grow right; on a repeat, jump left past the char\'s last index.',
  'O(n) time · O(charset) space', `
def lengthOfLongestSubstring(s):
    last = {}                        # char -> last index
    l = best = 0
    for r, ch in enumerate(s):
        if ch in last and last[ch] >= l:
            l = last[ch] + 1
        last[ch] = r
        best = max(best, r - l + 1)
    return best`);

P('Sliding Window', 'Longest Repeating Character Replacement', LC('longest-repeating-character-replacement'), 'M',
  'Window is valid while (length − most-frequent count) ≤ k; shrink when it isn\'t.',
  'O(n) time · O(26) space', `
def characterReplacement(s, k):
    count = {}
    l = maxf = best = 0
    for r, ch in enumerate(s):
        count[ch] = count.get(ch, 0) + 1
        maxf = max(maxf, count[ch])  # never needs to decrease
        while (r - l + 1) - maxf > k:
            count[s[l]] -= 1
            l += 1
        best = max(best, r - l + 1)
    return best`);

P('Sliding Window', 'Permutation in String', LC('permutation-in-string'), 'M',
  'Fixed window of len(s1) sliding over s2; match when the 26-letter counts are equal.',
  'O(n) time · O(26) space', `
def checkInclusion(s1, s2):
    if len(s1) > len(s2):
        return False
    need, win = [0] * 26, [0] * 26
    for a, b in zip(s1, s2):
        need[ord(a) - 97] += 1
        win[ord(b) - 97] += 1
    if need == win:
        return True
    for r in range(len(s1), len(s2)):
        win[ord(s2[r]) - 97] += 1
        win[ord(s2[r - len(s1)]) - 97] -= 1
        if need == win:
            return True
    return False`);

P('Sliding Window', 'Minimum Window Substring', LC('minimum-window-substring'), 'H',
  'Expand right until every needed char is covered (have == need), then shrink left while still covered.',
  'O(m + n) time · O(charset) space', `
from collections import Counter

def minWindow(s, t):
    if not t:
        return ''
    need = Counter(t)
    window = {}
    have, required = 0, len(need)
    best, best_len = (0, 0), float('inf')
    l = 0
    for r, ch in enumerate(s):
        window[ch] = window.get(ch, 0) + 1
        if ch in need and window[ch] == need[ch]:
            have += 1
        while have == required:
            if r - l + 1 < best_len:
                best, best_len = (l, r + 1), r - l + 1
            window[s[l]] -= 1
            if s[l] in need and window[s[l]] < need[s[l]]:
                have -= 1
            l += 1
    return s[best[0]:best[1]] if best_len != float('inf') else ''`);

P('Sliding Window', 'Sliding Window Maximum', LC('sliding-window-maximum'), 'H',
  'Monotonic decreasing deque of indices — front is the max; pop smaller ones from the back.',
  'O(n) time · O(k) space', `
from collections import deque

def maxSlidingWindow(nums, k):
    q, res = deque(), []             # q holds indices, values decreasing
    for r, n in enumerate(nums):
        while q and nums[q[-1]] < n:
            q.pop()
        q.append(r)
        if q[0] <= r - k:            # front slid out of window
            q.popleft()
        if r >= k - 1:
            res.append(nums[q[0]])
    return res`);

/* ── Stack ── */
P('Stack', 'Valid Parentheses', LC('valid-parentheses'), 'E',
  'Push openers; each closer must match the top of the stack; end empty.',
  'O(n) time · O(n) space', `
def isValid(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in pairs:
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
        else:
            stack.append(ch)
    return not stack`);

P('Stack', 'Min Stack', LC('min-stack'), 'M',
  'Store (value, min-so-far) on every push — the min travels with the stack.',
  'O(1) per op · O(n) space', `
class MinStack:
    def __init__(self):
        self.stack = []              # (val, current min)

    def push(self, val):
        cur_min = min(val, self.stack[-1][1]) if self.stack else val
        self.stack.append((val, cur_min))

    def pop(self):
        self.stack.pop()

    def top(self):
        return self.stack[-1][0]

    def getMin(self):
        return self.stack[-1][1]`);

P('Stack', 'Evaluate Reverse Polish Notation', LC('evaluate-reverse-polish-notation'), 'M',
  'Numbers push; an operator pops b then a, pushes a op b (divide truncates toward zero).',
  'O(n) time · O(n) space', `
def evalRPN(tokens):
    stack = []
    for t in tokens:
        if t in '+-*/' and len(t) == 1:
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a + b)
            elif t == '-': stack.append(a - b)
            elif t == '*': stack.append(a * b)
            else: stack.append(int(a / b))   # truncate toward 0
        else:
            stack.append(int(t))
    return stack[0]`);

P('Stack', 'Generate Parentheses', LC('generate-parentheses'), 'M',
  'Backtrack: add "(" while open < n, add ")" while close < open.',
  'O(4ⁿ/√n) time · O(n) depth', `
def generateParenthesis(n):
    res, cur = [], []
    def bt(open_, close):
        if len(cur) == 2 * n:
            res.append(''.join(cur))
            return
        if open_ < n:
            cur.append('('); bt(open_ + 1, close); cur.pop()
        if close < open_:
            cur.append(')'); bt(open_, close + 1); cur.pop()
    bt(0, 0)
    return res`);

P('Stack', 'Daily Temperatures', LC('daily-temperatures'), 'M',
  'Monotonic decreasing stack of indices; a warmer day pops and answers everyone colder.',
  'O(n) time · O(n) space', `
def dailyTemperatures(temps):
    res = [0] * len(temps)
    stack = []                       # indices waiting for a warmer day
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            res[j] = i - j
        stack.append(i)
    return res`);

P('Stack', 'Car Fleet', LC('car-fleet'), 'M',
  'Sort by position (closest to target first); a car that arrives later than the fleet ahead starts a new fleet.',
  'O(n log n) time · O(n) space', `
def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)
    fleets = []                      # arrival times of fleet leaders
    for p, s in cars:
        t = (target - p) / s
        if not fleets or t > fleets[-1]:
            fleets.append(t)         # can't catch the fleet ahead
    return len(fleets)`);

P('Stack', 'Largest Rectangle in Histogram', LC('largest-rectangle-in-histogram'), 'H',
  'Increasing stack of (start, height); when a bar is shorter, pop and score — the popped start becomes my start.',
  'O(n) time · O(n) space', `
def largestRectangleArea(heights):
    best = 0
    stack = []                       # (start index, height)
    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            idx, height = stack.pop()
            best = max(best, height * (i - idx))
            start = idx              # extend back
        stack.append((start, h))
    for idx, height in stack:
        best = max(best, height * (len(heights) - idx))
    return best`);

/* ── Binary Search ── */
P('Binary Search', 'Binary Search', LC('binary-search'), 'E',
  'l ≤ r, mid = (l+r)//2, discard the half that can\'t hold the target.',
  'O(log n) time · O(1) space', `
def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        m = (l + r) // 2
        if nums[m] == target:
            return m
        if nums[m] < target:
            l = m + 1
        else:
            r = m - 1
    return -1`);

P('Binary Search', 'Search a 2D Matrix', LC('search-a-2d-matrix'), 'M',
  'Pretend it\'s one sorted array of m·n — index i maps to matrix[i // n][i % n].',
  'O(log(m·n)) time · O(1) space', `
def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    l, r = 0, m * n - 1
    while l <= r:
        mid = (l + r) // 2
        v = matrix[mid // n][mid % n]
        if v == target:
            return True
        if v < target:
            l = mid + 1
        else:
            r = mid - 1
    return False`);

P('Binary Search', 'Koko Eating Bananas', LC('koko-eating-bananas'), 'M',
  'Binary search the answer (speed 1..max pile); feasible if Σ ceil(pile/k) ≤ h.',
  'O(n log max) time · O(1) space', `
def minEatingSpeed(piles, h):
    l, r = 1, max(piles)
    while l < r:
        k = (l + r) // 2
        hours = sum((p + k - 1) // k for p in piles)
        if hours <= h:
            r = k                    # k works, try slower
        else:
            l = k + 1
    return l`);

P('Binary Search', 'Find Minimum in Rotated Sorted Array', LC('find-minimum-in-rotated-sorted-array'), 'M',
  'Compare mid to the right end: mid > right means the drop (min) is to the right.',
  'O(log n) time · O(1) space', `
def findMin(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        m = (l + r) // 2
        if nums[m] > nums[r]:
            l = m + 1
        else:
            r = m
    return nums[l]`);

P('Binary Search', 'Search in Rotated Sorted Array', LC('search-in-rotated-sorted-array'), 'M',
  'One half is always sorted — check if the target lies inside that sorted half, else go to the other.',
  'O(log n) time · O(1) space', `
def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        m = (l + r) // 2
        if nums[m] == target:
            return m
        if nums[l] <= nums[m]:                 # left half sorted
            if nums[l] <= target < nums[m]:
                r = m - 1
            else:
                l = m + 1
        else:                                  # right half sorted
            if nums[m] < target <= nums[r]:
                l = m + 1
            else:
                r = m - 1
    return -1`);

P('Binary Search', 'Time Based Key-Value Store', LC('time-based-key-value-store'), 'M',
  'Timestamps arrive increasing, so each key\'s list is sorted — binary search for the last ts ≤ query.',
  'set O(1) · get O(log n)', `
from collections import defaultdict
from bisect import bisect_right

class TimeMap:
    def __init__(self):
        self.store = defaultdict(list)     # key -> [(ts, value)]

    def set(self, key, value, timestamp):
        self.store[key].append((timestamp, value))

    def get(self, key, timestamp):
        arr = self.store[key]
        i = bisect_right(arr, (timestamp, chr(127)))
        return arr[i - 1][1] if i else ''`);

P('Binary Search', 'Median of Two Sorted Arrays', LC('median-of-two-sorted-arrays'), 'H',
  'Binary search a cut in the smaller array so left halves total half and Aleft ≤ Bright, Bleft ≤ Aright.',
  'O(log min(m,n)) time · O(1) space', `
def findMedianSortedArrays(A, B):
    if len(A) > len(B):
        A, B = B, A
    m, n = len(A), len(B)
    half = (m + n + 1) // 2
    lo, hi = 0, m
    while lo <= hi:
        i = (lo + hi) // 2           # take i from A
        j = half - i                 # and j from B
        Al = A[i - 1] if i > 0 else float('-inf')
        Ar = A[i] if i < m else float('inf')
        Bl = B[j - 1] if j > 0 else float('-inf')
        Br = B[j] if j < n else float('inf')
        if Al <= Br and Bl <= Ar:
            if (m + n) % 2:
                return max(Al, Bl)
            return (max(Al, Bl) + min(Ar, Br)) / 2
        if Al > Br:
            hi = i - 1
        else:
            lo = i + 1`);

/* ── Linked List ── */
P('Linked List', 'Reverse Linked List', LC('reverse-linked-list'), 'E',
  'prev, cur: save next, point cur back at prev, step both forward.',
  'O(n) time · O(1) space', `
def reverseList(head):
    prev, cur = None, head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev, cur = cur, nxt
    return prev`);

P('Linked List', 'Merge Two Sorted Lists', LC('merge-two-sorted-lists'), 'E',
  'Dummy head; attach the smaller node each step; append the leftover list.',
  'O(m + n) time · O(1) space', `
def mergeTwoLists(l1, l2):
    dummy = tail = ListNode()
    while l1 and l2:
        if l1.val <= l2.val:
            tail.next, l1 = l1, l1.next
        else:
            tail.next, l2 = l2, l2.next
        tail = tail.next
    tail.next = l1 or l2
    return dummy.next`);

P('Linked List', 'Reorder List', LC('reorder-list'), 'M',
  'Three moves: find middle (slow/fast), reverse the second half, zip the halves together.',
  'O(n) time · O(1) space', `
def reorderList(head):
    slow, fast = head, head.next
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    second = slow.next
    slow.next = None                 # cut
    prev = None
    while second:                    # reverse second half
        nxt = second.next
        second.next = prev
        prev, second = second, nxt
    first, second = head, prev
    while second:                    # weave
        n1, n2 = first.next, second.next
        first.next = second
        second.next = n1
        first, second = n1, n2`);

P('Linked List', 'Remove Nth Node From End of List', LC('remove-nth-node-from-end-of-list'), 'M',
  'Give the fast pointer an n-step head start from a dummy; when fast hits the end, slow is just before the target.',
  'O(n) time · O(1) space', `
def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    slow = fast = dummy
    for _ in range(n):
        fast = fast.next
    while fast.next:
        slow, fast = slow.next, fast.next
    slow.next = slow.next.next
    return dummy.next`);

P('Linked List', 'Copy List with Random Pointer', LC('copy-list-with-random-pointer'), 'M',
  'Pass 1: map every old node → new copy. Pass 2: wire next/random through the map.',
  'O(n) time · O(n) space', `
def copyRandomList(head):
    old_to_new = {None: None}
    cur = head
    while cur:
        old_to_new[cur] = Node(cur.val)
        cur = cur.next
    cur = head
    while cur:
        copy = old_to_new[cur]
        copy.next = old_to_new[cur.next]
        copy.random = old_to_new[cur.random]
        cur = cur.next
    return old_to_new[head]`);

P('Linked List', 'Add Two Numbers', LC('add-two-numbers'), 'M',
  'Grade-school addition — digits are already reversed; carry until both lists and carry are done.',
  'O(max(m,n)) time · O(1) extra', `
def addTwoNumbers(l1, l2):
    dummy = tail = ListNode()
    carry = 0
    while l1 or l2 or carry:
        v = carry + (l1.val if l1 else 0) + (l2.val if l2 else 0)
        carry, digit = divmod(v, 10)
        tail.next = ListNode(digit)
        tail = tail.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    return dummy.next`);

P('Linked List', 'Linked List Cycle', LC('linked-list-cycle'), 'E',
  'Tortoise and hare — if they ever meet, there\'s a cycle.',
  'O(n) time · O(1) space', `
def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:
            return True
    return False`);

P('Linked List', 'Find the Duplicate Number', LC('find-the-duplicate-number'), 'M',
  'Treat i → nums[i] as a linked list; the duplicate is the cycle entrance (Floyd, then restart one pointer).',
  'O(n) time · O(1) space', `
def findDuplicate(nums):
    slow = fast = 0
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow2 = 0
    while slow != slow2:             # meet at cycle start
        slow, slow2 = nums[slow], nums[slow2]
    return slow`);

P('Linked List', 'LRU Cache', LC('lru-cache'), 'M',
  'Hashmap for O(1) lookup + doubly linked list for recency: touch → move to end, overflow → evict front.',
  'O(1) per op · O(capacity) space', `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.map = {}
        self.left, self.right = Node(), Node()   # LRU <-> MRU sentinels
        self.left.next, self.right.prev = self.right, self.left

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _insert(self, node):                     # at MRU end
        p = self.right.prev
        p.next = node; node.prev = p
        node.next = self.right; self.right.prev = node

    def get(self, key):
        if key not in self.map:
            return -1
        node = self.map[key]
        self._remove(node); self._insert(node)
        return node.val

    def put(self, key, value):
        if key in self.map:
            self._remove(self.map[key])
        node = self.map[key] = Node(key, value)
        self._insert(node)
        if len(self.map) > self.cap:
            lru = self.left.next
            self._remove(lru)
            del self.map[lru.key]`);

P('Linked List', 'Merge k Sorted Lists', LC('merge-k-sorted-lists'), 'H',
  'Min-heap holding each list\'s head; pop the smallest, push its next.',
  'O(N log k) time · O(k) space', `
import heapq

def mergeKLists(lists):
    heap = [(node.val, i, node) for i, node in enumerate(lists) if node]
    heapq.heapify(heap)
    dummy = tail = ListNode()
    while heap:
        _, i, node = heapq.heappop(heap)
        tail.next = tail = node
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next`);

P('Linked List', 'Reverse Nodes in k-Group', LC('reverse-nodes-in-k-group'), 'H',
  'Find the kth node; reverse the group with prev seeded as the next group; re-hook groupPrev to kth.',
  'O(n) time · O(1) space', `
def reverseKGroup(head, k):
    dummy = ListNode(0, head)
    group_prev = dummy
    while True:
        kth = group_prev
        for _ in range(k):
            kth = kth.next
            if not kth:
                return dummy.next
        group_next = kth.next
        prev, cur = group_next, group_prev.next
        while cur is not group_next:     # reverse this group
            nxt = cur.next
            cur.next = prev
            prev, cur = cur, nxt
        first = group_prev.next          # becomes the group's tail
        group_prev.next = kth
        group_prev = first`);

/* ── Trees ── */
P('Trees', 'Invert Binary Tree', LC('invert-binary-tree'), 'E',
  'Swap left and right, then recurse into both.',
  'O(n) time · O(h) space', `
def invertTree(root):
    if root:
        root.left, root.right = invertTree(root.right), invertTree(root.left)
    return root`);

P('Trees', 'Maximum Depth of Binary Tree', LC('maximum-depth-of-binary-tree'), 'E',
  'Depth = 1 + max(depth(left), depth(right)); empty is 0.',
  'O(n) time · O(h) space', `
def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`);

P('Trees', 'Diameter of Binary Tree', LC('diameter-of-binary-tree'), 'E',
  'DFS returns height; at each node, left height + right height is a candidate diameter.',
  'O(n) time · O(h) space', `
def diameterOfBinaryTree(root):
    best = 0
    def height(node):
        nonlocal best
        if not node:
            return 0
        l, r = height(node.left), height(node.right)
        best = max(best, l + r)
        return 1 + max(l, r)
    height(root)
    return best`);

P('Trees', 'Balanced Binary Tree', LC('balanced-binary-tree'), 'E',
  'DFS returns height, or −1 as soon as any subtree is unbalanced (|l − r| > 1).',
  'O(n) time · O(h) space', `
def isBalanced(root):
    def height(node):
        if not node:
            return 0
        l, r = height(node.left), height(node.right)
        if l < 0 or r < 0 or abs(l - r) > 1:
            return -1
        return 1 + max(l, r)
    return height(root) >= 0`);

P('Trees', 'Same Tree', LC('same-tree'), 'E',
  'Both empty → true; one empty or values differ → false; else recurse on both sides.',
  'O(n) time · O(h) space', `
def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q or p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`);

P('Trees', 'Subtree of Another Tree', LC('subtree-of-another-tree'), 'E',
  'At every node of root, ask "is this the Same Tree as subRoot?"',
  'O(m·n) time · O(h) space', `
def isSubtree(root, subRoot):
    def same(a, b):
        if not a or not b:
            return a is b
        return a.val == b.val and same(a.left, b.left) and same(a.right, b.right)
    if not root:
        return False
    return same(root, subRoot) or isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)`);

P('Trees', 'Lowest Common Ancestor of a BST', LC('lowest-common-ancestor-of-a-binary-search-tree'), 'M',
  'Walk down: both smaller → go left, both bigger → go right, otherwise this is the split point.',
  'O(h) time · O(1) space', `
def lowestCommonAncestor(root, p, q):
    cur = root
    while cur:
        if p.val < cur.val and q.val < cur.val:
            cur = cur.left
        elif p.val > cur.val and q.val > cur.val:
            cur = cur.right
        else:
            return cur`);

P('Trees', 'Binary Tree Level Order Traversal', LC('binary-tree-level-order-traversal'), 'M',
  'BFS; snapshot len(queue) to process exactly one level per round.',
  'O(n) time · O(n) space', `
from collections import deque

def levelOrder(root):
    res, q = [], deque([root] if root else [])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res`);

P('Trees', 'Binary Tree Right Side View', LC('binary-tree-right-side-view'), 'M',
  'Level-order BFS; keep the last node of each level.',
  'O(n) time · O(n) space', `
from collections import deque

def rightSideView(root):
    res, q = [], deque([root] if root else [])
    while q:
        for i in range(len(q)):
            node = q.popleft()
            if i == 0:
                res.append(node.val)     # children pushed right-first
            if node.right: q.append(node.right)
            if node.left: q.append(node.left)
    return res`);

P('Trees', 'Count Good Nodes in Binary Tree', LC('count-good-nodes-in-binary-tree'), 'M',
  'DFS carrying the max value on the path; node is good if val ≥ that max.',
  'O(n) time · O(h) space', `
def goodNodes(root):
    def dfs(node, path_max):
        if not node:
            return 0
        good = 1 if node.val >= path_max else 0
        path_max = max(path_max, node.val)
        return good + dfs(node.left, path_max) + dfs(node.right, path_max)
    return dfs(root, root.val)`);

P('Trees', 'Validate Binary Search Tree', LC('validate-binary-search-tree'), 'M',
  'Pass down an open interval (low, high): go left → tighten high, go right → tighten low.',
  'O(n) time · O(h) space', `
def isValidBST(root):
    def valid(node, low, high):
        if not node:
            return True
        if not (low < node.val < high):
            return False
        return valid(node.left, low, node.val) and valid(node.right, node.val, high)
    return valid(root, float('-inf'), float('inf'))`);

P('Trees', 'Kth Smallest Element in a BST', LC('kth-smallest-element-in-a-bst'), 'M',
  'In-order traversal of a BST is sorted — stop at the kth pop.',
  'O(h + k) time · O(h) space', `
def kthSmallest(root, k):
    stack, cur = [], root
    while True:
        while cur:
            stack.append(cur)
            cur = cur.left
        cur = stack.pop()
        k -= 1
        if k == 0:
            return cur.val
        cur = cur.right`);

P('Trees', 'Construct Binary Tree from Preorder and Inorder', LC('construct-binary-tree-from-preorder-and-inorder-traversal'), 'M',
  'Preorder gives the next root; its index in inorder splits left vs right subtree.',
  'O(n) time · O(n) space', `
def buildTree(preorder, inorder):
    idx = {v: i for i, v in enumerate(inorder)}
    pre = iter(preorder)
    def build(lo, hi):               # inorder[lo..hi]
        if lo > hi:
            return None
        root = TreeNode(next(pre))
        mid = idx[root.val]
        root.left = build(lo, mid - 1)   # left first: preorder order
        root.right = build(mid + 1, hi)
        return root
    return build(0, len(inorder) - 1)`);

P('Trees', 'Binary Tree Maximum Path Sum', LC('binary-tree-maximum-path-sum'), 'H',
  'DFS returns the best one-sided path (drop negatives); the node + both sides is a candidate answer.',
  'O(n) time · O(h) space', `
def maxPathSum(root):
    best = root.val
    def gain(node):
        nonlocal best
        if not node:
            return 0
        l = max(gain(node.left), 0)
        r = max(gain(node.right), 0)
        best = max(best, node.val + l + r)   # path bends here
        return node.val + max(l, r)          # path continues up
    gain(root)
    return best`);

P('Trees', 'Serialize and Deserialize Binary Tree', LC('serialize-and-deserialize-binary-tree'), 'H',
  'Preorder with "N" for nulls; deserialize by consuming tokens in the same preorder.',
  'O(n) time · O(n) space', `
class Codec:
    def serialize(self, root):
        out = []
        def dfs(node):
            if not node:
                out.append('N')
                return
            out.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return ','.join(out)

    def deserialize(self, data):
        tokens = iter(data.split(','))
        def dfs():
            t = next(tokens)
            if t == 'N':
                return None
            node = TreeNode(int(t))
            node.left = dfs()
            node.right = dfs()
            return node
        return dfs()`);

/* ── Tries ── */
P('Tries', 'Implement Trie (Prefix Tree)', LC('implement-trie-prefix-tree'), 'M',
  'Each node = dict of children + an end-of-word flag; walk char by char.',
  'O(L) per op · O(total chars) space', `
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        cur = self.root
        for ch in word:
            cur = cur.children.setdefault(ch, TrieNode())
        cur.end = True

    def _walk(self, s):
        cur = self.root
        for ch in s:
            if ch not in cur.children:
                return None
            cur = cur.children[ch]
        return cur

    def search(self, word):
        node = self._walk(word)
        return bool(node and node.end)

    def startsWith(self, prefix):
        return self._walk(prefix) is not None`);

P('Tries', 'Design Add and Search Words Data Structure', LC('design-add-and-search-words-data-structure'), 'M',
  'Trie; on "." branch into every child (DFS), otherwise follow the one child.',
  'add O(L) · search O(26^dots · L)', `
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word):
        cur = self.root
        for ch in word:
            cur = cur.children.setdefault(ch, TrieNode())
        cur.end = True

    def search(self, word):
        def dfs(i, node):
            if i == len(word):
                return node.end
            ch = word[i]
            if ch == '.':
                return any(dfs(i + 1, child) for child in node.children.values())
            return ch in node.children and dfs(i + 1, node.children[ch])
        return dfs(0, self.root)`);

P('Tries', 'Word Search II', LC('word-search-ii'), 'H',
  'Put all words in a trie, DFS the board walking the trie together; record & clear words when found.',
  'O(m·n·4^L) time · O(total chars) space', `
def findWords(board, words):
    root = {}
    for w in words:
        node = root
        for ch in w:
            node = node.setdefault(ch, {})
        node['$'] = w                    # word ends here
    R, C = len(board), len(board[0])
    res = []
    def dfs(r, c, parent):
        ch = board[r][c]
        node = parent[ch]
        if '$' in node:
            res.append(node.pop('$'))    # pop = no duplicates
        board[r][c] = '#'
        for nr, nc in ((r+1, c), (r-1, c), (r, c+1), (r, c-1)):
            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] in node:
                dfs(nr, nc, node)
        board[r][c] = ch
        if not node:
            parent.pop(ch)               # prune exhausted branch
    for r in range(R):
        for c in range(C):
            if board[r][c] in root:
                dfs(r, c, root)
    return res`);

/* ── Heap / Priority Queue ── */
P('Heap / Priority Queue', 'Kth Largest Element in a Stream', LC('kth-largest-element-in-a-stream'), 'E',
  'Keep a min-heap of size k — its top is the kth largest.',
  'add O(log k) · O(k) space', `
import heapq

class KthLargest:
    def __init__(self, k, nums):
        self.k, self.heap = k, nums
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val):
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]`);

P('Heap / Priority Queue', 'Last Stone Weight', LC('last-stone-weight'), 'E',
  'Max-heap (negate values); smash the top two, push back the difference.',
  'O(n log n) time · O(n) space', `
import heapq

def lastStoneWeight(stones):
    heap = [-s for s in stones]
    heapq.heapify(heap)
    while len(heap) > 1:
        a = -heapq.heappop(heap)
        b = -heapq.heappop(heap)
        if a != b:
            heapq.heappush(heap, -(a - b))
    return -heap[0] if heap else 0`);

P('Heap / Priority Queue', 'K Closest Points to Origin', LC('k-closest-points-to-origin'), 'M',
  'Max-heap of size k keyed by −distance²; evict the farthest when it overflows.',
  'O(n log k) time · O(k) space', `
import heapq

def kClosest(points, k):
    heap = []                        # (-dist, x, y)
    for x, y in points:
        heapq.heappush(heap, (-(x*x + y*y), x, y))
        if len(heap) > k:
            heapq.heappop(heap)      # drop the farthest
    return [[x, y] for _, x, y in heap]`);

P('Heap / Priority Queue', 'Kth Largest Element in an Array', LC('kth-largest-element-in-an-array'), 'M',
  'Min-heap of size k (or quickselect for O(n) average); top is the answer.',
  'O(n log k) time · O(k) space', `
import heapq

def findKthLargest(nums, k):
    heap = nums[:k]
    heapq.heapify(heap)
    for n in nums[k:]:
        if n > heap[0]:
            heapq.heapreplace(heap, n)
    return heap[0]`);

P('Heap / Priority Queue', 'Task Scheduler', LC('task-scheduler'), 'M',
  'The most frequent task sets the frame: (maxCount − 1) × (n + 1) + #tasks tied at maxCount, never less than len(tasks).',
  'O(n) time · O(26) space', `
from collections import Counter

def leastInterval(tasks, n):
    counts = Counter(tasks).values()
    max_count = max(counts)
    tied = sum(1 for c in counts if c == max_count)
    return max(len(tasks), (max_count - 1) * (n + 1) + tied)`);

P('Heap / Priority Queue', 'Design Twitter', LC('design-twitter'), 'M',
  'Each user keeps a tweet list with a global timestamp; the feed is a heap-merge of followees\' latest tweets, take 10.',
  'getNewsFeed O(F log F) · O(users + tweets)', `
import heapq
from collections import defaultdict

class Twitter:
    def __init__(self):
        self.time = 0
        self.tweets = defaultdict(list)      # user -> [(time, tweetId)]
        self.follows = defaultdict(set)

    def postTweet(self, userId, tweetId):
        self.time += 1
        self.tweets[userId].append((self.time, tweetId))

    def getNewsFeed(self, userId):
        heap = []
        for u in self.follows[userId] | {userId}:
            if self.tweets[u]:
                i = len(self.tweets[u]) - 1
                t, tid = self.tweets[u][i]
                heap.append((-t, tid, u, i))
        heapq.heapify(heap)
        feed = []
        while heap and len(feed) < 10:
            _, tid, u, i = heapq.heappop(heap)
            feed.append(tid)
            if i > 0:
                t, nid = self.tweets[u][i - 1]
                heapq.heappush(heap, (-t, nid, u, i - 1))
        return feed

    def follow(self, followerId, followeeId):
        if followerId != followeeId:
            self.follows[followerId].add(followeeId)

    def unfollow(self, followerId, followeeId):
        self.follows[followerId].discard(followeeId)`);

P('Heap / Priority Queue', 'Find Median from Data Stream', LC('find-median-from-data-stream'), 'H',
  'Two heaps: max-heap for the small half, min-heap for the big half; keep sizes within one.',
  'add O(log n) · median O(1)', `
import heapq

class MedianFinder:
    def __init__(self):
        self.small = []              # max-heap (negated)
        self.large = []              # min-heap

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))   # move max of small up
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`);

/* ── Backtracking ── */
P('Backtracking', 'Subsets', LC('subsets'), 'M',
  'For each element: include it, recurse; exclude it, recurse.',
  'O(n·2ⁿ) time · O(n) depth', `
def subsets(nums):
    res, cur = [], []
    def bt(i):
        if i == len(nums):
            res.append(cur[:])
            return
        cur.append(nums[i]); bt(i + 1)   # take
        cur.pop();           bt(i + 1)   # skip
    bt(0)
    return res`);

P('Backtracking', 'Combination Sum', LC('combination-sum'), 'M',
  'Unlimited reuse → after picking candidate i, recurse starting at i again (not i+1).',
  'O(n^(t/min)) time · O(t/min) depth', `
def combinationSum(candidates, target):
    res, cur = [], []
    def bt(start, remain):
        if remain == 0:
            res.append(cur[:])
            return
        for i in range(start, len(candidates)):
            c = candidates[i]
            if c <= remain:
                cur.append(c)
                bt(i, remain - c)        # i, not i+1: reuse allowed
                cur.pop()
    bt(0, target)
    return res`);

P('Backtracking', 'Permutations', LC('permutations'), 'M',
  'Build position by position, choosing any unused number; undo after recursing.',
  'O(n·n!) time · O(n) depth', `
def permute(nums):
    res, cur, used = [], [], [False] * len(nums)
    def bt():
        if len(cur) == len(nums):
            res.append(cur[:])
            return
        for i, n in enumerate(nums):
            if not used[i]:
                used[i] = True; cur.append(n)
                bt()
                used[i] = False; cur.pop()
    bt()
    return res`);

P('Backtracking', 'Subsets II', LC('subsets-ii'), 'M',
  'Sort; at each depth, skip a value equal to the previous sibling (i > start and same).',
  'O(n·2ⁿ) time · O(n) depth', `
def subsetsWithDup(nums):
    nums.sort()
    res, cur = [], []
    def bt(start):
        res.append(cur[:])
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i - 1]:
                continue                 # same value at same depth
            cur.append(nums[i])
            bt(i + 1)
            cur.pop()
    bt(0)
    return res`);

P('Backtracking', 'Combination Sum II', LC('combination-sum-ii'), 'M',
  'Sort; each number once (recurse i+1); skip same-value siblings; break when too big.',
  'O(2ⁿ) time · O(n) depth', `
def combinationSum2(candidates, target):
    candidates.sort()
    res, cur = [], []
    def bt(start, remain):
        if remain == 0:
            res.append(cur[:])
            return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i - 1]:
                continue
            if candidates[i] > remain:
                break
            cur.append(candidates[i])
            bt(i + 1, remain - candidates[i])
            cur.pop()
    bt(0, target)
    return res`);

P('Backtracking', 'Word Search', LC('word-search'), 'M',
  'DFS from every cell matching word[i]; mark the cell visited, explore 4 ways, unmark.',
  'O(m·n·4^L) time · O(L) depth', `
def exist(board, word):
    R, C = len(board), len(board[0])
    def dfs(r, c, i):
        if i == len(word):
            return True
        if not (0 <= r < R and 0 <= c < C) or board[r][c] != word[i]:
            return False
        board[r][c] = '#'                # mark visited
        found = (dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or
                 dfs(r, c+1, i+1) or dfs(r, c-1, i+1))
        board[r][c] = word[i]            # unmark
        return found
    return any(dfs(r, c, 0) for r in range(R) for c in range(C))`);

P('Backtracking', 'Palindrome Partitioning', LC('palindrome-partitioning'), 'M',
  'Try every palindromic prefix s[i..j] as the next piece, recurse on the rest.',
  'O(n·2ⁿ) time · O(n) depth', `
def partition(s):
    res, cur = [], []
    def bt(i):
        if i == len(s):
            res.append(cur[:])
            return
        for j in range(i, len(s)):
            piece = s[i:j + 1]
            if piece == piece[::-1]:
                cur.append(piece)
                bt(j + 1)
                cur.pop()
    bt(0)
    return res`);

P('Backtracking', 'Letter Combinations of a Phone Number', LC('letter-combinations-of-a-phone-number'), 'M',
  'One digit per level; branch over that digit\'s letters.',
  'O(4ⁿ·n) time · O(n) depth', `
def letterCombinations(digits):
    if not digits:
        return []
    keys = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
    res = []
    def bt(i, cur):
        if i == len(digits):
            res.append(cur)
            return
        for ch in keys[digits[i]]:
            bt(i + 1, cur + ch)
    bt(0, '')
    return res`);

P('Backtracking', 'N-Queens', LC('n-queens'), 'H',
  'One queen per row; track used columns, diagonals (r+c) and anti-diagonals (r−c) in sets.',
  'O(n!) time · O(n²) space', `
def solveNQueens(n):
    cols, diag, anti = set(), set(), set()
    board = [['.'] * n for _ in range(n)]
    res = []
    def bt(r):
        if r == n:
            res.append([''.join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r + c) in diag or (r - c) in anti:
                continue
            cols.add(c); diag.add(r + c); anti.add(r - c)
            board[r][c] = 'Q'
            bt(r + 1)
            cols.remove(c); diag.remove(r + c); anti.remove(r - c)
            board[r][c] = '.'
    bt(0)
    return res`);

/* ── Graphs ── */
P('Graphs', 'Number of Islands', LC('number-of-islands'), 'M',
  'Scan the grid; each unvisited "1" is a new island — sink it with DFS.',
  'O(m·n) time · O(m·n) space', `
def numIslands(grid):
    R, C = len(grid), len(grid[0])
    def sink(r, c):
        if 0 <= r < R and 0 <= c < C and grid[r][c] == '1':
            grid[r][c] = '0'
            sink(r+1, c); sink(r-1, c); sink(r, c+1); sink(r, c-1)
    count = 0
    for r in range(R):
        for c in range(C):
            if grid[r][c] == '1':
                count += 1
                sink(r, c)
    return count`);

P('Graphs', 'Max Area of Island', LC('max-area-of-island'), 'M',
  'Number of Islands, but DFS returns the size: 1 + sum of the 4 neighbours.',
  'O(m·n) time · O(m·n) space', `
def maxAreaOfIsland(grid):
    R, C = len(grid), len(grid[0])
    def area(r, c):
        if not (0 <= r < R and 0 <= c < C) or grid[r][c] != 1:
            return 0
        grid[r][c] = 0
        return 1 + area(r+1, c) + area(r-1, c) + area(r, c+1) + area(r, c-1)
    return max(area(r, c) for r in range(R) for c in range(C))`);

P('Graphs', 'Clone Graph', LC('clone-graph'), 'M',
  'DFS with an old → new map; create the copy before recursing so cycles resolve to the map.',
  'O(V + E) time · O(V) space', `
def cloneGraph(node):
    copies = {}
    def dfs(n):
        if n in copies:
            return copies[n]
        copy = Node(n.val)
        copies[n] = copy                 # register before recursing
        copy.neighbors = [dfs(nb) for nb in n.neighbors]
        return copy
    return dfs(node) if node else None`);

P('Graphs', 'Walls and Gates', 'https://neetcode.io/problems/walls-and-gates', 'M',
  'Multi-source BFS from every gate at once; first time you reach a room is its distance.',
  'O(m·n) time · O(m·n) space', `
from collections import deque

def wallsAndGates(rooms):
    INF = 2147483647
    R, C = len(rooms), len(rooms[0])
    q = deque((r, c) for r in range(R) for c in range(C) if rooms[r][c] == 0)
    while q:
        r, c = q.popleft()
        for nr, nc in ((r+1, c), (r-1, c), (r, c+1), (r, c-1)):
            if 0 <= nr < R and 0 <= nc < C and rooms[nr][nc] == INF:
                rooms[nr][nc] = rooms[r][c] + 1
                q.append((nr, nc))`);

P('Graphs', 'Rotting Oranges', LC('rotting-oranges'), 'M',
  'Multi-source BFS from all rotten oranges, one level per minute; leftover fresh → −1.',
  'O(m·n) time · O(m·n) space', `
from collections import deque

def orangesRotting(grid):
    R, C = len(grid), len(grid[0])
    q, fresh = deque(), 0
    for r in range(R):
        for c in range(C):
            if grid[r][c] == 2: q.append((r, c))
            elif grid[r][c] == 1: fresh += 1
    minutes = 0
    while q and fresh:
        for _ in range(len(q)):
            r, c = q.popleft()
            for nr, nc in ((r+1, c), (r-1, c), (r, c+1), (r, c-1)):
                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    q.append((nr, nc))
        minutes += 1
    return minutes if fresh == 0 else -1`);

P('Graphs', 'Pacific Atlantic Water Flow', LC('pacific-atlantic-water-flow'), 'M',
  'Flow backwards: DFS uphill from each ocean\'s border; answer = cells reached by both.',
  'O(m·n) time · O(m·n) space', `
def pacificAtlantic(heights):
    R, C = len(heights), len(heights[0])
    pac, atl = set(), set()
    def dfs(r, c, seen, prev):
        if ((r, c) in seen or not (0 <= r < R and 0 <= c < C)
                or heights[r][c] < prev):
            return
        seen.add((r, c))
        for nr, nc in ((r+1, c), (r-1, c), (r, c+1), (r, c-1)):
            dfs(nr, nc, seen, heights[r][c])
    for c in range(C):
        dfs(0, c, pac, 0); dfs(R - 1, c, atl, 0)
    for r in range(R):
        dfs(r, 0, pac, 0); dfs(r, C - 1, atl, 0)
    return [list(p) for p in pac & atl]`);

P('Graphs', 'Surrounded Regions', LC('surrounded-regions'), 'M',
  'Reverse thinking: mark O\'s connected to the border as safe; flip every other O to X.',
  'O(m·n) time · O(m·n) space', `
def solve(board):
    R, C = len(board), len(board[0])
    def mark(r, c):
        if 0 <= r < R and 0 <= c < C and board[r][c] == 'O':
            board[r][c] = 'T'
            mark(r+1, c); mark(r-1, c); mark(r, c+1); mark(r, c-1)
    for r in range(R):
        mark(r, 0); mark(r, C - 1)
    for c in range(C):
        mark(0, c); mark(R - 1, c)
    for r in range(R):
        for c in range(C):
            if board[r][c] == 'O': board[r][c] = 'X'     # captured
            elif board[r][c] == 'T': board[r][c] = 'O'   # safe`);

P('Graphs', 'Course Schedule', LC('course-schedule'), 'M',
  'Kahn\'s topological sort: repeatedly take courses with indegree 0; finish all ⇔ no cycle.',
  'O(V + E) time · O(V + E) space', `
from collections import deque

def canFinish(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    indeg = [0] * numCourses
    for course, pre in prerequisites:
        adj[pre].append(course)
        indeg[course] += 1
    q = deque(i for i in range(numCourses) if indeg[i] == 0)
    taken = 0
    while q:
        cur = q.popleft()
        taken += 1
        for nxt in adj[cur]:
            indeg[nxt] -= 1
            if indeg[nxt] == 0:
                q.append(nxt)
    return taken == numCourses`);

P('Graphs', 'Course Schedule II', LC('course-schedule-ii'), 'M',
  'Same Kahn\'s BFS — the pop order is the answer; return [] if not every course got popped.',
  'O(V + E) time · O(V + E) space', `
from collections import deque

def findOrder(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    indeg = [0] * numCourses
    for course, pre in prerequisites:
        adj[pre].append(course)
        indeg[course] += 1
    q = deque(i for i in range(numCourses) if indeg[i] == 0)
    order = []
    while q:
        cur = q.popleft()
        order.append(cur)
        for nxt in adj[cur]:
            indeg[nxt] -= 1
            if indeg[nxt] == 0:
                q.append(nxt)
    return order if len(order) == numCourses else []`);

P('Graphs', 'Graph Valid Tree', 'https://neetcode.io/problems/valid-tree', 'M',
  'A tree has exactly n−1 edges and no cycle — union-find every edge; a failed union is a cycle.',
  'O(E·α(n)) time · O(n) space', `
def validTree(n, edges):
    if len(edges) != n - 1:
        return False
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]    # path halving
            x = parent[x]
        return x
    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra == rb:
            return False                     # cycle
        parent[ra] = rb
    return True`);

P('Graphs', 'Number of Connected Components', 'https://neetcode.io/problems/count-connected-components', 'M',
  'Start with n components; every successful union merges two → subtract one.',
  'O(E·α(n)) time · O(n) space', `
def countComponents(n, edges):
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    components = n
    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra != rb:
            parent[ra] = rb
            components -= 1
    return components`);

P('Graphs', 'Redundant Connection', LC('redundant-connection'), 'M',
  'Union-find edges in order; the first edge whose endpoints are already connected is redundant.',
  'O(n·α(n)) time · O(n) space', `
def findRedundantConnection(edges):
    parent = list(range(len(edges) + 1))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra == rb:
            return [a, b]
        parent[ra] = rb`);

P('Graphs', 'Word Ladder', LC('word-ladder'), 'H',
  'BFS over words; neighbours found via wildcard patterns like "h*t" → bucket of words.',
  'O(n·L²) time · O(n·L²) space', `
from collections import defaultdict, deque

def ladderLength(beginWord, endWord, wordList):
    if endWord not in wordList:
        return 0
    buckets = defaultdict(list)          # "h*t" -> [hot, hit, ...]
    for w in wordList + [beginWord]:
        for i in range(len(w)):
            buckets[w[:i] + '*' + w[i+1:]].append(w)
    seen, q, steps = {beginWord}, deque([beginWord]), 1
    while q:
        for _ in range(len(q)):
            w = q.popleft()
            if w == endWord:
                return steps
            for i in range(len(w)):
                for nb in buckets[w[:i] + '*' + w[i+1:]]:
                    if nb not in seen:
                        seen.add(nb)
                        q.append(nb)
        steps += 1
    return 0`);

/* ── Advanced Graphs ── */
P('Advanced Graphs', 'Reconstruct Itinerary', LC('reconstruct-itinerary'), 'H',
  'Hierholzer: greedily take the smallest unused ticket; add an airport when it\'s a dead end, then reverse.',
  'O(E log E) time · O(E) space', `
from collections import defaultdict

def findItinerary(tickets):
    adj = defaultdict(list)
    for src, dst in sorted(tickets, reverse=True):
        adj[src].append(dst)             # pop() yields smallest first
    route, stack = [], ['JFK']
    while stack:
        while adj[stack[-1]]:
            stack.append(adj[stack[-1]].pop())
        route.append(stack.pop())        # dead end -> post-order
    return route[::-1]`);

P('Advanced Graphs', 'Min Cost to Connect All Points', LC('min-cost-to-connect-all-points'), 'M',
  'Prim\'s MST: grow from point 0, always add the cheapest edge to an unvisited point (min-heap).',
  'O(n² log n) time · O(n²) space', `
import heapq

def minCostConnectPoints(points):
    n = len(points)
    visited = set()
    heap = [(0, 0)]                      # (cost, point)
    total = 0
    while len(visited) < n:
        cost, i = heapq.heappop(heap)
        if i in visited:
            continue
        visited.add(i)
        total += cost
        xi, yi = points[i]
        for j in range(n):
            if j not in visited:
                xj, yj = points[j]
                heapq.heappush(heap, (abs(xi - xj) + abs(yi - yj), j))
    return total`);

P('Advanced Graphs', 'Network Delay Time', LC('network-delay-time'), 'M',
  'Dijkstra from k; answer is the largest shortest-distance, or −1 if some node is unreached.',
  'O(E log V) time · O(V + E) space', `
import heapq
from collections import defaultdict

def networkDelayTime(times, n, k):
    adj = defaultdict(list)
    for u, v, w in times:
        adj[u].append((v, w))
    dist = {}
    heap = [(0, k)]
    while heap:
        d, u = heapq.heappop(heap)
        if u in dist:
            continue
        dist[u] = d
        for v, w in adj[u]:
            if v not in dist:
                heapq.heappush(heap, (d + w, v))
    return max(dist.values()) if len(dist) == n else -1`);

P('Advanced Graphs', 'Swim in Rising Water', LC('swim-in-rising-water'), 'H',
  'Dijkstra where a path\'s cost is its max elevation — pop the lowest-max frontier cell.',
  'O(n² log n) time · O(n²) space', `
import heapq

def swimInWater(grid):
    n = len(grid)
    heap = [(grid[0][0], 0, 0)]          # (max elevation so far, r, c)
    seen = {(0, 0)}
    while heap:
        t, r, c = heapq.heappop(heap)
        if r == c == n - 1:
            return t
        for nr, nc in ((r+1, c), (r-1, c), (r, c+1), (r, c-1)):
            if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in seen:
                seen.add((nr, nc))
                heapq.heappush(heap, (max(t, grid[nr][nc]), nr, nc))`);

P('Advanced Graphs', 'Alien Dictionary', 'https://neetcode.io/problems/foreign-dictionary', 'H',
  'Compare adjacent words: the first differing letter gives an edge a → b; topo sort the letters (prefix-longer-first = invalid).',
  'O(total chars) time · O(26²) space', `
from collections import deque

def foreignDictionary(words):
    adj = {ch: set() for w in words for ch in w}
    indeg = {ch: 0 for ch in adj}
    for w1, w2 in zip(words, words[1:]):
        if len(w1) > len(w2) and w1.startswith(w2):
            return ''                    # "abc" before "ab" is invalid
        for a, b in zip(w1, w2):
            if a != b:
                if b not in adj[a]:
                    adj[a].add(b)
                    indeg[b] += 1
                break
    q = deque(ch for ch in indeg if indeg[ch] == 0)
    order = []
    while q:
        ch = q.popleft()
        order.append(ch)
        for nxt in adj[ch]:
            indeg[nxt] -= 1
            if indeg[nxt] == 0:
                q.append(nxt)
    return ''.join(order) if len(order) == len(adj) else ''`);

P('Advanced Graphs', 'Cheapest Flights Within K Stops', LC('cheapest-flights-within-k-stops'), 'M',
  'Bellman-Ford for k+1 rounds, relaxing from a copy of last round\'s prices so each round = one more edge.',
  'O(k·E) time · O(n) space', `
def findCheapestPrice(n, flights, src, dst, k):
    prices = [float('inf')] * n
    prices[src] = 0
    for _ in range(k + 1):
        nxt = prices[:]                  # only extend by one edge per round
        for u, v, w in flights:
            if prices[u] + w < nxt[v]:
                nxt[v] = prices[u] + w
        prices = nxt
    return prices[dst] if prices[dst] != float('inf') else -1`);

/* ── 1-D Dynamic Programming ── */
P('1-D Dynamic Programming', 'Climbing Stairs', LC('climbing-stairs'), 'E',
  'Ways(n) = ways(n−1) + ways(n−2) — it\'s Fibonacci.',
  'O(n) time · O(1) space', `
def climbStairs(n):
    a, b = 1, 1                          # ways to reach step 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b`);

P('1-D Dynamic Programming', 'Min Cost Climbing Stairs', LC('min-cost-climbing-stairs'), 'E',
  'Cost to reach step i = min(reach i−1 + cost[i−1], reach i−2 + cost[i−2]); target is past the end.',
  'O(n) time · O(1) space', `
def minCostClimbingStairs(cost):
    a = b = 0                            # min cost to stand on i-2, i-1
    for i in range(2, len(cost) + 1):
        a, b = b, min(b + cost[i - 1], a + cost[i - 2])
    return b`);

P('1-D Dynamic Programming', 'House Robber', LC('house-robber'), 'M',
  'At each house: rob it (+ best two back) or skip it (best one back).',
  'O(n) time · O(1) space', `
def rob(nums):
    prev2 = prev1 = 0
    for n in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + n)
    return prev1`);

P('1-D Dynamic Programming', 'House Robber II', LC('house-robber-ii'), 'M',
  'Circle → first and last can\'t both be robbed: max(rob without last, rob without first).',
  'O(n) time · O(1) space', `
def rob(nums):
    def line(arr):
        prev2 = prev1 = 0
        for n in arr:
            prev2, prev1 = prev1, max(prev1, prev2 + n)
        return prev1
    if len(nums) == 1:
        return nums[0]
    return max(line(nums[:-1]), line(nums[1:]))`);

P('1-D Dynamic Programming', 'Longest Palindromic Substring', LC('longest-palindromic-substring'), 'M',
  'Expand around every center — 2n−1 centers (odd: i,i and even: i,i+1).',
  'O(n²) time · O(1) space', `
def longestPalindrome(s):
    best = ''
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l, r = l - 1, r + 1
        return s[l + 1:r]
    for i in range(len(s)):
        for cand in (expand(i, i), expand(i, i + 1)):
            if len(cand) > len(best):
                best = cand
    return best`);

P('1-D Dynamic Programming', 'Palindromic Substrings', LC('palindromic-substrings'), 'M',
  'Expand around every center and count each successful expansion.',
  'O(n²) time · O(1) space', `
def countSubstrings(s):
    count = 0
    for center in range(2 * len(s) - 1):
        l, r = center // 2, center // 2 + center % 2
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l, r = l - 1, r + 1
    return count`);

P('1-D Dynamic Programming', 'Decode Ways', LC('decode-ways'), 'M',
  'dp[i] = dp[i−1] if s[i−1] ≠ "0" + dp[i−2] if s[i−2:i] is 10–26.',
  'O(n) time · O(1) space', `
def numDecodings(s):
    prev2, prev1 = 1, 1                  # dp[i-2], dp[i-1]; dp[0] = 1
    for i in range(1, len(s) + 1):
        cur = prev1 if s[i - 1] != '0' else 0
        if i >= 2 and 10 <= int(s[i - 2:i]) <= 26:
            cur += prev2
        prev2, prev1 = prev1, cur
    return prev1`);

P('1-D Dynamic Programming', 'Coin Change', LC('coin-change'), 'M',
  'dp[a] = 1 + min(dp[a − coin]) — fewest coins for every amount from 0 up.',
  'O(amount·coins) time · O(amount) space', `
def coinChange(coins, amount):
    dp = [0] + [float('inf')] * amount
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`);

P('1-D Dynamic Programming', 'Maximum Product Subarray', LC('maximum-product-subarray'), 'M',
  'Track both max and min product ending here — a negative number swaps them.',
  'O(n) time · O(1) space', `
def maxProduct(nums):
    best = cur_max = cur_min = nums[0]
    for n in nums[1:]:
        cands = (n, n * cur_max, n * cur_min)
        cur_max, cur_min = max(cands), min(cands)
        best = max(best, cur_max)
    return best`);

P('1-D Dynamic Programming', 'Word Break', LC('word-break'), 'M',
  'dp[i] = can s[:i] be built; true if some dp[j] is true and s[j:i] is a word.',
  'O(n²·L) time · O(n) space', `
def wordBreak(s, wordDict):
    words = set(wordDict)
    dp = [True] + [False] * len(s)
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True
                break
    return dp[len(s)]`);

P('1-D Dynamic Programming', 'Longest Increasing Subsequence', LC('longest-increasing-subsequence'), 'M',
  'Patience sorting: tails[k] = smallest tail of an increasing run of length k+1; bisect to replace.',
  'O(n log n) time · O(n) space', `
from bisect import bisect_left

def lengthOfLIS(nums):
    tails = []
    for n in nums:
        i = bisect_left(tails, n)
        if i == len(tails):
            tails.append(n)              # extends the longest run
        else:
            tails[i] = n                 # better (smaller) tail
    return len(tails)`);

P('1-D Dynamic Programming', 'Partition Equal Subset Sum', LC('partition-equal-subset-sum'), 'M',
  'Odd total → impossible; else is total/2 a reachable subset sum? Grow a set of sums.',
  'O(n·sum) time · O(sum) space', `
def canPartition(nums):
    total = sum(nums)
    if total % 2:
        return False
    target = total // 2
    sums = {0}
    for n in nums:
        sums |= {s + n for s in sums if s + n <= target}
        if target in sums:
            return True
    return False`);

/* ── 2-D Dynamic Programming ── */
P('2-D Dynamic Programming', 'Unique Paths', LC('unique-paths'), 'M',
  'Paths into a cell = paths from above + paths from the left; keep one row.',
  'O(m·n) time · O(n) space', `
def uniquePaths(m, n):
    row = [1] * n
    for _ in range(1, m):
        for c in range(1, n):
            row[c] += row[c - 1]         # above (old row[c]) + left
    return row[-1]`);

P('2-D Dynamic Programming', 'Longest Common Subsequence', LC('longest-common-subsequence'), 'M',
  'Chars match → 1 + diagonal; else max(skip one from text1, skip one from text2).',
  'O(m·n) time · O(m·n) space', `
def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`);

P('2-D Dynamic Programming', 'Best Time to Buy and Sell Stock with Cooldown', LC('best-time-to-buy-and-sell-stock-with-cooldown'), 'M',
  'Three states per day — hold, sold (cooldown next), rest — and transition between them.',
  'O(n) time · O(1) space', `
def maxProfit(prices):
    hold, sold, rest = float('-inf'), 0, 0
    for p in prices:
        hold, sold, rest = (
            max(hold, rest - p),         # keep holding, or buy after resting
            hold + p,                    # sell today
            max(rest, sold),             # idle (cooldown ends)
        )
    return max(sold, rest)`);

P('2-D Dynamic Programming', 'Coin Change II', LC('coin-change-ii'), 'M',
  'Count combinations: loop coins on the OUTSIDE so each combo is counted once; dp[a] += dp[a − coin].',
  'O(amount·coins) time · O(amount) space', `
def change(amount, coins):
    dp = [1] + [0] * amount
    for c in coins:                      # outer = combinations, not permutations
        for a in range(c, amount + 1):
            dp[a] += dp[a - c]
    return dp[amount]`);

P('2-D Dynamic Programming', 'Target Sum', LC('target-sum'), 'M',
  'Carry a map of {running sum: ways}; each number fans every sum out to ±n.',
  'O(n·sum) time · O(sum) space', `
from collections import defaultdict

def findTargetSumWays(nums, target):
    ways = {0: 1}
    for n in nums:
        nxt = defaultdict(int)
        for s, cnt in ways.items():
            nxt[s + n] += cnt
            nxt[s - n] += cnt
        ways = nxt
    return ways.get(target, 0)`);

P('2-D Dynamic Programming', 'Interleaving String', LC('interleaving-string'), 'M',
  'dp(i, j): can s1[i:] and s2[j:] form s3[i+j:]? Take from s1 or s2 when the char matches.',
  'O(m·n) time · O(m·n) space', `
from functools import lru_cache

def isInterleave(s1, s2, s3):
    if len(s1) + len(s2) != len(s3):
        return False
    @lru_cache(None)
    def dp(i, j):
        if i == len(s1) and j == len(s2):
            return True
        k = i + j
        if i < len(s1) and s1[i] == s3[k] and dp(i + 1, j):
            return True
        if j < len(s2) and s2[j] == s3[k] and dp(i, j + 1):
            return True
        return False
    return dp(0, 0)`);

P('2-D Dynamic Programming', 'Longest Increasing Path in a Matrix', LC('longest-increasing-path-in-a-matrix'), 'H',
  'DFS + memo from every cell; strictly increasing means no cycles, so memo is safe.',
  'O(m·n) time · O(m·n) space', `
from functools import lru_cache

def longestIncreasingPath(matrix):
    R, C = len(matrix), len(matrix[0])
    @lru_cache(None)
    def dfs(r, c):
        best = 1
        for nr, nc in ((r+1, c), (r-1, c), (r, c+1), (r, c-1)):
            if 0 <= nr < R and 0 <= nc < C and matrix[nr][nc] > matrix[r][c]:
                best = max(best, 1 + dfs(nr, nc))
        return best
    return max(dfs(r, c) for r in range(R) for c in range(C))`);

P('2-D Dynamic Programming', 'Distinct Subsequences', LC('distinct-subsequences'), 'H',
  's[i] == t[j] → use it (i+1, j+1) + skip it (i+1, j); else only skip. Empty t matches once.',
  'O(m·n) time · O(n) space', `
def numDistinct(s, t):
    n = len(t)
    dp = [1] + [0] * n                   # dp[j] = ways to form t[:j]
    for ch in s:
        for j in range(n, 0, -1):        # backwards: reuse last row
            if t[j - 1] == ch:
                dp[j] += dp[j - 1]
    return dp[n]`);

P('2-D Dynamic Programming', 'Edit Distance', LC('edit-distance'), 'M',
  'Match → diagonal for free; else 1 + min(insert, delete, replace) = left, up, diagonal.',
  'O(m·n) time · O(m·n) space', `
def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j],      # delete
                                   dp[i][j - 1],      # insert
                                   dp[i - 1][j - 1])  # replace
    return dp[m][n]`);

P('2-D Dynamic Programming', 'Burst Balloons', LC('burst-balloons'), 'H',
  'Pick the LAST balloon k to burst in (l, r): coins = v[l]·v[k]·v[r] + solve(l, k) + solve(k, r).',
  'O(n³) time · O(n²) space', `
def maxCoins(nums):
    v = [1] + nums + [1]
    n = len(v)
    dp = [[0] * n for _ in range(n)]     # dp[l][r]: best inside open (l, r)
    for length in range(2, n):
        for l in range(n - length):
            r = l + length
            for k in range(l + 1, r):
                dp[l][r] = max(dp[l][r],
                               v[l] * v[k] * v[r] + dp[l][k] + dp[k][r])
    return dp[0][n - 1]`);

P('2-D Dynamic Programming', 'Regular Expression Matching', LC('regular-expression-matching'), 'H',
  'dp(i, j): if p[j+1] is "*", either skip "x*" (j+2) or consume one char if it matches (i+1); else match one char.',
  'O(m·n) time · O(m·n) space', `
from functools import lru_cache

def isMatch(s, p):
    @lru_cache(None)
    def dp(i, j):
        if j == len(p):
            return i == len(s)
        first = i < len(s) and p[j] in (s[i], '.')
        if j + 1 < len(p) and p[j + 1] == '*':
            return dp(i, j + 2) or (first and dp(i + 1, j))
        return first and dp(i + 1, j + 1)
    return dp(0, 0)`);

/* ── Greedy ── */
P('Greedy', 'Maximum Subarray', LC('maximum-subarray'), 'M',
  'Kadane: if the running sum goes negative, drop it and start fresh.',
  'O(n) time · O(1) space', `
def maxSubArray(nums):
    best = cur = nums[0]
    for n in nums[1:]:
        cur = max(n, cur + n)
        best = max(best, cur)
    return best`);

P('Greedy', 'Jump Game', LC('jump-game'), 'M',
  'Walk the goal backwards: if i can reach the goal, i becomes the new goal; win if goal hits 0.',
  'O(n) time · O(1) space', `
def canJump(nums):
    goal = len(nums) - 1
    for i in range(len(nums) - 2, -1, -1):
        if i + nums[i] >= goal:
            goal = i
    return goal == 0`);

P('Greedy', 'Jump Game II', LC('jump-game-ii'), 'M',
  'BFS by levels on a line: the window [l, r] is one jump; next window ends at the farthest reach.',
  'O(n) time · O(1) space', `
def jump(nums):
    jumps, l, r = 0, 0, 0
    while r < len(nums) - 1:
        farthest = max(i + nums[i] for i in range(l, r + 1))
        l, r = r + 1, farthest
        jumps += 1
    return jumps`);

P('Greedy', 'Gas Station', LC('gas-station'), 'M',
  'If total gas < total cost, impossible; otherwise restart from i+1 whenever the tank goes negative.',
  'O(n) time · O(1) space', `
def canCompleteCircuit(gas, cost):
    if sum(gas) < sum(cost):
        return -1
    tank, start = 0, 0
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0:
            tank, start = 0, i + 1
    return start`);

P('Greedy', 'Hand of Straights', LC('hand-of-straights'), 'M',
  'The smallest remaining card must start a group — consume start, start+1, … start+size−1.',
  'O(n log n) time · O(n) space', `
from collections import Counter

def isNStraightHand(hand, groupSize):
    if len(hand) % groupSize:
        return False
    count = Counter(hand)
    for start in sorted(count):
        need = count[start]
        if need == 0:
            continue
        for card in range(start, start + groupSize):
            if count[card] < need:
                return False
            count[card] -= need
    return True`);

P('Greedy', 'Merge Triplets to Form Target Triplet', LC('merge-triplets-to-form-target-triplet'), 'M',
  'Ignore any triplet that exceeds the target anywhere; from the rest, check each target slot is hit exactly.',
  'O(n) time · O(1) space', `
def mergeTriplets(triplets, target):
    hit = set()
    for t in triplets:
        if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:
            continue
        for i in range(3):
            if t[i] == target[i]:
                hit.add(i)
    return len(hit) == 3`);

P('Greedy', 'Partition Labels', LC('partition-labels'), 'M',
  'Record each char\'s last index; extend the current part\'s end to the max last index; cut when i == end.',
  'O(n) time · O(26) space', `
def partitionLabels(s):
    last = {ch: i for i, ch in enumerate(s)}
    res, start, end = [], 0, 0
    for i, ch in enumerate(s):
        end = max(end, last[ch])
        if i == end:
            res.append(end - start + 1)
            start = i + 1
    return res`);

P('Greedy', 'Valid Parenthesis String', LC('valid-parenthesis-string'), 'M',
  'Track the range [lo, hi] of possible open counts; "*" widens it; fail if hi < 0; valid if lo hits 0.',
  'O(n) time · O(1) space', `
def checkValidString(s):
    lo = hi = 0                          # min / max open parens possible
    for ch in s:
        if ch == '(':
            lo, hi = lo + 1, hi + 1
        elif ch == ')':
            lo, hi = lo - 1, hi - 1
        else:                            # '*' = ')' or '' or '('
            lo, hi = lo - 1, hi + 1
        if hi < 0:
            return False
        lo = max(lo, 0)
    return lo == 0`);

/* ── Intervals ── */
P('Intervals', 'Insert Interval', LC('insert-interval'), 'M',
  'Three phases: copy intervals ending before new, merge all overlapping into new, copy the rest.',
  'O(n) time · O(n) space', `
def insert(intervals, newInterval):
    res, i, n = [], 0, len(intervals)
    s, e = newInterval
    while i < n and intervals[i][1] < s:     # entirely before
        res.append(intervals[i]); i += 1
    while i < n and intervals[i][0] <= e:    # overlapping
        s = min(s, intervals[i][0])
        e = max(e, intervals[i][1])
        i += 1
    res.append([s, e])
    res.extend(intervals[i:])                # entirely after
    return res`);

P('Intervals', 'Merge Intervals', LC('merge-intervals'), 'M',
  'Sort by start; if the next start ≤ last end, stretch the last end; else start a new interval.',
  'O(n log n) time · O(n) space', `
def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    res = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= res[-1][1]:
            res[-1][1] = max(res[-1][1], e)
        else:
            res.append([s, e])
    return res`);

P('Intervals', 'Non-overlapping Intervals', LC('non-overlapping-intervals'), 'M',
  'Sort by end; keep the interval that ends earliest, remove anything that starts before it ends.',
  'O(n log n) time · O(1) extra', `
def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda x: x[1])
    removed, prev_end = 0, float('-inf')
    for s, e in intervals:
        if s >= prev_end:
            prev_end = e                 # keep it
        else:
            removed += 1                 # overlaps -> drop
    return removed`);

P('Intervals', 'Meeting Rooms', 'https://neetcode.io/problems/meeting-schedule', 'E',
  'Sort by start; any meeting starting before the previous one ends is a conflict.',
  'O(n log n) time · O(1) extra', `
def canAttendMeetings(intervals):      # intervals: [start, end] pairs
    intervals.sort(key=lambda x: x[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i - 1][1]:
            return False
    return True`);

P('Intervals', 'Meeting Rooms II', 'https://neetcode.io/problems/meeting-schedule-ii', 'M',
  'Min-heap of end times: if the earliest-ending room is free by my start, reuse it; heap size = rooms.',
  'O(n log n) time · O(n) space', `
import heapq

def minMeetingRooms(intervals):        # intervals: [start, end] pairs
    intervals.sort(key=lambda x: x[0])
    ends = []                            # end times of rooms in use
    for s, e in intervals:
        if ends and ends[0] <= s:
            heapq.heapreplace(ends, e)   # reuse that room
        else:
            heapq.heappush(ends, e)      # need a new room
    return len(ends)`);

P('Intervals', 'Minimum Interval to Include Each Query', LC('minimum-interval-to-include-each-query'), 'H',
  'Sort intervals and queries; for each query push intervals that started, pop ones that ended; heap top (by size) wins.',
  'O((n + q) log n) time · O(n + q) space', `
import heapq

def minInterval(intervals, queries):
    intervals.sort()
    heap, ans, i = [], {}, 0             # heap: (size, right)
    for q in sorted(queries):
        while i < len(intervals) and intervals[i][0] <= q:
            l, r = intervals[i]
            heapq.heappush(heap, (r - l + 1, r))
            i += 1
        while heap and heap[0][1] < q:
            heapq.heappop(heap)          # ended before q
        ans[q] = heap[0][0] if heap else -1
    return [ans[q] for q in queries]`);

/* ── Math & Geometry ── */
P('Math & Geometry', 'Rotate Image', LC('rotate-image'), 'M',
  'Rotate 90° clockwise = transpose, then reverse each row.',
  'O(n²) time · O(1) space', `
def rotate(matrix):
    n = len(matrix)
    for r in range(n):
        for c in range(r + 1, n):
            matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]
    for row in matrix:
        row.reverse()`);

P('Math & Geometry', 'Spiral Matrix', LC('spiral-matrix'), 'M',
  'Four walls (top, bottom, left, right): walk one side, shrink that wall, repeat.',
  'O(m·n) time · O(1) extra', `
def spiralOrder(matrix):
    res = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    while top <= bottom and left <= right:
        for c in range(left, right + 1): res.append(matrix[top][c])
        top += 1
        for r in range(top, bottom + 1): res.append(matrix[r][right])
        right -= 1
        if top <= bottom:
            for c in range(right, left - 1, -1): res.append(matrix[bottom][c])
            bottom -= 1
        if left <= right:
            for r in range(bottom, top - 1, -1): res.append(matrix[r][left])
            left += 1
    return res`);

P('Math & Geometry', 'Set Matrix Zeroes', LC('set-matrix-zeroes'), 'M',
  'Use the first row and column as marker arrays; remember separately whether they themselves had a zero.',
  'O(m·n) time · O(1) space', `
def setZeroes(matrix):
    R, C = len(matrix), len(matrix[0])
    row0 = any(matrix[0][c] == 0 for c in range(C))
    col0 = any(matrix[r][0] == 0 for r in range(R))
    for r in range(1, R):
        for c in range(1, C):
            if matrix[r][c] == 0:
                matrix[r][0] = matrix[0][c] = 0      # mark
    for r in range(1, R):
        for c in range(1, C):
            if matrix[r][0] == 0 or matrix[0][c] == 0:
                matrix[r][c] = 0
    if row0:
        for c in range(C): matrix[0][c] = 0
    if col0:
        for r in range(R): matrix[r][0] = 0`);

P('Math & Geometry', 'Happy Number', LC('happy-number'), 'E',
  'Keep summing squared digits; reaching 1 is happy, seeing a repeat means a cycle.',
  'O(log n) per step · O(log n) space', `
def isHappy(n):
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(d) ** 2 for d in str(n))
    return n == 1`);

P('Math & Geometry', 'Plus One', LC('plus-one'), 'E',
  'From the last digit: 9 becomes 0 and carry on; anything else +1 and stop; all 9s → prepend 1.',
  'O(n) time · O(1) extra', `
def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits`);

P('Math & Geometry', 'Pow(x, n)', LC('powx-n'), 'M',
  'Fast exponentiation: square x and halve n; multiply in x when n\'s low bit is 1. Negative n → 1/x.',
  'O(log n) time · O(1) space', `
def myPow(x, n):
    if n < 0:
        x, n = 1 / x, -n
    res = 1
    while n:
        if n & 1:
            res *= x
        x *= x
        n >>= 1
    return res`);

P('Math & Geometry', 'Multiply Strings', LC('multiply-strings'), 'M',
  'Digit i × digit j lands at position i+j+1 of a len(a)+len(b) array; carry into i+j.',
  'O(m·n) time · O(m + n) space', `
def multiply(num1, num2):
    if num1 == '0' or num2 == '0':
        return '0'
    res = [0] * (len(num1) + len(num2))
    for i in range(len(num1) - 1, -1, -1):
        for j in range(len(num2) - 1, -1, -1):
            total = int(num1[i]) * int(num2[j]) + res[i + j + 1]
            res[i + j + 1] = total % 10
            res[i + j] += total // 10
    return ''.join(map(str, res)).lstrip('0')`);

P('Math & Geometry', 'Detect Squares', LC('detect-squares'), 'M',
  'Count points; for a query, every stored point on its diagonal fixes a square — multiply the counts of the other two corners.',
  'add O(1) · count O(n)', `
from collections import Counter

class DetectSquares:
    def __init__(self):
        self.pts = Counter()

    def add(self, point):
        self.pts[tuple(point)] += 1

    def count(self, point):
        px, py = point
        res = 0
        for (x, y), cnt in self.pts.items():
            if abs(px - x) != abs(py - y) or x == px:
                continue                 # not a diagonal corner
            res += cnt * self.pts[(x, py)] * self.pts[(px, y)]
        return res`);

/* ── Bit Manipulation ── */
P('Bit Manipulation', 'Single Number', LC('single-number'), 'E',
  'XOR everything — pairs cancel (a ^ a = 0), the loner survives.',
  'O(n) time · O(1) space', `
def singleNumber(nums):
    res = 0
    for n in nums:
        res ^= n
    return res`);

P('Bit Manipulation', 'Number of 1 Bits', LC('number-of-1-bits'), 'E',
  'n & (n − 1) drops the lowest set bit — count how many times until n is 0.',
  'O(set bits) time · O(1) space', `
def hammingWeight(n):
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count`);

P('Bit Manipulation', 'Counting Bits', LC('counting-bits'), 'E',
  'bits[i] = bits[i >> 1] + (i & 1) — drop the last bit, reuse the answer.',
  'O(n) time · O(n) space', `
def countBits(n):
    bits = [0] * (n + 1)
    for i in range(1, n + 1):
        bits[i] = bits[i >> 1] + (i & 1)
    return bits`);

P('Bit Manipulation', 'Reverse Bits', LC('reverse-bits'), 'E',
  '32 times: shift result left, OR in n\'s lowest bit, shift n right.',
  'O(32) time · O(1) space', `
def reverseBits(n):
    res = 0
    for _ in range(32):
        res = (res << 1) | (n & 1)
        n >>= 1
    return res`);

P('Bit Manipulation', 'Missing Number', LC('missing-number'), 'E',
  'XOR all indices 0..n with all values — everything pairs off except the missing one.',
  'O(n) time · O(1) space', `
def missingNumber(nums):
    res = len(nums)
    for i, n in enumerate(nums):
        res ^= i ^ n
    return res`);

P('Bit Manipulation', 'Sum of Two Integers', LC('sum-of-two-integers'), 'M',
  'a ^ b is the sum without carry, (a & b) << 1 is the carry; repeat until no carry (mask to 32 bits in Python).',
  'O(32) time · O(1) space', `
def getSum(a, b):
    mask = 0xFFFFFFFF
    while b & mask:
        a, b = a ^ b, (a & b) << 1
    # b overflowed past 32 bits -> a holds a negative's low bits
    return a & mask if b > 0 else a`);

P('Bit Manipulation', 'Reverse Integer', LC('reverse-integer'), 'M',
  'Pop digits with % 10 and push onto the result; return 0 if it leaves the 32-bit range.',
  'O(log x) time · O(1) space', `
def reverse(x):
    sign = -1 if x < 0 else 1
    x, res = abs(x), 0
    while x:
        x, digit = divmod(x, 10)
        res = res * 10 + digit
    res *= sign
    return res if -2**31 <= res <= 2**31 - 1 else 0`);

/* ── Problem statements (paraphrased) — attached to each entry as .q ── */
const QUESTIONS = {
  // Arrays & Hashing
  "Contains Duplicate": "Given an integer array nums, return true if any value appears at least twice, otherwise false. e.g. [1,2,3,1] → true",
  "Valid Anagram": "Given two strings s and t, return true if t is an anagram of s (same letters, same counts). e.g. 'anagram', 'nagaram' → true",
  "Two Sum": "Given nums and a target, return the indices of the two numbers that add up to target. Exactly one solution exists; don't use the same element twice. e.g. [2,7,11,15], 9 → [0,1]",
  "Group Anagrams": "Given an array of strings, group the anagrams together (any order). e.g. ['eat','tea','tan','ate','nat','bat'] → [['bat'],['nat','tan'],['ate','eat','tea']]",
  "Top K Frequent Elements": "Given nums and k, return the k most frequent elements (any order). e.g. [1,1,1,2,2,3], k=2 → [1,2]",
  "Encode and Decode Strings": "Design encode(list of strings) → one string and decode(string) → the original list. Strings may contain any character, including your delimiter. e.g. ['neet','code'] round-trips unchanged",
  "Product of Array Except Self": "Return an array where answer[i] is the product of every element except nums[i], in O(n) and without division. e.g. [1,2,3,4] → [24,12,8,6]",
  "Valid Sudoku": "Decide whether a partially filled 9×9 Sudoku board is valid: no digit 1–9 repeats in any row, column, or 3×3 box (empty cells are '.'). The board need not be solvable.",
  "Longest Consecutive Sequence": "Given an unsorted array, return the length of the longest run of consecutive integers, in O(n). e.g. [100,4,200,1,3,2] → 4 (1,2,3,4)",
  // Two Pointers
  "Valid Palindrome": "After lowercasing and removing all non-alphanumeric characters, is the string a palindrome? e.g. 'A man, a plan, a canal: Panama' → true",
  "Two Sum II - Input Array Is Sorted": "Given a 1-indexed array sorted ascending, return the 1-based indices of two numbers that sum to target, using O(1) extra space. e.g. [2,7,11,15], 9 → [1,2]",
  "3Sum": "Return all unique triplets [a,b,c] in nums with a+b+c = 0; no duplicate triplets. e.g. [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]",
  "Container With Most Water": "height[i] is a vertical line at x=i. Pick two lines that, with the x-axis, hold the most water; return that area. e.g. [1,8,6,2,5,4,8,3,7] → 49",
  "Trapping Rain Water": "Given bar heights of width 1, compute how much rain water is trapped between them. e.g. [0,1,0,2,1,0,1,3,2,1,2,1] → 6",
  // Sliding Window
  "Best Time to Buy and Sell Stock": "prices[i] is the price on day i. Buy on one day and sell on a later day; return the max profit, or 0. e.g. [7,1,5,3,6,4] → 5",
  "Longest Substring Without Repeating Characters": "Return the length of the longest substring with no repeated characters. e.g. 'abcabcbb' → 3 ('abc')",
  "Longest Repeating Character Replacement": "You may change at most k characters of s (uppercase letters). Return the length of the longest substring of one repeated letter you can get. e.g. 'AABABBA', k=1 → 4",
  "Permutation in String": "Return true if s2 contains some permutation of s1 as a contiguous substring. e.g. s1='ab', s2='eidbaooo' → true ('ba')",
  "Minimum Window Substring": "Return the shortest substring of s containing every character of t (with multiplicity), or '' if none. e.g. s='ADOBECODEBANC', t='ABC' → 'BANC'",
  "Sliding Window Maximum": "A window of size k slides over nums one step at a time; return the max of each window. e.g. [1,3,-1,-3,5,3,6,7], k=3 → [3,3,5,5,6,7]",
  // Stack
  "Valid Parentheses": "Given a string of '()[]{}', decide whether every bracket is closed by the same type in the correct order. e.g. '([]{})' → true, '(]' → false",
  "Min Stack": "Design a stack supporting push, pop, top, and getMin (smallest element), each in O(1).",
  "Evaluate Reverse Polish Notation": "Evaluate an expression given as tokens in Reverse Polish Notation with + - * / (division truncates toward zero). e.g. ['2','1','+','3','*'] → 9",
  "Generate Parentheses": "Given n, generate every combination of n pairs of well-formed parentheses. e.g. n=3 → ['((()))','(()())','(())()','()(())','()()()']",
  "Daily Temperatures": "For each day, return how many days until a warmer temperature (0 if never). e.g. [73,74,75,71,69,72,76,73] → [1,1,4,2,1,1,0,0]",
  "Car Fleet": "Cars at position[i] drive at speed[i] toward target. A car can't pass the one ahead — it joins it and they move as one fleet. How many fleets arrive? e.g. target=12, pos=[10,8,0,5,3], speed=[2,4,1,1,3] → 3",
  "Largest Rectangle in Histogram": "Given bar heights of width 1, return the area of the largest rectangle that fits inside the histogram. e.g. [2,1,5,6,2,3] → 10",
  // Binary Search
  "Binary Search": "Given a sorted array and a target, return the target's index or -1, in O(log n). e.g. [-1,0,3,5,9,12], 9 → 4",
  "Search a 2D Matrix": "Each row is sorted, and each row's first value is greater than the previous row's last. Return whether target is in the matrix, in O(log(m·n)).",
  "Koko Eating Bananas": "Koko eats up to k bananas per hour from one pile (a smaller pile still takes the whole hour). Find the minimum k to finish all piles within h hours. e.g. piles=[3,6,7,11], h=8 → 4",
  "Find Minimum in Rotated Sorted Array": "A sorted array of unique values was rotated some number of times. Return the minimum element in O(log n). e.g. [3,4,5,1,2] → 1",
  "Search in Rotated Sorted Array": "Search a target in a rotated sorted array of unique values; return its index or -1, in O(log n). e.g. [4,5,6,7,0,1,2], 0 → 4",
  "Time Based Key-Value Store": "Design set(key, value, timestamp) and get(key, timestamp), which returns the value set at the largest timestamp ≤ the given one, or '' if none. Timestamps of set calls strictly increase.",
  "Median of Two Sorted Arrays": "Given two sorted arrays, return the median of their combined elements in O(log(m+n)). e.g. [1,3], [2] → 2.0",
  // Linked List
  "Reverse Linked List": "Reverse a singly linked list and return the new head. e.g. 1→2→3→4→5 → 5→4→3→2→1",
  "Merge Two Sorted Lists": "Merge two sorted linked lists into one sorted list by splicing their nodes; return its head. e.g. 1→2→4 + 1→3→4 → 1→1→2→3→4→4",
  "Reorder List": "Reorder L0→L1→…→Ln into L0→Ln→L1→Ln-1→L2→… in place (change nodes, not values). e.g. 1→2→3→4 → 1→4→2→3",
  "Remove Nth Node From End of List": "Remove the nth node from the end of a linked list and return the head. e.g. 1→2→3→4→5, n=2 → 1→2→3→5",
  "Copy List with Random Pointer": "Each node has next and a random pointer (to any node or null). Return a deep copy of the list.",
  "Add Two Numbers": "Two non-negative numbers are stored as linked lists with digits in reverse order. Return their sum as a list in the same form. e.g. 2→4→3 + 5→6→4 → 7→0→8 (342 + 465 = 807)",
  "Linked List Cycle": "Return true if the linked list contains a cycle, ideally with O(1) memory.",
  "Find the Duplicate Number": "nums has n+1 integers, each in [1, n], with exactly one value repeated (possibly many times). Find it without modifying nums and with O(1) extra space. e.g. [1,3,4,2,2] → 2",
  "LRU Cache": "Design an LRU cache with a capacity: get(key) returns the value or -1, put(key, value) inserts/updates and evicts the least recently used key when over capacity. Both O(1).",
  "Merge k Sorted Lists": "Merge k sorted linked lists into one sorted list. e.g. [1→4→5, 1→3→4, 2→6] → 1→1→2→3→4→4→5→6",
  "Reverse Nodes in k-Group": "Reverse the list's nodes k at a time; leave a final group of fewer than k nodes as is. e.g. 1→2→3→4→5, k=2 → 2→1→4→3→5",
  // Trees
  "Invert Binary Tree": "Mirror a binary tree (swap every node's left and right children) and return its root.",
  "Maximum Depth of Binary Tree": "Return the number of nodes on the longest path from the root down to a leaf.",
  "Diameter of Binary Tree": "Return the length (in edges) of the longest path between any two nodes; it need not pass through the root. e.g. [1,2,3,4,5] → 3",
  "Balanced Binary Tree": "Is the tree height-balanced — at every node, do the left and right subtree heights differ by at most 1?",
  "Same Tree": "Return true if two binary trees have identical structure and node values.",
  "Subtree of Another Tree": "Return true if subRoot matches some node of root together with all of that node's descendants.",
  "Lowest Common Ancestor of a BST": "In a binary search tree, return the lowest node that has both p and q as descendants (a node counts as its own descendant).",
  "Binary Tree Level Order Traversal": "Return node values level by level, left to right. e.g. [3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]",
  "Binary Tree Right Side View": "Standing on the right of the tree, return the values you can see, top to bottom (the rightmost node of each level). e.g. [1,2,3,null,5,null,4] → [1,3,4]",
  "Count Good Nodes in Binary Tree": "A node is good if no node on the path from the root to it has a greater value. Count the good nodes. e.g. [3,1,4,3,null,1,5] → 4",
  "Validate Binary Search Tree": "Decide whether a binary tree is a valid BST: every node's left subtree holds only smaller values and its right subtree only larger ones.",
  "Kth Smallest Element in a BST": "Return the kth smallest value (1-indexed) in a binary search tree.",
  "Construct Binary Tree from Preorder and Inorder": "Rebuild a binary tree (unique values) from its preorder and inorder traversals. e.g. pre=[3,9,20,15,7], in=[9,3,15,20,7] → [3,9,20,null,null,15,7]",
  "Binary Tree Maximum Path Sum": "A path is any sequence of connected nodes (each used at most once), not necessarily through the root. Return the maximum path sum. e.g. [-10,9,20,null,null,15,7] → 42",
  "Serialize and Deserialize Binary Tree": "Design serialize(root) → string and deserialize(string) → the original tree.",
  // Tries
  "Implement Trie (Prefix Tree)": "Implement a trie with insert(word), search(word) (exact match), and startsWith(prefix).",
  "Design Add and Search Words Data Structure": "Design addWord(word) and search(word), where search may contain '.' that matches any single letter. e.g. after adding 'bad': search('.ad') → true",
  "Word Search II": "Given a letter grid and a word list, return every word that can be traced through horizontally/vertically adjacent cells, using each cell at most once per word.",
  // Heap / Priority Queue
  "Kth Largest Element in a Stream": "Design a class initialised with k and nums whose add(val) inserts val and returns the current kth largest element of the stream.",
  "Last Stone Weight": "Repeatedly smash the two heaviest stones: equal weights both vanish, otherwise the difference remains. Return the last stone's weight, or 0. e.g. [2,7,4,1,8,1] → 1",
  "K Closest Points to Origin": "Return the k points closest to (0,0) by Euclidean distance, in any order. e.g. [[1,3],[-2,2]], k=1 → [[-2,2]]",
  "Kth Largest Element in an Array": "Return the kth largest element in an unsorted array (kth in sorted order, not kth distinct). e.g. [3,2,1,5,6,4], k=2 → 5",
  "Task Scheduler": "Tasks are letters; each takes one interval. The same task must wait n intervals before running again (CPU may idle). Return the minimum number of intervals. e.g. ['A','A','A','B','B','B'], n=2 → 8",
  "Design Twitter": "Design postTweet(user, tweetId), getNewsFeed(user) (the 10 most recent tweets from the user and those they follow, newest first), follow, and unfollow.",
  "Find Median from Data Stream": "Design addNum(num) and findMedian() over a growing stream of numbers.",
  // Backtracking
  "Subsets": "Given unique integers, return every possible subset (the power set), no duplicate subsets. e.g. [1,2,3] → [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
  "Combination Sum": "Given distinct candidates and a target, return all unique combinations summing to target; each candidate may be reused any number of times. e.g. [2,3,6,7], 7 → [[2,2,3],[7]]",
  "Permutations": "Return every permutation of an array of distinct integers. e.g. [1,2,3] → 6 permutations",
  "Subsets II": "Like Subsets, but nums may contain duplicates — return all subsets without duplicate subsets. e.g. [1,2,2] → [[],[1],[1,2],[1,2,2],[2],[2,2]]",
  "Combination Sum II": "Return all unique combinations of candidates summing to target, using each element at most once; candidates may contain duplicates. e.g. [10,1,2,7,6,1,5], 8 → [[1,1,6],[1,2,5],[1,7],[2,6]]",
  "Word Search": "Return true if word can be traced through horizontally/vertically adjacent cells of the grid, using each cell at most once.",
  "Palindrome Partitioning": "Split s so every piece is a palindrome; return all such partitions. e.g. 'aab' → [['a','a','b'],['aa','b']]",
  "Letter Combinations of a Phone Number": "Given digits 2–9, return every letter string they could spell on a phone keypad. e.g. '23' → ['ad','ae','af','bd','be','bf','cd','ce','cf']",
  "N-Queens": "Place n queens on an n×n board so none attack each other; return every distinct board ('Q' and '.'). e.g. n=4 → 2 solutions",
  // Graphs
  "Number of Islands": "In a grid of '1' (land) and '0' (water), count the islands — groups of land connected horizontally or vertically.",
  "Max Area of Island": "In a grid of 1s and 0s, return the area (cell count) of the largest island, or 0 if there is none.",
  "Clone Graph": "Given a node of a connected undirected graph (each node has val and a neighbors list), return a deep copy of the whole graph.",
  "Walls and Gates": "A grid has -1 (wall), 0 (gate), and INF = 2147483647 (empty room). Fill each empty room in place with the distance to its nearest gate; leave unreachable rooms as INF.",
  "Rotting Oranges": "Cells are 0 (empty), 1 (fresh), 2 (rotten). Each minute, fresh oranges next to rotten ones rot. Return the minutes until none are fresh, or -1 if impossible. e.g. [[2,1,1],[1,1,0],[0,1,1]] → 4",
  "Pacific Atlantic Water Flow": "Rain flows to neighbours of equal or lower height. The Pacific touches the top and left edges, the Atlantic the bottom and right. Return every cell that can drain to both oceans.",
  "Surrounded Regions": "In a grid of 'X' and 'O', flip to 'X' every region of 'O's not connected to the border. Modify in place.",
  "Course Schedule": "numCourses courses; prerequisites[i] = [a, b] means take b before a. Can you finish all courses (i.e. is there no cycle)? e.g. 2, [[1,0],[0,1]] → false",
  "Course Schedule II": "Same setup as Course Schedule; return a valid order to take all courses, or [] if impossible. e.g. 4, [[1,0],[2,0],[3,1],[3,2]] → [0,1,2,3]",
  "Graph Valid Tree": "Given n nodes (0..n-1) and a list of undirected edges, decide whether the edges form a valid tree (connected, with no cycles).",
  "Number of Connected Components": "Given n nodes and a list of undirected edges, return the number of connected components.",
  "Redundant Connection": "A tree on nodes 1..n had one extra edge added. Return an edge whose removal leaves a tree; if several qualify, return the one that appears last in the input. e.g. [[1,2],[1,3],[2,3]] → [2,3]",
  "Word Ladder": "Transform beginWord into endWord by changing one letter at a time, every intermediate word in wordList. Return the number of words in the shortest sequence, or 0. e.g. hit → cog via hot, dot, dog → 5",
  // Advanced Graphs
  "Reconstruct Itinerary": "Given flight tickets [from, to], build the itinerary starting at 'JFK' that uses every ticket exactly once; if several work, return the lexicographically smallest.",
  "Min Cost to Connect All Points": "Connecting two points costs their Manhattan distance. Return the minimum cost to connect all points (a minimum spanning tree). e.g. [[0,0],[2,2],[3,10],[5,2],[7,0]] → 20",
  "Network Delay Time": "times[i] = (u, v, w): a signal takes w to travel from u to v. Sent from node k, how long until all n nodes receive it? Return -1 if some never do.",
  "Swim in Rising Water": "In an n×n grid of elevations, at time t you can swim through any cell with elevation ≤ t. Return the least time to get from top-left to bottom-right.",
  "Alien Dictionary": "Given words sorted in an alien alphabet, return any valid letter order, or '' if the order is invalid. e.g. ['hrn','hrf','er','enn','rfnn'] → 'hernf'",
  "Cheapest Flights Within K Stops": "Given flights (from, to, price), return the cheapest price from src to dst using at most k stops, or -1.",
  // 1-D DP
  "Climbing Stairs": "You can climb 1 or 2 steps at a time. How many distinct ways are there to reach step n? e.g. n=3 → 3",
  "Min Cost Climbing Stairs": "cost[i] is paid when you step on stair i; you may then climb 1 or 2. Start at index 0 or 1; return the minimum cost to reach the top (past the last stair). e.g. [10,15,20] → 15",
  "House Robber": "You can't rob two adjacent houses. Return the most money you can rob. e.g. [2,7,9,3,1] → 12",
  "House Robber II": "Same as House Robber, but the houses form a circle (first and last are adjacent). e.g. [2,3,2] → 3",
  "Longest Palindromic Substring": "Return the longest palindromic substring of s. e.g. 'babad' → 'bab' (or 'aba')",
  "Palindromic Substrings": "Count the palindromic substrings of s (substrings at different positions count separately). e.g. 'aaa' → 6",
  "Decode Ways": "Digits map to letters A=1 … Z=26. Return how many ways the digit string can be decoded. e.g. '226' → 3 (BZ, VF, BBF); '06' → 0",
  "Coin Change": "Return the fewest coins needed to make amount (unlimited coins of each type), or -1 if impossible. e.g. [1,2,5], 11 → 3",
  "Maximum Product Subarray": "Return the largest product of any contiguous non-empty subarray. e.g. [2,3,-2,4] → 6",
  "Word Break": "Can s be split into a sequence of dictionary words (words may be reused)? e.g. 'leetcode', ['leet','code'] → true",
  "Longest Increasing Subsequence": "Return the length of the longest strictly increasing subsequence. e.g. [10,9,2,5,3,7,101,18] → 4",
  "Partition Equal Subset Sum": "Can nums be split into two subsets with equal sums? e.g. [1,5,11,5] → true ([1,5,5] and [11])",
  // 2-D DP
  "Unique Paths": "A robot at the top-left of an m×n grid can only move right or down. How many paths reach the bottom-right? e.g. m=3, n=7 → 28",
  "Longest Common Subsequence": "Return the length of the longest subsequence common to both strings. e.g. 'abcde', 'ace' → 3",
  "Best Time to Buy and Sell Stock with Cooldown": "Trade as many times as you like, holding at most one share, but after selling you must wait one day before buying again. Return the max profit. e.g. [1,2,3,0,2] → 3",
  "Coin Change II": "Return the number of combinations of coins that make amount (unlimited coins of each type). e.g. 5, [1,2,5] → 4",
  "Target Sum": "Put + or − in front of each number in nums; count the ways the expression equals target. e.g. [1,1,1,1,1], 3 → 5",
  "Interleaving String": "Can s3 be formed by interleaving s1 and s2 while keeping each one's character order? e.g. 'aabcc', 'dbbca', 'aadbbcbcac' → true",
  "Longest Increasing Path in a Matrix": "Return the length of the longest strictly increasing path in a matrix, moving up/down/left/right. e.g. [[9,9,4],[6,6,8],[2,1,1]] → 4",
  "Distinct Subsequences": "Count the distinct subsequences of s that equal t. e.g. s='rabbbit', t='rabbit' → 3",
  "Edit Distance": "Return the minimum number of single-character inserts, deletes, or replaces to turn word1 into word2. e.g. 'horse' → 'ros' = 3",
  "Burst Balloons": "Bursting balloon i earns nums[left]·nums[i]·nums[right] using its current neighbours (out of bounds counts as 1). Return the max coins from bursting all of them. e.g. [3,1,5,8] → 167",
  "Regular Expression Matching": "Implement regex matching with '.' (any single char) and '*' (zero or more of the preceding element); the pattern must match the whole string. e.g. 'aa', 'a*' → true",
  // Greedy
  "Maximum Subarray": "Return the largest sum of any contiguous non-empty subarray. e.g. [-2,1,-3,4,-1,2,1,-5,4] → 6",
  "Jump Game": "nums[i] is the max jump length from index i. Starting at index 0, can you reach the last index? e.g. [2,3,1,1,4] → true; [3,2,1,0,4] → false",
  "Jump Game II": "Same setup (the end is always reachable): return the minimum number of jumps to reach the last index. e.g. [2,3,1,1,4] → 2",
  "Gas Station": "Stations on a circle: gas[i] is fuel you collect at i, cost[i] the fuel to drive to i+1. Return the starting station that lets you complete the loop, or -1 (the answer is unique).",
  "Hand of Straights": "Can the cards be rearranged into groups of groupSize consecutive values? e.g. [1,2,3,6,2,3,4,7,8], 3 → true",
  "Merge Triplets to Form Target Triplet": "Merging two triplets takes the element-wise max. Can repeated merges of the given triplets produce exactly target? e.g. [[2,5,3],[1,8,4],[1,7,5]], [2,7,5] → true",
  "Partition Labels": "Split s into as many parts as possible so each letter appears in at most one part; return the part sizes. e.g. 'ababcbacadefegdehijhklij' → [9,7,8]",
  "Valid Parenthesis String": "s contains '(', ')' and '*', where '*' can be '(', ')' or empty. Can s be a valid parenthesis string? e.g. '(*))' → true",
  // Intervals
  "Insert Interval": "Insert newInterval into a sorted list of non-overlapping intervals, merging where needed. e.g. [[1,3],[6,9]] + [2,5] → [[1,5],[6,9]]",
  "Merge Intervals": "Merge all overlapping intervals. e.g. [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]",
  "Non-overlapping Intervals": "Return the minimum number of intervals to remove so the rest don't overlap (touching at an endpoint is fine). e.g. [[1,2],[2,3],[3,4],[1,3]] → 1",
  "Meeting Rooms": "Given meeting time intervals, can one person attend all of them (no overlaps)? e.g. [(0,30),(5,10),(15,20)] → false",
  "Meeting Rooms II": "Given meeting time intervals, return the minimum number of rooms needed. e.g. [(0,30),(5,10),(15,20)] → 2",
  "Minimum Interval to Include Each Query": "For each query q, return the size (right − left + 1) of the smallest interval containing q, or -1. e.g. [[1,4],[2,4],[3,6],[4,4]], [2,3,4,5] → [3,3,1,4]",
  // Math & Geometry
  "Rotate Image": "Rotate an n×n matrix 90° clockwise, in place. e.g. [[1,2,3],[4,5,6],[7,8,9]] → [[7,4,1],[8,5,2],[9,6,3]]",
  "Spiral Matrix": "Return every element of an m×n matrix in clockwise spiral order. e.g. [[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5]",
  "Set Matrix Zeroes": "If a cell is 0, set its entire row and column to 0 — in place, ideally with O(1) extra space.",
  "Happy Number": "Repeatedly replace n with the sum of the squares of its digits. n is happy if this reaches 1; it is not if it loops forever. e.g. 19 → true",
  "Plus One": "A big integer is stored as an array of digits, most significant first. Add one and return the digits. e.g. [1,2,9] → [1,3,0]; [9,9] → [1,0,0]",
  "Pow(x, n)": "Implement x raised to the power n (n may be negative). e.g. 2.0, -2 → 0.25",
  "Multiply Strings": "Multiply two non-negative integers given as strings and return the product as a string, without converting them to integers directly. e.g. '123' × '456' → '56088'",
  "Detect Squares": "Design add(point) (duplicates allowed) and count(point): how many ways can the query point and three stored points form an axis-aligned square with positive area?",
  // Bit Manipulation
  "Single Number": "Every element appears twice except one; find it in O(n) time and O(1) space. e.g. [4,1,2,1,2] → 4",
  "Number of 1 Bits": "Return the number of set bits in a positive integer's binary representation. e.g. 11 (1011) → 3",
  "Counting Bits": "For every i from 0 to n, return the number of 1 bits in i. e.g. n=5 → [0,1,1,2,1,2]",
  "Reverse Bits": "Reverse the bits of a 32-bit unsigned integer. e.g. 43261596 → 964176192",
  "Missing Number": "nums contains n distinct numbers from [0, n]; return the one that's missing. e.g. [3,0,1] → 2",
  "Sum of Two Integers": "Return a + b without using the + or − operators. e.g. 1, 2 → 3",
  "Reverse Integer": "Reverse the digits of a signed 32-bit integer; return 0 if the result overflows the 32-bit range. e.g. -123 → -321; 1534236469 → 0",
};
NEETCODE.forEach(p => { p.q = QUESTIONS[p.t] || ''; });
