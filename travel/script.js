'use strict'
// BURGER MENU 
const BURGER = document.querySelector(".burger");
const blockPage = document.querySelector(".block-page");
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