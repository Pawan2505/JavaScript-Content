function BankAccount(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
};

BankAccount.prototype.getBalance = function() {
    return this.balance;
};

var account = new BankAccount("12345678", "Pawan", 500);
account.deposit(200);
console.log(account.getBalance()); 
