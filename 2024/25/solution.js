if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (ii) => U.answer(ii, (ll, p1, p2) => {
    let lls = ii.twoline
    let locks = [], pins = []
    lls.map(lns => {
      lns.grid()
      let is_lock = lns[0][0] === '#'
      let downs = lns[0].map(i => 0)
      lns.map((ln, y) => {
        ln.map((c, x) => {
          if (c === (is_lock ? '#' : '.')) {
            downs[x] = y
          }
        })
      })
      if (is_lock) {
        locks.push(downs)
      } else {
        let heights = downs.map(x => lns.length - 2 - x)
        pins.push(heights)
      }
    })
    let n_pairs = 0
    locks.map(lock => {
      pins.map(pin => {
        let valid = true
        lock.some((l, i) => {
          let space = 5 - l
          if (pin[i] > space) {
            valid = false
            return true
          }
        })
        if (valid) {
          n_pairs += 1
        }
      })
    })
    p1(n_pairs)
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
    list: (str, sep) => U.stringish(str) ? str.split(sep || ' ') : Array.from(str),
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
    manhat: (a, b) => {
      if (a.x !== undefined) return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
      return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    },
    array: (length, func = () => 0) => Array.from({ length }).map((_, i) => func(i)),
    memoed: (func) => {
      const memo = {}
      return (...args) => {
        let key = args.key
        if (memo[key] !== undefined) return memo[key]
        return memo[key] = func(...args)
      }
    },
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
  const NU = U.n
  const MA = U.match
  const RS = U.rs
  window.U = U

  const vec = class {
    constructor(x, y) {
      if (Array.isArray(x)) {
        ;[x, y] = x
      }
      this.x = x
      this.y = y
    }
    get 0() { return this.x } set 0(x) { this.x = x }
    get 1() { return this.y } set 1(y) { this.y = y }

    static of = (x, y) => new vec(x, y)
    static from = (ob) => new vec(ob.x, ob.y)

    add(v) { return vec.of(this.x + v.x, this.y + v.y) }
    sub(v) { return vec.of(this.x - v.x, this.y - v.y) }
    mul(v) { return vec.of(this.x * v.x, this.y * v.y) }
    div(v) { return vec.of(this.x / v.x, this.y / v.y) }
    mod(v) { return vec.of(this.x % v.x, this.y % v.y) }
    abs() { return vec.of(Math.abs(this.x), Math.abs(this.y)) }
    dist(v) { return Math.hypot(this.x - v.x, this.y - v.y) }
    manhat(v=undefined) {
      if (v) return Math.abs(this.x - v.x) + Math.abs(this.y - v.y)
      return Math.abs(this.x) + Math.abs(this.y)
    }
    equal(v) { return this.x === v.x && this.y === v.y }
    rotate(angle) { return vec.of(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle)) }
    scale(s) { return vec.of(this.x * s, this.y * s) }
    dot(v) { return this.x * v.x + this.y * v.y }
    cross(v) { return this.x * v.y - this.y * v.x }
    proj(v) { return v.scale(this.dot(v) / v.dot(v)) }
    get length() { return Math.hypot(this.x, this.y) } get n() { return this.length }
    get angle() { return Math.atan2(this.y, this.x) }
    get unit() { return this.div(vec.of(this.length, this.length)) } get norm() { return this.unit }
    get neg() { return vec.of(-this.x, -this.y) }
    get right() { return vec.of(-this.y, this.x) }
    get left() { return vec.of(this.y, -this.x) }
    get clone() { return vec.of(this.x, this.y) }
    get key() { return this.x + ',' + this.y }
    get str() { return this.key }
    get ar() { return [this.x, this.y] }

    static _d4 = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    static _d8 = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]]
    get n4() { return vec._d4.map(([dx, dy]) => this.add(vec.of(dx, dy))) }
    get n8() { return vec._d8.map(([dx, dy]) => this.add(vec.of(dx, dy))) }
  }
  const ve = vec.of

  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')
  ;[PQ.prototype, PQN.prototype, PQX.prototype].map(pqp => {
    Object.defineProperties(pqp, {
      n: { get() { return this.size() } },
      empty: { get() { return this.isEmpty() } },
    
      peek: { value() { return this.front() } },
    })
  })
  const crypto = require('crypto')
  U.md5 = (str) => crypto.createHash('md5').update(str).digest('hex')

  Object.defineProperties(Array.prototype, {
    n: { get() { return this.length } },
    num: { get() { return U.n(this) } },
    numsort: { get() { return U.numsort(this.num) } },
    sum: { get() { return U.sum(this) } },
    product: { get() { return U.product(this) } },
    first: { get() { return this[0] } },
    last: { get() { return this[this.n - 1] } },
    truthy: { get() { return this.filter(x => x) } },
    defined: { get() { return this.filter(x => x !== undefined) } },
    min: { get() { return min(this) } },
    max: { get() { return max(this) } },
    key: { get() { return this.join(',') } },
    str: { get() { return this.join('') } },
    set: { get() { return new Set(this) } },
    ve: { get() { return ve(this) } },
    ves: { get() { return this.map((x) => ve(typeof x === 'string' ? x.split(',').num : x)) } },
    
    i: { value(i) { return U.i(i) } },
    is: { value(i, x) { return this.i(i) === x } },
    m: { value(f) { return this.map(f) } },
    s: { value(...xs) { return this.slice(...xs) } },
    f: { value(f) { return this.filter(f) } },
    fs: { value(...fs) { return this.map((x, i) => fs[i] ? fs[i](x) : x) } },
    group: { value(n) { return U.group(this, n) } },
    count: { value() { return U.count(this) } },
    diff: { value() { return U.diff(this) } },
    maxxing: { value(f) { return max(this, f) } },
    minning: { value(f) { return min(this, f) } },
    take: { value(f, eval=y=>y) {
      let first = undefined
      this.some((...args) => {
        const y = f(...args)
        if (eval(y)) first = y
      })
      return first
    } },
    takedefined: { value(f) { return this.take(f, y => y !== undefined) } },
    obmap: { value(ob) { return this.map(x => ob[x]) } },
    kmap: { value(key) { return this.map(x => x[key]) } },

    aget: { value(i) { return this[i] } },
    aset: { value(i, x) { this[i] = x } },
    
    grid: { value(outofbounds=undefined) {
      this.outofbounds = outofbounds
      for (let i = 0; i < this.n; i++) {
        if (!Array.isArray(this[i])) this[i] = Array.from(this[i])
      }
      return this
    } },
    gnrows: { get() { return this.n } },
    gncols: { get() { return this[0].n } },
    grows: { get() { return this } },
    gcols: { get() { return this[0].map((_, i) => this.map(row => row[i])) } },
    ginside: { value(v) { return this[v.y] && v.x >= 0 && v.x < this[0].n } },
    gget: { value(v) { return this.ginside(v) ? this[v.y][v.x] : this.outofbounds } },
    gset: { value(v, c) { if (this.ginside(v)) this[v.y][v.x] = c } },
    gfor: { value(f) { this.forEach((line, y) => line.forEach((c, x) => f(c, x, y, this))) } },
    gmap: { value(f) { return this.map((line, y) => line.map((c, x) => f(c, x, y, this))).grid(this.outofbounds) } },
    gtake: { value(f, eval=undefined) { return this.take((line, y) => line.take((c, x) => f(c, x, y, this), eval), x => x !== undefined) } },
    gvfor: { value(f) { this.gfor((c, x, y) => f(c, ve(x, y))) } },
    gvmap: { value(f) { return this.gmap((c, x, y) => f(c, ve(x, y))) } },
    gvtake: { value(f, eval=undefined) { return this.gtake((c, x, y) => f(c, ve(x, y)), eval) } },
    gvof: { value(f) { return this.gvtake((c, v) => f(c, v) && v, x => !!x) } },
    gvsof: { value(f) {
      const vs = []
      this.gvfor((c, v) => f(c, v) && vs.push(v))
      return vs
    } },
    gsub: { value(v, s, new_outofbounds=this.outofbounds) { return this.slice(v.y, v.y + s.y).map(line => line.slice(v.x, v.x + s.x)).grid(new_outofbounds) } },
    gadj: { value(v, d4=true) { return (d4 ? vec._d4 : vec._d8).map(([dx, dy]) => v.add(ve(dx, dy))).filter(v => this.ginside(v) || this.outofbounds) } },
    gd4: { value(v) { return this.gadj(v, true) } },
    gd8: { value(v) { return this.gadj(v, false) } },
    gclone: { value() { return this.map(line => line.clone).grid(this.outofbounds) } },

    vary: { value(n) {
      const result = []
      const recurse = (prefix) => {
        if (prefix.n === n) return result.push(prefix)
        for (let i = 0; i < this.n; i++) {
          recurse(prefix.clone.concat([this[i]]))
        }
      }
      recurse([])
      return result
    } },
    permute: { value(n) {
      const result = []
      const recurse = (prefix, used) => {
        if (prefix.n === n) return result.push(prefix)
        for (let i = 0; i < this.n; i++) {
          if (used.has(i)) continue
          used.add(i)
          recurse(prefix.clone.concat([this[i]]), used)
          used.delete(i)
        }
      }
      recurse([], new Set())
      return result
    } },
    combine: { value(n) {
      const result = []
      const recurse = (prefix, start) => {
        if (prefix.n === n) return result.push(prefix)
        for (let i = start; i < this.n; i++) {
          recurse(prefix.clone.concat([this[i]]), i + 1)
        }
      }
      recurse([], 0)
      return result
    } },
  })
  Array.d4 = () => [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  Array.d8 = () => [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ]

  Object.defineProperties(String.prototype, {
    n: { get() { return this.length } },
    num: { get() { return U.n(this) } },
    list: { get() { return U.list(this) } },
    set: { get() { return U.set(this) } },
    a: { get() { return U.a(this) } }, ar: { get() { return this.a } },
    twoline: { get() { return this.split('\n\n').map(group => group.split('\n')) } },
    ord: { get() { return this.charCodeAt(0) } },
    ordlower: { get() { return this.ord - 'a'.ord } },
    ordupper: { get() { return this.ord - 'A'.ord } },
    ve: { get() { return ve(this.split(',').num) } },
    
    i: { value(i) { return U.i(this, i) } },
    is: { value(i, c) { return this.i(i) === c } },
    s: { value(...xs) { return this.slice(...xs) } },
    nums: { value(splitter) { return U.n(splitter ? this.split(splitter) : this) } },
    re: { value(re) { return U.rs(re, this) } },
    refs: { value(re, ...fs) {
      const result = U.rs(re, this)
      const apply = (match) => Array.from(match).slice(1).map((x, i) => fs[i](x))
      return re.global ? result.map(apply) : apply(result)
    } },
    code: { value(i) { return this.charCodeAt(i) } },
    codelower: { value(i) { return this.code(i) - 'a'.ord } },
    codeupper: { value(i) { return this.code(i) - 'A'.ord } },
    group: { value(n) { return this.ar.group(n).map(group => group.join('')) } },
    
    vary: { value(n) {
      if (!this._memo_vary) this._memo_vary = {}
      if (this._memo_vary[n]) return this._memo_vary[n].clone

      const result = set()
      const recurse = (prefix) => {
        if (prefix.length === n) return result.add(prefix)
        for (let i = 0; i < this.n; i++) {
          recurse(prefix + this[i])
        }
      }
      recurse('')

      return (this._memo_vary[n] = result.ar).clone
    } },
    permute: { value(n) {
      if (!this._memo_permute) this._memo_permute = {}
      if (this._memo_permute[n]) return this._memo_permute[n].clone

      const result = set(), used = set()
      const recurse = (prefix) => {
        if (prefix.length === n) return result.add(prefix)
        for (let i = 0; i < this.n; i++) {
          if (used.has(this[i])) continue
          used.add(this[i])
          recurse(prefix + this[i])
          used.delete(this[i])
        }
      }
      recurse('')

      return (this._memo_permute[n] = result.ar).clone
    } },
    combine: { value(n) {
      if (!this._memo_combine) this._memo_combine = {}
      if (this._memo_combine[n]) return this._memo_combine[n].clone

      const result = set()
      const recurse = (prefix, start) => {
        if (prefix.length === n) return result.add(prefix)
        for (let i = start; i < this.n; i++) {
          recurse(prefix + this[i], i + 1)
        }
      }
      recurse('', 0)

      return (this._memo_combine[n] = result.ar).clone
    } },
  })

  Object.defineProperties(Number.prototype, {
    repeat: { value(n) { return An(n).fill(Number(this)) } },
    bin: { get() { return this.toString(2) } },
    str: { get() { return String(this) } },
    chr: { get() { return String.fromCharCode(this) } },
    chrlower: { get() { return String.fromCharCode(this + 'a'.code) } },
    chrupper: { get() { return String.fromCharCode(this + 'A'.code) } },
    floor: { get() { return Math.floor(this) } },
    ceil: { get() { return Math.ceil(this) } },
    round: { get() { return Math.round(this) } },
    abs: { get() { return Math.abs(this) } },

    to: { value(end, step=1) { return R(this, end, step) } },
    fixed: { value(n) { return this.toFixed(n) } },
  })

  Object.defineProperties(Set.prototype, {
    n: { get() { return this.size } },
    a: { get() { return Array.from(this) } }, ar: { get() { return this.a } },
    str: { get() { return Array.from(this).join('') } },
    
    had: { value(x) {
      const had = this.has(x)
      this.add(x)
      return had
    } },
    added: { value(x) { return !this.had(x) } },
    deleted: { value(x) {
      const deleted = this.has(x)
      this.delete(x)
      return deleted
    } },
  })

  Object.defineProperties(Object.prototype, {
    // keys: { get() { return K(this) } },
    // values: { get() { return V(this) } },
    // entries: { get() { return E(this) } },
    // okey: { get() { return this.entries.map(e => e.join(':')).join(',') } },
    clone: { get() { return strings.json.clone(this) } },
    
    // omap: { value(f) { return U.omap(this, f) } },
    // eq: { value(ob) { return this.keys.length === ob.keys.length && this.keys.every(k => this[k] === ob[k]) } },
    // concat: { value(ob) { return { ...this, ...ob } } },
  })

  
  // from https://freshman.dev/lib/2/common/script.js
  window.pass = x=>x
  window.exists = x=>x!==undefined
  window.truthy = x=>!!x
  window.apply = (f, ...x) => typeof f === 'function' ? f(...x) : f
  window.compose = (...fs) => (...x) => fs.slice(1).reduce((v, fs) => f(v), funcs[0] && funcs[0](...args))
  window.pipe = (value, ...funcs) => compose(...funcs)(value)
  window.fs = (x) => {
      return {
          pipe: (f) => fs(f(x)),
          with(f) { f(x); return this },
          x, value:x,
      }
  }
  window.fnot = (f) => !apply(f)

  window.list = (data=[], seperator=' ') => typeof(data) === 'string' ? data.split(seperator) : Array.from(data)
  window.set = (data=[], seperator=' ') => new Set(list(data, seperator))
  window.lists = {
      of: list,
      remove: (xs, x) => {
          const i = xs.indexOf(x)
          if (i > -1) xs.splice(i, 1)
          return xs
      },
      clear: (xs) => {
          xs.splice(0, xs.length)
          return xs
      },
      joins: (xs, ...separators) => (separators.length === 1 ? xs : xs.map(x => lists.joins(x, ...separators.slice(1)))).join(separators[0]),
      order: (xs, is) => is.map(i => xs[i]),
      
      first: (xs, n) => n === undefined ? xs[0] : xs.slice(0,n),
      last: (xs, n) => n === undefined ? xs.at(-1) : xs.slice(n-1),

      across_defined: (...xs) => {
          const result = Array.from({ length: Math.max(...xs.map(x => x.length)) })
          for (let i = 0; i < result.length; i++) {
              const first_for_i = xs.find(x => defined(x[i]))
              result[i] = first_for_i && first_for_i[i]
          }
          return result
      },
      across_truthy: (...xs) => {
          const result = Array.from({ length: Math.max(...xs.map(x => x.length)) })
          for (let i = 0; i < result.length; i++) {
              const first_for_i = xs.find(x => truthy(x[i]))
              result[i] = first_for_i && first_for_i[i]
          }
          return result
      },

      group: (xs, n) => {
          const groups = []
          for (let i = 0; i < xs.length; i += n) {
              groups.push(xs.slice(i, Math.min(xs.length, i + n)))
          }
          return groups
      },

      under: (xs, f) => {
          return xs.filter(f).length
      },

      unique: (xs, f=x=>x) => {
          const value_set = set()
          return xs.filter(x => {
              const value = f(x)
              if (value_set.has(value)) return false
              value_set.add(value)
              return true
          })
      },

      find_indices: (xs, x, f=pass) => {
          const indices = []
          for (let i = 0; i < xs.length; i++) {
              if (f(xs[i]) === x) {
                  indices.push(i)
              }
          }
          return indices
      },

      maxxing: (xs, f) => {
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
      minning: (xs, f) => {
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
      maxxing_list: (xs, f) => {
          if (!xs.length) return []
          let max_is = [0], max_value = f(xs[0])
          for (let i = 1; i < xs.length; i++) {
              const value = f(xs[i])
              const diff = value - max_value
              if (diff > 0) {
                  max_is = [i]
                  max_value = value
              }
              else if (diff === 0) {
                  max_is.push(i)
              }
          }
          return max_is.map(max_i => xs[max_i])
      },
      minning_list: (xs, f) => {
          if (!xs.length) return []
          let min_is = [0], min_value = f(xs[0])
          for (let i = 1; i < xs.length; i++) {
              const value = f(xs[i])
              const diff = value - min_value
              if (diff < 0) {
                  min_is = [i]
                  min_value = value
              }
              else if (diff === 0) {
                  min_is.push(i)
              }
          }
          return min_is.map(min_i => xs[min_i])
      },

      count: (ar, sep=' ') => {
          const result = {}
          list(ar, sep).map(x => { result[x] = 1 + (result[x] || 0) })
          return result
      },
      count_sort: (ar, sep=' ') => entries(lists.count(ar, sep)).sort((a,b) => b[1] - a[1]),

      objectable: (data='', seperator=' ') => {
          const _objectable = (x) => {
              x._keys = x._keys ?? x
              // Object.defineProperty(x, 'object', {
              //     get: function() {
              //         if (!this._keys) throw 'objectable(array) required'
              //         return from(zip(this._keys, this))
              //     }
              // })
              return x
          }
          const Objectable = class extends Array {
              constructor(...x) {return _objectable(super(...x))}
              // map(...x) {return _objectable(Object.assign(super.map.apply(this, x), {_keys:this._keys||this}))}
              map(...x) {return Object.assign(super.map.apply(this, x), {_keys:this._keys||this})}
              filter(...x) {return _objectable(super.filter.apply(this, x))}
              slice(...x) {return _objectable(super.slice.apply(this, x))}
              get object() {
                  if (!this._keys) throw 'objectable(array) required'
                  return from(zip(this._keys, this))
              }
          }
          return new Objectable(...list(data, seperator))
      },
      init_object: (xs) => objectable(xs),
      finalize_object: (xs) => {
          const result = xs.object
          if (!xs._keys || !result) throw 'init_object(array) required'
          return result
      }
  }
  window.zip = (...x) => Array.from(x[0]).map((_,i) => x.map(y => y[i]??undefined))
  window.named = (keys=[], values=[], sep=' ') => {
      return from(zip(list(keys, sep), list(values, sep)))
  }
  window.object = (data='', seperator=' ') => from(
      typeof data !== 'object' || Array.isArray(data) 
      ? list(data, seperator).map(x => [x, true])
      : entries(data))

  window.bounds = (ar) => (x => {x.push(x[1]-x[0]);return x})([Math.min(...ar), Math.max(...ar)])
  window.bound = (ar, x) => (([min, max]) => Math.max(min, Math.min(x, max)))(bounds(ar))
  window.norm = (ar, x) => (([min, max]) => (bound(ar, x) - min) / (max - min))(bounds(ar))
  window.maths = window.math = {
      TAU: 2 * Math.PI, PI: Math.PI,
      max: (ar) => Math.max(...ar),
      min: (ar) => Math.min(...ar),
      sum, product,
      lerp: (a, b, p) => {
          p = Math.max(0, Math.min(p, 1))
          return (1 - p) * a + p * b
      },
      round: (x, pr=0) => {
          const round = Math.pow(10, pr)
          return Math.round(x * round) / round
      },
      cmp: {
          mod: {
              descending: (f) => (...x) => -f(...x),
          },
          numeric: (a, b) => a - b,
      }
  }

  window.pick = (object, delimited_keys, delimiter=' ') => list(delimited_keys, delimiter).reduce((o, k) => {
      if (object.hasOwnProperty(k)) {
          o[k] = object[k]
      }
      return o
  }, {})
  window.unpick = (object, delimited_keys, delimiter=' ') => list(delimited_keys, delimiter).reduce((o, k) => { delete o[k]; return o }, {...object})

  window.merge = (...os) => {
      const result = {}
      os.map(o => {
          Object.keys(o||{}).map(k => {
              if (o[k] === undefined) delete result[k]
              else result[k] = (typeof(result[k]) === 'object' && typeof(o[k]) === 'object' && !Array.isArray(o[k])) ? merge(result[k], o[k]) : o[k]
          })
      })
      return result
  }
  window.transmute = (o, O, X=undefined) => {
      // recursively transform object with functions
      const resolved = Object.keys(o).map(k =>
          (typeof(o[k]) === 'object' && !Array.isArray(o[k]))
          ? { [k]: transmute(o[k], O) }
          : X
              ? { [k]: X(o[k]) }
              : O(k, o[k]))
      
      return merge(
          {},
          ...resolved
      )
  }

  window.string = {
      digits: range(10).join(''),
      lower: range(26).map(i => String.fromCharCode(i + 'a'.charCodeAt(0))).join(''),
      get upper() { return string.lower.toUpperCase() },

      get lowerhex() { return string.digits + string.lower.slice(0, 6) },
      get upperhex() { return string.digits + string.upper.slice(0, 6) },
      get lowernum() { return string.lower + string.digits },
      get uppernum() { return string.upper + string.digits },

      get alpha() { return string.lower },
      get alphanum() { return string.alpha + string.digits },
      get hex() { return string.digits + string.alpha.slice(0, 6) },

      get unambiguous() { return '23456789ABCDEFGHJKMNPQRSTUVWXYZ' },
      get somebiguous() { return string.digits + 'ABCDEFGHJKMNPQRSTUVWXYZ' },
      unsomebiguate(x) { return x.replace(/o/gi, '0').replace(/[il]/gi, '1') },
      
      get anycase() { return string.lower + string.upper },
      get anycasenum() { return string.anycase + string.digits },
      get base62() { return string.digits + string.anycase },

      prefix(...x) {
          if (x.length === 1) return x[0]
          if (x.length === 2) {
              for (let i = 0;; i++) {
                  if (x[0][i] !== x[1][i]) return x[0].slice(0, i)
                  if (i === x[0].length || i === x[1].length) return x[0]
              }
          }
          return x.reduce((p,x)=>string.prefix(p, x))
      },
  }
  window.strings = Object.assign({}, string, {
      json: {
          parse: JSON.parse,
          stringify: JSON.stringify,
          pretty: (object) => JSON.stringify(object, null, 2),
          equal: (a, b) => JSON.stringify(a) === JSON.stringify(b), eq:(...x)=>strings.json.equal(...x),
          clone: (x) => JSON.parse(JSON.stringify(x)),
      },
      plural: (count, prefix, plural_suffix, singular_suffix='') => {
          return prefix + (count === 1 ? singular_suffix : plural_suffix)
      },
  })
  window.compare = {
      stringify: (...xs) => {
          const stringified = xs.map(JSON.stringify)
          return stringified.slice(1).findIndex(x => x !== stringified[0]) === -1
      },
  }

  window.rand = merge({
      // () => [0,1)
      // (n) => [0,n)
      // (a, b) => [a,b)
      f: (a=1,o,e=1) => (i => i*e + (o===undefined?0:a))(Math.random() * ((o===undefined?a:o-a)/e)),
      s: (a=1,o,e=1) => (i => i*e + (o===undefined?0:a) - ((o===undefined?a:o-a)/e))(Math.random() * 2 * ((o===undefined?a:o-a)/e)),
      i: (a=2,o,e=1) => Math.floor(rand.f(a,o,e)),
      generate: (n, method, constraint) => {
          let samples = new Array(n)
          do {
              for (let i = 0; i < n; i++) samples[i] = method(i)
          } while (!constraint(...samples))
          return samples
      },
      sample: (ar, n=undefined) => n === undefined ? ar[rand.i(ar.length)] : range(n).map(() => rand.sample(ar)),
      pick: (ar, n=undefined) => n === undefined ? ar.splice(rand.i(ar.length), 1)[0] : range(n).map(() => rand.pick(ar)),
      weighted: (o, n=undefined) => {
          const total = math.sum(Object.values(o))
          let picks
          for (let i = 0; i < n||1; i++) {
              let x = rand.f(total)
              const pick = Object.keys(o).find(k => {
                  x -= o[k]
                  return x <= 0
              })

              if (n === undefined) return pick
              picks = picks || []
              picks.push(pick)
          }
          return picks
      },
      shuffle_order: (n) => range(n.length ?? n).sort(() => rand.s()),
      shuffle: (ar) => ar.sort(() => rand.s()),
      shuffle_and_order: (ar) => {
          const order = rand.shuffle_order(ar.length)
          return {
              shuffle: lists.order(ar, order),
              order,
          }
      },
  }, transmute(string, false, x => (n=1) => range(n).map(i => rand.sample(x)).join('')), {
      hex: (n) => Math.floor(Math.random() * Math.pow(16, n)).toString(16).padStart(n, '0'),
  })
})()
module.exports = solution