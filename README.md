This project is a simple budget tracking application implemented in both Java and JavaScript. It allows users to add income and expenses, view transaction history, and see the current balance. The project structure includes separate directories for Java and JavaScript implementations, with models, services, and utilities organized accordingly.

# Budget Tracker

A simple budget tracking application implemented in both Java and JavaScript. The application allows users to add income and expenses, view transaction history, and see the current balance.

## Features

- Add income with description
- Add expenses with description
- View transaction history
- Display current balance

## Project Structure
Here is the project structure for your Budget Tracker application:
Budget Tracker App/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── BudgetTrackerApp.java
│   │   │   ├── model/
│   │   │   │   ├── Budget.java
│   │   │   │   ├── Transaction.java
│   │   │   │   ├── TransactionType.java
│   │   │   ├── service/
│   │   │   │   ├── BudgetService.java
│   │   │   ├── util/
│   │   │   │   ├── InputValidator.java
│   ├── models/
│   │   ├── Budget.js
│   │   ├── Transaction.js
│   │   ├── TransactionType.js
│   ├── services/
│   │   ├── BudgetService.js
│   ├── utils/
│   │   ├── InputValidator.js
│
├── index.js
├── package.json


This structure includes:

java

: Contains the Java implementation.


BudgetTrackerApp.java

: Main class for the Java application.
  - `model`: Contains model classes for the Java implementation.
    - `Budget.java`: Manages the balance and transactions.
    - `Transaction.java`: Represents a financial transaction.
    - `TransactionType.java`: Enum for transaction types (INCOME, EXPENSE).
  - `service`: Contains service classes for the Java implementation.
    - `BudgetService.java`: Provides methods to add income and expenses, and display transactions.
  - `util`: Contains utility classes for the Java implementation.
    
: Contains model classes for the JavaScript implementation.
  - `Budget.js`: Manages the balance and transactions.
  - `Transaction.js`: Represents a financial transaction.
  - `TransactionType.js`: Enum for transaction types (INCOME, EXPENSE).

  

## Java Implementation

The Java implementation is located in the `src/main/java` directory. The main class is [`BudgetTrackerApp`](src/main/java/BudgetTrackerApp.java), which provides a console-based menu for interacting with the budget tracker.

### Key Classes

- [`Budget`](src/main/java/model/Budget.java): Manages the balance and transactions.
- [`Transaction`](src/main/java/model/Transaction.java): Represents a financial transaction.
- [`TransactionType`](src/main/java/model/TransactionType.java): Enum for transaction types (INCOME, EXPENSE).
- [`BudgetService`](src/main/java/service/BudgetService.java): Provides methods to add income and expenses, and display transactions.
- [`InputValidator`](src/main/java/util/InputValidator.java): Validates input amounts and descriptions.

## JavaScript Implementation

The JavaScript implementation is located in the `src` directory. The main entry point is [`index.js`](index.js), which provides a console-based menu for interacting with the budget tracker.

