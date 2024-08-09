def fib(n):
    arr = [0,1]
    while len(arr) < n:
        arr.append(arr[-2] + arr[-1])
    # position = 2
    # while position <= n:
    #     arr.append(arr[position - 2] + arr[position - 1])
    #     position += 1
    
    return arr[n - 1]


print(fib(1)) # 0
print(fib(2)) # 1
print(fib(3)) # 1
print(fib(4)) # 2
print(fib(5)) # 3
print(fib(6)) # 5
print(fib(7)) # 8
print(fib(8)) # 13
