function toWeirdCase(string) {
    let str = '';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        str += ' ';
        count = 0;
      } else if (count % 2 === 0) {
        str += string[i].toUpperCase();
        count++;
      } else if (count % 2 !== 0) {
        str += string[i].toLowerCase();
        count++;
      }
    } return str;
}