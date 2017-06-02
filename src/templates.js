function greet(name) {
    console.log(`hello  ${name}`.toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `)
}

createEmail('John@com', 'bill@com', 'hello', 'How you doing?');



function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x)+parseInt(y)}`);
}

add(10, 5);
add('5', '7');

let name = 'Bill';
console.log(upperName`hello,  dear ${name}! I miss you`);

function upperName(literals, ...value) {
    console.log(value);
    return literals[0] + value.toUpperCase()+literals[1];
}


