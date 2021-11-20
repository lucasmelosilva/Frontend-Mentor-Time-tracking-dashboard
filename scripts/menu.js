const menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
  const target = e.target;
  target.classList.toggle('active');
});