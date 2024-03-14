//1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().


class BankAccount {
    constructor(owner, balance) {
        this.ownername = owner;
        this.balanceremain = balance;
    }
    deposit(amount) {
        this.balanceremain=this.balanceremain+amount
        console.log(this.balanceremain);
    }
    withdraw(amount) {
        this.balanceremain-=amount;
        console.log(this.balanceremain)

    }
    displayBalance(amount) {
        console.log(`Money remains in my bank account is ${this.balanceremain} rupees`);
    }

}

let person1 = new BankAccount('Sahil', 9000);
person1.deposit(500);
person1.withdraw(500);
person1.displayBalance();


// 9500
// 9000
// Money remains in my bank account is 9000 rupees