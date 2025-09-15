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
