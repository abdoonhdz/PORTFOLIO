let mainElement = document.querySelector('main');
let sadButtonElement = document.getElementById("sadButton");
let regularButtonElement = document.getElementById("regularButton");
let happyButtonElement = document.getElementById("happyButton");

sadButtonElement.addEventListener('click', () => setPencilColor("Sad"));
regularButtonElement.addEventListener('click', () => setPencilColor("Regular"));
happyButtonElement.addEventListener('click', () => setPencilColor("Happy"));

let currentColorPencil;
function setPencilColor (mood) {
  switch (mood) {
      case "Sad":
        currentColorPencil = "red";
        break;
  
      case "Regular":
        currentColorPencil = "yellow";
        break;

      case "Happy":
        currentColorPencil = "green";
        break;
  }
 }
 
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"];

let monthCounter = 1;
let yearCounter = 2023;
let currentDate = new Date(`${yearCounter}-${monthCounter}-1`);

function addMonth() {

  let monthElement = document.createElement("div");
  monthElement.classList.toggle("month");

  let titleMonthElement = document.createElement("h4");
  titleMonthElement.innerText = monthNames[monthCounter - 1];
  monthElement.appendChild(titleMonthElement);

  let daysElement = document.createElement("div");
  daysElement.classList.toggle("days");

  // INSERTAR PRIMERA FILA: L ... D
  daysOfWeek.forEach(day => {
    let dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.innerText = day;
    daysElement.appendChild(dayElement);
  });

  let gaps = currentDate.getDay();
  if (gaps === 0) {
    gaps = 7;
  }

  for (let gap = 1; gap < gaps; gap++) {
    let gapElement = document.createElement("div");
    daysElement.appendChild(gapElement);  
  }

  // INSERTAR DÍAS DEL MES
  //El primer parámetro indica el mes de forma natural -> 1 enero, 2 febrero...
  let numDaysMonth = getDaysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear());
  for (let day = 1; day <= numDaysMonth; day++) {
    let dayElement = document.createElement("div");
    currentDate.setDate(day);
    dayElement.classList.add("day");
    dayElement.addEventListener('click', setColorDay);
    dayElement.innerText = day;
    daysElement.appendChild(dayElement);

    if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
      dayElement.style.backgroundColor = "green";
    }
  
  }



  monthElement.appendChild(daysElement);
  mainElement.appendChild(monthElement);
}

function setColorDay(event) {
  event.target.style.backgroundColor = currentColorPencil;
}

function getDaysInMonth(month, year) {
  //El día 0 es el último día del anterior mes
  return new Date(year, month, 0).getDate();
}

let monthsOfCalendar = 11;
for (let index = 0; index <= monthsOfCalendar; index++) {
  addMonth();
  monthCounter++;
  if (monthCounter === 13) {
    monthCounter = 1;
    yearCounter++;
  }
  currentDate = new Date(`${yearCounter}-${monthCounter}-1`);
}