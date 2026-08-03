def longest_consecutive(nums: list[int]) -> int:
    """
    Find the length of the longest consecutive elements sequence in O(n) time.
    """
    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:
            length = 1
            while num + length in num_set:
                length += 1

            longest = max(longest, length)

    return longest


# Test Cases
assert longest_consecutive([100, 4, 200, 1, 3, 2]) == 4  # Sequence: [1, 2, 3, 4]
assert longest_consecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) == 9
assert longest_consecutive([]) == 0
