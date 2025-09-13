# Exercise 1: What is the Season?
# Ask the user to input a month (1 to 12).
season=int(input("Enter a month number (1-12): "))
# Display the season of the month received:
if season in [3,4,5]:
    print("Spring")
elif season in [6,7,8]:
    print("Summer")
elif season in [9,10,11]:
    print("Autumn")
elif season in [12,1,2]:
    print("Winter")
else:
    print("Invalid month number. Please enter a number between 1 and 12.")

# Spring runs from March (3) to May (5)

# Summer runs from June (6) to August (8)

# Autumn runs from September (9) to November (11)

# Winter runs from December (12) to February (2)