const fs = require('fs')
const child_process = require('child_process')


const [command, ...args] = process.argv.slice(2)
if (command === 'test') {
  const solution = require('./working/solution.js')
  const scratch = fs.readFileSync('working/scratch.txt', 'utf8')
  if (scratch) {
    console.log('scratch')
    solution(scratch)
  }
  const input = fs.readFileSync('working/input.txt', 'utf8')
  if (input) {
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
}
