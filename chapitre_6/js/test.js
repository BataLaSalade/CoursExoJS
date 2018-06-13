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

var userInput=prompt("un mot");
var userInputConverted=convertirEnLeetSpeak(userInput)
console.log(userInputConverted);