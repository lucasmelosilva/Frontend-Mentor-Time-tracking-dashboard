let timeFrame = 'weekly'; // valor padrao
let data = {}
const sectionCards = $('.activities')

fetch('../data.json')
  .then(response => response.json())
  .then(jsonResponse => {
    jsonResponse.forEach(element => {
      
      let card = creatRecularCard(element, timeFrame)
      sectionCards.insertAdjacentHTML('beforeend', card)
    })
  })

function updateCards(timeFrame) {
  console.log(timeFrame)
}

function creatRecularCard(element, timeFrame) {

  let title = element.title;
  let current = element['timeframes'][timeFrame].current;
  let previous = element['timeframes'][timeFrame].previous;

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
                <p class="content_previous">Last  - ${previous}hrs</p>
              </div>
            </div>
          </section>`
}