export class Transaction {
  constructor(amount, description, type) {
    this.amount = amount;
    this.description = description;
    this.date = new Date();
    this.type = type;
  }

  getAmount() { return this.amount; }
  getDescription() { return this.description; }
  getDate() { return this.date; }
  getType() { return this.type; }
}