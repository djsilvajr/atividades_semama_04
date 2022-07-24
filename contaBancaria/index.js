

let clientList = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    selected: true
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
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

}

function sacarDinheiro(id_cliente, valor_saque){

  clientList.filter(value => value.id === parseInt(id_cliente)).forEach(clientList => clientList.saldo = clientList.saldo - valor_saque)
  
}

function btnConfirmar(){

  let acao
  let valor
  let id_cliente
  let filtrar_cliente
  let cliente_info

  id_cliente = document.getElementById('inputClients').value

  if(id_cliente == ''){
    console.log('necessario um cliente selecionado')
    return 
  }

  acao = document.getElementById('inputOptions').value
  valor = document.getElementById('inputValue').value 
  filtrar_cliente = clientList.filter(value => value.id === parseInt(id_cliente))
  cliente_info = filtrar_cliente[0]


  if(valor < 1){
    alert(`saldo invalido, seu saldo atual é de ${cliente_info.saldo}, por favor preencha o campo saldo com um valor acima de 0 para executar a ação`)
    return 
  }

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

}