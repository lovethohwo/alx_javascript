// Get a reference to the form and error message elements
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

// Function to validate the email format
function validateEmail(email) {
  // Define a regular expression for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regular expression
  return emailRegex.test(email);
}

// Handle form submission
emailForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting by default
  const email = emailInput.value;

  if (validateEmail(email)) {
    // Email format is valid, allow form submission
    errorElement.textContent = ""; // Clear any previous error messages
    emailForm.submit(); // Submit the form
  } else {
    // Email format is not valid, display an error message
    errorElement.textContent = "Please enter a valid email address.";
  }
});