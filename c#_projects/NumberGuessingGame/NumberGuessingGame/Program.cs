using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumberGuessingGame
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool isCorrectGuess = false;
            Random random = new Random();

            int randomNum = random.Next(1, 11); //Range is 1-10
            int tries = 0;

            Console.WriteLine("----------------------------------------");
            Console.WriteLine("Welcome to the number guessing game!");
            Console.WriteLine("A number between 1 and 10 will be generated.");
            Console.WriteLine("If you guess the correct number, you win!");
            Console.WriteLine("There is a catch! You only have three tries or GAME OVER!");
            Console.WriteLine("Good Luck!");
            Console.WriteLine("----------------------------------------");

                while (!isCorrectGuess)
                {

                    tries++;

                    Console.WriteLine("Please enter your guess.");
                    int guess = Convert.ToInt32(Console.ReadLine());

                    if (guess > randomNum && tries < 3)
                    {
                        Console.WriteLine("Your guess is too high!");
                    }
                    else if (guess < randomNum && tries < 3)
                    {
                        Console.WriteLine("Your guess is too low!");
                    }
                    else if (guess == randomNum && tries < 3)
                    {
                        Console.WriteLine("Correct!");
                        isCorrectGuess = true;
                        Console.WriteLine("----------------------------------------");
                        Console.WriteLine("Congratulations, you have won the game!");
                        Console.WriteLine("----------------------------------------");
                    }
                    else
                    {
                        Console.WriteLine("Game Over!");
                        Console.WriteLine("Oops! You took too long.");
                        Console.WriteLine("Better luck next time!");
                    }

                  
                }
          
      
            






            Console.ReadKey();
        }
    }
}
