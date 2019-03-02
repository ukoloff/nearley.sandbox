// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require('moo')

const lexer = moo.compile({
  ws: {match: /[\s]+/, lineBreaks: true},
  number: /\d+(?:[.]\d*)?(?:[eE][-+]?\d+)?/,
  //int: /\d+/,
  id: /\w+/,
  char: /./
})

lexer.next = skip(lexer.next)

function skip(next) {
  return skipper
  function skipper() {
    let tok;
    while ((tok = next.call(lexer)) && tok.type === "ws");
    return tok;
  }
}

function binaryOp(data) {
  // return {[data[1]]: [data[0], data[2]]}
  return data[0] + ' ' + data[2] + ' ' + data[1]
}

function unaryOp(data) {
  // return '-' == data[0] ? {'-': data[1]} : data[1]
  return '-' == data[0] ? data[1] + ' NEG' : data[1]
}

function fnCall(data) {
  //return {call: data}
  return data[1] + ' ' + data[0] + '!'
}
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "expr", "symbols": ["sum"], "postprocess": id},
    {"name": "sum", "symbols": ["sum", /[-+]/, "prod"], "postprocess": binaryOp},
    {"name": "sum", "symbols": ["prod"], "postprocess": id},
    {"name": "prod", "symbols": ["prod", /[*\/]/, "term"], "postprocess": binaryOp},
    {"name": "prod", "symbols": ["term"], "postprocess": id},
    {"name": "term$ebnf$1", "symbols": [/[-+]/], "postprocess": id},
    {"name": "term$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term", "symbols": ["term$ebnf$1", "simple"], "postprocess": unaryOp},
    {"name": "simple", "symbols": ["brackets"], "postprocess": id},
    {"name": "simple", "symbols": ["id"], "postprocess": id},
    {"name": "simple", "symbols": ["id", "brackets"], "postprocess": fnCall},
    {"name": "simple", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": data=> '' + parseFloat(data[0].text)},
    {"name": "id", "symbols": [(lexer.has("id") ? {type: "id"} : id)], "postprocess": data=> data[0].text},
    {"name": "brackets", "symbols": [{"literal":"("}, "sum", {"literal":")"}], "postprocess": d=> d[1]}
]
  , ParserStart: "expr"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
