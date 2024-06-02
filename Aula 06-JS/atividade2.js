
/*
    No exemplo abaixo temos uma funão que se chama calcularAreaTerreno,
    e como parâmetros temos largura e cumprimento
*/


function calcularAreaTerreno(largura, comprimento) {
    let area = largura*comprimento
    
    /*Utilizamos o return para finalizar a execução de uma função e especifica os valores que devem ser retornados para onde a função foi chamada.*/
    console.log(`área do terreno calculada é igual a ${area}`)
    return area
}

areaDoTerreno = calcularAreaTerreno(200,855)
console.log(areaDoTerreno)

