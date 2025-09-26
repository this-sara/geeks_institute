# --------------------------------------------------
# Exercise 1: Cats
# --------------------------------------------------
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

# --------------------------------------------------
# Exercise 2 : Dogs
# --------------------------------------------------
# Instructions
# Create a class called Dog.
class Dog:
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
    def __init__(self, name, height):
        self.name = name
        self.height = height  
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
    def bark(self):
        print(f"{self.name} goes woof!")
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.

    def Jump(self):
        print(f"doges {self.name} jump {self.height*2} cm high!")
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
davids_dog=Dog("Rex",50)
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
print(f"the name of the dog is {davids_dog.name} and his height is {davids_dog.height} cm")
davids_dog.bark()
davids_dog.Jump()
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
sarahs_dog=Dog("Teacup",20)
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
print(f"the name of the dog is {sarahs_dog.name} and his height is {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.Jump()
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger")



# class Dog:
#     all_dogs = []  # class-level list to store all Dog instances

#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
#         Dog.all_dogs.append(self)  # add this dog to the list automatically

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height*2} cm high!")

#     @classmethod
#     def get_bigger_dog(cls):
#         if not cls.all_dogs:
#             return "No dogs exist yet."
#         bigger_dog = cls.all_dogs[0]
#         for dog in cls.all_dogs:
#             if dog.height > bigger_dog.height:
#                 bigger_dog = dog
#         return f"{bigger_dog.name} is bigger"
# davids_dog = Dog("Rex", 50)
# sarahs_dog = Dog("Teacup", 20)
# buddy_dog = Dog("Buddy", 60)
# print(Dog.get_bigger_dog())

# --------------------------------------------------
# Exercise 3 : Who’s the song producer?
# --------------------------------------------------
# Instructions
# 1. Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# 2. Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
class Song:
    def __init__(self,lyrics):
        self.lyrics=lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
# 3. Create an object, for example:
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# 4. Then, call the sing_me_a_song method. The output should be:
stairway.sing_me_a_song()
# There’s a lady who's sure

# all that glitters is gold

# and she’s buying a stairway to heaven

# --------------------------------------------------
# Exercise 4 : Afternoon at the Zoo
# --------------------------------------------------
# Instructions
# Create a class called Zoo.
class Zoo:
# In this class create a method __init__ that takes one parameter: zoo_name.
    def __init__(self,zoo_name):
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
        self.animals=[]
        self.name=zoo_name
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
# Create a method called get_animals that prints all the animals of the zoo.
    def get_animals(self):
        for animal in self.animals:
            print(animal)
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    def sort_animals(self):
        animal_dict={}
        for animal in sorted(self.animals):
            first_letter=animal[0].upper()
            if first_letter not in animal_dict:
                animal_dict[first_letter]=[animal]
            else:
                animal_dict[first_letter].append(animal)
        for key in animal_dict:
            if len(animal_dict[key]) == 1:
                animal_dict[key] = animal_dict[key][0]
        return animal_dict
# Example

# { 
#     A: "Ape",
#     B: ["Baboon", "Bear"],
#     C: ['Cat', 'Cougar'],
#     E: ['Eel', 'Emu']
# }

# Create a method called get_groups that prints the animal/animals inside each group.
    def get_groups(self):
        groups=self.sort_animals()
        for key,animals in groups.items():
            print(f"{key}: {animals}\n")
            
# Create an object called new_york_zoo and call all the methods.
new_york_zoo=Zoo("New York Zoo")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")
new_york_zoo.get_animals()
print(new_york_zoo.sort_animals())
new_york_zoo.get_groups()


