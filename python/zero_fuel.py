def zero_fuel(distance, mpg, fuel):
    return mpg * fuel >= distance
    

print(zero_fuel(50, 25, 2))
print(zero_fuel(100, 50, 1))
