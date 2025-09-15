# 🌟 Exercise 2: Birthdays Advanced
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
