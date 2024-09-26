/* const mensagem = document.getElementById("msg");

mensagem.textContent = "Olá, Mundo! Este é meu primeiro Hello World com JS♥";

let msg = "hello guys!",
  dia = "hoje é sexta uhum!";
alert(msg);
alert(dia);

function somar(n1, n2) {
  document.write(`<h1>O resultado é: ${n1+n2}</h1>`)
}

somar(1, 2);

for (var i = 10; i > 0; i--) {
  console.log(i);
}


let modo = prompt("Digite um modo: dark, red ou blue");

switch (modo) {
  case "dark":
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    break;
  case "red":
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    break;
  case "blue":
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    break;
  default:
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "black";
}


let dias = document.getElementById("dia");

for (let dia = 1; dia <= 31; dia++) {
  let opcao = document.createElement("option");
  opcao.value = dia;
  opcao.textContent = dia;
  dias.appendChild(opcao);
}

let mesSelect = document.getElementById("mes");

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for (let i = 0; i < meses.length; i++) {
    let option = document.createElement('option');
    option.value = i + 1; // Os meses começam em 1
    option.textContent = meses[i];
    mesSelect.appendChild(option);
}

let anoSelect = document.getElementById('ano');
let anoAtual = new Date().getFullYear();

for (let ano = anoAtual; ano >= anoAtual - 50; ano--) {
    let option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;
    anoSelect.appendChild(option);
} */