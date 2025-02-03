// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// N°1: Variable para los amigos que serán sorteados
let amigos = [];

// Funcionalidad N°1: Agregar amigos (nombres) 
function agregarAmigo() {
    let inputAmigo = document.querySelector('#amigo');
    let nom = inputAmigo.value.trim();

    if (nom === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    if (amigos.includes(nom)) {
        alert('Este nombre ya ha sido agregado');
        return;
    }

    amigos.push(nom);
    actualizarListaAmigos();
    inputAmigo.value = '';
    limpiarResultadoGanador();
}

// Funcionalidad para actualizar la lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        let li = document.createElement('LI');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Funcionalidad para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado} es el amigo secreto 🎉</li>`;

    amigos.splice(indiceAleatorio, 1);    
    actualizarListaAmigos();
}

function limpiarResultadoGanador() {
    let resultadoGanador = document.getElementById('resultado');
    resultadoGanador.innerHTML = '';
}