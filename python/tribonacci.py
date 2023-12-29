def tribonacci_alt(signature, n):
    for i in range(3, n):
        signature.append(sum(signature[-3:]))
    return signature[:n]


def tribonacci(signature, n):
    if n <= 2:
        signature = signature[:n]
    else:
        for i in range(len(signature), n):
            signature.append(sum(signature[i-3:i]))

    return signature
