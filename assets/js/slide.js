let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval;
const progressBar = document.querySelector('.progress-bar');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    resetProgressBar();
}

function nextSlide() {
    showSlide(currentSlide + 1);
    resetInterval();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetInterval();
}

function autoSlide() {
    nextSlide();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 5000);
    resetProgressBar();
}

function resetProgressBar() {
    progressBar.style.transition = 'none';
    progressBar.style.transform = 'scaleX(0)';
    setTimeout(() => {
        progressBar.style.transition = 'transform 5s linear';
        progressBar.style.transform = 'scaleX(1)';
    }, 50); // Pequeno delay para permitir o reset da transição
}

// Inicializa o primeiro slide
showSlide(currentSlide);

// Define o intervalo de tempo para troca automática (por exemplo, 3 segundos)
slideInterval = setInterval(autoSlide, 5000);