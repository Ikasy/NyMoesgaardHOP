const scrollable = document.querySelector('.scrollable');
const hoeje = document.getElementById("hoeje");
const rune = document.getElementById("rune");

// Gør at der kan scrolles horisontalt
scrollable.addEventListener('wheel', function (event) {
    if (event.deltaY !== 0) {  // Kontrollerer, om der er en vertikal scroll
        this.scrollLeft += event.deltaY;  // Scroll horisontalt baseret på vertikal scroll
        event.preventDefault();  // Forhindrer standard vertikal scroll
    }
});


// styrrer animationernes start ved scroll
let animationTriggeredHoeje = false; 
let animationTriggeredRune = false; 
scrollable.addEventListener('scroll', function () {
    if (!animationTriggeredHoeje && scrollable.scrollLeft >= 750) {
        const paths = hoeje.querySelectorAll('path');
        paths.forEach((path) => {
            path.classList.add('animate-line');
        });
        animationTriggeredHoeje = true;
    }
    if (!animationTriggeredRune && scrollable.scrollLeft >= 1500) {
        const paths = rune.querySelectorAll('path');
        paths.forEach((path) => {
            path.classList.add('animate-line');
        });
        animationTriggeredRune = true; 
    }
});