# https://www.codewars.com/kata/5808e2006b65bff35500008f/train/python
def position(alphabet):
    alpha_list = "abcdefghijklmnopqrstuvwxyz"
    position = 0
    for index, letter in enumerate(list(alpha_list)):
        if letter == alphabet:
            position = index + 1
    return f"Position of alphabet: {position}"


# I always forget about ord
def position_ord(alphabet):
    return f"Position of alphabet {ord(alphabet) - 96}"
