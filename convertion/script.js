let age = window.prompt("T'as quel age ?")
//Ma variable age va prendre comme valeur un string (le texte que je vais écrire dans mon navigateur)
//Si je réponds par un nombre (ex: 20)
//Je peux convertir ce string en nombre grace a une fonction de javascript : Number

age = Number(age);

console.log(age, typeof age)
//Je peux vérifier quel est le type d'une variable avec typeof dans ma console


//On ne peut pas convertir un texte en nombre, Exemple :
// let texte = "oui"
// texte = Number(texte)
// console.log(texte, typeof texte);
//Ma console retournera NaN car des lettres ne peuvent pas etre converti en chiffre, mais ma variable elle aura changé de propriété


//Convertir un string en booléen donnera toujours "true"
//On peut se servir de la convertion en booléen pour savoir par exemple si un input est vide ou pas
let texte = "oui"
texte = Boolean(texte)
console.log(texte, typeof texte);