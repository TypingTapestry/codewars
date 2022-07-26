function sumDigNthTerm(initval, patternl, nthterm) {
    for (let i = 0; i < nthterm - 1; i++) initval += patternl[i % patternl.length];
    return initval.toString().split('').reduce((acc, cur) => acc + cur++, 0);
}