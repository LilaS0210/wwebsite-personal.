var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var images = document.querySelectorAll('.header-img');
var currentImage = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('inactive');
    slides[index].classList.remove('inactive');
    slides[index].classList.add('active');
    currentSlide = index;

    document.querySelectorAll('nav ul li a').forEach((link, idx) => {
        link.classList.toggle('active', idx === index);
    });
}

setInterval(() => {
    images[currentImage].style.opacity = 0;
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.opacity = 1;
}, 3000);
