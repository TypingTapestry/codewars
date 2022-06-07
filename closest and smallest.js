function closest(str) {
    let arr = [];
    let min = Number.MAX_VALUE;
    let weight = w => w.split('').reduce((acc, cur) => acc + cur++, 0);
    let num = str.split(' ').map((x, y) => [weight(x), y, x++]).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    for (let i = 1; i < num.length; i++) {
      if (num[i][0] - num[i - 1][0] < min) {
        arr = [num[i - 1], num[i]];
        min = num[i][0] - num[i - 1][0];
      }
    } return arr;
}