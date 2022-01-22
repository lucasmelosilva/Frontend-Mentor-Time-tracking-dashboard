let timeFrame = 'monthly'; // valor padrao
let data = {}
const sectionCards = $('.activities')
let regularCards;

// pega as infomacoes do data.json
fetch('../data.json')
  // se a requisicao for bem sucedida retorna um objeto 
  .then(response => response.json())
  .then(jsonResponse => {
    jsonResponse.forEach(element => {
      // chama a funcao que criara o card passando o element {} e o timeframe
      let card = creatRecularCard(element, timeFrame)
      // insertAdjacentHTML insere um texto no padrao html ou xml em um no do DOM passando a posicao
      sectionCards.insertAdjacentHTML('beforeend', card)

      jsonResponse.forEach(element => {
        data[element.title] = element.timeframes;
      })

      // guarda os cards
      regularCards = $$('.activity');
    })
  })

function updateCards(timeFrame) {
  regularCards.forEach(card => updateCard(card, timeFrame))
}

function updateCard(card, timeFrame) {

  const timeframeMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  }
  const $ = card.querySelector.bind(card);
  const title = $('.content_title').innerText
  $('.content_current').innerText = data[title][timeFrame].current + 'hrs'
  $('.content_previous').innerText = timeframeMsg[timeFrame] + ' - ' + data[title][timeFrame].previous + 'hrs'
}

// cria card
function creatRecularCard(element, timeFrame) {

  let title = element.title;
  let current = element['timeframes'][timeFrame].current;
  let previous = element['timeframes'][timeFrame].previous;

  const timeframeMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  }

  return `<section class="activity ${title.toLowerCase().replace(/\s/g, '-')}">
            <div class="activity-content">
              <div class="activity-content_header">
                <h4 class="content_title">${title}</h4>
                <div class="wrapper">
                  <img src="assets/images/icon-ellipsis.svg" alt="...">
                </div>
              </div>

              <div class="activity-content_datails">
                <p class="content_current">${current}hrs</p> 
                <p class="content_previous">${timeframeMsg[timeFrame]} - ${previous}hrs</p>
              </div>
            </div>
          </section>`
}