function sumNestedNumbers(array) {
    let sum = 0;
    let count = 1;
    while (array.length !== 0) {
      let arr = [];
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') sum += Math.pow(array[i], count);
        else for (let x = 0; x < array[i].length; x++) arr.push(array[i][x]);
      }
      array = arr;
      count++;
    } return sum;
}