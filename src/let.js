var buttons = document.getElementsByClassName('btn');
console.log(buttons);

for (let i = 0; i < 6; i++) {

    var button = buttons[i];
    button.innerHTML = i;
    button.onclick = function () {
        console.log(i);
    };
}
