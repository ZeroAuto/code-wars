# https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/python
def add_length(str):
    return [f"{x} {len(x)}" for x in str.split(" ")]
