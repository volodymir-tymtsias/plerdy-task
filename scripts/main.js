const menuOpenButton = document.querySelector('#menuOpenButton');
const mobileMenu = document.querySelector('#mobileMenu');

menuOpenButton.addEventListener('click', () => {
  menuOpenButton.classList.toggle('icon--menu');
  menuOpenButton.classList.toggle('icon--close');
  document.body.classList.toggle('page__body--with-menu');
  mobileMenu.classList.toggle('page__mobile-menu--active');
});