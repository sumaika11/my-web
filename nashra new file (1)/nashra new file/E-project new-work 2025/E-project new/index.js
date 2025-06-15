
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const nameField = document.getElementById("exampleInputName");
    const emailField = document.getElementById("exampleInputEmail1");
    const passwordField = document.getElementById("exampleInputPassword1");
    const checkbox = document.getElementById("exampleCheck1");

     let isValid = true;

    if (nameField.value.trim() === "") {
      alert("Name is required.");
      nameField.focus();
      isValid = false;
    }


    else if (!validateEmail(emailField.value)) {
      alert("Please enter a valid email address.");
      emailField.focus();
      isValid = false;
    }

    else if (passwordField.value.length < 6) {
      alert("Password should be at least 6 characters long.");
      passwordField.focus();
      isValid = false;
    }

   else if (!checkbox.checked) {
      alert("Please accept the terms by checking the box.");
      checkbox.focus();
      isValid = false;
    }


    if (isValid) {
      alert("Form submitted successfully!");
      form.submit();
    }
  });

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
});
