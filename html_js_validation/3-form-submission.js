// form-validation.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submitForm");
  
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent default form submission
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
  
      // Validation: Check if required fields are filled
      if (name.trim() === "" || email.trim() === "") {
        alert("Please fill in all required fields.");
      } else {
        // Form submission is successful
        alert("Form submitted successfully!");
        form.reset(); // Clear form fields if needed
      }
    }
  
    form.addEventListener("submit", handleFormSubmit);
  });