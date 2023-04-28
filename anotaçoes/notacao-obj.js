//Como escrever objetos: Notação


const pessoa = {
   nome: "Raníeri", 
   sobrenome: "Oliveira",
   descreva: function(){
    console.log("Eu sou uma pessoa");
   }
}

const casa = {
    quarto_principal: {televisão: 2, cama: 2},
    quarto_hospede: {televisão: 1, cama: 1},
    quarto_hostel: {cama: 6}
}

console.log(casa);
console.log(casa.quarto_hostel.cama);
