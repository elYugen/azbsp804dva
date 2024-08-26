const hello = function() {
    console.log('Salut')
}

hello()


 // -------------
setTimeout(function() {
    console.log('Salut')
}, 3000)


// ------------

const nombres = [1, 2, 3, 4, 5, 6];
const aucarre = nombres.map(function(element){
    return Math.pow(element, 2)
})



console.log(aucarre);
