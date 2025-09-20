# 🌟 Challenge: Index dictionary of letters

# Step 1: Ask user for a word
word = input("Enter a word: ").strip()

# Step 2: Create dictionary to store letter indexes
letter_indexes = {}

# Step 3: Loop through the word with enumerate to get index and letter
for index, letter in enumerate(word):
    if letter in letter_indexes:
        letter_indexes[letter].append(index)  # Add index to existing list
    else:
        letter_indexes[letter] = [index]      # Create new list for this letter

# Step 4: Print the dictionary
print(letter_indexes)
