// Método de navegação

// let elemento = document.children[0].children[1].children[0]

let elemento = document.body.children[0].lastElementChild;
console.log(elemento);

let irmao = elemento.previousElementSibling;
console.log(irmao);

let pai = irmao.parentNode;
console.log(pai);