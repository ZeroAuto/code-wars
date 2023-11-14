def update_light(current):
    return {"green": "yellow", "yellow": "red", "red": "green"}[current]
    # order = ['green', 'yellow', 'red']
    # current_index = order.index(current)
    # return current_index


def update_light_len(current):
    color = ["green", "yellow", "red"]
    return color[(color.index(current) + 1) % len(color)]


print(update_light_len('green'))
print(update_light_len('yellow'))
print(update_light_len('red'))
