/*
 L'utilisateur saisi un nombre JUSQU'A ce que ce nombre soit <=100
 Réécrire le programme pour que le nombre saisi soit compris entre 50 et 100
 */

var userInput=prompt("Veuillez saisir un nombre : ");
var numberInput=Number(userInput);

console.log("début du programme");

// Valeur <=100
/*while (numberInput>100) {
   alert("Saisie incorrecte \n- votre nombre " + numberInput + " doit être inférieur ou égal à 100");
   userInput=prompt("Veuillez saisir un nombre : ");
   numberInput=Number(userInput);
}
 console.log("fin du programme");*/

 // Valeur comprise entre 50 et 100 --> si 50<=x et x<=100

 while (numberInput<50 || numberInput>100) {
    alert("Saisie incorrecte \n- votre nombre " + numberInput + " doit être comrpis entre 50 et 100");
    userInput=prompt("Veuillez saisir un nouveau nombre : ");
    numberInput=Number(userInput);
 }
 console.log("fin du programme");
