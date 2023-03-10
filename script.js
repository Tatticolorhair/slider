const sliderImages = document.querySelectorAll('.slider-img'),
    sliderLine = document.querySelector('.slider-line'),
    sliderDots = document.querySelectorAll('.slider-dot'),
    sliderBtnNext = document.querySelector('.arrow-right'),
    sliderBtnPrev = document.querySelector('.arrow-left'),
    sliderMenu = document.querySelectorAll('.city-menu'),
    otherCity = document.querySelectorAll('.city');



let sliderCount = 0,
sliderWidth;

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);


function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();


function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
    thisLink(sliderCount);
    thisCity(sliderCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
    thisLink(sliderCount);
    thisCity(sliderCount);

}


function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}


function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

function thisLink(index) {
    sliderMenu.forEach(item => item.classList.remove('active-link'));
    sliderMenu[index].classList.add('active-link');
}

function thisCity(index){
    otherCity.forEach(item =>item.classList.remove('active-city'));
    otherCity[index].classList.add('active-city');

}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
        thisLink(sliderCount);
        thisCity(sliderCount);

    })
});


sliderMenu.forEach((link, index) => {
    link.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
        thisLink(sliderCount);
        thisCity(sliderCount);

    })
});





