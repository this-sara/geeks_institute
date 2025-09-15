# 🌟 Exercise 6 : Personalized Shirts

# Step 1 & 2: Define the function with default values
def make_shirt(size="Large", text="I love Python"):
    """Prints a sentence about the shirt size and message"""
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# Step 3: Call the function (Large shirt with default message)
make_shirt()

# Step 4: Medium shirt with default message
make_shirt(size="Medium")

# Step 5: Any size with a different message
make_shirt(size="Small", text="Code is Life")

# Bonus: Call the function using keyword arguments
make_shirt(text="Keep Learning!", size="XL")
