class BankAccount {
    constructor(accountType, balance = 0) {
        this.accountType = accountType;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposit successful! Your new balance is ${this.balance}`);
    }

    transfer(amount) {
        let limit = this.accountType === 'current' ? 50000 : 25000;
        if (amount > limit) {
            console.log(`Transfer failed! Maximum transfer limit for ${this.accountType} account is ${limit}.`);
        } else if (amount > this.balance) {
            console.log(`Transfer failed! Insufficient balance.`);
        } else {
            this.balance -= amount;
            console.log(`Transfer successful! Your new balance is ${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`Your current balance is ${this.balance}`);
    }
}

class Bank {
    constructor() {
        this.user = null;
    }

    openAccount() {
        const accountType = prompt('Please choose account type: current or saving?').toLowerCase();
        if (accountType !== 'current' && accountType !== 'saving') {
            console.log('Invalid account type! Please try again.');
            return;
        }
        this.user = new BankAccount(accountType);
        console.log(`Account created successfully! You have opened a ${accountType} account.`);
        this.showMenu();
    }

    showMenu() {
        while (true) {
            const option = prompt('Choose an option: \n1. Cash Deposit \n2. Cash Transfer \n3. Check Balance \n4. Exit');
            switch (option) {
                case '1':
                    const depositAmount = parseFloat(prompt('Enter amount to deposit:'));
                    if (!isNaN(depositAmount) && depositAmount > 0) {
                        this.user.deposit(depositAmount);
                    } else {
                        console.log('Invalid deposit amount!');
                    }
                    break;
                case '2':
                    const transferAmount = parseFloat(prompt('Enter amount to transfer:'));
                    if (!isNaN(transferAmount) && transferAmount > 0) {
                        this.user.transfer(transferAmount);
                    } else {
                        console.log('Invalid transfer amount!');
                    }
                    break;
                case '3':
                    this.user.checkBalance();
                    break;
                case '4':
                    console.log('Exiting...');
                    return;
                default:
                    console.log('Invalid option! Please try again.');
            }
        }
    }

    start() {
        while (!this.user) {
            this.openAccount();
        }
    }
}

const bank = new Bank();
bank.start();
