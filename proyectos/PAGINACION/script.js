document.addEventListener("DOMContentLoaded", function () {
    const elementosList = document.getElementById("elementos-list");
    const pagination = document.getElementById("pagination");

    const elementosPorPagina = 5; // Cantidad de elementos por página
    const elementosTotales = 20; // Cantidad total de elementos

    // Calcula la cantidad total de páginas
    const totalPaginas = Math.ceil(elementosTotales / elementosPorPagina);

    // Inicializa la página actual
    let paginaActual = 1;

    // Función para mostrar elementos en la página actual
    function mostrarElementos(pagina) {
        elementosList.innerHTML = "";
        for (let i = (pagina - 1) * elementosPorPagina; i < pagina * elementosPorPagina; i++) {
            if (i < elementosTotales) {
                const elemento = document.createElement("li");
                elemento.textContent = `Elemento ${i + 1}`;
                elementosList.appendChild(elemento);
            }
        }
    }

    // Función para crear los enlaces de paginación
    function crearEnlacesPaginacion() {
        pagination.innerHTML = "";

        // Botón "Anterior"
        const prevButton = document.createElement("a");
        prevButton.href = "#";
        prevButton.textContent = "Anterior";
        prevButton.classList.add("prev-next");
        prevButton.addEventListener("click", function () {
            if (paginaActual > 1) {
                paginaActual--;
                mostrarElementos(paginaActual);
                crearEnlacesPaginacion();
            }
        });

        // Botón "Siguiente"
        const nextButton = document.createElement("a");
        nextButton.href = "#";
        nextButton.textContent = "Siguiente";
        nextButton.classList.add("prev-next");
        nextButton.addEventListener("click", function () {
            if (paginaActual < totalPaginas) {
                paginaActual++;
                mostrarElementos(paginaActual);
                crearEnlacesPaginacion();
            }
        });

        pagination.appendChild(prevButton);

        for (let i = 1; i <= totalPaginas; i++) {
            const enlace = document.createElement("a");
            enlace.href = "#";
            enlace.textContent = i;
            if (i === paginaActual) {
                enlace.classList.add("active");
            }
            enlace.addEventListener("click", function () {
                paginaActual = i;
                mostrarElementos(paginaActual);
                crearEnlacesPaginacion();
            });
            pagination.appendChild(enlace);
        }

        pagination.appendChild(nextButton);
    }

    mostrarElementos(paginaActual);
    crearEnlacesPaginacion();
});
