def reverse_seq(n):
    result = []
    while n > 0:
        result.append(n)
        n = n - 1

    return result


def reverse_seq_range(n):
    return list(range(n, 0, -1))


def reverse_seq_list(n):
    return [x for x in range(n, 0, -1)]


print(reverse_seq_list(5))
print(reverse_seq_list(7))
