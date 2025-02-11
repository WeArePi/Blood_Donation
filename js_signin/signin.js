document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Regular Expression for Password Validation (at least one uppercase, one lowercase, one special character, one digit, and min length of 8)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d@_&])[A-Za-z\d@_&]{8,}$/;

    // Validate username and password
    if (!username || !password) {
        alert("Please enter both username and password!");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one special character (@, _, or &), one digit, and must be at least 8 characters long.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists in the stored data
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";  // Redirect to Dashboard
    } else {
        alert("Invalid Username or Password!"); // Show error if credentials are wrong
    }
});

// Forgot password functionality
document.getElementById("forgotPassword").addEventListener("click", function() {
    alert("Password recovery link sent to your email!");
});

// Popup logic for registration
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("registered") === "true") {
        document.getElementById("loginPopup").style.display = "block";
        localStorage.removeItem("registered"); // Remove flag after showing popup
    }
});

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}
document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;

    // Toggle eye icon
    this.classList.toggle("fa-eye-slash");
});
