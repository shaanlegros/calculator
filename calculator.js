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
        return "UNDEFINED";
    }
}
function clear() {
    //create a function to clear the display
}

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");

let displayOperation = [];

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        displayOperation.push(button.textContent);
        display.textContent = displayOperation.join("");
    });
});


/* brainstorm - two parts: 1. display  2. actual calculation

1.
for each of the buttons
if it's not equals, clear, or operator
    select the text and turn into a number
replace current display with an array
    array: clicked button added to array each time
    update array

then - either additional number added or operator
    add to display

display text of array - no spaces

2.
when equals button is clicked - compute
clear function - start back at zero
*/