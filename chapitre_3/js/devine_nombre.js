var userInput = prompt("Quel nombre j'ai marqué ?");
var numberInput = Number(userInput);
var nombreMystère = 5;
if(numberInput == nombreMystère) {
    console.log("Youpi");
}
else {
    console.log("tu es null !!! " + userInput)
}