console.log("start")

let QR = [
    {
        "q":"NE PAS MODIFIER CETTE CHAINE DE TEXTE !",
        "r":"NE PAS MODIFIER CETTE CHAINE DE TEXTE !",
        "i":'NE PAS MODIFIER CETTE CHAINE DE TEXTE !"'
    },
    {
        "q":"le ciel est de couleur ?",
        "r":"bleu",
        "i":'ça commence par "bl" et finit par "eu"'
    },
    {
        "q":"l'herbe est de couleur ?",
        "r":"verte",
        "i":'ça commence par "ve" et finit par "rte"'
    },
    // {
    //     "q":"le soleil est de couleur ?",
    //     "r":"jaune",
    //     "i":'ça commence par "ja" et finit par "une"'
    // },
    // {
    //     "q":"les tomates sont de couleur ?",
    //     "r":"rouge",
    //     "i":'ça commence par "rou" et finit par "ge"'
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
        document.querySelector('#btnS').innerHTML = "suivant"
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
