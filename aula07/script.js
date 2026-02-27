function msg_semretorno() {
    console.log('Função sem retorno')
}

function msg_comretorno() {
    return 'Função COM retorno'
}

function msg_comparametro(txt1, txt2) {
    let nova_mensagem = txt1 + txt2
    return nova_mensagem
}

console.log('Inicio')

msg_semretorno()

let msg = msg_comretorno()
console.log(msg)

let msg2 = msg_comparametro('A mensagem de início', ' e o fim!')
console.log(msg2)