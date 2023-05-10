let meuTitulo = document.querySelector('h1');

// meuTitulo.setAttribute('style', 'font-size: 38px; background-color: purple');

meuTitulo.classList.add('cor');//adiciona podendo "empilhar"
meuTitulo.classList.add('tamanho');
meuTitulo.classList.replace('tamanho', 'mudaTudo');//adc uma class, mas remove outra
meuTitulo.classList.remove('cor');
meuTitulo.className = "cor"; //remove o que tem e adiciona uma nova
meuTitulo.removeAttribute('class');

console.log(meuTitulo);
