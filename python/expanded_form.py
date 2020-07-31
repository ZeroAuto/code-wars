# https://www.codewars.com/kata/5842df8ccbd22792a4000245

def expanded_form(num):
    result = []
    num_list = list(str(num))
    for i, n in enumerate(num_list):
        if n != '0':
            z = len(num_list) - i
            print(z)
            result.append(n.ljust(z, '0'))
    p = " + "
    return p.join(result)

def alt_expanded_form(num):
    num = list(str(num))
    return ' + '.join(x + '0' * (len(num) - y - 1) for y,x in enumerate(num) if x != '0')

print(expanded_form(12)) # 10 + 2
print(expanded_form(42)) # 40 + 2
print(expanded_form(70304)) # 70000 + 300 + 4
