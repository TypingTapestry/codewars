let decodeMorse = function (morseCode) {
    return morseCode.trim().split('  ').map(function (word) {
      return word.split(' ').map(function (char) {
        return MORSE_CODE[char];
      }).join('');
    }).join(' ');
}