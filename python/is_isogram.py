def is_isogram(string):
    word = string.lower()
    letters = set(word)

    for l in letters:
        if word.count(l) > 1:
            return False

    return True


def is_isogram_concise(string):
    return len(string) == len(set(string.lower()))
