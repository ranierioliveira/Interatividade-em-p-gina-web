const botao1 = document.querySelectorAll('button')[0];
const nota1 = document.getElementsByClassName('nota')[0];

botao1.addEventListener('click', clicar1);
const nota1Numero = Number(nota1.innerText);

function clicar1(){
    if(nota1Numero < 5){
        nota1.style.backgroundColor = 'red';
    } else {
        nota1.style.backgroundColor = 'green';
    }
}