let compteur = 0;

const resultat = document.getElementById("resultat")
const ajouter = document.getElementById("ajoute")
const diminuer = document.getElementById("diminue")
const reset = document.getElementById("reset")

ajouter.onclick = function() {
    compteur++
    resultat.textContent = compteur
}

diminuer.onclick = function() {
    compteur--
    resultat.textContent = compteur
}

reset.onclick = function() {
    compteur = 0
    resultat.textContent = compteur
}