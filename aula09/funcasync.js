/*function primeiraFunc() {
    console.log('Aguardando essa função.');   
}

async function segundaFunc() {
    console.log('Inicio');
    await primeiraFunc();
    console.log('Passo dois');   
}

segundaFunc()

const timeout = (duracao) => {
    let valor

    valor = new Promise((resolve,reject) => {setTimeout(resolve,duracao)})
    
    return valor
}

timeout(10000).then( function() {
    console.log('Aguardou alguns segundos...')
})*/

function msg(texto) {
    console.log(texto)
}

let mensagem = setTimeout( 
    function(){
        console.log('Seja bem-vindo!');
    },
    2000
)

let mensagem2 = setTimeout(msg , 10000, 'Mensagem de entrada')
