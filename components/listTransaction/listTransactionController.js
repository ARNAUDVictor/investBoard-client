export class ListTransactionController{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.model.bindNewTransactionReady(this.newTransactionReadyToDisplay);
    }

    receiveNewTransaction(transactions){
        this.model.processedNewTransaction(transactions);
    }

    newTransactionReadyToDisplay = (transactions) =>{
        this.view.displayTransaction(transactions);
        console.log("nouvelle transaction dipso.");
    }
}