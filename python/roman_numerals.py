class RomanNumerals:
    def init(self):
        pass

    def from_roman(roman):
        values = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1}
        roman = roman[::-1]
        total = 0
        skip_next = False
        for i, char in enumerate(list(roman)):
            if not skip_next:
                if (i!=len(roman) - 1):
                    if (values[char] > values[roman[i + 1]]):
                        total += (values[char]-values[roman[i + 1]])
                        skip_next = True
                    else:
                        total += (values[char])
                else:
                    total += values[char]
            else:
                skip_next = False
        return total

    def to_roman(number):
        value_lst = [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'), (90, 'XC'),
        (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')]
        roman = ''
        while(number > 0):
            for i, j in value_lst:
                while number >= i:
                    roman += j
                    number -= i
        return roman


print(RomanNumerals.from_roman('XXI'))
print(RomanNumerals.from_roman('I'))
print(RomanNumerals.from_roman('IV'))
print(RomanNumerals.from_roman('MMVIII'))
print(RomanNumerals.from_roman('MDCLXVI'))

# def thing(str):
#     for idx, char in enumerate(list(str[::-1])):
#         print(char)
#         print(idx)
#
# thing('blah')

# def thing_2(arr):
#     for i, j in arr:
#         print(i)
#         print(j)
#
# thing_2([('b', 2), (1, 'a'), (3, 'c')])
