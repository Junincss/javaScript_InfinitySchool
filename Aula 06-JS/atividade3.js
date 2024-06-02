function calcular(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
  
    if(isNaN(num1)|| isNaN(num2)){
      document.getElementById('demo').innerText = `Digite Apenas Números`;
      document.getElementById('demo').classList.add('visible')
    }else{
      const resultado = num1 * num2;
      document.getElementById('demo').innerText = `O Resultado é igual a ${resultado}`
      document.getElementById('demo').classList.add('visible')
    }
  }
  
  
  function zerar(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value
  
    document.getElementById('demo').classList.toggle('visible')
    num1.value = ''
    num2.value = ''
    document.getElementById('demo').innerText= ''
  }
  
  
  