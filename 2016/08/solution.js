if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (ii) => U.answer(ii, (ll, p1, p2) => {
    const wrap = (i, n) => (i % n + n) % n
    if (1) {
      const S = range(6).map(i => range(50).map(j => 0))
      ll.map(l => {
        let [inst, ...args] = l.split(/ /)
        args = args.join(' ')
        if (inst === 'rect') {
          const [w, h] = args.split('x', 2).map(Number)
          range(h).map(y => range(w).map(x => S[y][x] = 1))
        } else {
          const [dir, a2] = args.split('=')
          const [a, b] = a2.split(' by ').map(Number)
          if (dir === 'column x') {
            const curr = range(6).map(i => S[i][a])
            range(6).map(i => S[i][a] = curr[wrap(i - b, 6)])
          } else {
            const curr = range(50).map(i => S[a][i])
            range(50).map(i => S[a][i] = curr[wrap(i - b, 50)])
          }
        }
      })
      p1(U.sum(S.M(row => U.sum(row))))
      p2()
      L(S.M(row => row.map(x => x ? 'O' : ' ').join('')).join('\n'))
    }
    if (1) {
      // p2()
    }
  })

  const l = console.log, L = l
  const U = {
    opt: (val, func) => func ? func(val) : val,
    apply: (val, func) => func(val),
    use: (val, func) => { func(val); return val; },
    o: (field, value) => ({ [field]: value }),
    k: (ob, func) => U.opt(Object.keys(ob), func),
    v: (ob, func) => U.opt(Object.values(ob), func),
    e: (ob, func) => U.opt(Object.entries(ob), func),
    f: (ar) => Object.fromEntries(ar),
    a: (o) => Array.from(o),
    n: (o) => typeof o === 'string' ? Number(o) : U.a(o).map(Number),
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
    group: (xs, n) => {
      const groups = []
      for (let i = 0; i < xs.length; i += n) {
        groups.push(xs.slice(i, Math.min(xs.length, i + n)))
      }
      return groups
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
  const keys = U.k, K = keys
  const values = U.v, V = values
  const entries = U.e, E = entries
  const from = U.f, F = from
  const range = U.range, R = range
  const sum = U.sum
  const product = U.product
  const max = U.maxxing
  const min = U.minning
  const A = U.a
  const N = U.n
  const M = U.match
  window.U = U

  // https://github.com/datastructures-js/priority-queue
  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')

  Array.prototype.N = function() { return U.n(this) }
  Array.prototype.S = function(...xs) { return this.slice(...xs) }
  Array.prototype.L = function() { return this.length }
  Array.prototype.M = function(f) { return this.map(f) }
  String.prototype.N = function() { return U.n(this) }
  String.prototype.C = function() { return U.a(this) }
  String.prototype.M = function(re) { return this.match(re) }
  String.prototype.MA = function(re) { return this.matchAll(new RegExp(re, re.flags + 'g')) }
  String.prototype.L = function() { return this.length }
})()
module.exports = solution