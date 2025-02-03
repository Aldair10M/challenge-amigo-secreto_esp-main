// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// N°1: Variable para los amigos que serán sorteados
let amigos = [];

// Funcionalidad N°1: Agregar amigos (nombres) 
function agregarAmigo() {
    let inputAmigo = document.querySelector('#amigo');
    let nom = inputAmigo.value.trim();

    if (nom === '') {
        alert("Por favor, escriba un nombre");
        return;
    }

    amigos.push(nom);
    actualizarListaAmigos();

    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("LI");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}