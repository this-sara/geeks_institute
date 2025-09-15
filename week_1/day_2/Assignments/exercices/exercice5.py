# 🌟 Exercise 5 : Random
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
import random
def compare_numbers(user_number):
    """Compares a user-provided number with a randomly generated number."""
    if not (1 <= user_number <= 100):
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    print(f"Randomly generated number is: {random_number}")
    
    if user_number == random_number:
        print("Success! You guessed the correct number.")
    else:
        print(f"Fail! Your number was {user_number}, but the correct number was {random_number}.")
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
# Call the function
compare_numbers(50)  