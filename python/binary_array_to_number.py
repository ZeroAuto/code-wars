def binary_array_to_number(arr):
    result = 0
    for digit in arr:
        result = (result << 1) | int(digit)

    return result


def binary_array_to_number_oneline(arr):
    return int("".join(str(a) for a in arr), 2)


print(binary_array_to_number_oneline([0, 0, 0, 1]))  # 1
print(binary_array_to_number_oneline([0, 0, 1, 0]))  # 2
print(binary_array_to_number_oneline([0, 1, 0, 1]))  # 5
print(binary_array_to_number_oneline([1, 0, 0, 1]))  # 9
print(binary_array_to_number_oneline([0, 1, 1, 0]))  # 6
print(binary_array_to_number_oneline([1, 1, 1, 1]))  # 15
print(binary_array_to_number_oneline([1, 0, 1, 1]))  # 11
