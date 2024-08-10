import {ListTransactionController} from "../listTransaction/listTransactionController";
import {ListTransactionView} from "../listTransaction/listTransactionView";
import {ListTransactionModel} from "../listTransaction/listTransactionModel";

export class PlatformController{
    constructor(view, controller){
        this.view = view;
        this.controller = controller;
        this.listTransaction = new ListTransactionController(new ListTransactionView(), new ListTransactionModel());
        this.listenForNewTransaction();
        this.listTransaction.bindTransactionTableReady(this.handleTransactionTableReady);
    }

    listenForNewTransaction(){
        window.addEventListener("dataParsed", (event) =>{
            this.listTransaction.receiveNewTransaction(event.detail);
        });
    }

    /**
     * Get the HTML table create from listTransaction when it's ready
     * @param {*} table 
     */
    handleTransactionTableReady = (table) =>{
        console.log(table);
    }
}