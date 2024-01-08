class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    (this.accountNumber = accountNumber), (this.accountHolder = accountHolder);
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`You deposited $${amount}. New blance is $${this.balance}`);
    } else {
      console.log("Can't deposit a negative amount");
    }
  }

  
}
