// TODO : écrire la fonction calculer()
function calculer(param1, param2, param3) {
    var addition=param1+param3;
    var soustraction=param1-param3;
    var multiplication=param1*param3;
    var division=param1/param3;

    if(param2=="+"){
        return addition;
    }
    else if (param2=="-") {
        return soustraction;
    }
    else if (param2=="*") {
        return multiplication;
    }else if (param2=="/") {
        return division;
    }
}


console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity