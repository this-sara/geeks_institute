names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Ask user for input
user_name = input("Enter your name: ")

# Make comparison case-insensitive (optional)
user_name_lower = user_name.lower()

# Create a lowercase version of the list for comparison
names_lower = [name.lower() for name in names]

# Check if the name is in the list
if user_name_lower in names_lower:
    index = names_lower.index(user_name_lower)  # get first occurrence
    print(f"{user_name} is at index {index}")
else:
    print(f"{user_name} is not in the list")
