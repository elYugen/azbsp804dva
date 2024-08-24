const personnes = ["steve", "george", "kevin", "patrick"]

const personne = personnes.map(majuscule)
console.log(personne);


function majuscule(element) {
    return element.toUpperCase()
}