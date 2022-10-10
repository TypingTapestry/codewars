function Mormons(startingNumber, reach, target) {
    let count = 0;
    while (startingNumber < target) {
      count++;
      startingNumber += startingNumber * reach;
    } return count;
}