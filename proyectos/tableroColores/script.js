function getRandomColor() {
    let letrasNumeros = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letrasNumeros[Math.floor(Math.random() * 16)];        
    }
    return color;
}

let tablero = document.createElement("div");
tablero.className = "tablero";
for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
        let celda = document.createElement("div");
        celda.className = "celda";
        celda.addEventListener("mouseover", () => {
            celda.style.backgroundColor = getRandomColor();
            removeColor(celda);
        });
        tablero.appendChild(celda);
    }
    
}

function removeColor(celda) {
    setTimeout( () => {
        celda.style.backgroundColor = "#333";
    }, 1000);
}


document.body.appendChild(tablero);