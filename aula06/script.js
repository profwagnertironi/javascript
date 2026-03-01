//console.log('Teste');

let nomes = ['Jose', 'Maria', 'Joao', 'Luzia', 'Wagner']; // inicia a variavel como array, sem valores
let numeros = [9, 5 ,1 , 4, 7];

console.log('Array de nomes: ' + nomes);
console.log('Array de numeros: ' + numeros);

console.log('Array de nomes: ' + nomes[1]);
console.log('Array de nomes: ' + nomes[4]);
console.log('Array de nomes: ' + nomes[10]);

let filmes = [];
let series = new Array;

filmes[0] = "Matrix";
filmes[1] = "Toy story";
console.log('Array de filme: ' + filmes);

series[0] = "Breaking Bad";
series[1] = "Dr House";
console.log('Array de series: ' + series);

console.log('quantidade de nomes: ' + nomes.length);
nomes[5] = 'Fulano';
console.log('quantidade de nomes: ' + nomes.length);
console.log(nomes);
/*for (let index = 0; index < nomes.length; index++) {
    console.log('Nome: ' + index + ' = ' + nomes[index])
}

nomes.forEach( function(item_nome){
    console.log(item_nome)
})*/

/*nomes.push('sicrano')
for (let index = 0; index < nomes.length; index++) {
    console.log('Nome: ' + index + ' = ' + nomes[index])
}*/

nomes.pop();
/*for (let index = 0; index < nomes.length; index++) {
    console.log('Nome: ' + index + ' = ' + nomes[index])
}
*/
console.log(nomes);
nomes.splice( 2, 0, 'Fulano');
console.log(nomes);
let primeiro = nomes.shift();
console.log(nomes);
console.log(primeiro);
nomes.unshift("Beltrano");
console.log(nomes);

let indice = nomes.indexOf('xuxu');
console.log(indice);


let matriz = [[1,2,3],
              [4,5,6],
              [7,8,9]];

for (let linha = 0; linha < 3; linha++) {
    //const element = array[index];
    for (let coluna = 0; coluna < 3; coluna++) {
        //const element = array[index];
        console.log(matriz[linha][coluna]);
    }
}

for (let coluna = 0; coluna < 3; coluna++){
    //const element = array[index];
    for (let linha = 0; linha < 3; linha++)  {
        //const element = array[index];
        console.log(matriz[linha][coluna]);
    }
}
