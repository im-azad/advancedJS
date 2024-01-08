class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    (this.accountNumber = accountNumber), (this.accountHolder = accountHolder);
    this.balance = balance;
  }

  // deposit 
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`You deposited $${amount}. New balance is $${this.balance}`);
    } else {
      console.log("Can't deposit a negative amount");
    }
  }

  // withdraw
  withdraw(amount) {
    if(amount > this.balance) {
      console.log("You can't withdraw that much!");
    }
    else {
      this.balance -= amount
      console.log(`You withdraw $${amount}. New balance is $${this.balance}`);

    }
  }

  
}
