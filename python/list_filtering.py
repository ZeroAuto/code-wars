def filter_list(lst):
    result = []
    for l in lst:
        if isinstance(l, int):
            result.append(l)
    return result

# it can always be done in oneline
def filter_list_oneline(lst):
    return [l for l in lst if isinstance(l, int)]
