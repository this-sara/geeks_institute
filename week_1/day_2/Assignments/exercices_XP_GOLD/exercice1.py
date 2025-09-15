# 🌟 Exercise 1: Birthday Look-up

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

# Step 3: Ask the user for a name
name = input("Enter the name of the person: ").strip()

# Step 4: Retrieve the birthday
birthday = birthdays.get(name)

# Step 5: Print the result
if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don't have birthday information for {name}.")
