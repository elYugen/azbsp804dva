# Les différents type de console :
- console.log() , permet d'afficher un texte ou une variable que l'on déclare dans les (), permet de voir de potentiels bug
- console.table() , permet d'afficher un tableau ou une variable contenant un tableau que l'on déclare dans les (),




# Les variables 
Les variables sont des boites qui contiennent une valeur 
Pour commencer il faut déclarer une variable avec "let" ou "const"

- let 
- const (est une variable qui restera identique dans le futur)

Exemple d'utilisation :
let mavariable;
const mavariable;


Une fois notre variable déclarer, il faut lui assigner une valeur numérique,textuel (string) ou un booléen
Exemple d'utilisation :
```
let mavariable; 

mavariable = 12345;
mavariable = "Bonjour";
mavariable = true;
```

On peut aussi assigner une valeur à notre variable au moment de sa création :

```
let (OU) const mavariable = 12345;
let (OU) const mavariable = "Bonjour";
let (OU) const mavariable = true;
```





# Manipulation du DOM
document.getElementById("monId") , permet de récupérer un élément HTML contenant un id (ex: <div id="monId">)
document.querySelector("p") , permet de récupérer un élément HTML ou un élément contenant une class CSS
document.querySelectorAll(".test") , permet de récupérer tout les éléments HTML contenant la class .test

textContent , permet d'attributer du texte à notre élément récupérer. Exemple : 
```
 document.getElementById("monId").textContent = "Salut" // (ceci affichera Salut dans notre élément qui contient l'id monId dans notre HTML)
 ```

On peut aussi lier la manipulation du Dom à une variable. Exemple d'utilisation :

```
 let mavariable = document.getElementById("monId")
mavariable.textContent = "Salut"
```








# Les Expressions & opérateurs 
- "=" = Permet d'affecter une valeur à une variable
- "==" = Permet de voir si une valeur est égal à une autre
- "> ou <" = Comparateur plus grand ou plus petit que


## Opérateurs mathématique de base :
- "*" = Multiplication
- "+" = Addition
- "-" = Soustraction
- "/" = Division
- "**" = Puissance
- "%" = Modulo (Divise et donne le reste de la division)

Exemple d'utilisation :
```
 let chiffre = 12; *On assigne le nombre 12 à notre variable*
 chiffre = chiffre + 1 *On ajoute 1 à notre variable*
 console.log(chiffre) *Va nous retourner 13*
 ```


## Opérateurs d'affection
Plutot que de re écrire tout le temps le nom de notre variable avant l'opérateur, on peut utiliser
**les opérateurs d'affection** pour gagner du temps :

- "*=" = Multiplication
- "+=" = Addition
- "-=" = Soustraction
- "/=" = Division
- "**=" = Puissance
- "%=" = Divise et donne le reste de la division

Exemple d'utilisation :
```
let chiffre = 12; *On assigne le nombre 12 à notre variable*
 chiffre += 1 *On ajoute 1 à notre variable*
 console.log(chiffre) *Va nous retourner 13*
```

## Opérateurs d'incrémentation
On peut augmenter ou diminuer une valeur de notre variable d'une autre façon en utilisant 
**les opérateurs d'incrémentation**

- "++" = Augmente de 1 la valeur de notre variable
- "--" = Diminue de 1 la valeur de notre variable

Exemple d'utilisation :
```
 let chiffre = 12; *On assigne le nombre 12 à notre variable*
chiffre++; *On ajoute 1 à notre variable*
 console.log(chiffre) *Va nous retourner 13*
 ```


## Priorité des opérateurs mathémathiques :
Si l'on possède un calcul complexe, le navigateur prendra toujours certains opérateurs mathématique en priorité. Exemple :
let calcul = 1 + 2 * 4 + 4 ** 2;

Le navigateur va lire le calcul de droite à gauche car l'ordre de priorité est défini comme tel :
1. ()
2. Puissance (**)
3. Multiplication, Division, Modulo
4. Addition





