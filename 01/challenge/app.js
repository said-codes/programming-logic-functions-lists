
// Cambia el contenido de la etiqueta h1
const header = document.querySelector("h1");
header.textContent = "Hora del Desafío";

// Función para mostrar un mensaje en la consola cuando se presione el botón "Console"
function showConsoleMessage() {
    console.log("El botón fue clicado");
}

// Función para preguntar el nombre de una ciudad y mostrar una alerta
function askCity() {
    const city = prompt("¿Cuál es tu ciudad favorita de Brasil?");
    if (city) {
        alert(`Estuve en ${city} y me acordé de ti`);
    }
}

// Función para mostrar una alerta con un mensaje fijo
function showAlertMessage() {
    alert("Yo amo JS");
}

// Función para sumar dos números y mostrar el resultado
function sumNumbers() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`La suma es: ${num1 + num2}`);
    } else {
        alert("Por favor, ingresa valores numéricos válidos.");
    }
}

// Asigna las funciones a los botones correspondientes
document.querySelector("button:nth-of-type(1)").onclick = showConsoleMessage;
document.querySelector("button:nth-of-type(2)").onclick = showAlertMessage;
document.querySelector("button:nth-of-type(3)").onclick = askCity;
document.querySelector("button:nth-of-type(4)").onclick = sumNumbers;
