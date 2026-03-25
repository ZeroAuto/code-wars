def strip_comments(string, markers):
    str_list = string.split("\n")

    return "\n".join(str_list)


def strip_after_first_char(s, markers):
    char_set = set(markers)
    for i, ch in enumerate(s):
        if ch in char_set:
            return
