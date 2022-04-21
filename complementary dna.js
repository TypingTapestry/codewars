function DNAStrand(dna) {
    let output = '';
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
          case 'A':
            output += 'T';
            break;
          case 'T':
            output += 'A';
            break;
          case 'G':
            output += 'C';
            break;
          case 'C':
            output += 'G';
            break;
          default: 0;
      }
    } return output;
}