function shortestStepsToNum(num) {
    let steps = 0;
    while (num > 1) {
      if (num % 2 !== 0) {
        num -= 1;
        steps++;
      } else {
        num /= 2;
        steps++;
      }
    } return steps;
}