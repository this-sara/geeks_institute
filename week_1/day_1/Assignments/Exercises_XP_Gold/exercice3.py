# Exercise 3: While Loop

# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
name = "sarah"
user_name = input("Enter your name: ")
while name != user_name.lower():
    user_name =input("Enter your name: ")
print("Hello, Sarah!")
