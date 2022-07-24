function btnValor(){
    var num1 = document.getElementById('inputValue').value

    if(num1 == ''){
        alert('insira um número')
        return
    }

    if(num1 % 2 == 0){
        //par
        elementoTexto = document.getElementById('exibicaoTexto')
        elementoTexto.innerHTML = 'número é par'
    }else{
        elementoTexto = document.getElementById('exibicaoTexto')
        elementoTexto.innerHTML = 'número é impar'
    }
}