def fake_bin(n):
    result = ""
    for digit in n:
        if int(digit) < 5:
            result = result + "0"
        else:
            result = result + "1"

    return result


def fake_bin_oneline(n):
    return "".join("0" if int(digit) < 5 else "1" for digit in n)


def fake_bin_maketrans(n):
    return n.translate(str.maketrans('123456789', '000011111'))


print(fake_bin_maketrans("45385593107843568"))
print(fake_bin_maketrans("509321967506747"))
print(fake_bin_maketrans("366058562030849490134388085"))
