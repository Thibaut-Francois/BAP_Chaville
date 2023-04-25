// Liste de mots à deviner
var mots = [
	{ mot: "abeille", indice: "Insecte pollinisateur", texte: "Les abeilles sont essentielles à la pollinisation des plantes." },
	{ mot: "biodiversité", indice: "Variété des espèces vivantes sur Terre", texte: "La biodiversité est menacée par la destruction des habitats naturels." },
	{ mot: "champignon", indice: "Organisme vivant qui se nourrit de matière organique en décomposition", texte: "Les champignons ont un rôle important dans la décomposition de la matière organique." },
	{ mot: "déforestation", indice: "Destruction des forêts", texte: "La déforestation a un impact négatif sur la biodiversité et le climat." },
	{ mot: "écologie", indice: "Science qui étudie les relations entre les êtres vivants et leur environnement", texte: "L'écologie est une science essentielle pour comprendre les enjeux environnementaux actuels." },
	{ mot: "faune", indice: "Ensemble des animaux sauvages d'une région donnée", texte: "La faune est menacée par la destruction des habitats naturels et le changement climatique." },
	{ mot: "gaz à effet de serre", indice: "Gaz qui contribuent au réchauffement climatique", texte: "Les gaz à effet de serre sont produits par les activités humaines et ont un impact sur le climat." },
	{ mot: "hérisson", indice: "Petit mammifère couvert de piquants", texte: "Le hérisson est un animal nocturne qui se nourrit d'insectes et d'autres petits animaux." },
	{ mot: "insecte", indice: "Classe d'animaux invertébrés", texte: "Les insectes sont présents dans tous les écosystèmes et jouent un rôle essentiel dans la pollinisation et la décomposition de la matière organique." },
	{ mot: "jardin", indice: "Espace vert aménagé pour la culture de plantes", texte: "Le jardin peut être un espace de détente, mais aussi un lieu de production de fruits et légumes." },
	{ mot: "kangourou", indice: "Mammifère marsupial sauteur originaire d'Australie", texte: "Le kangourou est un animal emblématique de l'Australie et un symbole de la biodiversité australienne." },
	{ mot: "limace", indice: "Mollusque gastéropode sans coquille", texte: "Les limaces sont souvent considérées comme des nuisibles dans les jardins, mais elles ont aussi un rôle dans la décomposition de la matière organique." },
	{ mot: "marécage", indice: "Zone humide où l'eau stagne", texte: "Les marécages abritent une grande diversité d'espèces animales et végétales, mais sont menacés par la destruction des habitats naturels." },
	{ mot: "nénuphar", indice: "Plante aquatique à fleurs", texte: "Le nénuphar est une plante aquatique qui vit dans les étangs et les lacs." },
	{ mot: "écosystème", indice: "Ensemble des êtres vivants et de leur environnement", texte: "Un écosystème est constitué d'êtres vivants interagissant avec leur environnement." },
	{ mot: "espèce", indice: "Groupe d'individus ayant des caractéristiques communes et pouvant se reproduire entre eux", texte: "La notion d'espèce est fondamentale en biologie." },
	{ mot: "adaptation", indice: "Caractère permettant à un être vivant de mieux s'adapter à son environnement", texte: "L'adaptation est un processus clé de l'évolution des espèces." },
	{ mot: "pollinisation", indice: "Transfert du pollen des étamines au pistil chez les plantes à fleurs", texte: "La pollinisation est indispensable à la reproduction de nombreuses espèces végétales." },
	{ mot: "migration", indice: "Déplacement régulier d'animaux sur de longues distances", texte: "La migration est un comportement observé chez de nombreuses espèces animales." },
	{ mot: "conservation", indice: "Protection et gestion des espèces et des habitats naturels", texte: "La conservation de la biodiversité est essentielle pour préserver les écosystèmes." },
	{ mot: "biotope", indice: "Environnement physique dans lequel vit une communauté d'êtres vivants", texte: "Le biotope est un élément clé de l'écosystème." },
	{ mot: "prédateur", indice: "Animal qui chasse et tue d'autres animaux pour se nourrir", texte: "Les prédateurs sont des acteurs importants de la régulation des populations animales." },
	{ mot: "déchet", indice: "Matière considérée comme inutile et jetée", texte: "La gestion des déchets est un enjeu majeur pour la préservation de l'environnement." },
	{ mot: "énergie", indice: "Capacité à produire un travail ou un mouvement", texte: "L'énergie est indispensable à toute forme de vie." },
	{ mot: "forêt", indice: "Formation végétale composée d'arbres et d'autres plantes", texte: "Les forêts abritent une grande diversité d'espèces animales et végétales." },
	{ mot: "océan", indice: "Vaste étendue d'eau salée recouvrant une grande partie de la surface de la Terre", texte: "Les océans sont des écosystèmes complexes et riches en biodiversité." },
	{ mot: "réchauffement climatique", indice: "Augmentation de la température moyenne de la planète", texte: "Le réchauffement climatique a des conséquences importantes sur la biodiversité." },
]	
	// Sélectionner un mot aléatoire dans la liste
	var motObjet = mots[Math.floor(Math.random() * mots.length)];
	var motADeviner = motObjet.mot;
	var indice = motObjet.indice;
	
	// Afficher l'indice
	document.getElementById("indice").innerHTML = indice;
	
	// Tableau pour stocker les lettres devinées
	var lettresDevinées = [];
	
	// Afficher le mot à compléter sous forme de tirets
	var motACompléter = "";
	for (var i = 0; i < motADeviner.length; i++) {
	if (lettresDevinées.indexOf(motADeviner[i]) !== -1) {
	// La lettre a déjà été devinée, l'afficher
	motACompléter += motADeviner[i];
	} else {
	// La lettre n'a pas encore été devinée, afficher un tiret
	motACompléter += "-";
	}
	}
	document.getElementById("mot-a-completer").innerHTML = motACompléter;
	
	// Afficher les lettres proposées
	var lettresProposées = "abcdefghijklmnopqrstuvwxyzàáâçèéêëìíîïñòóôùúûüýÿ";
	var lettresHTML = "";
	for (var i = 0; i < lettresProposées.length; i++) {
	lettresHTML += '<button class="lettre">' + lettresProposées[i] + '</button>';
	}
	document.getElementById("lettres").innerHTML = lettresHTML;

	// Récupérer l'élément avec l'identifiant "en-savoir-plus"
	const enSavoirPlusElement = document.getElementById("en-savoir-plus");

	// Récupérer l'élément avec l'identifiant "infos"
	const infosElement = document.getElementById("infos");

	// Ajouter un écouteur d'événements pour le clic sur le bouton "en-savoir-plus"
	enSavoirPlusElement.addEventListener("click", function() {
		// Récupérer la description du mot choisi
		const description = motObjet.texte;

		// Mettre à jour le texte de l'élément "infos"
		infosElement.textContent = description;

		// Afficher l'élément "infos"
		infosElement.style.display = "block";
	});
	
	// Ajouter un gestionnaire d'événements pour les boutons de lettre
	var boutonsLettre = document.getElementsByClassName("lettre");
	for (var i = 0; i < boutonsLettre.length; i++) {
	boutonsLettre[i].addEventListener("click", function() {
	var lettreDevinee = this.innerHTML;
	lettresDevinées.push(lettreDevinee);
	this.disabled = true;
	// Mettre à jour le mot à compléter
	motACompléter = "";
	for (var i = 0; i < motADeviner.length; i++) {
	if (lettresDevinées.indexOf(motADeviner[i]) !== -1) {
	motACompléter += motADeviner[i];
	} else {
	motACompléter += "-";
	}
	}
	document.getElementById("mot-a-completer").innerHTML = motACompléter;
	});
	}

	// écouter les événements de clavier pour récupérer les touches pressées
