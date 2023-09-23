def high_orig(x):
    abc = "abcdefghijklmnopqrstuvwxyz"
    current_leader = ""
    current_high_score = 0
    arr = x.split(' ')
    for word in arr:
        total = 0
        for l in word:
            total = total + abc.index(l) + 1
        if total > current_high_score:
            current_high_score = total
            current_leader = word

    return current_leader

# apparently there is a built in python method for that ord()
def high_with_ord(x):
    current_high_score = 0
    for word in x.split(' '):
        score = sum(ord(char) - 96 for char in word)
        if score > current_high_score:
            current_high_score = score
            current_leader = word

    return current_leader

# the most concise method, using both ord() and max()
def high(x):
    s, n = x.split(), [sum(ord(c) - 96 for c in y) for y in x.split()]
    return s[n.index(max(n))]

print(high('man i need a taxi'))
print(high('take me to semynak'))
