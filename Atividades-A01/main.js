let respostas = [];

/* Atividade 01
 Crie um programa que peça ao usuário para digitar seu nome
 usando o prompt e, em seguida, exiba o nome com uma frase
 personalizada com template string na tela usando o console.*/

const username = prompt("Digite seu nome :");

console.log(`Olá ${username}`);

respostas.push(username);

/*
  Atividade 02
  Solicite ao usuário que insira dois números usando o prompt, some
  esses números e exiba o resultado usando o console.
*/

alert(`Atividade 02

      Exibindo a soma de dois números informados pelo usuário`);

const number1 = parseFloat(prompt("Digite um número:"));
const number2 = parseFloat(
  prompt(`Digite o número que deseja somar a ${number1}:`)
);
let sum = number1 + number2;

console.log(sum);
alert(`${username} o resultado foi previamente exibido no console.

  mas aqui vai o resultado da soma de ${number1.toFixed(2)} e ${number2.toFixed(
  2
)} é igual á ${sum.toFixed(2)}`);

respostas.push(sum);

/* Atividade 03
  Peça ao usuário para digitar sua idade usando o prompt e, em seguida,
  calcule e exiba o ano de nascimento com uma frase personalizada usando
  o console.


  --> para pegar o ano atual vamos utilizar a classe Date()
 */

let data = new Date();
// anoAtual está armazenando o ano atual.
let anoAtual = data.getFullYear();

let userAge = parseInt(
  prompt(
    `
    Atividade 03
    ${username} Digite sua idade que eu vou te informar magicamente em que ano você nasceu`
  )
);

let idade = (anoAtual -= userAge);

console.log(`Você nasceu em  -> ${idade}`);
alert(`Você nasceu em  -> ${idade}`);

respostas.push(idade);

/*
   Atividade 04

    Crie um programa que solicite ao usuário que insira o raio de um círculo
    usando o prompt e, em seguida, calcule e exiba a área do círculo usando o
    console.
 */

alert(`
Atividade 04
Vamos calcular a área de um círculo a partir de um raio! `);

const raio = parseFloat(prompt("Informe o raio:"));

// const math = new Math();

const pi = Math.PI;
const raioAoQuadrado = Math.pow(raio, 2);

let area = pi * raioAoQuadrado;
console.log(area.toFixed(4));
alert(`A área do raio informado é igual a -> ${area.toFixed(4)}`);
respostas.push(area);
/*
  Atividade 05
  Crie um programa que solicite ao usuário que insira um valor em dólares
  usando o prompt. Em seguida, converta esse valor para euros (1 dólar =
  0,85 euros) e exiba o resultado no console.  
*/

let valorDolar = parseFloat(
  prompt(`Atividade 05:

Digite um valor em Dólar para convertermos esse valor em euros 

1 dolar é igual á 0,929138 EUR

`)
);
const taxaDeCambio = 0.93;
const valorConvertido = valorDolar * taxaDeCambio;

alert(`${valorDolar} convertido em Euro é igual á :
${valorConvertido}`);
console.log(`${valorDolar} convertido em Euro é igual á :
${valorConvertido}`);

respostas.push(valorConvertido);

/*
  Atividade 06

  Peça ao usuário que insira um preço de um produto usando o prompt. Em
  seguida, aplique um desconto
*/

const valor = parseFloat(
  prompt(`
Atividade 06

  Insira um preço de um produto para obter 15% de desconto.
`)
);

const desconto = valor * 0.15;

const novoValordoProduto = valor - desconto;

console.log(`Você recebeu um desconto no valor de R$${desconto} 
seu produto é igual á ${novoValordoProduto}`);

alert(`Você recebeu um desconto no valor de R$${desconto} 
seu produto é igual á ${novoValordoProduto}`);

respostas.push(novoValordoProduto);

/*
  Atividade 07
  Solicite ao usuário que insira um valor em metros usando o prompt e, em
  seguida, converta esse valor para centímetros (1 metro = 100 centímetros) e
  exiba o resultado no console.
*/

const metros = parseFloat(
  prompt(`
Atividade 07

  Insira uma medida em metros para converter em centímetros
`)
);

const centimetros = metros * 100;

console.log(`${metros.toFixed(2)}m é igual á  ${centimetros.toFixed(2)}cm`);

alert(`${metros.toFixed(2)}m é igual á  ${centimetros.toFixed(2)}cm`);

/*Extra*/
respostas.push(centimetros);
console.log(respostas);
for (i = 0; i < respostas.length; i++) {
  alert(`Atividade 0${i + 1} resposta : ${respostas[i]}`);
}

/* Desafio  

  Faça um Programa que pergunte quanto você
  ganha por hora e o número de horas trabalhadas
  no mês. Calcule e mostre o total do seu salário no
  referido mês, sabendo-se que são descontados 11%
  para o Imposto de Renda, 8% para o INSS e 5% para

  o sindicato, faça um programa que nos dê:

  1.salário bruto.

  2.quanto pagou ao INSS.

  3.quanto pagou ao sindicato.

  4. salário liquido

  5. calcule os descontos e o salário liquido

*/

const salarioHora = parseFloat(prompt("Digite o valor do seu salário hora"));

const horasTrabalhadas = parseFloat(prompt("Quantas horas você trabalhou ?"));

const salarioBt = salarioHora * horasTrabalhadas;

const iR = salarioBt * 0.11;
const inss = salarioBt * 0.08;
const impSindical = salarioBt * 0.05;
const totalDesct = iR + inss + impSindical;

const salarioLiq = salarioBt - totalDesct;

alert(`O valor do seu salário bruto é igual a  R$${salarioBt.toFixed(2)}.

  ----------------------------------------------------
  Você pagou ao inss R$${inss.toFixed(2)}.
  Você pagou ao sindicato R$${impSindical.toFixed(2)}.
  Seu salário liquido é :  R$${salarioLiq.toFixed(2)}.


  o total dos descontos é igual a : R$${totalDesct.toFixed(2)}

  -------------------------------------------------------

`);
