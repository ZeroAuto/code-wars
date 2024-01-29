# https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/python
def solution(nums):
    if nums:
        nums.sort()
        return nums
    else:
        return []


def oneline_solution(nums):
    return sorted(nums or [])
