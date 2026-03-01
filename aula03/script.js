/*
Crie uma calculadora de Índice de Massa Corporal (IMC) em JavaScript. 
O IMC é uma medida que ajuda a avaliar se uma pessoa está com um peso saudável com base 
em sua altura e peso. Confira as regras!

Crie uma página HTML simples com campos de entrada para o peso e a altura, 
além de um botão de "Calcular IMC".
Use JavaScript para capturar os valores inseridos pelo usuário e calcular o IMC.
Exiba o resultado do cálculo do IMC na página, informando se o usuário está 
abaixo do peso, com peso normal, com sobrepeso ou obeso.
Forneça um feedback ao usuário de acordo com o resultado do IMC.
Adicione comentários ao seu código para explicar o que cada parte faz.
 */

let peso = 78;
let altura = 1.77;

let imc = peso / (altura * altura);

console.log(`IMC = ${imc}`);

if (imc<18.5)
   console.log('Abaixo do peso.');

if (imc >= 18.5 &&  imc <24.9)
   console.log('Peso normal.');

if (imc >= 25 &&  imc <29.9)
   console.log('Sobrepeso');

if (imc >= 30 &&  imc <39.9)
   console.log('Obesidade');

if (imc >= 30 &&  imc <39.9)
   console.log('Obesidade grave');


