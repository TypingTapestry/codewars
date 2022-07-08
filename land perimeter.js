function landPerimeter(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let x = 0; x < arr[0].length; x++) {
        if (arr[i][x] === 'O') continue;
        num += 4;
        if (i !== arr.length - 1 && arr[i + 1][x] !== 'O') num -= 2;
        if (x !== arr[0].length - 1 && arr[i][x + 1] !== 'O') num -= 2;
      }
    } return 'Total land perimeter: ' + num;
}