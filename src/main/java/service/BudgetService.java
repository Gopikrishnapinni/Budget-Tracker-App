package service;

import model.Budget;
import model.Transaction;
import model.TransactionType;

public class BudgetService {
    private final Budget budget;

    public BudgetService() {
        this.budget = new Budget();
    }

    public void addIncome(double amount, String description) {
        Transaction income = new Transaction(amount, description, TransactionType.INCOME);
        budget.addTransaction(income);
    }

    public void addExpense(double amount, String description) {
        Transaction expense = new Transaction(amount, description, TransactionType.EXPENSE);
        budget.addTransaction(expense);
    }

    public double getCurrentBalance() {
        return budget.getBalance();
    }

    public void displayTransactions() {
        System.out.println("\nTransaction History:");
        System.out.println("-------------------");
        for (Transaction t : budget.getTransactions()) {
            System.out.printf("%s | %s | $%.2f | %s%n",
                t.getDate(),
                t.getType(),
                t.getAmount(),
                t.getDescription()
            );
        }
        System.out.printf("\nCurrent Balance: $%.2f%n", getCurrentBalance());
    }
}