# Les différents type de console intéressante :
- console.log() , permet d'afficher un texte ou une variable que l'on déclare dans les (), permet de voir de potentiels bug
- console.table() , permet d'afficher un tableau ou une variable contenant un tableau que l'on déclare dans les (),




# Les variables 
Les variables sont des boites qui contiennent une valeur 
Pour commencer il faut déclarer une variable avec "let" ou "const"

- let 
- const est une variable qui restera identique dans le futur

Exemple d'utilisation :
let mavariable;
const mavariable;


Une fois notre variable déclarer, il faut lui assigner une valeur numérique,textuel (string) ou un booléen
Exemple d'utilisation :

let mavariable; 

mavariable = 12345;
mavariable = "Bonjour";
mavariable = true;


On peut aussi assigner une valeur à notre variable au moment de sa création :

let (OU) const mavariable = 12345;
let (OU) const mavariable = "Bonjour";
let (OU) const mavariable = true;






# Manipulation du DOM
document.getElementById("monId") , permet de récupérer un élément HTML contenant un id (ex: <div id="monId">)
document.querySelector("p") , permet de récupérer un élément HTML ou un élément contenant une class CSS
document.querySelectorAll(".test") , permet de récupérer tout les éléments HTML contenant la class .test

textContent , permet d'attributer du texte à notre élément récupérer. Exemple : 
> document.getElementById("monId").textContent = "Salut" (ceci affichera Salut dans notre élément qui contient l'id monId dans notre HTML)

On peut aussi lier la manipulation du Dom à une variable. Exemple d'utilisation :

> let mavariable = document.getElementById("monId")
> mavariable.textContent = "Salut"








# Les Expressions & opérateurs 
- "=" = Permet d'affecter une valeur à une variable
- "==" = Permet de voir si une valeur est égal à une autre


## Opérateurs mathématique de base :
- "*" = Multiplication
- "+" = Addition
- "-" = Soustraction
- "/" = Division
- "**" = Puissance
- "%" = Modulo (Divise et donne le reste de la division)

Exemple d'utilisation :
> let chiffre = 12; *On assigne le nombre 12 à notre variable*
> chiffre = chiffre + 1 *On ajoute 1 à notre variable*
> console.log(chiffre) *Va nous retourner 13*


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
> let chiffre = 12; *On assigne le nombre 12 à notre variable*
> chiffre += 1 *On ajoute 1 à notre variable*
> console.log(chiffre) *Va nous retourner 13*


## Opérateurs d'incrémentation
On peut augmenter ou diminuer une valeur de notre variable d'une autre façon en utilisant 
**les opérateurs d'incrémentation**

- "++" = Augmente de 1 la valeur de notre variable
- "--" = Diminue de 1 la valeur de notre variable

Exemple d'utilisation :
> let chiffre = 12; *On assigne le nombre 12 à notre variable*
> chiffre++; *On ajoute 1 à notre variable*
> console.log(chiffre) *Va nous retourner 13*


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
>Math.floor(Math.random() * 6) + 1; 

ce bout de code va généré un chiffre aléatoire entre 1 et 6 grace à Math.random()
et va arrondir le chiffre grace à Math.floor pour ne pas avoir une dizaine de chiffre après la virgule

Toutes les propriétés : 
https://www.w3schools.com/jsref/jsref_obj_math.asp





# IF, ELSE
If (si) permet d'éxécuter du code si une condition est true, else (sinon), faire autre chose si la condition est false
Exemple : 
>let age = 13;
>if (age >=18) {
>    console.log("tu as plus de 18 ans")
>} else {
>    console.log("tu as moins de 18 ans)
>}
Je déclare une variable age à qui je donne 13 comme valeur, 
si age est supérieur ou égal a 18 alors je retourne "tu as plus de 18 ans"
sinon je retourne "tu as moins de 18 ans"

On peut aussi utiliser des if, else à l'intérieur d'un if, else
Exemple : 
>let agePermis = 18;
>let aSonPermis = true;
>
>if(agePermis >=18) {
>    console.log("tu peux passer le permis !")
>    if(aSonPermis) {
>        console.log("tu possèdes le permis !");       
>    } else {
>        console.log("va passer ton permis");     
>    }
>} else {
>    console.log("tu ne peux pas passer le permis");  
>}

On peut aussi d'autre condition avec le else if
Exemple :
>    if(input >= 100) {
>        acces.textContent = "tu es trop vieux pour ça"
>    } else if(input == 0) {
>        acces.textContent = "tu ne peux pas avoir 0 ans"
>    } else if(input <= 0) {
>        acces.textContent = "tu ne peux pas avoir en dessous de 0 ans"
>    } else if (input >= 18) {
>        acces.textContent = "tu peux passer le permis"
>    }
>    else {
>        acces.textContent = "tu n'as pas mis ton age"
>    }



# Checked