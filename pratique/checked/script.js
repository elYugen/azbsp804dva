let check1 = document.getElementById("check1")
let check2 = document.getElementById("check2")
let submit = document.getElementById("submit")

submit.onclick = function() {
    if(check1.checked) {
        console.log("super !");
    } else {
        console.log("tu as oublié de coché la 1ere option !");
    }

    if(check2.checked) {
        console.log("trop fort !");
    } else {
        console.log("n'oublie pas de coché la 2eme option !");
    }
}