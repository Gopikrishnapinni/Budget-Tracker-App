import { Transaction } from '../models/Transaction.js';
import { TransactionType } from '../models/TransactionType.js';
import { Budget } from '../models/Budget.js';
import chalk from 'chalk';

export class BudgetService {
  constructor() {
    this.budget = new Budget();
  }

  addIncome(amount, description) {
    const income = new Transaction(amount, description, TransactionType.INCOME);
    this.budget.addTransaction(income);
  }

  addExpense(amount, description) {
    const expense = new Transaction(amount, description, TransactionType.EXPENSE);
    this.budget.addTransaction(expense);
  }

  getCurrentBalance() {
    return this.budget.getBalance();
  }

  displayTransactions() {
    console.log(chalk.bold('\nTransaction History:'));
    console.log(chalk.gray('-------------------'));
    
    this.budget.getTransactions().forEach(t => {
      const date = t.getDate().toLocaleDateString();
      const type = t.getType() === TransactionType.INCOME 
        ? chalk.green(t.getType()) 
        : chalk.red(t.getType());
      const amount = t.getType() === TransactionType.INCOME
        ? chalk.green(`$${t.getAmount().toFixed(2)}`)
        : chalk.red(`$${t.getAmount().toFixed(2)}`);
      
      console.log(`${date} | ${type} | ${amount} | ${t.getDescription()}`);
    });

    const balance = this.getCurrentBalance();
    console.log(chalk.bold(`\nCurrent Balance: ${
      balance >= 0 
        ? chalk.green(`$${balance.toFixed(2)}`)
        : chalk.red(`$${balance.toFixed(2)}`)
    }`));
  }
}