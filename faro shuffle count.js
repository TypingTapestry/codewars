function faroCount(deckSize) {
    let count = 0;
    let num = 1;
    do {
      count++;
      num = (num % 2 * deckSize + num) / 2 | 0;
    } while (num !== 1) return count;
}