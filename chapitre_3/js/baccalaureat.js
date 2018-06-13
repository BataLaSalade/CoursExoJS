/*
L'utilisateur (candidat) saisit sa moyenne
Le système compare sa moyenne a des valeurs données
Le systeme affiche différent message selon les conditions :
moyenne < 10 --> recalé
10<moyenne<12 --> reçu
moyenne >= 12 --> reçu avec mention
*/

var userInput = prompt("Saisissez votre moyenne !");
var condRecale = 10;
var condRecu = 12;

var numberInput=Number(userInput);

if (!isNaN(userInput)) {
    if(numberInput<10){
        console.log("Oups, vous êtes recalé...");
    }
    else if ((numberInput>=10)&&(numberInput<12)){
        console.log("Bravo, vous êtes reçu !")
    }
    else if (numberInput>=12){
        console.log("Félicitation, vous êtes reçu avec mention !!")
    }
}
else{
    console.log("Vous avez saisi" + userInput + " j'imagine que vous n'avez pas été reçu");
}