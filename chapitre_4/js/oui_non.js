/*
Le jeu du ni oui, ni non
Le système pose une question de type fermé,
si l'utilisateur reponds par oui ou par non, il perd le jeu.
A contrario, tant qu'il repond pas autre chose, le système continue à poser la question
*/

console.log("début du programme");

var userInput=prompt("Salut, ca va ?");
userInputCleaned=userInput.toLowerCase();
//var yes="oui";
//var no="non";

while ((userInputCleaned!=="oui") && (userInputCleaned!=="non")) {
    userInput=prompt("Alors ? Ca va ?");
    userInputCleaned=userInput.toLowerCase();
}
console.log("fin du programme - t'as perdu !");