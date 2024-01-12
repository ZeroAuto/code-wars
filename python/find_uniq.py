def find_uniq(arr):
    occurences = {}

    for n in arr:
        if n in occurences:
            occurences[n] += 1
        else:
            occurences[n] = 1

    for i, c in occurences.items():
        if c == 1:
            return i

    return None


# I always forget that sets are a thing
def find_uniq_set(arr):
    a, b = set(arr)
    return a if arr.count(a) == a else b
