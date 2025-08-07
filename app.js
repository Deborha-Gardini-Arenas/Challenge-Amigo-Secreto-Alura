// Lista donde almacenaremos los nombres
let listaDeAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar a la lista y limpiar el input
  listaDeAmigos.push(nombre);
  input.value = "";

  // Actualizar visualmente la lista
  actualizarListaVisual();
}

// Función para actualizar la lista visible en la página
function actualizarListaVisual() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = ""; // Limpiar lista actual

  // Crear y agregar cada <li> por cada nombre
  listaDeAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultado anterior

  if (listaDeAmigos.length === 0) {
    alert("La lista está vacía. Agrega nombres antes de sortear.");
    return;
  }

  // Elegir un nombre al azar
  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSecreto = listaDeAmigos[indiceAleatorio];

  // Mostrar el resultado
  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);

  // Reiniciar todo para permitir una nueva ronda
  listaDeAmigos = [];
  actualizarListaVisual();

  // limpiar el campo de entrada
  document.getElementById("amigo").value = "";
}
