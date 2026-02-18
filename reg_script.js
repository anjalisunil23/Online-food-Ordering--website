// PASSWORD SHOW / HIDE
function togglePassword(inputId, eye) {
    const input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";
        eye.textContent = "🫣";
    } else {
        input.type = "password";
        eye.textContent = "👁";
    }
}

// REGISTRATION
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    let name = document.getElementById("reg_name").value;
    let phone = document.getElementById("reg_number").value;
    let email = document.getElementById("reg_mail").value;
    let password = document.getElementById("reg_password").value;
    let confirmPassword = document.getElementById("reg_confirm_password").value;
    let address = document.getElementById("reg_location").value;

    // Password match check
    if (password !== confirmPassword) {
        alert("❌ Passwords do not match");
        return;
    }

    // User object
    let user = {
        name: name,
        phone: phone,
        email: email,
        password: password,
        address: address
    };

    // Store in localStorage
    localStorage.setItem("userData", JSON.stringify(user));

    alert("✅ Registration Successful!");
    window.location.href = "login.html"; // redirect to login page
});
