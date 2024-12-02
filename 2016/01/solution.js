if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    const DIRS = [
      [0, 1], // N
      [1, 0], // E
      [0, -1], // S
      [-1, 0], // W
    ]
    if (1) {
      const state = {
        x: 0,
        y: 0,
        dir_i: 0,
      }
      input.split(', ').map(inst => {
        const turn = inst[0]
        const dist = Number(inst.slice(1))
        state.dir_i = (state.dir_i + (turn === 'R' ? 1 : 3)) % 4
        const [dx, dy] = DIRS[state.dir_i]
        state.x += dx * dist
        state.y += dy * dist
      })
      p1(Math.abs(state.x) + Math.abs(state.y))
    }
    if (1) {
      const state = {
        x: 0,
        y: 0,
        dir_i: 0,
      }
      const visited = new Set(['0,0'])
      input.split(', ').some(inst => {
        const turn = inst[0]
        const dist = Number(inst.slice(1))
        state.dir_i = (state.dir_i + (turn === 'R' ? 1 : 3)) % 4
        const [dx, dy] = DIRS[state.dir_i]
        for (let i = 0; i < dist; i++) {
          state.x += dx
          state.y += dy
          const key = `${state.x},${state.y}`
          if (visited.has(key)) {
            p2(Math.abs(state.x) + Math.abs(state.y))
            return true
          }
          visited.add(key)
        }
      })
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
  window.U = U

  // https://github.com/datastructures-js/priority-queue
  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')
})()
module.exports = solution