# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python
def high_and_low(str):
    arr = sorted([int(n) for n in str.split(" ")])
    return f"{arr[-1]} {arr[0]}"


# I always forget about min and max
def high_and_low_min_max(str):
    arr = sorted([int(n) for n in str.split(" ")])
    return f"{max(arr)} {min(arr)}"


print(high_and_low_min_max("4 2 3 1 6"))
