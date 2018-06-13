
var compte={
    titulaire:"Alex",
    solde:0,
    crediter: function(montantCredite){
        this.solde = this.solde + montantCredite;
    },
    debiter: function(montantDebite){
        this.solde = this.solde - montantDebite;
    },
    decrire: function(){
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
}

console.log(compte.decrire());

var creditUserInput=Number(prompt("Saisissez le montant à créditer sur votre compte :"));
compte.crediter(creditUserInput);
var debitUserInput=Number(prompt("Saisissez le montant à débiter de votre compte :"));
compte.debiter(debitUserInput);

console.log(compte.decrire());