export class ListTransactionController{
    constructor(view, model){
        this.view = view;
        this.model = model;
    }

    receiveNewTransaction(transactions){
        this.model.processedNewTransaction(transactions);
    }

    
}