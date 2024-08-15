const menuOpenButton = document.querySelector('#menuOpenButton');
const mobileMenu = document.querySelector('#mobileMenu');

menuOpenButton.addEventListener('click', () => {
  menuOpenButton.classList.toggle('icon--menu');
  menuOpenButton.classList.toggle('icon--close');
  document.body.classList.toggle('page__body--with-menu');
  mobileMenu.classList.toggle('page__mobile-menu--active');
});

const newArrivalsSwiper = new Swiper('.reasons__container', {
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      pagination: {
        enabled: false,
      },
    },
    1440: {
      slidesPerView: 4,
      pagination: {
        enabled: false,
      },
    },
  },
});