# https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/python

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


def gap(g, m, n):
    last_prime = None
    for n in range(m, n+1):
        if is_prime(n):
            if last_prime is not None and n - last_prime == g:
                return [last_prime, n]
            else:
                last_prime = n

    return None

print(gap(2,100,110))
print(gap(4,100,110))
print(gap(6,100,110)) # None
