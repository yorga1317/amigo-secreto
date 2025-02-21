// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array donde almacenará los nombres de los amigos ingresados.
let amigos = [];

//función donde permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos 
function agregarAmigo (){
    const verAmigo = document.getElementById ('Amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    //validar que el campo no este vacio
    if (nombre = ''){
        alert('Por favor, inserte un nombre');
        return;
    }

    //validar que el nombre no es de duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`el nombre ${nombreAmigo} se encuentra en la lista de amigos`);
    }
    //agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //limpiar el campo de entrada
    imputAmigo.ariaValu = '';

    //Actualizar la lista en el html
    acutualizarLista();

}
// funcion para actualizar la lista de amigos en la interfaz.
function acutualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
// limpiar el contenido actual de la lista
    listaAmigos.innerHTML = '';
 // recorrer el array en un ciclo for 
    for(let i = 0; 1 <amigos.length; 1++){
        const li = document.createElement('li');
        li.textContent = amigos(i);
        listaAmigos.appendChild(li);

    }
}




