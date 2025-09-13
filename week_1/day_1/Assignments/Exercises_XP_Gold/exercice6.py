import random

# Counters for wins and losses
wins = 0
losses = 0
max_attempts = 3  # limit to 3 guesses

print("Welcome to the guessing game! (Numbers from 1 to 9)")

for attempt in range(1, max_attempts + 1):
    user_input = input(f"Attempt {attempt}: Enter a number from 1 to 9: ")

    # Validate input
    if not user_input.isdigit() or not 1 <= int(user_input) <= 9:
        print("Invalid input. Please enter a number from 1 to 9.")
        continue

    user_number = int(user_input)
    random_number = random.randint(1, 9)

    if user_number == random_number:
        print("Winner! 🎉")
        wins += 1
    else:
        print(f"Better luck next time. The number was {random_number}.")
        losses += 1

# Display totals
print("\nGame over!")
print(f"Total games won: {wins}")
print(f"Total games lost: {losses}")
