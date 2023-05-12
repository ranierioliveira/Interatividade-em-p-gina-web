let conteudo = document.querySelector('.conteudo');
let novaLargura = conteudo.clientWidth + 2;
let novaAltura = conteudo.clientHeight + 2;
  
conteudo.addEventListener('click', clicar);

function clicar(){
    conteudo.style.width = novaLargura + "px"
    conteudo.style.height = novaAltura + "px"
}