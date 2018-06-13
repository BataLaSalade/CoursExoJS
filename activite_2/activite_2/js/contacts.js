/* 
Activité : gestion des contacts
Objet contact : prenom + nom
tableau qui regroupe la liste des contacts
fonction qui permet 
    --> d'ajouter un contact saisi par l'utilisateur a la liste des contacts
    --> affiche un message validant l'ajout du nouveau contact
boucle qui demande à l'utilisateur de choisir entre :
    1. afficher la liste des contact
    2. ajouter un contact
    0. quitter le programme
*/

// TODO : complétez le programme

// modèle de l'objet contact
var Contact = {
    init : function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }
};

// initialisation de l'objet contact à partir du prototype Contact 
var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");
var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");

// Création d'un tableau pour stocker les contacts
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);



// création des fonctionnalités
// 1 - afficher la liste des contacts
function afficherContact () {
    for(i=0; i<contacts.length; i++) {
        var contactAffiche = "Prénom : " + contacts[i].prenom + ", nom " + contacts[i].nom;
        console.log(contactAffiche);
    };
};

// 2 - creer un nouveau contact
function creerContact(prenomContact, nomContact) {
    var nouveauContact = Object.create(Contact);
    nouveauContact.init(prenomContact, nomContact);
    contacts.push(nouveauContact);
    var message = "Le nouveau contact a été ajouté"
    return message;
};


console.log("Bienvenue dans le gestionnaire de contacts ! \n1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter \n-----\n ")
var userChoise = prompt("Choisissez une option :");
while(userChoise !== "0") {
    if (userChoise === "1") {
        console.log("Voici la liste des contacts enregistrés :");
        afficherContact();
    }
    else if (userChoise === "2") {
        var userAddPrenom = prompt("Entrez le prénom du nouveau contact :");
        var userAddNom = prompt("Entrez le nom du nouveau contact :");
        console.log(creerContact(userAddPrenom, userAddNom));
    }
    else{
        console.log("Cette fonctionnalité n'existe pas")
    }
    console.log("\n-----\n1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter \n-----\n ")
    userChoise = prompt("Choisissez une option :");
};
console.log("Au revoir !")




