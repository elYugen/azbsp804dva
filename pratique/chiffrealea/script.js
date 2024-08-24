// let chiffreRandom = Math.floor(Math.random() * 6) + 1; 
// //Math.random va généré des chiffres aléatoire entre 0 et 1
// //le fait de multiplier par 6 va faire en sorte de générer un chiffre entre 0 et 6
// //Math.floor va permettre d'arrondir les chiffres (ne pas avoir de 1.123456789...)

// console.log(chiffreRandom)


let resultat = document.getElementById("resultat")
let generate = document.getElementById("random")
const min = 1;
const max = 6
let chiffreRandom;

generate.onclick = function() {
    chiffreRandom = Math.floor(Math.random() * max) + min; 
    resultat.textContent = chiffreRandom
}