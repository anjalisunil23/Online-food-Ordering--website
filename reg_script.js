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

    let name = document.getElementById("reg_name").value.trim();
    let phone = document.getElementById("reg_number").value.trim();
    let email = document.getElementById("reg_mail").value.trim().toLowerCase();
    let password = document.getElementById("reg_password").value;
    let confirmPassword = document.getElementById("reg_confirm_password").value;
    let address = document.getElementById("reg_location").value.trim();

    if (name.length < 2) {
        alert("❌ Please enter a valid full name");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("❌ Phone number must be exactly 10 digits");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("❌ Please enter a valid email");
        return;
    }

    if (password.length < 6) {
        alert("❌ Password must be at least 6 characters");
        return;
    }

    if (address.length < 8) {
        alert("❌ Please enter a complete address");
        return;
    }

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
