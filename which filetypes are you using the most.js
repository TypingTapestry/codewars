function solve(files) {
    if (files.length === 0) return [];
    let arr = [];
    for (let i = 0; i < files.length; i++) {
      let array = files[i].split('.');
      let count = 0;
      for (let x = 0; x < arr.length; x++) if (arr[x][1] === '.' + array[array.length - 1]) {
        arr[x][0]++;
        count++;
      } if (count === 0) arr.push([1, '.' + array[array.length - 1]]);
    }
    for (let i = 0; i < arr.length - 1; i++) for (let x = i + 1; x < arr.length; x++) if (arr[i][0] < arr[x][0]) {
      let y = arr[i];
      arr[i] = arr[x];
      arr[x] = y;
    }
    let z = [];
    let i = 0;
    while (arr[i][0] === arr[0][0]) z.push(arr[i++][1]);
    return z.sort();
}