import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { BudgetService } from './src/services/BudgetService.js';
import { InputValidator } from './src/utils/InputValidator.js';

class BudgetTrackerApp {
  constructor() {
    this.budgetService = new BudgetService();
  }

  displayMenu() {
    console.log(chalk.bold('\nBudget Tracker Menu'));
    console.log('1. Add Income');
    console.log('2. Add Expense');
    console.log('3. View Transactions');
    console.log('4. Exit');
  }

  addIncome() {
    const amount = parseFloat(readlineSync.question('Enter income amount: $'));
    
    if (!InputValidator.isValidAmount(amount)) {
      console.log(chalk.red('Invalid amount. Please enter a positive number.'));
      return;
    }

    const description = readlineSync.question('Enter description: ');
    
    if (!InputValidator.isValidDescription(description)) {
      console.log(chalk.red('Invalid description. Please enter a non-empty description.'));
      return;
    }

    this.budgetService.addIncome(amount, description);
    console.log(chalk.green('Income added successfully!'));
  }

  addExpense() {
    const amount = parseFloat(readlineSync.question('Enter expense amount: $'));
    
    if (!InputValidator.isValidAmount(amount)) {
      console.log(chalk.red('Invalid amount. Please enter a positive number.'));
      return;
    }

    const description = readlineSync.question('Enter description: ');
    
    if (!InputValidator.isValidDescription(description)) {
      console.log(chalk.red('Invalid description. Please enter a non-empty description.'));
      return;
    }

    this.budgetService.addExpense(amount, description);
    console.log(chalk.green('Expense added successfully!'));
  }

  run() {
    while (true) {
      this.displayMenu();
      const choice = readlineSync.question('Choose an option: ');

      switch (choice) {
        case '1':
          this.addIncome();
          break;
        case '2':
          this.addExpense();
          break;
        case '3':
          this.budgetService.displayTransactions();
          break;
        case '4':
          console.log(chalk.blue('Goodbye!'));
          return;
        default:
          console.log(chalk.red('Invalid option. Please try again.'));
      }
    }
  }
}

const app = new BudgetTrackerApp();
app.run();