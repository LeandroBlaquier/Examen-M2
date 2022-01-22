const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// const apiTienda = document.querySelector(".container");
// const url = "https://tiendavirtualmern.herokuapp.com/api";
// fetch(url).then((response) => console.log(response));

const signUp = document.getElementById("signUp");
// Register
signUp.addEventListener("click", function ssRegister() {
  function usuario(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  let nameUser = document.getElementById("name").value;
  let emailUser = document.getElementById("email").value;
  let passUser = document.getElementById("password").value;
  const nuevoUsuario = new usuario(nameUser, emailUser, passUser);
  fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
    method: "POST",
    body: JSON.stringify(nuevoUsuario),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  alert("Usuario creado exitosamente");
});

//LOGIN
const init = document.getElementById("signIn");
init.addEventListener("click", function ssRegister() {
  function usuario(email, password) {
    this.email = email;
    this.password = password;
  }
  let emailLogin = document.getElementById("emailLogin").value;
  let passLogin = document.getElementById("passLogin").value;
  const userExist = new usuario(emailLogin, passLogin);
  fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
    method: "POST",
    body: JSON.stringify(userExist),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Porfinnnnnnnnnnnnnnnnnnnnnnnn");
    });
});
