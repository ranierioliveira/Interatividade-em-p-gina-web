// Método de navegação

// let elemento = document.children[0].children[1].children[0]

let elemento = document.body.children[0].lastElementChild;
console.log(elemento);

let irmao = elemento.previousElementSibling;
console.log(irmao);

let pai = irmao.parentNode;
console.log(pai);

// html: 
// <ol class="lista">
//     <li>JS</li>
//     <li id="item">HTML</li>
//     <li>CSS</li>
//   </ol>