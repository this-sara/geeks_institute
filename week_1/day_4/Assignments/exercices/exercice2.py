# 🌟 Exercise 2 : Dogs

# Instructions
# Create a class called Dog with the following attributes name, age, weight.
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_power:
            return f'{self.name} wins the fight against {other_dog.name}'
        elif self_power < other_power:
            return f'{other_dog.name} wins the fight against {self.name}'
        else:
            return f'The fight between {self.name} and {other_dog.name} is a draw'
# Create 3 dogs and run them through your class.
dog1 = Dog("Buddy", 3, 30)
print(dog1.bark())  
print(dog1.run_speed())  
dog2 = Dog("Max", 4, 40)
dog3 = Dog("Rocky", 2, 20)
print(dog1.fight(dog2))  