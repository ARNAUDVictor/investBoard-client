import {ListTransactionController} from "../listTransaction/listTransactionController";
import {ListTransactionView} from "../listTransaction/listTransactionView";
import {ListTransactionModel} from "../listTransaction/listTransactionModel";

export class PlatformController{
    constructor(view, controller){
        this.view = view;
        this.controller = controller;
        this.listTransaction = new ListTransactionController(new ListTransactionView(), new ListTransactionModel());
        this.listenForNewTransaction();
    }

    listenForNewTransaction(){
        window.addEventListener("dataParsed", (event) =>{
            this.listTransaction.receiveNewTransaction(event.detail);
        });
    }
}