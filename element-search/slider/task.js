let currentSliderItem = 0;

const sliderItems = document.querySelectorAll('.slider__items > div.slider__item');
let maxIndexSliderItem = sliderItems.length - 1;
const sliderArrowPrev = document.querySelector('.slider__arrows > div.slider__arrow_prev');
sliderArrowPrev.onclick = function () {
    sliderItems[currentSliderItem].classList.toggle('slider__item_active');
    if (currentSliderItem === 0) {
        currentSliderItem = maxIndexSliderItem;
    } else {
        currentSliderItem--;
    }
    sliderItems[currentSliderItem].classList.toggle('slider__item_active');

};

const sliderArrowNext = document.querySelector('.slider__arrows > div.slider__arrow_next');
sliderArrowNext.onclick = function () {
    sliderItems[currentSliderItem].classList.toggle('slider__item_active');
    if (currentSliderItem === maxIndexSliderItem) {
        currentSliderItem = 0;
    } else {
        currentSliderItem++;
    }
    sliderItems[currentSliderItem].classList.toggle('slider__item_active');

};