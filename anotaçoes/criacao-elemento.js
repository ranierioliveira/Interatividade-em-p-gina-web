// const menu = document.querySelector("#menu li:last-child");
const menu = document.querySelector("#menu");

//Tamanho dos elementos dentro da tag com id menu
//console.log(menu.children.length);

const home = document.getElementsByClassName("menuItem")[0];
home.innerHTML = "Início"
//console.log(home.parentNode);//Acessa a tag pai

const criaContato = document.createElement('li');//Criação de um elemento
criaContato.innerHTML = "Contato";

menu.appendChild(criaContato);
console.log(menu);

