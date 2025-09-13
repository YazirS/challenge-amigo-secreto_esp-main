// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  mostrarAmigos();
  input.value = "";
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
    }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya al menos un amigo
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía. Agrega al menos un nombre.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const nombreSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  resultado.innerHTML = ""; // Limpiar resultado anterior
  const li = document.createElement("li");
  li.innerHTML = `🎉 <strong>${nombreSorteado}</strong> ha sido sorteado como amigo secreto.`;
  resultado.appendChild(li);
}