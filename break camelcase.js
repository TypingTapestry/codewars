function solution(string) {
    let str = string.split('').map(function (char) {
      if (char === char.toUpperCase()) char = ' ' + char;
      return char;
    })
    return str.join('');
}