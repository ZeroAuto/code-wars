def feast_orig(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]


def feast(beast, dish):
    return beast.startswith(dish[0]) and beast.endswith(dish[-1])


print(feast('great blue heron', 'garlic naan'))  # True
print(feast('chickadee', 'chocolate cake'))  # True
print(feast('brown bear', 'bear claw'))  # False
