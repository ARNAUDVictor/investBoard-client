export class ListTransactionModel {
    constructor(){
        this.listTransaction = [];
        this.header = ["Opération", "N°Contrat", "Projet", "Date", "Montant", "Remarques", 
                        "Capital remboursé","Intérêts remboursés", "Prélèvements fiscaux et sociaux"];
        this.dataReadyCallback = null;
    }

    processedNewTransaction(transactionsList){
        let tempLigne = [];
        transactionsList.forEach(ligne => {
            for(let i=0; i < ligne.length; i++){
                tempLigne[this.header[i]] = ligne[i];
            }
            this.listTransaction.push(tempLigne);
        });
        this.dataReadyCallback(this.listTransaction);
    }

    bindNewTransactionReady(handler){
        this.dataReadyCallback = handler;
    }
     
}