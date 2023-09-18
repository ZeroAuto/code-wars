# https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/python

# def create_array(n):
#     res=[]
#     i=1
#     while i<=n: res+=[i]
#     return res

def create_array(n):
    result = []
    i = 1
    while i <= n:
        result += [i]
        i += 1
    return result
    
