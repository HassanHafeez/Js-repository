// Define the bank account class
class BankAccount {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Invalid amount. Please enter a positive number.');
    }
  }

  transfer(amount, recipient) {
    if (amount > 0 && recipient instanceof BankAccount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        recipient.balance += amount;
        console.log(`Transferred ${amount} to ${recipient.name}. New balance: ${this.balance}`);
      } else {
        console.log('Insufficient balance.');
      }
    } else {
      console.log('Invalid amount or recipient.');
    }
  }

  checkBalance() {
    console.log(`Balance: ${this.balance}`);
  }
}

// Create a bank account
const account1 = new BankAccount('John Doe');

// Deposit money
console.log('Deposit:');
const depositAmount = parseFloat(prompt('Enter amount to deposit: '));
account1.deposit(depositAmount);

// Transfer money
console.log('Transfer:');
const transferAmount = parseFloat(prompt('Enter amount to transfer: '));
const recipientName = prompt('Enter recipient name: ');
const account2 = new BankAccount(recipientName);
account1.transfer(transferAmount, account2);

// Check balance
console.log('Balance:');
account1.checkBalance();
account2.checkBalance();
