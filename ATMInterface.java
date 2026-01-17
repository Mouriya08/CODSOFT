import java.util.Scanner;

// Bank Account class
class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("✅ Amount deposited successfully!");
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("✅ Withdrawal successful!");
        } else {
            System.out.println("❌ Insufficient balance!");
        }
    }

    public double getBalance() {
        return balance;
    }
}

// ATM class
class ATM {
    private BankAccount account;
    private Scanner sc = new Scanner(System.in);

    public ATM(BankAccount account) {
        this.account = account;
    }

    public void start() {
        int choice;

        do {
            System.out.println("\n------ ATM MENU ------");
            System.out.println("1. Withdraw");
            System.out.println("2. Deposit");
            System.out.println("3. Check Balance");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");

            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    withdraw();
                    break;

                case 2:
                    deposit();
                    break;

                case 3:
                    checkBalance();
                    break;

                case 4:
                    System.out.println("Thank you for using ATM!");
                    break;

                default:
                    System.out.println("❌ Invalid choice!");
            }
        } while (choice != 4);
    }

    private void withdraw() {
        System.out.print("Enter amount to withdraw: ");
        double amount = sc.nextDouble();

        if (amount > 0) {
            account.withdraw(amount);
        } else {
            System.out.println("❌ Enter valid amount!");
        }
    }

    private void deposit() {
        System.out.print("Enter amount to deposit: ");
        double amount = sc.nextDouble();

        if (amount > 0) {
            account.deposit(amount);
        } else {
            System.out.println("❌ Enter valid amount!");
        }
    }

    private void checkBalance() {
        System.out.println("💰 Current Balance: " + account.getBalance());
    }
}

// Main class
public class ATMInterface {

    public static void main(String[] args) {

        BankAccount userAccount = new BankAccount(5000); // Initial balance
        ATM atm = new ATM(userAccount);
        atm.start();
    }
}