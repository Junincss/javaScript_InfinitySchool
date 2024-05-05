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
const user = prompt("Infome seu nome:");
let saldo = 1000;
let deposito = 0; 
let saque = 0;
let operar = true


do {
    
    let option = parseInt(prompt(`Seja bem vindo ao Infinity bank
    1 - Verificar Saldo:
    2 - Realizar Saque:
    3 - Realizar Depósito:
    4 - Encerrar Programa:  
    `))

    switch (option) {
        case 1:

            alert(`Seu saldo atual é igual a R$${saldo.toFixed(2)}`)
            
            break;
        case 2:
            saque = parseFloat(prompt(`
                Seu saldo atual: ${saldo.toFixed(2)} 
                
                Infome o valor que você quer sacar:`));
            if (!isNaN(saque) && saque > 0  && saldo >= saque){
                saldo -= saque 
                alert(` Seu saldo atual é : ${saldo.toFixed(2)}`)
                break;
            }else{
                alert(" Você não tem saldo suficiente ")
            }
            break;           
        case 3:
            deposito = parseFloat(prompt(`
            Seu saldo atual: ${saldo.toFixed(2)} 
            
            Infome o valor que você quer depositar:`));

            if(!isNaN(deposito) && deposito <= 0 ){
                alert("Não é possível operar com letras ou com valor negativo")
                break;
            }else{
                saldo += deposito;

                alert(`Você depositou R$ ${deposito.toFixed(2)}
                
                    Seu novo saldo é $ ${saldo.toFixed(2)}

                `);
            }
            break;
        case 4: 

             alert(`Obrigado por utilizar nossos serviços:
              Abraços - InfinityBrank
            `)
            operar = false;
            break;
    
        default:

            alert("Operação Invalida tente novamente.")
            break;
    }

} while (operar === true);