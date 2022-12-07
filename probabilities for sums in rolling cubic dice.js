function rolldiceSumProb(sum, dice) {
    let arr = [];
    let count = 0;
    let total = dice;
    for (let i = 0; i < dice; i++) arr[i] = 1;
    while (1) {
      let x = arr.length - 1;
      if (total === sum) count++;
      while (arr[x] === 6) x--;
      if (x < 0) break;
      arr[x]++;
      for (let i = x + 1; i < arr.length; i++) arr[i] = 1;
      total += 1 - 5 * (arr.length - 1 - x);
    } return count / Math.pow(6, dice);
}