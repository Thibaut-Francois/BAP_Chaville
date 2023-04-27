var a = [1,2,3,4,5,6,1,2,3,4,5,6]
.map( p => [p,Math.random()])
.sort( (a,b) => a[1]-b[1] )
.map( p => p[0])

console.log(a);
var pics = document.getElementsByTagName('img');

for(let i=0; i<pics.length; i++){
pics[i].src2 = 'pics/spr' + a[i] + '.png';
}

var step = 1;
var p1, p2;

document.addEventListener('click', function(e){
switch(step){
    case 1:
    if (e.target.tagName=='IMG'){
        e.target.src = e.target.src2;
        p1 = e.target;
        step = 2;
    }
    break;
    case 2:
    if (e.target.tagName=='IMG'){
        e.target.src = e.target.src2;
        p2 = e.target;
        step = 3;
    }
    timer = setTimeout(check, 800);
    break;
    case 3:
    clearTimeout(timer);
    check();
    break;
}
});
function check(){
  // Après chaque paire trouvée, vous pouvez afficher le message correspondant dans la modal.
// Par exemple, pour afficher "Coucou" lorsque la paire 1 est trouvée et "Bonjour" lorsque la paire 6 est trouvée :
if (p1 !== p2 && p1.src2 == p2.src2){
p1.replaceWith( document.createElement('span'))
p2.replaceWith( document.createElement('span'))

  //Définir le message correspondant en fonction de l'image trouvée
var message = "";
if (p1.src2.includes("spr1") || p2.src2.includes("spr1")) {
    message = "Évitez de prendre une douche trop longue pour économiser l'eau et l'énergie utilisées pour la chauffer.";
} else if (p1.src2.includes("spr2") || p2.src2.includes("spr2")) {
    message = "Éteignez les lumières et les appareils électroniques lorsque vous quittez une pièce.";
} else if (p1.src2.includes("spr3") || p2.src2.includes("spr3")) {
    message = "Évitez de laisser les robinets d'eau ouverts lorsque vous vous brossez les dents ou vous vous rasez.";
} else if (p1.src2.includes("spr4") || p2.src2.includes("spr4")) {
    message = "Utilisez un panier en tissu pour faire vos courses plutôt que des sacs en plastique à usage unique.";
} else if (p1.src2.includes("spr5") || p2.src2.includes("spr5")) {
    message = "Faites sécher votre linge à l'air libre plutôt que d'utiliser un sèche-linge.";
} else if (p1.src2.includes("spr6") || p2.src2.includes("spr6")) {
    message = "Utilisez des transports en commun, le vélo ou la marche pour les déplacements courts, plutôt que la voiture.";
}//Ajoutez d'autres conditions ici pour afficher des messages pour d'autres paires

  //Afficher le message correspondant dans la modal
var modal = document.getElementById("myModal");
var modalMessage = document.getElementById("modal-message");
modalMessage.innerHTML = message;
modal.style.display = "block";

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
var modal = document.getElementById("myModal");
modal.style.display = "none";
}
}
else {
    p2.src = p1.src = 'pics/spr0.png';
}

step = 1;
}

