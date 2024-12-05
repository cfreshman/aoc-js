if (!globalThis.window) globalThis.window = globalThis
;(() => {
  window.solution = (ii) => U.answer(ii, (ll, p1, p2) => {
    const run = (insts, reg) => {
      for (let i = 0; i < insts.length; i++) {
        let [inst, x, y] = insts[i]
        if (inst === 'cpy') {
          if (reg[y] !== undefined) {
            reg[y] = reg[x] ?? x.num
          }
        } else if (inst === 'inc') {
          reg[x]++
        } else if (inst === 'dec') {
          reg[x]--
        } else if (inst === 'jnz') {
          if ((reg[x] ?? x.num) !== 0) {
            i += (reg[y] ?? y.num) - 1
          }
        } else if (inst === 'tgl') {
          const target = i + (reg[x] ?? x.num)
          if (insts[target]) {
            if (insts[target].length === 2) {
              insts[target][0] = insts[target][0] === 'inc' ? 'dec' : 'inc'
            } else {
              insts[target][0] = insts[target][0] === 'jnz' ? 'cpy' : 'jnz'
            }
          }
        }
      }
    }
    if (1) {
      const insts = ll.map(line => line.split(' '))
      const reg = ii.n < 10 ? { a:0 } : { a:7, b:0, c:0, d:0 }
      run(insts, reg)
      p1(reg.a)
    }
    if (2) {
      L('warning - slow')
      const insts = ll.map(line => line.split(' '))
      const reg = ii.n < 10 ? { a:0 } : { a:12, b:0, c:0, d:0 }
      run(insts, reg)
      p2(reg.a)
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
    manhat: (a, b) => {
      if (a.x !== undefined) return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
      return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    },
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
  const NU = U.n
  const MA = U.match
  const RS = U.rs
  window.U = U

  const vec = class {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    static of = (x, y) => Array.isArray(x) ? new vec(x[0], x[1]) : new vec(x, y)
    static from = (ob) => new vec(ob.x, ob.y)

    add(v) { return vec.of(this.x + v.x, this.y + v.y) }
    sub(v) { return vec.of(this.x - v.x, this.y - v.y) }
    mul(v) { return vec.of(this.x * v.x, this.y * v.y) }
    div(v) { return vec.of(this.x / v.x, this.y / v.y) }
    mod(v) { return vec.of(this.x % v.x, this.y % v.y) }
    abs() { return vec.of(Math.abs(this.x), Math.abs(this.y)) }
    manhat(v=undefined) {
      if (v) return Math.abs(this.x - v.x) + Math.abs(this.y - v.y)
      return Math.abs(this.x) + Math.abs(this.y)
    }
    equal(v) { return this.x === v.x && this.y === v.y }
    get clone() { return vec.of(this.x, this.y) }
    get key() { return this.x + ',' + this.y }

    static _d4 = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    static _d8 = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]]
    get n4() { return vec._d4.map(([dx, dy]) => this.add(vec.of(dx, dy))) }
    get n8() { return vec._d8.map(([dx, dy]) => this.add(vec.of(dx, dy))) }
  }
  const ve = vec.of

  // https://github.com/datastructures-js/priority-queue
  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')
  ;[PQ.prototype, PQN.prototype, PQX.prototype].map(pqp => {
    Object.defineProperties(pqp, {
      n: { get() { return this.size() } },
      empty: { get() { return this.isEmpty() } },
    })
  })
  
  const crypto = require('crypto')
  U.md5 = (str) => crypto.createHash('md5').update(str).digest('hex')

  Object.defineProperties(Array.prototype, {
    n: { get() { return this.length } },
    num: { get() { return U.n(this) } },
    numsort: { get() { return U.numsort(this.num) } },
    c: { get() { return U.a(this) } },
    sum: { get() { return U.sum(this) } },
    product: { get() { return U.product(this) } },
    last: { get() { return this[this.n - 1] } },
    first: { get() { return this[0] } },
    truthy: { get() { return this.filter(x => x) } },
    defined: { get() { return this.filter(x => x !== undefined) } },
    min: { get() { return min(this) } },
    max: { get() { return max(this) } },
    key: { get() { return this.join(',') } },
    str: { get() { return this.join('') } },
    
    i: { value(i) { return U.i(i) } },
    is: { value(i, x) { return this.i(i) === x } },
    m: { value(f) { return this.map(f) } },
    s: { value(...xs) { return this.slice(...xs) } },
    f: { value(f) { return this.filter(f) } },
    fs: { value(...fs) { return this.map((x, i) => fs[i] ? fs[i](x) : x) } }
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
    a: { get() { return U.a(this) } }, ar: { get() { return this.a } },

    i: { value(i) { return U.i(this, i) } },
    is: { value(i, c) { return this.i(i) === c } },
    s: { value(...xs) { return this.slice(...xs) } },
    nums: { value(splitter) { return U.n(splitter ? this.split(splitter) : this) } },
    re: { value(re) { return U.rs(re, this) } },
    refs: { value(re, ...fs) {
      const result = U.rs(re, this)
      if (re.global) {
        return result.map(match => Array.from(match).slice(1).map((x, i) => fs[i](x)))
      }
      return Array.from(result).slice(1).map((x, i) => fs[i](x))
    } }
  })

  Object.defineProperties(Number.prototype, {
    repeat: { value(n) { return An(n).fill(this) } },
    bin: { get() { return this.toString(2) } },
  })

  Object.defineProperties(Set.prototype, {
    n: { get() { return this.size } },
    a: { get() { return Array.from(this) } }, ar: { get() { return this.a } },
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
    k: { get() { return K(this) } },
    v: { get() { return V(this) } },
    e: { get() { return E(this) } },
    m: { value(f) { return U.omap(this, f) } },
    key: { get() { return this.e.map(e => e.join(':')).join(',') } },
    eq: { value(ob) { return this.k.length === ob.k.length && this.k.every(k => this[k] === ob[k]) } },
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