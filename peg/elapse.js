const speed = require('./speed')


console.time('PEG')
speed.parse('x'.repeat(3000))
console.timeEnd('PEG')
