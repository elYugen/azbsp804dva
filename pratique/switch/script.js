let jour = 5;

switch(jour) {
    case 1:
        console.log("lundi");
        break;
    case 2:
        console.log("mardi");
        break;
    case 3:
        console.log("mercredi");
        break;
    case 4:
        console.log("jeudi")
        break;
    case 5: 
        console.log("vendredi");
        break;

    default: 
        console.log("rien ne correspond");     
}


// Autre exemple
let note = 17
let mention;
switch(true) {
    case note == 20:
        mention = "Excellent"
        break;
    case note >= 15:
        mention = "Très bien"
        break;
    case note >= 10: 
        mention = "Boss plus"
        break;
    case note >= 0:
        mention = "Tu redouble"
        break;
    default:
        mention = "Aucune note"
}

console.log(mention)