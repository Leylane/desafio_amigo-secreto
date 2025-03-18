// Array para armazenar os amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Adiciona o nome à lista e exibe na tela
    listaDeAmigos.push(nome);
    atualizarLista();

    // Limpa o campo de input
    input.value = "";
}

// Função para atualizar a lista na tela
function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

    listaDeAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    
    // Exibe o resultado na tela
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${sorteado}</strong></li>`;
}