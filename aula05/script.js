let soma = 0
let numero = 1
const limite = 10

console.log('inicio Soma = ' + soma + ' e numero = '+ numero)

while (soma<=limite){
    soma += numero
    numero++
    console.log(' while Soma = ' + soma + ' e numero = '+ numero)
}
console.log('O resultado no while é: ' + soma)


do{
    soma += numero
    numero++
    console.log(' do-while Soma = ' + soma + ' e numero = '+ numero)
}while (soma<=limite)

console.log('O resultado do-while é: ' + soma)


/*let pessoa = {nome:'fulano', idade:30, cidade: 'Contagem'}

for (let chave in pessoa){
    console.log(chave)
    console.log(pessoa[chave])
}

let notas = [10, 8, 9, 5]

for (nota_individual of notas){
    console.log(nota_individual)
}*/


/*
console.log('Inicio')
for (let index = 0; index <= 10; index++) {
    console.log(index)
}
console.log('Fim')


console.log('Inicio 2')
for (let index = 10; index > 0; index--) {
    console.log(index)
}
console.log('Fim 2')
*/