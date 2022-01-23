const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signUp = document.getElementById("signUpH");
const init = document.getElementById("signInH");

function user(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

// Register

signUp.addEventListener("click", function registerOn() {
  let nameUser = document.getElementById("name").value;
  let emailUser = document.getElementById("email").value;
  let passUser = document.getElementById("password").value;
  const nuevoUsuario = new user(nameUser, emailUser, passUser);
  fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
    method: "POST",
    body: JSON.stringify(nuevoUsuario),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Usuario creado exitosamente");
      console.log(data);
    });
});

// LOGIN;

init.addEventListener("click", function login() {
  let emailLogin = document.getElementById("emaiLogin").value;
  let passLogin = document.getElementById("passLogin").value;
  const userExist = new user(emailLogin, passLogin);
  fetch("https://tiendavirtualmern.herokuapp.com/api/users/login", {
    method: "POST",
    body: JSON.stringify(userExist),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      alert("PORFINNNNNNNNN");
    });
});
