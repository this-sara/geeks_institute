# 🌟 Exercise 7: List

# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

basket = ["Banana", "Apples", "Oranges", "Blueberries"]



# Remove Banana from the list.

basket.remove("Banana")

# Remove Blueberries from the list.

basket.remove("Blueberries")

# Add Kiwi to the end of the list.

basket.append("Kiwi")

# Add Apples to the beginning of the list.

basket.insert(0, "Apples")

# Count how many apples are in the basket.

basket.append("Apples")  # Adding another "Apples" to demonstrate counting
apple_count = basket.count("Apples")
print(f"Number of Apples in the basket: {apple_count}")

# Empty the basket.

basket.clear()

# Print(basket)
print("Final state of the basket:", basket)

