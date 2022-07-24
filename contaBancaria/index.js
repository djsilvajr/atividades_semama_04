

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


