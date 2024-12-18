package util;

public class InputValidator {
    public static boolean isValidAmount(double amount) {
        return amount > 0;
    }

    public static boolean isValidDescription(String description) {
        return description != null && !description.trim().isEmpty();
    }
}