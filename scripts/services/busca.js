let dados = [];

fetch('../data.json')
  .then(response => {
    if(response.ok) {
      console.log('esta tudo certo')
      return response.json();
    }
  }).then(dados => {
    let items = dados.map(dado => dado);
    
    let novoArrayDeItems = items.map(item => {
      return item
    })

    dados =  [...novoArrayDeItems]
    dados.forEach(dado => console.log(dado.title))
  })
  .catch(error => console.log("Error Error "+ error.mensage))