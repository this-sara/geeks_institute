# 🌟 Exercise 3: Zara
# 1. Create the dictionary
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2. Change the number of stores to 2
brand["number_stores"] = 2

# 3. Print a sentence about Zara's clients
print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}.")

# 4. Add a key country_creation
brand["country_creation"] = "Spain"

# 5. Check if "international_competitors" exists, then add "Desigual"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6. Delete the creation_date
del brand["creation_date"]

# 7. Print the last international competitor
print("Last competitor:", brand["international_competitors"][-1])

# 8. Print the major clothes colors in the US
print("Major colors in the US:", brand["major_color"]["US"])

# 9. Print the amount of key-value pairs
print("Number of key-value pairs:", len(brand))

# 10. Print the keys
print("Dictionary keys:", brand.keys())

# 11. Create another dictionary
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Merge the dictionaries (update)
brand.update(more_on_zara)

# 13. Print the value of number_stores
print("Updated number of stores:", brand["number_stores"])
