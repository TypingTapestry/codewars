function runningAverage() {
    let num = 0;
    let total = 0;
    return function (val) {
      num += 1;
      total += val;
      return Math.round(total / num * 100) / 100;
    }
}