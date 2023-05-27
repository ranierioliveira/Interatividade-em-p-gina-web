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

// <ul>
//     <li class="titulo">Listinha</li>
//     <li class="item-menu">Caderno</li>
//     <li class="item-menu">Lápis de cor</li>
//   </ul>
//   <button>Inserir</button>
//   <div class="mensagem"></div>

// ul{
//     list-style-type: none;
//   }
//   li.titulo{
//     color: white;
//     font-size: 30px;
//     margin: auto;
//     width: 300px;
//     text-align: center;
//   }
//   li.item-menu{
//     background-color: lightsteelblue;
//     color: indigo;
//     padding: 10px;
//     width: 300px;
//     margin: auto;
//     border:1px solid indigo;
//   }
//   button{
//     background-color: lightsteelblue;
//     color: indigo;
//     padding: 10px;
//     width: 300px;
//     margin: auto;
//     border:1px solid indigo;
//     display: block;
//     border-radius: 8px;
//   } 