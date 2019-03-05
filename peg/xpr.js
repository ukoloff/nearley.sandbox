const parser = require('./expr')

console.log(JSON.stringify(parser.parse(' a ** b ^ c')))
