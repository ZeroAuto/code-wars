def descending_order(num):
    arr = list(str(num))
    arr.sort()
    arr.reverse()
    return int("".join(arr))


def descending_order_oneline(num):
    return int("".join(sorted(list(str(num)), reverse=True)))


print(descending_order_oneline(42145))
print(descending_order_oneline(145263))
print(descending_order_oneline(123456789))
