function apresentar(){
    
    const texto = document.querySelector('#palavra').value;
    let vogais = ['a','e','i','o','u','A','E','I','O','U'];
    let contador = 0


    for (vogal of texto){
        let div = document.getElementById('resultado')
        if (vogais.includes(vogal)===true) {
            contador+=1

        }
        if(contador == 0) {
            div.innerText  = `Você não digitou nenhuma vogal !`
            div.classList.add('visivel')  
        }else{
            div.innerText = ` Total de vogais no seu texto:  ${contador}`
            div.classList.add('visivel')
        }
        
    }
}




/*


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

*/