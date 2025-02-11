let registeredUsers = [];

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let dob = document.getElementById("dob").value;

    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let dobError = document.getElementById("dobError");
    let passwordError = document.getElementById("passwordError");

    // Reset error messages
    emailError.textContent = "";
    phoneError.textContent = "";
    dobError.textContent = "";
    passwordError.textContent = "";

    // Validate Age (Only 18+ Allowed)
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--; // Adjust age if birthday hasn't occurred this year yet
    }

    if (age < 18) {
        dobError.textContent = "You must be 18 years or older to register!";
        return;
    }

    // Check for duplicate email & phone
    let existingUser = registeredUsers.find(user => user.email === email || user.phone === phone);
    if (existingUser) {
        if (existingUser.email === email) {
            emailError.textContent = "Email is already in use!";
        }
        if (existingUser.phone === phone) {
            phoneError.textContent = "Phone number is already in use!";
        }
        return;
    }

    // Validate Password Match and Password Criteria
    const passwordCriteria = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d@_&])[A-Za-z\d@_&]{8,}$/;
    if (!password.match(passwordCriteria)) {
        passwordError.textContent = "Password must be at least 8 characters, including 1 uppercase letter, 1 special character (@, _, &) and numbers.";
        return;
    }
    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match!";
        return;
    }

    // Store registered user
    registeredUsers.push({ name, email, phone, password });

    // Show Success Popup
    document.getElementById("successPopup").style.display = "block";

    // Redirect to signin page after popup is closed
    setTimeout(() => {
        window.location.href = "signin.html"; // Redirect to the signin page
    }, 2000); // Delay 2 seconds before redirecting
});

// Function to toggle password visibility
function togglePassword(fieldId, iconId) {
    let passwordField = document.getElementById(fieldId);
    let icon = document.getElementById(iconId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}
