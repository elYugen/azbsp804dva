let age = 0;

let input;
let send = document.getElementById("send");
let acces = document.getElementById("acces");

send.onclick = function() {
    input = document.getElementById("age").value
    if(input >= 100) {
        acces.textContent = "tu es trop vieux pour ça"
    } else if(input == 0) {
        acces.textContent = "tu ne peux pas avoir 0 ans"
    } else if(input <= 0) {
        acces.textContent = "tu ne peux pas avoir en dessous de 0 ans"
    } else if (input >= 18) {
        acces.textContent = "tu peux passer le permis"
    }
    else {
        acces.textContent = "tu n'as pas mis ton age"
    }
}