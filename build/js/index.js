"use strict";
let display = document.querySelector("#screen");
let btns = document.querySelectorAll(".btn");
let memory;
let btntxt;
var inputValues = [];
var calculateValue = [];
const displayValue = () => {
    display.value = inputValues.join("");
};
const pushFucntion = (inputValue, calculateValu) => {
    inputValues.push(inputValue);
    if (calculateValu) {
        calculateValue.push(calculateValu);
    }
    else {
        calculateValue.push(inputValue);
    }
    displayValue();
};
const evaluateFunv = () => {
    let ans = calculateValue.join("");
    let out = eval(ans);
    out = out != undefined ? out : "";
    display.value = out;
    return out;
};
for (let item of btns) {
    item.addEventListener("click", (e) => {
        btntxt = e.target.innerText;
        switch (btntxt) {
            // trigonometry Fucntion
            case "Sin":
                pushFucntion("sin(", "Math.sin(");
                break;
            case "Cos":
                pushFucntion("cos(", "Math.cos(");
                break;
            case "tan":
                pushFucntion("tan(", "Math.tan(");
                break;
            case "Sinh":
                pushFucntion("sinh(", "Math.sinh(");
                break;
            case "Cosh":
                pushFucntion("cosh(", "Math.cosh(");
                break;
            case "tanh":
                pushFucntion("tanh(", "Math.tanh(");
                break;
            // Arithmetic function
            case "=":
                let out = evaluateFunv();
                out = out != undefined ? out : "";
                inputValues = [out.toString()];
                calculateValue = [out];
                break;
            case "&pi":
                pushFucntion("π", "Math.PI");
                break;
            case "X":
                pushFucntion("*");
                break;
            // All Clear
            case "AC":
                inputValues = [];
                calculateValue = [];
                displayValue();
                break;
            // Memory Fucntion
            case "MS":
                memory = evaluateFunv();
                display.value = "";
                break;
            case "MR":
                display.value += memory;
                break;
            case "MC":
                memory = 0;
                break;
            case "M+":
                memory = Number(memory) + 1;
                break;
            case "M-":
                memory = Number(memory) - 1;
                break;
            // absolute Function
            case "|x|":
                pushFucntion("abs(", "Math.abs(");
                break;
            //e^ operation
            case "exp":
                pushFucntion("exp(", "Math.exp(");
                break;
            //random number generator
            case "rand":
                let obj = Math.random() * 100;
                inputValues = [obj.toString()];
                calculateValue = [obj];
                break;
            // logarithm
            case "log":
                pushFucntion("log(", "Math.log10(");
                break;
            //ln operation
            case "ln":
                pushFucntion("ln(", "Math.log(");
                break;
            case "e":
                pushFucntion("e", "Math.E");
                break;
            // Factorail
            case "n!":
                pushFucntion("fact(", "fact(");
                break;
            default:
                pushFucntion(btntxt);
                break;
        }
    });
}
// back
const dlt = () => {
    display.value = display.value.substr(0, display.value.length - 1);
};
// Square
const square = () => {
    pushFucntion("^2", "**2");
};
// invers
const dvd = () => {
    let out = evaluateFunv();
    calculateValue = [eval((1 / parseFloat(calculateValue.join(""))).toString())];
    inputValues = [calculateValue];
};
const fact = (number) => {
    var f = 1;
    for (let i = 1; i <= number; i++) {
        f = f * i;
    }
    return f;
};
// Squar Root
const sqrt = () => {
    pushFucntion("root(", "Math.sqrt(");
};
// Power
const xPowy = () => {
    pushFucntion("^", "**");
};
// Ten Power
const tenPower = () => {
    pushFucntion("10^", "10**");
};
