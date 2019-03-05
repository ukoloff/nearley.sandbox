const parser = require('./expr')

console.log(JSON.stringify(parser.parse(' 1 + 2 * a (5)')))
