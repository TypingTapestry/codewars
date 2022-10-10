function getCountedNucleotides(genCode) {
    let obj = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    for (let key of genCode.toUpperCase()) obj[key]++;
    return obj;
}