def convert(s):
    if s == "T":
        return "U"
    else:
        return s


def dna_to_rna(dna):
    return "".join(list(map(convert, dna)))


def DNAtoRNA(dna):
    return dna.replace('T', 'U')


print(DNAtoRNA("TTT")) # UUU
print(DNAtoRNA("GCAT")) # GCAU
