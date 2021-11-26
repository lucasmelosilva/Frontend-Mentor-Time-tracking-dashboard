const menu = document.querySelector('.menu');
const itemsMenu = [$('#item1'), $('#item2'), $('#item3')];

function removeActiveClass() {
  itemsMenu.forEach(item => {
    item.classList.remove('active');
  });
}

function addActiveClass(item) {
  item.classList.add('active');
}

menu.addEventListener('click', (e) => {
  const target = e.target;
  removeActiveClass();
  addActiveClass(target);
});