# Example paragraph (you can replace it with any text you like)
paragraph = """Python is a powerful programming language. It is widely used in web development, data science, and automation. 
Many beginners find Python easy to learn. Its simple syntax and readability make it very popular."""

# 1. Number of characters
num_characters = len(paragraph)

# 2. Number of sentences (assuming sentences end with '.', '!', or '?')
import re
sentences = re.split(r'[.!?]+', paragraph)
# Remove empty strings from split
sentences = [s.strip() for s in sentences if s.strip()]
num_sentences = len(sentences)

# 3. Number of words
words = paragraph.split()
num_words = len(words)

# 4. Number of unique words (case-insensitive)
unique_words = set(word.strip(".,!?").lower() for word in words)
num_unique_words = len(unique_words)

# Bonus 1: Number of non-whitespace characters
non_whitespace_chars = len(paragraph.replace(" ", "").replace("\n", ""))

# Bonus 2: Average words per sentence
avg_words_per_sentence = num_words / num_sentences

# Bonus 3: Number of non-unique words
num_non_unique_words = num_words - num_unique_words

# Print results nicely
print("Paragraph Analysis:")
print(f"Total characters: {num_characters}")
print(f"Total sentences: {num_sentences}")
print(f"Total words: {num_words}")
print(f"Unique words: {num_unique_words}")
print(f"Non-whitespace characters: {non_whitespace_chars}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Non-unique words: {num_non_unique_words}")
