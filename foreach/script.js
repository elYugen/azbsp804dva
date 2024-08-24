let nombre = ["un, deux, trois, quatre, cinq"]


function affiche(element) {
    console.log(element);
    
}


function majuscule(element, index, array) {
    array[index] = element.toUpperCase()
    //Dans mon tableau, à chaque index = l'élément sera en majuscule
}

nombre.forEach(majuscule);
nombre.forEach(affiche);
