class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create another cat breed Siamese
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create a list of all cats
all_cats = [
    Bengal("Leo", 2),
    Chartreux("Milo", 3),
    Siamese("Luna", 1)
]

# Sara’s pets
sara_pets = Pets(all_cats)

# Take all cats for a walk
sara_pets.walk()

# Leo is just walking around
# Milo is just walking around
# Luna is just walking around
