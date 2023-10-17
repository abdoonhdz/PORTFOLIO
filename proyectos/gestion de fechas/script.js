const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');
const otonoImg = document.getElementById('otono-img');
const inviernoImg = document.getElementById('invierno-img');
const primaveraImg = document.getElementById('primavera-img');
const veranoImg = document.getElementById('verano-img');
const body = document.getElementsByTagName('body')[0];
const contador = document.getElementById('contador');


let currentDate = new Date();
let goalDate = new Date(2024, 4, 19, 0, 0); // Año, mes (enero==0), día, hora, minutos¡
let otonoDate = new Date(2023, 8, 23, 0, 0);
let inviernoDate = new Date(2023, 11, 22, 0, 0);
let primaveraDate = new Date(2024, 2, 20, 0, 0);
let veranoDate = new Date(2024, 5, 21, 0, 0);
let days, hours, mins, seconds, totalSeconds;

//Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.floor(totalSeconds) <= 0) {
    showProduct();
    secondsElement.innerHTML = 0;
    return;
  }

  if (currentDate >= otonoDate && currentDate < inviernoDate) {
    body.className = "fondo-otono";
} else if (currentDate >= inviernoDate && currentDate < primaveraDate) {
    body.className = "fondo-invierno";
} else if (currentDate >= primaveraDate && currentDate < veranoDate) {
    body.className = "fondo-primavera";
} else if (currentDate >= veranoDate && currentDate < otonoDate) {
    body.className = "fondo-verano";
} 



  //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 o entre 3600 y luego entre 24
  //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
  //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

};

function showProduct() {
  upcomingImg.classList.remove('nocolor-img');
  contador.className="oculto";
  felicitacion.classList.remove('oculto');
  //Paramos el intervalo que se estaba ejecutando
  clearInterval(countdownInterval);
}






