new CircleType(document.querySelector('.curve-text'))
  .radius(60);

// get year using js?
document.querySelector(".year").innerHTML = new Date().getFullYear();

let ham = document.querySelector('.hamburger');
let menu = document.querySelector('.main-menu');

ham.addEventListener('click', ()=> {
  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle('menu-active');
  ham.classList.toggle('ham-active');
}