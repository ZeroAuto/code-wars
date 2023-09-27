def queue_time(customers, n):
    # tills = [0]*n
    # for i in customers:
    #     tills[0] += 1
    #     tills.sort()
    # return max(tills)
    time = 0
    while len(customers[:]) > 0:
        customers[:n] = [i-1 for i in customers[:n]]
        customers = [i for i in customers if i != 0]
    time += 1
    return(time)


print(queue_time([], 1)) # 0
print(queue_time([5], 1)) # 5
print(queue_time([2], 5)) # 2
print(queue_time([1,2,3,4,5], 1)) # 15
print(queue_time([1,2,3,4,5], 100)) # 5
print(queue_time([2,2,3,3,4,4], 2)) # 9
