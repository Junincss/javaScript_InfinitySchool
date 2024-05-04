/*
    Atividade 01
  Peça ao usuário para inserir um número e escreva um programa que
  determine se o número é positivo e par.

*/

const numero = parseFloat(
  prompt(`
   Atividade 01
    Insira um número para saber se ele é positivo e par:
`)
);

if (numero % 2 == 0 && numero > 0) {
  console.log(`O número digitado é maior que zero e é um número par`);
  alert(`O número digitado é maior que zero e é um número par`);
}
// alternativa usando operador ternario
numero % 2 == 0 && numero > 0 ? alert("arroz") : alert("feijao");

/*
  Atividade 02
  Crie um programa que solicite ao usuário seu peso (em kg) e altura
  (em metros) e calcule o IMC. Em seguida, informe a categoria de
  acordo com a tabela de IMC (por exemplo, abaixo do peso, peso
  normal, sobrepeso, etc.).
*/

const userWeight = parseFloat(
  prompt(`Atividade 02
  ---Calculadora de IMC---
  Informe seu peso:
  `)
);
const userHeight = parseFloat(prompt("Infome sua altura:"));
const imc = userWeight / Math.pow(userHeight, 2);
if (imc < 18.5) {
  alert("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  alert("Peso normal");
} else if (imc >= 25 && imc < 30) {
  alert("Sobrepeso");
} else if (imc >= 30 && imc < 35) {
  alert("Obesidade grau I");
} else if (imc >= 35 && imc < 40) {
  alert("Obesidade grau II");
} else {
  alert("Obesidade grau III");
}

/*
  Atividade 03
  Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o
  preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um
  desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.
*/

let price = parseFloat(
  prompt(`Atividade 03
  ---Descontos  por idade ---
  Informe o valor do produto:
  `)
);
const desconto = price * 0.1;
let newprice = 0;
const userAge = parseFloat(
  prompt(`Qual a sua idade?
  1) Maior de 18
  2) Menor de 18
`)
);

switch (userAge) {
  case 1:
    alert(`Obrigado por comprar conosco !
      Volte sempre!
    `);

    break;

  case 2:
    newprice = price - desconto;
    alert(`Parabéns, você ganhou um desconto de 10% antes você iria pagar R$${price} mas agora você irá pagar apenas

      \t R$${newprice.toFixed(2)}

    Obrigado por comprar conosco !
      Volte sempre!
    `);
    break;

  default:
    break;
}

/*  Atividade 04
  Solicite ao usuário que digite uma letra. Crie um programa que determine
  se a letra inserida é uma vogal ou uma consoante. Exiba a mensagem
  correspondente. Utilize estruturas condicionais para realizar essa
  verificação.
*/

let letra = prompt(`

Atividade 04
 vogais:
Insira uma letra`).toLowerCase();
const vogais = ["a", "e", "i", "o", "u"];

if (letra.length === 1 && letra.match(/[a-z]/i)) {
  if (vogais.includes(letra)) {
    alert("A letra inserida é uma vogal.");
  } else {
    alert("A letra inserida é uma consoante.");
  }
} else {
  alert("Por favor, Insira apenas uma letra do alfabeto.");
}

/*
  Atividade 05
  Crie um programa que solicite um número de 1 a 7, representando
  o dia da semana. Use uma estrutura switch (ou equivalente) para
  imprimir o nome do dia correspondente.
*/

const numberDay = parseInt(
  prompt(`Atividade 05
  Dias da semana

  ----------

  Escolha um número de 1 a 7 que lhe retornarei o dia da semana
`)
);

if (isNaN(numberDay)) {
  alert("Você não digitou um número.");
} else {
  switch (numberDay) {
    case 1:
      alert("Domingo");

      break;
    case 2:
      alert("Segunda-Feira");

      break;
    case 3:
      alert("Terça-Feira");

      break;
    case 4:
      alert("Quarta-Feira");

      break;
    case 5:
      alert("Quinta-Feira");

      break;
    case 6:
      alert("Sexta-Feira");

      break;
    case 7:
      alert("Sábado");

      break;
    default:
      alert("Você digitou um número fora do padrão");
      break;
  }
}

/*
  Atividade 06
  Escreva um programa que solicite um número e determine se ele é
  um número primo.

*/

const numeroPrimo = parseFloat(
  prompt(`
   Atividade 01 
    Insira um número para saber se ele é primo: 
`)
);

if (numeroPrimo <= 1) {
  alert("esse não é um numero primo. ");
} else if (numeroPrimo === 2) {
  alert(`${numeroPrimo}  é um número primo.`);
} else {
  let sendoprimo = true;
  for (let i = 2; i < numeroPrimo; i++) {
    if (numeroPrimo % 1 === 0) {
      sendoprimo = false;
      break;
    }
  }
  if (sendoprimo === true) {
    alert(`${numeroPrimo} é um número primo`);
  } else {
    alert("Não é um numero primo.");
  }
}

/*

Desafio



*/

// Função para exibir o menu
function exibirMenu() {
  let opcaoUsuario = parseInt(
    prompt(`Opções do Menu:
    1. Calcular Área do Triângulo
    2. Calcular Área do Retângulo
    3. Calcular Volume do Cubo
    4. Calcular Área do Círculo
    5. Sair`)
  );

  return opcaoUsuario;
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

function calcularVolumeCubo(lado) {
  return Math.pow(lado, 3);
}

function calcularAreaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}

let opcaoUsuario = exibirMenu();

switch (opcaoUsuario) {
  case 1:
    let base = parseFloat(prompt("Digite o valor da base do triângulo:"));
    let altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));
    alert("A área do triângulo é: " + calcularAreaTriangulo(base, altura));
    break;
  case 2:
    let base2 = parseFloat(prompt("Digite o valor da base do retângulo:"));
    let altura2 = parseFloat(prompt("Digite o valor da altura do retângulo:"));
    alert("A área do retângulo é: " + calcularAreaRetangulo(base2, altura2));
    break;
    1;
  case 3:
    let lado = parseFloat(prompt("Digite o valor do lado do cubo:"));
    alert("O volume do cubo é: " + calcularVolumeCubo(lado));
    break;
  case 4:
    let raio = parseFloat(prompt("Digite o valor do raio do círculo:"));
    alert("A área do círculo é: " + calcularAreaCirculo(raio));
    break;
  case 5:
    alert("O programa foi encerrado.");
    break;
  default:
    alert("Opção inválida.");
}
