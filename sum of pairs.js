function sumPairs(ints, s) {
    let numbersSeen = {};
    for (let i = 0; i < ints.length; i++) {
      let currentNumber = ints[i];
      if (numbersSeen[s - currentNumber]) return [s - currentNumber, currentNumber];
      numbersSeen[currentNumber] = true;
    }
}