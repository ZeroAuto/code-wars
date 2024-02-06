# https://www.codewars.com/kata/52f3149496de55aded000410/solutions/python
def sum_digits(num):
    total = 0
    for n in str(abs(num)):
        total += int(n)
    return total


# use the built in sum function always forget about that
def sum_digits_sum(num):
    return sum(int(d) for d in str(abs(num)))
