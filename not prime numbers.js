function notPrimes(a, b) {
    let arr = [];
    for (let i = a; i < b; i++) if (!/[014689]/.test(i)) for (let x = 2; x <= Math.sqrt(i); x++) if (i % x === 0) {
      arr.push(i);
      break;
    } return arr;
}