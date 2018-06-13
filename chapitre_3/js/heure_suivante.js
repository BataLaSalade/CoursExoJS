/*
    L'utilisateur saisi l'heure.
    La saisi se fait avec 3 valeurs :
        Les heures
        Les minutes
        Les secondes
    Le systeme affiche l'heure qu'il sera 1 seconde plus tard
*/

// Les variables
var hourInput=prompt("Saisissez l'heure :");
var minuteInput=prompt("Saisissez les minutes :");
var secondInput=prompt("Saisissez les secondes :");

var numHourInput=Number(hourInput);
var numMinuteInput=Number(minuteInput);
var numSecondInput=Number(secondInput);

/*
    0<=hour<=23
    0<=minute<=59
    0<=second<=59

    tant que second est <59, l'ajout de 1 seconde n'affecte pas les heure et les minutes
    donc si input = 14h 20min 30sec --> une sec plus tard il sera 14h 20min 31 sec

    Autre façon de le dire :
    Si hour [0-23[, minute [0-59[ et second [0-59[
        alors hour=hour, minute=minute et second=second++
    sinon
    Si hour [0-23[, minute [0-59[ et second=59
        Alors hour=hour, minute=minute++ et second=0
    Si hour[0-23[, minute = 59 et sec=59
        alors hour=hour++, min=0, sec=0
    Si hour=23, min=59 et sec=59
        alors hour=0, min=0, sec=0

    
*/

/*if (!isNaN(numHourInput) && !isNaN(numMinuteInput) && !isNaN(numSecondInput)) {
    if((numHourInput>=0 && numHourInput<23) && (numMinuteInput>=0 && numMinuteInput<59) && (numSecondInput>=0 && numSecondInput<59)){
        numSecondInput++;
        console.log(numHourInput+"h"+numMinuteInput+"min"+numSecondInput+"sec");
    }else if ((numHourInput>=0 && numHourInput<23) && (numMinuteInput>=0 && numMinuteInput<59) && (numSecondInput=59)){
        numSecondInput=0;
        numMinuteInput++;
        console.log(numHourInput+"h"+numMinuteInput+"min"+numSecondInput+"sec");
    }else if((numHourInput>=0 && numHourInput<23) && (numMinuteInput=59) && (numSecondInput=59)){
        numSecondInput=0;
        numMinuteInput=0;
        numHourInput++;
        console.log(numHourInput+"h"+numMinuteInput+"min"+numSecondInput+"sec");
    }else if((numHourInput=23) && (numMinuteInput=59) && (numSecondInput=59)){
        numSecondInput=0;
        numMinuteInput=0;
        numHourInput=0;
        console.log(numHourInput+"h"+numMinuteInput+"min"+numSecondInput+"sec");
    }
}
else{
    console.log("Votre saisi est incorrecte");
}*/
// autre façon
/*
Si l'input est un chiffre, que 0<=heure<=23, que 0<=min<=59 et 0<=sec<=59
    Alors j'incrémente les sec
    Et je verifie la valeur de sec apres l'incrémentation
    Si sec++=60
        alors sec=0 et min++
        et je verifie la valeur de min apres l'incré
        Si min++=60
            alors sec=0, min=0 et heure++
            et je verif la valeur de heure
            si heure++=24
                alors sec=0 min=0 et h=0
sinon affiche un message d'erreur
*/
// Condition d'entrée
if((!isNaN(numHourInput) && !isNaN(numMinuteInput) && !isNaN(numSecondInput)) && ((numHourInput>=0 && numHourInput<=23) && (numMinuteInput>=0 && numMinuteInput<=59) && (numSecondInput>=0 && numSecondInput<=59))){
    numSecondInput++;           // j'incrémente les sec
    if(numSecondInput===60){    //si sec++=60
        numSecondInput=0;       //je remets les sec=0
        numMinuteInput++;       //j'incré les min
        if(numMinuteInput===60){    //si min++=60
            numMinuteInput=0;       // les sec sont deja à 0, je mets les min à 0
            numHourInput++;         //j'incré les heures
            if (numHourInput===24){     //si heure++=24
                numHourInput=0;         // les sec et les min sont déja à 0 et je mets les heures à 0
            }
        }
    }
    console.log("Une seconde plus tard...\n il est " + numHourInput + "h" + numMinuteInput + "min" + numSecondInput + "s");
}
else{
    console.log("Votre saisi est incorrecte");
}