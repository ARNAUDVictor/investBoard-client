export class ListTransactionModel {
    constructor(){
        this.listTransaction = [];
        this.header = ["Opération", "N°Contrat", "Projet", "Date", "Montant", "Remarques", 
                        "Capital remboursé","Intérêts remboursés", "Prélèvements fiscaux et sociaux"]
    }

    processedNewTransaction(transactionsList){
        transactionsList.forEach(ligne => {
            let tempLigne = {};
            for(let i=0; i < ligne.length; i++){
                tempLigne[this.header[i]] = ligne[i];
            }
            this.listTransaction.push(tempLigne);
        });
        console.log(this.listTransaction);
    }

    
     
}