function fridayTheThirteenths(start, end) {
    let arr = [];
    end = end || start;
    for (let i = start; i <= end; i++) {
      for (let x = 1; x < 13; x++) {
        let date = new Date(i, x - 1, 13);
        if (date.getDay() === 5) arr.push(x + '/' + 13 + '/' + i);
      }
    } return arr.join(' ');
}