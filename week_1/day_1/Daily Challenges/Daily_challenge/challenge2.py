# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
user_word = input("Enter a word: ")
new_word = ""
for i in range(len(user_word)):
    if i == 0 or user_word[i] != user_word[i - 1]:
        new_word += user_word[i]
print(new_word)

# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"


# Notes

# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).
