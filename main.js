const buttons = document.querySelectorAll('table button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('botao');
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function backspace() {
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function insert(num) {
    let numero = document.getElementById('result').innerHTML;
    if (num === '/') {
        num = '÷';
    } else if (num === '*') {
        num = 'x';
    }
    document.getElementById('result').innerHTML = numero + num;
}

function calculate() {
    let result = document.getElementById('result').innerHTML;
    if (result) {
        result = result.replace(/÷/g, '/').replace(/x/g, '*'); // troca de volta para a operação original
        document.getElementById('result').innerHTML = eval(result);
    } else {
        document.getElementById('result').innerHTML = "Digite algo";
    }
}