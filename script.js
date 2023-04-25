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
