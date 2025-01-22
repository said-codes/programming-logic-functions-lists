let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

//challenge

/*
// Función que calcula el Índice de Masa Corporal (IMC)
function calculateIMC(weight, height) {
    if (weight > 0 && height > 0) {
        return weight / (height * height);
    } else {
        return "Por favor, ingresa valores válidos para peso y altura.";
    }
}

// Función que calcula el factorial de un número
function calculateFactorial(num) {
    if (num < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// Función que convierte dólares a reales (cotización fija: R$4,80)
function convertToReais(dollars) {
    const exchangeRate = 4.80;
    if (dollars >= 0) {
        return dollars * exchangeRate;
    } else {
        return "Por favor, ingresa un valor en dólares válido.";
    }
}

// Función que calcula el área y perímetro de una sala rectangular
function calculateRectangleRoom(dimensions) {
    const { width, height } = dimensions;
    if (width > 0 && height > 0) {
        const area = width * height;
        const perimeter = 2 * (width + height);
        return `Área: ${area} m², Perímetro: ${perimeter} m`;
    } else {
        return "Por favor, ingresa dimensiones válidas para el ancho y la altura.";
    }
}

// Función que calcula el área y perímetro de una sala circular
function calculateCircularRoom(radius) {
    const pi = 3.14;
    if (radius > 0) {
        const area = pi * radius * radius;
        const perimeter = 2 * pi * radius;
        return `Área: ${area.toFixed(2)} m², Perímetro: ${perimeter.toFixed(2)} m`;
    } else {
        return "Por favor, ingresa un radio válido.";
    }
}

// Función que muestra la tabla de multiplicar de un número
function showMultiplicationTable(num) {
    if (typeof num === "number") {
        let table = "Tabla de multiplicar del " + num + ":\n";
        for (let i = 1; i <= 10; i++) {
            table += `${num} x ${i} = ${num * i}\n`;
        }
        return table;
    } else {
        return "Por favor, ingresa un número válido.";
    }
}
*/
