// Variables globales
let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
let timer, elements, slides, slideHeight, speed, transition;

window.onload = () => {
    // On récupère le diaporama
    const diapo = document.querySelector(".diapo");
    // On récupère le data-speed
    speed = diapo.dataset.speed;
    transition = diapo.dataset.transition;

    elements = document.querySelector(".elements");

    // On clone la 1ère image
    let firstImage = elements.firstElementChild.cloneNode(true);

    // On injecte le clone à la fin du diapo
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);

    // On récupère la hauteur d'une slide
    slideHeight = diapo.getBoundingClientRect().height;

    // On automatise le défilement
    timer = setInterval(slideNext, speed);

    // On gère l'arrêt et la reprise
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);
}

/**
 * Cette fonction fait défiler le diaporama vers le bas
 */
function slideNext(){
    // On incrémente le compteur
    compteur++;
    elements.style.transition = transition+"ms linear";

    let decal = -slideHeight * compteur;
    elements.style.transform = `translateY(${decal}px)`;

    // On attend la fin de la transition et on "rembobine" de façon cachée
    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateY(0)";
        }
    }, transition);
}

/**
 * Cette fonction fait défiler le diaporama vers le haut
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--;
    elements.style.transition = transition+"ms linear";

    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = -slideHeight * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateY(${decal}px)`;
        setTimeout(slidePrev, 1);
    }

    let decal = -slideHeight * compteur;
    elements.style.transform = `translateY(${decal}px)`;
}

function stopTimer(){
    clearInterval(timer);
}

function startTimer(){
    timer = setInterval(slideNext, speed);
}
