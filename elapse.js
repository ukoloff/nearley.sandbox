const nearley = require('nearley')
const grammar = require('./cf')

const gram = nearley.Grammar.fromCompiled(grammar)
gram.start = 'right'

const parser = new nearley.Parser(gram)

console.time('parse')
parser.feed('x'.repeat(2000))
console.timeEnd('parse')
