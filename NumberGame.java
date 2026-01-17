import java.util.Random;
import java.util.Scanner;

public class NumberGame {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Random rand = new Random();

        int score = 0;
        char playAgain;

        do {
            int randomNumber = rand.nextInt(100) + 1; // 1 to 100
            int guess;
            int attempts = 0;
            int maxAttempts = 5;

            System.out.println("\nGuess a number between 1 and 100");
            System.out.println("You have " + maxAttempts + " attempts.");

            while (attempts < maxAttempts) {
                System.out.print("Enter your guess: ");
                guess = sc.nextInt();
                attempts++;

                if (guess == randomNumber) {
                    System.out.println("🎉 Correct! You guessed it in " + attempts + " attempts.");
                    score++;
                    break;
                } 
                else if (guess > randomNumber) {
                    System.out.println("Too high!");
                } 
                else {
                    System.out.println("Too low!");
                }

                if (attempts == maxAttempts) {
                    System.out.println("❌ Out of attempts!");
                    System.out.println("Correct number was: " + randomNumber);
                }
            }

            System.out.print("\nDo you want to play again? (y/n): ");
            playAgain = sc.next().charAt(0);

        } while (playAgain == 'y' || playAgain == 'Y');

        System.out.println("\nYour final score: " + score);
        System.out.println("Thanks for playing!");
        sc.close();
    }
}
