function high(x) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let words = x.split(' ');
    let highScore = 0;
    let highWordScore = '';
    for (let word of words) {
      let sumOfLetters = 0;
      for (let letter of word) {
        sumOfLetters += alphabet.indexOf(letter) + 1;
      }
      if (sumOfLetters > highScore) {
        highScore = sumOfLetters;
        highWordScore = word;
      }
    } return highWordScore;
}