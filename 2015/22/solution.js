if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    const spells = {
      M: { cost: 53, damage: 4 },
      D: { cost: 73, damage: 2, heal: 2 },
      S: { cost: 113, duration: 6, armor: 7 },
      P: { cost: 173, duration: 6, damage: 3 },
      R: { cost: 229, duration: 5, mana: 101 },
    }
    const player = {
      hp: 50,
      mana: 500,
      armor: 0,
    }
    const boss = {
      hp: Number(lines[0].split(': ')[1]),
      damage: Number(lines[1].split(': ')[1]),
    }
    {
      const simulate = (spell_str) => {
        const sim_player = { ...player }
        const sim_boss = { ...boss }
        const effects = {}
        const run_effects = () => {
          sim_player.armor = 0
          for (const effect in effects) {
            const spell = spells[effect]
            if (spell.damage) sim_boss.hp -= spell.damage
            if (spell.heal) sim_player.hp += spell.heal
            if (spell.armor) sim_player.armor = spell.armor
            if (spell.mana) sim_player.mana += spell.mana
            effects[effect]--
            if (effects[effect] === 0) delete effects[effect]
          }
        }
        for (let turn = 0; turn < spell_str.length; turn++) {
          run_effects()
          if (sim_boss.hp <= 0) return true
          const spell = spells[spell_str[turn]]
          sim_player.mana -= spell.cost
          if (sim_player.mana < 0) return false
          if (spell.duration) {
            if (effects[spell_str[turn]]) return false
            effects[spell_str[turn]] = spell.duration
          } else {
            if (spell.damage) sim_boss.hp -= spell.damage
            if (spell.heal) sim_player.hp += spell.heal
          }
          run_effects()
          if (sim_boss.hp <= 0) return 1
          sim_player.hp -= Math.max(1, sim_boss.damage - sim_player.armor)
          if (sim_player.hp <= 0) return false
        }
        return 2
      }
      const spell_keys = Object.keys(spells)
      const get_cost = (combo) => {
        let sum = 0
        for (let i = 0; i < combo.length; i++) {
          sum += spells[combo[i]].cost
        }
        return sum
      }
      const spell_combos = new MinPriorityQueue(get_cost)
      spell_keys.map(combo => spell_combos.push(combo))
      while (1) {
        const curr = spell_combos.pop()
        l(curr, get_cost(curr))
        const result = simulate(curr)
        if (result === 1) {
          p1(get_cost(curr))
          break
        }
        if (result === 2) {
          spell_keys.map(s => spell_combos.push(curr + s))
        }
      }
    }
    {
      const simulate = (spell_str) => {
        const sim_player = { ...player }
        const sim_boss = { ...boss }
        const effects = {}
        const run_effects = () => {
          sim_player.armor = 0
          sim_player.hp--
          for (const effect in effects) {
            const spell = spells[effect]
            if (spell.damage) sim_boss.hp -= spell.damage
            if (spell.heal) sim_player.hp += spell.heal
            if (spell.armor) sim_player.armor = spell.armor
            if (spell.mana) sim_player.mana += spell.mana
            effects[effect]--
            if (effects[effect] === 0) delete effects[effect]
          }
        }
        for (let turn = 0; turn < spell_str.length; turn++) {
          run_effects()
          if (sim_boss.hp <= 0) return true
          if (sim_player.hp <= 0) return false
          const spell = spells[spell_str[turn]]
          sim_player.mana -= spell.cost
          if (sim_player.mana < 0) return false
          if (spell.duration) {
            if (effects[spell_str[turn]]) return false
            effects[spell_str[turn]] = spell.duration
          } else {
            if (spell.damage) sim_boss.hp -= spell.damage
            if (spell.heal) sim_player.hp += spell.heal
          }
          run_effects()
          if (sim_boss.hp <= 0) return 1
          sim_player.hp -= Math.max(1, sim_boss.damage - sim_player.armor)
          if (sim_player.hp <= 0) return false
        }
        return 2
      }
      const spell_keys = Object.keys(spells)
      const get_cost = (combo) => {
        let sum = 0
        for (let i = 0; i < combo.length; i++) {
          sum += spells[combo[i]].cost
        }
        return sum
      }
      const spell_combos = new MinPriorityQueue(get_cost)
      spell_keys.map(combo => spell_combos.push(combo))
      while (1) {
        const curr = spell_combos.pop()
        l(curr, get_cost(curr))
        const result = simulate(curr)
        if (result === 1) {
          p2(get_cost(curr))
          break
        }
        if (result === 2) {
          spell_keys.map(s => spell_combos.push(curr + s))
        }
      }
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

  const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } = require('@datastructures-js/priority-queue')

  window.U = U
})()
module.exports = solution