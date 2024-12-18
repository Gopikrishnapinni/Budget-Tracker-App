package model;

import java.time.LocalDate;

public class Transaction {
    private final double amount;
    private final String description;
    private final LocalDate date;
    private final TransactionType type;

    public Transaction(double amount, String description, TransactionType type) {
        this.amount = amount;
        this.description = description;
        this.date = LocalDate.now();
        this.type = type;
    }

    // Getters
    public double getAmount() { return amount; }
    public String getDescription() { return description; }
    public LocalDate getDate() { return date; }
    public TransactionType getType() { return type; }
}