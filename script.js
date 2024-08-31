const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const navbar = document.querySelector('.navbar');
const listItems = document.querySelectorAll('.navbar ul li a');

const toggleMenu = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('hide');
  cross.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
};

menu.addEventListener('click', toggleMenu);
cross.addEventListener('click', toggleMenu);

listItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
      toggleMenu();
    }
  });
});
document.addEventListener('click', (event) => {
  if (navbar.classList.contains('active') && !navbar.contains(event.target) && !menu.contains(event.target) && !cross.contains(event.target)) {
    toggleMenu();
  }
});