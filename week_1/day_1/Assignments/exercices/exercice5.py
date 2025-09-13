# 🌟 Exercise 5 : Favorite Numbers
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
my_fav_numbers = {5, 20, 7}
# my_fav_numbers.add(95)
# my_fav_numbers.add(100)
my_fav_numbers.update({8,6})   # add two numbers at the same time
print("My favorite numbers:", my_fav_numbers)
my_fav_numbers.remove(6)
friend_fav_numbers = {1, 3, 2}
print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
