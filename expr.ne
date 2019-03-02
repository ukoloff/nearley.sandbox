# @builtin "number.ne"
@{%
function number(data) {
  console.log('>>>', arguments)
  return data.join('')
}
function nuller() {
}
%}
expr -> sum

sum -> prod ([-+] prod):*
prod -> term ([*/] term):*
term -> [-+]:? simple
simple -> brackets
        | id      {% id %}
        | id brackets
        | number  {% id %}
brackets -> "(" sum ")" {% d=> d[1] %}
id -> letter xletter:* {% data=> data[0] + data[1].join('') %}
letter -> [a-zA-Z]        {% id %}
digit -> [0-9]            {% id %}
xletter -> letter         {% id %}
        | digit           {% id %}
number -> [1-9] digit:* ("." digit:*):? ("e"i [-+]:? digit:+):? #{% number %}
ws -> [\s]:*  {% nuller %}
