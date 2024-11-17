# https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

def largest_pair_sum(numbers):
    numbers.sort()
    return numbers[-1] + numbers[-2]

# don't forget that max is a thing
def largest_pair_sum_max(numbers):
    a = max(numbers)
    numbers.remove(a)
    b = max(numbers)
    return a + b


# lambdas are also a thing
largest_pair_sum_lambda = lambda a: max(a) + sorted(a)[-2]
