function solve(str) {
    let count = 0;
    if (str.length % 2 !== 0) return -1;
    while (str.includes('()')) str = str.replace('()', '')
    for (let i = 0; i < str.length; i += 2) {
      if (str.slice(i, i + 2) === ')(') count += 2;
      else count++;
    } return count;
}