'use strict';

var _templateObject = _taggedTemplateLiteral(['hello,  dear ', '! I miss you'], ['hello,  dear ', '! I miss you']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello  ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}

createEmail('John@com', 'bill@com', 'hello', 'How you doing?');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add(10, 5);
add('5', '7');

var name = 'Bill';
console.log(upperName(_templateObject, name));

function upperName(literals) {
    for (var _len = arguments.length, value = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        value[_key - 1] = arguments[_key];
    }

    console.log(value);
    return literals[0] + value.toUpperCase() + literals[1];
}