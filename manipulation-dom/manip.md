# Manipulation du DOM
document.getElementById("monId") , permet de récupérer un élément HTML contenant un id (ex: <div id="monId">)
document.querySelector("p") , permet de récupérer un élément HTML ou un élément contenant une class CSS
document.querySelectorAll(".test") , permet de récupérer tout les éléments HTML contenant la class .test

textContent , permet d'attributer du texte à notre élément récupérer. Exemple : 
> document.getElementById("monId").textContent = "Salut" (ceci affichera Salut dans notre élément qui contient l'id monId dans notre HTML)

On peut aussi lier la manipulation du Dom à une variable. Exemple d'utilisation :

> let mavariable = document.getElementById("monId")
> mavariable.textContent = "Salut"