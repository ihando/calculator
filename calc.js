function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function modulo(a, b){
    return a % b;
}
let num1;
let operator;
let num2;

function operate(operator, num1, num2){
    if (operator == "+"){
        add(num1, num2);
    }
    else if (operator == "-"){
        subtract(num1, num2);
    }
    else if (operator == "*"){
        multiply(num1, num2)
    }
    else if (operator == "/"){
        divide(num1, num2);
    }
    else if (operator == "%"){
        modulo(num1, num2);
    }
}