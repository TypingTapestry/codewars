function solution(a) {
    let arr = [];
    let jumps = 0;
    let i = 0;
    while (true) {
      jumps++;
      if (a[i] + i > a.length - 1 || a[i] + i < 0) break;
      else if (arr.indexOf(i) >= 0 || a.length === 0) {
        jumps = -1;
        break;
      } else {
        arr.push(i);
        i += a[i];
      }
    } return jumps;
}