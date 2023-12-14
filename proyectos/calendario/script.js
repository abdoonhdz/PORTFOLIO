// Obtener referencias a elementos del DOM
let mainElement = document.querySelector('main');
let sadButtonElement = document.getElementById("sadButton");
let regularButtonElement = document.getElementById("regularButton");
let happyButtonElement = document.getElementById("happyButton");

// Asociar eventos a los botones de estado de ánimo
sadButtonElement.addEventListener('click', () => setPencilColor("Sad"));
regularButtonElement.addEventListener('click', () => setPencilColor("Regular"));
happyButtonElement.addEventListener('click', () => setPencilColor("Happy"));

// Variable global para almacenar el color del lápiz actual
let currentColorPencil;

// Función para establecer el color del lápiz según el estado de ánimo
function setPencilColor(mood) {
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

// Definir nombres de meses y días de la semana
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"];

// Inicializar contadores y la fecha actual
let monthCounter = 1;
let yearCounter = 2023;
let currentDate = new Date(`${yearCounter}-${monthCounter}-1`);

// Función para agregar un mes al calendario
function addMonth() {
  // Crear un contenedor para el mes
  let monthElement = document.createElement("div");
  monthElement.classList.toggle("month");

  // Crear un título para el mes
  let titleMonthElement = document.createElement("h4");
  titleMonthElement.innerText = monthNames[monthCounter - 1];
  monthElement.appendChild(titleMonthElement);

  // Crear un contenedor para los días de la semana
  let daysElement = document.createElement("div");
  daysElement.classList.toggle("days");

  // INSERTAR PRIMERA FILA: L ... D
  daysOfWeek.forEach(day => {
    let dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.innerText = day;
    daysElement.appendChild(dayElement);
  });

  // Añadir espacios en blanco para alinear los días correctamente
  let gaps = currentDate.getDay();
  if (gaps === 0) {
    gaps = 7;
  }

  for (let gap = 1; gap < gaps; gap++) {
    let gapElement = document.createElement("div");
    daysElement.appendChild(gapElement);
  }

  // INSERTAR DÍAS DEL MES
  let numDaysMonth = getDaysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear());
  for (let day = 1; day <= numDaysMonth; day++) {
    let dayElement = document.createElement("div");
    currentDate.setDate(day);
    dayElement.classList.add("day");
    dayElement.addEventListener('click', setColorDay);
    dayElement.innerText = day;
    daysElement.appendChild(dayElement);

    // Colorear los fines de semana
    if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
      dayElement.style.backgroundColor = "green";
    }
  }

  // Agregar los días al contenedor del mes
  monthElement.appendChild(daysElement);
  // Agregar el mes al elemento principal del DOM
  mainElement.appendChild(monthElement);
}

// Función para establecer el color del día al hacer clic en él
function setColorDay(event) {
  event.target.style.backgroundColor = currentColorPencil;
}

// Función para obtener la cantidad de días en un mes y año específicos
function getDaysInMonth(month, year) {
  // El día 0 es el último día del mes anterior
  return new Date(year, month, 0).getDate();
}

// Generar el calendario para los próximos 12 meses
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