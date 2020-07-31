# https://www.codewars.com/kata/54da5a58ea159efa38000836

def find_it(arr):
    dic = {}
    for n in arr:
        if n in dic:
            dic[n] += 1
        else:
            dic[n] = 1

    for k, v in dic.items():
        if v % 2 != 0:
            return k

# can use count array method instead of building a dictionary
def alt_find_it(seq):
    for i in seq:
        if seq.count(i)%2!=0:
            return i


find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
alt_find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
