# use a while loop, just can't forget to increment the count
def count_by_while(x, n):
    result = []

    count = 1
    while count <= n:
        result.append(x * count)
        count = count + 1

    return result
        
# use range instead of while loop, less chance of infinite loop
def count_by_range(x, n):
    result = []

    for num in range(1, n+1):
        result.append(x * num)

    return result

# just put it inside of a list
def count_by(x, n):
    return [i * x for i in range(1, n + 1)]
    # return list(range(x, n * x + 1, x))


print(count_by(1,10))
print(count_by(2,5)) # [2, 4, 6, 8, 10];
