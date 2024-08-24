function salut(callback) { //Je donne un nom a mon paramètre (ça peut etre n'importe quoi)
    console.log("Salut");  
    callback(); //J'appelle mon paramètre dans ma fonction, il aura récupéré l'argument tchao indiqué en dessous
}

function tchao() {
    console.log("tchao");
}

salut(tchao); // Je passe la fonction tchao en argument à ma fonction salut




// Autre Exemple
function somme(callback, x, y) { //Je donne un nom a mes paramètre (ça peut etre n'importe quoi)
    let resultat = x + y;
    callback(resultat) //J'appelle mon paramètre dans ma fonction, il aura récupéré l'argument afficheResultat et mes nombres indiqué en dessous
}

function afficheResultat(result) {
    console.log(result); 
}

somme(afficheResultat, 10, 2)// Je passe la fonction afficheResultat en argument à ma fonction salut