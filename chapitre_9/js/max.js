var valeurs = [11, 3, 7, 2, 9, 10];
var max=valeurs[0];
for(i=0; i<valeurs.length; i++){
    if(valeurs[i]>max ){
        max=valeurs[i];
    }
};
console.log("Le maximum des éléments vaut " + max);
