export class ListTransactionView{
    constructor(){
        this.transactionTableReadyCallback = null;
    }

    displayTransaction(transactions){
        console.log(transactions);
        const table = document.createElement("table");
        const header = transactions[0];
        const mainData = transactions.splice(1);
        table.appendChild(this.createRow(header, true));
        mainData.forEach(row => {
            table.appendChild(this.createRow(row));
        });
        return table;
    }

    createRow(data, header = false){
        const row = document.createElement("tr");
        let cell = null;
        for(const [key, value] of Object.entries(data)){
            if(header){    
                cell = row.appendChild(document.createElement("th"));
            }else{
                cell = row.appendChild(document.createElement("td"));
            }
            cell.innerText = value;
        }
        return row;
    }
}