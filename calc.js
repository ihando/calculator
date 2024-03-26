
const body = document.body;
const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display");
let dstring = "";
let signstatus = "positive";
let answer = 0;
let postfix = [];
let operand = [];
let opstring = "";
let answerstring = "";
let posnegstring = "";
let answerneg = 1;
let multdigit = 0;
const duration = 80;

function changeColor(button) {
    button.style.backgroundColor = "#da9bf7";
}
buttons.forEach(button => {
    button.addEventListener("click", () => {
        changeColor(button);
        setTimeout(() => {
            button.style.backgroundColor = "#bf6de3";
            button.removeEventListener("click", changeColor);
        }, duration);
        });
    button.addEventListener("click", (e) => {
        const input = e.target;
        if (input.id === "ac"){
            dstring = "";
            signstatus = "positive";
            display.innerHTML = "0";
            postfix.pop();
            postfix.pop();
            operand.pop();
        }
        if (input.id === "mod"){
            dstring = "";
            signstatus = "positive";
            display.innerHTML = "meow meow";
            postfix.pop();
            postfix.pop();
            operand.pop();
        }
        if (input.id === "zero"){
            if (display.innerHTML === "0"){
            } else {
                if (postfix.length != 0){
                    dstring += "0";
                    postfix.pop();
                    postfix.push(parseFloat(dstring));
                    display.innerHTML = dstring;
                    trucateDisplay()
                    posnegstring = "-" + dstring;
                }
            }
        }
        if (input.id === "one"){
            dstring += "1";
            if (postfix.length === 0){
                postfix.push(1);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "two"){
            dstring += "2";
            if (postfix.length === 0){
                postfix.push(2);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "three"){
            dstring += "3";
            if (postfix.length === 0){
                postfix.push(3);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "four"){
            dstring += "4";
            if (postfix.length === 4){
                postfix.push(1);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "five"){
            dstring += "5";
            if (postfix.length === 0){
                postfix.push(5);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "six"){
            dstring += "6";
            if (postfix.length === 0){
                postfix.push(6);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "seven"){
            dstring += "7";
            if (postfix.length === 0){
                postfix.push(7);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "eight"){
            dstring += "8";
            if (postfix.length === 0){
                postfix.push(8);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "nine"){
            dstring += "9";
            if (postfix.length === 0){
                postfix.push(9);
            }
            else {
                postfix.pop();
                postfix.push(parseFloat(dstring));
            }
            display.innerHTML = dstring;
            trucateDisplay()
            posnegstring = "-" + dstring;
        }
        if (input.id === "decimal"){
            if (display.innerHTML.includes(".")) {

            } else {
                if (postfix.length === 0){
                }
                else {
                    dstring += ".";
                    postfix.pop()
                    display.innerHTML = dstring;
                    trucateDisplay()
                    postfix.push(parseFloat(dstring))
                }
            }
        }
        if (input.id === "posneg"){
            if (signstatus === "positive" && display.innerHTML !== "0"){
                signstatus = "negative"
                dstring = posnegstring;
                display.innerHTML = dstring;
                trucateDisplay()
                temp = postfix.pop();
                postfix.push(temp * -1);
            }
            else if (signstatus === "negative" && display.innerHTML !== "0") {
                signstatus = "positive"
                dstring = posnegstring;
                display.innerHTML = dstring;
                trucateDisplay()
                temp = postfix.pop();
                postfix.push(temp * -1);
            }
        }
        if (input.id === "equals") {
            if (operand[0] == "/" && postfix[1] == 0){
                dstring = "";
                signstatus = "positive";
                display.innerHTML = "nice try";
                postfix.pop();
                postfix.pop();
                operand.pop();
            }
            checkBefore();
        }
        if (input.id === "add") {
            checkBefore();
            postfix.push(100);
            operand.push("+");
            opstring = "+";
            dstring = "";
            display.innerHTML = opstring;
            trucateDisplay()
        }
        if (input.id === "subtract") {
            checkBefore();
            postfix.push(100);
            operand.push("-");
            opstring = "-";
            dstring = "";
            display.innerHTML = opstring;
            trucateDisplay()
        }
        if (input.id === "multiply") {
            checkBefore();
            postfix.push(100);
            operand.push("*");
            opstring = "*";
            dstring = "";
            display.innerHTML = opstring;
            trucateDisplay()
        }
        if (input.id === "divide") {
            checkBefore();
            postfix.push(100);
            operand.push("/");
            opstring = "/";
            dstring = "";
            display.innerHTML = opstring;
            trucateDisplay()
        }
        
    })
})

function checkBefore() {
    if (operand[0] === "+"){
        answer = postfix.pop() + postfix.pop();
        answerstring = answer.toString();
        if (answer >= 0){
            signstatus = "positive";
            posnegstring = "-" + answer;
        } else{
            signstatus = "negative"
            posnegstring = answerstring.substring(1);
        }
        postfix.push(answer)
        operand.pop();
        dstring = "";
        display.innerHTML = answerstring;
        trucateDisplay()
    }
    else if (operand[0] === "-"){
        answer = postfix[0] - postfix[1];
        answerstring = answer.toString();
        if (answer >= 0){
            signstatus = "positive";
            posnegstring = "-" + answer;
        } else{
            signstatus = "negative"
            posnegstring = answerstring.substring(1);
        }
        postfix.pop();
        postfix.pop();
        postfix.push(answer)
        operand.pop();
        dstring = "";
        answerneg = -1 * answer;
        posnegstring = answerneg;
        display.innerHTML = answerstring;
        trucateDisplay()
    }
    else if (operand[0] === "/"){
        answer = postfix[0] / postfix[1];
        answerstring = answer.toString();
        if (answer >= 0){
            signstatus = "positive";
            posnegstring = "-" + answer;
        } else{
            signstatus = "negative"
            posnegstring = answerstring.substring(1);
        }
        postfix.pop();
        postfix.pop();
        postfix.push(answer)
        operand.pop();
        dstring = "";
        answerneg = -1 * answer;
        posnegstring = answerneg;
        display.innerHTML = answerstring;
        trucateDisplay()
    }
    else if (operand[0] === "*"){
        answer = postfix.pop() * postfix.pop();
        answerstring = answer.toString();
        if (answer >= 0){
            signstatus = "positive";
            posnegstring = "-" + answer;
        } else{
            signstatus = "negative"
            posnegstring = answerstring.substring(1);
        }
        postfix.push(answer)
        operand.pop();
        dstring = "answer";
        answerneg = -1 * answer;
        posnegstring = answerneg;
        display.innerHTML = answerstring;
        trucateDisplay()
    }
}

function trucateDisplay() {
    if (display.innerHTML.length > 11) {
        display.innerHTML = display.innerHTML.substring(0, 11)
    }
}