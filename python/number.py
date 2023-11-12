def number(lines):
    result = []

    for i, line in enumerate(lines):
        result.append(f"{i + 1}: {line}")

    return result


def number_oneline(lines):
    return [f"{n}: {line}" for n, line in enumerate(lines, start=1)]


print(number_oneline(['a', 'b', 'c']))
