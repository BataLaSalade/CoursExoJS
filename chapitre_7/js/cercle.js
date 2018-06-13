var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle={
    rayon : r,
    perimetre: function (){
        var calculPerim=2*Math.PI*r;
        return calculPerim;
    },
    aire: function(){
        var calculAire=Math.PI*r*r;
        return calculAire;

    }
}

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());