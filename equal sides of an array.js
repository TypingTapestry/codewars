function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      let x = arr.slice(0, i);
      let y = arr.slice(i + 1, arr.length);
      function add(a, b) {
        return a + b;
      }
      let leftSum = x.reduce(add, 0);
      let rightSum = y.reduce(add, 0);
      if (leftSum === rightSum) {
        return i;
      }
      if (i === (arr.length - 1) && leftSum !== rightSum) {
        return -1;
      }    
    }
}