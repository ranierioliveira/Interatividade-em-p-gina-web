const meuBody = document.querySelector('body');
const botao = document.querySelector('button');
window.addEventListener('load', carregar);
botao.addEventListener('click', () => {
    let itemLista = prompt('Qual item você quer inserir na sua lista?');
    if(itemLista.length > 0){
        let ul = document.querySelector('ul');
        let li = document.querySelector('li.item-menu');
        console.log(li);
    } else {
        return;
    }
} )


function carregar(){
    meuBody.style.backgroundColor = 'steelblue';
}