def same_structure_as(original, other):
    original_list = isinstance(original, list)
    other_list = isinstance(other, list)
    if original_list:
        original = get_lists([], original)
    if other_list:
        other = get_lists([], other)
    return original == other


def get_lists(empty, list_arg):
    empty.append(len(list_arg))
    for i in list_arg:
        if isinstance(i, list):
            empty.append(len(i))
            get_lists(empty, i)
        else:
            empty.append(1)

    return empty


print(same_structure_as([1, [1, 1]], [2, [2, 2]]))
print(same_structure_as([1, [1, 1]], [[2, 2], 2]))
print(same_structure_as([[[], []]], [[[], []]]))
