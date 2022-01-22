const menu = $$('.menu_link')

menu.forEach(element => {
    element.addEventListener('click', handleMenu)
  }
)

function handleMenu(event) {
  removeActiveClass()
  addActiveClass(event.target)
  timeFrame = event.target.innerText.toLowerCase();
  updateCards(timeFrame)
}

function removeActiveClass() {
  menu.forEach(element => {
    element.classList.remove('active')
  })
}

function addActiveClass(element) {
  element.classList.add('active')
}
