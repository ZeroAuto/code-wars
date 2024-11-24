#https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python

def disemvowel(str):
    vowels = 'aeiouAEIOU'
    return ''.join(char for char in str if char not in vowels)
