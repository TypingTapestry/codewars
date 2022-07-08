function sierpinski(n) {
    let arr = ['L'];
    let num = 2 ** n;
    for (let i = 1; i < num; i++) {
      arr.push('L');
      for (let x = 2, y = i * 2; x < y; x += 2) arr[i] += ' ' + (arr[i - 1][x] === arr[i - 1][x - 2] ? ' ' : 'L');
      arr[i] += ' L';
    } return arr.join('\n');
}