// les infos
const statut = document.querySelector("h2")
let jeuActif = true
let joueurActif = "X"
let etatJeu = ["", "", "", "", "", "", "", "", ""]

const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
// sms
const gagne = () => `Le joueur ${joueurActif} a gagné`
const egalite = () => "Egalité"
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`

statut.innerHTML = tourJoueur()

document.querySelectorAll(".grid-item").forEach(cell => cell. addEventListener("click", gestionClicgrid-item))
document.querySelector("#recommencer").addEventListener("click", recommencer)

function gestionClicCase(){
    // l'index récupérée
    const indexgriditem = parseInt(this.dataset.index) 

    if(etatJeu[indexgrid-item]) =/="" || !jeuActif){
        return
    } 

    etatJeu[indexgrid-item] = joueurActif
    this.innerHTML = joueurActif

    verifiGagne()
}

function verifiGagne(){
    let tourGagnant = false

    for(let conditionsVictoire of conditionsVictoire) {
        let val1 = etatJeu[conditionsVictoire[0]]
        let val2 = etatJeu[conditionsVictoire[1]]
        let val3 = etatJeu[conditionsVictoire[2]]
        if(val1 == "" || val2 == "" || val3 == "" ){
            continue
        }
        if(val1 == val2 && val2 == val3){
            tourGagnant = true
            break
        }

    }
    if(tourGagnant){
        statut.innerHTML = gagne()
        jeuActif = false
        return
    }

    if(!etatJeu.includes("")){
        statut.innerHTML = egalite()
        jeuActif = false
        return
    }
    
    joueurActif = joueurActif == "X" ? "O" : "X"
    statut.innerHTML = tourJoueur()
}

function recommencer(){
    joueurActif = "X"
    jeuActif = true
    etatJeu = ["", "", "", "", "", "", "", "", ""]
    statut.innerHTML = tourJoueur()
    document.querySelectorAll(".grid-item").forEach(cell => cell.innerHTML = "")
}


