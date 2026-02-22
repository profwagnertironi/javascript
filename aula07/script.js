let btn_soma = document.querySelector("#btn-soma")
let campo = document.querySelector("#inp-number")
let mensagem = document.querySelector("#mensagem")

let numeros = []

btn_soma.addEventListener("click", () =>{
   //addEventListener("click", () =>{
   console.log('soma')
})

campo.addEventListener('input', (e) =>{
   let numero = e.target.value 
   //document.getElementById("inp-number")
   console.log('numero ' + numero)
   numeros[numeros.length] = numero
})


campo.addEventListener('keydown', (e) =>{
   //let numero = e.target.value 
   //document.getElementById("inp-number")
   //console.log('numero ' + numero)
   if (e.key === 'Enter') {
      console.log('Enter ' + numeros[numeros.length-1])
      campo.value = ''
   }
})
//mensagem.innerHTML = "<p>"+numeros+"</p>"
console.log(numeros)


