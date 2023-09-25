def reverse(str):
    return str[::-1]

def reverse_words(str):
    str_list = str.split(' ')
    return ' '.join(map(reverse, str_list))

print(reverse_words('This is an example!'))
print(reverse_words('double spaces'))
