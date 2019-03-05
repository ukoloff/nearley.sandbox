expr = sum

sum = prod ([-+] prod)*

prod = term ([*/] term)*

term = unary (pow term)?

pow = '^' / '**'

unary = [-+]? simple

simple = brackets / id brackets / id / number

brackets = '(' value:sum ')' { return value }

id = $( letter (letter / digit)+ )

number = str:$( digit+ ('.' digit*)? ('e'i [-+]? digit+)? ) { return parseFloat(str) }

letter = [a-z]i
digit = [0-9]
