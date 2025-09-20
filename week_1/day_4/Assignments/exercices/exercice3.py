from exercice2 import Dog   # adjust filename if different
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        all_dogs = ", ".join(dog_names)
        print(f"{all_dogs} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet!")
            


pet_dog = PetDog("Charlie", 2, 12)

pet_dog.train()         
pet_dog.play("Rex", "Buddy", "Max")
pet_dog.do_a_trick()    
