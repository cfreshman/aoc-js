if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    if (1) {
      let rs = lines.map(x => {
        const match = x.match(/^(.+)-(\d+)\[(\w+)\]$/)
        let [_, lets, id, check] = match

        lets = [...lets.replaceAll('-', '')]
        const counts = U.count(lets)
        lets = [...new Set(lets)].sort().sort((a, b) => counts[b] - counts[a])
        if (lets.slice(0, 5).join('') === check) return Number(id)
        return 0
      })
      p1(U.sum(rs))
    }
    if (1) {
      const a_code = 'a'.charCodeAt(0)
      let rs = lines.map(x => {
        const match = x.match(/^(.+)-(\d+)\[(\w+)\]$/)
        let [_, lets, id, check] = match

        const original_lets = lets
        lets = [...lets.replaceAll('-', '')]
        const counts = U.count(lets)
        lets = [...new Set(lets)].sort().sort((a, b) => counts[b] - counts[a])
        if (lets.slice(0, 5).join('') === check) return [original_lets, Number(id)]
        return undefined
      }).filter(x => x)
      rs = rs.map(([lets, id]) => {
        const shifted = [...lets].map(c => c === '-' ? ' ' : String.fromCharCode((c.charCodeAt(0) - a_code + id) % 26 + a_code)).join('')
        // l(shifted, id)
        return [shifted, id]
      })
      p2(rs.find(([name, id]) => name.includes('north'))[1])
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
  const keys = U.k
  const values = U.v
  const entries = U.e
  const from = U.f
  const range = U.range
  window.U = U

  // https://github.com/datastructures-js/priority-queue
  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')
})()
module.exports = solution