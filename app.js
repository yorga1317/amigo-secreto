// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById ("resultado");

function agregarAmigo(){
    if(inputAmigo.value == ''){
        alert ('debes ingresar un nombre.');
    }
    
    if(listaAmigos.includes(inputAmigo.value)){
        alert(`el nombre ${inputAmigo.value} ya esta en la lista`);
        listaAmigos = listaAmigos.filter(amigo => amigo !== inputAmigo.value);
    }
    // para empujar los nombre del imput a la lista de amigos con listaAmigos.push
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

limpiarCaja();
};   

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    const random = Math.floor((Math.random() * listaAmigos.length));
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es ${amigoSecreto}</li>`
};