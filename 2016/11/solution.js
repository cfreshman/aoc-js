if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (ii) => U.answer(ii, (ll, p1, p2) => {
    let I = []
    let floors = range(4).map(i => [])
    const item = (i, chip, type) => ({ i, chip, type })
    ll.slice(0, -1).map((line, i) => {
      const [_, raw_items] = RS(/The \w+ floor contains (.+)\./, line)
      floors[i] = raw_items.split(/, |, and | and /g).map(raw_item => {
        let match = RS(/an? (\w+)-compatible \w+/, raw_item)
        if (match) {
          const [_, type] = match
          I.push(item(I.length, true, type))
          return I.length - 1
        } else {
          const [_, type] = RS(/an? (\w+) generator/, raw_item)
          I.push(item(I.length, false, type))
          return I.length - 1
        }
      })
    })
    const run = (out) => {
      const state = {
        floors,
        elevator: 0,
        moves: 0,
      }
      const goal_count = sum(floors.map(f => f.length))
      const frontier = []
      const explored = new Set()
      const to_key = (state) => {
        // state.floors.map(f => f.join(',')).join(',') + ',' + state.elevator

        // HAD TO LOOK UP A HINT - changed key function to prune more states
        // https://www.reddit.com/r/adventofcode/comments/5hoia9/2016_day_11_solutions/
        let key = ''
        state.floors.map(f => {
          const items = f.map(i => I[i])
          const chips = items.filter(x => x.chip)
          const gens = items.filter(x => !x.chip)

          const pairs = chips.filter(x => gens.some(g => g.type === x.type)).map(x => x.type)
          const un_chips = chips.filter(x => !pairs.some(t => t === x.type))
          const un_gens = gens.filter(x => !pairs.some(t => t === x.type))
          key += 'P'.repeat(pairs.length) + un_chips.map(x => 'U').join('') + un_gens.map(x => 'G').join('') + ','
        })
        return key + state.elevator
      }
      frontier.push(state)
      while (frontier.length) {
        const curr = frontier.shift()
        const k = to_key(curr)
        if (explored.has(k)) continue
        explored.add(k)
        if (curr.floors[3].length === goal_count) {
          out(curr.moves)
          break
        }

        const { floors, elevator } = curr
        const has = floors[elevator]

        const items = has.map(i => I[i])
        const chips = items.filter(x => x.chip)
        const gens = items.filter(x => !x.chip)
        const un_chips = chips.filter(x => !gens.some(g => g.type === x.type))
        if (gens.length && un_chips.length) {
          // fried chip
          continue
        }

        let groups = []
        for (let i = 0; i < has.n; i++) {
          groups.push([has[i]])
          for (let j = i + 1; j < has.n; j++) {
            groups.push([has[i], has[j]])
          }
        }
        
        for (let i = elevator - 1; i <= elevator + 1; i += 2) {
          if (i < 0 || i >= 4) continue
          if (range(0, i + 1).every(j => !floors[j].length)) continue
          for (let group of groups) {
            let new_floors = floors.map(f => f.slice())
            new_floors[elevator] = new_floors[elevator].filter(item => !group.includes(item))
            new_floors[i].push(...group)
            const new_state = {
              floors: new_floors,
              elevator: i,
              moves: curr.moves + 1,
            }
            frontier.push(new_state)
          }
        }
      }
    }
    if (1) {
      run(p1)      
    }
    if (2) {
      ;[
        ['elerium', true],
        ['elerium', false],
        ['dilithium', true],
        ['dilithium', false],
      ].map(([type, chip]) => {
        I.push(item(I.length, chip, type))
        floors[0].push(I.length - 1)
      })
      run(p2)
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
    a: (o, f=x=>x) => Array.from(o).map(f),
    an: (n, f=x=>x) => Array.from({ length: n }).map(f),
    stringish: (o) => typeof o === 'string' || o instanceof String,
    n: (o) => U.stringish(o) ? Number(o) : U.a(o).map(Number),
    list: (str, sep) => U.stringish(o) ? str.split(sep || ' ') : Array.from(str),
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
    rs: (re, str) => {
      if (re.global) return Array.from(str.matchAll(re))
      return re.exec(str)
    },
    union: (a, b) => new Set(...a, ...b),
    splice: (ar, i, nX, ...items) => U.use(ar.slice(), copy => copy.splice(i, nX, ...items)),
    wrap: (i, n) => (i % n + n) % n,
    range: (start, stop, step) => {
      if (step === undefined) step = 1;
      if (stop === undefined) [stop, start] = [start, 0];
      return Array.from({ length: stop - start }, (_, i) => i * step + start);
    },
    count: ar => U.use({}, counts => ar.map(e => { counts[e] = 1 + (counts[e] || 0); })),
    diff: ar => ar.slice(1).map((val, i) => val - ar[i]),
    clone: (ob) => JSON.parse(JSON.stringify(ob)),
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
  const An = U.an
  const N = U.n
  const M = U.match
  const RS = U.rs
  window.U = U

  // https://github.com/datastructures-js/priority-queue
  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')

  Object.defineProperties(Array.prototype, {
    n: { get() { return this.length } },
    num: { get() { return U.n(this) } },
    numsort: { get() { return U.numsort(this.num) } },
    c: { get() { return U.a(this) } },
    sum: { get() { return U.sum(this) } },
    product: { get() { return U.product(this) } },
    last: { get() { return this[this.n - 1] } },
    first: { get() { return this[0] } },

    i: { value(i) { return U.i(i) } },
    is: { value(i, x) { return this.i(i) === x } },
    m: { value(f) { return this.map(f) } },
    s: { value(...xs) { return this.slice(...xs) } },
  })
  Array.prototype.M = function(f) { return this.map(f) }

  Object.defineProperties(String.prototype, {
    n: { get() { return this.length } },
    num: { get() { return U.n(this) } },
    a: { get() { return U.a(this) } },

    i: { value(i) { return U.i(this, i) } },
    is: { value(i, c) { return this.i(i) === c } },
    s: { value(...xs) { return this.slice(...xs) } },
    nums: { value(splitter) { return U.n(splitter ? this.split(splitter) : this) } },
  })
  String.prototype.N = function() { return U.n(this) }
  String.prototype.C = function() { return U.a(this) }
  String.prototype.M = function(re) { return this.match(re) }
  String.prototype.MA = function(re) { return this.matchAll(new RegExp(re, re.flags + 'g')) }

  Object.defineProperties(Number.prototype, {
    repeat: { value(n) { return An(n).fill(this) } },
  })
})()
module.exports = solution