// Get a reference to the form and error message elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementById("error");

// Function to validate the password
function validatePassword(password) {
  // Define regular expressions for each criterion
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharacterRegex = /[!@#$%^&*]/;

  // Check each criterion
  const isLengthValid = lengthRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);
  const hasSpecialCharacter = specialCharacterRegex.test(password);

  // Check if all criteria are met
  if (
    isLengthValid &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialCharacter
  ) {
    return true; // Password meets all criteria
  } else {
    return false; // Password does not meet all criteria
  }
}

// Handle form submission
passwordForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting by default
  const password = passwordInput.value;

  if (validatePassword(password)) {
    // Password is valid, allow form submission
    errorElement.textContent = ""; // Clear any previous error messages
    passwordForm.submit(); // Submit the form
  } else {
    // Password is not valid, display an error message
    errorElement.textContent = "Password does not meet the criteria.";
  }
});