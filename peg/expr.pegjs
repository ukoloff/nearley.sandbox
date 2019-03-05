{
function binaryOp(left, tail) {
  for (let op of tail) {
    left = `${left} ${op[1]} ${op[0]}`
  }
  return left
}
}

expr = sum

_ = [ \r\t\n]*

sum = left:prod tail:([-+] prod)* { return binaryOp(left, tail)}

prod = left:term tail:([*/] term)* { return binaryOp(left, tail)}

term = left:unary tail:(pow term)? { return tail ? `${left} ${tail[1] } **` : left}

pow = '^' / '**'

unary = _ op:[-+]? _ simple:simple _ { return '-' === op ? `${simple} NEG` : simple}

simple = brackets
  / fn:id _ arg:brackets { return `${arg} ${fn}!` }
  / id
  / number

brackets = '(' value:sum ')' { return value }

id = $( letter (letter / digit)* )

number = str:$( digit+ ('.' digit*)? ('e'i [-+]? digit+)? ) { return parseFloat(str) }

letter = [a-z]i
digit = [0-9]
