package model;

import java.util.ArrayList;
import java.util.List;

public class Budget {
    private double balance;
    private final List<Transaction> transactions;

    public Budget() {
        this.balance = 0.0;
        this.transactions = new ArrayList<>();
    }

    public void addTransaction(Transaction transaction) {
        if (transaction.getType() == TransactionType.INCOME) {
            balance += transaction.getAmount();
        } else {
            balance -= transaction.getAmount();
        }
        transactions.add(transaction);
    }

    public double getBalance() {
        return balance;
    }

    public List<Transaction> getTransactions() {
        return new ArrayList<>(transactions);
    }
}