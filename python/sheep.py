def count_sheeps(sheep):
    count = 0
    for s in sheep:
        if s:
            count = count +1
    return count

def count_sheep_2(sheep):
    return sheep.count(True)
