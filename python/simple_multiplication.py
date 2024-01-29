# https://www.codewars.com/kata/583710ccaa6717322c000105/train/python
def simple_multiplication(n):
    return n * 8 if n % 2 == 0 else n * 9


# clever since the modulo should equal 1 if the number is odd
def clever(n):
    return n * (8 + n % 2)
