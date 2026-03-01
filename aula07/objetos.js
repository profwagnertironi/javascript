/*let cliente = { nome:'Fulano de tal', 
                cpf:'12345678900',
                data_nascimento: '01/01/2000',
                telefone: '31996633221',
                idade: 26,
                situacao: true
}*/

function Cliente(nome,cpf,data_nascimento,telefone,idade,situacao){
    this.nome = nome; 
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
    this.telefone = telefone;
    this.idade = idade;
    this.situacao = situacao;
}

let cliente = new Cliente('fulano', 
                            '13465',
                            '01/01/2000', 
                            '3199999999', 
                            20, 
                            true);

console.log(cliente);
console.log(cliente['nome']);

let cliente2 = new Cliente('sicrano', 
                            '13465',
                            '01/01/2000', 
                            '3199999999', 
                            20, 
                            true);

console.log(cliente2);
console.log(cliente2['nome']);