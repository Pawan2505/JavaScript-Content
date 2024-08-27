
class BankAccount {
    constructor(balance) {
        this._balance = balance; // Private property
    }

    deposit(amount) {
        this._balance += amount;
    }

    getBalance() {
        return this._balance;
    }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); 
