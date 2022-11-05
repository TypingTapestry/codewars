function pascal(depth) {
    let ret = [[1]];
    if (depth === 1) return [[1]];
    for (let i = 1; i < depth + 1; i++) {
      let arr = [];
      for (let x = 0; x < i; x++) {
        arr[x] = (ret[i - 1][x] ? ret[i - 1][x] : 0) + (ret[i - 1][x - 1] ? ret[i - 1][x - 1] : 0);
      } ret[i] = arr;
    } return ret.slice(1);
}