
# 🌟 Exercise 1: Cars

# Step 1: Original string
car_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Step 2: Convert string into a list
car_list = [manufacturer.strip() for manufacturer in car_string.split(",")]

# Step 3: Print number of manufacturers
print(f"There are {len(car_list)} manufacturers in the list.")

# Step 4: Print list in reverse (Z-A)
car_list_desc = sorted(car_list, reverse=True)
print("Manufacturers in reverse order (Z-A):")
print(car_list_desc)

# Step 5: Count manufacturers with the letter 'o'
count_with_o = sum(1 for car in car_list if 'o' in car.lower())
print(f"Number of manufacturers with 'o' in the name: {count_with_o}")

# Step 6: Count manufacturers without the letter 'i'
count_without_i = sum(1 for car in car_list if 'i' not in car.lower())
print(f"Number of manufacturers without 'i' in the name: {count_without_i}")

# Bonus 1: Remove duplicates from the extended list
car_list_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
car_list_unique = list(set(car_list_with_duplicates))  # remove duplicates

# Print unique companies as a comma-separated string
print("\nUnique companies:")
print(", ".join(car_list_unique))
print(f"Number of unique companies: {len(car_list_unique)}")

# Bonus 2: Print list in ascending order (A-Z) but reverse letters in each name
car_list_unique_sorted = sorted(car_list_unique)
reversed_names = [car[::-1] for car in car_list_unique_sorted]
print("\nManufacturers in A-Z order with letters reversed:")
print(reversed_names)
