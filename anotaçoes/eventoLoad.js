const meuBody = document.querySelector('body');
const botao = document.querySelector('button');
window.addEventListener('load', carregar);
botao.addEventListener('click', () => {
    let itemLista = prompt('Qual item você quer inserir na sua lista?');
    if(itemLista != ''){
        let ul = document.querySelector('ul');
        let li = document.querySelector('li.item-menu').cloneNode();
        li.textContent = itemLista;
        // li.setAttribute('contenteditable', '');
        ul.appendChild(li);
    } else {
        return;
    }
} );

function carregar(){
    meuBody.style.backgroundColor = 'steelblue';
}