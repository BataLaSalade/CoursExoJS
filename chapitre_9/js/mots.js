var userInput=prompt("Saisissez un mot pour l'ajouter à la liste. \nPour terminer le programme saisissez \"stop\" ");
var userInputCleaned=userInput.toLocaleLowerCase();

//création du tableau
var listeMots=[];

// tant que l'utilisateur ne saisit pas "stop", j'ajoute sa saisie au tableau
while(userInputCleaned!=="stop"){
    listeMots.push(userInputCleaned);
    userInput=prompt("Saisissez un mot pour l'ajouter à la liste. \nPour terminer le programme saisissez \"stop\" ");
    userInputCleaned=userInput.toLocaleLowerCase();
    
};
console.log(listeMots);
// si la dernière saisi est stop, j'affiche la liste du tableau
/*if(userInputCleaned==="stop"){
    for(i=0; i<listeMots.length; i++){
        console.log(listeMots[i]);
    };
}*/