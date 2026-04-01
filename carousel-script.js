let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const slidesContainer = document.querySelector('.carousel-slides');
const totalSlides = slides.length;

setInterval(() => {
    currentSlide++;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    if (currentSlide === totalSlides - 1) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            currentSlide = 0;
            slidesContainer.style.transform = 'translateX(0)';
            setTimeout(() => {
                slidesContainer.style.transition = 'transform 1.2s ease-in-out';
            }, 50);
        }, 1200);
    }
}, 4000);
