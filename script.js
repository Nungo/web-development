// Get the display element
const display = document.querySelector('input[name="display"]');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to append to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to delete the last character (DEL button functionality)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);  // Evaluate the expression
    } catch (error) {
        display.value = 'Error';  // Display error if invalid expression
    }
}

// Event listener setup for buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // Route the button clicks to the appropriate functions
        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteLast();
        } else if (value === '=') {
            calculate();
        } else {
            appendToDisplay(value);
        }
    });
});
