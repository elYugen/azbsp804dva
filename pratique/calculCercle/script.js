const PI = 3.14159;
let rayon;
let circonference;

document.getElementById("monBouton").onclick = function() {
    rayon = document.getElementById("monInput").value; //je récupère la valeur que j'ai entré dans mon input
    rayon = Number(rayon); //je converti cette valeur en nombre
    circonference = 2 * PI * rayon; //formule mathématique pour calculer la circonférence d'un cercle
    document.getElementById("monH3").textContent = circonference + "cm";
}