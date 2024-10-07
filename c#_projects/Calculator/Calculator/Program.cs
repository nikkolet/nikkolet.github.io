using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num1;
            int num2;

            int result = 0; //You need to assign it 0 as a value to avoid error cs0165. I did this so that if the user accidently mistypes the operation it can let the user know. I am still working out how to reset the program as needed.

            string answer;

            Console.WriteLine("Hello, welcome to the calculator program!");
            Console.WriteLine("Please enter your first number: ");

            num1 = Convert.ToInt32(Console.ReadLine()); //ToInt32 converts string to int

            Console.WriteLine("Please enter your second number.");

            num2 = Convert.ToInt32(Console.ReadLine());


            Console.WriteLine("What type of operation would you liked to do?");
            Console.WriteLine("Please enter a for addition, s for subtraction, m for multiplication or d for division.");

            answer = Console.ReadLine();

            if(answer == "a" || answer == "+")
            {
                result = num1 + num2;
            }
            else if (answer == "s" || answer == "-")
            {
                result = num1 - num2;
            }
            else if (answer == "m" || answer == "*")
            {
                result = num1 * num2;
            }
            else if (answer == "d" || answer == "/")
            {
                result = num1 / num2;
            }
            else
            {
                Console.WriteLine($"Oops! Try again. You gave {answer}");
                
            }
            
            Console.WriteLine($"The result is: {result}");
            Console.WriteLine("Thank you for using the calculator program");

            Console.ReadKey(); //Program ends when you enter a key. You could also put "Console.Read();"

        }
    }
}
