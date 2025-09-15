# 🌟 Exercise 3: English to Morse and Morse to English

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




