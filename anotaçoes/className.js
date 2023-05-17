//Invertendo as classes

const tr = document.querySelectorAll('tr');

for(i in tr){
  if(tr[i].classList.contains('vermelho')){
    tr[i].className = 'azul';
  } else if(tr[i].classList.contains('azul')){
    tr[i].className = 'vermelho';
  }
}

//html

/* <table id="tabela">
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
    <tr class="azul">
      <td>João</td>
      <td>40</td>
    </tr>
    <tr class="vermelho">
      <td>Maria</td>
      <td>50</td>
    </tr>
    <tr class="azul">
      <td>Ana</td>
      <td>20</td>
    </tr>
    <tr class="vermelho">
      <td>Pedro</td>
      <td>10</td>
    </tr>
    <tr class="azul">
      <td>Lúcio</td>
      <td>25</td>
    </tr>
    <tr class="vermelho">
      <td>Júlia</td>
      <td>15</td>
    </tr>
  </table> */

//   Css
//   table{
//     border-collapse: collapse;
//     text-align: center;
//     width: 100px;
//   }
  
//   .vermelho{
//     background-color: red;
//   }
  
//   .azul{
//     background-color: blue;
//   }