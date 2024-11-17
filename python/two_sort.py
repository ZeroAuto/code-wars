# https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/python

def two_sort(lst):
    sorted_lst = sorted(lst)
    return "***".join(list(sorted_lst[0]))


def two_sort_min(lst):
    return "***".join(min(lst))
