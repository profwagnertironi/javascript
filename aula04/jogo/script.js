/*Crie um programa em JavaScript que peça ao usuário para adivinhar um número entre 1 e 10. Utilize as seguintes funcionalidades:
: Para verificar se o usuário acertou o número gerado aleatoriamente.
: Permitir que o usuário continue tentando até acertar.
: Informar ao usuário se o número inserido é maior ou menor que o número correto.
: O jogador terá 3 chances para acertar o número;*/

// função para limpar da memória todas as variáries armazenadas
function limpaMemoria(params) {
   localStorage.clear();
}

// Função que gerar um numero aleatório entre o mínimo e o máximo
function geraNumeroAleatorio(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
}

// retorna o numero gerado para ser adivinhado
function buscaNumero() {
   numeroGerado = localStorage.getItem('numeroGerado');
   console.log(`Numero gerado ${numeroGerado}`);
   if (numeroGerado == 0 || isNaN(numeroGerado) || numeroGerado == null){
      numeroGerado = geraNumeroAleatorio(num_min, num_max);
      localStorage.setItem('numeroGerado', numeroGerado);
      console.log(`novo Numero gerado ${numeroGerado}`);
   }
   console.log(`O numero gerado foi ${numeroGerado}`);
   return numeroGerado;   
}

// verifica se o numero digitado é o numero escolhido aleatóriamente.
function verificaNumero() {
   numeroGerado = buscaNumero();
   acertou = false;
   tentativa = Number(localStorage.getItem('tentativa'));
   let input_local = Number(document.getElementById('numero').value);
   console.log(`O numero informado foi ${input_local}`);
   console.log(`O numero gerado é ${numeroGerado}`);
   console.log(`A quantidade de tentativas ${tentativa}`);
   if (input_local == numeroGerado){
      acertou = true;
      console.log('Acertou!');
   } 
   else{
      if (tentativa < 3){
         console.log('tentativa falhou');
         tentativa++;
         mensagem.innerHTML = `<p>Ops, o numero ${input_local} está incorreto. Tente novamente!</p>`;
         localStorage.setItem('tentativa', tentativa);
      } 
   }

   if (acertou){
      mensagem.innerHTML = `<p>Parabéns, você acertou!</p><p>Caso queria jogar novamente, pressione o botão "Tente novamente"</p>`;
      localStorage.setItem('tentativa', 0);
   }
   else{
      if (tentativa >= 3){
         mensagem.innerHTML = `<p>Puxa vida, você não conseguiu acertar! O numero escolhido foi ${numeroGerado}</p> 
         <p>Caso queria jogar novamente, pressione o botão "Tente novamente"</p>`;
      }
   }

}

// Declando as variáveis 
let tentativa = 0;
let acertou = false;
let numeroGerado = 0;
const num_min = 1;
const num_max = 10;
let btn_confirma = document.querySelector('#btn-confirma');
let btn_reset = document.querySelector('#btn-reset');
let mensagem = document.querySelector('#mensagem');
let input_numero = Number(document.getElementById('numero').value);

// Manipulando o DOM

// Ao carregar a pagina, já gera um numero aleatório
document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM totalmente carregado e analisado");
   limpaMemoria();
   buscaNumero();
});

// realiza o controle do click dos botões
btn_reset.addEventListener('click', () =>{
   console.log('reset');
   limpaMemoria();
   buscaNumero();
   mensagem.innerHTML = '';
   input_numero.value = 0;
});

btn_confirma.addEventListener('click', () => {
   console.log('confirma');
   verificaNumero();
});
