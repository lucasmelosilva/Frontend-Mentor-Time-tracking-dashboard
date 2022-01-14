let dados = [];


class ControllerDatas {
  static async fetchData() {
    return await fetch('../data.json')
      .then(response => {
        if (response.ok) {
          console.log('esta tudo certo')
          return response.json();
        }
      }).then(items => items.map(item => item))
  }


  async getData() {
    let data = await ControllerDatas.fetchData();
    data.forEach(item => console.log(item.title))
    return [...data];
  }
}