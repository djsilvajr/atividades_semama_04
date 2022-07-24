function btnClassificar(){

    var data_referencia = new Date(document.getElementById('inputValue').value)

    var ano_atual = new Date().getFullYear()
    var proximo_ano = parseInt(ano_atual) + parseInt(1)
    var ano_anterior = parseInt(ano_atual) - parseInt(1)

    var data_verao_inicio1 = new Date(`${ano_anterior}-12-22`)
    var data_verao_fim1 = new Date(`${ano_atual}-03-21`)

    var data_verao_inicio2 = new Date(`${ano_atual}-12-22`)
    var data_verao_fim2 = new Date(`${proximo_ano}-03-21`)

    var data_outono_inicio = new Date(`${ano_atual}-03-22`)
    var data_outono_fim = new Date(`${ano_atual}-06-21`)

    var data_inverno_inicio = new Date(`${ano_atual}-06-22`)
    var data_inverno_fim = new Date(`${ano_atual}-09-21`)

    var data_primavera_inicio = new Date(`${ano_atual}-09-22`)
    var data_primavera_fim = new Date(`${ano_atual}-12-21`)


    if(data_referencia == ''){
        alert('insira uma data')
        return
    }


    
    if(data_referencia > data_verao_inicio1 && data_referencia < data_verao_fim1){
        alert('Verão')
        return
    }
    if(data_referencia > data_outono_inicio && data_referencia < data_outono_fim){
        alert('Outono')
        return
    }
    if(data_referencia > data_inverno_inicio && data_referencia < data_inverno_fim){
        alert('Inverno')
        return
    }
    if(data_referencia > data_primavera_inicio && data_referencia < data_primavera_fim){
        alert('Primavera')
        return
    }
    if(data_referencia > data_verao_inicio2 && data_referencia < data_verao_fim2){
        alert('Verão')
        return
    }

}