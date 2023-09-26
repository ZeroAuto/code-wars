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
