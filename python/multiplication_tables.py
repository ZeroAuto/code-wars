# https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/python


def multi_table(num):
    ints = list(range(1,11))
    tables = []

    for int in ints:
        result = int * num
        tables.append(f"{int} * {num} = {result}")

    return "\n".join(tables)

# there is a way to do it in one line
def multi_table_oneline(num):
    "\n".join(f'{i} * {num} = {i * num}' for i in range(1,11))
