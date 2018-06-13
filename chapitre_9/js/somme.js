var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;

console.log("Solution 1 avec forEach()");

valeurs.forEach(function(valeur){
    somme += valeur;
});
console.log("La somme des éléments vaut " + somme);

console.log("Solution 2 avec for");
somme=0;
for(i=0; i<valeurs.length; i++){
    somme += valeurs[i];
};
console.log("La somme des éléments vaut " + somme);