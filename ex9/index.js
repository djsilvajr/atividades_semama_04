function btnClassificar(){
    var num1 = document.getElementById('inputValue').value

    if(num1 == '' || num1 < 0){
        alert('Valor invalido')
        return
    }

    if(num1 < 16){
        //par
        elementoTexto = document.getElementById('exibicaoTexto')
        elementoTexto.innerHTML = 'Jovens'

        return
    }

    if(num1 < 65){
        elementoTexto = document.getElementById('exibicaoTexto')
        elementoTexto.innerHTML = 'Adultos'
        return
    }

    if (num1 > 64){
        elementoTexto = document.getElementById('exibicaoTexto')
        elementoTexto.innerHTML = 'Idosos'
        return
    }
}