def find_short(s):
    lst = s.split(" ")
    last_word = sorted(lst, key=len)[0]
    return len(last_word)


def find_short_min(s):
    return min(len(x) for x in s.split())


def find_short_len(s):
    return len(min(s.split(" "), key=len))


print(find_short_len("bitcoin is moronic and will never take over the world"))
print(find_short_len("let's forget that you said that"))
