# --------------------------------------------------
# Exercise 1: Cars
# --------------------------------------------------
# Step 1: Original string
car_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Step 2: Convert string into a list
car_list = [manufacturer.strip() for manufacturer in car_string.split(",")]

# Step 3: Print number of manufacturers
print(f"There are {len(car_list)} manufacturers in the list.")

# Step 4: Print list in reverse (Z-A)
car_list_desc = sorted(car_list, reverse=True)
print("Manufacturers in reverse order (Z-A):")
print(car_list_desc)

# Step 5: Count manufacturers with the letter 'o'
count_with_o = sum(1 for car in car_list if 'o' in car.lower())
print(f"Number of manufacturers with 'o' in the name: {count_with_o}")

# Step 6: Count manufacturers without the letter 'i'
count_without_i = sum(1 for car in car_list if 'i' not in car.lower())
print(f"Number of manufacturers without 'i' in the name: {count_without_i}")

# Bonus 1: Remove duplicates from the extended list
car_list_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
car_list_unique = list(set(car_list_with_duplicates))  # remove duplicates

# Print unique companies as a comma-separated string
print("\nUnique companies:")
print(", ".join(car_list_unique))
print(f"Number of unique companies: {len(car_list_unique)}")

# Bonus 2: Print list in ascending order (A-Z) but reverse letters in each name
car_list_unique_sorted = sorted(car_list_unique)
reversed_names = [car[::-1] for car in car_list_unique_sorted]
print("\nManufacturers in A-Z order with letters reversed:")
print(reversed_names)


# --------------------------------------------------
# Exercise 2: What's your name?
# --------------------------------------------------
# Step 1: Function to get full name
def get_full_name(first_name, last_name, middle_name=""):
    """
    Returns the full name.
    Middle name is optional.
    Each part is capitalized.
    """
    if middle_name:  # If middle name is provided
        full_name = f"{first_name} {middle_name} {last_name}"
    else:  # Only first and last name
        full_name = f"{first_name} {last_name}"
    
    # Capitalize each word
    return full_name.title()

# Test examples
name1 = get_full_name(first_name="john", middle_name="hooker", last_name="lee")
print(name1)  # Output: John Hooker Lee

name2 = get_full_name(first_name="bruce", last_name="lee")
print(name2)  # Output: Bruce Lee


# --------------------------------------------------
# Exercise 3: English to Morse and Morse to English
# --------------------------------------------------
# Morse code dictionary
MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..', 
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', 
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', 
    '8': '---..', '9': '----.',
    ' ': '/'  # Use / for spaces between words
}

# Step 1: Function to convert English to Morse
def english_to_morse(text):
    """
    Converts English text to Morse code.
    Each letter separated by space, each word separated by slash (/)
    """
    text = text.upper()
    morse = []
    for char in text:
        if char in MORSE_CODE_DICT:
            morse.append(MORSE_CODE_DICT[char])
        else:
            morse.append('?')  # unknown characters
    return ' '.join(morse)

# Step 2: Function to convert Morse to English
def morse_to_english(morse_code):
    """
    Converts Morse code to English text.
    Words are separated by /
    """
    # Reverse the dictionary
    REVERSE_MORSE_DICT = {v: k for k, v in MORSE_CODE_DICT.items()}
    
    words = morse_code.split(' / ')  # split words
    decoded_words = []
    
    for word in words:
        letters = word.split()  # split letters
        decoded_word = ''.join(REVERSE_MORSE_DICT.get(letter, '?') for letter in letters)
        decoded_words.append(decoded_word)
    
    return ' '.join(decoded_words)

# Example usage
english_text = "Hello World"
morse_code = english_to_morse(english_text)
print(f"English: {english_text}")
print(f"Morse: {morse_code}")

decoded_text = morse_to_english(morse_code)
print(f"Decoded back: {decoded_text}")









