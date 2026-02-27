function soma(n1, n2){
    return n1 + n2
}

function subtracao(n1, n2){
    return n1 - n2
}

function multiplicacao(n1, n2){
    return n1 * n2
}

function divisao(n1, n2){
    return n1 / n2
}

function calcular(operacao) {
    let n1 = Number(document.getElementById("num1").value)
    let n2 = Number(document.getElementById("num2").value)
    let result = 0
    switch (operacao) {
        case '+':
            result = soma(n1, n2)
            break;
        case '-':
            result = subtracao(n1, n2)
            break;
        case '/':
            result = divisao(n1, n2)
            break;   
        case '*':
            result = multiplicacao(n1, n2)
            break; 
        default:
            result = 0
            break;
    }

    resultado.innerHTML = '<p>'+result+'</p>'
}

let botao_soma = document.querySelector("#btn-soma")
let botao_subtracao = document.querySelector("#btn-subtracao")
let botao_multiplicacao = document.querySelector("#btn-multiplicacao")
let botao_divisao = document.querySelector("#btn-divisao")
let botao_limpar = document.querySelector("#btn-limpar")
let resultado = document.querySelector("#resultado")

botao_soma.addEventListener("click", () =>{
    console.log('soma1')
    calcular('+')
})

botao_subtracao.addEventListener("click", () =>{
    calcular('-')
})

botao_multiplicacao.addEventListener("click", () =>{
    calcular('*')
})

botao_divisao.addEventListener("click", () =>{
    calcular('/')
})

botao_limpar.addEventListener("click", () =>{
    calcular('')
})