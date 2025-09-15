
# 🌟 Exercise 2: What's your name?

def get_full_name(first_name, last_name, middle_name=""):
    """
    Returns the full name.
    Middle name is optional.
    Each part is capitalized.
    """
    if middle_name:  # If middle name is provided
        full_name = f"{first_name} {middle_name} {last_name}"
    else:  # Only first and last name
        full_name = f"{first_name} {last_name}"
    
    # Capitalize each word
    return full_name.title()

# Test examples
name1 = get_full_name(first_name="john", middle_name="hooker", last_name="lee")
print(name1)  # Output: John Hooker Lee

name2 = get_full_name(first_name="bruce", last_name="lee")
print(name2)  # Output: Bruce Lee




