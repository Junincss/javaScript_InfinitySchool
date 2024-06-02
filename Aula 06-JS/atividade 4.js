
/*Escreva uma função que permita contar o numeros de vogais contidas em uma string fornecida pelo usuário */



const texto = "qualquer coisa"



function quantidadeDeVogais(x) {
    let quantidade = 0 ;
    let vogais = ['a','e','i','o','u'];
    for( i of x)  {
        if (vogais.includes(i)=== true){
            quantidade +=1;
        }else
        continue
    }
    console.log(`O texto digitado contém ${quantidade} vogais`)
}


quantidadeDeVogais(texto)