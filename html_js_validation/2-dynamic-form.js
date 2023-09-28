// Function to generate input fields based on selected value
function generateInputFields(num) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous fields
  
    for (let i = 1; i <= num; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.name = `field${i}`;
      input.placeholder = `Field ${i}`;
      inputContainer.appendChild(input);
    }
  }
  
  // Function to validate the form
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    const numFields = document.getElementById("numFields").value;
    const inputContainer = document.getElementById("inputContainer");
    const inputs = inputContainer.querySelectorAll("input");
  
    // Check if any field is empty
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        isValid = false;
        break;
      }
    }
  
    if (isValid) {
      alert("Form submitted successfully!");
      // You can submit the form here if needed: event.target.submit();
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  // Event listener for dropdown change
  document.getElementById("numFields").addEventListener("change", function () {
    const selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
  });
  
  // Event listener for form submission
  document.getElementById("dynamicForm").addEventListener("submit", validateForm);