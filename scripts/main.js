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
const customSelect = document.querySelector(".custom-select");
const selectBtn = document.querySelector(".custom-select__button");
const selectArrow = document.querySelector(".custom-select__arrow");
const selectDropdown = document.querySelector(".custom-select__dropdown");
const selectedValue = document.querySelector(".custom-select__value");
const optionsList = document.querySelectorAll(".custom-select__dropdown-item");

let isErrorName = false;
let isErrorTel = false;

// open/close the dropdown in the select
selectBtn.addEventListener("click", () => {
  selectDropdown.classList.toggle("custom-select__dropdown--active");
  selectArrow.classList.toggle("custom-select__arrow--active");
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

// process the selected option in the select
optionsList.forEach((option) => {
  function handler(e) {
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.innerHTML = this.children[1].innerHTML;
      selectDropdown.classList.remove("custom-select__dropdown--active");
      selectArrow.classList.remove("custom-select__arrow--active");
    }
    if (e.key === "Enter") {
      e.preventDefault();
      selectedValue.innerHTML = this.children[1].innerHTML;
      selectDropdown.classList.remove("custom-select__dropdown--active");
      selectArrow.classList.remove("custom-select__arrow--active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);


  option.children[0].addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });
});

// close the dropdown when clicking outside the select
document.addEventListener("mousedown", (e) => {
  if (
    selectDropdown.classList.contains("custom-select__dropdown--active") &&
    !customSelect.contains(e.target)
  ) {
    selectDropdown.classList.remove("custom-select__dropdown--active");
    selectArrow.classList.remove("custom-select__arrow--active");
  }
});

// open/close the mobile menu
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

//slider control
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

// pop-up closing processing function
function closePopUp() {
  closePopUpButton.removeEventListener("click", closePopUp);
  document.body.classList.remove("page__body--with-menu");
  pagePopUp.classList.remove("page__pop-up--active");
  deleteNameError();
  deleteTelError();
}

// popup opening handling function
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

// validation of the form when sending
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

  //if there are no errors, we send the form
  if (!isErrorName && !isErrorTel) {
    form.submit();
    // form.reset();
  }
});

// function to remove an error in the name field
function deleteNameError() {
  if (isErrorName) {
    nameError.classList.remove("form__error--active");
    inputName.classList.remove("form__form-field--error");
    isErrorName = false;
  }
}

// function to remove an error in the phone field
function deleteTelError() {
  if (isErrorTel) {
    telError.classList.remove("form__error--active");
    inputTel.classList.remove("form__form-field--error");
    isErrorTel = false;
  }
}

// removing errors when starting to input in the fields
inputName.oninput = deleteNameError;
inputTel.oninput = deleteTelError;
