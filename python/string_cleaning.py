# https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/python

def string_cleaning(s):
    return ''.join([char for char in s if not char.isdigit()])
