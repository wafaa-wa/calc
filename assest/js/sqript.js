const display = document.getElementById('display');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clr');
const dealeteButton = document.getElementById('del');

let num1='';
let num2='';
let selectedOperator=null;

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);

    });
});
operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        selecteOperator(button.textContent);

    });
});

equalButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clear);
dealeteButton.addEventListener('click' , cls);


function appendNumber(number) {
    num1+=number;
    display.value = num1;
}

function selecteOperator (operator) {
    if (num1 === '') return;
    if (num2 !== '') {
        calculate();
    }
    selectedOperator = operator;
    num2 = num1 ;
    num1 = '';
}


function calculate () {
    let result;
    const prev = parseFloat(num2);
    const current = parseFloat(num1);
    if (isNaN(prev) || isNaN(current)) return;
    switch (selectedOperator) {
        case '+':
            result = prev + current;
            break;               
        case '-':
            result = prev - current;
            break;       
        case '*':
            result = prev * current;
            break;        
        case '/':
            result = prev / current;
            break;       
        case '%':
            result = prev % current;
            break;        
        default:
            return;
    }
    num1 = result;
    num2 = null;
    selectedOperator = '';
    display.value = result;
}

function clear () {
    num1 = '';
    num2 = '';
    selectedOperator = null;
    display.value = '';
}

function cls () {
    display.value = display.value.slice(0,-1);

}













 