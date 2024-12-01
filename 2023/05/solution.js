if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    {
      let [seeds, s2o, o2f, f2w, w2l, l2t, t2h, h2c] = input.split('\n\n')
      const str2rngs = (str) => {
        const [name, ...mappings] = str.split('\n')
        const rngs = []
        mappings.map(x => {
          const [dst, src, rng] = x.split(' ').map(Number)
          rngs.push([src, rng, dst])
        })
        return rngs
      }
      ;[s2o, o2f, f2w, w2l, l2t, t2h, h2c] = [s2o, o2f, f2w, w2l, l2t, t2h, h2c].map(str2rngs)
      const locations = seeds.split(': ')[1].split(' ').map(Number).map(x => {
        ;[s2o, o2f, f2w, w2l, l2t, t2h, h2c].map(rngs => {
          for (let i = 0; i < rngs.length; i++) {
            const [src, rng, dst] = rngs[i]
            if (x >= src && x < src + rng) {
              x = dst + x - src
              break
            }
          }
          return x
        })
        return x
      })
      p1(U.minning(locations))
    }
    {
      let [seeds, s2o, o2f, f2w, w2l, l2t, t2h, h2c] = input.split('\n\n')
      const str2rngs = (str) => {
        const [name, ...mappings] = str.split('\n')
        const rngs = []
        mappings.map(x => {
          const [dst, src, rng] = x.split(' ').map(Number)
          rngs.push([src, rng, dst])
        })
        return rngs
      }
      ;[s2o, o2f, f2w, w2l, l2t, t2h, h2c] = [s2o, o2f, f2w, w2l, l2t, t2h, h2c].map(str2rngs)
      seeds = seeds.split(': ')[1].split(' ').map(Number)
      groups = U.group(seeds, 2)
      let last_t = Date.now(), n_groups = groups.length
      let min_location = Infinity
      while (groups.length) {
        let [start, len] = groups.shift()
        const start_len = len
        while (len > 0) {
          if (Date.now() - last_t > 30_000) {
            last_t = Date.now()
            console.log(`${Math.floor(len / start_len * 100)}% through seed group ${n_groups - groups.length}/${n_groups}`)
          }
          len -= 1
          let x = start + len
          ;[s2o, o2f, f2w, w2l, l2t, t2h, h2c].map(rngs => {
            for (let i = 0; i < rngs.length; i++) {
              const [src, rng, dst] = rngs[i]
              if (x >= src && x < src + rng) {
                x = dst + x - src
                break
              }
            }
          })
          if (x < min_location) {
            min_location = x
          }
        }
      }
      p2(min_location)
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
})()
module.exports = solution