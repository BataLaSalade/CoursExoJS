/*
L'utilisateur saisi un nombre
Le système affiche un table de multiplication de ce nombre
*/

var userInput=prompt("Saisissez un nombre pour afficher sa table de multiplication :");
var numberInput=Number(userInput);

console.log("Voici la table de multiplication de " + numberInput);

for (i=1; i<=10; i++) {
    console.log( numberInput + " x " + i + " = " + numberInput*i);
}

console.log("Fin du programme");