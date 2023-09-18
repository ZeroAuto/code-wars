const DNAStrand = dna => {
  return dna.split('').map(n => {
    let result;
    switch (n) {
      case 'T':
        result = 'A';
        break;
      case 'A':
        result = 'T'
        break;
      case 'G':
        result = 'C';
        break;
      case 'C':
        result = 'G'
    }
    return result;
  }).join('');
};

console.log(DNAStrand('AAAA')); // TTTT
console.log(DNAStrand('ATTGC')); // TAACG
console.log(DNAStrand('GTAT')); // CATA
