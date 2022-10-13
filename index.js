const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-open');
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 800) {
        let slideIndex = 1;
        showSlides(slideIndex);
    }
});