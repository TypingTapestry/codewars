function dataReverse(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (i === 0 || i % 8 === 0) arr.unshift(data.slice(i, i + 8));
    } return arr.flat();
}