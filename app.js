// 1. Declaración del array para almacenar amigos
let amigos = [];

// 2. Función para agregar un nuevo amigo
function agregarAmigo() {
    // Captura el valor del campo de entrada
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value.trim();
    
    // Valida la entrada
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputNombre.value = '';
    
    // Actualizar la lista visual
    actualizarLista();
}

// 3. Función para mostrar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let listaHTML = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaHTML.innerHTML = '';
    
    // bucle sobre el arreglo y agregar elementos
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaHTML.appendChild(elementoLista);
    }
}

// 4. Función para sortear un amigo
function sortearAmigo() {
    // Valida que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = 'No hay amigos para sortear';
        return;
    }
    
    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtengo el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Muestra el resultado
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}