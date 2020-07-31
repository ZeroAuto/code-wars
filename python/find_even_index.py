# https://www.codewars.com/kata/5679aa472b8f57fb8c000047

def find_even_index(arr):

    # it looks like enumerate could be used like and each_with_index
    # or forEach in Ruby and Javascript respectively
    for i, x in enumerate(arr):
        if sum(arr[0:i])==sum(arr[i+1:]):
            return i
    return -1

# enumerate docs: https://www.geeksforgeeks.org/enumerate-in-python/
# sum docs:
# print(sum([1,2,3,4,3,2,1]))
print(find_even_index([1,2,3,4,3,2,1]))
print(find_even_index([1,100,50,-51,1,1]))
print(find_even_index([1,2,3,4,5,6]))
