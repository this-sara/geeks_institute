class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members  

    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(member)

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} was born into the {self.last_name} family.")

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old!")
                return
        print(f"No member named {name} found!")

    def incredible_presentation(self):
        print("\n✨ Here is our powerful family ✨")
        super().family_presentation()


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
     'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
]


incredibles = TheIncredibles("Incredibles", members)


incredibles.incredible_presentation()


incredibles.use_power("Michael")   


incredibles.born(name="Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="Baby Jack")


incredibles.incredible_presentation()
