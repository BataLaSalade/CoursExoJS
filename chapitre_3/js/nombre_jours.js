/*
L'utilisateur saisi le numéro d'un mois [1-12]
Le systeme affiche le nombre de jours correspondant au mois
Années bissextiles = OSEF
*/


//Je déclare mes var
var userInput = prompt("Saisissez le numéro correspondant à un mois :");
var nbJours1 = 31;
var nbJours2 = 30;
var nbJours3 = 28;
//Je clean l'input
var numberInput = Number(userInput);
// j'écris mes conditions d'entrée
/*if ((!isNaN(numberInput)) && (numberInput>=1) && (numberInput<=12)){ // si l'input est un nombre et qu'il est compris entre 1 et 12 alors
    switch (numberInput) {  // Utilisation d'un switch car on connait les valeurs que peuvent prendre l'input et la liste n'est pas énorme
        case 1:             // Liste des mois à 31 jours
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Ce mois comporte " + nbJours1 + " jours");
            break;
        case 2:             // Liste des mois à 28 jours
            console.log("Ce mois comporte " + nbJours3 + " jours");
            break;  
        case 4:             // Liste des mois à 30 jours
        case 6:
        case 9:
        case 11:
            console.log("Ce mois comporte " + nbJours2 + " jours")
            break;
    }
}
else {
    console.log("Votre saisi ne correspond pas au numéro d'un mois ou n'est pas un nombre. Actualisez votre navigateur et saisissez un nombre compris entre 1 et 12.");
}*/

//Autre version possible
// Prend moins de place
var listMoisA31 = [1,3,5,7,8,10,12];
var listMoisA30 = [4, 6, 9, 11];

if ((!isNaN(numberInput)) && (numberInput>=1) && (numberInput<=12)){ // si l'input est un nombre et qu'il est compris entre 1 et 12 alors
    if (listMoisA31.indexOf(numberInput) != -1){
        console.log("Ce mois comporte " + nbJours1 + " jours");
    }else if (listMoisA30.indexOf(numberInput) != -1){
        console.log("Ce mois comporte " + nbJours2 + " jours");
    }else if (numberInput===2){
        console.log("Ce mois comporte " + nbJours3 + " jours");
    }
}
else {
    console.log("Votre saisi ne correspond pas au numéro d'un mois ou n'est pas un nombre. \n Actualisez votre navigateur et saisissez un nombre compris entre 1 et 12.");
}