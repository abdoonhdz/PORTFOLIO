let mainElement = document.querySelector('main');

function crearElementos() {
    let copo = document.createElement("div");
    copo.textContent = "❄";
    copo.classList.add('copo');
    copo.style.left = `${Math.random() * 99}%`;
    copo.style.top = '0';
    document.querySelector('main').appendChild(copo);

    setTimeout(function() {
        mainElement.removeChild(copo);
    }, 3500);

    copo.addEventListener('click', function() {
        mainElement.removeChild(copo);
    });
}

let intervalo = 650;
setInterval(crearElementos, intervalo);
