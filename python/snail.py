def snail(arr):
    total = len(arr) * len(arr[0])
    count = 0
    result = []
    current_direction = 'left'

    while count < total:
        if current_direction == 'left':
            sub_count = 0
            for val in arr[0]:
                result.append(val)
                sub_count += 1
            arr.pop(0)
            count += sub_count
            current_direction = 'down'
        if current_direction == 'down':
            sub_count = 0
            for i in arr:
                idx = len(i) - 1
                result.append(i[idx])
                i.pop(idx)
                print(arr)
                sub_count += 1
            count += sub_count
            current_direction = 'right'
        if current_direction == 'right':
            for i in list(reversed(arr[len(arr) - 1])):
                result.append(i)
                sub_count += 1
            arr.pop(len(arr) - 1)
            count += sub_count
            current_direction = 'up'
        if current_direction == 'up':
            sub_count = 0
            for i in reversed(arr):
                result.append(i[0])
                i.pop(0)
                print(arr)
                sub_count += 1
            count += sub_count
            current_direction = 'left'

    if len(arr) > 0:
        result.append(arr[0][0])
    return result


print(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))  # [1, 2, 3, 6, 9, 8, 7, 4, 5]
print(snail([[1, 2, 3], [8, 9, 4], [7, 6, 5]]))  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(snail([[1, 2, 3, 4], [5, 6, 7, 8], [9, 1, 2, 3], [4, 5, 6, 7]]))
