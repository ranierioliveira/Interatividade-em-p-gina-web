const botao = document.querySelector('button');
const paragrafos = document.querySelectorAll('p');
const div = document.querySelector('#card');

botao.addEventListener('click', clicar);

function clicar(){
    if(paragrafos[0].style.display == 'block'){
        paragrafos[0].style.display = 'none';
        paragrafos[1].style.display = 'none';
        div.style.backgroundColor = 'blue';
    } else {
        paragrafos[0].style.display = 'block';
        paragrafos[1].style.display = 'block';
        div.style.backgroundColor = '';
    }
   
}