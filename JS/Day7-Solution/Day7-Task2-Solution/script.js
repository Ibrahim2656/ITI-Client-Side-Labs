// Node factory  
function createNode(value) {
  return { value: String(value), next: null };
}

// Linked list object
const linkedList = {
  head: null,
  tail: null,

insertAtBeginning(value) {
    const node = createNode(value);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node; // first node
  },

insertAtEnd(value) {
    const node = createNode(value);
    if (!this.head) { this.head = node; this.tail = node; return; }
    this.tail.next = node;
    this.tail = node;
  },

removeFromBeginning() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // became empty
    removed.next = null;
    return removed.value;
  },

removeFromEnd() {
    if (!this.head) return null;
    if (!this.head.next) {
        const v = this.head.value;
        this.head = null; this.tail = null;
        return v;
    }
    // find node before tail
    let cur = this.head;
    while (cur.next && cur.next !== this.tail) cur = cur.next;
    const val = this.tail.value;
    cur.next = null;
    this.tail = cur;
    return val;
  },

reverse() {
    let prev = null;
    let cur = this.head;
    const oldHead = this.head;
    while (cur) {
        const nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    this.head = prev;
    this.tail = oldHead; // old head becomes new tail
  },

toArray() {
    const arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }
    return arr;
  },

  getHeadValue() { return this.head ? this.head.value : '—'; },
  getTailValue() { return this.tail ? this.tail.value : '—'; }
};

// ---------- DOM refs ----------
const display = document.getElementById('listDisplay');
const debugLine = document.getElementById('debug');
const opLog = document.getElementById('opLog');
const input = document.getElementById('valueInput');

function logOp(msg) {
  opLog.textContent = msg;
  console.log(msg);
}

// ---------- Rendering (head -> tail, left to right) ----------
function renderList() {
  display.innerHTML = '';

  const values = linkedList.toArray();
  debugLine.textContent = `List (head → tail): ${values.length ? values.join(' → ') : 'empty'} | head: ${linkedList.getHeadValue()} | tail: ${linkedList.getTailValue()}`;

  // build nodes
  values.forEach((val, idx) => {
    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    nodeEl.textContent = val;

    // attach node now (so position in flow is correct)
    display.appendChild(nodeEl);

    // arrow if not last
    if (idx !== values.length - 1) {
      const arr = document.createElement('div');
      arr.className = 'arrow';
      arr.textContent = '→';
      display.appendChild(arr);
      // animate arrow slightly after node
      setTimeout(() => arr.classList.add('show'), 60 * idx + 120);
    }

    // animate node
    setTimeout(() => nodeEl.classList.add('show'), 60 * idx + 60);
  });

  // HEAD badge on first node
  const nodes = Array.from(display.querySelectorAll('.node'));
  if (nodes.length > 0) {
    const first = nodes[0];
    const headBadge = document.createElement('div');
    headBadge.className = 'badge'; headBadge.textContent = 'HEAD';
    first.appendChild(headBadge);

    const last = nodes[nodes.length - 1];
    const tailBadge = document.createElement('div');
    tailBadge.className = 'badge'; tailBadge.textContent = 'TAIL';
    // offset tail badge slightly right for clarity
    tailBadge.style.left = 'calc(50% + 24px)';
    last.appendChild(tailBadge);
  }
}

//Button behaviors 
document.getElementById('btnInsertBegin').addEventListener('click', () => {
  const v = input.value.trim();
  if (!v) { input.focus(); return; }
  linkedList.insertAtBeginning(v);
  logOp(`Inserted at beginning: ${v}`);
  renderList();
  input.value = '';
  input.focus();
});

document.getElementById('btnInsertEnd').addEventListener('click', () => {
  const v = input.value.trim();
  if (!v) { input.focus(); return; }
  linkedList.insertAtEnd(v);
  logOp(`Inserted at end: ${v}`);
  renderList();
  input.value = '';
  input.focus();
});

document.getElementById('btnRemoveBegin').addEventListener('click', () => {
  const removed = linkedList.removeFromBeginning();
  logOp(removed === null ? 'Nothing to remove at beginning' : `Removed from beginning: ${removed}`);
  renderList();
});

document.getElementById('btnRemoveEnd').addEventListener('click', () => {
  const removed = linkedList.removeFromEnd();
  logOp(removed === null ? 'Nothing to remove at end' : `Removed from end: ${removed}`);
  renderList();
});

document.getElementById('btnReverse').addEventListener('click', () => {
  linkedList.reverse();
  logOp('List reversed');
  renderList();
});

// allow Enter to add to end by default (typical behavior)
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const v = input.value.trim();
    if (!v) return;
    linkedList.insertAtEnd(v);
    logOp(`Inserted at end (Enter): ${v}`);
    renderList();
    input.value = '';
  }
});

// initial
input.focus();
renderList();
