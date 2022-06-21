function highestRank(arr) {
    let num = 0;
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      let y = 0;
      for (let z = i + 1; z < arr.length; z++) {
        if (arr[i] === arr[z]) y += 1;
      } if (y > x) {
          x = y;
          num = arr[i];
      }
    } return num;
}