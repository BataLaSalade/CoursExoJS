/*
    L'utilisateur saisit un mot
    Le programme affiche le mot et les informations suivantes :
        longueur du mot
        la version minuscule du mot
        la version majuscule du mot
*/

// créer une fonction qui compte le nombre de voyelle et de consonne

function compterNbVoyelles(word) {
    userInputMin=word.toLowerCase();
    var nbVoyelle=0;
    for(i=0; i<userInputMin.length; i++){
        if(userInputMin[i]==="a" || userInputMin[i]==="e" || userInputMin[i]==="i" || userInputMin[i]==="o" || userInputMin[i]==="u" ||userInputMin[i]==="y" || userInputMin[i]==="é" || userInputMin[i]==="è" || userInputMin[i]==="à"|| userInputMin[i]==="ù"){
            nbVoyelle++
        }
    }
    return nbVoyelle;
}

function inverser(word) {
    userInputMin=word.toLowerCase();
    motInverse="";
    for(i=userInputLenght-1; i>=0; i--){
        motInverse+=userInputMin[i];
    }
    return motInverse;
}

function trouverLettreLeet(letter) {
    var myLetter="";
    letterMin=letter.toLowerCase();
    switch (letterMin) {
        case "a":
            myLetter="4";
            break;
        case "b":
            myLetter="8";
            break;
        case "e":
            myLetter="3";
            break;
        case "l":
            myLetter="1";
            break;
        case "o":
            myLetter="0";
            break;
        case "s":
            myLetter="5";
            break;
        case "p":
            myLetter="9";
            break;
        default:
            break;
    }
    return myLetter;
}

function convertirEnLeetSpeak(word) {
    userInputMin=word.toLowerCase();
    var wordConverted="";
    for(i=0; i<userInputMin.length; i++){
        if(userInputMin[i]==="a" || userInputMin[i]==="b" || userInputMin[i]==="e" || userInputMin[i]==="l" || userInputMin[i]==="o" || userInputMin[i]==="s" || userInputMin[i]==="p" ){
            letterLeet=trouverLettreLeet(userInputMin[i]);
            wordConverted+=letterLeet;
            //console.log(letterLeet);
       }
       else{
           wordConverted+=userInputMin[i];
       }
    }
    return wordConverted;
}

// saisie utilisateur
var userInput=prompt("Saisissez un mot");

// info longueur
var userInputLenght=userInput.length;
//console.log("Le mot " + userInput + " contient " + userInputLenght + " caractère(s)");

// conversion MIN
var userInputMin=userInput.toLowerCase();
//console.log("Il s'écrit en minuscules " + userInputMin);

// conversion MAJ
var userInputMaj=userInput.toUpperCase();
//console.log("Il s'écrit en majuscules " + userInputMaj);

// info nombre de voyelles et consonnes
var voyelles=compterNbVoyelles(userInput);
var consonnes=userInputLenght-voyelles;
//console.log("Il contient " + voyelles + " voyelle(s) et " + consonnes + " consonne(s)");

// inversion mot
var inverserMot=inverser(userInput);
//console.log("Il s'écrit à l'envers " + inverserMot);

// verif si saisi utilisateur est un palindrome
var isPalindrome="";
if(userInputMin===inverserMot){
   isPalindrome="C'est un palindrome";
}
else{
    isPalindrome="Ce n'est pas un palindrome";
}
//console.log(isPalindrome);

//conversion en Leet speak
var userInputConverted=convertirEnLeetSpeak(userInput)
//console.log(userInputConverted);

console.log("-----")

console.log("Le mot " + userInput + " contient " + userInputLenght + " caractère(s) \nIl s'écrit en minuscules " + userInputMin + "\nIl s'écrit en majuscules " + userInputMaj + "\nIl contient " + voyelles + " voyelle(s) et " + consonnes + " consonne(s) \nIl s'écrit à l'envers " + inverserMot + "\nC'est un " + isPalindrome + "\nIl s'écrit en leet speak " + userInputConverted);


