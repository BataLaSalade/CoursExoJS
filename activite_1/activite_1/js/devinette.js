/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// Saisi utilisateur
var userInput=prompt("Saisissez un nombre :");
// conversion de la saisi en nombre
var numberUserInput=Number(userInput);
// Variables compteur et tentative
var nbTry=6;
var i=0;

// vérification de la saisi : si la saisi est un nombre, j'execute le bloc, sinon j'affiche un message d'erreur
if(!isNaN(numberUserInput)) {
    //conditions d'entrée dans la boucle
    while((i<nbTry) && (numberUserInput!==solution)) {
        if(numberUserInput<solution){
            console.log(numberUserInput + " est trop petit"); 
        }
        else{
            console.log(numberUserInput + " est trop grand");
        }
        i++;
        userInput=prompt("Saisissez un nombre :");
        numberUserInput=Number(userInput);
    }
    // Conditions à vérifier à la sortie de la boucle
    if (numberUserInput==solution) {
        console.log("Bravo ! La solution était " + solution + "\n Vous avez trouvé en " + (i+1) + " essai(s)")
    }
    else{
        console.log("Malgré les " + i +  " tentatives, vous avez perdu... La solution était " + solution)
    }
}
else{
    console.log(userInput + " n'est pas un nombre");
}