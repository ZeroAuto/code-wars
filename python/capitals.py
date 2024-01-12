def capitals(word):
    result = []
    for i, char in enumerate(list(word)):
        if char == char.upper():
            result.append(i)

    return result


def capitals_concise(word):
    return [i for (i, char) in enumerate(word) if char.isupper()]