# Les Convertisseur
On peut convertir le type de valeur contenu dans une variable en une autre.
Exemple: un chiffre en texte, un texte en chiffre, un texte en booléen, ect..
grace aux fonction de javascript : 
- Number()
- String()
- Boolean()




# Math
Math est un un objet javascript qui permet de faire des taches mathématique.
Par exemple on peut générer des chiffres aléatoire grace à Math :
```
Math.floor(Math.random() * 6) + 1;
 ```

ce bout de code va généré un chiffre aléatoire entre 1 et 6 grace à Math.random()
et va arrondir le chiffre grace à Math.floor pour ne pas avoir une dizaine de chiffre après la virgule

Toutes les propriétés : 
https://www.w3schools.com/jsref/jsref_obj_math.asp





# IF, ELSE
If (si) permet d'éxécuter du code si une condition est true, else (sinon), faire autre chose si la condition est false
Exemple : 
```
let age = 13;
if (age >=18) {
    console.log("tu as plus de 18 ans")
} else {
    console.log("tu as moins de 18 ans)
}
```
Je déclare une variable age à qui je donne 13 comme valeur, 
si age est supérieur ou égal a 18 alors je retourne "tu as plus de 18 ans"
sinon je retourne "tu as moins de 18 ans"

On peut aussi utiliser des if, else à l'intérieur d'un if, else
Exemple : 
```
let agePermis = 18;
let aSonPermis = true;

if(agePermis >=18) {
    console.log("tu peux passer le permis !")
    if(aSonPermis) {
       console.log("tu possèdes le permis !");       
   } else {
       console.log("va passer ton permis");     
    }
} else {
    console.log("tu ne peux pas passer le permis");  
}
```

On peut aussi faire d'autre test de condition avec le else if
Exemple :
```
    if(input >= 100) {
        console.log("tu es trop vieux pour ça")
    } else if(input == 0) {
        console.log("tu ne peux pas avoir 0 ans")
    } else if(input <= 0) {
        console.log("tu ne peux pas avoir en dessous de 0 ans")
    } else if (input >= 18) {
        console.log("tu peux passer le permis")
    }
    else {
        console.log("tu n'as pas mis ton age")
    }
```


# Checked
.cheked est une propriété qui permet de déterminer si une checkbox ou un bouton radio est coché ou non
Exemple : 
```
    if(variable.checked) {
       console.log("super !");
   } else {
        console.log("tu as oublié de coché la 1ere option !");
    }
```


# Opérateur conditionnel
L'opérateur conditionnel ?, : est un raccourcis de if else
Exemple : 
```
 let age = 20;
 age >= 18 ? "tu es majeur" : "tu es mineur"
 ```
on pourrait traduire ce bout de code par :
est ce que age est au dessus ou égal à 18 ? oui = tu es majeur : non tu es mineur


# Switch
Le switch peut etre un remplacement de if si on possède trop de else if dans notre condition
Exemple :
```
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
}
```


Switch va venir remplacer if et case sera notre remplaçant de else
on ajoute break à la fin de notre condition pour ne pas chercher à aller dans les autres case si notre condition est déjà valide


# String method
Les string method sont des propriété qui permettent de modifier/travailler avec les chaines de caractères
Exemple :
```
let nom = "monnom"
nom.length (va récupérer la longueur de la chaine de caractères)
nom.toUpperCase (va mettre la chaine de caractère en majuscule)
nom.toLowerCase (va mettre la chaine de caractère en minuscule)
nom.charAt(1) (va récupérer une lettre dans une chaine de caractère en fonction du chiffre qu'on a attribué)
nom.indexOf() (récupère la position d'une lettre dans la chaine de caractère)
nom.lastIndexOf() (récupère la dernière position d'une lettre dans la chaine de caractère)
nom.trim (va supprimer l'espace dans une chaine de caractère)
npm.repeat(1) (va répéter la chaine en fonction du chiffre qu'on a attribué)
```
Toutes les propriétés : https://www.w3schools.com/js/js_string_methods.asp

