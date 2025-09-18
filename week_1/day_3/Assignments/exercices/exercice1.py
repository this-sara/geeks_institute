# 🌟 Exercise 1: Cats
# Instructions
# Using this class
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
# Instantiate three Cat objects using the code provided above.
cat1=Cat("Eunoia",25)
cat2=Cat("Assia",23)
# Outside of the class, create a function that finds the oldest cat and returns the cat.
def get_oldest_cat(*cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
oldest_cat=get_oldest_cat(cat1,cat2)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")