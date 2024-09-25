const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagination = document.getElementById('pagination');
let index = 0;
let interval;


function showSlide(n) {
    if (n < 0) {
        index = slide.length - 1;
    } else if (n >= slide.length) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;

    updatePagination();
}


function updatePagination() {
    pagination.innerHTML = '';
    slide.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === index) dot.classList.add('active');
        dot.addEventListener('click', () => {
            showSlide(i);
            resetInterval();
        });
        pagination.appendChild(dot);
    });
}


function prevSlide() {
    index--;
    showSlide(index);
}


function nextSlide() {
    index++;
    showSlide(index);
}


function startSlideshow() {
    interval = setInterval(nextSlide, 5000);
}


prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});


showSlide(index);
startSlideshow();
