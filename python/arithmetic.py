# https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/python
def arithmetic(a, b, operator):
    return a+b if operator == 'add' else a-b if operator == 'subtract' else a*b if operator == 'multiply' else a/b


def arithmetic_obj(a, b, operator):
    return {
        "add": a + b,
        "subtract": a - b,
        "multiply": a * b,
        "divide": a / b,
    }[operator]
