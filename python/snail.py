def snail(arr):
    result = []
    while len(arr) > 0:
        # right first
        result += arr[0]
        del arr[0]

        if len(arr) > 0:
            # down
            for i in arr:
                result += [i[-1]]
                del i[-1]

            # left
            if arr[-1]:
                result += arr[-1][::-1]
                del arr[-1]

            # up
            for i in reversed(arr):
                result += [i[0]]
                del i[0]

    return result


print(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))  # [1, 2, 3, 6, 9, 8, 7, 4, 5]
print(snail([[1, 2, 3], [8, 9, 4], [7, 6, 5]]))  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(snail([[1, 2, 3, 4], [5, 6, 7, 8], [9, 1, 2, 3], [4, 5, 6, 7]]))
