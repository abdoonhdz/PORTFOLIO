// Abdón Hernández Perera 2DAW

let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function cifrarTexto(texto) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i).toUpperCase();
        if (caracter === " ") {
            resultado += " ";
        } else if (abecedario.includes(caracter)) {
            let indice = abecedario.indexOf(caracter);
            let siguienteLetra = abecedario[(indice + 1) % 26];
            resultado += siguienteLetra;
        } else if (numeros.includes(caracter)) {
            let indice = numeros.indexOf(caracter);
            let siguienteNumero = numeros[(indice + 1) % 10];
            resultado += siguienteNumero;
        } else {
            resultado += caracter;
        }
    }
    return resultado;
}

document.addEventListener("DOMContentLoaded", function () {
    let textoOriginal = prompt("Introduce el texto a cifrar:");
    let resultadoMuestra = document.createElement("div");
    resultadoMuestra.textContent = cifrarTexto(textoOriginal);
    document.body.appendChild(resultadoMuestra);

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    let militaryImage = document.createElement("img");
    militaryImage.id = "militaryImage";
    militaryImage.src = "https://cdn-icons-png.flaticon.com/512/39/39734.png";
    imageContainer.appendChild(militaryImage);
    document.body.appendChild(imageContainer);

    militaryImage.addEventListener("click", function () {
        if (militaryImage.src.endsWith("https://cdn-icons-png.flaticon.com/512/39/39734.png")) {
            militaryImage.src = "https://cdn-icons-png.flaticon.com/512/44/44622.png";
        } else {
            militaryImage.src = "https://cdn-icons-png.flaticon.com/512/39/39734.png";
        }
    });
});