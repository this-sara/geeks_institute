# 🌟 Exercise 1 : Convert lists into dictionaries
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
result = dict(zip(keys, values))
print(result)
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# Cinemax #2
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


# Exercise 3: Zara
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

#  Exercise 4 : Some Geography
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as “city is in country”.
# (For example Reykjavik is in Iceland)
# Give the country parameter a default value.
# Call your function
def describe_city(city, country="Morocco"):
    """Prints a simple sentence about a city and its country"""
    print(f"{city} is in {country}.")

# Calling the function with different arguments
describe_city("Reykjavik", "Iceland")   
describe_city("Paris", "France")        
describe_city("Casablanca")  

#  Exercise 5 : Random
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
import random
def compare_numbers(user_number):
    """Compares a user-provided number with a randomly generated number."""
    if not (1 <= user_number <= 100):
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    print(f"Randomly generated number is: {random_number}")
    
    if user_number == random_number:
        print("Success! You guessed the correct number.")
    else:
        print(f"Fail! Your number was {user_number}, but the correct number was {random_number}.")
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
# Call the function
compare_numbers(50)


# Exercise 6 : Personalized Shirts

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



# Exercise 7 
import random

# Step 1: Function to get a random temperature based on season
def get_random_temp(season):
    """Returns a random temperature (float) depending on the season"""
    # Set temperature ranges for each season
    if season.lower() == "winter":
        low, high = -10, 16
    elif season.lower() == "spring":
        low, high = 0, 23
    elif season.lower() == "summer":
        low, high = 16, 40
    elif season.lower() in ["autumn", "fall"]:
        low, high = 0, 23
    else:
        low, high = -10, 40  # default range if input is wrong

    # Return a floating-point temperature rounded to 1 decimal
    return round(random.uniform(low, high), 1)

# Step 2: Main function
def main():
    # Ask the user for the month number (1-12)
    month = int(input("Enter the number of the month (1-12): "))

    # Step 3: Determine the season based on the month
    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"
    else:
        print("Invalid month! Using default season (summer).")
        season = "summer"

    # Step 4: Get a random temperature for the season
    temp = get_random_temp(season)
    print(f"\nThe temperature right now is {temp}°C.")

    # Step 5: Give friendly advice based on the temperature
    if temp < 0:
        advice = "Brrr, that’s freezing! Wear some extra layers today."
    elif 0 <= temp <= 16:
        advice = "Quite chilly! Don’t forget your coat."
    elif 16 < temp <= 23:
        advice = "Mild weather. A light jacket should be fine."
    elif 23 < temp <= 32:
        advice = "Warm weather. Dress comfortably."
    else:  # temp > 32
        advice = "It’s hot! Stay hydrated and wear light clothes."

    print(advice)

# Step 6: Run the program
main()



# Exercise 8 : Star Wars Quiz

# Quiz data
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

# Function to ask questions and track answers
def run_quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []  # List to store wrong answers
    
    for item in data:
        user_answer = input(item["question"] + " ").strip()  # Ask question
        if user_answer.lower() == item["answer"].lower():
            print("✅ Correct!\n")
            correct += 1
        else:
            print(f"❌ Wrong! The correct answer is {item['answer']}\n")
            incorrect += 1
            wrong_answers.append({"question": item["question"],"your_answer": user_answer, "correct_answer": item["answer"]})
    return correct, incorrect, wrong_answers

# Function to display results
def show_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct and {incorrect} incorrect answers.")
    
    if wrong_answers:
        print("\nHere are the questions you answered wrong:")
        for item in wrong_answers:
            print(f"Q: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")
    
    # Bonus: ask to play again if more than 3 wrong
    if incorrect > 3:
        play_again = input("You had more than 3 wrong answers. Do you want to play again? (yes/no) ").strip().lower()
        if play_again == "yes":
            start_quiz()

# Function to start the quiz
def start_quiz():
    correct, incorrect, wrong_answers = run_quiz()
    show_results(correct, incorrect, wrong_answers)

# Run the quiz
start_quiz()

