const palavras = document.querySelectorAll("[draggable = 'true']");
const containerSoltar = document.querySelector(".container-soltar")

palavras.forEach((palavra) => {
    palavra.addEventListener("dragstart", comecarArrastar);
});

containerSoltar.addEventListener("dragover", soltar);
containerSoltar.addEventListener("dragleave", saiu);

function comecarArrastar(){
    console.log("Começou a arrastar");

    //O elemento que começou a ser arrastado ganha uma classe
    this.classList.add("arrastando");
}

function soltar(){
    this.classList.add("em-cima");

    //identifica pela classe que o elemento ganhou
    const elementoArrastado = document.querySelector(".arrastando");

    this.appendChild(elementoArrastado);
}

function saiu(){
    this.classList.remove("em-cima")
}