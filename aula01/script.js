  //console.log('aqui')

  document.querySelector('#btn-verde')?.addEventListener('click', () => {
    console.log('clicou no verde')
    document.body.style.backgroundColor = "green"
  });

  /*document.getElementById('btn-verde').addEventListener('click', function() {
    console.log('clicou no verde')
    document.body.style.backgroundColor = "green"
  })*/

  //document.getElementById('btn-vermelho').addEventListener('click', function() {
  document.querySelector('#btn-vermelho')?.addEventListener('click', () => {
    console.log('clicou no vermelho')
    document.body.style.backgroundColor = "red"
  });

  //document.getElementById('btn-retorna').addEventListener('click', function() {
  document.querySelector('#btn-retorna')?.addEventListener('click', () => {
    console.log('clicou no retorna')
    document.body.style.backgroundColor = "white"
  })

  //document.getElementById('btn-msg').addEventListener('click', function() {
  document.querySelector('#btn-msg')?.addEventListener('click', () => {
    alert('Olá, seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript')
  })
//
/*
alert('OLÁ MUNDO!!!')
console.log('Olá!4555')
let idade = 20
console.log('A Idade é: ' + idade)

if (idade >= 18){
  console.log('é maior de idade')
}
else{
  console.log('Menor de idade')
}
*/