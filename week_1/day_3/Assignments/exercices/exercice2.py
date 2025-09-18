# 🌟 Exercise 2 : Dogs
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
