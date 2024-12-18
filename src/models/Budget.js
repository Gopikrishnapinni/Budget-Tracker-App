export class Budget {
  constructor() {
    this.balance = 0.0;
    this.transactions = [];
  }

  addTransaction(transaction) {
    if (transaction.getType() === 'INCOME') {
      this.balance += transaction.getAmount();
    } else {
      this.balance -= transaction.getAmount();
    }
    this.transactions.push(transaction);
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return [...this.transactions];
  }
}