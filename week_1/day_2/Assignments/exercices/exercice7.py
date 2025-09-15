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
