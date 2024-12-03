if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    if (1) {
      let rs = lines.filter(x => {
        let window = false, has_abba = false
        for (let i = 0; i < x.length - 3; i++) {
          const a = x[i], b = x[i + 1], c = x[i + 2], d = x[i + 3]
          if (a === '[') window = true
          else if (a === ']') window = false
          else if (!window && a === d && b === c && a !== b) has_abba = true
          else if (window && a === d && b === c && a !== b) return false
        }
        return has_abba
      })
      p1(rs.length)
    }
    if (1) {
      let rs = lines.filter(x => {
        const windows = Array.from(x.matchAll(/\[([^\]]+)\]/g)).map(x => x[1])
        const abas = []
        windows.map(window => {
          for (let i = 0; i < window.length - 2; i++) {
            const a = window[i], b = window[i + 1], c = window[i + 2]
            if (a === c && a !== b) abas.push(b + a + b)
          }
        })
        if (!abas.length) return false

        let window = false, has_aba = false
        for (let i = 0; i < x.length - 2; i++) {
          if (x[i] === '[') window = true
          else if (x[i] === ']') window = false
          else if (!window && abas.some(aba => aba === x.slice(i, i + 3))) has_aba = true
        }
        return has_aba
      })
      p2(rs.length)
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