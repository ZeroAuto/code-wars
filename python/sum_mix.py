def sum_mix(arr):
    return sum(map(int, arr))


print(sum_mix([1, '2', '3']))  # 6
print(sum_mix(['2', 3, '4']))  # 9
