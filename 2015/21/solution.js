if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    const weapons = [
      [8, 4, 0],
      [10, 5, 0],
      [25, 6, 0],
      [40, 7, 0],
      [74, 8, 0],
    ]
    const armors = [
      [13, 0, 1],
      [31, 0, 2],
      [53, 0, 3],
      [75, 0, 4],
      [102, 0, 5],
      [0, 0, 0],
    ]
    const rings = [
      [25, 1, 0],
      [50, 2, 0],
      [100, 3, 0],
      [20, 0, 1],
      [40, 0, 2],
      [80, 0, 3],
      [0, 0, 0],
      [0, 0, 0],
    ]
    const boss = {
      hp: Number(lines[0].split(': ')[1]),
      dmg: Number(lines[1].split(': ')[1]),
      amr: Number(lines[2].split(': ')[1]),
    }
    const player = {
      hp: 100,
      dmg: 0,
      amr: 0,
    }
    const simulate = () => {
      const sim_boss = { ...boss }
      const sim_player = { ...player }
      while (true) {
        sim_boss.hp -= Math.max(1, sim_player.dmg - sim_boss.amr)
        if (sim_boss.hp <= 0) return true
        sim_player.hp -= Math.max(1, sim_boss.dmg - sim_player.amr)
        if (sim_player.hp <= 0) return false
      }
    }
    {
      let min_cost = Infinity
      for (const weapon of weapons) {
        for (const armor of armors) {
          for (let i = 0; i < rings.length; i++) {
            for (let j = i + 1; j < rings.length; j++) {
              player.dmg = weapon[1] + rings[i][1] + rings[j][1]
              player.amr = armor[2] + rings[i][2] + rings[j][2]
              const cost = weapon[0] + armor[0] + rings[i][0] + rings[j][0]
              if (simulate()) {
                min_cost = Math.min(min_cost, cost)
              }
            }
          }
        }
      }
      p1(min_cost)
    }
    {
      let max_cost = 0
      for (const weapon of weapons) {
        for (const armor of armors) {
          for (let i = 0; i < rings.length; i++) {
            for (let j = i + 1; j < rings.length; j++) {
              player.dmg = weapon[1] + rings[i][1] + rings[j][1]
              player.amr = armor[2] + rings[i][2] + rings[j][2]
              const cost = weapon[0] + armor[0] + rings[i][0] + rings[j][0]
              if (!simulate()) {
                max_cost = Math.max(max_cost, cost)
              }
            }
          }
        }
      }
      p2(max_cost)
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
})()
module.exports = solution