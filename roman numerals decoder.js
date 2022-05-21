function solution(roman) {
    let key = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    };
    let numbers = roman.split('');
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (key[numbers[i]] < key[numbers[i + 1]]) {
        sum += key[numbers[i + 1]] - key[numbers[i]];
        i++;
      } else sum += key[numbers[i]];
    } return sum;
}