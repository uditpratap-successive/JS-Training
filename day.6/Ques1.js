//1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
    constructor(owner, balance) {
        this.ownername = owner;
        this.balanceremain = balance;
    }
    deposit() {
        console.log(`My name is ${this.ownername} and I want to deposit the ${this.balanceremain} rupees`);
    }
    withdraw() {
        console.log(`My name is ${this.name} and I want to withdraw my remaining ${this.balanceremain} rupees`);
    }
    displayBalance() {
        console.log(`Money remains in my bank account is ${this.balanceremain} rupees`);
    }

}

let person1 = new BankAccount('Sahil', '266778');
let person2 = new BankAccount('7000');
person2.displayBalance();
person1.deposit();

/*utput= Money remains in my bank account is undefined rupees
My name is Sahil and I want to deposit the 266778 rupees
*/