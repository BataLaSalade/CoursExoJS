// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat

console.log("Début du programme");

var userFirstName=prompt("Saisissez votre prénom :");
var userLastName=prompt("Saisissez votre nom :");

console.log(direBonjour(userFirstName, userLastName));

console.log("Fin du programme");
