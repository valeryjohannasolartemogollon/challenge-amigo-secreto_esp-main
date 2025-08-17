// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.toUpperCase();
    if (amigo === "") {
        alert("Por favor ingresa un nombre.");
        return;
    }
    nombres.push(amigo);
    document.getElementById("amigo").value = "";
    lista(nombres);

}

function lista(nombres) {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos
    for (let i = 0; i < nombres.length; i++) {
        listaAmigos.innerHTML += `<li>${nombres[i]}</li>`;

    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let amigoSorteado = nombres[Math.floor(Math.random() * nombres.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

