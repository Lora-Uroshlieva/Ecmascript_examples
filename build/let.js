'use strict';

var buttons = document.getElementsByClassName('btn');
console.log(buttons);

var _loop = function _loop(i) {
    button = buttons[i];

    button.innerHTML = i;
    button.onclick = function () {
        console.log(i);
    };
};

for (var i = 0; i < 6; i++) {
    var button;

    _loop(i);
}