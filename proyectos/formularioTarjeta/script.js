let formElement = document.getElementById("loginForm");
let inputNameElement = document.getElementById("nombre");
let inputNumberElement = document.getElementById("numero");
let inputDateElement = document.getElementById("fecha");
let inputCvvElement = document.getElementById("cvv");
let submitButtonElement = document.getElementById("boton");

let nameValid = false;
let numberValid = false;
let dateValid = false;
let cvvValid = false;

let regexName = /^[A-Za-z\s]{1,20}$/;
let regexMasterCard = /^5[1-5][0-9]{14}$/;
let regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
let regexAmericanExpress = /^3[47][0-9]{13}$/;
let regexDate = /^\d{2}\/\d{2}$/;
let regexCvv = /\d{3}/;

const USERNAME_INVALID = "Nombre con sólo letras y espacios";
const NUMBER_INVALID = "El número de la tarjeta es incorrecto";
const DATE_INVALID = "Fecha de caducidad inválida";
const CVV_INVALID = "Solo 3 números";

inputNameElement.addEventListener("blur", validateName);
inputNumberElement.addEventListener("blur", validateNumber);
inputDateElement.addEventListener("blur", validateDate);
inputCvvElement.addEventListener("blur", validateCvv);

function checkFullForm() {
    if (nameValid && dateValid && numberValid && cvvValid) {
        submitButtonElement.classList.remove("notAvailable");        
    } else {
        submitButtonElement.classList = "notAvailable";
    }
}

function validateName() {

    nameValid = regexName.test(inputNameElement.value);
  
    if (inputNameElement.value.toLowerCase() === "mastercard" || inputNameElement.value.toLowerCase() === "americanexpress" || inputNameElement.value.toLowerCase() === "american express" || inputNameElement.value.toLowerCase() === "visa" ) {
        inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
        nameValid= true ;
    } else {
        inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = "Nombre Inválido";
        nameValid = false;
    }

    inputNameElement.className = nameValid ? "success" : "error";
  
    checkFullForm();
  }


function validateNumber() {

    if (regexMasterCard.test(inputNumberElement.value) || regexVisa.test(inputNumberElement.value) || regexAmericanExpress.test(inputNumberElement.value)) {
        numberValid = true;
        inputNumberElement.className = "success";
        inputNumberElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    } else {
        inputNumberElement.className = "error";            
        inputNumberElement.parentNode.getElementsByTagName("small")[0].innerHTML = NUMBER_INVALID;
    }

    checkFullForm();
}   


function validateDate() {
    dateValid = regexDate.test(inputDateElement.value);

    if (!dateValid) {
        inputDateElement.parentNode.getElementsByTagName("small")[0].innerHTML = DATE_INVALID;
    } else {
        inputDateElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    inputDateElement.className = dateValid ? "success" : "error";

    checkFullForm();
}


function validateCvv(){
    cvvValid = regexCvv.test(inputCvvElement.value);
    inputCvvElement.className = cvvValid ? "success" : "error";

    if (!cvvValid) {
        inputCvvElement.parentNode.getElementsByTagName("small")[0].innerHTML = CVV_INVALID;
    } else {
        inputCvvElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    checkFullForm();

}


formElement.addEventListener('submit', event => {

    event.preventDefault();
    alert("Enviado");
  
  });