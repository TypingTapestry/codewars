function rot13(message) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.split('').map(function(char) {
      let i = alphabet.indexOf(char);
      if (i < 0) {
        return char;
      } return cipher[i];
    }).join('');
}