// Renvoie le carré d'un nombre
/*function carre(x) {
      // TODO : compléter le code de la fonction
    var carre=x*x;
    return carre;
    }
    
    console.log(carre(0)); // Doit afficher 0
    console.log(carre(2)); // Doit afficher 4
    console.log(carre(5)); // Doit afficher 25
*/

// Modifier le programme pour qu'il affiche le carré de tous les nombre compris entre 0 et 100

/*function carre(x) {
    resultCarre=x*x;
    return resultCarre;
}

console.log("Début du programme");

for (i=0; i<=100; i++){
    console.log(carre(i));
}

console.log("Fin du programme");*/

// refacto pour ne faire appel au console.log qu'une fois et en dehors de la boucle

function carre(x) {
    resultCarre=x*x;
    return resultCarre;
}

var message="Début du prgramme";

for (i=0; i<=100; i++){
    message+= "\n" + carre(i);
}

message+="\nFin du programme";

console.log(message);