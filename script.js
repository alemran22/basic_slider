const rightButton = document.querySelector(".right-arrow");
const leftButton = document.querySelector(".left-arrow");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".images");
let sliderNumber = 1;
const length = images.length;

// right button
rightButton.addEventListener("click", function () {
    if (sliderNumber < length) {
        slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
        sliderNumber++;
    } else {
        slider.style.transform = `translateX(0px)`;
        sliderNumber = 1;
    }
});

// left button

leftButton.addEventListener("click", function () {
    if (sliderNumber > 1) {
        slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
        sliderNumber--;
    } else {
        slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
        sliderNumber = length;
    }
});