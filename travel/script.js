'use strict'

// POPUP 
const popup = document.querySelector(".popup");
const blockPage = document.querySelector(".block-page");
const OpenPopup = document.querySelector(".show-modal");
const OpenPopupMobile = document.querySelector(".show-modal-mobile");
const overlay = document.querySelector(".overlay");


OpenPopup.addEventListener("click", function (e) {
  popup.classList.remove("hidden");
  document.body.classList.toggle("_lock");
  blockPage.classList.toggle("_active");
});

blockPage.addEventListener("click", () => {
  popup.classList.add("hidden");
  blockPage.classList.remove("_active");
  document.body.classList.remove("_lock");
});

OpenPopupMobile.addEventListener("click", function (e) {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
});


// BURGER MENU 
const BURGER = document.querySelector(".burger");
const navigation = document.querySelector(".header__navigation");

if (BURGER) {
  BURGER.addEventListener("click", function (e) {
    BURGER.classList.toggle("_active");
    navigation.classList.toggle("_active");
    document.body.classList.toggle('_lock');
    blockPage.classList.toggle("_active");
  })
}

navigation.addEventListener("click", () => {
  BURGER.classList.remove("_active");
  navigation.classList.remove("_active");
  blockPage.classList.remove("_active");
  document.body.classList.remove("_lock");
});

blockPage.addEventListener("click", () => {
  BURGER.classList.remove("_active");
  navigation.classList.remove("_active");
  blockPage.classList.remove("_active");
  document.body.classList.remove("_lock");
});

// SLIDER

const slider = function () {
  const slides = document.querySelectorAll(".destinations__slide");
  const slideLeft = document.querySelector(".destinations__slide-left");
  const slideRight = document.querySelector(".destinations__slide-right");
  const dotContainer = document.querySelector(".destinations__dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("dot--active"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${50 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  slideRight.addEventListener("click", nextSlide);
  slideLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("__dot")) {
      const {
        slide
      } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();