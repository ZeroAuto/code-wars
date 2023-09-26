def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return []

    count = 0
    total = 0
    for n in arr:
        if n > 0:
            count += 1
        elif n < 0:
            total += n

    return [count, total]

def count_positives_sum_negatives_sum(arr):
    count = sum(1 for n in arr if n > 0)
    total = sum(n for n in arr if n < 0)
    return [count, total] if len(arr) else []

def count_positives_sum_negatives_concise(arr):
    if not arr: return arr
    return [sum(1 for n in arr if n > 0), sum(n for n in arr if n < 0)]
