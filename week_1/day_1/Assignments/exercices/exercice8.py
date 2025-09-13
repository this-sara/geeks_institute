# The deli has run out of pastrami, use a while loop to remove all occurrences of Pastrami sandwich from sandwich_orders.
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
print("Deli has run out of Pastrami sandwich.")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print("Updated sandwich orders:", sandwich_orders)
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
fished_sandwiches = []
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Chicken sandwich"]
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    fished_sandwiches.append(current_sandwich)
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

for sandwich in fished_sandwiches:
    print(f"I made your {sandwich}.")