document.addEventListener("keydown", function(event) {
	const lettrePressee = event.key.toLowerCase(); // récupérer la lettre pressée
	if (/^[a-zA-Zà-ÿ]$/.test(lettrePressee)) { // vérifier que c'est une lettre de l'alphabet
	  lettresDevinées.push(lettrePressee);
	  afficherMot();
	}
  });

  function afficherMot() {
	var motACompléter = "";
	for (var i = 0; i < motADeviner.length; i++) {
	if (lettresDevinées.indexOf(motADeviner[i]) !== -1) {
	// La lettre a déjà été devinée, l'afficher
	motACompléter += motADeviner[i];
	} else {
	// La lettre n'a pas encore été devinée, afficher un tiret
	motACompléter += "-";
	}
	}
	document.getElementById("mot-a-completer").innerHTML = motACompléter;
	}
	
	document.getElementById("envoyer").addEventListener("click", function() {
		if (lettresDevinées.length == 0) {
			alert("Veuillez entrer au moins une lettre pour deviner le mot.");
			return;
		}
		var motACompléter = "";
	for (var i = 0; i < motADeviner.length; i++) {
		if (lettresDevinées.indexOf(motADeviner[i]) !== -1) {
			motACompléter += motADeviner[i];
		} else {
			motACompléter += "-";
		}
	}
		if (motACompléter == motADeviner) {
			var enSavoirPlusBtn = document.getElementById("en-savoir-plus");
			enSavoirPlusBtn.style.display = "block";
			if (nbTentatives <= 3) {
				document.getElementById("resultat").innerHTML = "Excellent !";
			} else if (nbTentatives <= 5) {
				document.getElementById("resultat").innerHTML = "Bien joué !";
			} else {
				document.getElementById("resultat").innerHTML = "Vous feriez mieux la prochaine fois.";
			}
			for (var i = 0; i < boutonsLettre.length; i++) {
				boutonsLettre[i].disabled = true;
			}
		} else {
			document.getElementById("resultat").innerHTML = "Dommage, le mot était " + motADeviner + ".";
		}
		document.getElementById("envoyer").disabled = true;
	});
	
	
	// Définir la variable pour le nombre de tentatives
