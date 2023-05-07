const modal = document.querySelector('#modal');
const botao = document.querySelector('button');
const conteudo = document.querySelector('.conteudo');
const fechar = document.querySelector('#close');

modal.classList.add("classeCriada");
modal.style.display = 'none';

botao.addEventListener('click', () => modal.style.display = 'block');
fechar.addEventListener('click', () => modal.style.display = 'none');
