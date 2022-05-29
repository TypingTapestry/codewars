function josephusSurvivor(a, b) {
    let arr = [];
    let pos = 0;
    for (let i = 1; i < (a + 1); i++) {
      arr.push(i);
    }
    while (arr.length > 1) {
      pos = pos + (b - 1);
      while (pos > arr.length - 1) {
        pos = pos - arr.length;
      } arr.splice(pos, 1);
    } return arr[0];
}