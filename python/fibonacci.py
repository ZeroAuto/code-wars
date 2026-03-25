# https://www.codewars.com/kata/53d40c1e2f13e331fc000c26/train/python
def fib(n):
    is_pos = abs(n) == n
    i = abs(n)
    arr = [0,1]
    while len(arr) < i + 1:
        arr.append(arr[-2] + arr[-1])
    return arr[i] if is_pos else arr[i] * -1

print(fib(0)) # 0
print(fib(1)) # 1
print(fib(2)) # 1
print(fib(3)) # 2
print(fib(4)) # 3
print(fib(5)) # 5
print(fib(6)) # 8
print(fib(7)) # 13
print(fib(8)) # 21
print(fib(-1)) # 1
