"use strict";

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

const signIn = document.querySelector(".sign");

signIn.addEventListener("click", () => {
  const email = document.getElementsByTagName("input")[0].value;
  const password = document.getElementsByTagName("input")[1].value;
  alert("Your e-mail: " + email + " " + "Your password: " + password);
});

// BURGER MENU
const BURGER = document.querySelector(".burger");
const navigation = document.querySelector(".header__navigation");

if (BURGER) {
  BURGER.addEventListener("click", function (e) {
    BURGER.classList.toggle("_active");
    navigation.classList.toggle("_active");
    document.body.classList.toggle("_lock");
    blockPage.classList.toggle("_active");
  });
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

// DESKTOP SLIDER
const slides = document.querySelector(".destinations__slider");
const slideOne = document.querySelector("#slide-1");
const slideTwo = document.querySelector("#slide-2");
const slideThree = document.querySelector("#slide-3");

let curSlide = 0;
const dotOne = document.querySelector(".dot-1");
const dotTwo = document.querySelector(".dot-2");
const dotThree = document.querySelector(".dot-3");

slideOne.addEventListener("click", function () {
  curSlide = 0;
  slides.style.left = -curSlide + "px";
  dotOne.classList.add("dot--active");
  dotTwo.classList.remove("dot--active");
  dotThree.classList.remove("dot--active");
});

slideTwo.addEventListener("click", function () {
  curSlide = 860;
  slides.style.left = -curSlide + "px";
  dotOne.classList.remove("dot--active");
  dotTwo.classList.add("dot--active");
  dotThree.classList.remove("dot--active");
});

slideThree.addEventListener("click", function () {
  curSlide = 1720;
  slides.style.left = -curSlide + "px";
  dotOne.classList.remove("dot--active");
  dotTwo.classList.remove("dot--active");
  dotThree.classList.add("dot--active");
});

dotOne.addEventListener("click", function () {
  curSlide = 0;
  slides.style.left = -curSlide + "px";
  dotOneActive();
});

dotTwo.addEventListener("click", function () {
  curSlide = 860;
  slides.style.left = -curSlide + "px";
  dotTwoActive();
});

dotThree.addEventListener("click", function () {
  curSlide = 1720;
  slides.style.left = -curSlide + "px";
  dotThreeActive();
});

function dotOneActive() {
  dotOne.classList.add("dot--active");
  dotTwo.classList.remove("dot--active");
  dotThree.classList.remove("dot--active");
}

function dotTwoActive() {
  dotOne.classList.remove("dot--active");
  dotTwo.classList.add("dot--active");
  dotThree.classList.remove("dot--active");
}

function dotThreeActive() {
  dotOne.classList.remove("dot--active");
  dotTwo.classList.remove("dot--active");
  dotThree.classList.add("dot--active");
}

// MOBILE SLIDER
const sliderMobile = function () {
  const slidesMobile = document.querySelectorAll(".destinations__slide-mobile");
  const btnLeft = document.querySelector(".destinations__arrow-left");
  const btnRight = document.querySelector(".destinations__arrow-right");
  const dotContainer = document.querySelector('.destinations__dots-mobile');
  let curSlideMobile = 0;
  const maxSlide = slidesMobile.length;

  const goToSlide = function (slide) {
    slidesMobile.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i-slide)}%)`)
    );
  };
  goToSlide(0);

  // Next slide
  const nextSlide = function () {
    if (curSlideMobile === maxSlide - 1) {
      curSlideMobile = 0;
    } else {
      curSlideMobile++;
    }
    goToSlide(curSlideMobile);
    activateDot(curSlideMobile);
  }

  const prevSlide = function () {
    if (curSlideMobile === 0) {
      curSlideMobile = maxSlide - 1;
    } else {
      curSlideMobile--;
    }
    goToSlide(curSlideMobile);
    activateDot(curSlideMobile);
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  const createDots = function () {
    slidesMobile.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dot-mobile" data-slide="${i}"></button>`
      );
    });
  };
  createDots();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dot-mobile')
      .forEach(dot => dot.classList.remove('dot-mobile--active'));

    document
      .querySelector(`.dot-mobile[data-slide="${slide}"]`)
      .classList.add('dot-mobile--active');
  };

  activateDot(0);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot-mobile')) {
      const {
        slide
      } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliderMobile();