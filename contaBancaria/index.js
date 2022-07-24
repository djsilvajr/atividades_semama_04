

let clientList = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    senha : '123456',
    selected: true
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    senha : '1234567',
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
    senha : '12345678',
    },
];

let optionList = document.getElementById('inputClients').options;


function inicializador(){
  clientList.forEach(client =>
    optionList.add(
      new Option(client.nome, client.id)
    )
  );
}


function depositarDinheiro(id_cliente, valor){
  //poderia ser float com o .toFixed(2);
  clientList.filter(value => value.id === parseInt(id_cliente)).forEach(clientList => clientList.saldo = parseInt(clientList.saldo) + parseInt(valor))
  console.log(clientList)
  alert('depósito efetuado com sucesso')

}

function sacarDinheiro(id_cliente, valor){

  clientList.filter(value => value.id === parseInt(id_cliente)).forEach(clientList => clientList.saldo = clientList.saldo - valor)
  console.log(clientList)
  alert('saque efetuado com sucesso')
}

function verificaValorDigitado(valor, saldo_atual){
  if(valor < 1){
    alert(`saldo invalido, seu saldo atual é de ${saldo_atual}, por favor preencha o campo saldo com um valor acima de 0 para executar a ação`)
    return 
  }
}

function verificaSenha(senhaCliente, senhaDigitada){

  let msg

  if(senhaCliente == senhaDigitada){
    msg = true
  }else{
    msg = false
  }

  return msg
}

function btnConfirmar(){

  let acao
  let valor
  let id_cliente
  let filtrar_cliente
  let cliente_info
  let senha
  let verificador_senha

  id_cliente = document.getElementById('inputClients').value

  if(id_cliente == ''){
    alert('necessario um cliente selecionado')
    return 
  }

  acao = document.getElementById('inputOptions').value
  valor = document.getElementById('inputValue').value 
  senha = document.getElementById('inputSenha').value 
  filtrar_cliente = clientList.filter(value => value.id === parseInt(id_cliente))
  cliente_info = filtrar_cliente[0]




  verificador_senha = verificaSenha(cliente_info.senha, senha)

  if(verificador_senha == true){
    verificaValorDigitado(valor, cliente_info.saldo)


    if(acao == 1){
      if(valor > cliente_info.saldo){
        alert(`não foi possivel realizar o saque, seu saldo atual é de ${cliente_info.saldo}`)
        return 
      }
  
      sacarDinheiro(id_cliente, valor)
      return
    }
    
    if(acao == 2){
      depositarDinheiro(id_cliente, valor)
      return
    }
  }else{
    alert('Senha incorreta')
  }

}