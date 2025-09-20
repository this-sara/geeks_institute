class Family:
    def __init__(self, last_name, members=None):
        # Initialize family with a last name and optional members list
        self.last_name = last_name
        self.members = members if members is not None else []

    def born(self, **kwargs):
        # Add a new child (passed as dictionary kwargs) to the family members
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, name):
        # Check if a family member is older than 18
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        # If not found
        print(f"No family member named {name} found.")
        return False

    def family_presentation(self):
        # Print the family’s last name and all members' details
        print(f"--- {self.last_name} Family Presentation ---")
        for member in self.members:
            print(
                f"Name: {member['name']}, "
                f"Age: {member['age']}, "
                f"Gender: {member['gender']}, "
                f"Is Child: {member['is_child']}"
            )

# Initial family members
members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

# Create a Family instance
my_family = Family("Smith", members)

# Add a new child
my_family.born(name="Emma", age=0, gender="Female", is_child=True)

# Check if a family member is over 18
print(my_family.is_18("Michael"))  
print(my_family.is_18("Emma"))     

# Show family presentation
my_family.family_presentation()
