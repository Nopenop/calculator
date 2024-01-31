operands = [];

function doMath(){

    num1 = parseFloat(operands[0]);
    num2 = parseFloat(document.getElementById("screen").innerHTML);
    operator = operands[1];
    solution = 0;
    console.log(operands)
    if (operator === "+"){
        solution = num1 + num2;
    } else if (operator === "-"){
        solution = num1 - num2;
    } else if (operator === '*'){
        solution = num1 * num2;
    } else if (operator === '/'){
        solution = num1 / num2;
    }
    console.log(solution);
    document.getElementById("screen").innerHTML = String(solution);
    operands = []
}


function addOne() {
    document.getElementById("screen").innerHTML += "1";
}
function addTwo() {
    document.getElementById("screen").innerHTML += "2";
}
function addThree() {
    document.getElementById("screen").innerHTML += "3";
}
function addFour() {
    document.getElementById("screen").innerHTML += "4";
}
function addFive() {
    document.getElementById("screen").innerHTML += "5";
}
function addSix() {
    document.getElementById("screen").innerHTML += "6";
}
function addSeven() {
    document.getElementById("screen").innerHTML += "7";
}
function addEight() {
    document.getElementById("screen").innerHTML += "8";
}
function addNine() {
    document.getElementById("screen").innerHTML += "9";
}
function addZero() {
    document.getElementById("screen").innerHTML += "0";
}

function clearScreen(){
    const screen = document.getElementById("screen");
    screen.innerHTML= "";
}

function clearFull(){
    clearScreen();
    operands = [];
}

function addDot(){
    document.getElementById("screen").innerHTML += ".";
}

function doOperator(){
    const number = document.getElementById("screen").innerHTML;
    console.log(number);
    if (number===""){
        operands.push("0");
        clearScreen();
    }
    else{
        operands.push(number);
        clearScreen();
    }
}

function doAdd(){
    doOperator();
    operands.push("+");
}

function doSubtract(){
    doOperator();
    operands.push("-");
}

function doMultiply(){
    doOperator();
    operands.push("*");
}

function doDivide(){
    doOperator();
    operands.push("/");
}

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const clear = document.getElementById("clear");
const dot = document.getElementById("dot");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const equal = document.getElementById("equal");

one.addEventListener("click", addOne);
two.addEventListener("click", addTwo);
three.addEventListener("click", addThree);
four.addEventListener("click", addFour);
five.addEventListener("click", addFive);
six.addEventListener("click", addSix);
seven.addEventListener("click", addSeven);
eight.addEventListener("click", addEight);
nine.addEventListener("click", addNine);
zero.addEventListener("click", addZero);
clear.addEventListener("click", clearFull);
dot.addEventListener("click", addDot);

add.addEventListener("click", doAdd);
subtract.addEventListener("click", doSubtract);
multiply.addEventListener("click", doMultiply);
divide.addEventListener("click", doDivide);

equal.addEventListener("click", doMath);

clearScreen();