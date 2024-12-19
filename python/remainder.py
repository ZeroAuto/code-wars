# https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/python

def remainder(a: int, b: int):
    smaller = min(a, b)
    larger = max(a, b)
    
    if smaller == 0:
        return None  # Return empty value if dividing by zero
    
    return larger % smaller
