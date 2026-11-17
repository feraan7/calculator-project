const display = document.getElementById('display');

function appendvalue(value) {
    display.textContent += value;
}

function calculate() {
    display.textContent = eval(display.textContent.trim())
}

function reset() {
    display.textContent = '';
}


function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}