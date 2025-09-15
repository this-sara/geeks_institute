# 🌟 Exercise 3: Sum

def sum_pattern(X):
    """
    Returns the value of X + XX + XXX + XXXX
    Example: if X=3, returns 3 + 33 + 333 + 3333 = 3702
    """
    # Convert X to string to easily concatenate
    str_X = str(X)
    
    # Build XX, XXX, XXXX as strings and convert to int
    term1 = int(str_X)          # X
    term2 = int(str_X * 2)      # XX
    term3 = int(str_X * 3)      # XXX
    term4 = int(str_X * 4)      # XXXX
    
    # Sum all terms
    total = term1 + term2 + term3 + term4
    return total

# Test the function
X = int(input("Enter a number X: "))
result = sum_pattern(X)
print(f"The result of X + XX + XXX + XXXX is: {result}")
