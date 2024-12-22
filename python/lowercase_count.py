# https://www.codewars.com/kata/56a946cd7bd95ccab2000055/solutions/python

def lowercase_count(str):
    return sum(1 for c in str if c.islower())
