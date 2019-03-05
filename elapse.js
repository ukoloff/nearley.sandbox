const nearley = require('nearley')
const grammar = require('./cf')

const gram = nearley.Grammar.fromCompiled(grammar)

for (let start of rules(gram)) {
  gram.start = start

  const parser = new nearley.Parser(gram)

  console.time(start)
  parser.feed('x'.repeat(3000))
  console.timeEnd(start)
}

function rules(grammar) {
  let seen = {}, result = []
  for (let z of grammar.rules) {
    if (/^\w+$/.test(z.name) && !seen[z.name]) {
      seen[z.name] = 1
      result.push(z.name)
    }
  }
  return result.sort()
}
