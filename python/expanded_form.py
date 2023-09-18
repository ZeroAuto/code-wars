# https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/python?collection=beginners-python-training

def expanded_form(n):
    result = []

    for index, digit in enumerate(str(n)[::-1]):
        if int(digit) != 0:
            result.append(digit + ('0' * index))

    return ' + '.join(result[::-1])
