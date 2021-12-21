const menu = $('.menu');
const itemsMenu = $$('.menu-item');

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