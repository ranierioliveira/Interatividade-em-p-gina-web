const lista = document.querySelector('ul');
const botao1 = document.querySelector(".open");
const botao2 = document.querySelector(".close")

botao1.addEventListener('click', () =>{
    lista.setAttribute("data-lista", "mostrar");
    console.log(lista);
});

botao2.addEventListener("click", () => {
    lista.setAttribute("data-lista", "esconder");
    console.log(lista);
  });