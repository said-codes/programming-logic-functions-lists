let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



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
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
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
// Crear una lista vacía
const listaGenerica = [];

// Crear una lista de lenguajes de programación
const lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agregar elementos a la lista de lenguajes de programación
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función para mostrar todos los elementos de la lista
function mostrarLenguajes() {
    console.log("Lista de lenguajes de programación:");
    lenguajesDeProgramacion.forEach((lenguaje, index) => {
        console.log(`${index + 1}. ${lenguaje}`);
    });
}

// Función para mostrar los elementos en orden inverso
function mostrarLenguajesInverso() {
    console.log("Lista de lenguajes en orden inverso:");
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

// Función para calcular el promedio de una lista de números
function calcularPromedio(lista) {
    if (lista.length === 0) return "La lista está vacía.";
    const suma = lista.reduce((acum, num) => acum + num, 0);
    return suma / lista.length;
}

// Función para encontrar el número más grande y el más pequeño en una lista
function encontrarExtremos(lista) {
    if (lista.length === 0) return "La lista está vacía.";
    const maximo = Math.max(...lista);
    const minimo = Math.min(...lista);
    console.log(`Número más grande: ${maximo}`);
    console.log(`Número más pequeño: ${minimo}`);
}

// Función para sumar todos los elementos en una lista
function sumarElementos(lista) {
    return lista.reduce((acum, num) => acum + num, 0);
}

// Función para encontrar la posición de un elemento en la lista
function encontrarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

// Función para sumar elementos de dos listas
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) return "Las listas deben tener el mismo tamaño.";
    return lista1.map((num, index) => num + lista2[index]);
}

// Función para calcular el cuadrado de cada número en una lista
function cuadradoDeNumeros(lista) {
    return lista.map(num => num * num);
}

*/
