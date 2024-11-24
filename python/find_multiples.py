#  https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/python

def find_multiples(int, limit):
    result = []
    num = int
    while num <= limit:
        result.append(num)
        num += int

    return result

# can use range

def find_multiples_range(integer, limit):
    return list(range(integer, limit+1, integer))
