class Account {
  constructor(accountType) {
    this.accountType = accountType;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Successfully deposited Rs.${amount}. New balance: Rs.${this.balance}`);
  }

  transfer(amount, recipientAccount) {
    if (this.accountType === 'current' && amount > 50000) {
      console.log("Error: Cannot transfer more than Rs.50,000 in a current account.");
      return;
