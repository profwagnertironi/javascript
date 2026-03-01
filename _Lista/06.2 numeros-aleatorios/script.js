// Função para gerar número aleatório entre min e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para ordenar array em ordem crescente (sem usar sort)
function ordenarCrescente(arr) {
    let novoArray = [...arr];
    for (let i = 0; i < novoArray.length; i++) {
        for (let j = 0; j < novoArray.length - 1 - i; j++) {
            if (novoArray[j] > novoArray[j + 1]) {
                // Bubble sort - troca elementos
                let temp = novoArray[j];
                novoArray[j] = novoArray[j + 1];
                novoArray[j + 1] = temp;
            }
        }
    }
    return novoArray;
}

// Função para ordenar array em ordem decrescente (sem usar reverse)
function ordenarDecrescente(arr) {
    let novoArray = [...arr];
    for (let i = 0; i < novoArray.length; i++) {
        for (let j = 0; j < novoArray.length - 1 - i; j++) {
            if (novoArray[j] < novoArray[j + 1]) {
                // Bubble sort - troca elementos
                let temp = novoArray[j];
                novoArray[j] = novoArray[j + 1];
                novoArray[j + 1] = temp;
            }
        }
    }
    return novoArray;
}

// Função para verificar se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// Função para verificar se um número é primo
function ehPrimo(numero) {
    if (numero < 2) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Função para separar números em categorias
function classificarNumeros(arr) {
    let pares = [];
    let impares = [];
    let primos = [];

    for (let num of arr) {
        if (ehPrimo(num)) {
            primos.push(num);
        }
        if (ehPar(num)) {
            pares.push(num);
        } else {
            impares.push(num);
        }
    }

    return { pares, impares, primos };
}

// Função para renderizar números com formatação
function renderizarNumeros(arr, classe = '') {
    return arr.map(num => `<div class="numero ${classe}">${num}</div>`).join('');
}

document.querySelector('#btn-gerar')?.addEventListener('click', () => {
    // Gera array com 10 números aleatórios
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(gerarNumeroAleatorio(1, 100));
    }

    // Calcula ordenações
    let crescente = ordenarCrescente(numeros);
    let decrescente = ordenarDecrescente(numeros);

    // Classifica números
    let classificacao = classificarNumeros(numeros);

    // Atualiza seção de números originais
    let secaoOriginal = document.querySelector('#numeros-originais');
    secaoOriginal.innerHTML = `
        <h2>Números Gerados</h2>
        <div class="numeros-lista">
            ${renderizarNumeros(numeros)}
        </div>
    `;
    secaoOriginal.classList.add('ativo');

    // Atualiza seção de ordenação
    let secaoOrdenacao = document.querySelector('#ordenacao');
    secaoOrdenacao.innerHTML = `
        <h2>Ordenação</h2>
        <div class="lista-grupo">
            <p>Ordem Crescente:</p>
            <div class="numeros-lista">
                ${renderizarNumeros(crescente)}
            </div>
        </div>
        <div class="lista-grupo">
            <p>Ordem Decrescente:</p>
            <div class="numeros-lista">
                ${renderizarNumeros(decrescente)}
            </div>
        </div>
    `;
    secaoOrdenacao.classList.add('ativo');

    // Atualiza seção de classificação
    let secaoClassificacao = document.querySelector('#classificacao');
    secaoClassificacao.innerHTML = `
        <h2>Classificação</h2>
        <div class="lista-grupo">
            <p class="descricao">Números Pares (${classificacao.pares.length}):</p>
            <div class="numeros-lista">
                ${renderizarNumeros(classificacao.pares, 'numero-par')}
            </div>
        </div>
        <div class="lista-grupo">
            <p class="descricao">Números Ímpares (${classificacao.impares.length}):</p>
            <div class="numeros-lista">
                ${renderizarNumeros(classificacao.impares, 'numero-impar')}
            </div>
        </div>
        <div class="lista-grupo">
            <p class="descricao">Números Primos (${classificacao.primos.length}):</p>
            <div class="numeros-lista">
                ${renderizarNumeros(classificacao.primos, 'numero-primo')}
            </div>
        </div>
    `;
    secaoClassificacao.classList.add('ativo');
});
