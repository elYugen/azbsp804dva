const bonjour = (prenom) => {
    console.log(`salut ${prenom}`)
}
bonjour("steve")

// ------

setTimeout(() => {
    console.log(`Test `);
}, 3000)



// -----

const nombre = [1, 2, 3, 4, 5]

const carre = nombre.map((element) => Math.pow(element, 2))

console.log(carre);
