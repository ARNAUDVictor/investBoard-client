export class ListTransactionView{
    constructor(){
        this.transactionTableReady = null;
    }

    displayTransaction(transactions){
        const table = document.createElement("table");
        const header = transactions[0];
        const mainData = transactions.splice(1);
        table.appendChild(this.createRow(header, true));
        mainData.forEach(row => {
            table.appendChild(this.createRow(row));
        });

    }

    createRow(data, header = false){
        const row = document.createElement("tr");
        console.log(data);
        let cell = null;
        for(let cellValue in data){
            if(header){    
                cell = row.appendChild(document.createElement("th"));
            }else{
                cell = row.appendChild(document.createElement("td"));
            }
            cell.innerText = cellValue;
        }
        return row;
    }

    bindTransactionTableReady(handler){
        this.transactionTableReady = handler;
    }
}