let nbTentatives = 0;
let nbTentativesElement = document.getElementById("nb-tentatives");

// Ajouter un bouton "Nouvelle partie" pour relancer le jeu
document.getElementById("nouvelle-partie").addEventListener("click", function() {
// Réinitialiser le nombre de tentatives
nbTentatives = 0;
nbTentativesElement.style.color = "black";


// Réinitialiser les autres variables
motObjet = mots[Math.floor(Math.random() * mots.length)];
motADeviner = motObjet.mot;
indice = motObjet.indice;
lettresDevinées = [];
motACompléter = "";
nbTentativesElement.innerHTML = nbTentatives;
document.getElementById("envoyer").disabled = false;
infosElement.style.display = "none";
document.getElementById("en-savoir-plus").style.display = "none";

// Réinitialiser l'affichage du mot à compléter
for (var i = 0; i < motADeviner.length; i++) {
motACompléter += "-";
}
document.getElementById("mot-a-completer").innerHTML = motACompléter;
document.getElementById("indice").innerHTML = indice;

// Réactiver tous les boutons de lettre et enlever leur couleur de fond
boutonsLettre = document.getElementsByClassName("lettre");
for (var i = 0; i < boutonsLettre.length; i++) {
    boutonsLettre[i].disabled = false;
    boutonsLettre[i].style.display = "inline-block";
}

// Réinitialiser le résultat de la partie précédente
document.getElementById("resultat").innerHTML = "";

var lettresDejaPressees = []; // Tableau pour stocker les lettres déjà pressées

document.addEventListener("keydown", function(event) {
    const lettrePressee = event.key.toLowerCase(); // récupérer la lettre pressée
    if (/^[a-zA-Zà-ÿ]$/.test(lettrePressee) && lettresDejaPressees.indexOf(lettrePressee) === -1) { // vérifier que c'est une lettre de l'alphabet ou une lettre accentuée et qu'elle n'a pas déjà été pressée
        lettresDejaPressees.push(lettrePressee); // Ajouter la lettre au tableau des lettres déjà pressées
        lettresDevinées.push(lettrePressee);
        if (!motADeviner.includes(lettrePressee)) {
            nbTentatives++;
            nbTentativesElement.innerHTML = nbTentatives;
            if (nbTentatives > 8) {
                nbTentativesElement.style.color = "red";
            }
        }
        afficherMot();
        var boutonLettrePressee = Array.from(document.getElementsByClassName("lettre")).find(function(element) {
          return element.innerHTML === lettrePressee;
        });
		if (boutonLettrePressee !== undefined) { // vérifier si le bouton existe
			boutonLettrePressee.disabled = true; // désactiver le bouton
            boutonLettrePressee.style.display = "none";
        }
		event.preventDefault(); // empêcher la lettre pressée de s'afficher sur la page
    }
});

});

for (var i = 0; i < boutonsLettre.length; i++) {
	boutonsLettre[i].addEventListener("click", function() {
	  var lettreCliquee = this.innerHTML;
	  if (motADeviner.includes(lettreCliquee)) {
		// La lettre est dans le mot à deviner
	  } else {
		nbTentatives++;
		nbTentativesElement.innerHTML = nbTentatives;
		if (nbTentatives > 8) {
		  nbTentativesElement.style.color = "red";
		}
	  }
	  this.disabled = true; // désactiver le bouton
	  this.style.display = "none";
	});
  }

  var lettresDejaPressees = []; // Tableau pour stocker les lettres déjà pressées

  document.addEventListener("keydown", function(event) {
    const lettrePressee = event.key.toLowerCase(); // récupérer la lettre pressée
    if (/^[a-zA-Zà-ÿ]$/.test(lettrePressee) && lettresDejaPressees.indexOf(lettrePressee) === -1) { // vérifier que c'est une lettre de l'alphabet ou une lettre accentuée et qu'elle n'a pas déjà été pressée
        lettresDejaPressees.push(lettrePressee); // Ajouter la lettre au tableau des lettres déjà pressées
        lettresDevinées.push(lettrePressee);
        if (!motADeviner.includes(lettrePressee)) {
            nbTentatives++;
            nbTentativesElement.innerHTML = nbTentatives;
            if (nbTentatives > 8) {
                nbTentativesElement.style.color = "red";
            }
        }
        afficherMot();
        var boutonLettrePressee = Array.from(document.getElementsByClassName("lettre")).find(function(element) {
          return element.innerHTML === lettrePressee;
        });
		if (boutonLettrePressee !== undefined) { // vérifier si le bouton existe
			boutonLettrePressee.disabled = true; // désactiver le bouton
            boutonLettrePressee.style.display = "none";
        }
		event.preventDefault(); // empêcher la lettre pressée de s'afficher sur la page
    }
});

