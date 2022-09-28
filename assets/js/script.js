// Atalhos 
$ = document.querySelector.bind(document); 
$$ = document.querySelectorAll.bind(document);

let currentSlide = 0;

let totalSlides = $$('.slider--item').length;
$('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
$('.slider--controls').style.height = `${$('.slider').clientHeight}px`;
const sliderControl = $$('.slider--control');

function goPrev(){
    currentSlide--
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext(){
    currentSlide++
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    const sliderItemWidth = $('.slider--item').clientWidth;
    $('.slider--width').style.marginLeft = 
    `-${(sliderItemWidth * currentSlide)}px`;
}

sliderControl[0].addEventListener('click', goPrev);
sliderControl[1].addEventListener('click', goNext);

//setInterval(goNext, 5000);