// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Redirect user based on selection
function redirectUser() {
    var userType = document.getElementById("userType").value;
    if (userType) {
        window.location.href = userType;
    }
}
