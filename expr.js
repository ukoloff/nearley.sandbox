// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

function number(data) {
  console.log('>>>', arguments)
  return data.join('')
}
function nuller() {
}
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "expr", "symbols": ["sum"]},
    {"name": "sum$ebnf$1", "symbols": []},
    {"name": "sum$ebnf$1$subexpression$1", "symbols": [/[-+]/, "prod"]},
    {"name": "sum$ebnf$1", "symbols": ["sum$ebnf$1", "sum$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sum", "symbols": ["prod", "sum$ebnf$1"]},
    {"name": "prod$ebnf$1", "symbols": []},
    {"name": "prod$ebnf$1$subexpression$1", "symbols": [/[*\/]/, "term"]},
    {"name": "prod$ebnf$1", "symbols": ["prod$ebnf$1", "prod$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "prod", "symbols": ["term", "prod$ebnf$1"]},
    {"name": "term$ebnf$1", "symbols": [/[-+]/], "postprocess": id},
    {"name": "term$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term", "symbols": ["term$ebnf$1", "simple"]},
    {"name": "simple", "symbols": ["brackets"]},
    {"name": "simple", "symbols": ["id"], "postprocess": id},
    {"name": "simple", "symbols": ["id", "brackets"]},
    {"name": "simple", "symbols": ["number"], "postprocess": id},
    {"name": "brackets", "symbols": [{"literal":"("}, "sum", {"literal":")"}], "postprocess": d=> d[1]},
    {"name": "id$ebnf$1", "symbols": []},
    {"name": "id$ebnf$1", "symbols": ["id$ebnf$1", "xletter"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "id", "symbols": ["letter", "id$ebnf$1"], "postprocess": data=> data[0] + data[1].join('')},
    {"name": "letter", "symbols": [/[a-zA-Z]/], "postprocess": id},
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "xletter", "symbols": ["letter"], "postprocess": id},
    {"name": "xletter", "symbols": ["digit"], "postprocess": id},
    {"name": "number$ebnf$1", "symbols": []},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number$ebnf$2$subexpression$1$ebnf$1", "symbols": []},
    {"name": "number$ebnf$2$subexpression$1$ebnf$1", "symbols": ["number$ebnf$2$subexpression$1$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "number$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "number$ebnf$2", "symbols": ["number$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "number$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number$ebnf$3$subexpression$1$subexpression$1", "symbols": [/[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "number$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[-+]/], "postprocess": id},
    {"name": "number$ebnf$3$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number$ebnf$3$subexpression$1$ebnf$2", "symbols": ["digit"]},
    {"name": "number$ebnf$3$subexpression$1$ebnf$2", "symbols": ["number$ebnf$3$subexpression$1$ebnf$2", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number$ebnf$3$subexpression$1", "symbols": ["number$ebnf$3$subexpression$1$subexpression$1", "number$ebnf$3$subexpression$1$ebnf$1", "number$ebnf$3$subexpression$1$ebnf$2"]},
    {"name": "number$ebnf$3", "symbols": ["number$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "number$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number", "symbols": [/[1-9]/, "number$ebnf$1", "number$ebnf$2", "number$ebnf$3"]},
    {"name": "ws$ebnf$1", "symbols": []},
    {"name": "ws$ebnf$1", "symbols": ["ws$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ws", "symbols": ["ws$ebnf$1"], "postprocess": nuller}
]
  , ParserStart: "expr"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
