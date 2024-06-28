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

*let saldo = 1000;

function exibirbanking() {
  const valueoption = parseInt(document.getElementById("optionselected").value);
  const exibir = document.getElementById("exibicao");
  const operacao = document.getElementById("operacao");
  const exibirsaldo = exibir.innerText = `Seu saldo atual é de: R$${saldo.toFixed(2).replace(".",",")}`;
  switch (valueoption) {
    
    case 1:
      exibirsaldo
      break;

    case 2:
      exibirsaldo
      operacao.innerHTML = `
        <div class="input-group ">
          <div class="input-group-prepend whitebackg">
            <label class="input-group-text  bg-info" for="valorsaque">$</label>
          </div>
          <input name="valorsaque" id="valorsaque" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
          <div class="input-group-append d-flex flex-column">
            <button class="btn btn-outline-info mx-2 " id="bsaque" type="button">Sacar</button>
          </div>
        </div>`;

      document.getElementById("bsaque").addEventListener('click', () => {
        const valorsaque = parseFloat(document.getElementById('valorsaque').value);
        if (!isNaN(valorsaque) && valorsaque > 0 && saldo >= valorsaque) {
          saldo -= valorsaque;
          exibir.innerText = `Você sacou R$${valorsaque.toFixed(2)}\nSeu saldo atual é igual a: R$${saldo.toFixed(2)}`;
        } else {
          exibir.innerText = "Você não tem saldo suficiente ou inseriu um valor inválido.";
        }
      });
      break;

    case 3:
      exibirsaldo
      operacao.innerHTML = `
        <div class="input-group ">
          <div class="input-group-prepend whitebackg">
            <label class="input-group-text  bg-info" for="valordeposito">$</label>
          </div>
          <input name="valordeposito" id="valordeposito" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
          <div class="input-group-append d-flex flex-column">
            <button class="btn btn-outline-info mx-2 " id="bdeposito" type="button">Depositar</button>
          </div>
        </div>`;

      document.getElementById("bdeposito").addEventListener('click', () => {
        const valordeposito = parseFloat(document.getElementById('valordeposito').value);
        if (!isNaN(valordeposito) && valordeposito > 0) {
          saldo += valordeposito;
          exibir.innerText = `Você depositou R$${valordeposito.toFixed(2)}\nSeu novo saldo é R$${saldo.toFixed(2)}`;
        } else {
          exibir.innerText = "Você inseriu um valor inválido.";
        }
      });
      break;

    case 4:
      exibir.innerText = `Obrigado por utilizar nossos serviços:\nAbraços - InfinityBank`;
      operacao.innerHTML = '';
      saldo = 1000;
      break;

    default:
      exibir.innerText = "Operação inválida. Tente novamente.";
      break;
  }
}
