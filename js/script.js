var menu = document.querySelector('.menuHamburguesa'); // selector
var loader = document.getElementById('loader-wrapper'); // recarga

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".navegacion" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
window.addEventListener('load', function(){
    loader.style.display = 'none';
})