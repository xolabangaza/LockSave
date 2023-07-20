const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

    document.addEventListener("DOMContentLoaded", function () {
        // Function to check if a field is empty
        function isFieldEmpty(fieldValue) {
            return fieldValue.trim() === "";
        }

        // Function to validate the login form
        function validateLoginForm() {
            const email = document.querySelector(".login input[type='email']").value;
            const password = document.querySelector(".login input[type='password']").value;

            if (isFieldEmpty(email) || isFieldEmpty(password)) {
                alert("Please fill in all the fields.");
                return false; // Prevent form submission
            }

            return true; // Allow form submission
        }

        // Function to validate the signup form
        function validateSignupForm() {
            const fullName = document.querySelector(".signup input[placeholder='Full Name']").value;
            const email = document.querySelector(".signup input[type='email']").value;
            const password = document.querySelector(".signup input[placeholder='Create password']").value;
            const confirmPassword = document.querySelector(".signup input[placeholder='Confirm password']").value;

            if (isFieldEmpty(fullName) || isFieldEmpty(email) || isFieldEmpty(password) || isFieldEmpty(confirmPassword)) {
                alert("Please fill in all the fields.");
                return false; // Prevent form submission
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return false; // Prevent form submission
            }

            return true; // Allow form submission
        }

        // Attach event listeners to the login and signup forms
        const loginForm = document.querySelector(".login form");
        const signupForm = document.querySelector(".signup form");

        if (loginForm) {
            loginForm.addEventListener("submit", function (event) {
                if (!validateLoginForm()) {
                    event.preventDefault(); // Prevent form submission if validation fails
                } else {
                    // Form submission successful, display a message or alert
                    alert("Login submitted successfully!");
                    loginForm.reset(); // Clear the form fields
                }
            });
        }

        if (signupForm) {
            signupForm.addEventListener("submit", function (event) {
                if (!validateSignupForm()) {
                    event.preventDefault(); // Prevent form submission if validation fails
                } else {
                    // Form submission successful, display a message or alert
                    alert("Signup submitted successfully!");
                    signupForm.reset(); // Clear the form fields
                }
            });
        }
    });

