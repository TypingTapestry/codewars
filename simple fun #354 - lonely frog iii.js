function jumpTo(x, y) {
    let step = 0;
    while (x < y) {
      if (y % 2 === 0) {
        if (x > y - y / 2) y--;
        else y /= 2;
      } else y--;
      step++;
    } return step;
}