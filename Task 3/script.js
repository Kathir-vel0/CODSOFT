const display = document.querySelector(".display");  // Fixed typo here
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];

let output = "";

// Define function to calculate based on button clicked.
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {  // Corrected binValue to btnValue
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        // If DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    } else {
        // If output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;

        // Prevent multiple consecutive operators
        if (specialChars.includes(btnValue) && specialChars.includes(output.slice(-1))) return;

        output += btnValue;
    }
    display.value = output;
};

// Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    // Button click listener calls calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
