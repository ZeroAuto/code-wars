# def stairs_in_20(stairs):
#     total = 0
#     for weekday in stairs:
#         total += sum(weekday)
#     return total * 20
#
def stairs_in_20(stairs):
    total = sum(sum(day) for day in stairs)
    return total * 20
