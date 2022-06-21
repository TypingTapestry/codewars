function createFunctions(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(function () {
        return i;
      })
    } return arr;
}