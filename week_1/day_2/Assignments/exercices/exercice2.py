# 🎬 Cinemax #2
# Step 1: Create an empty dictionary
family = {}
# Step 2: Ask how many people
n = int(input("How many family members? "))
# Step 3: Fill the dictionary with names and ages
for i in range(n):
    name = input(f"Enter the name of member {i+1}: ")
    age = int(input(f"Enter the age of {name}: "))
    family[name] = age

# Step 4: Calculate ticket prices
total_cost = 0
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_cost += price
    print(f"{name.capitalize()} (age {age}) has to pay ${price}")

# Step 5: Print total
print(f"\n  The family's total cost for the movies is: ${total_cost}")

