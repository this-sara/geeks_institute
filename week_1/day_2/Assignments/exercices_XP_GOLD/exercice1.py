# --------------------------------------------------
#  Exercise 1: Birthday Look-up
# --------------------------------------------------
# Step 1: Create a dictionary of birthdays
birthdays = {
    "Alice": "1990/05/12",
    "Bob": "1985/10/23",
    "Charlie": "2000/01/15",
    "Diana": "1995/07/30",
    "Ethan": "1988/12/05"
}

# Step 2: Welcome message
print("Welcome to the birthday look-up!")
print("You can look up the birthdays of the people in the list!\n")

# Step 3: Ask the user for a name
name = input("Enter the name of the person: ").strip()

# Step 4: Retrieve the birthday
birthday = birthdays.get(name)

# Step 5: Print the result
if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don't have birthday information for {name}.")



# --------------------------------------------------
#  Exercise 2: Birthdays Advanced
# --------------------------------------------------
# Step 1: Create a dictionary of birthdays
birthdays = {
    "Alice": "1990/05/12",
    "Bob": "1985/10/23",
    "Charlie": "2000/01/15",
    "Diana": "1995/07/30",
    "Ethan": "1988/12/05"
}

# Step 2: Welcome message
print("Welcome to the birthday look-up!")
print("You can look up the birthdays of the people in the list!\n")

# Step 3: Print all available names
print("Here are the people you can look up:")
for name in birthdays.keys():
    print("-", name)

# Step 4: Ask the user for a name
user_name = input("\nEnter the name of the person: ").strip()

# Step 5: Retrieve the birthday with error handling
if user_name in birthdays:
    print(f"{user_name}'s birthday is on {birthdays[user_name]}.")
else:
    print(f"Sorry, we don't have birthday information for {user_name}.")

# --------------------------------------------------
#  Exercise 3: Sum
# --------------------------------------------------
def sum_pattern(X):
    """
    Returns the value of X + XX + XXX + XXXX
    Example: if X=3, returns 3 + 33 + 333 + 3333 = 3702
    """
    # Convert X to string to easily concatenate
    str_X = str(X)
    
    # Build XX, XXX, XXXX as strings and convert to int
    term1 = int(str_X)          # X
    term2 = int(str_X * 2)      # XX
    term3 = int(str_X * 3)      # XXX
    term4 = int(str_X * 4)      # XXXX
    
    # Sum all terms
    total = term1 + term2 + term3 + term4
    return total

# Test the function
X = int(input("Enter a number X: "))
result = sum_pattern(X)
print(f"The result of X + XX + XXX + XXXX is: {result}")

import random

# Step 1: Function to simulate rolling a dice
def throw_dice():
    """Simulates rolling a dice and returns a number between 1 and 6"""
    return random.randint(1, 6)

# Step 2: Function to keep throwing 2 dice until doubles are reached
def throw_until_doubles():
    """
    Rolls two dice repeatedly until both dice show the same number.
    Returns the number of throws it took.
    """
    count = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1
        # Check if doubles
        if die1 == die2:
            break
    return count

# Step 3: Main function to simulate 100 doubles
def main():
    results = []  # To store number of throws for each doubles

    for _ in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)

    total_throws = sum(results)
    average_throws = total_throws / len(results)

    print(f"Total throws to reach 100 doubles: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

# Run the simulation
main()
# --------------------------------------------------
#  Exercise 4
# --------------------------------------------------
import random

# Step 1: Function to simulate rolling a dice
def throw_dice():
    """Simulates rolling a dice and returns a number between 1 and 6"""
    return random.randint(1, 6)

# Step 2: Function to keep throwing 2 dice until doubles are reached
def throw_until_doubles():
    """
    Rolls two dice repeatedly until both dice show the same number.
    Returns the number of throws it took.
    """
    count = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1
        # Check if doubles
        if die1 == die2:
            break
    return count

# Step 3: Main function to simulate 100 doubles
def main():
    results = []  # To store number of throws for each doubles

    for _ in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)

    total_throws = sum(results)
    average_throws = total_throws / len(results)

    print(f"Total throws to reach 100 doubles: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

# Run the simulation
main()

