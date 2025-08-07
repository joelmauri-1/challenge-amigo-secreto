// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Creamos una lista vacía para guardar los nombres
let listaAmigos = [];

// 2. Función para agregar un nuevo amigo
function agregarAmigo() {
  // Obtenemos el cuadro de texto donde escribimos
  let cuadroTexto = document.getElementById('amigo');
  
  // Obtenemos el nombre escrito y quitamos espacios extras
  let nombreAmigo = cuadroTexto.value.trim();
  
  // Verificamos que no esté vacío
  if (nombreAmigo === '') {
    alert("¡Ups! No escribiste ningún nombre");
    return; // Salimos de la función
  }
  
  // Agregamos el nombre a nuestra lista
  listaAmigos.push(nombreAmigo);
  
  // Limpiamos el cuadro de texto
  cuadroTexto.value = '';
  
  // Actualizamos la lista que se ve en pantalla
  mostrarListaEnPantalla();
  
  // Ponemos el cursor en el cuadro de texto otra vez
  cuadroTexto.focus();
}

// 3. Función para mostrar la lista en la página
function mostrarListaEnPantalla() {
  // Buscamos donde vamos a mostrar la lista
  let listaEnHTML = document.getElementById('listaAmigos');
  
  // Limpiamos lo que haya antes
  listaEnHTML.innerHTML = '';
  
  // Recorremos todos los amigos uno por uno
  for (let i = 0; i < listaAmigos.length; i++) {
    // Creamos un elemento de lista
    let elementoLista = document.createElement('li');
    elementoLista.textContent = listaAmigos[i];
    
    // Creamos un botón para eliminar
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.onclick = function() {
      quitarAmigo(i); // Le pasamos la posición del amigo
    };
    
    // Agregamos el botón al elemento de lista
    elementoLista.appendChild(botonEliminar);
    
    // Agregamos el elemento a la lista en la página
    listaEnHTML.appendChild(elementoLista);
  }
}

// 4. Función para quitar un amigo de la lista
function quitarAmigo(posicion) {
  // Eliminamos el amigo de la lista
  listaAmigos.splice(posicion, 1);
  
  // Actualizamos lo que se ve en pantalla
  mostrarListaEnPantalla();
}