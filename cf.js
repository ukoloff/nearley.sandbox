// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

// Hello, world!
function nuller() {
}
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "left", "symbols": ["left", /./]},
    {"name": "left", "symbols": [], "postprocess": nuller},
    {"name": "right", "symbols": [/./, "right"]},
    {"name": "right", "symbols": [], "postprocess": nuller},
    {"name": "regex$ebnf$1", "symbols": []},
    {"name": "regex$ebnf$1", "symbols": ["regex$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "regex", "symbols": ["regex$ebnf$1"], "postprocess": nuller}
]
  , ParserStart: "left"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
