function add(x,y) {
    return x + y;
}
function subtract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    if (y !== 0) {
        return x/y;
    } else {
        display.textContent = "UNDEFINED";
    }
}
function operation(operator, x, y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            if (y !== 0) {
            return divide(x,y);
            }
            else {
                console.log("UNDEFINED");
            }
    }
}

const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");


let displayFirst = "";
let displaySecond = "";
let currentOperation = null;
let shouldClearDisplay = false;

clear.addEventListener("click", () => {
    display.textContent = "0";
    displayFirst = "";
    displaySecond = "";
    currentOperation = null;
});

function clearDisplay() {
    display.textContent = "";
    shouldClearDisplay = false;
}

function addNumber(number) {
    if (display.textContent === "0" || shouldClearDisplay) {
        clearDisplay();
    }
    display.textContent += number;
}

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        addNumber(button.textContent);
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        setOperator(button.textContent);
    });
});

function setOperator(operator) {
    if (currentOperation !== null) {
        operate();
    }
    displayFirst = display.textContent;
    currentOperation = operator;
    shouldClearDisplay = true;
}

equals.addEventListener("click", operate);

function operate() {
    if (currentOperation === null || shouldClearDisplay) {
        return;
    }
    if (currentOperation === "/" && display.textContent === "0") {
        display.textContent = "Dividing by 0 ???";
        return;
    }
    displaySecond = display.textContent;
    display.textContent = roundResult(
        operation(currentOperation, displayFirst, displaySecond)
    );
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

// MY BAD CODE - learning from michalosman
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         if (button.className === "number") {
//             displayFirst.push(button.textContent);
//             display.textContent = displayFirst.join("");
//             let x = parseInt(display.textContent);
//             console.log("x = " + x);
//         }
//         else if (button.className === "operator") {
//             displayFirst = [];
//             display.textContent = "";
//             let y = parseInt(display.textContent);

//             displaySecond.push(number.textContent);
//             display.textContent = displaySecond.join("");
//             console.log("y = " + y);
//         }
//         // if (button.textContent === "=") {
//         //     //display.textContent == variable for calculation
//         //     let newCalc = display.textContent;
//         //     if (button.id = "+") {
//         //         let operator = newCalc.indexOf(/\+/);
//         //         //let x = newCalc.splice(0, operator);
//         //         let y = displayOperation.splice(operator, displayOperation.length -1);
//         //         //add(parseInt(x),parseInt(y));
//         //         console.log(parseInt(x));
//         //     }
//         // }
        
//     });
// });




/*
learning from other solutions and what to do:

declare x and y as empty strings initially
currentOperation and ability to reset screen as null, false

set an operate function for all of the operators using switch
get a refresh on switch/case

don't need arrays, but I was on the right track with x and y

in clear, manually reset variables for x and y

maybe replace x and y with a/b


*/