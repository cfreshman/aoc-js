if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (input) => U.answer(input, (lines, p1, p2) => {
    if (1) {
      let rs = lines.map(Number)
      const size = U.sum(rs) / 3
      const recurse_find = (remaining, b=[], c=[], b_size=0, c_size=0) => {
        if (b_size > size || c_size > size) return false
        if (remaining.length === 0) {
          return U.sum(b) === size && U.sum(c) === size
        }
        const [head, ...tail] = remaining
        return recurse_find(tail, b.concat(head), c, b_size + head, c_size) || recurse_find(tail, b, c.concat(head), b_size, c_size + head)
      }
      const recurse_marks = (marks, str='0'.repeat(rs.length), i=0) => {
        if (marks === 0) return [str]
        const strs = []
        for (let j = i; j < rs.length + 1 - marks; j++) {
          let substr = str
          substr = substr.slice(0, j) + '1' + substr.slice(j + 1)
          strs.push(...recurse_marks(marks - 1, substr, j + 1))
        }
        return strs
      }
      const QE = []
      for (let i = 1; i < rs.length; i++) {
        const marks = recurse_marks(i)
        // l(marks)
        for (const mark of marks) {
          const a = rs.filter((_, k) => mark[k] === '1')
          if (U.sum(a) === size) {
            const remaining = rs.filter((_, k) => mark[k] === '0')
            const has_split = recurse_find(remaining)
            if (has_split) {
              QE.push(U.product(a))
              break
            }
          }
        }
        if (QE.length) break
      }
      p1(U.minning(QE))
    }
    if (1) {
      let rs = lines.map(Number)
      const size = U.sum(rs) / 4
      const recurse_find = (remaining, b=[], c=[], d=[], b_size=0, c_size=0, d_size=0) => {
        if (b_size > size || c_size > size || d_size > size) return false
        if (remaining.length === 0) {
          return U.sum(b) === size && U.sum(c) === size && U.sum(d) === size
        }
        const [head, ...tail] = remaining
        return recurse_find(tail, b.concat(head), c, d, b_size + head, c_size, d_size) || recurse_find(tail, b, c.concat(head), d, b_size, c_size + head, d_size) || recurse_find(tail, b, c, d.concat(head), b_size, c_size, d_size + head)
      }
      const recurse_marks = (marks, str='0'.repeat(rs.length), i=0) => {
        if (marks === 0) return [str]
        const strs = []
        for (let j = i; j < rs.length + 1 - marks; j++) {
          let substr = str
          substr = substr.slice(0, j) + '1' + substr.slice(j + 1)
          strs.push(...recurse_marks(marks - 1, substr, j + 1))
        }
        return strs
      }
      const QE = []
      for (let i = 1; i < rs.length; i++) {
        const marks = recurse_marks(i)
        // l(marks)
        for (const mark of marks) {
          const a = rs.filter((_, k) => mark[k] === '1')
          if (U.sum(a) === size) {
            const remaining = rs.filter((_, k) => mark[k] === '0')
            const has_split = recurse_find(remaining)
            if (has_split) {
              QE.push(U.product(a))
              break
            }
          }
        }
        if (QE.length) break
      }
      p2(U.minning(QE))
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