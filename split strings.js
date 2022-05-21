function solution(str) {
    let output = new Array();
    let i = 0;
    if (str.length % 2 !== 0) {
      str += '_';
    }
    while (i < str.length) {
      output.push(str[i] + str[i + 1]);
      i += 2;
    } return output;
}