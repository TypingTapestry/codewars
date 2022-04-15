function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    }
    let sumPos = 0;
    let sumNeg = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        sumPos++;
      } else sumNeg += input[i];
    } return [sumPos, sumNeg];
}