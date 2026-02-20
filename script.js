let botaoOk = document.querySelector('#btn-ok')
let mensagem = document.querySelector("#msg-div")

botaoOk.addEventListener("click", () =>{
    //alert('clicou!')
    let login = document.getElementById('inp-login')
    let senha = document.getElementById('inp-senha')
    let texto_msg = ''
    let cor = ''

    if (login.value === senha.value){
        texto_msg = 'Login ' + login.value + ' e senha: ' + senha.value
        cor = 'blue'
    }else{
        texto_msg = 'Login e senha inválidos!'
        cor = 'red'
    }
    mensagem.innerHTML = "<p style='color:"+cor+"';>" + texto_msg + '</p>'
})