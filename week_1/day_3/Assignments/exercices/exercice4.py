# Exercise 4 : Afternoon at the Zoo
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


