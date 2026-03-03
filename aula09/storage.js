let botao = document.querySelector('#btn-ok')
let ultimoNum = 0

botao.addEventListener('click', () =>{
    let num = Number(document.getElementById('input-num').value);
    
    ultimoNum = localStorage.getItem('numeroAnterior')
    console.log(`Ultimo numero: ${ultimoNum}`);
    console.log(`Numero digitado: ${num}`);
    ultimoNum = num
    localStorage.setItem('numeroAnterior', ultimoNum)

})