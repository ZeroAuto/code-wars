def past(h, m, s):
    total = h * 60 * 60
    total += m * 60
    total += s

    return total * 1000

def past_online(h, m, s):
    return (3600 * h + 60 * m + s) * 1000

print(past(0,1,1)) # 61000
print(past(1,1,1)) # 3661000
print(past(0,0,0)) # 0
print(past(1,0,1)) # 3601000
