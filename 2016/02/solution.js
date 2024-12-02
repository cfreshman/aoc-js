if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    const DIRS = {
      U: { x: 0, y: -1 },
      D: { x: 0, y: 1 },
      L: { x: -1, y: 0 },
      R: { x: 1, y: 0 },
    }
    if (1) {
      const keypad = ['123', '456', '789']
      let pos = { x:1, y:1 }
      let rs = lines.map(x => {
        ;[...x].map(dir => {
          const { x, y } = DIRS[dir]
          pos.x = Math.max(0, Math.min(pos.x + x, 2))
          pos.y = Math.max(0, Math.min(pos.y + y, 2))
        })
        return keypad[pos.y][pos.x]
      })
      p1(rs.join(''))
    }
    if (1) {
      const keypad = ['  1  ', ' 234 ', '56789', ' ABC ', '  D  ']
      const get = (x, y) => (keypad[y]?.[x] || ' ').trim()
      let pos = { x:0, y:2 }
      let rs = lines.map(x => {
        ;[...x].map(dir => {
          const { x, y } = DIRS[dir]
          const nx = pos.x + x
          const ny = pos.y + y
          if (get(nx, ny)) {
            pos.x = nx
            pos.y = ny
          }
        })
        return keypad[pos.y][pos.x]
      })
      p2(rs.join(''))
    }
  })

  const l = console.log
  const U = {
    opt: (val, func) => func ? func(val) : val,
    apply: (val, func) => func(val),
    use: (val, func) => { func(val); return val; },
    o: (field, value) => ({ [field]: value }),
    k: (ob, func) => U.opt(Object.keys(ob), func),
    v: (ob, func) => U.opt(Object.values(ob), func),
    e: (ob, func) => U.opt(Object.entries(ob), func),
    f: (ar) => Object.fromEntries(ar),
    list: (str, sep) => typeof str === 'string' ? str.split(sep || ' ') : Array.from(str),
    set: (str, sep) => new Set(U.list(str, sep)),
    merge: obs => Object.assign({}, ...obs),
    omap: (ob, func) => Object.entries(ob).map(entry => func(...entry)),
    i: (ar, i) => (i < 0) ? ar[ar.length + i] : ar[i],
    wrap: (ar, i) => ar[(ar.length + i) % ar.length],
    numsort: (ar, func = Number) => ar.sort((a, b) => func(a) - func(b)),
    maxxing: (xs, f=x=>x) => {
      if (!xs.length) return undefined
      let max_i = 0, max_value = f(xs[0])
      for (let i = 1; i < xs.length; i++) {
        const value = f(xs[i])
        if (value > max_value) {
          max_i = i
          max_value = value
        }
      }
      return xs[max_i]
    },
    minning: (xs, f=x=>x) => {
      if (!xs.length) return undefined
      let min_i = 0, min_value = f(xs[0])
      for (let i = 1; i < xs.length; i++) {
        const value = f(xs[i])
        if (value < min_value) {
          min_i = i
          min_value = value
        }
      }
      return xs[min_i]
    },
    sum: (ar, func) => ar.reduce((sum, val) => sum + U.opt(val, func), 0),
    product: (ar, func) => ar.reduce((prod, val) => prod * U.opt(val, func), 1),
    match: (strs, regex, func) => strs.map(str => U.opt(str.match(regex), func)),
    union: (a, b) => new Set(...a, ...b),
    splice: (ar, i, nX, ...items) =>
      U.use(ar.slice(), copy => copy.splice(i, nX, ...items)),
    range: (start, stop, step) => {
      if (step === undefined) step = 1;
      if (stop === undefined) [stop, start] = [start, 0];
      return Array.from({ length: stop - start }, (_, i) => i * step + start);
    },
    count: ar => U.use({}, counts => ar.map(e => { counts[e] = 1 + (counts[e] || 0); })),
    diff: ar => ar.slice(1).map((val, i) => val - ar[i]),
    array: (length, func = () => 0) => Array.from({ length }).map((_, i) => func(i)),
    answer: (input, func) => U.use({}, answers => func(input.split('\n'), ...['1', '2'].map(pN => aN => { l(pN, aN); answers[pN] = aN; }))),
  }
  const keys = U.k
  const values = U.v
  const entries = U.e
  const from = U.f
  const range = U.range
  const list = U.list
  const set = U.set
  window.U = U

  // https://github.com/datastructures-js/priority-queue
  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')
})()
module.exports = solution