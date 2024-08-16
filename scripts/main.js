const menuOpenButton = document.querySelector('#menuOpenButton');
const mobileMenu = document.querySelector('#mobileMenu');
const contactButton = document.querySelector('#contactSales');
const contactMobileButton = document.querySelector('#contactSalesMobile');
const runToolButton = document.querySelector('#runTool');
const boostMyWebsiteButton = document.querySelector('#boostMyWebsite');
const popUpWindow = document.querySelector('#popUp');
const closePopUpButton = document.querySelector('#closePopUp');
const pageFill = document.querySelector('.page__fill');


menuOpenButton.addEventListener('click', () => {
  menuOpenButton.classList.toggle('icon--menu');
  menuOpenButton.classList.toggle('icon--close');
  mobileMenu.classList.toggle('page__mobile-menu--active');

  if (!popUpWindow.classList.contains('pop-up--active')) {
    document.body.classList.toggle('page__body--with-menu');
  }

  if (popUpWindow.classList.contains('pop-up--active')) {
    popUpWindow.classList.remove('pop-up--active');
  }

  if (pageFill.classList.contains('page__fill--active')) {
    pageFill.classList.remove('page__fill--active');
  }
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

function closePopUp() {
  document.body.classList.remove('page__body--with-menu');
  popUpWindow.classList.remove('pop-up--active');
  pageFill.classList.remove('page__fill--active');
}

function openPupUp() {
  if (mobileMenu.classList.contains('page__mobile-menu--active')) {
    menuOpenButton.classList.toggle('icon--menu');
    menuOpenButton.classList.toggle('icon--close');
    mobileMenu.classList.toggle('page__mobile-menu--active');
  }

  popUpWindow.classList.add('pop-up--active');
  document.body.classList.add('page__body--with-menu');
  pageFill.classList.add('page__fill--active');

  closePopUpButton.addEventListener('click', closePopUp);
}

contactButton.addEventListener('click', openPupUp);
contactMobileButton.addEventListener('click', openPupUp);
runToolButton.addEventListener('click', openPupUp);
boostMyWebsiteButton.addEventListener('click', openPupUp);