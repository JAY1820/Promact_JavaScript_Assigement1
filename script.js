document.addEventListener("DOMContentLoaded", function () {
  // Get the form and result display area
  const form = document.getElementById("calculator-form");
  const resultDiv = document.getElementById("result");

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from being submitted

    // Get user inputs
    const num1 = parseFloat(form.num1.value);
    const num2 = parseFloat(form.num2.value);
    const operator = form.operator.value;

    let result;

    // Check if inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter a number"); // Display a popup message
      return; // Exit the function
    } else {
      // Perform calculation based on operator
      switch (operator) {
        case "+":
          result = add(num1, num2);
          break;
        case "-":
          result = subtract(num1, num2);
          break;
        case "*":
          result = multiply(num1, num2);
          break;
        case "/":
          if (num2 === 0) {
            result = "Error: Cannot divide by zero";
          } else {
            result = divide(num1, num2);
          }
          break;
        case "%": // Calculate percentage
          result = percentage(num1, num2);
          break;
        default:
          result = "Error: Invalid operator";
      }
    }

    // Display the result
    resultDiv.textContent = result;
  });

  // Define functions for the operations
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  // Calculate percentage function
  function percentage(a, b) {
    return (a * b) / 100;
  }
});
