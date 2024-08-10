export class ListTransactionController{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.model.bindNewTransactionReady(this.newTransactionReadyToDisplay);
        this.transactionTableReadyCallback = null;
    }

    receiveNewTransaction(transactions){
        this.model.processedNewTransaction(transactions);
    }

    newTransactionReadyToDisplay = (transactions) =>{
        const table = this.view.displayTransaction(transactions);
        this.transactionTableReadyCallback(table); // fait remonter la table au controller parent
        console.log("nouvelle transaction dipso.");
    }

    bindTransactionTableReady(callback){
        this.transactionTableReadyCallback = callback;
        console.log(this.transactionTableReadyCallback);
    }
}