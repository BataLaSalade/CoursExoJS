var unObjet = {
    a:2
};
// crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a);

//crée encoreUnObjet avec unAutreObjet comme prototype
var encoreUnObjet=Object.create(unAutreObjet);
console.log(encoreUnObjet.a);
console.log(encoreUnObjet.b);