# Slice 
Permet de couper une chaine de caractère pour potentiellement la récupérer autre part
Exemple :
```
const nom = "Sylvain Durif"
let prenom = nom.slice(0, 7), 0 va etre le point de départ du découpage et va terminer a l'index 7 (le N)
let famille = nom.slice(8, 12)
```

# Enchainement de méthode 
Permet de raccourcir un peu de code
Exemple en reprenant la String Method :
```
let nom = "monnom"
nom = nom.trim().toUpperCase().repeat()
```
Plutot que d'avoir 30 ligne pour modifier ou récupérer des valeurs, on peut continuer sur une seule et meme ligne



# Opérateur Logique
Utiliser pour combiner ou manipuler des booléens
&& = Veut dire AND
|| = Veut dire OR
! = Veut dire NOT (Permet d'inverser un true ou false)

Exemple avec && : 
```
const temperature = 25
if(temperature > 10 && temperature <= 30) { 
/// Ici on va dire que si la température est au dessus de 10 ET(AND) inférieur à 30 alors il fait bon
console.log("il fait bon")
} else {
console.log("fait pas bon")
}
```

Exemple avec ||
```
 const temperature = 35
 if(temperature <= 10 || temperature > 30) { 
// Ici on va dire que si la température est en égal ou dessous de 10 OU(OR) supérieur à 30 alors il fait bon
    console.log("il fait bon")
 } else {
     console.log("fait pas bon")
}
```

Exemple avec !
```
 const soleil = false;

 if(!soleil){
     console.log("y'a du soleil");
     
 } else {
     console.log("pas de soleil");   
 }
 ```


# Égalité strict
- "=" = Permet d'affecter une valeur à une variable
- "==" = Permet de voir si une valeur est égal à une autre
- "===" = Dis qu'une valeur est égal à une autre 
- "!=" = Inégalité
- "!==" = Inégalité total

Exemple :
```
let agePermis = 10
if(agePermis == 100) {
    console.log("pareil")
} else {
    console.log("pas pareil");
}
// == Vérifie si les deux valeurs sont identique


let PI = 3.14
if(PI === 3.14) {
    console.log("pareil")
} else {
    console.log("pas pareil");
}

// Va comparer la valeur de la variable ainsi que la valeur du programme pour voir si elles sont exactement identique



let Ps = 3.14
if(Ps != "oui") {
    console.log("pas pareil")
} else {
    console.log("pareil");
}

// On demande si la valeur "oui" dans ma variable n'est pas égal a ma variable Ps



let Ps5 = 3.14
if(Ps5 !== 3.14) {
    console.log("pas pareil")
} else {
    console.log("pareil");
}
// Équivalent du === mais avec l'inégalité
```

# Fonction
Une fonction est un bout de code que l'on déclare une seule fois pour l'utiliser plus tard
Exemple : 
```
function bonneAnniv() { //Je déclare ma fonction et je lui met mon code
    console.log("Bonne anniv")
    console.log("Enfin je crois que c'est le tiens")
    console.log("Si je me trompe pas")
}

bonneAnniv(); // Me permet d'appeler ma fonction n'importe ou dans mon code
```

## Argument et paramètres d'une fonction
Les arguments et les paramètres sont des valeurs que l'on peut ajouter à une fonction au moment de son appel dans le code
Exemple : 
```

function bonneAnniv2(prenom, age) { //Je donne des variables a ma fonction qui seront des paramètres
    console.log("Bonne anniv")
    console.log(`Ton nom est ${prenom}`)
    console.log(`Tu as ${age}`)
}

bonneAnniv2("George", 48) // Les arguments que j'attribue a mes paramètres prenom et age présent dans ma fonction
```

## Return
Return va permettre d'afficher par exemple une variable présente dans la fonction
il faut imaginer que return va devenir le contenu d'une variable (dans mon exemple return resultat, une fois console.log, deviendra 12)
```
function math(x, y) {
    let resultat = x + y;
    return resultat
}

let cons = math(10, 2)
console.log(cons)
```