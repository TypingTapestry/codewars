function foldArray(array, runs) {
    let oldArr = array;
    let arr = [];
    for (let x = 0; x < runs; x++) {
      if (x > 0) {
        oldArr = arr;
        arr = [];
      }
      for (let i = 0; i < oldArr.length / 2; i++) {
        if (i === oldArr.length - i - 1) arr.push(oldArr[i]);
        else arr.push(oldArr[i] + oldArr[oldArr.length - i - 1]);
      }
    } return arr;
}