def longest_slide(pyramid):
    result = []
    final_arr = pyramid.pop()
    last_index = max(enumerate(final_arr), key=lambda x: x[1])[0]
    result.insert(0, last_index)

    for nums in reversed(pyramid):
        max = max_neighbor(nums, )

    return sum(result)

# def get_index(nums):
#     index = max(enumerate(nums), key=lambda x: x[1])[0]
#     return index

def max_neighbor(arr, idx):
    if not arr:
        return None  # or raise an error if empty array isn't allowed
    if len(arr) == 1:
        return arr[0]
    if idx >= len(arr):
        return arr[-1]
    if idx == 0:
        return arr[0]
    return max(arr[idx], arr[idx-1])
