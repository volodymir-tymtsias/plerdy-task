const menuOpenButton = document.querySelector("#menuOpenButton");
const mobileMenu = document.querySelector("#mobileMenu");
const contactButton = document.querySelector("#contactSales");
const contactMobileButton = document.querySelector("#contactSalesMobile");
const runToolButton = document.querySelector("#runTool");
const boostMyWebsiteButton = document.querySelector("#boostMyWebsite");
const closePopUpButton = document.querySelector("#closePopUp");
const pagePopUp = document.querySelector(".page__pop-up");
const form = document.querySelector(".form");
const inputName = document.querySelector("#inputName");
const nameError = document.querySelector("#nameError");
const inputTel = document.querySelector("#inputTel");
const telError = document.querySelector("#telError");

let isErrorName = false;
let isErrorTel = false;

menuOpenButton.addEventListener("click", () => {
  menuOpenButton.classList.toggle("icon--menu");
  menuOpenButton.classList.toggle("icon--close");
  mobileMenu.classList.toggle("page__mobile-menu--active");

  if (!pagePopUp.classList.contains("page__pop-up--active")) {
    document.body.classList.toggle("page__body--with-menu");
  }

  if (pagePopUp.classList.contains("page__pop-up--active")) {
    pagePopUp.classList.remove("page__pop-up--active");
  }
});

const newArrivalsSwiper = new Swiper(".reasons__container", {
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
  closePopUpButton.removeEventListener("click", closePopUp);
  document.body.classList.remove("page__body--with-menu");
  pagePopUp.classList.remove("page__pop-up--active");
  deleteNameError();
  deleteTelError();
}

function openPupUp() {
  if (mobileMenu.classList.contains("page__mobile-menu--active")) {
    menuOpenButton.classList.toggle("icon--menu");
    menuOpenButton.classList.toggle("icon--close");
    mobileMenu.classList.toggle("page__mobile-menu--active");
  }

  document.body.classList.add("page__body--with-menu");
  pagePopUp.classList.add("page__pop-up--active");

  closePopUpButton.addEventListener("click", closePopUp);
}

contactButton.addEventListener("click", openPupUp);
contactMobileButton.addEventListener("click", openPupUp);
runToolButton.addEventListener("click", openPupUp);
boostMyWebsiteButton.addEventListener("click", openPupUp);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!inputName.value.trim()) {
    nameError.classList.add("form__error--active");
    inputName.classList.add("form__form-field--error");
    isErrorName = true;
  }

  if (!inputTel.value.trim()) {
    telError.classList.add("form__error--active");
    inputTel.classList.add("form__form-field--error");
    isErrorTel = true;
  }

  if (!isErrorName && !isErrorTel) {
    form.reset();
  }
});

function deleteNameError() {
  if (isErrorName) {
    nameError.classList.remove("form__error--active");
    inputName.classList.remove("form__form-field--error");
    isErrorName = false;
  }
}

function deleteTelError() {
  if (isErrorTel) {
    telError.classList.remove("form__error--active");
    inputTel.classList.remove("form__form-field--error");
    isErrorTel = false;
  }
}

inputName.oninput = deleteNameError;
inputTel.oninput = deleteTelError;
