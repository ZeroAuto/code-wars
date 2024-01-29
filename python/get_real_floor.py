# https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/python
def get_real_floor(n):
    if n <= 0:
        return n
    elif n > 0 and n < 13:
        return n - 1
    else:
        return n - 2


def get_real_floor_oneline(n):
    return n if n < 1 else n - 1 if n < 13 else n - 2


# this one is clever I guess true is equal to 1 and false equal to 0 just like in Javascript
def clever(n):
    return n - (n > 0) - (n > 13)
