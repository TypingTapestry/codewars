function pairOfShoes(shoes) {
    let arr = shoes.map(shoe => (shoe[0] || -1) * shoe[1]);
    while (arr.length) {
      let idx = arr.indexOf(-arr.pop());
      if (!~idx) return false;
      arr.splice(idx, 1);
    } return true;
}