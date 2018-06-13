var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var chenil=[];

var chien1 = Object.create(Chien);
chien1.init("Crokdur", "mâtin de Naples", 75);
chenil.push(chien1);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);
chenil.push(chien2);

var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);
chenil.push(chien3);

console.log(chenil);
console.log("Le chenil héberge " + chenil.length + " chien(s) : ")

for (i=0; i<chenil.length; i++){
    console.log(chenil[i].nom + " est un " + chenil[i].race + " mesurant " + chenil[i].taille + " cm. Il aboie : " + chenil[i].aboyer());
};

console.log("----- ForEach -----");

chenil.forEach(function(chien){
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. Il aboie : " + chien.aboyer());
});

function soustraction(nombre1, nombre2) {
    return nombre2 - nombre1;
 }
 console.log(soustraction(5, 7));