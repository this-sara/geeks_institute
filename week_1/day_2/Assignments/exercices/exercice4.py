# 🌟 Exercise 4 : Some Geography
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as “city is in country”.
# (For example Reykjavik is in Iceland)
# Give the country parameter a default value.
# Call your function
# 🌟 Exercise 4 : Some Geography

def describe_city(city, country="Morocco"):
    """Prints a simple sentence about a city and its country"""
    print(f"{city} is in {country}.")

# Calling the function with different arguments
describe_city("Reykjavik", "Iceland")   # With both city and country
describe_city("Paris", "France")        # With both city and country
describe_city("Casablanca")             # Using the default country (Morocco)


