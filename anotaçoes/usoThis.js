let titulo =  document.querySelector('h1');
console.log(titulo);

titulo.addEventListener('click', clicar);

function clicar(){
    this.innerText = 'H1 que foi clicado';
    this.classList.toggle('vermelho');//Existe uma class 'vermelho' no CSS
}