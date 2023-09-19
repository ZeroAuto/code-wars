# https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/python

# def create_array(n):
#     res=[]
#     i=1
#     while i<=n: res+=[i]
#     return res

def create_array_orig(n):
    result = []
    i = 1
    while i <= n:
        result += [i]
        i += 1
    return result
    
def create_array(n):
    return [i for i in range(1,n+1)]

def create_array_list(n):
    return list(range(1,n + 1))
