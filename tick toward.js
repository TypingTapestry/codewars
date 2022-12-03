function tickToward(start, end) {
    let arr = [[start[0], start[1]]];
    while (start[0] !== end[0] || start[1] !== end[1]) {
      for (let i = 0; i < start.length; i++) {
        if (start[i] - end[i] > 0) start[i]--;
        if (start[i] - end[i] < 0) start[i]++;
      } arr.push([start[0], start[1]]);
    } return arr;
}