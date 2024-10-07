using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dice_Game
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int playerRandomNum;
            int enemyRandomNum;

            int playerPoints = 0;
            int enemyPoints = 0;

            int round = 0;
            int maxRounds = 10;
            Random random = new Random();

            for (int i = 0; i < maxRounds; i++)
            {
                round++;

                Console.WriteLine($"Round: {round}/{maxRounds}");
                Console.WriteLine("Press any key to roll the dice.");
                Console.ReadKey();
                playerRandomNum = random.Next(1, 7); //the actual range is 1-6

                Console.WriteLine($"You rolled a {playerRandomNum}");

                Console.WriteLine("...");
                System.Threading.Thread.Sleep(1000); //makes the system wait 1000 miliseconds before it executes the next code in the for loop which gives anticipation.
                //1000 miliseconds = 1 second

                enemyRandomNum = random.Next(1, 7);
                Console.WriteLine($"Enemy AI rolled a {enemyRandomNum}");
                
                if (playerRandomNum > enemyRandomNum)
                {
                    playerPoints++;
                    Console.WriteLine("Player wins this round!");

                } 
                else if (playerRandomNum < enemyRandomNum)
                {
                    enemyPoints++;
                    Console.WriteLine("Enemy wins this round!");
                }
                else
                {
                    Console.WriteLine("Draw!");
                }
                Console.WriteLine("------------------------------------------------------");
                Console.WriteLine($"The score is now - Player: {playerPoints} | Enemy: {enemyPoints} ");
                Console.WriteLine("======================================================");
            }

            if (playerPoints > enemyPoints)
            {
                Console.WriteLine("You win!");
            }
            else if (playerPoints < enemyPoints)
            {
                Console.WriteLine("You lose!");
            }
            else
            {
                Console.WriteLine("Draw!");
            }
            Console.ReadKey();
            

        }
    }
}
