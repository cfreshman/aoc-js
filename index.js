const process = require('process')
require('dotenv').config()
const fs = require('fs')
const child_process = require('child_process')
const pkg = require('./package.json')

let year = 2024, day = 13
const main = async () => {
  const [command, ...args] = process.argv.slice(2)
  if (command === 'test') {
    let only_scratch = args[0] === 'scratch'
    const solution = require('./working/solution.js')
    const scratch = fs.readFileSync('working/scratch.txt', 'utf8')
    if (scratch) {
      console.log('scratch')
      solution(scratch)
    }
    const input = fs.readFileSync('working/input.txt', 'utf8')
    if (input && !only_scratch) {
      console.log('actual')
      solution(input)
    }
    if (!scratch && !input) {
      console.log('no input - paste into scratch.txt or input.txt')
    }
  } else if (command === 'run') {
    const solution = require(`./${args[0]}/solution.js`)
    const input = fs.readFileSync(`${args[0]}/input.txt`, 'utf8')
    solution(input)
  } else if (command === 'save') {
    child_process.execSync(`mkdir -p ${args[0]}`)
    child_process.execSync(`cp working/solution.js ${args[0]}/solution.js`)
    child_process.execSync(`cp working/input.txt ${args[0]}/input.txt`)
  } else if (command === 'load') {
    child_process.execSync(`cp ${args[0]}/solution.js working/solution.js`)
    child_process.execSync(`cp ${args[0]}/input.txt working/input.txt`)
    child_process.execSync(`rm working/scratch.txt && touch working/scratch.txt`)
  } else if (command === 'new') {
    child_process.execSync(`cp template.js working/solution.js`)
    child_process.execSync(`rm working/scratch.txt && touch working/scratch.txt`)
    child_process.execSync(`rm working/input.txt && touch working/input.txt`)
  } else if (command === 'fetch') {
    if (args[0]) {
      ;[year, day] = args[0].split('/').map(Number)
    }
    // wait until next midnight
    if (1) {
      const now = new Date()
      const midnight = new Date(now)
      midnight.setHours(24, 0, 0, 0)
      const delay = midnight - now
      console.log(`waiting ${(delay/1000).toFixed()}s`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
    const url = `https://adventofcode.com/${year}/day/${day}/input`
    const COOKIE = `session=${process.env.AOC_SESSION}`
    const input = await fetch(url, {
      method: 'GET',
      headers: { 'Cookie': COOKIE },
    }).then(rs => rs.text())
    fs.writeFileSync('working/input.txt', input.slice(0, -1)) // strip trailing newline
  } else if (command === 'submit') {
    if (args[0]) {
      ;[year, day] = args[0].split('/').map(Number)
    }
    const url = `https://adventofcode.com/${year}/day/${day}/answer`
    const COOKIE = `session=${process.env.AOC_SESSION}`
    const input = fs.readFileSync('working/input.txt', 'utf8')
    if (input) {
      const solution = require('./working/solution.js')
      const answer = solution(input)
      const level = answer[2] ? 2 : 1
      const body = new URLSearchParams({
        level,
        answer: answer[level],
      })
      try {
        const response = (await fetch(url, {
          method: 'POST',
          headers: {
            'Cookie': COOKIE,
            'User-Agent': `node/${process.version} ${pkg.name}/${pkg.version}`,
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        }).then(rs => rs.text())).toLowerCase()
        const RESULTS = {
          "your answer is too high": 'high',
          "your answer is too low": 'low',
          "that's not the right answer": 'wrong',
          // "too recently": 'wait',
          "that's the right answer!": 'correct',
        }
        const of_results = RESULTS[Object.keys(RESULTS).find(k => response.includes(k))]
        const result = of_results || (/<article><p>(.+)\n<\/p><\/article>/m.exec(response)||[])[1] || response
        console.log(result)
      } catch (er) {
        console.error(er)
      }
    } else {
      console.log('no input - paste into input.txt')
    }
  }
}
main()
