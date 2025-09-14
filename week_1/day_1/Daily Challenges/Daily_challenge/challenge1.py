# Challenge 1
# Ask the user for a number and a length.
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))
# Create a program that prints a list of multiples of the number until the list length reaches length.
for i in range(1, length + 1):
    print(number * i, end=", " if i < length else "\n")
    
# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]