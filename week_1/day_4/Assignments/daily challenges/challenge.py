import math

# Step 1 & 2: Create the Pagination class
class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            items = []
        self.items = items
        self.page_size = page_size
        self.current_idx = 0  # internal 0-based index
        self.total_pages = math.ceil(len(items) / page_size) if items else 0

    # Step 3: Get items visible on the current page
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    # Step 4: Navigation methods
    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range.")
        self.current_idx = page_num - 1
        return self  # allow chaining

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    # Step 5: Custom __str__ method
    def __str__(self):
        return "\n".join(self.get_visible_items())


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

# Page 1
print(p.get_visible_items())

# Page 2
p.next_page()
print(p.get_visible_items())


# Last page
p.last_page()
print(p.get_visible_items())


# Go to page 10 → raises ValueError because total pages = 7
try:
    p.go_to_page(10)
except ValueError as e:
    print(e)  
# Page number out of range

# Go to page 0 → also raises ValueError
try:
    p.go_to_page(0)
except ValueError as e:
    print(e)  
# Page number out of range

# Correct usage: go to last page
p.go_to_page(7)
print(p.current_idx + 1)

