const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// Vector para almacenar los usuarios

let array = localStorage.getItem("userList")

if (array !== null) {
  var userList = JSON.parse(array);
  updateDOM();
} else {
  var userList = [];
}

// Función que obtiene de la API un nombre aleatorio,
// genera una cantidad de dinero aleatoria cuyo máximo es 1.000.000
// y añade al usuario con ambos datos
async function getRandomUser() {
  let res = await fetch('https://randomuser.me/api');
  let data = await res.json();
  let user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Función que añade un nuevo usuario (objeto) al listado de usuarios (array)
function addData(obj) {
  userList.push(obj);
  updateDOM();
}

// Función que dobla el dinero de todos los usuarios existentes
function doubleMoney() {
    userList.map((user) => {
    user.money*=2
  });

  updateDOM();  
}

// Función que ordena a los usuarios por la cantidad de dinero que tienen
function sortByRichest() {
  userList.sort((a, b) => b.money - a.money);

  updateDOM();
}

// Función que muestra únicamente a los usuarios millonarios (tienen más de 1.000.000)
function showMillionaires() {
  userList = userList.filter((user) => user.money >= 1000000);

  updateDOM();
}

// Función que calcula y muestra el dinero total de todos los usuarios
function calculateWealth() {
  const totalWealth = userList.reduce((acc, user) => (acc += user.money), 0);
  const wealthElement = document.createElement('div');
  let wealthFormated = formatMoney(totalWealth);
  wealthElement.innerHTML = `<h3>Dinero total: <strong>${wealthFormated}</strong></h3>`;
  main.appendChild(wealthElement);
  const newUserToJSON = JSON.stringify(wealthFormated);
  localStorage.setItem('wealthFormated', newUserToJSON);
}

// Función que actualiza el DOM
function updateDOM() {
  main.innerHTML = '<h2><strong>Persona</strong> Dinero</h2>';

  userList.forEach((user) => {
    const userElement = document.createElement('div');
    userElement.classList.add('person');
    userElement.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
    main.appendChild(userElement);
  });
  const newUserToJSON = JSON.stringify(userList);
  localStorage.setItem('userList', newUserToJSON);

}

// Función que formatea un número a dinero
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '€';
}

// Obtenemos un usuario al iniciar la app
getRandomUser();

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', () => {
  calculateWealth();
  //calculateWealthBtn.disabled = true;
});