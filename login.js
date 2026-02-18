function loginUser() {
  let email = document.getElementById("login_email").value;
  let password = document.getElementById("login_password").value;

  let storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser) {
    alert("❌ No user registered");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("✅ Login Successful!");
    window.location.href = "index.html"; // home page
  } else {
    alert("❌ Invalid email or password");
  }
}
