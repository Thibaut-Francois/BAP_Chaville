// Variables globales
let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
let elements, slides, slideHeight, speed, animationId;

window.onload = () => {
  // On récupère le diaporama
  const diapo = document.querySelector(".diapo");
  // On récupère le data-speed
  speed = 4500;
  elements = document.querySelector(".elements");

  // On clone la 1ère image
  let firstImage = elements.firstElementChild.cloneNode(true);

  // On injecte le clone à la fin du diapo
  elements.appendChild(firstImage);

  slides = Array.from(elements.children);

  // On récupère la hauteur d'une slide
  slideHeight = diapo.getBoundingClientRect().height;

  // On centre l'image horizontalement
  elements.style.transform = `translateX(-${elements.firstElementChild.getBoundingClientRect().width / 35}px)`;

  // On automatise le défilement
  startAnimation();

  // On gère l'arrêt et la reprise
  diapo.addEventListener("mouseover", stopAnimation);
  diapo.addEventListener("mouseout", startAnimation);
};

/**
 * Cette fonction fait défiler le diaporama vers le bas
 */
function slideNext() {
  // On incrémente le compteur
  compteur++;
  elements.style.transition = `transform ${speed}ms linear`;

  let decal = -slideHeight * compteur;
  elements.style.transform = `translateY(${decal}px)`;

  // Si on a atteint la dernière slide, on remet le compteur à zéro et on réinitialise le positionnement des images
  if (compteur >= slides.length) {
    compteur = 0;
    elements.style.transition = "none";
    elements.style.transform = `translateY(0)`;
  }
}

/**
 * Cette fonction fait défiler le diaporama vers le haut
 */
function slidePrev() {
  // On décrémente le compteur
  compteur--;
  elements.style.transition = `transform ${speed}ms linear`;

  if (compteur < 0) {
    compteur = slides.length - 1;
    let decal = -slideHeight * compteur;
    elements.style.transition = "none";
    elements.style.transform = `translateY(${decal}px)`;
  } else {
    let decal = -slideHeight * compteur;
    elements.style.transform = `translateY(${decal}px)`;
  }
}

function startAnimation() {
  stopAnimation(); // On s'assure d'arrêter l'animation précédente avant de démarrer une nouvelle
  animationId = setInterval(slideNext, speed);
}

function stopAnimation() {
  clearInterval(animationId);
}
