function signup() {
  localStorage.setItem("user_" + username.value, password.value);
  alert("Signup successful");
}

function login() {
  if (localStorage.getItem("user_" + username.value) === password.value) {
    localStorage.setItem("loggedUser", username.value);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}
