let inputField = document.getElementById("calculationExpression");
const calculate = document.getElementById("calculate");

function evaluateResult(){
    try {
        const result = eval(inputField.value);
        inputField.value = result; // Display the result in the input field
        console.log(inputField.value);
    } catch (error) {
        console.error('Invalid expression');
        inputField.value = ''; // Optionally clear input on error
    }
}

function updateInput(value) {
    console.log(value);

    if (value === 'AC') {
        inputField.value = ''; // Clear the input
    } else if (value === 'DEL') {
        inputField.value = inputField.value.slice(0, inputField.value.length - 1); // Delete last character
    } 
    else if(value === '()') {

        const currentValue = inputField.value;
        const openCount = (currentValue.match(/\(/g) || []).length;
        const closeCount = (currentValue.match(/\)/g) || []).length;

        if (openCount === closeCount) {
            inputField.value += '('; // Add opening parenthesis if none exists
        } else {
            inputField.value += ')'; // Add closing parenthesis if an opening exists
        }
    }
    else {
        inputField.value += value; // Append button value to input
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default action (e.g., form submission)

        // Evaluate the expression and handle errors
        evaluateResult();
    } else if (event.key === 'Backspace') {
        inputField.value = inputField.value.slice(0, inputField.value.length - 1); // Remove last character
    }
    else{
        if([
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            '+', '-', '*', '/', '%', '.', '(', ')'
        ].includes(event.key)){
            inputField.value += event.key
        }
    }
});
