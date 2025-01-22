let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    }
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);

//challenge
/*
// Función que muestra "¡Hola, mundo!" en la consola
function sayHelloWorld() {
    console.log("¡Hola, mundo!");
}

// Función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola
function greet(name) {
    console.log(`¡Hola, ${name}!`);
}

// Función que recibe un número como parámetro y devuelve el doble de ese número
function doubleNumber(num) {
    return num * 2;
}

// Función que recibe tres números como parámetros y devuelve su promedio
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// Función que recibe dos números como parámetros y devuelve el mayor de ellos
function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo
function squareNumber(num) {
    return num * num;
}
*/
