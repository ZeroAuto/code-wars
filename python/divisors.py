# https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/python
def divisors(num):
    count = 0
    for x in range(1, num+1):
        if num % x == 0:
            count += 1
    return count


# len() works nicely here
def divisors_oneline(n):
    return len([x for x in range(1, n+1) if n % x == 0])
