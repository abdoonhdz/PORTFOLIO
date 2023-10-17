let formElement = document.getElementById("loginForm");
let inputNameElement = document.getElementById("userName");
let inputTelephoneElement = document.getElementById("telefono");
let inputPasswordElement = document.getElementById("userPassword");
let inputConfirmPasswordElement = document.getElementById("confirmUserPassword");
let submitButtonElement = document.getElementById("submitButton");
let checkBoxElement = document.getElementById("terminos");

let nameValid = false;
let telephoneValid = false;
let passwordValid = false;
let confirmPasswordValid = false;
let checkBoxValid = false;
let regexName = /^[a-zA-Z ]+$/;
let regexTelefono = /^\d{9}$/;
let regexPassword = /^[a-zA-Z0-9]{6,}$/;

const USERNAME_INVALID = "Nombre con sólo letras y espacios";
const PASSWORD_INVALID = "Contraseña con 6 o más carácteres";
const TELEPHONE_INVALID = "Sólo se permiten 9 dígitos.";
const CONFIRMPASSWORD_INVALID = "La contraseña debe de ser la misma.";

inputNameElement.addEventListener("blur", validateName);
inputTelephoneElement.addEventListener("blur", validateTelephone);
inputPasswordElement.addEventListener("blur", validatePassword);
inputConfirmPasswordElement.addEventListener("blur", validateConfirmPassword);
checkBoxElement.addEventListener("change", validateCheckBox);


function checkFullForm() {
  if (nameValid && passwordValid && telephoneValid && confirmPasswordValid && checkBoxValid) {
    submitButtonElement.classList.remove("notAvailable");
  } else {
    submitButtonElement.classList = "notAvailable";
  }
}

function validateName() {
  nameValid = regexName.test(inputNameElement.value);
  inputNameElement.className = nameValid ? "success" : "error";

  if (!nameValid) {
    // Obtenemos la etiqueta <small> del div al que pertenece el input
    inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = USERNAME_INVALID;
  } else {
    inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();
}

function validateTelephone() {
  telephoneValid = regexTelefono.test(inputTelephoneElement.value);
  inputTelephoneElement.className = telephoneValid ? "success" : "error";

  if (!telephoneValid) {
    inputTelephoneElement.parentNode.getElementsByTagName("small")[0].innerHTML = TELEPHONE_INVALID;
  } else {
    inputTelephoneElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();

}

function validatePassword() {
  passwordValid = regexPassword.test(inputPasswordElement.value);
  inputPasswordElement.className = passwordValid ? "success" : "error";

  if (!passwordValid) {
    inputPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = PASSWORD_INVALID;
  } else {
    inputPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();
}

function validateConfirmPassword() {
  
  const password = inputPasswordElement.value;
  const confirmPassword = inputConfirmPasswordElement.value;
  confirmPasswordValid = password === confirmPassword;
  inputConfirmPasswordElement.className = confirmPasswordValid ? "success" : "error";

  if (!confirmPasswordValid) {
    inputConfirmPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = CONFIRMPASSWORD_INVALID;
  } else {
    inputConfirmPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();

}

function validateCheckBox() {
  checkBoxValid = checkBoxElement.checked;

  checkFullForm();

}

formElement.addEventListener('submit', event => {

  event.preventDefault();
  alert("Enviado");

});
