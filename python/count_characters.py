def count(s):
    char_dict = {}

    for l in s:
        if l in char_dict:
            char_dict[l] +=1
        else:
            char_dict[l] = 1

    return char_dict

# apparently there is a count function on the string object
def count_oneline(s):
    return {i: s.count(i) for i in s}

print(count_oneline('aba'))
print(count_oneline(''))
print(count_oneline('aa'))
print(count_oneline('aabb'))
