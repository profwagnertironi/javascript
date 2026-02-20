let botao = document.querySelector("#btn-ok")
let mensagem = document.querySelector("#msg-retorno")

botao.addEventListener("click", () =>{
   let login = document.getElementById("inp-login")
   let senha = document.getElementById("inp-senha")
   let retorno = '' 
   let cor = ''
   if (login.value === senha.value){
      retorno = 'Login e senha validado!'
      cor = 'blue'
   }else{
      retorno = 'Login e/ou senha estão errados!'
      cor = 'red'
   }
   mensagem.innerHTML = "<p style='color:"+cor+";'>"+retorno+"</p>"
})