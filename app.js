// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// mi primer hola mundo 
console.log('hola, mundo');
// array donde almacenará los nombres de los amigos ingresados.
let Amigos = [];

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
    if(Amigos.includes(nombreAmigo)){
        alert(`el nombre ${nombreAmigo} se encuentra en la lista de amigos`);
    }
    //agregar el nombre al array de amigos
    Amigos.push(nombreAmigo);

    //limpiar el campo de entrada
    imputAmigo.ariaValu = '';

    //
}

