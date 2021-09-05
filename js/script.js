// selector
var menu = document.querySelector('.menuHamburguesa');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".navegacion" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);