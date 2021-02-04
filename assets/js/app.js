const btnMenu = document.querySelector('button.btn-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');

btnMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
})