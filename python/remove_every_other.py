def remove_every_other(my_list):
    return [w for (i, w) in enumerate(my_list) if i % 2 == 0 or i == 0]
