var userInput=prompt("Saisissez un nombre initial:");
var numberInput=Number(userInput);

for (var i=numberInput; i<numberInput+10; i++){
    if(i%2 ===0){
        console.log(i + " est pair");
    }
    else{
        console.log(i + " est impair");
    }
}