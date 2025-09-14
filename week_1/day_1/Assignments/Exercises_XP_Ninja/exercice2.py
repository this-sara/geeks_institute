# Initialize variable to store the longest sentence
longest_sentence = ""

print("Try to input the longest sentence you can without the character 'A'.")

while True:
    user_input = input("Enter a sentence (or type 'q' to quit): ")

    # Exit condition
    if user_input.lower() == 'q':
        break

    # Check if 'A' or 'a' is in the sentence
    if 'a' in user_input.lower():
        print("Oops! Your sentence contains the character 'A'. Try again.")
        continue

    # Check if this sentence is longer than the current longest
    if len(user_input) > len(longest_sentence):
        longest_sentence = user_input
        print("Congratulations! You set a new longest sentence.")

# After quitting, display the longest sentence
print("\nGame over!")
print("The longest sentence without 'A' is:")
print(longest_sentence)
