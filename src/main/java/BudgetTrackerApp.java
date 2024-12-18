import java.util.Scanner;
import service.BudgetService;
import util.InputValidator;

public class BudgetTrackerApp {
    private static final BudgetService budgetService = new BudgetService();
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            displayMenu();
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1 -> addIncome();
                case 2 -> addExpense();
                case 3 -> budgetService.displayTransactions();
                case 4 -> {
                    System.out.println("Visit Again!");
                    return;
                }
                default -> System.out.println("Invalid option. Please try again.");
            }
        }
    }

    private static void displayMenu() {
        System.out.println("\nBudget Tracker Menu");
        System.out.println("1. Add Income");
        System.out.println("2. Add Expense");
        System.out.println("3. View Transactions");
        System.out.println("4. Exit");
        System.out.print("Choose an option: ");
    }

    private static void addIncome() {
        System.out.print("Enter income amount: $");
        double amount = scanner.nextDouble();
        scanner.nextLine(); // Consume newline

        if (!InputValidator.isValidAmount(amount)) {
            System.out.println("Invalid amount. Please enter a positive number.");
            return;
        }

        System.out.print("Enter description: ");
        String description = scanner.nextLine();

        if (!InputValidator.isValidDescription(description)) {
            System.out.println("Invalid description. Please enter a non-empty description.");
            return;
        }

        budgetService.addIncome(amount, description);
        System.out.println("Income added successfully!");
    }

    private static void addExpense() {
        System.out.print("Enter expense amount: $");
        double amount = scanner.nextDouble();
        scanner.nextLine(); // Consume newline

        if (!InputValidator.isValidAmount(amount)) {
            System.out.println("Invalid amount. Please enter a positive number.");
            return;
        }

        System.out.print("Enter description: ");
        String description = scanner.nextLine();

        if (!InputValidator.isValidDescription(description)) {
            System.out.println("Invalid description. Please enter a non-empty description.");
            return;
        }

        budgetService.addExpense(amount, description);
        System.out.println("Expense added successfully!");
    }
}