let beeramid = function(bonus, price) {
    let levels = 0;
    let spent = 0;
    while (spent < bonus) {
      let beers = (levels + 1) ** 2;
      let total = beers * price;
      spent += total;
      if (spent <= bonus) {
        levels++;
      }
    } return levels;
}