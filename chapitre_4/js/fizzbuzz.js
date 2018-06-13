/*
    Le programme affiche :
        tous les nombres compris entre [1-100]
        Si le nombre est divisible par 3
            --> affiche "Fizz"
        Si le nombre est divisible par 5
            --> affiche "Buzz"
 */
var message = "Debut"
 for (i=1; i<=100; i++){
    if (i%3==0){
        message += "\nFizz";
    } 
    else if (i%5==0) {
        message += "\nBuzz";
    }
    else{
        message += "\n" + i;
    }
 }
 message += "\nFin"
 console.log(message)


