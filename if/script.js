let age = 25; //Je déclare une variable age à qui je donne 25 comme valeur, 

if(age >= 18) { // si age est supérieur ou égal a 18 alors je retourne "tu as plus de 18 ans"
    console.log("tu as + de 18 ans")
} else {
    console.log("tu as moins de 18 ans") //sinon je retourne "tu as moins de 18 ans"
}



//Exemple en utilisant des booléen

let chomeur = true

if(chomeur) { //si mon booléen est true alors il m'affiche tu es au chomage
    console.log("tu es au chomage");
} else { //si mon booléen est false il m'affiche tu as un emploi
    console.log("tu as un emploi !");
    
}



//Exemple de if dans un autre if et du else if
let agePermis = 80;
let aSonPermis = false;

if(agePermis >=100) {
    console.log("personne ne passe le permis a ton age");
} else if(agePermis == 0) {
    console.log("tu ne peux pas passer le permis, tu n'es pas encore né")
} else if(agePermis < 0) {
    console.log("ton age ne peux pas etre en dessous de 0");
} else if(agePermis >= 18){
    console.log("tu as le droit de conduire !")
    if(aSonPermis) {
        console.log("tu possèdes le permis !");       
    } else {
        console.log("va passer ton permis");     
    }
}  else {
    console.log("tu ne peux pas conduire");
}