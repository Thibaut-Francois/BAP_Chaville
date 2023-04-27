$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        //   =======scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // s===========lide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
});

const images = document.querySelectorAll(".image");
const descriptions = document.querySelectorAll(".description");

// Masquer toutes les descriptions sauf la première
descriptions.forEach((description, index) => {
  if (index !== 0) {
    description.style.display = "none";
  } else {
    description.classList.add("active-description");
  }
});

// Ajout d'un gestionnaire d'événements pour chaque image
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    // Suppression de la classe active sur toutes les images
    images.forEach((image) => image.classList.remove("active"));

    // Ajout de la classe active à l'image sélectionnée
    image.classList.add("active");

    // Masquer toutes les descriptions sauf celle correspondante à l'image sélectionnée
    descriptions.forEach((description, index) => {
      if (index === Array.from(images).indexOf(image)) {
        description.style.display = "block";
        description.classList.add("active-description");
      } else {
        description.style.display = "none";
        description.classList.remove("active-description");
      }
    });
  });
});
images.forEach(image => {
  image.addEventListener('click', () => {
    // Parcourt chaque image et enlève la classe "bordure"
    images.forEach(otherImage => {
      otherImage.classList.remove('bordure');
      otherImage.style.filter = 'blur(2px)';
    });
    // Ajoute la classe "bordure" à l'élément cliqué
    image.classList.add('bordure');
    image.style.filter = 'none';
  });
});
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
