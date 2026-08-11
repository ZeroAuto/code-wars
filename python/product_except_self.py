def product_except_self(nums: list[int]) -> list[int]:
    """
    Return an array where answer[i] is equal to the product of all 
    elements of nums except nums[i], calculated in O(n) time without division.
    """
    n = len(nums)
    result = [1] * n

    left_product = 1;
    for i in range(n):
        result[i] = left_product
        left_product *= nums[i]

    right_product = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right_product
        right_product *= nums[i]

    return result


# Test Cases
assert product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
assert product_except_self([-1, 1, 0, -3, 3]) == [0, 0, 9, 0, 0]