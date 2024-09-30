# https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/python

def multiplication_table(n):
    table = []
    for i in range(1, n + 1):
        row = []
        for j in range(1, n + 1):
            row.append(i * j)
        table.append(row)
    return table
