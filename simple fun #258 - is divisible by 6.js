function isDivisibleBy6(s) {
    let arr = [];
    let num = 0;
    for (let i = 0; i < 10; i++) {
      num = s.replace('*', i);
      if (num.split('').map(x => Number(x)).reduce((a, b) => a + b) % 3 === 0 && num[num.length - 1] % 2 === 0) arr.push(num);
    } return arr;
}