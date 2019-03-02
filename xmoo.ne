@{%
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
%}

@lexer lexer

expr -> sum             {% id %}

sum ->  sum  [-+] prod  {% binaryOp %}
    | prod              {% id %}
prod -> prod [*/] term  {% binaryOp %}
    | term              {% id %}
term -> [-+]:? simple   {% unaryOp %}
simple -> brackets      {% id %}
        | id            {% id %}
        | id brackets   {% fnCall %}
        | %number       {% data=> '' + parseFloat(data[0].text) %}
id -> %id               {% data=> data[0].text %}
brackets -> "(" sum ")" {% d=> d[1] %}
