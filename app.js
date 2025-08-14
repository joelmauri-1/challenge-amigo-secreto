
// 1. Creamos una lista vacía para guardar los nombres
let listaAmigos = [];

// 2. Función para agregar un nuevo amigo
function agregarAmigo() {
  
  let cuadroTexto = document.getElementById('amigo');
  
  
  let nombreAmigo = cuadroTexto.value.trim();
  
  
  if (nombreAmigo === '') {
    alert("¡Ups! No escribiste ningún nombre");
    return; 
  }
  
  
  listaAmigos.push(nombreAmigo);
  
  
  cuadroTexto.value = '';
  
  
  mostrarListaEnPantalla();
  
  
  cuadroTexto.focus();
}

// 3. Función para mostrar la lista en la página
function mostrarListaEnPantalla() {
  
  let listaEnHTML = document.getElementById('listaAmigos');
  
  
  listaEnHTML.innerHTML = '';
  
  // Recorremos todos los amigos uno por uno
  for (let i = 0; i < listaAmigos.length; i++) {
    
    let elementoLista = document.createElement('li');
    elementoLista.textContent = listaAmigos[i];
    
    //botón para eliminar
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.onclick = function() {
      quitarAmigo(i); 
    };
    
    
    elementoLista.appendChild(botonEliminar);
    
    
    listaEnHTML.appendChild(elementoLista);
  }
}

// 4. Función para quitar un amigo de la lista
function quitarAmigo(posicion) {
  
  listaAmigos.splice(posicion, 1);
  
  
  mostrarListaEnPantalla();
}

function mostrarAmigos(amigos) {
  // 1. Obtener el elemento de la lista (asumo que tiene id="listaAmigos")
  const lista = document.getElementById('listaAmigos');
  
  // 2. Limpiar la lista existente
  lista.innerHTML = "";
  
  // 3. Iterar sobre el arreglo y crear elementos <li>
  for (let i = 0; i < amigos.length; i++) {
    
    const elementoLista = document.createElement('li');
    
    elementoLista.textContent = amigos[i];
    // 4. Agregar el elemento a la lista
    lista.appendChild(elementoLista);
  }
}

function sortearAmigo(amigos) {
  
  if (amigos.length === 0) {
    document.getElementById('resultadoSorteo').innerHTML = "No hay amigos disponibles";
    return null;
  }

  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  
  const amigoSorteado = amigos[indiceAleatorio];

  
  const elementoResultado = document.getElementById('resultadoSorteo');
  elementoResultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

  return amigoSorteado;
}