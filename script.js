// Hero id/klasser
const heroTitle = document.getElementById("heroTitle");
const heroUnderTitle = document.getElementById("heroUnderTitle");
const hero = document.querySelector(".hero");
const dots = document.querySelectorAll(".dot");
const heroButton = document.getElementById("heroButton");

// Arrays til hero
let heroTitles = [
    "Moder jord",
    "Jernalderen",
    "Kriger"
];
let heroUnderTitles = [
    "11. okt. 2024 - 10. aug. 2025",
    "Mød fortidens moselig",
    "22. mar. 2024 - Efteråret 2025"
];
let heroBackgrounds = [
    "url('images/ModerJordHero.png') no-repeat center/cover",
    "url('images/onkelgrauballe.jpg') no-repeat center/cover",
    "url('images/KrigerHero.png') no-repeat center/cover"
];
let heroLinks = [
    "moderjord.html",
    "jernalderen.html",
    "#"
]

let index = 0;

// Funktion til at skifte heroens information baseret på ovenstående arrays
function updateHero() {
    heroTitle.innerHTML = heroTitles[index];
    heroUnderTitle.innerHTML = heroUnderTitles[index];
    hero.style.background = heroBackgrounds[index];
    dots.forEach(dot => {
        dot.style.background = "#F6F3EF";
    });
    dots[index].style.background = "unset"
    heroButton.href = heroLinks[index];

    // tager index og plusser med 1 indtil den når længden af arrays og nulstiller
    index = (index + 1) % heroTitles.length;

    setTimeout(updateHero, 5000);
}
// Initierende kald til hero
if (heroTitle != null){
    updateHero();
}

// Nyhedsbrev indhentning af id'er
const newsletterCTA = document.getElementById("newsletterCTA");
const newsletterContent = document.getElementById("newsletterContent");
const newsletterinput = document.getElementById("newsletterinput");
const email = document.getElementById("email");

// nyhedsbrevsfunktion der på en telefon åbner tekstfeltet og skjuler det igen baseret på hvor mange gange der bliver trykket
let timesClicked = 0
function openNewsletter(e) {
    e.preventDefault();
    console.log(window.innerWidth)
    if (window.innerWidth < 600 && timesClicked <= 1) {
        newsletterCTA.style.display = "block"
        newsletterContent.style.backgroundColor = "#fff"
        newsletterinput.style.width = "100%"
        newsletterContent.style.marginTop = "1rem"
        newsletterCTA.style.padding = "1rem 5%"
        newsletterCTA.style.height = "fit-content"
        email.style.display = "unset"
        email.style.width = "100%"
        timesClicked++
    }
    if (timesClicked == 2) {
        email.value = '';
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Du er nu tilmeldt nyhedsbrevet!';
        newsletterCTA.appendChild(confirmationMessage);
        setTimeout(() => {
            newsletterCTA.style.display = "flex";
            newsletterContent.style.backgroundColor = "";
            newsletterinput.style.width = "";
            newsletterContent.style.marginTop = "";
            newsletterCTA.style.padding = "";
            newsletterCTA.style.height = "";
            email.style.display = "none";
            email.style.width = "";
            timesClicked = 0;
            confirmationMessage.remove();
        }, 3000);
    }

}

// Burger id/klasse
const burgerMenu = document.getElementById("burgerMenu");
const header = document.querySelector("header");
const navIcon = document.getElementById("navIcon");

// toggle burgermenu på telefon
function toggleBurger(e) {
    e.preventDefault();
    burgerMenu.style.display = (burgerMenu.style.display === 'flex') ? 'none' : 'flex';
    header.style.backgroundColor = (header.style.backgroundColor === '#121212') ? '#121212cc' : '#121212';
    navIcon.classList.contains('fa-xmark') ? navIcon.classList.remove('fa-xmark') : navIcon.classList.add('fa-xmark');
}


// Scroll funktion til sliderene
document.addEventListener("DOMContentLoaded", () => {
    const exhibitContainers = document.querySelectorAll(".exhibitContainer");
    exhibitContainers.forEach(container => {
        const leftArrow = container.querySelector(".arrows svg:first-child");
        const rightArrow = container.querySelector(".arrows svg:last-child");
        const exhibits = container.querySelector(".exhibits");

        //Funktion der viser og skjuler pile baseret på scroll positionen
        const updateArrowVisibility = () => {
            leftArrow.style.visibility = exhibits.scrollLeft > 0 ? "visible" : "hidden";
            rightArrow.style.visibility = exhibits.scrollLeft < exhibits.scrollWidth - exhibits.clientWidth - 1 ? "visible" : "hidden";

        };

        // Scroll venstre 
        leftArrow.addEventListener("click", () => {
            exhibits.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });

        // Scroll højre
        rightArrow.addEventListener("click", () => {
            exhibits.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });

        exhibits.addEventListener("scroll", updateArrowVisibility);

        updateArrowVisibility();
    });
});
