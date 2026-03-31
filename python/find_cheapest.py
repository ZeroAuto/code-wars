
marchPrices = [120, 150, 450, 100, 95, 110,
               300, 250, 180, 190, 210, 90, 85, 105]


print(len(marchPrices))


def find_cheapest(price_array, k):
    if len(price_array) < k:
        return {"start_index": -1, "total": 0}

    start_index = 0
    total = sum(price_array[:k])

    for i in range(k-1, len(price_array)):
        print(i)
        if i == len(price_array) - k + 1:
            break

        temp = sum(price_array[i:i+k])
        # temp = 0
        #
        # for j in range(k):
        #     temp = temp + price_array[i + j]

        if temp < total:
            start_index = i
            total = temp

    return {"start_index": start_index, "total": total}


print(find_cheapest(marchPrices, 3))
