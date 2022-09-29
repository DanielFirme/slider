// Atalhos 
$ = document.querySelector.bind(document); 
$$ = document.querySelectorAll.bind(document);

let currentSlide = 0;

let totalSlides = $$('.slider--item').length;
const slider = $('.slider--width');
$('.slider--width').style.width = `calc(100vw * ${totalSlides + 1})`;
$('.slider--controls').style.height = `${$('.slider').clientHeight}px`;
const sliderControl = $$('.slider--control');

function goPrev(){
    const slides = $$('.slider--item');
    for(let i = 0; i < (slides.length - 1); i++){
        slider.append(slides[i]);
    }
}

function goNext(){
    const slides = $$('.slider--item');
    slides[0].style.marginLeft = `-${$('.slider--item').clientWidth}px`;
    slider.appendChild(slides[0]);
    
    updateMargin();
}

function updateMargin(){
    const newLocal = "0px";
    $$('.slider--item')[0].style.marginLeft = newLocal;
    $$('.slider--item')[1].style.marginLeft = `${$('.slider--item').clientWidth}px`;
}

sliderControl[0].addEventListener('click', goPrev);
sliderControl[1].addEventListener('click', goNext);

$$('.slider--item')[1].style.marginLeft = `${$$('.slider--item')[0].clientWidth}px`;

//setInterval(goNext, 5000);