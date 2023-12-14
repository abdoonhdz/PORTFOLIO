// Obtener una referencia al elemento principal del documento (main)
let mainElement = document.querySelector('main');

// Función para crear elementos (copos de nieve) y agregarlos al elemento principal
function crearElementos() {
    // Crear un elemento div para representar un copo de nieve
    let copo = document.createElement("div");

    // Asignar el carácter de copo de nieve y añadir la clase 'copo' para estilos
    copo.textContent = "❄";
    copo.classList.add('copo');

    // Asignar posiciones aleatorias dentro del elemento principal
    copo.style.left = `${Math.random() * 99}%`;
    copo.style.top = '0';

    // Agregar el copo al elemento principal del DOM (main)
    document.querySelector('main').appendChild(copo);

    // Establecer un temporizador para eliminar el copo después de 3500 milisegundos (3.5 segundos)
    setTimeout(function () {
        mainElement.removeChild(copo);
    }, 3500);

    // Agregar un evento de clic para eliminar el copo cuando se hace clic en él
    copo.addEventListener('click', function () {
        mainElement.removeChild(copo);
    });
}

// Establecer un intervalo para llamar a la función crearElementos cada 650 milisegundos (0.65 segundos)
let intervalo = 650;
setInterval(crearElementos, intervalo);