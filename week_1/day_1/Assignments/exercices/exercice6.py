# 🌟 Exercise 6: Tuple

# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# If yes, write a program to do it. If not, why?
# No, tuples are immutable, meaning their elements cannot be changed or added after creation.
# However, you can concatenate tuples to create a new tuple.
first_tuple = (4, 7, 2)
new_tuple = first_tuple + (6, 8)
print("Original tuple:", first_tuple)
print("New tuple after concatenation:", new_tuple)
