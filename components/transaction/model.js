class TransactionModel {
    /**
     * @param {Date} date 
     * @param {number} amount of the transaction
     * @param {string} type of operation
     * @param {string} number transaction number
     * @param {string} name from emeter
     * @param {string} remark
     * @param {number} capital 
     * @param {number} interest 
     * @param {number} tax Tax withholding 
     */

    constructor(date, amount, operation, number, name, remark, capital, interest, tax) {
        this.date = new Date(date);
        this.amount = amount;
        this.operation = operation;
        this.number = number;
        this.name = name;
        this.remark = remark;
        this.capital = capital;
        this.interest = interest;
        this.tax = tax;
    }
     
}