from datetime import datetime

# Step 1: Ask for birthdate
birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")
birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")

# Step 2: Calculate age
today = datetime.today()
age = today.year - birthdate.year
if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

# Step 3: Number of candles = last digit of age
candles = age % 10
if candles == 0:
    candles = 10  # avoid empty candles

# Step 4: Build candle line
candles_str = "i" * candles
padding = (11 - candles) // 2
candles_line = "_" * padding + candles_str + "_" * padding

# Step 5: Build cake line by line
cake_lines = []
cake_lines.append("    ___"+ candles_line +"___")
cake_lines.append("      |:H:a:p:p:y:|")
cake_lines.append("    __|___________|__")
cake_lines.append("   |^^^^^^^^^^^^^^^^^|")
cake_lines.append("   |:B:i:r:t:h:d:a:y:|")
cake_lines.append("   |                 |")
cake_lines.append("   ~~~~~~~~~~~~~~~~~~~")

# Step 6: Print cake (twice if leap year)
for line in cake_lines:
    print(line)

# Bonus: Check leap year
year = birthdate.year
is_leap = (year % 4 == 0 and (year % 100 != 0 or year % 400 == 0))
if is_leap:
    print()
    for line in cake_lines:
        print(line)
