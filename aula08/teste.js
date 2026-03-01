const dataAtual = new Date();
const anoNovo = new Date(dataAtual.getFullYear() + 1, 0, 1);
const diferenca = anoNovo - dataAtual;

console.log(dataAtual);
console.log(anoNovo);
console.log(diferenca);