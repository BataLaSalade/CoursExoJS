/*
    L'utilisateur saisi 2 nombres
    Le système compare les deux valeurs
    Le système affiche un message approprié = qui décrit la comparaison
*/

var userInput1 = prompt("Saisissez votre 1ère valeur : "); // user input
var userInput2 = prompt("Saisissez votre 2ème valeur : "); // user input
var userInputNumber1=Number(userInput1); // conversion de la saisie en nombre puisqu'on compare des nombres
var userInputNumber2=Number(userInput2);

if( !isNaN(userInputNumber1) && !isNaN(userInputNumber2)) {
    if (userInputNumber1 === userInputNumber2) {
        console.log(userInputNumber1 + " = " + userInputNumber2);
    }
    else if (userInputNumber1 < userInputNumber2) {
        console.log(userInputNumber1 + " est inférieur à " + userInputNumber2);
    }
    else if (userInputNumber1 > userInputNumber2) {
        console.log(userInputNumber1 + " est supérieur à " + userInputNumber2);
    }
}
else {
    console.log("une des deux valeurs n'est pas un nombre : valeur 1 = " + userInput1 + " et valeur 2 = " + userInput2);
}
    

//userInputNumber1===NaN
//typeof(myvar)==="number"