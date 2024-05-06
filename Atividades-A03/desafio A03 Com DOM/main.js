/*
Você foi desafiado a criar um simulador de caixa eletrônico
em JavaScript. O programa deve permitir que o usuário
interaja com sua conta bancária simulada, realizando
operações como 

--verificar o saldo, 
--fazer saques, 
--fazer depósitos 
e sair do programa.

Aqui estão os requisitos do programa:

*/
let saldo = 1000;
let deposito = 0;
let operar = true;
async function exibirbanking() {
  const valueoption = parseInt(document.getElementById("optionselected").value);
  const exibir = document.getElementById("exibicao");

  do {
    switch (valueoption) {
      case 1:
        exibir.innerText = `Seu saldo atual é igual a:
         R$${saldo.toFixed(2)}`;
        // alert(`Seu saldo atual é igual a R$${saldo.toFixed(2)}`);
        valueoption = "";
        setTimeout((exibir.innerText = ""), 1000);

        break;

      //condição quebrada
      case 2:
        let saque = parseFloat(prompt(`Informe o valor que você quer sacar:`));

        // Verifica se o valor do saque é válido
        if (!isNaN(saque) && saque > 0 && saldo >= saque) {
          saldo -= saque;
          // Atualiza a exibição do saldo
          exibir.innerText = `Você sacou R$${saque.toFixed(
            2
          )}\nSeu saldo atual é igual a: R$${saldo.toFixed(2)}`;
        } else {
          exibir.innerText =
            "Você não tem saldo suficiente ou inseriu um valor inválido.";
        }
        break;

      case 3:
        deposito = parseFloat(
          prompt(`
                Seu saldo atual: ${saldo.toFixed(2)}
  
                Infome o valor que você quer depositar:`)
        );

        if (!isNaN(deposito) && deposito <= 0) {
          exibir.innerText = `Não é possível operar com letras ou com valor negativo`;
          //   alert("Não é possível operar com letras ou com valor negativo");
          valueoption = "";
          ex;
          break;
        } else {
          saldo += deposito;
          exibir.innerText = `Você depositou R$ ${deposito.toFixed(2)}
    
            Seu novo saldo é R$${saldo.toFixed(2)}

            `;

          //   alert(`Você depositou R$ ${deposito.toFixed(2)}

          //                 Seu novo saldo é $ ${saldo.toFixed(2)}

          //             `);
        }
        valueoption = "";
        break;
      case 4:
        exibir.innerText = `Obrigado por utilizar nossos serviços:
                  Abraços - InfinityBrank
                `;
        saldo = 1000;
        operar = false;
        valueoption = "";
        break;
        exibir.innerText = "";

      //   default:
      //     alert("Operação Invalida tente novamente.");
      //     break;
    }
  } while (operar === true);
}

// const user = prompt("Infome seu nome:");
