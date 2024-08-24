let input; //Je déclare ma variable input

let bouton = document.getElementById("monBouton").onclick = function() { 
    //onClick est un évènement qui déclenche une fonction quand on appuie sur un bouton

    input = document.getElementById("monInput").value;
    //Ma variable va prendre le texte que j'ai écris dans mon input grace a .value 

    console.log(input);
    // Mon texte va apparaitre dans la console

    //Je peux aussi modifier un autre élément comme mon h1 a la place de mon console.log
    document.getElementById("monH").textContent = input
}