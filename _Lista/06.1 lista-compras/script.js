// Array para armazenar os itens da lista
let listaCompras = [];

// Função para render da lista
function renderizarLista() {
    const containerLista = document.querySelector('#lista-itens');
    const listaVazia = document.querySelector('#lista-vazia');

    if (listaCompras.length === 0) {
        containerLista.innerHTML = '';
        listaVazia.classList.add('ativo');
        return;
    }

    listaVazia.classList.remove('ativo');

    let html = `<div class="resumo">Total de itens: ${listaCompras.length}</div>`;

    listaCompras.forEach((item, indice) => {
        html += `
            <div class="item">
                <div class="item-info">
                    <div class="item-numero">Posição: ${indice + 1}</div>
                    <div class="item-nome">${item.nome}</div>
                    <div class="item-quantidade">Quantidade: ${item.quantidade}</div>
                </div>
                <div class="item-acoes">
                    <button class="btn-remover" onclick="removerItem(${indice})">Remover</button>
                </div>
            </div>
        `;
    });

    containerLista.innerHTML = html;
}

// Função para adicionar item
function adicionarItem() {
    const nome = document.querySelector('#item-nome').value.trim();
    const quantidade = parseInt(document.querySelector('#item-quantidade').value);

    if (nome === '') {
        alert('Por favor, digite o nome do item!');
        return;
    }

    if (isNaN(quantidade) || quantidade < 1) {
        alert('Por favor, digite uma quantidade válida!');
        return;
    }

    // Verifica se item já existe
    let itemExistente = listaCompras.find(item => 
        item.nome.toLowerCase() === nome.toLowerCase()
    );

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
        alert(`Item "${nome}" teve sua quantidade atualizada!`);
    } else {
        listaCompras.push({ nome, quantidade });
        alert(`Item "${nome}" adicionado à lista!`);
    }

    // Limpa os campos
    document.querySelector('#item-nome').value = '';
    document.querySelector('#item-quantidade').value = '1';
    document.querySelector('#item-nome').focus();

    // Limpa resultado de pesquisa
    document.querySelector('#resultado-pesquisa').classList.remove('ativo');

    // Renderiza a lista
    renderizarLista();
}

// Função para remover item
function removerItem(indice) {
    const itemRemovido = listaCompras[indice].nome;
    listaCompras.splice(indice, 1);
    alert(`Item "${itemRemovido}" removido da lista!`);
    document.querySelector('#resultado-pesquisa').classList.remove('ativo');
    renderizarLista();
}

// Função para pesquisar
function pesquisar() {
    const termo = document.querySelector('#pesquisa').value.trim();
    const resultadoPesquisa = document.querySelector('#resultado-pesquisa');

    if (termo === '') {
        alert('Por favor, digite um termo de busca!');
        return;
    }

    let resultados = [];

    // Pesquisa por nome
    resultados = listaCompras.filter(item => 
        item.nome.toLowerCase().includes(termo.toLowerCase())
    );

    // Pesquisa por posição (número)
    if (!isNaN(termo)) {
        const posicao = parseInt(termo) - 1;
        if (posicao >= 0 && posicao < listaCompras.length) {
            resultados = [listaCompras[posicao]];
        }
    }

    if (resultados.length === 0) {
        resultadoPesquisa.innerHTML = `
            <p>❌ Nenhum item encontrado para "${termo}"</p>
        `;
    } else {
        let html = `<p>✓ Encontrado(s) ${resultados.length} resultado(s):</p>`;
        
        resultados.forEach(item => {
            const posicao = listaCompras.indexOf(item) + 1;
            html += `
                <div class="item-encontrado">
                    <strong>Posição:</strong> ${posicao} <br>
                    <strong>Nome:</strong> ${item.nome} <br>
                    <strong>Quantidade:</strong> ${item.quantidade}
                </div>
            `;
        });

        resultadoPesquisa.innerHTML = html;
    }

    resultadoPesquisa.classList.add('ativo');
}

// Função para limpar pesquisa
function limparPesquisa() {
    document.querySelector('#pesquisa').value = '';
    document.querySelector('#resultado-pesquisa').classList.remove('ativo');
    document.querySelector('#pesquisa').focus();
}

// Event Listeners
document.querySelector('#btn-adicionar')?.addEventListener('click', adicionarItem);

document.querySelector('#item-nome')?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.querySelector('#item-quantidade').focus();
    }
});

document.querySelector('#item-quantidade')?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});

document.querySelector('#btn-pesquisar')?.addEventListener('click', pesquisar);

document.querySelector('#btn-limpar-pesquisa')?.addEventListener('click', limparPesquisa);

document.querySelector('#pesquisa')?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        pesquisar();
    }
});

// Renderiza lista ao carregar
renderizarLista();
