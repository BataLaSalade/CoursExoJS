// TODO : écrire la fonction min()
function min(param1, param2) {
    if (param1<param2){
        return param1;
    }
    else{
        return param2;
    }
    
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1