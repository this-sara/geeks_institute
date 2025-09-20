import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is None and diameter is None:
            raise ValueError("You must specify either radius or diameter.")
        if radius is not None:
            self.radius = radius
        else:
            self.radius = diameter / 2

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        """String representation of the circle"""
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area:.2f})"

    def __add__(self, other):
        """Add two circles: new circle with radius = sum of radii"""
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __eq__(self, other):
        """Check if two circles are equal (same radius)"""
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius

    def __lt__(self, other):
        """Less than: compare based on radius"""
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

c1 = Circle(radius=3)
c2 = Circle(diameter=10)

print(c1)  
print(c2)  

# Addition
c3 = c1 + c2
print(c3)  

# Comparisons
print(c1 == c2)  
print(c1 < c2)   
print(c2 > c1)   

# Sorting
circles = [c3, c1, c2]
sorted_circles = sorted(circles)
for c in sorted_circles:
    print(c)



import turtle

def draw_circle(circle):
    turtle.circle(circle.radius)

circles = [c1, c2, c3]
sorted_circles = sorted(circles)

turtle.speed(1)
for circle in sorted_circles:
    draw_circle(circle)
    turtle.penup()
    turtle.right(90)
    turtle.forward(20)  
    turtle.left(90)
    turtle.pendown()

turtle.done()
