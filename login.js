function loginUser() {
  let email = document.getElementById("login_email").value.trim().toLowerCase();
  let password = document.getElementById("login_password").value;

  if (!email || !password) {
    alert("❌ Please enter email and password");
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

  let storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser) {
    alert("❌ No user registered");
    return;
  }

  if (email === String(storedUser.email || "").toLowerCase() && password === storedUser.password) {
    alert("✅ Login Successful!");
    window.location.href = "homepage.html";
  } else {
    alert("❌ Invalid email or password");
  }
}
