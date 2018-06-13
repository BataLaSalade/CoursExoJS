/*
    Ecrire un programme qui contient 2 fonctions :
    perimetre() --> calcule le périmètre d'un cercle --> 2*pi*R
    aire() --> calcule l'aire d'un cercle --> pi*R²
    A partir du rayon
    La valeur du rayon est saisi par l'utilisateur
    Obtenir la valeur de pi avec Math.PI
*/

function perimetre(rayon) {
    var calculPerim=2*Math.PI*rayon;
    return calculPerim;
}

function aire(rayon) {
    var calculAire=Math.PI*rayon*rayon;
    return calculAire;
}

var rayonCercle=prompt("Saisissez la valeur du rayon de votre cercle : ");

console.log("Rayon = " + rayonCercle + "\n" + "Périmètre = " + perimetre(rayonCercle) + "\n" + "Aire = " + aire(rayonCercle));