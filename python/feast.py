def feast(beast, dish):
    return beast[0] == dish[0] and beast[len(beast) - 1] == dish[len(dish) - 1]


print(feast('great blue heron', 'garlic naan'))  # True
print(feast('chickadee', 'chocolate cake'))  # True
print(feast('brown bear', 'bear claw'))  # False
