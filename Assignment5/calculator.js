// Function to perform arithmetic operations
function calculate(operation) {
    // Get the input values from the text fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Get the output div element
    const outputDiv = document.getElementById('output');
    let result;

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        outputDiv.textContent = 'Please enter valid numbers.';
        return;
    }

    // Perform the specified operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            // Check for division by zero
            if (num2 === 0) {
                outputDiv.textContent = 'Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            outputDiv.textContent = 'Invalid operation.';
            return;
    }

    // Display the result
    outputDiv.textContent = `Result: ${result}`;
}