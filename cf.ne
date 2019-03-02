@{%
// Hello, world!
function nuller() {
}
%}

left -> left . | null   {% nuller %}

right -> . right | null {% nuller %}

regex -> .:*            {% nuller %}
