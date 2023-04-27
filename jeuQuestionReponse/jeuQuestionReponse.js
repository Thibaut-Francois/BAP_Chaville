console.log("start")

let QR = [
    {
        "q":"NE PAS MODIFIER CETTE CHAINE DE TEXTE !",
        "r":"NE PAS MODIFIER CETTE CHAINE DE TEXTE !",
        "i":'NE PAS MODIFIER CETTE CHAINE DE TEXTE !"'
    },
    {
        "q":"Je suis un mode de vie qui consiste à consommer de manière responsable et à limiter ses achats à l'essentiel. Qui suis-je ?",
        "r":"minimalisme",
        "i":'mon nom ressemble au mot "minimum"'
    },
    // {
    //     "q":"Je suis un modèle économique qui vise à réduire les déchets et à favoriser le recyclage en bouclant les cycles de production et de consommation. Qui suis-je ?",
    //     "r":"L'économie circulaire",
    //     "i":'Recyclage'
    // },
    // {
    //     "q":"Je suis un type de déchet qui peut être transformé en compost pour nourrir la terre. Qui suis-je ?",
    //     "r":"déchets organiques",
    //     "i":'Décomposition'
    // },
    // {
    //     "q":"Je suis une mesure de l'impact environnemental d'un individu, d'une entreprise ou d'une société. Qui suis-je ?",
    //     "r":"empreinte écologique",
    //     "i":'Mesure'
    // },
    // {
    //     "q":"Je suis un type de déchet qui peut être réutilisé pour créer de nouveaux produits. Qui suis-je ?",
    //     "r":"déchets recyclables",
    //     "i":'Recyclage'
    // },
    // {
    //     "q":"Je suis un phénomène qui contribue à la perte de la biodiversité et à la destruction de l'habitat des espèces animales. Qui suis-je ?",
    //     "r":"déforestation",
    //     "i":'je me fais principalement par la destruction de plante'
    // },
    // {
    //     "q":"Je suis un comportement qui consiste à gaspiller de l'électricité et de l'énergie en général. Qui suis-je ? ",
    //     "r":"gaspillage énergétique",
    //     "i":'Gaspillage'
    // },
    // {
    //     "q":"Je suis un type de déchet qui peut prendre des centaines d'années à se décomposer dans la nature. Qui suis-je ?",
    //     "r":"déchets plastiques",
    //     "i":'Durée'
    // },
    // {
    //     "q":"Je suis une pratique qui consiste à jeter de la nourriture consommable. Qui suis-je ?",
    //     "r":"gaspillage alimentaire",
    //     "i":'Alimentation'
    // },
    // {
    //     "q":"Je suis un mode de vie qui consiste à acheter des produits de manière éthique, en prenant en compte les impacts sociaux et environnementaux. Qui suis-je ? ",
    //     "r":"consommation responsable",
    //     "i":'Responsable'
    // },
    // {
    //     "q":"Je suis un comportement qui consiste à éteindre les appareils électroniques et les lumières inutiles pour éviter le gaspillage d'énergie. Qui suis-je ?",
    //     "r":"extinction",
    //     "i":'Électricité'
    // },
    // {
    //     "q":"Je suis un modèle agricole qui vise à produire des aliments sans utiliser de produits chimiques ou de pesticides. Qui suis-je ?",
    //     "r":"agriculture biologique",
    //     "i":'sans pestcide chimiques'
    // },
    // {
    //     "q":"Je suis un mode de transport qui ne produit pas d'émissions de gaz à effet de serre. Qui suis-je ?",
    //     "r":"vélo",
    //     "i":'à 2 roues et autant de pédales'
    // },

    // {
    //     "q":"Je suis un type de déchet qui peut être composté pour produire de l'engrais naturel. Qui suis-je ?",
    //     "r":"déchets de jardin",
    //     "i":'Jardinage'
    // },
    // {
    //     "q":"Je suis une pratique qui consiste à acheter des produits d'occasion plutôt que neufs pour éviter la surconsommation. Qui suis-je ?",
    //     "r":"recyclage",
    //     "i":'Réutilisation'
    // },
    // {
    //     "q":"Je suis un comportement qui consiste à utiliser l'eau de manière responsable pour éviter le gaspillage. Qui suis-je ?",
    //     "r":"économie d'eau",
    //     "i":'Économie'
    // },
    // {
    //     "q":"Je suis une pratique qui consiste à réduire la quantité de déchets produits en utilisant des produits durables et réutilisables. Qui suis-je ?",
    //     "r":"réduction des déchets",
    //     "i":'Réduction'
    // },
    // {
    //     "q":"Je suis un type de déchet qui peut être transformé en biogaz pour produire de l'énergie. Qui suis-je ?",
    //     "r":"déchets organiques",
    //     "i":'Biomasse'
    // },
    // {
    //     "q":"Je suis une pratique qui consiste à utiliser les transports en commun pour réduire les émissions de gaz à effet de serre. Qui suis-je ?",
    //     "r":"transports en commun",
    //     "i":'Collectif'
    // },
    // {
    //     "q":"Je suis un modèle de production qui vise à minimiser la consommation de ressources naturelles et l'émission de déchets. Qui suis-je ?",
    //     "r":"production durable",
    //     "i":'Durabilité'
    // },
]
console.log(QR.length)

document.querySelector('#btnV').style.display = "none"
document.querySelector('#rep').style.display = "none"

let i = 0
let t = 0
let e = 0

document.querySelector('#btnS').addEventListener("click", ()=>{

    document.querySelector('#btnV').style.display = "block"
    document.querySelector('#rep').style.display = "block"
    document.querySelector('#ind').innerHTML = ""
    
    e=0
    i++

    if(i >= QR.length){
        document.querySelector('#corr').innerHTML = "Bien joué vous avez répondu à toutes les questions ! Vous vous êtes trompé "+t+" fois"
        document.querySelector('#btnV').style.display = "none"
        document.querySelector('#rep').style.display = "none"
        document.querySelector('#que').innerHTML = ""

        i=0
        t=0

        document.querySelector('#btnS').innerHTML = "RECOMMENCER"


    }else{
        document.querySelector('#btnS').innerHTML = "SUIVANT"
        document.querySelector('#btnS').style.display = "none"
        document.querySelector('#rep').value=""
        document.querySelector('#que').innerHTML = QR[i].q
    
        document.querySelector('#corr').innerHTML = ""
    
        document.querySelector('#btnV').addEventListener("click", (event)=>{

            if (!event.defaultPrevented) {

                if (document.querySelector('#rep').value.toLowerCase() == QR[i].r){
                    document.querySelector('#corr').innerHTML = "Bonne réponse !"
                    document.querySelector('#btnS').style.display = "block"
                    
                    console.log("Valide !")
                }else{
                    document.querySelector('#corr').innerHTML = "Mauvaise réponse !"
                    console.log("Mauvais !")
                    t++
                    e++
                }
                
                event.preventDefault();
            }




            if(e>=3){
                document.querySelector('#ind').innerHTML = "Indice : "+QR[i].i
            }
        });
    }
});
