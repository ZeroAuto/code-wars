from collections import defaultdict


def group_anagrams(strs: list[str]) -> list[list[str]]:
    """
    Given an array of strings, group the anagrams together.
    Returns groups of anagrams (order within output does not matter).
    """
    groups = defaultdict(list)

    for str in strs:
        sorted_str = "".join(sorted(str))
        groups[sorted_str].append(str)

    return list(groups.values())


# Test Cases
assert sorted(
    [sorted(g) for g in group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])]
) == sorted([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])
assert group_anagrams([""]) == [[""]]
assert group_anagrams(["a"]) == [["a"]]
