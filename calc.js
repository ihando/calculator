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

const body = document.body;
const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display");
let dstring = "";
let signstatus = "positive";
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const input = e.target;
        if (input.id === "ac"){
            dstring = "";
            signstatus = "positive";
            display.innerHTML = "0";
        }
        if (input.id === "zero"){
            if (display.innerHTML === "0"){
            } else {
                dstring += "0";
                display.innerHTML = dstring;
            }
        }
        if (input.id === "one"){
            dstring += "1";
            display.innerHTML = dstring;
        }
        if (input.id === "two"){
            dstring += "2";
            display.innerHTML = dstring;
        }
        if (input.id === "three"){
            dstring += "3";
            display.innerHTML = dstring;
        }
        if (input.id === "four"){
            dstring += "4";
            display.innerHTML = dstring;
        }
        if (input.id === "five"){
            dstring += "5";
            display.innerHTML = dstring;
        }
        if (input.id === "six"){
            dstring += "6";
            display.innerHTML = dstring;
        }
        if (input.id === "seven"){
            dstring += "7";
            display.innerHTML = dstring;
        }
        if (input.id === "eight"){
            dstring += "8";
            display.innerHTML = dstring;
        }
        if (input.id === "nine"){
            dstring += "9";
            display.innerHTML = dstring;
        }
        if (input.id === "decimal"){
            if (display.innerHTML.includes(".")) {

            } else {
                dstring += ".";
                display.innerHTML = dstring;
            }
        }
        if (input.id === "posneg"){
            if (signstatus === "positive" && display.innerHTML !== "0"){
                signstatus = "negative"
                dstring = "-" + dstring;
                display.innerHTML = dstring;
            }
            else if (signstatus === "negative" && display.innerHTML !== "0") {
                signstatus = "positive"
                dstring = dstring.substring(1);
                display.innerHTML = dstring;
            }
        }
    })
})
