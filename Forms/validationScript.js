    // JavaScript code for form validation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const input = document.getElementById("inputField");
  const message = document.getElementById("message");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = input.value.trim();
    const regex = /^[a-zA-Z0-9]+$/;

    if (!regex.test(value)) {
      message.textContent = "Error: Input must be alphanumeric only.";
      message.style.color = "red";
    } else {
      message.textContent = "Success! Your input is valid.";
      message.style.color = "green";

    }
  });
});